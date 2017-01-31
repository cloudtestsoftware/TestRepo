
 	 package com.testrepo.dao; 

 	 import java.util.Map; 
 	 import java.util.ArrayList; 
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

	public class MyleadDao extends MyleadImpl {
		Map<String, Cookie> cookies; 
		Map<String,String> userdata;
		private String []childtabs={""};
		
		private String [] maincol={"objid","mylead2assignedto","name","lastname","company","address","country","state","city","zipcode","officephone","mobile","fax","email","url","othercontact","leadstage","agentid","leadid","lead2campaign","mylead2assignedto"};
		private String [] maincolcaption={"Id","AssignedTo","Name","Last Name","Company","Address","Country","State","City","Zip","Office Number","Mobile No","Fax","Email","URL","Other Contact","Stage","Agent Id","Lead Id","Contact","Assigned To"};
		private String [] mainsqldatatype={DataType.VARCHAR,DataType.INTEGER,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.VARCHAR,DataType.RAW,DataType.RAW};
		private String [] mainformfields={"input","input","input","input","input","input","input","input","input","input","input","input","input","input","input","input","combo","input","input","input","input"};
		private String [] maindatadomain={"Int_t","Int_t","Name_t","Name_t","Name_t","String300_t","String30_t","String30_t","String50_t","String10_t","Phone_t","Phone_t","Phone_t","Email_t","String100_t","String500_t","Type_t","String20_t","String20_t","Id_t","Id_t"};
		
		private String [] summarycol={"name"};
		private String [] summarycolcaption={"Name"};
		private String [] summarysqldatatype={DataType.VARCHAR};

		private String [] propMyleadlist={"leadstage"};
		private String [] codeMyleadlist={};
		private String [] relationMyleadlist={"assignedto:mylead2assignedto:hiddin:table_testuser u,table_lead l@(l.lead2assignedto=u.objid or l.agentid=u.shortid) and l.gendate-sysdate <45"};

		public MyleadDao(UriInfo uriInfo, HttpHeaders header) throws AuthenticationException{
			this.setObject("Mylead");
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
				if(entity.toLowerCase().contains("<mylead>")){
					tmp=entity.replace("<?", "");
					this.setMainxml("<?xml"+tmp);
					if(ACONST.GENERATE_LOG){
						logger.info("Setting Main XML="+this.getMainxml());
					}
				}
			}
		}

		public Rows getMyleadSummaryRows(){
			TemplateTable tab=this.DogetPostSelect(summarycol,summarysqldatatype,this.MyleadFilter,false);
			ArrayList<String> chartcols=tu.getChartSelectColumns("Mylead");
			Rows rows=tu.getXMLSummaryRows(tab,summarycolcaption);
			ArrayList<Userdata> userdata=rows.getUserdata();
			Userdata data1= new Userdata("charts",chartcols);
			userdata.add(data1);
			for(String chartcol:chartcols){
				ArrayList<String> datas= tu.getChartPropertyJSON("Mylead", tab, chartcol);
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

		public Rows getMyleadRows(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.MyleadFilter,false);
			Rows rows=tu.getXMLRows(tab, "Mylead",codeMyleadlist,propMyleadlist,relationMyleadlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}

		public Items getMyleadForm(){
			TemplateTable tab=this.DogetPostSelect(maincol,mainsqldatatype,this.MyleadFilter,true);
			Items items=tu.getXMLForm(tab, "Mylead",codeMyleadlist,propMyleadlist,relationMyleadlist,maincolcaption,maindatadomain,mainformfields,this.getGroupuser(),this.getRelationFilters());
			return items;
		}

		public Rows getMyleadRowModified(){
			Rows rows=tu.getXMLRows(maindata, "Mylead",codeMyleadlist,propMyleadlist,relationMyleadlist,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
		public Rows getMyleadRowUpdated(){
			Rows rows;
			String sql= "update table_Mylead set "+this.getData() + " where objid='"+this.getParentobjid()+"' and groupuser='"+this.getGroupuser()+"'";
			TemplateTable tab=tu.getResultSet(sql);
			if(tab.getRowCount()>0){
			rows=tu.getDeletedRows(this.getParentobjid());
			}else{
			rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public Rows getMyleadRowDeleted(){
			Rows rows;
			if(this.DogetPostDelete(childtabs)){
				rows=tu.getDeletedRows(this.getParentobjid());
			}else{
				rows=tu.getDeletedRows("-1");
			}
			return rows;
		}

		public void postMyleadContainer() throws DaoException{
			if(!tu.isEmptyValue(this.getMainxml())){
				this.DogetPostInsert();
			}else{
				throw new DaoException("ERROR: Post unsuccessful! Probably your XML is missing parent entity or having error!", this.getClass().getName());
			}
		}

		public Rows getMyleadByFilter(){
			String newfilter=" groupuser='"+this.getGroupuser()+"'";
			if(!tu.isEmptyValue(this.getFilters())){
				newfilter+=" and "+this.getFilters();
			}
			String sql= "select * from table_Mylead where "+ newfilter;
			TemplateTable tab=tu.getResultSet(sql);
			Rows rows=tu.getXMLFilterRows(tab, "Mylead",codeMyleadlist,propMyleadlist,relationMyleadlist,maincol,maincolcaption,maindatadomain,this.getGroupuser());
			return rows;
		}
	}
