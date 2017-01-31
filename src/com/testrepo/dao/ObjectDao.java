
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

	public class ObjectDao extends ObjectImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"object,attribute,objectrule"};
		private String []childtabs={"attribute,objectrule"};
		private String []childtabnames={"Attribute,ObjectRule"};
		
		private String [] maincol={"objid","object2application","name","companyaccesstype","useraccesstype","defaultfilter"};
		private String [] maincolcaption={"Id","Application","Object Name","Company Access Type","User Access Type","Default Filter"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","combo","combo","input"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t","Type_t","Type_t","String300_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#text_filter,#select_filter,#select_filter,#text_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name","companyaccesstype","useraccesstype","defaultfilter"};
		private String [] reportcolcaption={"Id","Object Name","Company Access Type","User Access Type","Default Filter"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t","Type_t","Type_t","String300_t"};
		
		private String [] searchcol={"objid","name","companyaccesstype","useraccesstype","defaultfilter"};
		private String [] searchcolcaption={"Id","Object Name","Company Access Type","User Access Type","Default Filter"};
		private String [] searchcoltype={"integer","text","select","select","text"};
		private String [] searchdatadomain={"Id_t","Name_t","Type_t","Type_t","String300_t"};

		private String [] propObjectlist={"companyaccesstype","useraccesstype"};
		private String [] codeObjectlist={};
		private String [] relationObjectlist={"application:object2application:hiddin:"};
		
		private String [] attributecol={"objid","name","tablename","hasproperty"};
		private String [] attributecolcaption={"Id","Attribute Name","Table Name","Has Property"};
		private String [] attributesqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] attributedatadomain={"Int_t","Name_t","Name_t","Type_t"};
		private String [] attributedisable={"yes","no","no","no"};
		private String [] attributecolsearch={"#text_filter,#text_filter,#text_filter,#text_filter"};
		
		private String [] objectrulecol={"objid","name","tablename","effectedtable","reason","actionstate","condition","ruleindex","status"};
		private String [] objectrulecolcaption={"Id","Rule Name","Table Name","Effected Table","Reason","Action State","Condition ($)","Rule Index","Status"};
		private String [] objectrulesqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR};
		private String [] objectruledatadomain={"Int_t","Name_t","Name_t","Name_t","Type_t","Type_t","String500_t","Int_t","Status_t"};
		private String [] objectruledisable={"yes","no","no","no","no","no","no","no","no"};
		private String [] objectrulecolsearch={"#text_filter,#text_filter,#text_filter,#text_filter,#select_filter,#select_filter,#text_filter,#text_filter,#text_filter"};

		public ObjectDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Object");
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
				if(entity.toLowerCase().contains("<object>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}else if(entity.toLowerCase().contains("<attribute>")){
					this.setAttributexml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getAttributexml());
					}
				}else if(entity.toLowerCase().contains("<objectrule>")){
					this.setObjectrulexml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getObjectrulexml());
					}
				}
			}
		}

		public Rows getAttributeRows(){
			TemplateTable tab=this.DogetPostSelectChild("attribute", "attribute2object",this.getParentobjid(),attributecol,attributesqldatatype,this.AttributeFilter);
			String [] propAttributelist={"hasproperty"};
			String [] codeAttributelist={};
			String [] relationAttributelist={};
			Rows rows=tu.getXMLRows(tab, "attribute",codeAttributelist,propAttributelist,relationAttributelist,attributecolcaption,attributedatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(attributecolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getObjectruleRows(){
			TemplateTable tab=this.DogetPostSelectChild("objectrule", "objectrule2object",this.getParentobjid(),objectrulecol,objectrulesqldatatype,this.ObjectruleFilter);
			String [] propObjectrulelist={"reason","actionstate","status"};
			String [] codeObjectrulelist={};
			String [] relationObjectrulelist={};
			Rows rows=tu.getXMLRows(tab, "objectrule",codeObjectrulelist,propObjectrulelist,relationObjectrulelist,objectrulecolcaption,objectruledatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(objectrulecolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getObjectSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.ObjectFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Object");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Object", tab, chartcol);
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

		public Rows getObjectRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.ObjectFilter,false);
			Rows rows=tu.getXMLRows(tab, "Object",codeObjectlist,propObjectlist,relationObjectlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getObjectForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.ObjectFilter,true);
			Items items=tu.getXMLForm(tab, "Object",codeObjectlist,propObjectlist,relationObjectlist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getObjectRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Object",codeObjectlist,propObjectlist,relationObjectlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getObjectRowUpdated(){
			Rows rows;
			String sql= "update table_Object set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getObjectRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postObjectContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getObjectByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Object where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Object",codeObjectlist,propObjectlist,relationObjectlist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
