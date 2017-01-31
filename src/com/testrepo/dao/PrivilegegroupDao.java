
 	 package com.testrepo.dao; 

 	 import java.util.Map; 
 	 import java.util.ArrayList; 
	 import java.util.Arrays; 
	 import javax.ws.rs.core.Cookie;
 	 import javax.ws.rs.core.HttpHeaders; 
	 import javax.ws.rs.core.UriInfo; 
	 import cms.service.app.ServiceManager;
	 import cms.service.dhtmlx.*;
	 import cms.service.dhtmlx.forms.Items;
	 import cms.service.exceptions.DaoException; 
	 import cms.service.exceptions.AuthenticationException;
	 import cms.service.jdbc.DataType; 
	 import cms.service.template.TemplateTable; 
	 import com.testrepo.bean.*; 
 
 	 /** A simple bean that has a single String property 
	 *  called message. 
 	 *  
	 * @author S.K Jana Version 1.0 
 	 * @Copyright : This code belongs to SoftleanErp.com. All right reserved! 
 	 * @since 2005-2013 
 	 */ 

	public class PrivilegegroupDao extends PrivilegegroupImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"privilegegroup,testuser,module,objectprivilege"};
		private String []childtabs={"testuser,module,objectprivilege"};
		private String []childtabnames={"App User,Module,ObjectPrivilege"};
		
		private String [] maincol={"objid","name","scope","status"};
		private String [] maincolcaption={"Id","Group Name","Scope","Status"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","input"};
		private String [] maindatadomain={"Int_t","String50_t","String100_t","Status_t"};
		private String [] maincolsearch={"#text_filter,#text_filter,#text_filter,#text_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name","scope","status"};
		private String [] reportcolcaption={"Id","Group Name","Scope","Status"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","String50_t","String100_t","Status_t"};
		
		private String [] searchcol={"objid","name","scope","status"};
		private String [] searchcolcaption={"Id","Group Name","Scope","Status"};
		private String [] searchcoltype={"integer","text","text","text"};
		private String [] searchdatadomain={"Id_t","String50_t","String100_t","Status_t"};

		private String [] propPrivilegegrouplist={"status"};
		private String [] codePrivilegegrouplist={};
		private String [] relationPrivilegegrouplist={};
		
		private String [] testusercol={"objid","testuser2company","name","lastname","loginname","status","usertype","email"};
		private String [] testusercolcaption={"Id","Company","Name","Last Name","Login Name","Status","User Type","Email"};
		private String [] testusersqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] testuserdatadomain={"Int_t","Int_t","Name_t","Name_t","Name_t","Status_t","Type_t","Email_t"};
		private String [] testuserdisable={"yes","no","no","no","no","no","no","no"};
		private String [] testusercolsearch={"#text_filter,#select_filter,#text_filter,,,,,"};
		
		private String [] modulecol={"objid","name"};
		private String [] modulecolcaption={"Id","Module Name"};
		private String [] modulesqldatatype={DataType.VARCHAR,DataType.VARCHAR};
		private String [] moduledatadomain={"Int_t","Name_t"};
		private String [] moduledisable={"yes","no"};
		private String [] modulecolsearch={"#text_filter,#select_filter"};
		
		private String [] objectprivilegecol={"objid","objectprivilege2moduleobject","name","title","value","type","isrecursive"};
		private String [] objectprivilegecolcaption={"Id","ModuleObject","Table Name","Title","Privelege Value","Privelege Type","Is Recursive"};
		private String [] objectprivilegesqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] objectprivilegedatadomain={"Int_t","Int_t","Name_t","Name_t","String20_t","String20_t","Boolean_t"};
		private String [] objectprivilegedisable={"yes","no","no","no","no","no","no"};
		private String [] objectprivilegecolsearch={"#text_filter,#select_filter,#text_filter,#text_filter,#select_filter,#select_filter,#select_filter"};

		public PrivilegegroupDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Privilegegroup");
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("generate_log"))){
					ACONST.GENERATE_LOG=true;
			}
			if(!tu.isEmptyValue(uriInfo.getPathParameters().getFirst("id"))){
				this.setParentobjid(uriInfo.getPathParameters().getFirst("id").replace("id-", ""));
			}else{
				this.setSearchdata("ObjId"+(char)1+"All"+(char)1+"");
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
				this.setToken(uriInfo.getQueryParameters().getFirst("token"));
				this.userdata=ServiceManager.verifyUserToken(this.getToken());
			}
			if(this.userdata!=null &&!this.userdata.isEmpty()){
				this.groupuser=userdata.get("groupuser");
				this.username=userdata.get("username");
				this.admingroup=userdata.get("admingroup");
			}else{
				throw new AuthenticationException("Authentication Failed for user="+username+" Token ="+ this.getToken());
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("pagesize"))){
				this.setPagesize(Integer.parseInt(uriInfo.getQueryParameters().getFirst("pagesize")));
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("page"))){
				this.setPage(Integer.parseInt(uriInfo.getQueryParameters().getFirst("page")));
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("X-Forwarded-For"))){
				this.setClientip(uriInfo.getQueryParameters().getFirst("X-Forwarded-For"));
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("filters"))){
				this.setFilters(uriInfo.getQueryParameters().getFirst("filters"));
				if(uriInfo.getQueryParameters().getFirst("filters").contains(Character.toString((char) 1))){
					this.setSearchdata(uriInfo.getQueryParameters().getFirst("filters"));
				}
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("relationfilter"))){
				this.setRelationFilters(uriInfo.getQueryParameters().getFirst("relationfilter"));
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("data"))){
				this.setData(uriInfo.getQueryParameters().getFirst("data"));
			}
			if(ACONST.GENERATE_LOG){
				logger.info("getPathParameters="+uriInfo.getPathParameters().values());
				logger.info("getQueryParameters="+uriInfo.getQueryParameters().values());
				logger.info("User Data="+this.userdata.toString());
			}
			this.cookies=header.getCookies();
			if(!tu.isEmptyValue(this.getSearchdata()) &&!tu.isEmptyValue(this.admingroup) &&!this.groupuser.equals(this.admingroup)){
				this.setSearchdata(this.getSearchdata()+(char)2+"groupuser"+(char)1+"="+(char)1+getGroupuser());
			}
		}

		public void setPostXml(String xml) throws DaoException{
			if(tu.isEmptyValue(xml)) throw new DaoException("ERROR: Post XML Is null or empty");
			if(!xml.contains("<?xml")) throw new DaoException("ERROR: Please provide xml document header at the begining of each entity in the POST XML body.");
			String [] entitys=xml.split("<?xml");
			for(String entity:entitys){
				String tmp="";
				if(entity.toLowerCase().contains("<privilegegroup>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}else if(entity.toLowerCase().contains("<testuser>")){
					this.setTestuserxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getTestuserxml());
					}
				}else if(entity.toLowerCase().contains("<module>")){
					this.setModulexml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getModulexml());
					}
				}else if(entity.toLowerCase().contains("<objectprivilege>")){
					this.setObjectprivilegexml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getObjectprivilegexml());
					}
				}
			}
		}

		public Rows getTestuserRows(){
			TemplateTable tab=this.DogetPostSelectChild("testuser", "testuser2privilegegroup",this.getParentobjid(),testusercol,testusersqldatatype,this.TestuserFilter);
			String [] propTestuserlist={"status","usertype"};
			String [] codeTestuserlist={};
			String [] relationTestuserlist={"company:testuser2company:hiddin:"};
			Rows rows=tu.getXMLRows(tab, "testuser",codeTestuserlist,propTestuserlist,relationTestuserlist,testusercolcaption,testuserdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(testusercolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getModuleRows(){
			TemplateTable tab=this.DogetPostSelectChild("module", "module2privilegegroup",this.getParentobjid(),modulecol,modulesqldatatype,this.ModuleFilter);
			String [] propModulelist={"name"};
			String [] codeModulelist={};
			String [] relationModulelist={};
			Rows rows=tu.getXMLRows(tab, "module",codeModulelist,propModulelist,relationModulelist,modulecolcaption,moduledatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(modulecolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getObjectprivilegeRows(){
			TemplateTable tab=this.DogetPostSelectChild("objectprivilege", "objectprivilege2privilegegroup",this.getParentobjid(),objectprivilegecol,objectprivilegesqldatatype,this.ObjectprivilegeFilter);
			String [] propObjectprivilegelist={"value","type","isrecursive"};
			String [] codeObjectprivilegelist={};
			String [] relationObjectprivilegelist={"moduleobject:objectprivilege2moduleobject:hiddin:"};
			Rows rows=tu.getXMLRows(tab, "objectprivilege",codeObjectprivilegelist,propObjectprivilegelist,relationObjectprivilegelist,objectprivilegecolcaption,objectprivilegedatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(objectprivilegecolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getPrivilegegroupSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.PrivilegegroupFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Privilegegroup");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Privilegegroup", tab, chartcol);
				ArrayList<String> data2= new ArrayList<String>();
				data2.add(datas.get(0));
				Userdata chart= new Userdata(chartcol+".chart",data2);
				userdata.add(chart);
				ArrayList<String> data3= new ArrayList<String>();
				data3.add(datas.get(1));
				Userdata griddata= new Userdata(chartcol+".data",data3);
				userdata.add(griddata);
			}
			rows.setUserdata(userdata);
			return rows;
		}

		public Rows getPrivilegegroupRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.PrivilegegroupFilter,false);
			Rows rows=tu.getXMLRows(tab, "Privilegegroup",codePrivilegegrouplist,propPrivilegegrouplist,relationPrivilegegrouplist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getPrivilegegroupForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.PrivilegegroupFilter,true);
			Items items=tu.getXMLForm(tab, "Privilegegroup",codePrivilegegrouplist,propPrivilegegrouplist,relationPrivilegegrouplist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getPrivilegegroupRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Privilegegroup",codePrivilegegrouplist,propPrivilegegrouplist,relationPrivilegegrouplist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getPrivilegegroupRowUpdated(){
			Rows rows;
			String sql= "update table_Privilegegroup set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getPrivilegegroupRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postPrivilegegroupContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getPrivilegegroupByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Privilegegroup where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Privilegegroup",codePrivilegegrouplist,propPrivilegegrouplist,relationPrivilegegrouplist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
