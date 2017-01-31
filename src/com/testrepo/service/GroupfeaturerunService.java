
		package com.testrepo.service;

		import javax.ws.rs.GET;
		import javax.ws.rs.Consumes;
		import javax.ws.rs.FormParam;
		import com.sun.jersey.multipart.FormDataParam;
		import javax.ws.rs.POST;
		import javax.ws.rs.Path;
		import javax.ws.rs.Produces;
		import javax.ws.rs.core.Context;
		import javax.ws.rs.core.HttpHeaders;
		import javax.ws.rs.core.MediaType;
		import javax.ws.rs.core.UriInfo;
		import org.apache.commons.logging.Log;
		import org.apache.commons.logging.LogFactory;
		import cms.service.dhtmlx.forms.Items;
		import cms.service.dhtmlx.Rows;
		import cms.service.template.TemplateUtility;
		import cms.service.exceptions.DaoException;
		import cms.service.exceptions.AuthenticationException;
		import com.testrepo.dao.GroupfeaturerunDao;
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

		//Use this URI resource with Base URL to access Groupfeaturerun
		@Path("/groupfeaturerun")
		public class GroupfeaturerunService {
			static Log logger = LogFactory.getLog(GroupfeaturerunService.class);

			// Get all contextual objects for this class
			@Context UriInfo uriInfo;
			@Context  HttpHeaders header;
			 
			// Get all rows for Groupfeaturerun
			@GET
			@Path("/rows")
			@Produces({"application/xml"})
			public Rows getGroupfeaturerunRows() {
				Rows rows = null;
				try {
					rows=new GroupfeaturerunDao(uriInfo,header).getGroupfeaturerunRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getGroupfeaturerunRows()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get Groupfeaturerun form
			@GET
			@Path("/form")
			@Produces({"application/xml"})
			public Items getGroupfeaturerunForm() {
				Items items = null;
				try {
					items=new GroupfeaturerunDao(uriInfo,header).getGroupfeaturerunForm();
				} catch (AuthenticationException e) {
					 items=new TemplateUtility().getFailedItemMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getGroupfeaturerunRecord()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return items;
			}
			 
			// Get Groupfeaturerun record by id
			@GET
			@Path("/{id}/record")
			@Produces({"application/xml"})
			public Rows getGroupfeaturerunRecord() {
				Rows rows = null;
				try {
					rows=new GroupfeaturerunDao(uriInfo,header).getGroupfeaturerunRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getGroupfeaturerunRecord()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get Groupfeaturerun record update by id
			@GET
			@Path("/{id}/update")
			@Produces({"application/xml"})
			public Rows getGroupfeaturerunUpdate() {
				Rows rows = null;
				try {
					rows=new GroupfeaturerunDao(uriInfo,header).getGroupfeaturerunRowUpdated();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getGroupfeaturerunUpdate()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get all rows with filter for Groupfeaturerun
			@GET
			@Path("/filter")
			@Produces({"application/xml"})
			public Rows getGroupfeaturerunRowsByFilter() {
				Rows rows = null;
				try {
					rows=new GroupfeaturerunDao(uriInfo,header).getGroupfeaturerunByFilter();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getGroupfeaturerunRowsByFilter()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get summary row against object ID for Groupfeaturerun
			@GET
			@Path("/{id}/summary")
			@Produces({"application/xml"})
			public Rows getGroupfeaturerunSummaryRows() {
				Rows rows = null;
				try {
					rows=new GroupfeaturerunDao(uriInfo,header).getGroupfeaturerunSummaryRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getGroupfeaturerunRows()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Post all data changes in your grid for parent and child together
			@POST
			@Path("/post")
			@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
			@Produces({MediaType.APPLICATION_XML})
			public Rows postGroupfeaturerun(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormParam("body") String xml) {
				Rows rows = null;
				GroupfeaturerunDao post;
				try {
					post=new GroupfeaturerunDao(uriInfo,header);
					post.setPostXml(xml.trim());
					post.postGroupfeaturerunContainer();
					rows=post.getGroupfeaturerunRowModified();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (DaoException d) {
					 d.printStackTrace();
				}
				return rows;
			}

			// Post all data changes in using form
			@POST
			@Path("/formdata")
			@Consumes(MediaType.MULTIPART_FORM_DATA)
			@Produces({MediaType.APPLICATION_XML})
			public Rows postFormDataGroupfeaturerun(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormDataParam("body") String xml) {
				Rows rows = null;
				GroupfeaturerunDao post;
				try {
					post=new GroupfeaturerunDao(uriInfo,header);
					post.setPostXml(xml.trim());
					post.postGroupfeaturerunContainer();
					rows=post.getGroupfeaturerunRowModified();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (DaoException d) {
					 d.printStackTrace();
				}
				return rows;
			}
		}
