
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

	public class OpportunityDao extends OpportunityImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"opportunity,"};
		private String []childtabs={""};
		private String []childtabnames={""};
		
		private String [] maincol={"objid","opportunity2assignedto","opportunity2lead","name","lastname","company","address","country","state","city","zipcode","officephone","mobile","fax","email","url","othercontact","quicknote","opportunitystage","startdate","dealdate","agentid","opportunityid"};
		private String [] maincolcaption={"Id","AssignedTo","Lead","Name","Last Name","Company","Address","Country","State","City","Zip","Office Number","Mobile No","Fax","Email","URL","Other Contact","Quick Note","Stage","Start Date","Closing","Agent Id","Opportunity Id"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.DATE,DataType.DATE,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","input","input","input","input","input","input","input","input","input","input","input","input","input","input","input","combo","calendar","calendar","input","input"};
		private String [] maindatadomain={"Int_t","Int_t","Int_t","Name_t","Name_t","Name_t","String300_t","String30_t","String30_t","String50_t","String10_t","Phone_t","Phone_t","Phone_t","Email_t","String100_t","String500_t","String4000_t","Type_t","Date_t","Date_t","String20_t","String20_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#select_filter,#text_filter,#text_filter,#text_filter,,#text_filter,#text_filter,#text_filter,#text_filter,,,,,,,,#select_filter,,,,"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name","lastname","address","country","state","city","zipcode","officephone","othercontact","quicknote","opportunitystage"};
		private String [] reportcolcaption={"Id","Name","Last Name","Address","Country","State","City","Zip","Office Number","Other Contact","Quick Note","Stage"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t","Name_t","String300_t","String30_t","String30_t","String50_t","String10_t","Phone_t","String500_t","String4000_t","Type_t"};
		
		private String [] searchcol={"objid","name","lastname","company","country","state","city","zipcode","opportunitystage"};
		private String [] searchcolcaption={"Id","Name","Last Name","Company","Country","State","City","Zip","Stage"};
		private String [] searchcoltype={"integer","text","text","text","text","text","text","text","select"};
		private String [] searchdatadomain={"Id_t","Name_t","Name_t","Name_t","String30_t","String30_t","String50_t","String10_t","Type_t"};

		private String [] propOpportunitylist={"opportunitystage"};
		private String [] codeOpportunitylist={};
		private String [] relationOpportunitylist={"assignedto:opportunity2assignedto:list:","lead:opportunity2lead:hiddin:"};

		public OpportunityDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Opportunity");
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
				if(entity.toLowerCase().contains("<opportunity>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}
			}
		}

		public Rows getOpportunitySummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.OpportunityFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Opportunity");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Opportunity", tab, chartcol);
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

		public Rows getOpportunityRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.OpportunityFilter,false);
			Rows rows=tu.getXMLRows(tab, "Opportunity",codeOpportunitylist,propOpportunitylist,relationOpportunitylist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getOpportunityForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.OpportunityFilter,true);
			Items items=tu.getXMLForm(tab, "Opportunity",codeOpportunitylist,propOpportunitylist,relationOpportunitylist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getOpportunityRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Opportunity",codeOpportunitylist,propOpportunitylist,relationOpportunitylist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getOpportunityRowUpdated(){
			Rows rows;
			String sql= "update table_Opportunity set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getOpportunityRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postOpportunityContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getOpportunityByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Opportunity where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Opportunity",codeOpportunitylist,propOpportunitylist,relationOpportunitylist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
