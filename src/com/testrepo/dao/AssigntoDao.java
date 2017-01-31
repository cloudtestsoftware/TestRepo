
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

	public class AssigntoDao extends AssigntoImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"bug,member,tasks"};
		private String []childtabs={"bug,member,mybug,mytasks,tasks"};
		private String []childtabnames={"Bug,Member,My Bug,My Tasks,Tasks"};
		
		private String [] maincol={"objid","assignto2testuser","name"};
		private String [] maincolcaption={"Id","TestUser","Name"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t"};
		private String [] maincolsearch={"#text_filter,#select_filter,#text_filter"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name"};
		private String [] reportcolcaption={"Id","Name"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","Name_t"};
		
		private String [] searchcol={"objid","name"};
		private String [] searchcolcaption={"Id","Name"};
		private String [] searchcoltype={"integer","text"};
		private String [] searchdatadomain={"Id_t","Name_t"};

		private String [] propAssigntolist={};
		private String [] codeAssigntolist={};
		private String [] relationAssigntolist={"testuser:assignto2testuser:hiddin:table_testuser u,table_company c@c.groupuser=u.groupuser"};
		
		private String [] bugcol={"objid","name","status","createdby","creationdate","type","priority","severity"};
		private String [] bugcolcaption={"Id","Name","Status","Created By","Creation Date","Type","Priority","Severity"};
		private String [] bugsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.DATE,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] bugdatadomain={"Int_t","Name_t","Status_t","String100_t","Date_t","Type_t","Type_t","Type_t"};
		private String [] bugdisable={"yes","no","no","no","no","no","no","no"};
		private String [] bugcolsearch={"#text_filter,#text_filter,#select_filter,#text_filter,#text_filter,#select_filter,#select_filter,#select_filter"};
		
		private String [] membercol={"objid","member2project","name","sprintrole"};
		private String [] membercolcaption={"Id","Project","Name","Role"};
		private String [] membersqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR};
		private String [] memberdatadomain={"Int_t","Int_t","String100_t","Type_t"};
		private String [] memberdisable={"yes","no","no","no"};
		private String [] membercolsearch={"#text_filter,#select_filter,#text_filter,#select_filter"};
		
		private String [] mybugcol={"objid","name","status","createdby","creationdate","type","priority","severity","bug2sceneriorun","bug2assignto"};
		private String [] mybugcolcaption={"Id","Name","Status","Created By","Creation Date","Type","Priority","Severity","Feature","Feature"};
		private String [] mybugsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.DATE,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.RAW,DataType.RAW};
		private String [] mybugdatadomain={"Int_t","Name_t","Status_t","String100_t","Date_t","Type_t","Type_t","Type_t","Id_t","Id_t"};
		private String [] mybugdisable={"yes","no","no","no","no","no","no","no","no","no"};
		private String [] mybugcolsearch={"#text_filter,#text_filter,#select_filter,#text_filter,#text_filter,#select_filter,#select_filter,#select_filter,,"};
		
		private String [] mytaskscol={"objid","name","description","startdate","duedate","storypoint","estimatedhr","taskstatuscode","tasks2feature","tasks2assignto"};
		private String [] mytaskscolcaption={"Id","Name","Description","Start Date","Due Date","Story Point","Estimated Hr","Status","Feature","Feature"};
		private String [] mytaskssqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.DATE,DataType.DATE,DataType.INTEGER,DataType.NUMBER,DataType.VARCHAR,DataType.RAW,DataType.RAW};
		private String [] mytasksdatadomain={"Int_t","String100_t","String4000_t","Date_t","Date_t","Int_t","Float_t","Code_t","Id_t","Id_t"};
		private String [] mytasksdisable={"yes","no","no","no","no","no","no","no","no","no"};
		private String [] mytaskscolsearch={"#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,#numeric_filter,#select_filter,,"};
		
		private String [] taskscol={"objid","name","description","startdate","duedate","storypoint","estimatedhr","taskstatuscode"};
		private String [] taskscolcaption={"Id","Name","Description","Start Date","Due Date","Story Point","Estimated Hr","Status"};
		private String [] taskssqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.DATE,DataType.DATE,DataType.INTEGER,DataType.NUMBER,DataType.VARCHAR};
		private String [] tasksdatadomain={"Int_t","String100_t","String4000_t","Date_t","Date_t","Int_t","Float_t","Code_t"};
		private String [] tasksdisable={"yes","no","no","no","no","no","no","no"};
		private String [] taskscolsearch={"#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,#text_filter,#numeric_filter,#select_filter"};

		public AssigntoDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Assignto");
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
				if(entity.toLowerCase().contains("<assignto>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}else if(entity.toLowerCase().contains("<bug>")){
					this.setBugxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getBugxml());
					}
				}else if(entity.toLowerCase().contains("<member>")){
					this.setMemberxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getMemberxml());
					}
				}else if(entity.toLowerCase().contains("<mybug>")){
					this.setMybugxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getMybugxml());
					}
				}else if(entity.toLowerCase().contains("<mytasks>")){
					this.setMytasksxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getMytasksxml());
					}
				}else if(entity.toLowerCase().contains("<tasks>")){
					this.setTasksxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getTasksxml());
					}
				}
			}
		}

		public Rows getBugRows(){
			TemplateTable tab=this.DogetPostSelectChild("bug", "bug2assignto",this.getParentobjid(),bugcol,bugsqldatatype,this.BugFilter);
			String [] propBuglist={"status","type","priority","severity"};
			String [] codeBuglist={};
			String [] relationBuglist={};
			Rows rows=tu.getXMLRows(tab, "bug",codeBuglist,propBuglist,relationBuglist,bugcolcaption,bugdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(bugcolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getMemberRows(){
			TemplateTable tab=this.DogetPostSelectChild("member", "member2assignto",this.getParentobjid(),membercol,membersqldatatype,this.MemberFilter);
			String [] propMemberlist={"sprintrole"};
			String [] codeMemberlist={};
			String [] relationMemberlist={"project:member2project:hiddin:"};
			Rows rows=tu.getXMLRows(tab, "member",codeMemberlist,propMemberlist,relationMemberlist,membercolcaption,memberdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(membercolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getMybugRows(){
			TemplateTable tab=this.DogetPostSelectChild("mybug", "mybug2assignto",this.getParentobjid(),mybugcol,mybugsqldatatype,this.MybugFilter);
			String [] propMybuglist={"status","type","priority","severity"};
			String [] codeMybuglist={};
			String [] relationMybuglist={};
			Rows rows=tu.getXMLRows(tab, "mybug",codeMybuglist,propMybuglist,relationMybuglist,mybugcolcaption,mybugdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(mybugcolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getMytasksRows(){
			TemplateTable tab=this.DogetPostSelectChild("mytasks", "mytasks2assignto",this.getParentobjid(),mytaskscol,mytaskssqldatatype,this.MytasksFilter);
			String [] propMytaskslist={"startdate","duedate"};
			String [] codeMytaskslist={"taskstatuscode"};
			String [] relationMytaskslist={};
			Rows rows=tu.getXMLRows(tab, "mytasks",codeMytaskslist,propMytaskslist,relationMytaskslist,mytaskscolcaption,mytasksdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(mytaskscolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getTasksRows(){
			TemplateTable tab=this.DogetPostSelectChild("tasks", "tasks2assignto",this.getParentobjid(),taskscol,taskssqldatatype,this.TasksFilter);
			String [] propTaskslist={"startdate","duedate"};
			String [] codeTaskslist={"taskstatuscode"};
			String [] relationTaskslist={};
			Rows rows=tu.getXMLRows(tab, "tasks",codeTaskslist,propTaskslist,relationTaskslist,taskscolcaption,tasksdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(taskscolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getAssigntoSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.AssigntoFilter);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Assignto");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Assignto", tab, chartcol);
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

		public Rows getAssigntoRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.AssigntoFilter);
			Rows rows=tu.getXMLRows(tab, "Assignto",codeAssigntolist,propAssigntolist,relationAssigntolist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getAssigntoForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.AssigntoFilter);
			Items items=tu.getXMLForm(tab, "Assignto",codeAssigntolist,propAssigntolist,relationAssigntolist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getAssigntoRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Assignto",codeAssigntolist,propAssigntolist,relationAssigntolist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
			public Rows getAssigntoRowUpdated(){
			Rows rows;
			String sql= "update table_Assignto set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getAssigntoRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postAssigntoContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getAssigntoByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Assignto where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Assignto",codeAssigntolist,propAssigntolist,relationAssigntolist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
