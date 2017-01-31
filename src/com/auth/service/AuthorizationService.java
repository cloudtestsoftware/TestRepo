package com.auth.service;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.servlet.http.HttpServletRequest;
import com.auth.bean.Authorization;
import com.auth.dao.AuthorizationDao;

import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import cms.service.dhtmlx.Rows;
import cms.service.exceptions.DaoException;


//maps this resource to the URL orders
@Path("/authorization")
public class AuthorizationService {

         // Allows to insert contextual objects into the class
	// Get all contextual objects for this class
		@Context UriInfo uriInfo;
		@Context HttpServletRequest req;
        
       
         // Return the list of orders for applications with json or xml formats
         @GET
         @Path("/auth")
         @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
         public List<Authorization> getAuthorization() {
           String loginname=uriInfo.getQueryParameters().getFirst("loginname");
      	   String password=uriInfo.getQueryParameters().getFirst("password");
      	   String remoteclient=req.getRemoteAddr();
           List<Authorization> auths = new ArrayList<Authorization>();
           auths.addAll(AuthorizationDao.instance.getAuthCode(loginname,password,remoteclient).values());
           return auths;
         }
         
      // Return the list of orders for applications with json or xml formats
         @GET
         @Path("/passwordcode")
         @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
         public List<Authorization> getPasswordResetCode() {
           String loginname=uriInfo.getQueryParameters().getFirst("loginname");
           String reqpath=req.getPathTranslated();
           String pathinfo=req.getPathInfo();
           String contextpath=reqpath.replace(pathinfo, "");
           List<Authorization> auths = new ArrayList<Authorization>();
           //System.out.println("Context Path="+req.getContextPath());
           //System.out.println("Context Path2="+contextpath);
           //System.out.println("Real Path="+req.getRealPath("META-INF"));
           //System.out.println("getPathInfo Path="+req.getPathInfo());
           //System.out.println("getPathTranslated Path="+req.getPathTranslated());
           //System.out.println("getPathTranslated Path="+req.getServletPath());
           auths.addAll(AuthorizationDao.instance.getPasswordResetCode(loginname,contextpath).values());
           return auths;
         }
         
      // Return the list of orders for applications with json or xml formats
         @GET
         @Path("/passwordreset")
         @Produces({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
         public List<Authorization> resetPassword() {
           String loginname=uriInfo.getQueryParameters().getFirst("loginname");
      	   String password=uriInfo.getQueryParameters().getFirst("password");
      	   String resetcode=uriInfo.getQueryParameters().getFirst("resetcode");
      	   String remoteclient=req.getRemoteAddr();
           List<Authorization> auths = new ArrayList<Authorization>();
           auths.addAll(AuthorizationDao.instance.resetPassword(loginname,password,resetcode).values());
           return auths;
         }
}
