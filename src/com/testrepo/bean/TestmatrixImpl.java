
 	 package com.testrepo.bean; 

 	 import org.apache.commons.logging.Log; 
 	 import org.apache.commons.logging.LogFactory; 
 	 import cms.service.app.ApplicationConstants; 
	 import cms.service.event.EventListener;
	 import cms.service.template.*; 
	 /** A simple bean that has a single String property 
	 *  called message. 
 	 *  
	 * @author S.K Jana Version 1.0 
 	 * @Copyright : This code belongs to SoftleanErp.com. All right reserved! 
 	 * @since 2005-2013 
 	 */ 

	 public class TestmatrixImpl {
		 protected static Log logger = LogFactory.getLog(TestmatrixImpl.class); 
 		 protected static ApplicationConstants ACONST =new ApplicationConstants(); 
 		 protected static TemplateUtility tu=new TemplateUtility();
		 protected TemplateTable maindata=new TemplateTable();
		 protected String searchdata,object,parentobjid,filters,relationfilter,data; 
		 protected String username, groupuser,token,clientip,admingroup;
		 protected int pagesize=30; 
 		 protected int page;
 		 protected String mainxml;
 
		 protected String grouprunxml,grouprundeleteid;
		 protected String matrixmapxml,matrixmapdeleteid;

		 protected TemplateTable grouprundata=new TemplateTable();

		 protected TemplateTable matrixmapdata=new TemplateTable();

		 public String TestmatrixFilter="product.name ProductName@testmatrix,product@testmatrix.testmatrix2product=product.objid";
		 public String GrouprunFilter="product.name ProductName@GroupRun,product@GroupRun.GroupRun2product=product.objid";
		 public String MatrixmapFilter="";

		 public void setObject(String object){
			 this.object=object;
		 }
		 public String getObject(){
			 return(this.object);
		 }
		 public void setFilters(String filters){
			 this.filters=filters;
		 }
		 public String getFilters(){
			 return(filters);
		 }
		 public void setData(String data){
			 this.data=data;
		 }
		 public String getData(){
			 return(data);
		 }
		 public void setRelationFilters(String relationfilter){
			 this.relationfilter=relationfilter;
		 }
		 public String getRelationFilters(){
			 return(relationfilter);
		 }
		 public void setClientip(String clientip){
			 this.clientip=clientip;
		 }
		 public String getClientip(){
			 return(clientip);
		 }
		 public void setPagesize(int pagesize){
			 this.pagesize=pagesize;
		 }
		 public  int getPagesize(){
			 return(pagesize);
		 }
		 public void setPage(int page){
			 this.page=page;
		 }
		 public int getPage(){
			 return(page);
		 }
		 public void setToken(String token){
			 this.token=token;
		 }
		 public String getToken(){
			 return(token);
		 }
		 public void setUsername(String username){
			 this.username=username;
		 }
		 public String getUsername(){
			 return(username);
		 }
		 public void setMainxml(String mainxml){
			 this.mainxml=mainxml;
		 }
		 public String getMainxml(){
			 return(mainxml);
		 }
		 public void setGroupuser(String groupuser){
			 this.groupuser=groupuser;
		 }
		 public String getGroupuser(){
			 return(groupuser);
		 }
		 public void setSearchdata(String searchdata){
			 this.searchdata=searchdata;
		 }
		 public String getSearchdata(){
			 return(searchdata);
		 }
		 public void setParentobjid(String parentobjid){
			 this.parentobjid=parentobjid;
		 }
		 public String getParentobjid(){
			 return(parentobjid);
		 }
		 public String getGrouprunxml() {
			 return grouprunxml;
		 }
		 public void setGrouprunxml(String grouprunxml) {
			 this.grouprunxml=grouprunxml;
		 }
		 public String getGrouprundeleteid() {
			 return grouprundeleteid;
		 }
		 public void setGrouprundeleteid(String grouprundeleteid) {
			 this.grouprundeleteid=grouprundeleteid;
		 }
		 public String getMatrixmapxml() {
			 return matrixmapxml;
		 }
		 public void setMatrixmapxml(String matrixmapxml) {
			 this.matrixmapxml=matrixmapxml;
		 }
		 public String getMatrixmapdeleteid() {
			 return matrixmapdeleteid;
		 }
		 public void setMatrixmapdeleteid(String matrixmapdeleteid) {
			 this.matrixmapdeleteid=matrixmapdeleteid;
		 }


		  public  TemplateTable  DogetPostSelect(String[] column,String[] datatype,String parentfilter,boolean isform){
			 String sql="";
			 TemplateQuery query =new TemplateQuery();
			//do some custom pre query operation if any 
			 EventListener.registerPreQueryParent("Testmatrix",column,datatype);
			 query.setUserName(this.getUsername());
			 if(isform){
				 query.setIsForm(isform);
			 }
			 if (tu.isEmptyValue(parentfilter)){
				 if(!tu.isEmptyValue(this.getParentobjid()))
					query.makeTableSelect(this.getObject(),"ObjId","=",this.getParentobjid(),column,datatype);
				 else
					query.makeSQL(this.getObject(),query.getArrayData(this.getSearchdata()),column,datatype);
			 }else{
				 if(!tu.isEmptyValue(this.getParentobjid()))
					 query.makeTableSelectObjectFilter(this.getObject(),"ObjId","=",this.getParentobjid(),column,datatype,parentfilter);
				 else
					 query.makeObjectFilterSQL(this.getObject(),query.getArrayData(this.getSearchdata()),column,datatype,parentfilter);
			 }
			 if(ACONST.GENERATE_LOG)
				 logger.info(query.getQuery());
			 if(this.getPage()>0){
				 int startrow=(this.getPage()-1)*getPagesize();
				 query.setStartRow(startrow);
				 query.setNumRows(getPagesize());
			}
			 maindata=query.getTableResultset();
					// do any post query operation for custom implementation
					EventListener.registerPostQueryParent("Testmatrix",column,datatype);
			 return(maindata);
		 }


		 public  TemplateTable  DogetPostSelectChild(String childname,String relfield,String pid,String[]column,String[]datatype,String childfilter){
			String sql=""; 
			TemplateTable data =new TemplateTable();
			TemplateQuery query =new TemplateQuery();
			// Do some pre query child operation for custom implementation
			EventListener.registerPreQueryChild("Testmatrix",childname,pid,relfield,column,datatype);
			if (tu.isEmptyValue(childfilter)){
				sql=query.makeChildSql(this.getObject(),childname,relfield,pid,column,datatype);
			}else{
					sql=query.makeChildObjectFilterSql(this.getObject(),childname,relfield,pid,column,datatype,childfilter);
			}
			query.setQuery(sql);
			data=query.getTableResultset();
			if(ACONST.GENERATE_LOG)
				logger.info(query.getQuery());
			if (data.getRowCount()>0){
			//Do some post query operation for child
					EventListener.registerPostQueryChild("Testmatrix",childname,pid,relfield,column,datatype);
			}
			return(data);
		}
		public  boolean   DogetPostDelete(String[] childtabs){
			TemplateQuery query =new TemplateQuery();
			// Do some pre delete operation 
			String sql=query.removeSql("Testmatrix",this.getParentobjid(),childtabs);
			if(!tu.isEmptyValue(sql)){
				tu.applyObjectRuleForDelete("Testmatrix",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_BEFORE,this.getParentobjid());
				EventListener.registerPreDeleteEvent("Testmatrix",this.getParentobjid());
				query.setQuery(sql);
				if(ACONST.GENERATE_LOG)
					logger.info(query.getQuery());
				if (query.getTableResultset().getRowCount()>0){
					// Do some post delete operation
					tu.applyObjectRuleForDelete("Testmatrix",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_AFTER,this.getParentobjid());
					EventListener.registerPostDeleteEvent("Testmatrix",this.getParentobjid());
					return(true);
				}
			}
			return(false);
		}

		public  boolean  DogetPostInsert(){
			String sql=null;
			String usql=""; 
			TemplateQuery query =new TemplateQuery();
			if(!tu.isEmptyValue(this.getMainxml())){
					sql=query.makeBulkSQL(true,this.getMainxml(),"TestMatrix2Product",this.getUsername(),this.getGroupuser());
					maindata=query.getTableData();
					tu.applyObjectRule("Testmatrix",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,maindata);
					EventListener.registerPreInsertEvent("Testmatrix",maindata);
			}
			if(sql==null){
					if(ACONST.GENERATE_LOG)
						logger.info(" WARNING: Parent record exists! Duplicate record");
				return(false);
			}else{
				 if(ACONST.GENERATE_LOG)
				 logger.info("parent ObjId="+query.getObjId());
				setParentobjid(query.getObjId()); 
				 if(!tu.isEmptyValue(this.getGrouprunxml()) ){
					 sql+=query.makeBulkSQL(false,getGrouprunxml(),"GroupRun2TestMatrix",this.getUsername(),this.getGroupuser());
					 grouprundata=query.getTableData();
					 tu.applyObjectRule("Grouprun",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,grouprundata);
					 EventListener.registerPreInsertEvent("GroupRun",grouprundata);
				}
				 if(!tu.isEmptyValue(this.getMatrixmapxml()) ){
					 sql+=query.makeBulkSQL(false,getMatrixmapxml(),"MatrixMap2TestMatrix",this.getUsername(),this.getGroupuser());
					 matrixmapdata=query.getTableData();
					 tu.applyObjectRule("Matrixmap",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,matrixmapdata);
					 EventListener.registerPreInsertEvent("MatrixMap",matrixmapdata);
				}
			 }
			 sql+="\t\t end;";
			 query.setQuery(sql);
			if(ACONST.GENERATE_LOG)
			 logger.info(query.getQuery());
			 if (query.getTableResultset().getRowCount()>0){
				
				 usql=(usql.equals("")?"":"\n\t begin"+usql +"\n\t end;");
				 if(!usql.equals(""))
					 tu.executeQuery(usql);
				 tu.applyObjectRule("Testmatrix",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,maindata);
				 tu.applyMTMRelation("Testmatrix","Testmatrix",getParentobjid());
				 EventListener.registerPostInsertEvent("Testmatrix",maindata);
				 tu.applyObjectRule("Grouprun",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,grouprundata);
				 tu.applyMTMRelation("grouprun","Testmatrix",getParentobjid());
				 EventListener.registerPostInsertEvent("GroupRun",grouprundata);
				 tu.applyObjectRule("Matrixmap",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,matrixmapdata);
				 tu.applyMTMRelation("matrixmap","Testmatrix",getParentobjid());
				 EventListener.registerPostInsertEvent("MatrixMap",matrixmapdata);
				 return(true);
			}
			 return(false);
		}
	}
