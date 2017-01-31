
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

	public class CompanyDao extends CompanyImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"company,testuser,subscription"};
		private String []childtabs={"testuser,subscription"};
		private String []childtabnames={"App User,Subscription"};
		
		private String [] maincol={"objid","name","business","contactname","phone","mobileno","street","zipcode","state","country"};
		private String [] maincolcaption={"Id","Name","Business","Contact","Phone","Mobile","Street","Zip Code","State","Country"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","input","input","input","input","input","input","input"};
		private String [] maindatadomain={"Int_t","Name_t","String50_t","String100_t","Phone_t","Phone_t","String100_t","String10_t","String30_t","String50_t"};
		private String [] maincolsearch={"#text_filter,#text_filter,,,,,,,,"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name"};
		private String [] reportcolcaption={"Id","Name"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t"};
		
		private String [] searchcol={"objid","name"};
		private String [] searchcolcaption={"Id","Name"};
		private String [] searchcoltype={"integer","text"};
		private String [] searchdatadomain={"Id_t","Name_t"};

		private String [] propCompanylist={};
		private String [] codeCompanylist={};
		private String [] relationCompanylist={};
		
		private String [] testusercol={"objid","testuser2privilegegroup","name","lastname","loginname","status","usertype","email"};
		private String [] testusercolcaption={"Id","PrivilegeGroup","Name","Last Name","Login Name","Status","User Type","Email"};
		private String [] testusersqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] testuserdatadomain={"Int_t","Int_t","Name_t","Name_t","Name_t","Status_t","Type_t","Email_t"};
		private String [] testuserdisable={"yes","no","no","no","no","no","no","no"};
		private String [] testusercolsearch={"#text_filter,#select_filter,#text_filter,,,,,"};
		
		private String [] subscriptioncol={"objid","name","subscribecode","fullname","cardno","monthcode","yearcode","cardid","cardtypecode","status"};
		private String [] subscriptioncolcaption={"Id","Login Name","Subscription Type","Full Name(As in Credit Card)","Credit Card Number","Month of Expiry","Year of Expiry","3 Digit Verification No","Card Type","Status"};
		private String [] subscriptionsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] subscriptiondatadomain={"Int_t","Email_t","Code_t","String100_t","String16_t","Code_t","Code_t","String10_t","Code_t","Status_t"};
		private String [] subscriptiondisable={"yes","no","no","no","no","no","no","no","no","yes"};
		private String [] subscriptioncolsearch={"#text_filter,#text_filter,#select_filter,#text_filter,#text_filter,#select_filter,#select_filter,#text_filter,#select_filter,#select_filter"};

		public CompanyDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Company");
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
				if(entity.toLowerCase().contains("<company>")){
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
				}else if(entity.toLowerCase().contains("<subscription>")){
					this.setSubscriptionxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getSubscriptionxml());
					}
				}
			}
		}

		public Rows getTestuserRows(){
			TemplateTable tab=this.DogetPostSelectChild("testuser", "testuser2company",this.getParentobjid(),testusercol,testusersqldatatype,this.TestuserFilter);
			String [] propTestuserlist={"status","usertype"};
			String [] codeTestuserlist={};
			String [] relationTestuserlist={"privilegegroup:testuser2privilegegroup:hiddin:"};
			Rows rows=tu.getXMLRows(tab, "testuser",codeTestuserlist,propTestuserlist,relationTestuserlist,testusercolcaption,testuserdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(testusercolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getSubscriptionRows(){
			TemplateTable tab=this.DogetPostSelectChild("subscription", "subscription2company",this.getParentobjid(),subscriptioncol,subscriptionsqldatatype,this.SubscriptionFilter);
			String [] propSubscriptionlist={"status"};
			String [] codeSubscriptionlist={"subscribecode","monthcode","yearcode","cardtypecode"};
			String [] relationSubscriptionlist={};
			Rows rows=tu.getXMLRows(tab, "subscription",codeSubscriptionlist,propSubscriptionlist,relationSubscriptionlist,subscriptioncolcaption,subscriptiondatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(subscriptioncolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getCompanySummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.CompanyFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Company");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Company", tab, chartcol);
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

		public Rows getCompanyRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.CompanyFilter,false);
			Rows rows=tu.getXMLRows(tab, "Company",codeCompanylist,propCompanylist,relationCompanylist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getCompanyForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.CompanyFilter,true);
			Items items=tu.getXMLForm(tab, "Company",codeCompanylist,propCompanylist,relationCompanylist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getCompanyRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Company",codeCompanylist,propCompanylist,relationCompanylist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getCompanyRowUpdated(){
			Rows rows;
			String sql= "update table_Company set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getCompanyRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postCompanyContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getCompanyByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters()) &&!tu.isEmptyValue(this.admingroup) &&!this.admingroup.equalsIgnoreCase(this.getGroupuser())){
				newfilter+=" and "+this.getFilters();
			}else if(!tu.isEmptyValue(this.admingroup) &&this.admingroup.equalsIgnoreCase(this.getGroupuser())){
				newfilter=this.getFilters();
			}
			String sql= "select * from table_Company where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Company",codeCompanylist,propCompanylist,relationCompanylist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
