package com.auth.service;

import java.io.File;
import java.net.URL;
import java.util.Map;
import java.util.Properties;
import java.util.Random;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.dom4j.Element;

import cms.service.app.ServiceController;
import cms.service.app.ServiceManager;
import cms.service.exceptions.AuthenticationException;
import cms.service.template.TemplateTable;
import cms.service.template.TemplateUtility;
import cms.service.util.Base64Util;
import cms.service.util.FileUtility;
import cms.service.util.ResourceUtility;


 
@Path("/email")
public class SendEmailService {
 
	static Log logger = LogFactory.getLog(SendEmailService.class);
	@Context UriInfo uriInfo;
	@Context  HttpHeaders header;
	
	//For north virginia
	//final String username_n_virginia = "AKIAJGRQ5GEWKSQWIXOQ";
	//final String password_n_virginia = "AlV91FKPngN0to3s/BvwoCprrqs7zO/tm7A8zdZEzVWE";
	//final string smtp="email-smtp.us-east-1.amazonaws.com";

	//for oragon
	//final String username="AKIAJKIITXVYB7TTZSGQ";
	//final String password="Aqbd3CKaZH/1tcGY2kVzqtXMNhVCNrL1v3RmBD7LRDbW";
	//final String smtp="email-smtp.us-west-2.amazonaws.com";
    
	
	TemplateUtility tu=new TemplateUtility();
	final String emailResourceName="amazonEmailResource";
	String smtp=null;
	String sendto=null;
	String amazonemailuser;
	String amazonemialpassword;
	String amazonverifiedemail;
	String port;
	
	/*
	 * Pass reason=activation for account activation email
	 *      reason=resetpassword, for password reset
	 *  Pass url parameter=/email/{id}/sendemail?token=<Your Token>&sendto=email&reason=<Your reason>
	 */
    @GET
    @Path("/{id}/sendemail")
    @Produces({"application/xml"})
    public Response sendEmailToUser(
    		@Context UriInfo uriInfo,
    		@Context  HttpHeaders header
    		) throws AuthenticationException {
    	
    	
    	Map<String,String> userdata=null;
    	String token=null;
    	String objid="";
    	String reason;
    	String subject="";
    	String body="";
    	String username="";
    	String result="Failed to send email";
        Element resourceElm;
        		
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
			
			userdata=ServiceManager.verifyUserToken(uriInfo.getQueryParameters().getFirst("token"));
			token=uriInfo.getQueryParameters().getFirst("token");
		}
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("sendto"))){
			
			sendto=uriInfo.getQueryParameters().getFirst("sendto");
		}
    	
		if(userdata!=null &&!userdata.isEmpty()){
			
			username=userdata.get("username");
			
		}else{
			throw new AuthenticationException("Authentication Failed for user="+sendto+" Token ="+ token);
		}
		
		
		
		if(!tu.isEmptyValue(uriInfo.getPathParameters().getFirst("id"))){
			objid=uriInfo.getPathParameters().getFirst("id").replace("id-", "");
		}
		reason=uriInfo.getQueryParameters().getFirst("reason");
		resourceElm=ResourceUtility.getUserResourceElement(emailResourceName);
		amazonemailuser=resourceElm.attributeValue("amazonemailuser");
		//logger.info("amazonemailuser="+amazonemailuser);
		amazonemialpassword=resourceElm.attributeValue("amazonemialpassword");
		//logger.info("amazonemialpassword="+amazonemialpassword);
		amazonverifiedemail=resourceElm.attributeValue("amazonverifiedemail");
		//logger.info("amazonverifiedemail="+amazonverifiedemail);
		smtp=resourceElm.attributeValue("smtp");
		//logger.info("smtp="+smtp);
		port=resourceElm.attributeValue("port");
		
		if(reason.equalsIgnoreCase("activation")){
			subject="Account Activation for Artitelly Test Repo Solution";
			String email_template_path=this.getWebAppPath()+"src"
										+File.separator+"template"+File.separator+"account_activation.txt";
			//logger.info("email template path="+email_template_path);
			 body=FileUtility.readFileContent(email_template_path);
			
			String url=uriInfo.getBaseUri()+"email/"+objid+"/activate?token="+token+"&sendto="+sendto;
			body=body.replace("@url", url);
			
		}
		try{
			if(sendmail(  subject, body)){
				result="Success";
			}else{
				result="Failed to send email to "+sendto;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
      
        //logger.info(result);
 
        return Response.status(200).entity(result).build();
 
    }
 
    
    @GET
    @Path("/resetpassword")
    @Produces({"application/xml"})
    public Response resetUserPassword(
    		@Context UriInfo uriInfo,
    		@Context  HttpHeaders header
    		) throws AuthenticationException {
    	
    	
    	Map<String,String> userdata=null;
    	String token=null;
    	String reason;
    	String username="";
    	String subject="";
    	String body="";
    	String result="Failed to send email";
        Element resourceElm;
        		
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
			
			userdata=ServiceManager.verifyUserToken(uriInfo.getQueryParameters().getFirst("token"));
			token=uriInfo.getQueryParameters().getFirst("token");
		}
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("sendto"))){
		
			sendto=uriInfo.getQueryParameters().getFirst("sendto");
		}
		if(userdata!=null &&!userdata.isEmpty()){
			
			username=userdata.get("username");
			
		}else{
			throw new AuthenticationException("Authentication Failed for user="+sendto+" Token ="+ token);
		}
	
		
		resourceElm=ResourceUtility.getUserResourceElement(emailResourceName);
		amazonemailuser=resourceElm.attributeValue("amazonemailuser");
		//logger.info("amazonemailuser="+amazonemailuser);
		amazonemialpassword=resourceElm.attributeValue("amazonemialpassword");
		//logger.info("amazonemialpassword="+amazonemialpassword);
		amazonverifiedemail=resourceElm.attributeValue("amazonverifiedemail");
		//logger.info("amazonverifiedemail="+amazonverifiedemail);
		smtp=resourceElm.attributeValue("smtp");
		//logger.info("smtp="+smtp);
		port=resourceElm.attributeValue("port");
		
	
		
		subject="Password Reset from Artitelly, Inc";
		String email_template_path=this.getWebAppPath()+"src"+File.separator+"template"+File.separator+"password_reset.txt";
		//logger.info("email template path="+email_template_path);
		body=FileUtility.readFileContent(email_template_path);
		//logger.info("email body="+body);
		
		int password=new Random(99999).nextInt();
		updatePassword(sendto,String.valueOf(password));
		body=body.replace("@password", String.valueOf(password));
		
		try{
			if(sendmail(  subject, body)){
				result="Success! Please check email for temporary password!";
			}else{
				result="Failed to send email to "+sendto;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
      
        //logger.info(result);
 
        return Response.status(200).entity(result).build();
 
    }
 
    
    @GET
    @Path("/sendmessage")
    @Produces({"application/xml"})
    public Response sendMessage(
    		@Context UriInfo uriInfo,
    		@Context  HttpHeaders header
    		) throws AuthenticationException {
    	
    	
    	Map<String,String> userdata=null;
    	String token=null;
    	String reason="";
    	String username="";
    	String subject="";
    	
    	String body="";
    	String result="Failed to send email";
        Element resourceElm;
        		
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
			
			userdata=ServiceManager.verifyUserToken(uriInfo.getQueryParameters().getFirst("token"));
			token=uriInfo.getQueryParameters().getFirst("token");
		}
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("sendto"))){
		
			sendto=uriInfo.getQueryParameters().getFirst("sendto");
		}
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("reason"))){
    		
			reason=uriInfo.getQueryParameters().getFirst("reason");
		}
       if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("subject"))){
    		
    	   subject=uriInfo.getQueryParameters().getFirst("subject");
		}
    	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("message"))){
			
			body=uriInfo.getQueryParameters().getFirst("message");
			body=body.replaceAll("  ", "\n\t");
		}
    	
		if(userdata!=null &&!userdata.isEmpty()){
			
			username=userdata.get("username");
			
		}else{
			throw new AuthenticationException("Authentication Failed for user="+sendto+" Token ="+ token);
		}
	
		
		resourceElm=ResourceUtility.getUserResourceElement(emailResourceName);
		amazonemailuser=resourceElm.attributeValue("amazonemailuser");
		//logger.info("amazonemailuser="+amazonemailuser);
		amazonemialpassword=resourceElm.attributeValue("amazonemialpassword");
		//logger.info("amazonemialpassword="+amazonemialpassword);
		amazonverifiedemail=resourceElm.attributeValue("amazonverifiedemail");
		//logger.info("amazonverifiedemail="+amazonverifiedemail);
		smtp=resourceElm.attributeValue("smtp");
		//logger.info("smtp="+smtp);
		port=resourceElm.attributeValue("port");
		
	
		
		if(reason!=null &&reason.equalsIgnoreCase("referral")){
			String name;
			String fullname;
			String myemail;
			String sql="select name, name||' '||lastname as myname, loginname from table_testuser where loginname='"+username+"'";
			TemplateTable me=tu.getResultSet(sql);
			subject="Invting you to join Artitelly FREE cloud based Test Management Solution";
			if(me.getRowCount()>0){
				name=me.getFieldValue("name", me.getRowCount()-1);
				fullname=me.getFieldValue("myname", me.getRowCount()-1);
				myemail=me.getFieldValue("loginname", me.getRowCount()-1);
				subject=fullname+ " invites you to join Artitelly FREE cloud based Test Management Solution";
				if(!tu.isEmptyValue(body) &&!body.toLowerCase().contains(name.toLowerCase())){
					body=body.replace("{Yours}", "");
					body+="\n\t"+fullname;
				}
				body+="\n\t"+myemail;
			}
			
			if(tu.isEmptyValue(body)){
				body="\n Hi There, \n\n\t Please checkout our free cloudbase integrated Test Management, "+
						" Project Management, Time Management & Bug tracking solution."+
						"\n\t Our cloud based solution is completely free for any size of company and for any number of users."+
						"\n\t Please check in this site www.artitelly.com and join for Free using below URL."+
						"\n\t http://sandbox.artitelly.com/testrepo/service"+
						"\n\n Thank you"+
						"\n Mike Jordan"+
						"\n www.artitelly.com"+
						"\n mike@artitelly.org";
			}
			
		}
		
		try{
			if(sendmail(  subject, body)){
				result="Success! We sent your email message to "+sendto;
			}else{
				result="Failed to send email to "+sendto;
			}
		}catch(Exception e){
			e.printStackTrace();
		}
      
        //logger.info(result);
 
        return Response.status(200).entity(result).build();
 
    }
 

@GET
@Path("/{id}/activate")
@Produces({"application/xml"})
public Response activateUserAccount(
		@Context UriInfo uriInfo,
		@Context  HttpHeaders header
		) throws AuthenticationException {
	
	
	Map<String,String> userdata=null;
	String token=null;
	String objid="";
	String username;
	String result="Failed to send email";
  
    		
	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
		
		token=uriInfo.getQueryParameters().getFirst("token");
		
		userdata=ServiceManager.verifyUserToken(token);
		
		
	}
	if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("sendto"))){
		
		sendto=uriInfo.getQueryParameters().getFirst("sendto");
	}
	if(userdata!=null &&!userdata.isEmpty()){
		
		username=userdata.get("username");
		
	}else{
		throw new AuthenticationException("Authentication Failed for user="+sendto+" Token ="+ token);
	}
	
	if(!tu.isEmptyValue(uriInfo.getPathParameters().getFirst("id"))){
		objid=uriInfo.getPathParameters().getFirst("id").replace("id-", "");
	}
	
	 if(activateUser(objid)){
		 result="Success! User login="+sendto+" Account is activated!";
		 
		 try {
			 doSetup();
			 sendmail("Success Account Activation for user="+sendto,result);
		} catch (Exception e) {
			logger.info(" ERROR: Exception thrown while sending Account Activation success email!");
			logger.info("Message:"+e.getMessage());
			// TODO Auto-generated catch block
			//e.printStackTrace();
		}
	 }
	 result="<html><body><div>" +result+"</div></body></html>";
	 
	 return Response.status(200).entity(result).build();
}

public boolean sendmail( String subject,String body) throws Exception{
    	
		Properties props = new Properties();
		props.put("mail.smtp.host", smtp);
		props.put("mail.smtp.socketFactory.port", port);
		props.put("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.port", port);
 
		Session session = Session.getInstance(props,
		  new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(amazonemailuser, amazonemialpassword);
			}
		  });
 
		try {
 
			Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(amazonverifiedemail));
			message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(sendto));
			message.setSubject(subject);
			message.setText(body);
 
			Transport.send(message);
 
			System.out.println("Done");
           
		} catch (MessagingException e) {
			e.printStackTrace();
			return false;
		}
		 return true;
        
    }

private boolean activateUser(String objid){
	
	String sql="update table_testuser set status='1' where loginname in ( select name from table_profile where objid='"+objid+"')";
	tu.executeQuery(sql);
  
    return true;    
}

private boolean updatePassword(String loginname,String password){
	
	String sql="update table_testuser set password='"+password+"',verifypassword='"+password+"' where loginname='"+loginname+"'";
	tu.executeQuery(sql);
  
    return true;    
}



public String getWebAppPath(){
	
	 String path = ServiceController.contextPath.split("WEB-INF")[0];
	 return path;
}

private void doSetup(){
	
	Element resourceElm=ResourceUtility.getUserResourceElement(emailResourceName);
	amazonemailuser=resourceElm.attributeValue("amazonemailuser");
	//logger.info("amazonemailuser="+amazonemailuser);
	amazonemialpassword=resourceElm.attributeValue("amazonemialpassword");
	//logger.info("amazonemialpassword="+amazonemialpassword);
	amazonverifiedemail=resourceElm.attributeValue("amazonverifiedemail");
	//logger.info("amazonverifiedemail="+amazonverifiedemail);
	smtp=resourceElm.attributeValue("smtp");
	//logger.info("smtp="+smtp);
	port=resourceElm.attributeValue("port");
	
	
	
}
public static void main(String[] args){
	
	SendEmailService test = new SendEmailService();
	ServiceController.contextPath="/Users/macuser/atlastutorial/testrepo/WebContent/WEB-INF";
	test.doSetup();
	test.doTest();
	
	
	
}

private void doTest(){
	sendto="sjana@putstuff2sell.com";
	String subject="Account Activation for Artitelly Test Repo Solution";
	String email_template_path=this.getWebAppPath()+"src"
									+File.separator+"template"+File.separator+"account_activation.txt";
		//logger.info("email template path="+email_template_path);
	String body=FileUtility.readFileContent(email_template_path);
		
		String url="email/0FA6BED37AE31D29E050B90A279315E8/activate?token=MTQyNDU3ODQ2OTQyMDtzYQ==;127.0.0.1;";
		body=body.replace("@url", url);
		//logger.info("email body="+body);
		//logger.info("url="+url);
		
	
	try{
		if(sendmail(  subject, body)){
			System.out.println("Success");
		}else{
			System.out.println("Failed to send email to "+sendto);
		}
	}catch(Exception e){
		e.printStackTrace();
	}
}
 
}
