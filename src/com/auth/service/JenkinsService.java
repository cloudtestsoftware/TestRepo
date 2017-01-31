package com.auth.service;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
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
import javax.ws.rs.core.UriInfo;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.dom4j.Element;

import cms.service.app.ApplicationConstants;
import cms.service.dhtmlx.Rows;
import cms.service.template.TemplateTable;
import cms.service.template.TemplateUtility;
import cms.service.util.ItemUtility;

import com.jenkins.jobs.JenkinsPoster;
import com.jenkins.jobs.JobData;
import com.sun.jersey.multipart.FormDataParam;



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

//Use this URI resource with Base URL to access Profile
@Path("/jenkin")
public class JenkinsService {
	static Log logger = LogFactory.getLog(RegistrationService.class);
	TemplateUtility tu=new TemplateUtility();
	ItemUtility it= new ItemUtility();
	
	// Get all contextual objects for this class
	@Context UriInfo uriInfo;
	@Context  HttpHeaders header;
	 
	
	// Post all data changes in using form
	@POST
	@Path("/formdata")
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	@Produces({MediaType.APPLICATION_XML})
	public Rows postFormDataJobrun(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormDataParam("body") String xml) {
		Rows rows = null;
		JobData jd = new JobData();
		HashMap<String,String> data=it.getItemValueMap(xml);
		String []items="baseurl,browsers,name,page,jenkinurl,serviceurl,env,overrideattributes,datasetextension,groupbythread,runtype,action,threads,timeout".split(",");
		//String []items="baseurl,browsers".split(",");
		logger.info("xml="+xml);
		logger.info("data size="+data.size());
		 List<NameValuePair> parameters = jd.getParameters();
	     parameters.add(new BasicNameValuePair("token", data.get("jobtoken")));
	     //parameters.add(new BasicNameValuePair("browsers", data.get("browsers")));
	     //parameters.add(new BasicNameValuePair("env", data.get("env")));
	     //parameters.add(new BasicNameValuePair("overrideattribute", data.get("overrideattribute")));
	    for (String item:items){
	    	 parameters.add(new BasicNameValuePair(item, data.get(item)));
	    }
	     jd.setParameters(parameters);
		if(data!=null && data.size()>0){
			
			jd.setUsername(data.get("token").split(":")[0]);
			jd.setPassword(data.get("token").split(":")[1]);
			jd.setJenkinsurl(data.get("jenkinurl"));
			jd.setJob(data.get("joburi"));
			jd.setBrowser(data.get("browsers"));
			jd.setToken(data.get("jobtoken"));
			jd.setName(data.get("name"));
			jd.setPage(data.get("page"));
			jd.setRuntype(data.get("runtype"));
			jd.setOverrideattribute(data.get("overrideattributes"));
			jd.setEnv(data.get("env"));
			jd.setDatasetextension(data.get("datasetextension"));
			jd.setGroupbythread(data.get("groupbythread"));
			jd.setBaseurl(data.get("baseurl"));
			jd.setAction(data.get("action"));
			jd.setThreads(data.get("threads"));
			jd.setTimeout(data.get("timeout"));
			jd.setServiceurl(data.get("serviceurl"));
			
		}
		
		
		try {
			JenkinsPoster jp = new JenkinsPoster(jd);
	        logger.info("executing postJenkinsJob");
	        String result=jp.postJenkinsJob();
	        logger.info("executed postJenkinsJob :"+ result);
			
			 rows=new TemplateUtility().getServiceMessage("Passed: Request posted to Jenkins using url="+data.get("jenkinurl") +" and response="+result);

		} catch (Exception e) {
			 rows=new TemplateUtility().getFailedMessage(e.getMessage());
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
					
		return rows;
	}
	
	/*
	 * Pass runid, featureid,sceneriorunid,note, status
	 *      reason=resetpassword, for password reset
	 *  Pass url parameter=/email/{id}/sendemail?token=<Your Token>&sendto=email&reason=<Your reason>
	 */
	@POST
	@Path("/testresult")
	@Consumes(MediaType.TEXT_XML)
	public Response postTestresult(String xml) {
   	
		Element root=it.getRootElementFromXML(xml);
		List<Element> items= root.elements();
    	Map<String,String> userdata=null;
    	
    	String username="";
    	String objid="";
    	String runid="";
    	String featureid;
    	String scenerioid="";
    	String matrixid="";
    	String testenvid="";
    	String sceneriorunid="";
    	String browsers="";
    	String groupuser="";
    	String result="Success";
    
		/*
    	if(data!=null &&!tu.isEmptyValue(data.get("token"))){
			userdata=ServiceManager.verifyUserToken(uriInfo.getQueryParameters().getFirst("token"));
		}
    	
		if(userdata!=null &&!userdata.isEmpty()){
			username=userdata.get("username");
		}else{
			throw new AuthenticationException("Authentication Failed for user Token ="+ data.get("token"));
		}
		*/
		for (Element elm: items){
			HashMap<String,String> data=it.getItemValueMap(elm.asXML());
		    browsers=data.get("browsers");
			matrixid=data.get("matrixid");
			runid=data.get("runid");
			featureid=data.get("featureid");
			scenerioid=data.get("scenerioid");
			String sql= "select objid,groupuser from table_testenv where testenv2testmatrix='"+matrixid+"' and upper(short)=upper('"+browsers+"')";
			if(ApplicationConstants.GENERATE_LOG){
				logger.info(sql);
			}
			TemplateTable env=tu.getResultSet(sql);
			if(testenvid.isEmpty() && env.getRowCount()>0){
				testenvid=env.getFieldValue("objid", env.getRowCount()-1);
				groupuser=env.getFieldValue("groupuser", env.getRowCount()-1);
			}
			
			String sql2= "select objid from table_sceneriorun where sceneriorun2testrun='"+runid
					+"' and sceneriorun2testenv='"+testenvid+"'"
					+" and sceneriorun2testscenerio='"+scenerioid+"'";
			
			if(ApplicationConstants.GENERATE_LOG){
				logger.info(sql2);
			}
			TemplateTable scenerio=tu.getResultSet(sql2)	;
			if(scenerio.getRowCount()>0){
				sceneriorunid=scenerio.getFieldValue("objid", scenerio.getRowCount()-1);
			}
			String sceneriorun_sql="";
			if(sceneriorunid.trim().isEmpty()){
				sceneriorunid="sys_guid()";
				sceneriorun_sql="Insert into table_sceneriorun (OBJID,NAME,NOTE,STATUS,RUNTYPE,EXECUTEDBY,"+
			          "DEFECTNO,RUNDATE,SCENERIORUN2TESTENV,SCENERIORUN2TESTRUN,SCENERIORUN2TESTSCENERIO,"+
						"ORIGINID,DESTINITIONID,GROUPUSER,GENUSER,GENDATE,MODUSER,MODDATE) "+
						"values ("+sceneriorunid+",'"+data.get("name")+"','"+data.get("note")+"','"+data.get("status")+
						"','Automated','Automation',null,sysdate,"+
						"'"+testenvid+"','"+runid+"','"+scenerioid+"','"+matrixid+"','"+runid+
						"','"+groupuser+"','"+username+"',sysdate,null,null)";

			}else{
				sceneriorun_sql="update table_sceneriorun set status='"+data.get("status")+"',note='"+data.get("note")+"',rundate=sysdate,"+
								" runtype='Automated', executedby='Automation'  where objid='"+sceneriorunid+"'";
			}
			if(ApplicationConstants.GENERATE_LOG){
				logger.info("sceneriorun_sql="+sceneriorun_sql);
			}
			tu.executeQuery(sceneriorun_sql);
			
		}
        return Response.status(200).entity(result).build();
 
    }
	
	/*
	 * Pass runid, featureid,sceneriorunid,note, status
	 *      reason=resetpassword, for password reset
	 *  Pass url parameter=/email/{id}/sendemail?token=<Your Token>&sendto=email&reason=<Your reason>
	 */
	@POST
	@Path("/postsummaryresult")
	@Consumes(MediaType.TEXT_XML)
	 public Response insertSummaryResult(String xml){
		    String result="Success";
		    HashMap<String,String> data=it.getItemValueMap(xml);
		    String name=data.get("name");
	    	String suite=data.get("suite");
	    	String runid=data.get("runid");
	    	String matrixid=data.get("matrixid");
	    	String featureid=data.get("featureid");
	    	String releaseno=data.get("releaseno");
	    	String env=data.get("env");
	    	String actioncount=data.get("actioncount");
	    	String testcount=data.get("testcount");
	    	String passcount=data.get("passcount");
	    	String failcount=data.get("failcount");
	    	String pctpass=data.get("pctpass");
	    	String pctfail=data.get("pctfail");
	    	String jobname=data.get("jobname");
	    	String jenkinsurl=data.get("jenkinsurl");
	    	String browser=data.get("browsers");
	    	String projectfolder=data.get("projectfolder");
	    	String dbdate="sysdate";
	    	String jenkinrunid=data.get("jenkinrunid");
	    	String runby=data.get("runby");
	    	String grupuser="";
	    	String grp_sql="select groupuser from table_testmatrix where objid='"+matrixid+"'";
	    	TemplateTable grpresult=tu.getResultSet(grp_sql);
	    	if(grpresult!=null &&grpresult.getRowCount()>0){
	    		grupuser=grpresult.getFieldValue("groupuser", grpresult.getRowCount()-1);
	    	}
	    	
	    	String update_sql="update table_summaryreport set status='Old', moddate=sysdate where summaryreport2testmatrix='"+matrixid+
	    			"' and summaryreport2testrun='"+runid+"' and name='"+name+"' and env='"+env+"' and browser='"+browser+"' and status='Current'";
	    	tu.executeQuery(update_sql);
	    	
	    	String insert_sql="insert into table_summaryreport(objid,name,suite,releaseno,rundate,testcount,passcount,failcount,pctpass,pctfail,runby,env,runid,jobname,jenkinsurl,browser,projectfolder,status,summaryreport2feature,summaryreport2testmatrix,summaryreport2testrun,groupuser,gendate) values("+
								  "sys_guid(),'"+name+"','"+suite+"','"+releaseno+"',"+dbdate+","+testcount+","+passcount+","+failcount+","+pctpass+","
								  +pctfail+",'Automation','"+env+"','"+jenkinrunid+"','"+jobname+"','"+jenkinsurl+"','"+browser+"','"+projectfolder+" ','Current','"+featureid+"','"+matrixid+"','"+runid+"','"+grupuser+"',sysdate)";
			
	    	if(ApplicationConstants.GENERATE_LOG){
	    		logger.info(update_sql);
	    		logger.info(insert_sql);
	    	}
	    	tu.executeQuery(insert_sql);			
	    	
	    	return Response.status(200).entity(result).build();
	    }
	 
	@GET
	@Path("/summaryresult")
	@Produces(MediaType.TEXT_HTML)
	 public Response getUnitTestSummaryResultData(){
		
			
	    	String result="";
	    	ItemUtility ut= new ItemUtility();
	    	//String suite=this.testname;
	    	//String releaseno=uriInfo.getQueryParameters().getFirst("release");
	    			
	    	String env=uriInfo.getQueryParameters().getFirst("env");
	    	String jenkinsurl=uriInfo.getQueryParameters().getFirst("jenkinsurl");
	    			
	    	String row="";
	    	String actionRow="";
	    	
	    	String sql="select sum(testcount) totaltest, sum(passcount) totalpass, sum(failcount) totalfail, trunc((sum(passcount)/sum(testcount))* 100,2) as pctpass,"+
	    	"trunc((sum(failcount)/sum(testcount))* 100,2) as pctfail from table_summaryreport where upper(env)=upper('"+env+"')";
	    	TemplateTable summary=tu.getResultSet(sql);
	    
	       if(summary.getRowCount()>0){
	    	int sidx=summary.getRowCount()-1;	
			actionRow="\n";    	
		    	 row="<tr bgcolor=\"#7D226D\">"+
		    	"<td align=left ><font face=\"verdana\" size=2px color=white> Test Env: "+ env+" (Grand Total)</font></td>"+    	  	
		    	"<td  align=left ><font face=\"verdana\" color=white size=2px>"+new Date(System.currentTimeMillis())+"</font> </td>"+    	
		    	"<td  align=left ><font face=\"verdana\" color=white size=2px></font> </td>"+ 
		    	"<td  align=left ><font face=\"verdana\" color=white size=2px>"+summary.getFieldValue( "totaltest", sidx) +"</font> </td>"+
		    	"<td  align=left ><font face=\"verdana\" color=white size=2px>"+ summary.getFieldValue( "totalpass", sidx)+"<br>("+ summary.getFieldValue( "pctpass", sidx) +"%)</font> </td>"+
		    	"<td  align=left ><font face=\"verdana\" color=white size=2px>"+summary.getFieldValue( "totalfail", sidx)+"<br>("+  summary.getFieldValue( "pctfail", sidx) +"%)</font> </td>"+
		    	"<td  align=left ><font face=\"verdana\" color=white size=2px>"+env+"</font> </td>"+
		    	"<td  align=left ><font face=\"verdana\" color=white size=2px>All</font> </td></tr>"; 				
				
		    	String sql_detail=" select suite,releaseno,rundate,testcount,passcount,failcount,pctpass,pctfail,runby,env,runid,jobname,browser,projectfolder from table_summaryreport where upper(env)=upper('"+env+"')";
				
		    	TemplateTable details=tu.getResultSet(sql_detail);
		    	
		    //logger.info("row="+row); 	
	    	
	    	String link_prefix="../../";
	    	String projectfolder="";
	    	String jobname="";
	    	
	    	for(int rowCount=0; rowCount<details.getRowCount(); rowCount++){ 
	    		
	    		// logger.info("rowCount="+rowCount + " rowcount="+details.getRowCount()+ " jobname="+details.getFieldValue( "testcount", rowCount) );
	    		link_prefix="../../";
	    		jobname=details.getFieldValue( "jobname", rowCount);
	    		projectfolder=details.getFieldValue( "projectfolder", rowCount);
	    		if(!tu.isEmptyValue(projectfolder) &&!tu.isEmptyValue(jobname) && !projectfolder.equals(jobname)){
	    			projectfolder="/"+projectfolder;
	    		}else{
	    			projectfolder="";
	    		}
	    		try{
	    			if(jenkinsurl!=null &&!jenkinsurl.isEmpty()){
	    				link_prefix=jenkinsurl.replace(":8080", "")+"results/"+details.getFieldValue( "jobname", rowCount)+projectfolder +"/output/";
	    			}else{
	    				link_prefix+=(tu.isEmptyValue(details.getFieldValue( "jobname", rowCount))?"..":"results/"+details.getFieldValue( "jobname", rowCount))+projectfolder +"/output/";
	    			}
	    			
	    			
	    			
		    		actionRow+=
		    		"<tr bgcolor=\"#4AA02C\">"+
		        	"<td align=left ><font face=\"verdana\" size=2px color=white><a href=\""+link_prefix+details.getFieldValue( "runid", rowCount) +"/report/html_report.html\">"+ details.getFieldValue( "suite", rowCount) +"</a></font></td>"+ 
		        	//"<td align=left ><font face=\"verdana\" size=2px color=white><a href=\"./html_report.html\">"+ details.getFieldValue( "suite", rowCount) +"</a></font></td>"+  
		        	"<td  align=left ><font face=\"verdana\" color=white size=2px>"+details.getFieldValue( "rundate", rowCount) +"</font> <br></td>"+        	
		        	"<td  valign=top ><font face=\"verdana\" color=white size=2px></font> </td>"+  
		        	"<td  valign=top ><font face=\"verdana\" color=white size=2px>"+ details.getFieldValue( "testcount", rowCount) +"</font> </td>"+
		        	"<td  valign=top ><font face=\"verdana\" color=white size=2px>"+ details.getFieldValue( "passcount", rowCount)  +"<br>("+ details.getFieldValue( "pctpass", rowCount)+")%</font> </td>"+
		        	"<td  valign=top ><font face=\"verdana\" color=white size=2px>"+ details.getFieldValue( "failcount", rowCount) +"<br>("+ details.getFieldValue( "pctfail", rowCount) +")%</font> </td>"+
		        	"<td  valign=top ><font face=\"verdana\" color=white size=2px>"+details.getFieldValue( "env", rowCount) +"</font> </td>"+
		        	"<td  valign=top ><font face=\"verdana\" color=white size=2px>"+ details.getFieldValue( "browser", rowCount)+"</font> </td></tr>"; 
		    		
		    		
		    		 
	    		}catch (Exception e){
	    			e.printStackTrace();
	    		}
	        
	        	 
	    	}
	       }
	       result=row+actionRow;
	      
	       return Response.status(200).entity(result).build();
	    	
	    }
	
}

