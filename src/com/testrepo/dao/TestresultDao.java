
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

	public class TestresultDao extends TestresultImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={""};
		private String []childtabs={""};
		private String []childtabnames={""};
		
		private String [] maincol={"objid","testresult2testscenerio","name","matrixname","testcount"};
		private String [] maincolcaption={"Id","TestScenerio","Name","Matrix Name","Test Count"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER};
		private String [] mainformfields={"input","input","input","input","input"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t","Name_t","Int_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#text_filter,#text_filter,#text_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name","matrixname","testcount"};
		private String [] reportcolcaption={"Id","Name","Matrix Name","Test Count"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.INTEGER};
		private String [] reportdatadomain={"Id_t","Name_t","Name_t","Int_t"};
		
		private String [] searchcol={"objid","name","matrixname","testcount"};
		private String [] searchcolcaption={"Id","Name","Matrix Name","Test Count"};
		private String [] searchcoltype={"integer","text","text","text"};
		private String [] searchdatadomain={"Id_t","Name_t","Name_t","Int_t"};

		private String [] propTestresultlist={};
		private String [] codeTestresultlist={};
		private String [] relationTestresultlist={"testscenerio:testresult2testscenerio:hiddin:table_testcount tc,table_testrun tr, table_scenerio ts,table_sceneriorun sr,table_testenv e@tr.testrun2testmatrix=tc.testcount2testmatrix and tc.testcount2scenerio=ts.objid and tr.testrun2testmatrix=e.testenv2testmatrix and e.objid=sr.sceneriorun2testenv(+) and sr.sceneriorun2testscenerio=ts.objid union select distinct ts.name name,tc.name matrixname,tc.testcount testcount,0 executed,0 passed, 0 fail,0 skipped,0 pending,0 defect,ts.objid,tr.groupuser,ts.objid testresult2scenerio,tr.testrun2testmatrix testresult2testmatrix,tr.objid testresult2testrun from table_testcount tc,table_testrun tr, table_scenerio ts,table_sceneriorun sr,table_testenv e where tr.testrun2testmatrix=tc.testcount2testmatrix and tc.testcount2scenerio=ts.objid and  tr.testrun2testmatrix=e.testenv2testmatrix and e.objid=sr.sceneriorun2testenv (+) and not exists (select * from table_sceneriorun sr2 where sr2.sceneriorun2testenv= e.objid and sr2.sceneriorun2testrun=tr.objid and sr2.sceneriorun2testscenerio=ts.objid)"};

		public TestresultDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Testresult");
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("generate_log"))){
					ACONST.GENERATE_LOG=true;
			}
			if(!tu.isEmptyValue(uriInfo.getPathParameters().getFirst("id"))){
				this.setParentobjid(uriInfo.getPathParameters().getFirst("id").replace("id-", ""));
			}else{
				this.setSearchdata("ObjId"+(char)1+"All"+(char)1+""+(char)2);
			}
			if(!tu.isEmptyValue(uriInfo.getQueryParameters().getFirst("token"))){
				this.setToken(uriInfo.getQueryParameters().getFirst("token"));
				this.userdata=ServiceManager.verifyUserToken(this.getToken());
			}
			if(this.userdata!=null &&!this.userdata.isEmpty()){
				this.groupuser=userdata.get("groupuser");
				this.username=userdata.get("username");
				this.setSearchdata(this.getSearchdata()+"groupuser"+(char)1+"="+(char)1+getGroupuser());
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
					this.setSearchdata(uriInfo.getQueryParameters().getFirst("filters")+(char)2+"groupuser"+(char)1+"="+(char)1+getGroupuser());
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
		}

		public void setPostXml(String xml) throws DaoException{
			if(tu.isEmptyValue(xml)) throw new DaoException("ERROR: Post XML Is null or empty");
			if(!xml.contains("<?xml")) throw new DaoException("ERROR: Please provide xml document header at the begining of each entity in the POST XML body.");
			String [] entitys=xml.split("<?xml");
			for(String entity:entitys){
				String tmp="";
				if(entity.toLowerCase().contains("<testresult>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}
			}
		}

		public Rows getTestresultSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.TestresultFilter);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Testresult");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Testresult", tab, chartcol);
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

		public Rows getTestresultRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.TestresultFilter);
			Rows rows=tu.getXMLRows(tab, "Testresult",codeTestresultlist,propTestresultlist,relationTestresultlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getTestresultForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.TestresultFilter);
			Items items=tu.getXMLForm(tab, "Testresult",codeTestresultlist,propTestresultlist,relationTestresultlist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getTestresultRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Testresult",codeTestresultlist,propTestresultlist,relationTestresultlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
			public Rows getTestresultRowUpdated(){
			Rows rows;
			String sql= "update table_Testresult set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getTestresultRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postTestresultContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getTestresultByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Testresult where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Testresult",codeTestresultlist,propTestresultlist,relationTestresultlist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
