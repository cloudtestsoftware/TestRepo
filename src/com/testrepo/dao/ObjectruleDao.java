
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

	public class ObjectruleDao extends ObjectruleImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"objectrule,actionquery"};
		private String []childtabs={"actionquery"};
		private String []childtabnames={"ActionQuery"};
		
		private String [] maincol={"objid","objectrule2object","name","tablename","effectedtable","description","reason","actionstate","condition","ruleindex","status"};
		private String [] maincolcaption={"Id","Object","Rule Name","Table Name","Effected Table","Description","Reason","Action State","Condition ($)","Rule Index","Status"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","input","input","input","combo","combo","input","input","input"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t","Name_t","Name_t","String4000_t","Type_t","Type_t","String500_t","Int_t","Status_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#text_filter,#text_filter,#text_filter,#text_filter,#select_filter,#select_filter,#text_filter,#text_filter,#text_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name","tablename","effectedtable","description","reason","actionstate","ruleindex","status"};
		private String [] reportcolcaption={"Id","Rule Name","Table Name","Effected Table","Description","Reason","Action State","Rule Index","Status"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t","Name_t","Name_t","String4000_t","Type_t","Type_t","Int_t","Status_t"};
		
		private String [] searchcol={"objid","name","tablename","effectedtable","description","reason","actionstate","condition","ruleindex","status"};
		private String [] searchcolcaption={"Id","Rule Name","Table Name","Effected Table","Description","Reason","Action State","Condition ($)","Rule Index","Status"};
		private String [] searchcoltype={"integer","text","text","text","text","select","select","text","text","text"};
		private String [] searchdatadomain={"Id_t","Name_t","Name_t","Name_t","String4000_t","Type_t","Type_t","String500_t","Int_t","Status_t"};

		private String [] propObjectrulelist={"reason","actionstate","status"};
		private String [] codeObjectrulelist={};
		private String [] relationObjectrulelist={"object:objectrule2object:list:"};
		
		private String [] actionquerycol={"objid","name","stepno","input","inputdatatype","output","querytype","hasrecordset","status"};
		private String [] actionquerycolcaption={"Id","Action Name","StepNo","Input(@param)","Input Datatype(@type)","Output($param)","Query Type","Has Recordset","Status"};
		private String [] actionquerysqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] actionquerydatadomain={"Int_t","Name_t","Int_t","String4000_t","String500_t","String1000_t","Type_t","Boolean_t","Status_t"};
		private String [] actionquerydisable={"yes","no","no","no","no","no","no","no","no"};
		private String [] actionquerycolsearch={"#text_filter,#text_filter,#text_filter,,,,#select_filter,#select_filter,#text_filter"};

		public ObjectruleDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Objectrule");
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
				if(entity.toLowerCase().contains("<objectrule>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}else if(entity.toLowerCase().contains("<actionquery>")){
					this.setActionqueryxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getActionqueryxml());
					}
				}
			}
		}

		public Rows getActionqueryRows(){
			TemplateTable tab=this.DogetPostSelectChild("actionquery", "actionquery2objectrule",this.getParentobjid(),actionquerycol,actionquerysqldatatype,this.ActionqueryFilter);
			String [] propActionquerylist={"querytype","hasrecordset","status"};
			String [] codeActionquerylist={};
			String [] relationActionquerylist={};
			Rows rows=tu.getXMLRows(tab, "actionquery",codeActionquerylist,propActionquerylist,relationActionquerylist,actionquerycolcaption,actionquerydatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(actionquerycolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getObjectruleSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.ObjectruleFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Objectrule");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Objectrule", tab, chartcol);
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

		public Rows getObjectruleRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.ObjectruleFilter,false);
			Rows rows=tu.getXMLRows(tab, "Objectrule",codeObjectrulelist,propObjectrulelist,relationObjectrulelist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getObjectruleForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.ObjectruleFilter,true);
			Items items=tu.getXMLForm(tab, "Objectrule",codeObjectrulelist,propObjectrulelist,relationObjectrulelist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getObjectruleRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Objectrule",codeObjectrulelist,propObjectrulelist,relationObjectrulelist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getObjectruleRowUpdated(){
			Rows rows;
			String sql= "update table_Objectrule set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getObjectruleRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postObjectruleContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getObjectruleByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Objectrule where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Objectrule",codeObjectrulelist,propObjectrulelist,relationObjectrulelist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
