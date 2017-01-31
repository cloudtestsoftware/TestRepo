
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
		import com.testrepo.dao.AssigntoDao;
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

		//Use this URI resource with Base URL to access Assignto
		@Path("/assignto")
		public class AssigntoService {
			static Log logger = LogFactory.getLog(AssigntoService.class);

			// Get all contextual objects for this class
			@Context UriInfo uriInfo;
			@Context  HttpHeaders header;
			 
			// Get all rows for Assignto
			@GET
			@Path("/rows")
			@Produces({"application/xml"})
			public Rows getAssigntoRows() {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getAssigntoRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getAssigntoRows()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get Assignto form
			@GET
			@Path("/form")
			@Produces({"application/xml"})
			public Items getAssigntoForm() {
				Items items = null;
				try {
					items=new AssigntoDao(uriInfo,header).getAssigntoForm();
				} catch (AuthenticationException e) {
					 items=new TemplateUtility().getFailedItemMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getAssigntoRecord()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return items;
			}
			 
			// Get Assignto record by id
			@GET
			@Path("/{id}/record")
			@Produces({"application/xml"})
			public Rows getAssigntoRecord() {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getAssigntoRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getAssigntoRecord()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get Assignto record update by id
			@GET
			@Path("/{id}/update")
			@Produces({"application/xml"})
			public Rows getAssigntoUpdate() {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getAssigntoRowUpdated();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getAssigntoUpdate()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get all rows with filter for Assignto
			@GET
			@Path("/filter")
			@Produces({"application/xml"})
			public Rows getAssigntoRowsByFilter() {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getAssigntoByFilter();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getAssigntoRowsByFilter()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get summary row against object ID for Assignto
			@GET
			@Path("/{id}/summary")
			@Produces({"application/xml"})
			public Rows getAssigntoSummaryRows() {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getAssigntoSummaryRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getAssigntoRows()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get all Bug rows against object ID for Assignto
			@GET
			@Path("/{id}/bug")
			@Produces({"application/xml"})
			public Rows getBugRows(@Context UriInfo uriInfo,@Context  HttpHeaders header) {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getBugRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getBugRows()"+ ex.getMessage());
				}
				return rows;
			}
			 
			// Get all Member rows against object ID for Assignto
			@GET
			@Path("/{id}/member")
			@Produces({"application/xml"})
			public Rows getMemberRows(@Context UriInfo uriInfo,@Context  HttpHeaders header) {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getMemberRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getMemberRows()"+ ex.getMessage());
				}
				return rows;
			}
			 
			// Get all Mybug rows against object ID for Assignto
			@GET
			@Path("/{id}/mybug")
			@Produces({"application/xml"})
			public Rows getMybugRows(@Context UriInfo uriInfo,@Context  HttpHeaders header) {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getMybugRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getMybugRows()"+ ex.getMessage());
				}
				return rows;
			}
			 
			// Get all Mytasks rows against object ID for Assignto
			@GET
			@Path("/{id}/mytasks")
			@Produces({"application/xml"})
			public Rows getMytasksRows(@Context UriInfo uriInfo,@Context  HttpHeaders header) {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getMytasksRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getMytasksRows()"+ ex.getMessage());
				}
				return rows;
			}
			 
			// Get all Tasks rows against object ID for Assignto
			@GET
			@Path("/{id}/tasks")
			@Produces({"application/xml"})
			public Rows getTasksRows(@Context UriInfo uriInfo,@Context  HttpHeaders header) {
				Rows rows = null;
				try {
					rows=new AssigntoDao(uriInfo,header).getTasksRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getTasksRows()"+ ex.getMessage());
				}
				return rows;
			}
			 
			// Post all data changes in your grid for parent and child together
			@POST
			@Path("/post")
			@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
			@Produces({MediaType.APPLICATION_XML})
			public Rows postAssignto(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormParam("body") String xml) {
				Rows rows = null;
				AssigntoDao post;
				try {
					post=new AssigntoDao(uriInfo,header);
					post.setPostXml(xml.trim());
					post.postAssigntoContainer();
					rows=post.getAssigntoRowModified();
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
			public Rows postFormDataAssignto(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormDataParam("body") String xml) {
				Rows rows = null;
				AssigntoDao post;
				try {
					post=new AssigntoDao(uriInfo,header);
					post.setPostXml(xml.trim());
					post.postAssigntoContainer();
					rows=post.getAssigntoRowModified();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (DaoException d) {
					 d.printStackTrace();
				}
				return rows;
			}
		}
