
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

	 public class AssigntoImpl {
		 protected static Log logger = LogFactory.getLog(AssigntoImpl.class); 
 		 protected static ApplicationConstants ACONST =new ApplicationConstants(); 
 		 protected static TemplateUtility tu=new TemplateUtility();
		 protected TemplateTable maindata=new TemplateTable();
		 protected String searchdata,object,parentobjid,filters,relationfilter,data; 
		 protected String username, groupuser,token,clientip;
		 protected int pagesize=30; 
 		 protected int page;
 		 protected String mainxml;
 
		 protected String bugxml,bugdeleteid;
		 protected String memberxml,memberdeleteid;
		 protected String mybugxml,mybugdeleteid;
		 protected String mytasksxml,mytasksdeleteid;
		 protected String tasksxml,tasksdeleteid;

		 protected TemplateTable bugdata=new TemplateTable();

		 protected TemplateTable memberdata=new TemplateTable();

		 protected TemplateTable mybugdata=new TemplateTable();

		 protected TemplateTable mytasksdata=new TemplateTable();

		 protected TemplateTable tasksdata=new TemplateTable();

		 public String AssigntoFilter="";
		 public String BugFilter="";
		 public String MemberFilter="";
		 public String MybugFilter="";
		 public String MytasksFilter="";
		 public String TasksFilter="";

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
		 public String getBugxml() {
			 return bugxml;
		 }
		 public void setBugxml(String bugxml) {
			 this.bugxml=bugxml;
		 }
		 public String getBugdeleteid() {
			 return bugdeleteid;
		 }
		 public void setBugdeleteid(String bugdeleteid) {
			 this.bugdeleteid=bugdeleteid;
		 }
		 public String getMemberxml() {
			 return memberxml;
		 }
		 public void setMemberxml(String memberxml) {
			 this.memberxml=memberxml;
		 }
		 public String getMemberdeleteid() {
			 return memberdeleteid;
		 }
		 public void setMemberdeleteid(String memberdeleteid) {
			 this.memberdeleteid=memberdeleteid;
		 }
		 public String getMybugxml() {
			 return mybugxml;
		 }
		 public void setMybugxml(String mybugxml) {
			 this.mybugxml=mybugxml;
		 }
		 public String getMybugdeleteid() {
			 return mybugdeleteid;
		 }
		 public void setMybugdeleteid(String mybugdeleteid) {
			 this.mybugdeleteid=mybugdeleteid;
		 }
		 public String getMytasksxml() {
			 return mytasksxml;
		 }
		 public void setMytasksxml(String mytasksxml) {
			 this.mytasksxml=mytasksxml;
		 }
		 public String getMytasksdeleteid() {
			 return mytasksdeleteid;
		 }
		 public void setMytasksdeleteid(String mytasksdeleteid) {
			 this.mytasksdeleteid=mytasksdeleteid;
		 }
		 public String getTasksxml() {
			 return tasksxml;
		 }
		 public void setTasksxml(String tasksxml) {
			 this.tasksxml=tasksxml;
		 }
		 public String getTasksdeleteid() {
			 return tasksdeleteid;
		 }
		 public void setTasksdeleteid(String tasksdeleteid) {
			 this.tasksdeleteid=tasksdeleteid;
		 }


		  public  TemplateTable  DogetPostSelect(String[] column,String[] datatype,String parentfilter){
			 String sql="";
			 TemplateQuery query =new TemplateQuery();
			//do some custom pre query operation if any 
			 EventListener.registerPreQueryParent("Assignto",column,datatype);
			 query.setUserName(this.getUsername());
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
					EventListener.registerPostQueryParent("Assignto",column,datatype);
			 return(maindata);
		 }


		 public  TemplateTable  DogetPostSelectChild(String childname,String relfield,String pid,String[]column,String[]datatype,String childfilter){
			String sql=""; 
			TemplateTable data =new TemplateTable();
			TemplateQuery query =new TemplateQuery();
			// Do some pre query child operation for custom implementation
			EventListener.registerPreQueryChild("Assignto",childname,pid,relfield,column,datatype);
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
					EventListener.registerPostQueryChild("Assignto",childname,pid,relfield,column,datatype);
			}
			return(data);
		}
		public  boolean   DogetPostDelete(String[] childtabs){
			TemplateQuery query =new TemplateQuery();
			// Do some pre delete operation 
			String sql=query.removeSql("Assignto",this.getParentobjid(),childtabs);
			if(!tu.isEmptyValue(sql)){
				tu.applyObjectRuleForDelete("Assignto",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_BEFORE,this.getParentobjid());
				EventListener.registerPreDeleteEvent("Assignto",this.getParentobjid());
				query.setQuery(sql);
				if(ACONST.GENERATE_LOG)
					logger.info(query.getQuery());
				if (query.getTableResultset().getRowCount()>0){
					// Do some post delete operation
					tu.applyObjectRuleForDelete("Assignto",ACONST.EVENT_REASON_DELETE, ACONST.EVENT_STATE_AFTER,this.getParentobjid());
					EventListener.registerPostDeleteEvent("Assignto",this.getParentobjid());
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
					tu.applyObjectRule("Assignto",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,maindata);
					EventListener.registerPreInsertEvent("Assignto",maindata);
			}
			if(sql==null){
					if(ACONST.GENERATE_LOG)
						logger.info(" WARNING: Parent record exists! Duplicate record");
				return(false);
			}else{
				 if(ACONST.GENERATE_LOG)
				 logger.info("parent ObjId="+query.getObjId());
				setParentobjid(query.getObjId()); 
				 if(!tu.isEmptyValue(this.getBugxml()) ){
					 sql+=query.makeBulkSQL(false,getBugxml(),"Bug2AssignTo",this.getUsername(),this.getGroupuser());
					 bugdata=query.getTableData();
					 tu.applyObjectRule("Bug",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,bugdata);
					 EventListener.registerPreInsertEvent("Bug",bugdata);
				}
				 if(!tu.isEmptyValue(this.getMemberxml()) ){
					 sql+=query.makeBulkSQL(false,getMemberxml(),"Member2AssignTo",this.getUsername(),this.getGroupuser());
					 memberdata=query.getTableData();
					 tu.applyObjectRule("Member",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,memberdata);
					 EventListener.registerPreInsertEvent("Member",memberdata);
				}
				 if(!tu.isEmptyValue(this.getMybugxml()) ){
					 sql+=query.makeBulkSQL(false,getMybugxml(),"Bug2AssignTo",this.getUsername(),this.getGroupuser());
					 mybugdata=query.getTableData();
					 tu.applyObjectRule("Mybug",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,mybugdata);
					 EventListener.registerPreInsertEvent("MyBug",mybugdata);
				}
				 if(!tu.isEmptyValue(this.getMytasksxml()) ){
					 sql+=query.makeBulkSQL(false,getMytasksxml(),"Tasks2AssignTo",this.getUsername(),this.getGroupuser());
					 mytasksdata=query.getTableData();
					 tu.applyObjectRule("Mytasks",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,mytasksdata);
					 EventListener.registerPreInsertEvent("MyTasks",mytasksdata);
				}
				 if(!tu.isEmptyValue(this.getTasksxml()) ){
					 sql+=query.makeBulkSQL(false,getTasksxml(),"Tasks2AssignTo",this.getUsername(),this.getGroupuser());
					 tasksdata=query.getTableData();
					 tu.applyObjectRule("Tasks",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_BEFORE,tasksdata);
					 EventListener.registerPreInsertEvent("Tasks",tasksdata);
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
				 tu.applyObjectRule("Assignto",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,maindata);
				 tu.applyMTMRelation("Assignto","Assignto",getParentobjid());
				 EventListener.registerPostInsertEvent("Assignto",maindata);
				 tu.applyObjectRule("Bug",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,bugdata);
				 tu.applyMTMRelation("bug","Assignto",getParentobjid());
				 EventListener.registerPostInsertEvent("Bug",bugdata);
				 tu.applyObjectRule("Member",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,memberdata);
				 tu.applyMTMRelation("member","Assignto",getParentobjid());
				 EventListener.registerPostInsertEvent("Member",memberdata);
				 tu.applyObjectRule("Mybug",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,mybugdata);
				 tu.applyMTMRelation("mybug","Assignto",getParentobjid());
				 EventListener.registerPostInsertEvent("MyBug",mybugdata);
				 tu.applyObjectRule("Mytasks",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,mytasksdata);
				 tu.applyMTMRelation("mytasks","Assignto",getParentobjid());
				 EventListener.registerPostInsertEvent("MyTasks",mytasksdata);
				 tu.applyObjectRule("Tasks",ACONST.EVENT_REASON_INSERT, ACONST.EVENT_STATE_AFTER,tasksdata);
				 tu.applyMTMRelation("tasks","Assignto",getParentobjid());
				 EventListener.registerPostInsertEvent("Tasks",tasksdata);
				 return(true);
			}
			 return(false);
		}
	}
