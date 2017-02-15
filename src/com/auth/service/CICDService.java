
		package com.auth.service;
		
				
		import java.io.BufferedReader;
		import java.io.File;
		import java.io.InputStreamReader;
		import java.util.HashMap;
		import javax.ws.rs.Consumes;
		import com.sun.jersey.multipart.FormDataParam;
		import cms.service.util.FileUtility;
		import javax.ws.rs.POST;
		import javax.ws.rs.Path;
		import javax.ws.rs.Produces;
		import javax.ws.rs.core.Context;
		import javax.ws.rs.core.HttpHeaders;
		import javax.ws.rs.core.MediaType;
		import javax.ws.rs.core.UriInfo;
		import org.apache.commons.logging.Log;
		import org.apache.commons.logging.LogFactory;
		import cms.service.dhtmlx.Rows;
		import cms.service.template.TemplateUtility;
		import cms.service.util.ItemUtility;
		import cms.service.util.PrintTime;
		import cms.service.exceptions.DaoException;
		import cms.service.exceptions.AuthenticationException;
		import com.testrepo.dao.ServicerepoDao;
		
		/*
		*  URL Parameters:
		*  
		*  Mandatory : loginname, groupuser, token i.e  {Base URL}/project/{id}/estimation?loginname=abc@example.com&groupuser=cdf@eaxmple.com&token=2343434334444
		*  
		*  Optional : id= parent objid for any child url i.e {Base URL}/project/{id}/estimation?loginname=abc@example.com&groupuser=cdf@eaxmple.com&token=2343434334444
		*  
		*  Optional: page, pagesize for search i.e {Base URL}/project/{id}/estimation?loginname=abc@example.com&groupuser=cdf@eaxmple.com&token=2343434334444&page=1&pagesize=50
		*  
		*  Optional: name for filter i.e {Base URL}/project/{id}/estimation?loginname=abc@example.com&groupuser=cdf@eaxmple.com&token=2343434334444&page=1&pagesize=50&name=Alex
		*  
		*  Optional: fields=column1,column2,...  i.e {Base URL}/project/{id}/estimation?loginname=abc@example.com&groupuser=cdf@eaxmple.com&
		*  				token=2343434334444&page=1&pagesize=50&name=Alex&fields=name,title,projectcode...
		*  
		*/

		//Use this URI resource with Base URL to access Servicerepo
		@Path("/cicd")
		public class CICDService {
			static Log logger = LogFactory.getLog(CICDService.class);
			ItemUtility it= new ItemUtility();
			static HashMap<String,Long> counter= new HashMap<String,Long>();
			PrintTime timer;
			static Process p;
			static Runtime r;
			
			// Get all contextual objects for this class
			@Context UriInfo uriInfo;
			@Context  HttpHeaders header;
			
			// Post all data changes in using form
			@POST
			@Path("/cicddata")
			@Consumes(MediaType.MULTIPART_FORM_DATA)
			@Produces({MediaType.APPLICATION_XML})
			public Rows postCICDDataServicerepo(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormDataParam("body") String xml) {
				Rows rows = null;
				ServicerepoDao post;
				String output="";
				String result="";
				try {
					logger.info("xml="+xml);
					post=new ServicerepoDao(uriInfo,header);
					post.setPostXml(xml.trim());
					HashMap<String,String> data=it.getItemValueMap(xml);
					String command=data.get("postbody");
					
					
					logger.info("Command="+command);

					 result="{\"output\":\"Command is= "+ command + ". Can not execute this command!\"}";
					
					if(!TemplateUtility.isEmptyValue(command) &&!command.contains("@jobid")){
							
						logger.info("Executing Command="+command);
						File target= new File(".");
						String path=target.getAbsolutePath();
						
						FileUtility.createTextFile(path+"/executecmd.sh", command);
						
						try {
							output=executeCommand("chmod 777 "+path.replace("/.", "")+"/executecmd.sh");
							Thread.sleep(100);
							output=executeCommand(path+"/executecmd.sh");
							FileUtility.deleteFile(path+"/executecmd.sh");
						} catch (InterruptedException e) {
							FileUtility.deleteFile(path+"/executecmd.sh");
							// TODO Auto-generated catch block
							//e.printStackTrace();
						}
						

						 result="{\"output\":\""+output+"\"}";
						 logger.info("Result="+result);
						
					}
					
					rows=new TemplateUtility().getFailedMessage(result);
					 //return Response.status(200).entity(result).build();
				
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (DaoException d) {
					 d.printStackTrace();
				}
				return rows;
			}
			
			
			public  String executeCommand(String command) {

				StringBuffer output = new StringBuffer();

				
				try {
					if(r==null){
						r=Runtime.getRuntime();
					}
					p = Runtime.getRuntime().exec(command);
					p.waitFor();
					Thread.sleep(1000);
					
					BufferedReader reader = 
		                            new BufferedReader(new InputStreamReader(p.getInputStream()));

		                        String line = "";			
					while ((line = reader.readLine())!= null) {
						output.append(line + "\n");
					}

				} catch (Exception e) {
					e.printStackTrace();
				}

				return output.toString();

			}
			
		}
		
		
