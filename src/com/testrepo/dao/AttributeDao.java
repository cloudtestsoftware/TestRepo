
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

	public class AttributeDao extends AttributeImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"attribute,attrprivilege,listproperty"};
		private String []childtabs={"attrprivilege,listproperty"};
		private String []childtabnames={"AttrPrivilege,ListProperty"};
		
		private String [] maincol={"objid","attribute2object","name","tablename","hasproperty","hascodeobject"};
		private String [] maincolcaption={"Id","Object","Attribute Name","Table Name","Has Property","Has Code"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","input","input","input"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t","Name_t","Type_t","Type_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#text_filter,#text_filter,#text_filter,#text_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name","tablename"};
		private String [] reportcolcaption={"Id","Attribute Name","Table Name"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t","Name_t"};
		
		private String [] searchcol={"objid","name","tablename","hasproperty","hascodeobject"};
		private String [] searchcolcaption={"Id","Attribute Name","Table Name","Has Property","Has Code"};
		private String [] searchcoltype={"integer","text","text","text","text"};
		private String [] searchdatadomain={"Id_t","Name_t","Name_t","Type_t","Type_t"};

		private String [] propAttributelist={"hasproperty","hascodeobject"};
		private String [] codeAttributelist={};
		private String [] relationAttributelist={"object:attribute2object:list:"};
		
		private String [] attrprivilegecol={"objid","attrprivilege2objectprivilege","name","value"};
		private String [] attrprivilegecolcaption={"Id","ObjectPrivilege","Attribute Name","Privelege Value"};
		private String [] attrprivilegesqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR};
		private String [] attrprivilegedatadomain={"Int_t","Int_t","Name_t","String20_t"};
		private String [] attrprivilegedisable={"yes","no","no","no"};
		private String [] attrprivilegecolsearch={"#text_filter,#select_filter,#text_filter,#select_filter"};
		
		private String [] listpropertycol={"objid","listproperty2object","propertystring","propertyvalue","propindex","name"};
		private String [] listpropertycolcaption={"Id","Object","Property String","Property Value","Index","Rule Name"};
		private String [] listpropertysqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR};
		private String [] listpropertydatadomain={"Int_t","Int_t","String50_t","String50_t","Int_t","Name_t"};
		private String [] listpropertydisable={"yes","no","no","no","no","no"};
		private String [] listpropertycolsearch={"#text_filter,#select_filter,#text_filter,,,#text_filter"};

		public AttributeDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Attribute");
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
				if(entity.toLowerCase().contains("<attribute>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}else if(entity.toLowerCase().contains("<attrprivilege>")){
					this.setAttrprivilegexml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getAttrprivilegexml());
					}
				}else if(entity.toLowerCase().contains("<listproperty>")){
					this.setListpropertyxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getListpropertyxml());
					}
				}
			}
		}

		public Rows getAttrprivilegeRows(){
			TemplateTable tab=this.DogetPostSelectChild("attrprivilege", "attrprivilege2attribute",this.getParentobjid(),attrprivilegecol,attrprivilegesqldatatype,this.AttrprivilegeFilter);
			String [] propAttrprivilegelist={"value"};
			String [] codeAttrprivilegelist={};
			String [] relationAttrprivilegelist={"objectprivilege:attrprivilege2objectprivilege:hiddin:"};
			Rows rows=tu.getXMLRows(tab, "attrprivilege",codeAttrprivilegelist,propAttrprivilegelist,relationAttrprivilegelist,attrprivilegecolcaption,attrprivilegedatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(attrprivilegecolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getListpropertyRows(){
			TemplateTable tab=this.DogetPostSelectChild("listproperty", "listproperty2attribute",this.getParentobjid(),listpropertycol,listpropertysqldatatype,this.ListpropertyFilter);
			String [] propListpropertylist={};
			String [] codeListpropertylist={};
			String [] relationListpropertylist={"object:listproperty2object:hiddin:"};
			Rows rows=tu.getXMLRows(tab, "listproperty",codeListpropertylist,propListpropertylist,relationListpropertylist,listpropertycolcaption,listpropertydatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(listpropertycolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getAttributeSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.AttributeFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Attribute");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Attribute", tab, chartcol);
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

		public Rows getAttributeRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.AttributeFilter,false);
			Rows rows=tu.getXMLRows(tab, "Attribute",codeAttributelist,propAttributelist,relationAttributelist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getAttributeForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.AttributeFilter,true);
			Items items=tu.getXMLForm(tab, "Attribute",codeAttributelist,propAttributelist,relationAttributelist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getAttributeRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Attribute",codeAttributelist,propAttributelist,relationAttributelist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getAttributeRowUpdated(){
			Rows rows;
			String sql= "update table_Attribute set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getAttributeRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postAttributeContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getAttributeByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Attribute where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Attribute",codeAttributelist,propAttributelist,relationAttributelist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
