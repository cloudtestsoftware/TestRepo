
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
		import com.testrepo.dao.FeaturemapDao;
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

		//Use this URI resource with Base URL to access Featuremap
		@Path("/featuremap")
		public class FeaturemapService {
			static Log logger = LogFactory.getLog(FeaturemapService.class);

			// Get all contextual objects for this class
			@Context UriInfo uriInfo;
			@Context  HttpHeaders header;
			 
			// Get all rows for Featuremap
			@GET
			@Path("/rows")
			@Produces({"application/xml"})
			public Rows getFeaturemapRows() {
				Rows rows = null;
				try {
					rows=new FeaturemapDao(uriInfo,header).getFeaturemapRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getFeaturemapRows()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get Featuremap form
			@GET
			@Path("/form")
			@Produces({"application/xml"})
			public Items getFeaturemapForm() {
				Items items = null;
				try {
					items=new FeaturemapDao(uriInfo,header).getFeaturemapForm();
				} catch (AuthenticationException e) {
					 items=new TemplateUtility().getFailedItemMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getFeaturemapRecord()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return items;
			}
			 
			// Get Featuremap record by id
			@GET
			@Path("/{id}/record")
			@Produces({"application/xml"})
			public Rows getFeaturemapRecord() {
				Rows rows = null;
				try {
					rows=new FeaturemapDao(uriInfo,header).getFeaturemapRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getFeaturemapRecord()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get Featuremap record update by id
			@GET
			@Path("/{id}/update")
			@Produces({"application/xml"})
			public Rows getFeaturemapUpdate() {
				Rows rows = null;
				try {
					rows=new FeaturemapDao(uriInfo,header).getFeaturemapRowUpdated();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getFeaturemapUpdate()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get all rows with filter for Featuremap
			@GET
			@Path("/filter")
			@Produces({"application/xml"})
			public Rows getFeaturemapRowsByFilter() {
				Rows rows = null;
				try {
					rows=new FeaturemapDao(uriInfo,header).getFeaturemapByFilter();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					 logger.info( "Error calling getFeaturemapRowsByFilter()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			// Get summary row against object ID for Featuremap
			@GET
			@Path("/{id}/summary")
			@Produces({"application/xml"})
			public Rows getFeaturemapSummaryRows() {
				Rows rows = null;
				try {
					rows=new FeaturemapDao(uriInfo,header).getFeaturemapSummaryRows();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getFeaturemapRows()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			// Get Featuremap record deleted using id
			@GET
			@Path("/{id}/delete")
			@Produces({"application/xml"})
			public Rows getFeaturemapRowDeleted() {
				Rows rows = null;
				try {
					rows=new FeaturemapDao(uriInfo,header).getFeaturemapRowDeleted();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (Exception ex) {
					logger.info( "Error calling getFeaturemapRowDeleted()"+ ex.getMessage());
					 ex.printStackTrace();
				}
				return rows;
			}
			 
			 
			// Post all data changes in your grid for parent and child together
			@POST
			@Path("/post")
			@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
			@Produces({MediaType.APPLICATION_XML})
			public Rows postFeaturemap(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormParam("body") String xml) {
				Rows rows = null;
				FeaturemapDao post;
				try {
					post=new FeaturemapDao(uriInfo,header);
					post.setPostXml(xml.trim());
					post.postFeaturemapContainer();
					rows=post.getFeaturemapRowModified();
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
			public Rows postFormDataFeaturemap(@Context UriInfo uriInfo,@Context  HttpHeaders header,@FormDataParam("body") String xml) {
				Rows rows = null;
				FeaturemapDao post;
				try {
					post=new FeaturemapDao(uriInfo,header);
					post.setPostXml(xml.trim());
					post.postFeaturemapContainer();
					rows=post.getFeaturemapRowModified();
				} catch (AuthenticationException e) {
					 rows=new TemplateUtility().getFailedMessage(e.getMessage());
					 e.printStackTrace();
				} catch (DaoException d) {
					 d.printStackTrace();
				}
				return rows;
			}
		}
