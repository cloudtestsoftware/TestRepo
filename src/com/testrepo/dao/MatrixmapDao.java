
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

	public class MatrixmapDao extends MatrixmapImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"matrixmap,"};
		private String []childtabs={""};
		private String []childtabnames={""};
		
		private String [] maincol={"objid","matrixmap2scenerio","matrixmap2scenerio","matrixmap2testmatrix","name","isactive"};
		private String [] maincolcaption={"Id","Scenerio","Scenerio","TestMatrix","Name","Is Active"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.INTEGER,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","input","input","combo"};
		private String [] maindatadomain={"Int_t","Int_t","Int_t","Int_t","Name_t","Boolean_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#select_filter,#select_filter,#text_filter,#select_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name"};
		private String [] reportcolcaption={"Id","Name"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t"};
		
		private String [] searchcol={"objid","name","isactive"};
		private String [] searchcolcaption={"Id","Name","Is Active"};
		private String [] searchcoltype={"integer","text","select"};
		private String [] searchdatadomain={"Id_t","Name_t","Boolean_t"};

		private String [] propMatrixmaplist={"isactive"};
		private String [] codeMatrixmaplist={};
		private String [] relationMatrixmaplist={"scenerio:matrixmap2scenerio:hiddin:table_scenerio s, table_matrixmap mm, table_testmatrix m,table_project p,table_feature f@p.project2product=m.testmatrix2product and p.objid=f.feature2project and f.objid=s.scenerio2feature and s.objid=mm.matrixmap2scenerio(+) and mm.objid(+) is null and not exists (select *from table_matrixmap m2 where s.objid=m2.matrixmap2scenerio and m.objid=m2.matrixmap2testmatrix and m2.objid is not null) union  select distinct m.name name,s.name scenerio,nvl(mm.isactive,0) isactive,m.objid matrixmap2testmatrix,s.objid matrixmap2scenerio,mm.objid, s.groupuser from table_scenerio s, table_matrixmap mm, table_testmatrix m,table_project p,table_feature f  where p.project2product=m.testmatrix2product  and p.objid=f.feature2project  and f.objid=s.scenerio2feature and s.objid=mm.matrixmap2scenerio and m.objid=mm.matrixmap2testmatrix(+) and mm.objid (+) is not null","scenerio:matrixmap2scenerio:hiddin:","testmatrix:matrixmap2testmatrix:list:"};

		public MatrixmapDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Matrixmap");
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
				if(entity.toLowerCase().contains("<matrixmap>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}
			}
		}

		public Rows getMatrixmapSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.MatrixmapFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Matrixmap");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Matrixmap", tab, chartcol);
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

		public Rows getMatrixmapRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.MatrixmapFilter,false);
			Rows rows=tu.getXMLRows(tab, "Matrixmap",codeMatrixmaplist,propMatrixmaplist,relationMatrixmaplist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getMatrixmapForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.MatrixmapFilter,true);
			Items items=tu.getXMLForm(tab, "Matrixmap",codeMatrixmaplist,propMatrixmaplist,relationMatrixmaplist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getMatrixmapRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Matrixmap",codeMatrixmaplist,propMatrixmaplist,relationMatrixmaplist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getMatrixmapRowUpdated(){
			Rows rows;
			String sql= "update table_Matrixmap set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getMatrixmapRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postMatrixmapContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getMatrixmapByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Matrixmap where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Matrixmap",codeMatrixmaplist,propMatrixmaplist,relationMatrixmaplist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
