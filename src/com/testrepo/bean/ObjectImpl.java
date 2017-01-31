
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

	 public class ObjectImpl {
		 protected static Log logger = LogFactory.getLog(ObjectImpl.class); 
 		 protected static ApplicationConstants ACONST =new ApplicationConstants(); 
 		 protected static TemplateUtility tu=new TemplateUtility();
		 protected TemplateTable maindata=new TemplateTable();
		 protected String searchdata,object,parentobjid,filters,relationfilter,data; 
		 protected String username, groupuser,token,clientip,admingroup;
		 protected int pagesize=30; 
 		 protected int page;
 		 protected String mainxml;
 
		 protected String attributexml,attributedeleteid;
		 protected String objectrulexml,objectruledeleteid;

		 protected TemplateTable attributedata=new TemplateTable();

		 protected TemplateTable objectruledata=new TemplateTable();

		 public String ObjectFilter="";
		 public String AttributeFilter="";
		 public String ObjectruleFilter="";

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
		 public String getAttributexml() {
			 return attributexml;
		 }
		 public void setAttributexml(String attributexml) {
			 this.attributexml=attributexml;
		 }
		 public String getAttributedeleteid() {
			 return attributedeleteid;
		 }
		 public void setAttributedeleteid(String attributedeleteid) {
			 this.attributedeleteid=attributedeleteid;
		 }
		 public String getObjectrulexml() {
			 return objectrulexml;
		 }
		 public void setObjectrulexml(String objectrulexml) {
			 this.objectrulexml=objectrulexml;
		 }
		 public String getObjectruledeleteid() {
			 return objectruledeleteid;
		 }
		 public void setObjectruledeleteid(String objectruledeleteid) {
			 this.objectruledeleteid=objectruledeleteid;
		 }


		  public  TemplateTable  DogetPostSelect(String[] column,String[] datatype,String parentfilter,boolean isform){
			 String sql="";
			 TemplateQuery query =new TemplateQuery();
			//do some custom pre query operation if any 
			 EventListener.registerPreQueryParent("Object",column,datatype);
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
					EventListener.registerPostQueryParent("Object",column,datatype);
			 return(maindata);
		 }


		 public  TemplateTable  DogetPostSelectChild(String childname,String relfield,String pid,String[]column,String[]datatype,String childfilter){
			String sql=""; 
			TemplateTable data =new TemplateTable();
			TemplateQuery query =new TemplateQuery();
			// Do some pre query child operation for custom implementation
			EventListener.registerPreQueryChild("Object",childname,pid,relfield,column,datatype);
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
					EventListener.registerPostQueryChild("Object",childname,pid,relfield,column,datatype);
			}
			return(data);
		}
		public  boolean   DogetPostDelete(String[] childtabs){
			TemplateQuery query =new TemplateQuery();
			// Do some pre delete operation 
			String sql=query.removeSql("Object",this.getParentobjid(),childtabs);
			if(!tu.isEmptyValue(sql)){
				tu.applyObjectRuleForDelete("Object",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_BEFORE,this.getParentobjid());
				EventListener.registerPreDeleteEvent("Object",this.getParentobjid());
				query.setQuery(sql);
				if(ACONST.GENERATE_LOG)
					logger.info(query.getQuery());
				if (query.getTableResultset().getRowCount()>0){
					// Do some post delete operation
					tu.applyObjectRuleForDelete("Object",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_AFTER,this.getParentobjid());
					EventListener.registerPostDeleteEvent("Object",this.getParentobjid());
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
					sql=query.makeBulkSQL(true,this.getMainxml(),"",this.getUsername(),this.getGroupuser());
					maindata=query.getTableData();
					tu.applyObjectRule("Object",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,maindata);
					EventListener.registerPreInsertEvent("Object",maindata);
			}
			if(sql==null){
					if(ACONST.GENERATE_LOG)
						logger.info(" WARNING: Parent record exists! Duplicate record");
				return(false);
			}else{
				 if(ACONST.GENERATE_LOG)
				 logger.info("parent ObjId="+query.getObjId());
				setParentobjid(query.getObjId()); 
				 if(!tu.isEmptyValue(this.getAttributexml()) ){
					 sql+=query.makeBulkSQL(false,getAttributexml(),"Attribute2Object",this.getUsername(),this.getGroupuser());
					 attributedata=query.getTableData();
					 tu.applyObjectRule("Attribute",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,attributedata);
					 EventListener.registerPreInsertEvent("Attribute",attributedata);
				}
				 if(!tu.isEmptyValue(this.getObjectrulexml()) ){
					 sql+=query.makeBulkSQL(false,getObjectrulexml(),"ObjectRule2Object",this.getUsername(),this.getGroupuser());
					 objectruledata=query.getTableData();
					 tu.applyObjectRule("Objectrule",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,objectruledata);
					 EventListener.registerPreInsertEvent("ObjectRule",objectruledata);
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
				 tu.applyObjectRule("Object",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,maindata);
				 tu.applyMTMRelation("Object","Object",getParentobjid());
				 EventListener.registerPostInsertEvent("Object",maindata);
				 tu.applyObjectRule("Attribute",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,attributedata);
				 tu.applyMTMRelation("attribute","Object",getParentobjid());
				 EventListener.registerPostInsertEvent("Attribute",attributedata);
				 tu.applyObjectRule("Objectrule",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,objectruledata);
				 tu.applyMTMRelation("objectrule","Object",getParentobjid());
				 EventListener.registerPostInsertEvent("ObjectRule",objectruledata);
				 return(true);
			}
			 return(false);
		}
	}
