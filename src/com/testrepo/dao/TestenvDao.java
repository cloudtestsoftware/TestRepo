
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

	public class TestenvDao extends TestenvImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []childtabs={"sceneriorun"};
		
		private String [] maincol={"objid","testenv2testmatrix","name","short","isactive","threadcount"};
		private String [] maincolcaption={"Id","TestMatrix","Name","Short Name","Is Active","Threads Count"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER};
		private String [] mainformfields={"input","input","input","input","combo","combo"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t","String20_t","Boolean_t","Int_t"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};

		private String [] propTestenvlist={"isactive","threadcount"};
		private String [] codeTestenvlist={};
		private String [] relationTestenvlist={"testmatrix:testenv2testmatrix:hiddin:"};
		
		private String [] scenerioruncol={"objid","name","envname","status","runtype","executedby","rundate"};
		private String [] scenerioruncolcaption={"Id","Name","Env Name","Status","Run Type","Executed By","Run Date"};
		private String [] sceneriorunsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.DATE};
		private String [] sceneriorundatadomain={"Int_t","Name_t","Name_t","Status_t","Type_t","Name_t","Date_t"};
		private String [] sceneriorundisable={"yes","no","no","no","no","no","no"};
		private String [] scenerioruncolsearch={"#text_filter,#text_filter,#text_filter,#select_filter,#select_filter,#text_filter,#text_filter"};

		public TestenvDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Testenv");
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
				if(entity.toLowerCase().contains("<testenv>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}else if(entity.toLowerCase().contains("<sceneriorun>")){
					this.setSceneriorunxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getSceneriorunxml());
					}
				}
			}
		}

		public Rows getSceneriorunRows(){
			TemplateTable tab=this.DogetPostSelectChild("sceneriorun", "sceneriorun2testenv",this.getParentobjid(),scenerioruncol,sceneriorunsqldatatype,this.SceneriorunFilter);
			String [] propSceneriorunlist={"status","runtype"};
			String [] codeSceneriorunlist={};
			String [] relationSceneriorunlist={};
			Rows rows=tu.getXMLRows(tab, "sceneriorun",codeSceneriorunlist,propSceneriorunlist,relationSceneriorunlist,scenerioruncolcaption,sceneriorundatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(scenerioruncolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getTestenvSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.TestenvFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Testenv");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Testenv", tab, chartcol);
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

		public Rows getTestenvRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.TestenvFilter,false);
			Rows rows=tu.getXMLRows(tab, "Testenv",codeTestenvlist,propTestenvlist,relationTestenvlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getTestenvForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.TestenvFilter,true);
			Items items=tu.getXMLForm(tab, "Testenv",codeTestenvlist,propTestenvlist,relationTestenvlist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getTestenvRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Testenv",codeTestenvlist,propTestenvlist,relationTestenvlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getTestenvRowUpdated(){
			Rows rows;
			String sql= "update table_Testenv set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getTestenvRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postTestenvContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getTestenvByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Testenv where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Testenv",codeTestenvlist,propTestenvlist,relationTestenvlist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
