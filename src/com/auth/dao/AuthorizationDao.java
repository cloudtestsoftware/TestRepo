package com.auth.dao;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.auth.bean.Authorization;

import cms.service.app.ApplicationConstants;
import cms.service.app.ServiceManager;
import cms.service.app.AccessToken;
import cms.service.template.*;
import cms.service.util.EmailUtility;




public enum AuthorizationDao {
       instance;
     
       private Map<String, Authorization> contentProvider = new HashMap<String, Authorization>();
       static Log logger = LogFactory.getLog(AuthorizationDao.class);
       
       private AuthorizationDao() {
    	 
       }
      
       public Map<String, Authorization> getAuthCode(String loginname, String password,String remoteclient){

    	   Authorization auth=new Authorization();
    	   AccessToken access=ServiceManager.verifyLogin(loginname,password,remoteclient);
    	  
            if(access!=null){
            	auth.setLoginname(loginname);
            	auth.setToken(access.getToken()+ApplicationConstants.IPSEPERATOR+remoteclient+ApplicationConstants.IPSEPERATOR+loginname);
            	auth.setMsg("Authorization Success!");
            }else{
            	auth.setLoginname(loginname);
            	auth.setToken("");
            	auth.setMsg("Authorization Failed!");
            }
            contentProvider.put("1", auth);
              return contentProvider;
       }
       
       public Map<String, Authorization> getPasswordResetCode(String loginname,String contextpath){
    	   long resetcode=new EmailUtility(contextpath).sendPasswordCode(loginname);
    	   logger.info("***** getPasswordResetCode="+resetcode);
    	   Authorization auth=new Authorization();
            if(resetcode>0){
            	auth.setLoginname(loginname);
            	auth.setToken(String.valueOf(resetcode));
            	auth.setMsg("Password reset code sent successfully! Check email and use this to reset password.");
            }else{
            	auth.setLoginname(loginname);
            	auth.setToken("");
            	auth.setMsg("Failed to send reset code. Login does not match!");
            }
            contentProvider.put("1", auth);
              return contentProvider;
       }
       
       public Map<String, Authorization> resetPassword(String loginname,String password,String resetcode){
    	  
    	   Authorization auth=new Authorization();
    	   auth.setLoginname(loginname);
       	   auth.setToken("Reset code used :"+resetcode);
    	   String sql="update table_testuser set password='"+password+"', verifypassword='"+password+"' where loginname='"+loginname+"' and verifypassword='"+password+"'";
    	   TemplateTable pwd = new TemplateUtility().getResultSet(sql); 
    	   if(pwd.getRowCount()>0){
            	auth.setMsg("Password reset success! Please login using new password.");
            }else{
            	auth.setMsg("Failed to reset password. Login or password reset code does not match!");
            }
            contentProvider.put("1", auth);
              return contentProvider;
       }
}