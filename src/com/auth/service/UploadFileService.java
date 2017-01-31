package com.auth.service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.Response.ResponseBuilder;
import javax.ws.rs.core.UriInfo;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.dom4j.Element;

import cms.service.app.ApplicationConstants;
import cms.service.app.ServiceController;
import cms.service.app.ServiceManager;
import cms.service.exceptions.AuthenticationException;
import cms.service.template.TemplateQuery;
import cms.service.template.TemplateTable;
import cms.service.template.TemplateUtility;
import cms.service.util.FileUtility;
import cms.service.util.ResourceUtility;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.core.header.FormDataContentDisposition;
import com.sun.jersey.multipart.FormDataBodyPart;
import com.sun.jersey.multipart.FormDataMultiPart;
import com.sun.jersey.multipart.FormDataParam;
import com.testrepo.service.ProjectService;
 
@Path("/file")
public class UploadFileService {
 
	static Log logger = LogFactory.getLog(ProjectService.class);
	
	/*
	 * Pass url parameter=/file/upload?token=<Your Token>&relation=<relation1=value1;relation2=value2>
	 * In The resource configuration xml file in USER-INF/application.xml add a resource as below
	 * <Resource name="attachmentPath" 
             path="/Users/macuser/atlastutorial/testrepo/WebContent/"
             uri=""
              />
     * path= your webapp root directory
     * uri=<path after the root> for example if you have uri =testuser/doc, then the whole path for saving this document will be
     * /Users/macuser/atlastutorial/testrepo/WebContent/testuser/doc/
     * 
     * In that case the resource will be 
     * <Resource name="attachmentPath" 
             path="//Users/macuser/atlastutorial/testrepo/WebContent/testuser/doc/"
             uri="testuser/doc/"
              />
	 *
	 */
	
    @POST
    @Path("/upload")
    @Consumes(MediaType.MULTIPART_FORM_DATA)
    public Response uploadFile(
    		@Context UriInfo uriInfo,
    		@Context  HttpHeaders header,
    		@FormDataParam("file") InputStream uploadedInputStream,
    		@FormDataParam("file") FormDataContentDisposition fileDetail) throws AuthenticationException {
    	
    	TemplateUtility tu=new TemplateUtility();
    	Map<String,String> userdata=null;
    	Map<String,String> relationmap;
    	String groupuser;
    	String username=null;
    	String token=null;
    	String uploadedFileLocation;
    	String relation;
    	String attachmentid=null;
        Element resourceElm;
        String relationname=null;
        String relationvalue=null;
        String table="attachment";
        String insert="insert into table_attachment(objid,name,filepath,groupuser,gendate @relationname)"+
        		      "values(@objid,@name,@filepath,@groupuser,sysdate @relationval)";
    	
        		
        if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("table"))){
			
			table=uriInfo.getQueryParameters().getFirst("table");
			insert="insert into table_"+table+"(objid,name,filepath,groupuser,gendate @relationname)"+
      		      "values(@objid,@name,@filepath,@groupuser,sysdate @relationval)";
		}

    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
			
			userdata=ServiceManager.verifyUserToken(uriInfo.getQueryParameters().getFirst("token"));
		}
		if(userdata!=null &&!userdata.isEmpty()){
			groupuser=userdata.get("groupuser");
			username=userdata.get("username");
			insert=insert.replace("@groupuser", "'"+groupuser+"'");
			
		}else{
			throw new AuthenticationException("Authentication Failed for user="+username+" Token ="+ token);
		}
		
		 relation=uriInfo.getQueryParameters().getFirst("relation");
		String[] items=null;
		relationmap= new HashMap<String,String>();
		if(!tu.isEmptyValue(relation)){
			items=relation.split(";");
			for (String item : items){
				String[] rels=item.split("=");
				if(rels.length==2){
					relationmap.put(rels[0], rels[1]);
					if(!tu.isEmptyValue(rels[0])&&!tu.isEmptyValue(rels[1])){
						if(tu.isEmptyValue(relationname) &&tu.isEmptyValue(relationvalue) ){
							relationname=","+rels[0];
							relationvalue=",'"+rels[1]+"'";
						}else{
							relationname+=","+rels[0];
							relationvalue+=",'"+rels[1]+"'";
						}
					}
				}
				
			}
		}
		if(!relationmap.isEmpty()){
			attachmentid=new TemplateQuery().getPrimaryKey();
			insert=insert.replace("@objid", attachmentid);
			insert=insert.replace("@relationname", relationname);
			insert=insert.replace("@relationval", relationvalue);
		}
	
		resourceElm=ResourceUtility.getUserResourceElement("attachmentPath");
		String[] extentions=fileDetail.getFileName().split("\\.");
		String extention=extentions[extentions.length>0?(extentions.length-1):extentions.length];
		uploadedFileLocation=resourceElm.attributeValue("path")+table+"/"+attachmentid.replaceAll("'", "")+"."+extention;
		//uploadedFileLocation=resourceElm.attributeValue("path")+"/"+attachmentid.replaceAll("'", "")+"."+extention;
	    logger.info("uploadedFileLocation="+uploadedFileLocation);
        // save it
        boolean issuccess=saveToFile(uploadedInputStream, uploadedFileLocation);
        if(issuccess){
        	insert=insert.replace("@name", "'"+fileDetail.getFileName()+"'");
        	insert=insert.replace("@filepath", "'"+table+"/"+attachmentid.replaceAll("'", "")+"."+extention+"'");
        	//insert=insert.replace("@filepath", "'"+resourceElm.attributeValue("uri")+attachmentid.replaceAll("'", "")+"."+extention+"'");
			tu.executeQuery(insert);
        }
 
        String output = "File uploaded via Jersey based RESTFul Webservice to: " + uploadedFileLocation;
        
        logger.info(output);
 
        return Response.status(200).entity(output).build();
 
    }
    
    @GET
    @Path("/delete")
    @Produces({"application/xml"})
    public Response deleteFile(
    		@Context UriInfo uriInfo,
    		@Context  HttpHeaders header
    		) throws AuthenticationException {
    	
    	TemplateUtility tu=new TemplateUtility();
    	Map<String,String> userdata=null;
    	
    	String username=null;
    	String token=null;
    	String uploadedFileLocation;
    	String filename;
    	String table="attachment";
        Element resourceElm;
        
        if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("table"))){
			table=uriInfo.getQueryParameters().getFirst("table");
		}
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
			
			userdata=ServiceManager.verifyUserToken(uriInfo.getQueryParameters().getFirst("token"));
		}
		if(userdata!=null &&!userdata.isEmpty()){
			
			username=userdata.get("username");
			
		}else{
			throw new AuthenticationException("Authentication Failed for user="+username+" Token ="+ token);
		}
		
		 filename=uriInfo.getQueryParameters().getFirst("filename");
		
		resourceElm=ResourceUtility.getUserResourceElement("attachmentPath");
		//uploadedFileLocation=resourceElm.attributeValue("path")+filename;
		uploadedFileLocation=resourceElm.attributeValue("path")+table+"/"+filename;
		logger.info("Target File="+uploadedFileLocation);
		File target= new File(uploadedFileLocation);
		boolean issuccess=false;
		if(target.exists()){
			logger.info("Deleting target File="+uploadedFileLocation);
			issuccess=target.delete();
		}
		
		String output="failed";
        if(issuccess){
        	String[] its=filename.split("/");
        	if(its.length>=1){
        		String objid=its[its.length-1].split("\\.")[0];
        		String sql="delete from table_"+table+" where objid='"+objid+"'";
    			tu.executeQuery(sql);
    		    output = "File deleteed successfully: " + uploadedFileLocation;
    		        
        	}
        
        }
      
        logger.info(output);
 
        return Response.status(200).entity(output).build();
 
    }
 
    /*
     * Input parameter refid=feature.objid
     *                 name=feature.name
     *                 token
     */
    @GET
	@Path("/tempalte")
	@Produces("application/xml")
	public Response getFeatureTemplateFile(@Context UriInfo uriInfo,
    		@Context  HttpHeaders header
    		) throws AuthenticationException 
    {
    	
    	TemplateUtility tu=new TemplateUtility();
    	Map<String,String> userdata=null;
    	String pagestart="<?xml version=\"1.0\" encoding=\"UTF-8\"?>"+
    	                 "\n<!--This page is a simple skeleton for building all test scenarios automation"+
    			         " \nYou should replace the injector with actual injector @taglib:your_taglib_name.your_injector_name"+
    			         " \nHowever, you can add multiple different validators with multiple test steps within a single action container"+
    			         " \nin combination with Seleneium and web service, mobile, junit, TestNg, SQL etc."+
    			         " \nto build complex end to end tests. "+
    			         " \nYou can also add assert containers within each validators.There are many types of operators and varaible combinations supported.  "+
    			         " \nBelow are just 2 simple examples one is with hardcoded expected value and other is using parameter input either from dataset in XLS or local varible defined within Validator container "+
    			         "\n<assert name=\"Verify your expected result\" descriptor=\"VARCHAR\" output=\"junit:v_read_from_browser_variable\" value=\"Hardcoded Text Value\" operator=\"Has\" />"+
    			         " \n<assert name=\"Verify expected=@input_from_xls value\" descriptor=\"VARCHAR\" output=\"junit:v_read_from_browser_variable\" value=\"@input_from_xls\" operator=\"Has\" />"+
    			         "\nPlease reffer to your training manual or FAQ documents for details. "+
    			         " -->"+
					     "\n<page name=\"@refid\" description=\"@featurename\">";
    	String pageclose="\n\n</page>";
    	String action="";
    	String username=null;
    	String token=null;
    	String uploadedFileLocation;
    	String filename="feature_template.xml";
    	String refid="";
    	String featurename;
    	String table="feature";
        Element resourceElm;
       
        if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("refid"))){
        	refid=uriInfo.getQueryParameters().getFirst("refid");
        	pagestart=pagestart.replace("@refid", refid);
		}
        if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("name"))){
        	featurename=uriInfo.getQueryParameters().getFirst("name");
        	pagestart=pagestart.replace("@featurename", featurename);
		}
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
			
			userdata=ServiceManager.verifyUserToken(uriInfo.getQueryParameters().getFirst("token"));
		}
		if(userdata!=null &&!userdata.isEmpty()){
			
			username=userdata.get("username");
			
		}else{
			throw new AuthenticationException("Authentication Failed for user="+username+" Token ="+ token);
		}
		
		String email_template_path=this.getWebAppPath()+"src"
				+File.separator+"template"+File.separator+"action_template.txt";

		 String body=FileUtility.readFileContent(email_template_path);
		 
		 TemplateTable actions=tu.getResultSet("Select *from table_scenerio where scenerio2feature='"+refid+"'");
		 if(actions.getRowCount()>0){
			 for (int i=0;i<actions.getRowCount();i++){
				 String tmpaction=body;
				 String actionid=actions.getFieldValue("objid", i);
				 tmpaction=tmpaction.replaceAll("@actionid", actionid);
				 String actionname=actions.getFieldValue("name", i);
				 tmpaction=tmpaction.replaceAll("@actionname", actionname);
				 action+="\n\n"+tmpaction;
			 }
		 }
		resourceElm=ResourceUtility.getUserResourceElement("attachmentPath");
		//uploadedFileLocation=resourceElm.attributeValue("path")+filename;
		uploadedFileLocation=resourceElm.attributeValue("path")+table+"/"+filename;
		FileUtility.createTextFile(uploadedFileLocation, pagestart+action+pageclose);
		File file = new File(uploadedFileLocation);

		ResponseBuilder response = Response.ok((Object) file);
		response.header("Content-Disposition",
			"attachment; filename=feature_template.xml");
		return response.build();

	}
    // save uploaded file to new location
    private boolean saveToFile(InputStream uploadedInputStream, String uploadedFileLocation) {
 
        try {
            OutputStream out = null;
            int read = 0;
            byte[] bytes = new byte[1024];
 
            out = new FileOutputStream(new File(uploadedFileLocation));
            while ((read = uploadedInputStream.read(bytes)) != -1) {
                out.write(bytes, 0, read);
            }
            out.flush();
            out.close();
            
            return true;
        } catch (IOException e) {
 
            e.printStackTrace();
        }
        return false;
 
    }
    
    /**
     * upload the given file
     * 
     * inspired by
     * http://neopatel.blogspot.de/2011/04/jersey-posting-multipart-data.html
     * 
     * @param url
     * @param uploadFile
     * @return the result
     * @throws IOException
     */
    public String upload(String url, File uploadFile) throws IOException {
        WebResource resource = Client.create().resource(url);
        FormDataMultiPart form = new FormDataMultiPart();
        form.field("fileName", uploadFile.getName());
        FormDataBodyPart fdp = new FormDataBodyPart("content",
                new FileInputStream(uploadFile),
                MediaType.APPLICATION_OCTET_STREAM_TYPE);
        form.bodyPart(fdp);
        String response = resource.type(MediaType.MULTIPART_FORM_DATA).post(String.class, form);
        return response;
    }
    
    public String getWebAppPath(){
    	
   	 String path = ServiceController.contextPath.split("WEB-INF")[0];
   	 return path;
   }
 
}
