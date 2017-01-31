
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

	public class TrainingDao extends TrainingImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []deletetabs={"training,"};
		private String []childtabs={"mytraining"};
		private String []childtabnames={"MyTraining"};
		
		private String [] maincol={"objid","name","startdate","enddate","course","location","fees","lastdate","starttime","type","status"};
		private String [] maincolcaption={"Id","Name","Start Date","End Date","Course","Location","Fees ($)","Booking Ends","Start Time","Type","Status"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.DATE,DataType.DATE,DataType.VARCHAR,DataType.VARCHAR,DataType.NUMBER,DataType.DATE,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mainformfields={"input","input","input","input","input","input","input","input","input","input","input"};
		private String [] maindatadomain={"Int_t","String200_t","Date_t","Date_t","String4000_t","String300_t","Money_t","Date_t","Time_t","Type_t","Status_t"};
		private String [] maincolsearch={"#text_filter,#text_filter,,,,,,,,,"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};
		private String [] summarydatadomain={"Name_t"};
		
		private String [] reportcol={"objid","name"};
		private String [] reportcolcaption={"Id","Name"};
		private String [] reportsqldatatype={DataType.VARCHAR,DataType.VARCHAR};
		private String [] reportdatadomain={"Id_t","String200_t"};
		
		private String [] searchcol={"objid","name"};
		private String [] searchcolcaption={"Id","Name"};
		private String [] searchcoltype={"integer","text"};
		private String [] searchdatadomain={"Id_t","String200_t"};

		private String [] propTraininglist={"type","status"};
		private String [] codeTraininglist={};
		private String [] relationTraininglist={};
		
		private String [] mytrainingcol={"objid","name","startdate","enddate","course","location","fees","lastdate","starttime","type"};
		private String [] mytrainingcolcaption={"Id","Name","Start Date","End Date","Course","Location","Fees ($)","Booking Ends","Start Time","Type"};
		private String [] mytrainingsqldatatype={DataType.VARCHAR,DataType.VARCHAR,DataType.DATE,DataType.DATE,DataType.VARCHAR,DataType.VARCHAR,DataType.NUMBER,DataType.DATE,DataType.VARCHAR,DataType.VARCHAR};
		private String [] mytrainingdatadomain={"Int_t","String200_t","Date_t","Date_t","String4000_t","String300_t","Money_t","Date_t","Time_t","Type_t"};
		private String [] mytrainingdisable={"yes","no","no","no","no","no","no","no","no","no"};
		private String [] mytrainingcolsearch={"#text_filter,#text_filter,,,,,,,,"};

		public TrainingDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Training");
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
				if(entity.toLowerCase().contains("<training>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}else if(entity.toLowerCase().contains("<mytraining>")){
					this.setMytrainingxml("<?xml"+entity);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Child XML="+this.getMytrainingxml());
					}
				}
			}
		}

		public Rows getMytrainingRows(){
			TemplateTable tab=this.DogetPostSelectChild("mytraining", "mytraining2training",this.getParentobjid(),mytrainingcol,mytrainingsqldatatype,this.MytrainingFilter);
			String [] propMytraininglist={};
			String [] codeMytraininglist={};
			String [] relationMytraininglist={};
			Rows rows=tu.getXMLRows(tab, "mytraining",codeMytraininglist,propMytraininglist,relationMytraininglist,mytrainingcolcaption,mytrainingdatadomain,this.getGroupuser());
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("filters",Arrays.asList(mytrainingcolsearch));
			userdata.add(data1);
			rows.setUserdata(userdata);
			return rows;
		}



		public Rows getTrainingSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.TrainingFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Training");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Training", tab, chartcol);
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

		public Rows getTrainingRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.TrainingFilter,false);
			Rows rows=tu.getXMLRows(tab, "Training",codeTraininglist,propTraininglist,relationTraininglist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getTrainingForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.TrainingFilter,true);
			Items items=tu.getXMLForm(tab, "Training",codeTraininglist,propTraininglist,relationTraininglist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getTrainingRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Training",codeTraininglist,propTraininglist,relationTraininglist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getTrainingRowUpdated(){
			Rows rows;
			String sql= "update table_Training set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getTrainingRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postTrainingContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getTrainingByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters()) &&!tu.isEmptyValue(this.admingroup) &&!this.admingroup.equalsIgnoreCase(this.getGroupuser())){
				newfilter+=" and "+this.getFilters();
			}else if(!tu.isEmptyValue(this.admingroup) &&this.admingroup.equalsIgnoreCase(this.getGroupuser())){
				newfilter=this.getFilters();
			}
			String sql= "select * from table_Training where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Training",codeTraininglist,propTraininglist,relationTraininglist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
