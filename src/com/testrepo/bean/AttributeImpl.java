
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

	 public class AttributeImpl {
		 protected static Log logger = LogFactory.getLog(AttributeImpl.class); 
 		 protected static ApplicationConstants ACONST =new ApplicationConstants(); 
 		 protected static TemplateUtility tu=new TemplateUtility();
		 protected TemplateTable maindata=new TemplateTable();
		 protected String searchdata,object,parentobjid,filters,relationfilter,data; 
		 protected String username, groupuser,token,clientip,admingroup;
		 protected int pagesize=30; 
 		 protected int page;
 		 protected String mainxml;
 
		 protected String attrprivilegexml,attrprivilegedeleteid;
		 protected String listpropertyxml,listpropertydeleteid;

		 protected TemplateTable attrprivilegedata=new TemplateTable();

		 protected TemplateTable listpropertydata=new TemplateTable();

		 public String AttributeFilter="";
		 public String AttrprivilegeFilter="";
		 public String ListpropertyFilter="";

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
		 public String getAttrprivilegexml() {
			 return attrprivilegexml;
		 }
		 public void setAttrprivilegexml(String attrprivilegexml) {
			 this.attrprivilegexml=attrprivilegexml;
		 }
		 public String getAttrprivilegedeleteid() {
			 return attrprivilegedeleteid;
		 }
		 public void setAttrprivilegedeleteid(String attrprivilegedeleteid) {
			 this.attrprivilegedeleteid=attrprivilegedeleteid;
		 }
		 public String getListpropertyxml() {
			 return listpropertyxml;
		 }
		 public void setListpropertyxml(String listpropertyxml) {
			 this.listpropertyxml=listpropertyxml;
		 }
		 public String getListpropertydeleteid() {
			 return listpropertydeleteid;
		 }
		 public void setListpropertydeleteid(String listpropertydeleteid) {
			 this.listpropertydeleteid=listpropertydeleteid;
		 }


		  public  TemplateTable  DogetPostSelect(String[] column,String[] datatype,String parentfilter,boolean isform){
			 String sql="";
			 TemplateQuery query =new TemplateQuery();
			//do some custom pre query operation if any 
			 EventListener.registerPreQueryParent("Attribute",column,datatype);
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
					EventListener.registerPostQueryParent("Attribute",column,datatype);
			 return(maindata);
		 }


		 public  TemplateTable  DogetPostSelectChild(String childname,String relfield,String pid,String[]column,String[]datatype,String childfilter){
			String sql=""; 
			TemplateTable data =new TemplateTable();
			TemplateQuery query =new TemplateQuery();
			// Do some pre query child operation for custom implementation
			EventListener.registerPreQueryChild("Attribute",childname,pid,relfield,column,datatype);
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
					EventListener.registerPostQueryChild("Attribute",childname,pid,relfield,column,datatype);
			}
			return(data);
		}
		public  boolean   DogetPostDelete(String[] childtabs){
			TemplateQuery query =new TemplateQuery();
			// Do some pre delete operation 
			String sql=query.removeSql("Attribute",this.getParentobjid(),childtabs);
			if(!tu.isEmptyValue(sql)){
				tu.applyObjectRuleForDelete("Attribute",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_BEFORE,this.getParentobjid());
				EventListener.registerPreDeleteEvent("Attribute",this.getParentobjid());
				query.setQuery(sql);
				if(ACONST.GENERATE_LOG)
					logger.info(query.getQuery());
				if (query.getTableResultset().getRowCount()>0){
					// Do some post delete operation
					tu.applyObjectRuleForDelete("Attribute",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_AFTER,this.getParentobjid());
					EventListener.registerPostDeleteEvent("Attribute",this.getParentobjid());
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
					sql=query.makeBulkSQL(true,this.getMainxml(),"Attribute2Object",this.getUsername(),this.getGroupuser());
					maindata=query.getTableData();
					tu.applyObjectRule("Attribute",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,maindata);
					EventListener.registerPreInsertEvent("Attribute",maindata);
			}
			if(sql==null){
					if(ACONST.GENERATE_LOG)
						logger.info(" WARNING: Parent record exists! Duplicate record");
				return(false);
			}else{
				 if(ACONST.GENERATE_LOG)
				 logger.info("parent ObjId="+query.getObjId());
				setParentobjid(query.getObjId()); 
				 if(!tu.isEmptyValue(this.getAttrprivilegexml()) ){
					 sql+=query.makeBulkSQL(false,getAttrprivilegexml(),"AttrPrivilege2Attribute",this.getUsername(),this.getGroupuser());
					 attrprivilegedata=query.getTableData();
					 tu.applyObjectRule("Attrprivilege",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,attrprivilegedata);
					 EventListener.registerPreInsertEvent("AttrPrivilege",attrprivilegedata);
				}
				 if(!tu.isEmptyValue(this.getListpropertyxml()) ){
					 sql+=query.makeBulkSQL(false,getListpropertyxml(),"ListProperty2Attribute",this.getUsername(),this.getGroupuser());
					 listpropertydata=query.getTableData();
					 tu.applyObjectRule("Listproperty",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,listpropertydata);
					 EventListener.registerPreInsertEvent("ListProperty",listpropertydata);
				}
			 }
			 sql+="\t\t end;";
			 query.setQuery(sql);
			if(ACONST.GENERATE_LOG)
			 logger.info(query.getQuery());
			 if (query.getTableResultset().getRowCount()>0){
				
				
				 String [] autofieldListPropertylist={"tablename"};
				 String ListPropertyrelation="ListProperty2Attribute";
				 usql+="\n\t\t"+tu.copyParent2Child(maindata,"ListProperty",autofieldListPropertylist,ListPropertyrelation,getParentobjid());
				 usql=(usql.equals("")?"":"\n\t begin"+usql +"\n\t end;");
				 if(!usql.equals(""))
					 tu.executeQuery(usql);
				 tu.applyObjectRule("Attribute",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,maindata);
				 tu.applyMTMRelation("Attribute","Attribute",getParentobjid());
				 EventListener.registerPostInsertEvent("Attribute",maindata);
				 tu.applyObjectRule("Attrprivilege",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,attrprivilegedata);
				 tu.applyMTMRelation("attrprivilege","Attribute",getParentobjid());
				 EventListener.registerPostInsertEvent("AttrPrivilege",attrprivilegedata);
				 tu.applyObjectRule("Listproperty",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,listpropertydata);
				 tu.applyMTMRelation("listproperty","Attribute",getParentobjid());
				 EventListener.registerPostInsertEvent("ListProperty",listpropertydata);
				 return(true);
			}
			 return(false);
		}
	}
