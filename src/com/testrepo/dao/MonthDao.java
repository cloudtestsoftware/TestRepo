
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

	public class MonthDao extends MonthImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"month,"};
		private String []childtabs={""};
		private String []childtabnames={""};
		
		private String [] maincol={"objid","month2calendar","name","yearcode","monthcode"};
		private String [] maincolcaption={"Id","Calendar","Name","Year","Month"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","combo","combo"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t","Code_t","Code_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#text_filter,#select_filter,#select_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name","yearcode","monthcode"};
		private String [] reportcolcaption={"Id","Name","Year","Month"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t","Code_t","Code_t"};
		
		private String [] searchcol={"objid","name","yearcode","monthcode"};
		private String [] searchcolcaption={"Id","Name","Year","Month"};
		private String [] searchcoltype={"integer","text","select","select"};
		private String [] searchdatadomain={"Id_t","Name_t","Code_t","Code_t"};

		private String [] propMonthlist={};
		private String [] codeMonthlist={"yearcode","monthcode"};
		private String [] relationMonthlist={"calendar:month2calendar:list:"};

		public MonthDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Month");
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
				if(entity.toLowerCase().contains("<month>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}
			}
		}

		public Rows getMonthSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.MonthFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Month");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Month", tab, chartcol);
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

		public Rows getMonthRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.MonthFilter,false);
			Rows rows=tu.getXMLRows(tab, "Month",codeMonthlist,propMonthlist,relationMonthlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getMonthForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.MonthFilter,true);
			Items items=tu.getXMLForm(tab, "Month",codeMonthlist,propMonthlist,relationMonthlist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getMonthRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Month",codeMonthlist,propMonthlist,relationMonthlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getMonthRowUpdated(){
			Rows rows;
			String sql= "update table_Month set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getMonthRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postMonthContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getMonthByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Month where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Month",codeMonthlist,propMonthlist,relationMonthlist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
