
//var layout={};

var layout={
		"company": "550",
		"product": "550",
		"release": "550",
		"project": "550",
		"epic": "650",
		"projectboardresult": "850",
		"sprintresult": "900",
        "feature": "550",
        "scenerio": "800",
        "sceneriorun": "750",
        "testscenerio": "950",
        "bug": "700",
        "producttestcount": "800",
        "projecttestcount": "850",
        "epictestcount": "850",
        "featuretestcount": "850",
        "featuretestresult": "900",
        "testrunresult": "900",
        "testcount": "850",
        "attachment": "700",
        "referral": "800",
        "training": "800",
        "mytraining": "800",
        "coursefeedback": "800",
        "bugscenerio":"800",
        "jobrun":"900",
        "developer":"750",
        "resume":"700",
        "contact":"1300",
        "lead":"1300",
        "customer":"900",
        "opportunity":"1200",
        "campaign":"1200",
        "surveyquestion":"1000",
        "mylead":"900",
        "sprintvelocity":"1200",
        "cloudprovider":"600",};
   

var chooseexclude={"matrixlist":true,
		          "featurelist":true,};

//use this variable to reinitialize child caller

var childcallertables=" summaryreport, testrunresult, grouprunresult";

function getChooseExclude(key){
	
		if(chooseexclude[key] ){
			return chooseexclude[key];
		}
		return false;
}
function getLayoutHeight(key){
	
	if(layoutHeight ){
		if(layout[key] && layout[key]>layoutHeight){
			return layout[key];
		}
		return layoutHeight;
	}
	return layout[key];
}

function getRelation(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].relation; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getRelation : "+table);
		}
	}
	return null;
}

function getAdditionalRelation(menu, table){
	var rel;
	try{
		if(menu && table){
			rel= menuconfig.menues[menu][table].relatedto; 
			if(rel && rel.indexOf("@table")>0){
				if(!childcaller[table] &&table!=current_table){
					childcaller[table]=current_table;
					rel= rel.replace("@table",current_table);
				}else if(childcaller[table] ){
					rel= rel.replace("@table",childcaller[table]);
				}
				if(rel.indexOf("@table")<0){
					return rel;
				}
					
			}
			
			if (childcallertables.indexOf(current_table)>0){
				childcaller={};
			}
				
			
			return rel;
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getAdditionalRelation : "+table);
		}
	}
	return null;
}

function getCaption(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].caption; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getCaption : "+table);
		}
	}
	return null;
}

function getChild(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].child; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getChild : "+table);
		}
	}
	return null;
}


function getFormOnChange(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].formchange; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getFormOnChange : "+table);
		}
	}
	return null;
}
function getParent(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].parent; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getParent : "+table);
		}
	}
	return null;
}

function getRowSelect(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].rowselect; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getRowSelect : "+table);
		}
	}
	return null;
}
function getListRelation(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].listrelation; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getListRelation : "+table);
		}
	}
	return null;
}

function getFormLoad(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].formload; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getFormLoad : "+table);
		}
	}
	return null;
}

function getButtonWidth(table){
	var button_width="100";
	try{
		if(table){
			button_width= menuconfig.menues[menuid][table].button_width; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getButtonWidth : "+table);
		}
	}
	return button_width;
}

function getMenu(menu){
	try{
		if(menu){
			return menuconfig.menues[menu]; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getChartCols : "+table);
		}
	}
	return null;
}

function getURI(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].uri; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getURI :"+table);
		}
	}
	return null;
}
function getChartCols(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].chartcols; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getChartCols : "+table);
		}
	}
	return null;
}
function getFormColsHide(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].formcolhide; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getFormColsHide : "+table);
		}
	}
	return null;
}

function getFormColsExcludeUpdate(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].excludecolupdate; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getFormColsExcludeUpdate : "+table);
		}
	}
	return null;
}

function getFormButtonHide(menu, table){
	var bhide;
	try{
		if(menu && table){
			var caller=childcaller[table];
			if(caller){
				bhide= menuconfig.menues[menu][table].buttonhide; 
				if(bhide){
					var buttons=bhide.split(",");
					for(var button in buttons){
						if(buttons[button].indexOf(caller)>=0){
							var ret=bhide.replace(buttons[button],"");
							return ret;
						}
					}
				}
			}
			
			return  menuconfig.menues[menu][table].buttonhide; ;
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getFormButtonHide : "+table);
		}
		
	}
	return null;
}
function getInvokeFilter(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].invokefilter; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getInvokeFilter : "+table);
		}
		
	}
	return null;
}
function getFormButtonDisabled(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].buttondisable; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getFormButtonHide : "+table);
		}
		
	}
	return null;
}



function getFormDisabledFields(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].disablefields; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getFormDisabledFields : "+table);
		}
		
	}
	return null;
}
function getReloadForm(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].reloadform; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getReloadForm : "+table);
		}
		
	}
	return null;
}
function getShowListCols(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].showlistcols; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getShowListCols : "+table);
		}
	}
	return null;
}
function getTargetForm(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].form; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getTargetForm : "+table);
		}
	}
	return null;
}

function getAddons(menu, table){
	try{
		if(menu && table){
			return menuconfig.menues[menu][table].addon; 
		}
	}catch(err){
		if(debug){
			dhtmlx.message(err +" : getTargetForm : "+table);
		}
	}
	return null;
}



function search_custom_action(table){
	//dhtmlx.message("table="+table);
	widgetforms[table].hideItem("create:"+table);
	widgetforms[table].disableItem("save:"+table);
	
}
var menuconfig={
	    "menues": {
	    	"myprofile": {
	            "myprofile": {"caption":"My Profile","button_width":"100","showlistcols":[2,3],"disablefields":"name,lastname,loginname","formcolhide":"status,usertype"}
	        },
	        "mytasks": {
	            "mytasks": {"caption":"My Tasks","button_width":"100","child":"tasknote","form":"tasks","formcolhide":"loginname","disablefields":"storypoint,startdate,duedate,estimatedhr"},
	        	"feature": {"caption":"Features", "relatedto":"objid:tasks2feature", "parent":"mytasks","child":"scenerio", "button_width":"100","formload":"update_feature_status","rowselect":"update_feature_status","buttonhide":"summary,feature:featuretestcount:handle_custom_changes,create:feature,save:feature,remove_custom_table,scroll:epic"},
	        	"scenerio": {"caption":"Scenarios", "relation":"scenerio2feature", "child":"matrixlist", "parent":"feature","button_width":"100","formcolhide":"projectname,featurename"},
	        	"matrixlist": {"caption":"Matrix", "relation":"matrixmap2scenerio", "parent":"scenerio","button_width":"100","rowselect":"update_matrixlist_for_scenerio","excludecolupdate":":scenerio","buttonhide":"scroll:project"},
	        	"tasknote": {"caption":"Note", "relation":"tasknote2tasks", "parent":"mytasks","button_width":"100","buttonhide":"scroll:tasks:tabwidget,scroll:feature:tabwidget"},
	        	"tasks": {"caption":"Tasks", "relation":"tasks2feature", "parent":"feature","button_width":"100","buttonhide":"tasks_next_step"},
	            "jenkinsjob": {"caption":"Jenkins Job", "relation":"jenkinsjob2feature", "parent":"feature","button_width":"100"},
	            "documents": {"caption":"Documents", "relation":"documents2feature", "parent":"feature","button_width":"100","buttonhide":"scroll:epic,scroll:release"},
	            "featurelist": {"caption":"Feature Test Group", "relation":"featuremap2feature", "parent":"feature","button_width":"100","rowselect":"update_featuregrouplist_for_feature","excludecolupdate":":myfeature"},
	          
	        },
	        "mytimesheet": {
	            "mytimesheet": {"caption":"My Timesheet","button_width":"100"}
	        },
	        "cloudimage": {
	            "cloudimage": {"caption":"Cloud Image","button_width":"100"}
	        },
	        "jenkins": {
	            "jenkins": {"caption":"Setup Jenkins","button_width":"100"}
	        },
	        "mybug": {
	        	"mybug": {"caption":"My Bugs","button_width":"100","child":"resolution","form":"bug","formcolhide":"","disablefields":""},
	        	"bugscenerio": {"caption":"Test Scenerio", "relation":"bugscenerio2bug", "parent":"mybug","button_width":"100","buttonhide":"scroll:bug"},
	        	"attachment": {"caption":"Attachments", "relation":"attachment2bug", "parent":"mybug","button_width":"100","buttonhide":"attachment_view_set"},
	            "resolution": {"caption":"Resolution", "relation":"resolution2bug", "parent":"mybug","button_width":"100","buttonhide":"scroll:bug"}
		        
	        },
	        "mytraining": {
	            "mytraining": {"caption":"Training Schedule","button_width":"100","child":"bookcourse","formcolhide":"mytraining2training","showlistcols":[3,9]},
	            "bookcourse": {"caption":"Book Course", "relation":"bookcourse2training", "parent":"mytraining","button_width":"100","disablefields":"status,amountpaid,confirmationno","buttonhide":"create,prod","formload":"verify_prod_access","rowselect":"verify_prod_access","buttonhide":"scroll:coursefeedback,scroll:training"},
	        },
	        "mycontact": {
	            "mycontact": {"caption":"My Contact","button_width":"100","showlistcols":[2,3,11],"disablefields":"","formcolhide":""}
	        },
	        "mylead": {
	            "mylead": {"caption":"My Lead","button_width":"100","child":"leadnote","showlistcols":[3,4,14],"disablefields":""},
	            "leadnote": {"caption":"Note", "relation":"leadnote2lead", "parent":"lead","button_width":"100","buttonhide":"scroll:lead"},
	           
	        },
	        "cloudprovider": {
	            "cloudprovider": {"caption":"Cloud Provider","button_width":"100","child":"accesskey","showlistcols":[2,3]},
	            "accesskey": {"caption":"Access Key", "relation":"accesskey2cloudprovider", "parent":"cloudprovider","button_width":"100","disablefields":"","formchange":""},
	            "createimage": {"caption":"Create Image", "relation":"createimage2cloudprovider", "parent":"cloudprovider","child":"varprovision","button_width":"100"},
	            "createscript": {"caption":"Script File", "relation":"createscript2createimage", "parent":"createimage","button_width":"100"},
	            "varprovision": {"caption":"Add Variables", "relation":"varprovision2createimage", "parent":"createimage","button_width":"100"},
	            "launchimage": {"caption":"Launch Image", "relation":"launchimage2cloudprovider", "parent":"cloudprovider","child":"varlaunch","button_width":"100"},
	            "launchscript": {"caption":"Script File", "relation":"launchscript2createimage", "parent":"launchimage","button_width":"100"},
	            "varlaunch": {"caption":"Add Variables", "relation":"varlaunch2createimage", "parent":"launchimage","button_width":"100"},
	            
	        },
	        "servicerepo": {
                "servicerepo": {"caption":"Service Repo","child":"serviceapi","button_width":"100","showlistcols":[2,3],"addon":"serviceauth,serviceparam","buttonhide":"","rowselect":"initGlobalData"},
                "serviceauth": {"caption":"Service Auth", "relation":"serviceauth2servicerepo", "parent":"servicerepo","button_width":"100","showlistcols":[2,3],"buttonhide":""},
                "serviceparam": {"caption":"Service Param", "relation":"serviceparam2servicerepo", "parent":"servicerepo","button_width":"100","showlistcols":[3,4],"buttonhide":""},
                "serviceapi": {"caption":"Service API", "relation":"serviceapi2servicerepo","parent":"servicerepo","child":"apiparam","addon":"apitemplate","button_width":"100","showlistcols":[3,4]},
                "servicedoc": {"caption":"Service Template", "relation":"servicedoc2servicerepo", "parent":"servicerepo","button_width":"100","buttonhide":""},
                "apitemplate": {"caption":"Api Template", "relation":"apitemplate2serviceapi", "parent":"serviceapi","button_width":"100","buttonhide":""},
                "apiparam": {"caption":"Api Param", "relation":"apiparam2serviceapi", "parent":"serviceapi","button_width":"100","showlistcols":[3,4],"buttonhide":""},
            },
	        "bookcourse": {
	            "bookcourse": {"caption":"Book Course", "relation":"bookcourse2training", "parent":"mytraining","child":"coursefeedback","button_width":"100","disablefields":"status,amountpaid,confirmationno","buttonhide":"create,prod","formload":"verify_prod_access","rowselect":"verify_prod_access","buttonhide":"scroll:training,scroll:mytraining"},
	            "coursefeedback": {"caption":"Feedback", "relation":"coursefeedback2bookcourse", "parent":"bookcourse","button_width":"100"},
	        },
	        "campaign": {
	            "campaign": {"caption":"Campaign","child":"surveyquestion","button_width":"100"},
	            "surveyquestion": {"caption":"Survey Questions", "relation":"surveyquestion2campaign", "parent":"campaign","button_width":"100"},
	            "campaignnote": {"caption":"Note", "relation":"campaignnote2campaign", "parent":"campaign","button_width":"100"},
	            "lead": {"caption":"Lead","button_width":"100","relation":"lead2campaign","parent":"campaign","showlistcols":[4,6,15],"disablefields":"","buttonhide":"lead_add_set,lead_next_steps"},
	        },
	        "customer": {
	            "customer": {"caption":"Customer","child":"deal","button_width":"100","buttonhide":"customer_priv_steps"},
	            "deal": {"caption":"Deal", "relation":"deal2customer", "parent":"customer","button_width":"100","showlistcols":[3,5],"buttonhide":"scroll:opportunity"},
	            "customernote": {"caption":"Note", "relation":"customernote2customer", "parent":"customer","button_width":"100"},
	        },
	        "opportunity": {
                "opportunity": {"caption":"Opportunity","child":"deal","button_width":"100","buttonhide":"opportunity_priv_steps"},
                "deal": {"caption":"Deal", "relation":"deal2opportunity", "parent":"opportunity","button_width":"100","showlistcols":[3,5],"buttonhide":"scroll:customer"},
                "opportunitynote": {"caption":"Note", "relation":"opportunitynote2opportunity", "parent":"opportunity","button_width":"100"},
            },
	        "training": {
	            "training": {"caption":"Training","child":"bookcourse","button_width":"100"},
	            "bookcourse": {"caption":"Book Course", "relation":"bookcourse2training", "parent":"training","child":"coursefeedback","button_width":"100","buttonhide":"scroll:mytraining"},
	            "coursefeedback": {"caption":"Feedback", "relation":"coursefeedback2bookcourse", "parent":"bookcourse","button_width":"100"},
	        },
	        "support": {
	            "support": {"caption":"Support","child":"supportnote","button_width":"100"},
	            "supportnote": {"caption":"Notes", "relation":"supportnote2support", "parent":"support","button_width":"100","showlistcols":[3,5]}
	        },
	        "consultant": {
	            "consultant": {"caption":"Book Consultant","button_width":"100","showlistcols":[2,3],"disablefields":"hourlyrate"}
	        },
	        "developer": {
	            "developer": {"caption":"Join As Freelancer","button_width":"100","child":"resume","showlistcols":[2,3],"disablefields":"offerrate,jobstartdate,terminationdate"},
	            "resume": {"caption":"Resume", "relation":"resume2developer", "parent":"developer","button_width":"100"},
	        },
	        "referral": {
	            "referral": {"caption":"Referral","button_width":"100","showlistcols":[2,3],"disablefields":"referralstatus,claimamount","formload":"disable_referral_items","rowselect":"disable_referral_items"}
	        },
	        "contact": {
	            "contact": {"caption":"Contact","button_width":"100","child":"contactnote","showlistcols":[3,5,13],"disablefields":"","formload":"copy_contact_data","buttonhide":"contact_priv_steps"},
	            "contactnote": {"caption":"Note", "relation":"contactnote2contact", "parent":"contact","button_width":"100"},
	            //"lead": {"caption":"Lead", "relation":"lead2contact", "parent":"contact","button_width":"100","showlistcols":[4,5,16]},
	            "deal": {"caption":"Deal", "relation":"deal2lead", "parent":"lead","button_width":"100"},
	            "opportunity": {"caption":"Opportunity","parent":"contact","relation":"opportunity2contact","button_width":"100","buttonhide":"opportunity_next_steps"},
	            "customer": {"caption":"Customer","parent":"contact","relation":"customer2contact","button_width":"100","buttonhide":"customer_next_steps"},
	            
	        },
	        "lead": {
	            "lead": {"caption":"Lead","button_width":"100","child":"leadnote","showlistcols":[4,6,15],"disablefields":"","buttonhide":"lead_priv_steps"},
	            "contact": {"caption":"Contact","button_width":"100","relation":"contact2lead","parent":"lead","showlistcols":[3,5,13],"disablefields":"","formload":"copy_lead_data"},
	            "leadnote": {"caption":"Note", "relation":"leadnote2lead", "parent":"lead","button_width":"100","buttonhide":"scroll:mylead"},
	            "deal": {"caption":"Deal", "relation":"deal2lead", "parent":"lead","button_width":"100"},
	        },
	        "product": {
	            "product": {"caption":"Products","child":"release","button_width":"100"},
	            "release": {"caption":"Release", "relation":"release2product","child":"project","parent":"product","button_width":"100","uri":"rows"},
	            "project": {"caption":"Projects", "relatedto":"project2product:release2product", "relation":"project2release","parent":"release","button_width":"100","buttonhide":"scroll:epic"},
	            "producttestcount": {"caption":"Product Facts", "relation":"producttestcount2product","parent":"product","button_width":"100","rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[4,5,6,7]},
	            "member": {"caption":"Member", "relation":"member2project", "parent":"project","button_width":"100","formchange":"populate_member"},
	            "board": {"caption":"Board", "relation":"board2project", "parent":"project","button_width":"100"},
	            "functionalgroup": {"caption":"Functional Group", "relation":"functionalgroup2product", "parent":"product","button_width":"100"},
	            "hourbooked": {"caption":"Resource Booked", "relatedto":"hourbooked2testuser:member2assignto","showlistcols":[3,4,6], "parent":"member","button_width":"100"},
	            "documents": {"caption":"Documents", "relation":"documents2release", "parent":"release","button_width":"100","buttonhide":"scroll:epic,scroll:feature"},
	            "releasetestcount": {"caption":"Release Facts", "relation":"releasetestcount2release","parent":"release","button_width":"100","rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[4,5,6,7]},
	            "projecttestcount": {"caption":"Project Facts", "relation":"projecttestcount2project","parent":"project","button_width":"100","showlistcols":[3,5],"rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[5,6,7,8]},
	            "projectprogress": {"caption":"Project Cost & Progress", "relation":"projectprogress2project","parent":"project","button_width":"100","showlistcols":[3,5],"rowselect":"draw_projectprogress_chart","formload":"draw_projectprogress_chart"},
	           
	        },
	        "project": {
	        	"project": {"caption":"Projects", "relation":"project2product","child":"epic","parent":"product","button_width":"100","uri":"rows","buttonhide":"create,scroll:release"},
	        	 "epic": {"caption":"Epic", "relation":"epic2project", "parent":"project","child":"feature","button_width":"100"},
	        	"feature": {"caption":"Features",  "relatedto":"feature2project:epic2project","relation":"feature2epic", "child":"scenerio", "parent":"project","button_width":"100","formload":"update_feature_status","rowselect":"update_feature_status","buttonhide":"scroll:mytasks,scroll:tasks"},
	            "scenerio": {"caption":"Scenarios", "relation":"scenerio2feature", "child":"teststeps", "parent":"feature","button_width":"100","formcolhide":"projectname,featurename,externid"},
	            "matrixlist": {"caption":"Matrix", "relation":"matrixmap2scenerio", "parent":"scenerio","button_width":"100","rowselect":"update_matrixlist_for_scenerio","excludecolupdate":":scenerio"},
	            "member": {"caption":"Member", "relation":"member2project", "parent":"project","button_width":"100","formchange":"populate_member","uri":"rows","disablefields":"totalhrs,resourcecost"},
	            "board": {"caption":"Board", "relation":"board2project", "parent":"project","button_width":"100"},
	            "tasks": {"caption":"Tasks", "relation":"tasks2feature", "parent":"feature","button_width":"100","buttonhide":"tasks_next_step"},
	            "jenkinsjob": {"caption":"Jenkins Job", "relation":"jenkinsjob2feature", "parent":"feature","button_width":"100"},
	            "projecttestcount": {"caption":"Project Facts", "relation":"projecttestcount2project","parent":"project","button_width":"100","showlistcols":[3,5],"rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[5,6,7,8]},
	            "projectprogress": {"caption":"Project Cost & Progress", "relation":"projectprogress2project","parent":"project","button_width":"100","showlistcols":[3,5],"rowselect":"draw_projectprogress_chart","formload":"draw_projectprogress_chart"},
	            "epictestcount": {"caption":"Epic Facts", "relation":"epictestcount2epic","parent":"epic","button_width":"100","showlistcols":[3,5],"rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[5,6,7,8]},
	            "featuretestcount": {"caption":"Feature Facts", "relation":"featuretestcount2feature","parent":"feature","button_width":"100","showlistcols":[3,5],"rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[5,6,7,8]},
	            "testcount": {"caption":"Scenerio Facts", "relation":"testcount2scenerio","parent":"scenerio","button_width":"100","rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[3,5]},
	            "documents": {"caption":"Documents", "relation":"documents2epic", "parent":"epic","button_width":"100","buttonhide":"scroll:release,scroll:feature"},
	            "teststeps": {"caption":"Tests", "relation":"teststeps2scenerio", "parent":"scenerio","button_width":"100","formcolhide":"externid","buttonhide":"teststeps_priv_step"},
	            "estimation": {"caption":"Estimation", "relation":"estimation2epic", "parent":"epic","button_width":"100","uri":"rows","disablefields":"totalhr,totalcost"},
	            "hourbooked": {"caption":"Resource Booked", "relatedto":"hourbooked2testuser:member2assignto","showlistcols":[3,4,6], "parent":"member","button_width":"100"},
	            "featurelist": {"caption":"Feature Test Group", "relation":"featuremap2feature", "parent":"feature","button_width":"100","rowselect":"update_featuregrouplist_for_feature","excludecolupdate":":myfeature"},
		           
	        },
	        "feature": {
	        	"feature": {"caption":"Features", "relation":"feature2project", "child":"scenerio", "parent":"project","button_width":"100","uri":"rows","formload":"update_feature_status","rowselect":"update_feature_status","buttonhide":"scroll:epic,scroll:mytasks,scroll:tasks"},
	        	"scenerio": {"caption":"Scenarios", "relation":"scenerio2feature", "child":"teststeps", "parent":"feature","button_width":"100","formcolhide":"projectname,featurename,externid"},
	        	"jenkinsjob": {"caption":"Jenkins Job", "relation":"jenkinsjob2feature", "parent":"feature","button_width":"100"},
	        	"documents": {"caption":"Documents", "relation":"documents2feature", "parent":"feature","button_width":"100","buttonhide":"scroll:epic,scroll:release"},
	        	"tasks": {"caption":"Tasks", "relation":"tasks2feature", "parent":"feature","button_width":"100","buttonhide":"tasks_next_step"},
	            "matrixlist": {"caption":"Matrix", "relation":"matrixmap2scenerio", "parent":"scenerio","button_width":"100","rowselect":"update_matrixlist_for_scenerio","excludecolupdate":":scenerio","buttonhide":"scroll:project"},
	        	"featuretestcount": {"caption":"Feature Facts", "relation":"featuretestcount2feature","parent":"feature","button_width":"100","showlistcols":[3,5],"rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[5,6,7,8]},
	        	"testcount": {"caption":"Scenario Facts", "relation":"testcount2scenerio","parent":"scenerio","button_width":"100","rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[3,5]},
	        	"featurelist": {"caption":"Feature Test Group", "relation":"featuremap2feature", "parent":"feature","button_width":"100","rowselect":"update_featuregrouplist_for_feature","excludecolupdate":":myfeature"},
	        	"teststeps": {"caption":"Tests", "relation":"teststeps2scenerio", "parent":"scenerio","button_width":"100","formcolhide":"externid","buttonhide":"teststeps_priv_step"},
		        
	        },
	        "scenerio": {
	        	"scenerio": {"caption":"Scenarios", "relation":"scenerio2feature", "child":"matrixlist", "parent":"feature","button_width":"100","uri":"rows","showlistcols":[3,5],"formcolhide":"projectname,featurename,externid","buttonhide":"create,scenerio_priv_step"},
	        	"matrixlist": {"caption":"Matrix", "relation":"matrixmap2scenerio", "parent":"scenerio","button_width":"100","rowselect":"update_matrixlist_for_scenerio","excludecolupdate":":scenerio","buttonhide":"scroll:project"},
	        	"testcount": {"caption":"Scenario Facts", "relation":"testcount2scenerio","parent":"scenerio","button_width":"100","rowselect":"draw_testcount_chart","formload":"draw_testcount_chart","chartcols":[3,5]},
	        	"teststeps": {"caption":"Tests", "relation":"teststeps2scenerio", "parent":"scenerio","button_width":"100","formcolhide":"externid","buttonhide":"teststeps_priv_step"},
	        },
	        "grouprun": {
	        	"grouprun": {"caption":"Group Run","child":"featurerun","button_width":"100","showlistcols":[6,7],"formcolhide":"productname","uri":"rows","buttonhide":"create,scroll:featuregroup"},
	        	"featurerun": {"caption":"Feature Run", "relation":"featurerun2testrun", "relatedto":"featurerun2testmatrix:grouprun2testmatrix" , "child":"testscenerio", "parent":"testrun","button_width":"100","buttonhide":"scroll:testrun"},
	        	"jobrun": {"caption":"Run Job", "relation":"jobrun2testrun", "parent":"grouprun","button_width":"100","rowselect":"set_base_url","formload":"set_base_url","buttonhide":"testrun"},
	        	"testscenerio": {"caption":"Test Scenario", "relation":"testscenerio2featurerun","relatedto":"featurerun2testmatrix:featurerun2testmatrix,sceneriorun2testrun:featurerun2testrun", "child":"sceneriorun", "parent":"featurerun","button_width":"100","rowselect":"create_new_sceneriorun_form"},
	        	"sceneriorun": {"caption":"Test Run", "relation":"sceneriorun2testscenerio","relatedto":"sceneriorun2testrun","listrelation":"testscenerio.sceneriorun2testrun","child":"attachment", "parent":"testscenerio","button_width":"100","uri":"rows","formcolhide":"envname"},
	        	"bug": {"caption":"Defect", "relation":"bug2sceneriorun", "parent":"sceneriorun","button_width":"100"},
	        	"teststeps": {"caption":"Test Steps", "relatedto":"teststeps2scenerio", "parent":"testscenerio","button_width":"100","buttonhide":"create,save","formcolhide":"externid","buttonhide":"teststeps_action_set"},
	        	"attachment": {"caption":"Attachments", "relation":"attachment2sceneriorun", "parent":"sceneriorun","button_width":"100","buttonhide":"scroll:sceneriorun,scroll:testscenerio,scroll:featurerun"},
		        "grouprunresult": {"caption":"Group Run Facts", "relation":"grouprunresult2grouprun","parent":"grouprun","child":"sceneriorunresult","button_width":"100","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[5,6,7,8,12]},
		        "featuretestresult": {"caption":"Feature Run Facts", "relation":"featuretestresult2featurerun","relatedto":"featurerun2testrun","parent":"featurerun","button_width":"100","buttonhide":"scroll:feature:tabwidget","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[4,5,6,7,11]},
		        "summaryreport": {"caption":"Summary Reports","relation":"summaryreport2testrun","relatedto":"summaryreport2testmatrix:grouprun2testmatrix", "parent":"grouprun","child":"sceneriorunresult","button_width":"100","buttonhide":"scroll:testrun","showlistcols":[6,8,9,12,19],"formcolhide":":name"},
		        "testrunchart": {"caption":"Summary Chart", "relation":"testrunchart2testrun","parent":"grouprun","button_width":"100","rowselect":"draw_summary_result_chart","formload":"draw_summary_result_chart","chartcols":[7,8,9],"showlistcols":[3,4,5,9],"buttonhide":":testrun"},
		        "browserchart": {"caption":"Bowser Chart", "relation":"browserchart2testrun","parent":"grouprun","button_width":"100","rowselect":"draw_browser_result_chart","formload":"draw_browser_result_chart","chartcols":[7,8,9],"showlistcols":[3,4,5,7,8],"buttonhide":":testrun"},
		        "sceneriorunresult": {"caption":"Scenario Run","relatedto":"sceneriorunresult2testrun:@table2testrun", "parent":"summaryreport","child":"bug","button_width":"100","excludecolupdate":":envname,:sceneriorunresult2testrun","buttonhide":"scroll:grouprunresult,scroll:testrunresult,scroll:summaryreport"},
			       
	        },
	        "testrun": {
	        	"testrun": {"caption":"Matrix Run","child":"jobrun","button_width":"100","showlistcols":[5,6],"formcolhide":"productname","uri":"rows","buttonhide":"create,scroll:testmatrix"},
	        	"featurerun": {"caption":"Feature Run", "relation":"featurerun2testrun", "child":"testscenerio", "parent":"testrun","button_width":"100","buttonhide":"scroll:grouprun"},
	        	"jobrun": {"caption":"Run Job", "relation":"jobrun2testrun", "parent":"testrun","button_width":"100","rowselect":"set_base_url","formload":"set_base_url","buttonhide":"grouprun"},
	        	"testscenerio": {"caption":"Test Scenario", "relation":"testscenerio2featurerun","relatedto":"featurerun2testmatrix:featurerun2testmatrix,sceneriorun2testrun:featurerun2testrun", "child":"sceneriorun", "parent":"featurerun","button_width":"100","rowselect":"create_new_sceneriorun_form"},
	        	"sceneriorun": {"caption":"Test Run", "relation":"sceneriorun2testscenerio","relatedto":"sceneriorun2testrun","listrelation":"testscenerio.sceneriorun2testrun","child":"attachment", "parent":"testscenerio","button_width":"100","uri":"rows","formcolhide":"envname"},
	        	"bug": {"caption":"Defect", "relation":"bug2sceneriorun", "parent":"sceneriorun","button_width":"100"},
	        	"teststeps": {"caption":"Test Steps", "relatedto":"teststeps2scenerio", "parent":"testscenerio","button_width":"100","buttonhide":"create,save","formcolhide":"externid","buttonhide":"teststeps_action_set"},
	        	"attachment": {"caption":"Attachments", "relation":"attachment2sceneriorun", "parent":"sceneriorun","button_width":"100","buttonhide":"scroll:sceneriorun,scroll:testscenerio,scroll:featurerun"},
		        "testrunresult": {"caption":"Matrix Run Facts", "relation":"testrunresult2testrun","parent":"testrun","child":"sceneriorunresult","button_width":"100","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[4,5,6,7,11]},
		        "featuretestresult": {"caption":"Feature Run Facts", "relation":"featuretestresult2featurerun","relatedto":"featurerun2testrun","parent":"featurerun","button_width":"100","buttonhide":"scroll:feature:tabwidget","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[4,5,6,7,11]},
		        "summaryreport": {"caption":"Summary Reports","relation":"summaryreport2testrun","relatedto":"summaryreport2testmatrix:testrun2testmatrix", "parent":"testrun","child":"sceneriorunresult","button_width":"100","buttonhide":"scroll:grouprun","showlistcols":[6,8,9,12,19],"formcolhide":":name"},
		        "testrunchart": {"caption":"Summary Chart", "relation":"testrunchart2testrun","parent":"testrun","button_width":"100","rowselect":"draw_summary_result_chart","formload":"draw_summary_result_chart","chartcols":[7,8,9],"showlistcols":[3,4,5,9],"buttonhide":":grouprun"},
		        "browserchart": {"caption":"Bowser Chart", "relation":"browserchart2testrun","parent":"testrun","button_width":"100","rowselect":"draw_browser_result_chart","formload":"draw_browser_result_chart","chartcols":[7,8,9],"showlistcols":[3,4,5,7,8],"buttonhide":":grouprun"},
		        "sceneriorunresult": {"caption":"Scenario Run","relatedto":"sceneriorunresult2testrun:@table2testrun", "parent":"summaryreport","child":"bug","button_width":"100","excludecolupdate":":envname,:sceneriorunresult2testrun","buttonhide":"scroll:grouprunresult,scroll:testrunresult,scroll:summaryreport"},
		        
		      
	        },
	        "featurerun": {
	        	"featurerun": {"caption":"Feature Run", "relation":"featurerun2testrun", "child":"testscenerio", "parent":"testrun","button_width":"100","uri":"rows","buttonhide":"scroll:testrun,scroll:grouprun"},
	        	"testscenerio": {"caption":"Test Scenerio", "relation":"testscenerio2featurerun", "relatedto":"featurerun2testmatrix:featurerun2testmatrix,sceneriorun2testrun:featurerun2testrun","child":"sceneriorun", "parent":"featurerun","button_width":"100","rowselect":"create_new_sceneriorun_form"},
		        "sceneriorun": {"caption":"Scenario Run", "relation":"sceneriorun2testscenerio","relatedto":"sceneriorun2testrun","listrelation":"testscenerio.sceneriorun2testrun","child":"attachment", "parent":"testscenerio","button_width":"100","uri":"rows","formcolhide":"envname"},
	        	"attachment": {"caption":"Attachments", "relation":"attachment2sceneriorun", "parent":"sceneriorun","button_width":"100","buttonhide":"scroll:sceneriorun,scroll:testscenerio,scroll:bug"},
	        	"bug": {"caption":"Defect", "relation":"bug2sceneriorun", "parent":"sceneriorun","button_width":"100"},
	        	"teststeps": {"caption":"Test Steps", "relatedto":"teststeps2scenerio", "parent":"testscenerio","button_width":"100","buttonhide":"create,save","formcolhide":"externid","buttonhide":"teststeps_action_set"},
	        	"featuretestresult": {"caption":"Feature Run Facts", "relation":"featuretestresult2featurerun","relatedto":"featurerun2testrun","parent":"featurerun","button_width":"100","buttonhide":"scroll:feature:tabwidget","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[4,5,6,7,11]},
		        
	        },
	        "testscenerio": {
	        	 "testscenerio": {"caption":"Test Scenerio", "relation":"testscenerio2featurerun", "child":"sceneriorun", "parent":"featurerun","button_width":"100","rowselect":"create_new_sceneriorun_form","buttonhide":"scroll:featurerun"},
	        	 "sceneriorun": {"caption":"Scenario Run", "relation":"sceneriorun2testscenerio","relatedto":"sceneriorun2testrun","listrelation":"testscenerio.sceneriorun2testrun","child":"attachment", "parent":"testscenerio","button_width":"100","uri":"rows","formcolhide":"envname","buttonhide":"scroll:featurerun"},
		          "attachment": {"caption":"Attachments", "relation":"attachment2sceneriorun", "parent":"sceneriorun","button_width":"100","buttonhide":"scroll:sceneriorun,scroll:bug,scroll:featurerun"},
	        	  "bug": {"caption":"Defect", "relation":"bug2sceneriorun", "parent":"sceneriorun","button_width":"100"},
	        	  "teststeps": {"caption":"Test Steps", "relatedto":"teststeps2scenerio", "parent":"testscenerio","button_width":"100","buttonhide":"create,save","formcolhide":"externid","buttonhide":"teststeps_action_set"},
	        	  "resolution": {"caption":"Resolution", "relation":"resolution2bug", "parent":"bug","button_width":"100"}
		        
	        },
	        "testmatrix": {
	        	"testmatrix": {"caption":"Test Matrix", "child":"testrun","button_width":"100","uri":"rows","showlistcols":[4,5],"formcolhide":"productname"},
	        	"testrun": {"caption":"Matrix Run", "relatedto":"testrun2product:testmatrix2product", "relation":"testrun2testmatrix","parent":"testmatrix","button_width":"100","formcolhide":"productname","buttonhide":"scroll:jobrun,testrun:jobrun:handle_custom_changes"},
	        	"testenv": {"caption":"Test Env", "relation":"testenv2testmatrix",  "parent":"testmatrix","button_width":"100"},
	        	"jobrun": {"caption":"Run Job", "relation":"jobrun2testrun", "parent":"testrun","button_width":"100","rowselect":"set_base_url","formload":"set_base_url"},
	        	
	        },
	        "featuregroup": {
	        	"featuregroup": {"caption":"Feature Group", "child":"grouprun","button_width":"100","uri":"rows","showlistcols":[3,4],"formcolhide":"productname"},
	        	"grouprun": {"caption":"Group Run", "relatedto":"grouprun2product:featuregroup2product", "relation":"grouprun2featuregroup","parent":"featuregroup","button_width":"100","formcolhide":"productname","buttonhide":"scroll:jobrun"},
	        	
	        	
	        },
	        "bug": {
	        	"bug": {"caption":"Bug","child":"resolution","button_width":"100","buttonhide":"bug:bug:removeMe"},
	        	"bugscenerio": {"caption":"Test Scenario", "relation":"bugscenerio2bug", "parent":"bug","button_width":"100","buttonhide":":mybug"},
	        	"attachment": {"caption":"Attachments", "relation":"attachment2bug", "parent":"bug","button_width":"100","buttonhide":"scroll:sceneriorun,scroll:testscenerio,scroll:featurerun"},
	            "resolution": {"caption":"Resolution", "relation":"resolution2bug", "parent":"bug","button_width":"100","buttonhide":"mybug:resolution:removeMe"}
		        
	        },
	        "projectboard": {
	        	"projectboard": {"caption":"Project Boards","relation":"projectboard2project","child":"sprint","parent":"project","button_width":"100"},
	            "sprint": {"caption":"Sprint", "relation":"sprint2projectboard","child":"sprintboard", "parent":"projectboard","button_width":"100","showlistcols":[3,4,5]},
	            "sprintboard": {"caption":"Board", "relation":"sprintboard2sprint", "parent":"sprint","child":"backlog","button_width":"100"},
	            "backlog": {"caption":"Feature List", "relation":"backlog2board","relatedto":"sprintboard2sprint", "parent":"board","button_width":"100","rowselect":"update_backlog_relation"},
	            "feature": {"caption":"Feature", "relation":"feature2board", "parent":"board","child":"tasks","button_width":"100","formcolhide":"projectname","buttonhide":"scroll:scenerio,scroll:epic,create:feature,new,summary,file:download:feature,scroll:mytasks"},
	            "tasks": {"caption":"Tasks", "relation":"tasks2feature", "parent":"feature","child":"tasknote","button_width":"100"},
	            "tasknote": {"caption":"Note", "relation":"tasknote2tasks", "parent":"tasks","button_width":"100","buttonhide":"scroll:mytasks"},
	            "projectboardresult": {"caption":"Project Board Facts", "relation":"boardresult2projectboard","parent":"projectboard","button_width":"100","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[3,4,5,6,10]},
	            "burndownchart": {"caption":"Burndown Chart", "relation":"burndownchart2project","parent":"projectboard","button_width":"100","rowselect":"draw_burndown_chart","formload":"draw_burndown_chart","chartcols":[5,6],"showlistcols":[3,4,5]},
	            "sprintresult": {"caption":"Sprint Facts", "relation":"sprintresult2sprint","parent":"sprint","button_width":"100","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[3,4,5,6,10]},
	            "featuretestresult": {"caption":"Feature Run Facts", "relation":"featuretestresult2featurerun","parent":"feature","button_width":"100","buttonhide":"featurerun:featuretestresult:removeMe","invokefilter":"true","rowselect":"draw_board_chart","formload":"draw_board_chart","chartcols":[4,5,6,7,11]},
	            "sprinttasks": {"caption":"Tasks", "relation":"sprinttasks2sprint", "parent":"burndownchart","form":"tasks","button_width":"100","formcolhide":"SprintTasks2Sprint","invokefilter":"true","showlistcols":[2,5]},
	            "difficulttasks": {"caption":"Difficult Tasks", "relation":"difficulttasks2sprint", "parent":"burndownchart","form":"tasks","button_width":"100","formcolhide":"difficulttasks2Sprint","excludecolupdate":":hrspent","invokefilter":"true","showlistcols":[2,5,7,8,9]},
	            "sprintvelocity": {"caption":"Sprint Velocity", "relation":"sprintvelocity2project","parent":"projectboard","button_width":"100","showlistcols":[4,5,9,12],"rowselect":"draw_sprintvelocity_chart","formload":"draw_sprintvelocity_chart"},
			    
	        },
	        "weeksheet": {
	        	"weeksheet": {"caption":"Time Entry","child":"timesheet","button_width":"100","rowselect":"show_weeksheet_visible_col"},
	            "timesheet": {"caption":"Task List", "relation":"timesheet2week","relatedto":"timesheet2testuser", "parent":"timeentry","button_width":"100"}
	        },
	        "company": {
	        	"company": {"caption":"Company","child":"testuser","button_width":"100"},
	        	"testuser": {"caption":"User", "relation":"testuser2company", "parent":"company","button_width":"100","buttonhide":"scroll:privilegegroup"}
	        },
	        "testuser": {
	        	"testuser": {"caption":"User", "relation":"testuser2company", "parent":"company","button_width":"100","buttonhide":"scroll:privilegegroup,scroll:company"}
	        },
	        "calendar": {
	        	"calendar": {"caption":"Calendar","child":"week","button_width":"100"},
	        	"week": {"caption":"Week", "relation":"week2calendar", "parent":"calendar","button_width":"100"}
	        },
	        "privilegegroup": {
	        	"privilegegroup": {"caption":"Privilege","child":"module","button_width":"100"},
	        	"module": {"caption":"Module", "relation":"module2privilegegroup", "parent":"privilegegroup","button_width":"100"},
	        	"testuser": {"caption":"User", "relation":"testuser2privilegegroup", "parent":"privilegegroup","button_width":"100","buttonhide":"scroll:company"}
	        }
	    }
	}
function getSearchFilter(table){
	
	var filter;
	if(menuid==table){
		if(table=='project'){
			filter="project.name"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('name')==""?"%":main_form.getItemValue('name'))+
			String.fromCharCode(2)+
			"project.status"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('status')==""?"%":main_form.getItemValue('status'));
			
		}else if(table=='product'){
			filter="name like '"+main_form.getItemValue('name')+"%'";
		}else if(table=='referral'||table=='training'){
			filter="genuser = '"+username+"'";
			if(menuselectid=='artitelly'){
				filter="name like '"+(!main_form.getItemValue('runname')?"%":main_form.getItemValue('runname'))+"'";
			}
			
		}else if( menuselectid=='testuser'&&(table=='myprofile'||table=='mytasks'||table=='mybug'||table=='weeksheet'||table=='mytraining'||table=='bookcourse'||table=='support'||table=='consultant'||table=='developer')){
			filter="loginname = '"+username+"'";
			var datefilter="";
			if(table=='weeksheet'){
				if(main_form.getCalendar('startdate').getDate(true)){
					 datefilter="and to_date('"+main_form.getCalendar('startdate').getDate(true)+"','yyyy-mm-dd') between startdate and enddate";
				 }
				filter+=" and name like '"+main_form.getItemValue('name')+"%' "+datefilter;
			}
			if(table=='mytraining'){
				filter="name like '%'";
			}
			if(table=='support'||table=='consultant'||table=='developer'){
				filter="genuser = '"+username+"'";
			}
		}else if( menuselectid=='crm'&&(table=='mycontact'||table=='mylead')){
			filter="loginname = '"+username+"'";
		}else if( menuselectid=='crm'&&(table=='contact'||table=='lead')){
			filter=" name like '"+main_form.getItemValue('name')+"%' " 
			+( !main_form.getItemValue('lastname')||main_form.getItemValue('lastname')=='' ?"":" and lastname like '"+main_form.getItemValue('lastname')+"%'")
			+( !main_form.getItemValue('company')||main_form.getItemValue('company')==''?"":" and upper(company) like upper('"+main_form.getItemValue('company')+"%')")
			+( !main_form.getItemValue('agentid')||main_form.getItemValue('agentid')==''?"":" and agentid like '"+main_form.getItemValue('agentid')+"%'")
			+( !main_form.getItemValue('leadstage')||main_form.getItemValue('leadstage')==''?"":" and leadstage like '"+main_form.getItemValue('leadstage')+"%'")
			+( !main_form.getItemValue('leadsource')||main_form.getItemValue('leadsource')==''?"":" and leadsource like '"+main_form.getItemValue('leadsource')+"%'")
			+( !main_form.getItemValue('leadstatus')||main_form.getItemValue('leadstatus')==''?"":" and leadstatus like '"+main_form.getItemValue('leadstatus')+"%'")
			+( !main_form.getItemValue('contactstage')||main_form.getItemValue('contactstage')==''?"":" and contactstage like '"+main_form.getItemValue('contactstage')+"%'")
			+(!main_form.getItemValue('city')||main_form.getItemValue('city')==''?"":" and upper(city) like upper('"+main_form.getItemValue('city')+"%')")
			+(!main_form.getItemValue('zipcode')||main_form.getItemValue('zipcode')==''?"":" and zipcode like '"+main_form.getItemValue('zipcode')+"%'")
			+(!main_form.getItemValue('mobile')||main_form.getItemValue('mobile')==''?"":" and mobile like '%"+main_form.getItemValue('mobile')+"%'")
			+(!main_form.getItemValue('officephone')||main_form.getItemValue('officephone')==''?"":" and officephone like '%"+main_form.getItemValue('officephone')+"%'")
			+(!main_form.getCalendar('gendate').getDate(true)?"":" and to_char(gendate,'yyyy-mm-dd')= '"+main_form.getCalendar('gendate').getDate(true)+"'")
			+(!main_form.getItemValue('withindays')||main_form.getItemValue('withindays')==''?"":" and gendate >=sysdate - "+main_form.getItemValue('withindays'))
			+(!main_form.getItemValue('rownum')||main_form.getItemValue('rownum')==''?"":" and rownum <= "+main_form.getItemValue('rownum'));
		}else if(table=='testmatrix'){
			filter="name like '"+main_form.getItemValue('name')+"%'";
		}else if(table=='testrun'){
			filter="name like '"+main_form.getItemValue('name')+"%'";
		}else if(table=='feature'){
			filter="feature.name"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('name')==""?"%":main_form.getItemValue('name'))+
			String.fromCharCode(2)+
			"project.name"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('projectname')==""?"%":main_form.getItemValue('projectname'))+
			String.fromCharCode(2)+
			"feature.status"+String.fromCharCode(1)+"nLike"+String.fromCharCode(1)+"Not Started";
			//filter="name like '"+main_form.getItemValue('name')+"%'";
		}else if(table=='scenerio'){
			filter="scenerio.name"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('name')==""?"%":main_form.getItemValue('name'))+
			String.fromCharCode(2)+
			"feature.name"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('featurename')==""?"%":main_form.getItemValue('featurename'))+
			String.fromCharCode(2)+
			"project.name"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('projectname')==""?"%":main_form.getItemValue('projectname'));
		}else if(table=='weeksheet' &&!menuselectid){
			 var datefilter="";
			 if(main_form.getCalendar('startdate').getDate(true)){
				 datefilter="and to_date('"+main_form.getCalendar('startdate').getDate(true)+"','yyyy-mm-dd') between startdate and enddate";
			 }else{
				 datefilter="and sysdate between startdate and enddate";
			 }
			filter="name like '"+main_form.getItemValue('name')+"%' "+datefilter;
			
		}else if(table=='featurerun'){
			filter="featurerun.name"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('name')==""?"%":main_form.getItemValue('name'))+
			String.fromCharCode(2)+
			"featurerun.projectname"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('projectname')==""?"%":main_form.getItemValue('projectname'))+
			String.fromCharCode(2)+
			"featurerun.matrixname"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('matrixname')==""?"%":main_form.getItemValue('matrixname'))+
			String.fromCharCode(2)+
			"featurerun.runname"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			(main_form.getItemValue('runname')==""?"%":main_form.getItemValue('runname'))+
			String.fromCharCode(2)+
			"featurerun.groupname"+String.fromCharCode(1)+"Like"+String.fromCharCode(1)+
			"Project%";
		}else if(table=='testscenerio'){
			 /*if(main_form.getItemValue('name')==""){
				 dhtmlx.alert("Please enter partial run name. You can look at run name in Test Run Tab!")
				 return false;
			 }
			 */
			 var datefilter="";
			 if(main_form.getCalendar('duedate').getDate(true)){
				 datefilter="and duedate between  sysdate-1 and to_date('"+main_form.getCalendar('duedate').getDate(true)+"','yyyy-mm-dd') ";
			 }
			filter="name like '"+main_form.getItemValue('name')+"%' "+datefilter 
				+(main_form.getItemValue('status')==""?"":" and status='"+main_form.getItemValue('status')+"'")
				+(main_form.getItemValue('isautomated')==""?"":" and isautomated='"+main_form.getItemValue('isautomated')+"'") +
				" and exists (select * from table_testrun where objid=sceneriorun2testrun)";
		
		}else{
			filter="name like '"+main_form.getItemValue('name')+"%'";
		}
	}
	
	if(table=='sprinttasks'){
		//alert(getWidgetForm(table).getUserData("parent_objid",""));
		if(getWidgetForm(table)){
			filter="( sprinttasks2sprint=(select distinct sprinttasks2sprint from table_sprinttasks where objid= '"+getWidgetForm(table).getUserData("parent_objid","")+"') or  sprinttasks2sprint='"+getWidgetForm(table).getUserData("parent_objid","")+"')";
	    }
	}
	if(table=='difficulttasks'){
		//alert(getWidgetForm(table).getUserData("parent_objid",""));
		if(getWidgetForm(table)){
			filter="( difficulttasks2sprint=(select distinct difficulttasks2sprint from table_difficulttasks where objid= '"+getWidgetForm(table).getUserData("parent_objid","")+"') or  difficulttasks2sprint='"+getWidgetForm(table).getUserData("parent_objid","")+"')";
	    }
	}
	if(table=="featuretestresult" &&getInvokeFilter(menuid,table)=='true'){
		filter= " objid= '"+getWidgetForm(table).getUserData("parent_objid","")+ "' and exists (select objid from table_testrun t where t.objid=featurerun2testrun) ";
		
	}
	return filter;
}


function htmlencode(str) {
	try{
		return str.replace(/[&<>"?']/g, function($0) {
	        return "&" + {"&":"amp", "<":"lt", ">":"gt", '"':"quot", "'":"#39","?":"#63"}[$0] + ";";
	    });
		
	}catch(err){
		if(debug){
			dhtmlx.message("Error in encoding of string="+str);
		}
		return(str);
	}
    
}

function getAllCaptions(){
	for (var table in menuconfig.menus) {
	    for (var child in menuconfig.menus[table]) {
	        var caption =  menuconfig.menus[table][child].caption;
	        alert(table + ', ' + child + ', ' + caption);
	    }
	}
	
}

function load_child_widget(table){
	  var table;
	  var parent;
	  var grid;
	  var rowid;

	  if(table){
	     parent=getParent(menuid,table);
	     grid=gridlist[parent];
	  }

	  if(grid){
	  	rowid=grid.getSelectedRowId();
	  	current_grid=grid;
	  }
	  //verify if current grid is selected
	  if(!rowid){
	  	dhtmlx.alert("Please select a row in the grid!");
	  	return false;
	  }else{
	  	  current_parent_id=grid.cells(rowid,1).getValue();
	  }
	  
	  if(current_parent_id=='newid'){
	  	 	dhtmlx.alert("Please create a new record and save to the the grid to find details!");
	  	 	return false;
	  }
	  if(name!=null && !widgetforms[table]){
	     widget_container=table+"_container";
	     addWidgetContainer(table,widget_container);
	     addWidgetLayout(table,widget_container);
	    
	  }
	  
	}

function draw_testcount_chart(table){
	
	var grid=gridlist[table];
	//var cols=[4,5,6,7];
	//var data=getJSONDatafromGrid(grid,cols);
	var data=getJSONDataForChart(table);
	
	
	var chartcontainer;
	var widget_form=getWidgetForm(table);
	if(widget_form){
		 chartcontainer=widget_form.getContainer(table+'_chart_cont');
	}
	
	
	
	var barChart1 =  new dhtmlXChart({
		view:"stackedBar",
		container:chartcontainer,
	    value:"#col1#",
        label:"#col1#",
        color: "#58dccd",
        gradient:"falling",
		width:60,
		tooltip:{
			template:"#col1#"
		},
		xAxis:{
			template:"'#col0#"
		},
		yAxis:{},
		legend:{
			values:[{text:"Tests",color:"#36abee"},{text:"Env",color:"#a7ee70"},{text:"Scenerio",color:"#58dccd"}],
			valign:"middle",
			align:"right",
			width:90,
			layout:"y"
		}
	});

	barChart1.addSeries({
	    value:"#col2#",
		color:"#a7ee70",
		label:"#col2#",
		tooltip:{
			template:"#col2#"
		}
	});
	barChart1.addSeries({
	    value:"#col3#",
        color:"#36abee",
        label:"#col3#",
        tooltip:{
            template:"#col3#"
        }
	});
	barChart1.parse(data,"json");
	
}


function draw_board_chart(table){
	
	var grid=gridlist[table];
	//var cols=[4,5,6,7];
	//var data=getJSONDatafromGrid(grid,cols);
	var data=getJSONDataForChart(table);
	
	
	var chartcontainer;
	var widget_form=getWidgetForm(table);
	if(widget_form){
		 chartcontainer=widget_form.getContainer(table+'_chart_cont');
	}
	
	
	
	var barChart1 =  new dhtmlXChart({
		view:"stackedBar",
		container:chartcontainer,
	    value:"#col1#",
        label:"#col1#",
        color: "#36abee",
        gradient:"falling",
		width:60,
		tooltip:{
			template:"#col1#"
		},
		xAxis:{
			template:"'#col0#"
		},
		yAxis:{},
		legend:{
			values:[{text:"Defect",color:"#800000"},{text:"Passed",color:"#58dccd"},{text:"Executed",color:"#a7ee70"},{text:"Tests",color:"#36abee"}],
			valign:"middle",
			align:"right",
			width:90,
			layout:"y"
		}
	});

	barChart1.addSeries({
	    value:"#col2#",
		color:"#a7ee70",
		label:"#col2#",
		tooltip:{
			template:"#col2#"
		}
	});
	barChart1.addSeries({
	    value:"#col3#",
        color:"#58dccd",
        label:"#col3#",
        tooltip:{
            template:"#col3#"
        }
	});
	barChart1.addSeries({
	    value:"#col4#",
        color:"#800000",
        label:"#col4#",
        tooltip:{
            template:"#col3#"
        }
	});
	barChart1.parse(data,"json");
	
}
function draw_testresult_chart(table){
	
	var grid=gridlist[table];
	var data=getJSONDataForResultChart(table);
	//dhtmlx.alert(data);
	
	var chartcontainer;
	var widget_form=getWidgetForm(table);
	if(widget_form){
		 chartcontainer=widget_form.getContainer(table+'_chart_cont');
	}
	
	
	
	var barChart1 =  new dhtmlXChart({
		view:"stackedBar",
		container:chartcontainer,
	    value:"#col1#",
        label:"#col1#",
        color: "#58dccd",
        gradient:"falling",
		width:50,
		tooltip:{
			template:"#col1#"
		},
		xAxis:{
			template:"'#col0#"
		},
		yAxis:{},
		legend:{
			values:[{text:"Count",color:"#36abee"},{text:"% of Count",color:"#a7ee70"}],
			valign:"middle",
			align:"right",
			width:90,
			layout:"y"
		}
	});

	barChart1.addSeries({
	    value:"#col2#",
		color:"#a7ee70",
		label:"#col2#",
		tooltip:{
			template:"#col2#"
		}
	});
	
	barChart1.parse(data,"json");
	
}

var myLineChart;
function draw_burndown_chart(table){
	
	var grid=gridlist[table];
	var data=getJSONDataForLineChart (table,7,9);
	//dhtmlx.alert(data);
	
	var chartcontainer;
	var widget_form=getWidgetForm(table);
	if(widget_form){
		 chartcontainer=widget_form.getContainer(table+'_chart_cont');
	}
	
	 myLineChart =  new dhtmlXChart({
		view:"line",
		container:chartcontainer,
		value:"#col1#",
		item:{
			borderColor: "#1293f8",
			color: "#ffffff"
		},
		line:{
			color:"#1293f8",
			width:3
		},
		tooltip:{
			template:"#col1#"
		},
		offset:0,
		xAxis:{
			template:"#col0#",
			start:0,
			step:10,
			end:100,
		},
		yAxis:{
			start:0,
			step:200,
			end:1000,
			template:function(value){
				return value%5?"":value
			}
		},
		padding:{
			left:35,
			bottom: 50
		},
		origin:0,
		legend:{
			layout:"x",
			width: 75,
			align:"center",
			valign:"bottom",
			values:[
				{text:"Actual",color:"#3399ff"},
				{text:"Ideal",color:"#66cc00"}
			],
			margin: 10
		}
	});
	myLineChart.addSeries({
		value:"#col2#",
		item:{
			borderColor: "#66cc00",
			color: "#ffffff"
		},
		line:{
			color:"#66cc00",
			width:3
		},
		tooltip:{
			template:"#col2#"
		}
	});
	myLineChart.parse(data,"json");
	
	/*
	myLineChart =  new dhtmlXChart({
		view:"line",
		container:chartcontainer,
		value:"#col1#",
		item:{
			borderColor: "#447900",
			color: "#69ba00"
		},
		line:{
			color:"#69ba00",
			width:2
		},
		tooltip:{
			template:"#col1#"
		},
		offset:0,
		xAxis:{
			template:"'#col0#"
		},
		yAxis:{
			start:0,
			step: 100,
			end: 1000
		},
		padding:{
			left:35,
			bottom: 50
		},
		origin:0,
		legend:{
			values:[{text:"Actual"},{text:"Ideal"}],
			align:"right",
			valign:"middle",
			layout:"y",
			width: 100,
			margin: 8,
			marker:{
				type: "item"
			}
		}
	});
	myLineChart.addSeries({
		value:"#col2#",
		item:{
			borderColor: "#0a796a",
			color: "#4aa397",
			type:"s",
			radius: 4
		},
		line:{
			color:"#4aa397",
			width:2
		},
		tooltip:{
			template:"#col2#"
		}
	});
	
	myLineChart.parse(data,"json");
	*/
	
	
}

function draw_summary_result_chart(table){
	
	var grid=gridlist[table];
	var data=getJSONDataForChart (table);
	//dhtmlx.alert(data);
	
	var chartcontainer;
	var widget_form=getWidgetForm(table);
	if(widget_form){
		 chartcontainer=widget_form.getContainer(table+'_chart_cont');
	}
	
	var myLineChart =  new dhtmlXChart({
		view:"line",
		container:chartcontainer,
		value:"#col0#",
		item:{
			borderColor: "#1293f8",
			color: "#ffffff"
		},
		line:{
			color:"#1293f8",
			width:3
		},
		tooltip:{
			template:"Overall Pass(%) = #col0#" 
		},
		offset:0,
		xAxis:{
			template:"#col2#",
			start:0,
			step:2,
			end:60,
		},
		yAxis:{
			start:0,
			step:10,
			end:110,
			template:function(value){
				return value%5?"":value
			}
		},
		padding:{
			left:35,
			bottom: 50
		},
		origin:0,
		legend:{
			layout:"x",
			width: 75,
			align:"center",
			valign:"bottom",
			values:[
				{text:"Pass",color:"#3399ff"},
				{text:"Fail",color:"#66cc00"}
			],
			margin: 10
		}
	});
	
	
	myLineChart.addSeries({
		value:"#col1#",
		item:{
			borderColor: "#66cc00",
			color: "#ffffff"
		},
		line:{
			color:"#66cc00",
			width:3
		},
		tooltip:{
			template:"Overall Fail(%) = #col1#"
		}
	});
	myLineChart.parse(data,"json");
	
	
}
//velocity chart

var myVelocityChart

function draw_sprintvelocity_chart(table) {
	var pcols=[15,5,9,12];
	var xlabel="Sprint";
	var ylabel="Points";
	var colmxId=5;
	var accronyms=['Sprint','Development','Testing'];
	
	var data=getJSONDataForVelocityChart (table,pcols);
	//dhtmlx.alert(data);
	
	var chartcontainer;
	var widget_form=getWidgetForm(table);
	if(widget_form){
		 chartcontainer=widget_form.getContainer(table+'_chart_cont');
	}
	widget_form.attachEvent("onChange", function (name, value){
	     //your code here
		if(value=='Velocity'){
			pcols=[15,5,9,12];  // pcols=[4,5,9,12]; for name initial index=4
			colmxId=5;
			//xlabel="Time";
			ylabel="Points";
			accronyms=['Sprint','Development','Testing'];
		}else if (value=='Development'){
			pcols=[15,8,10,11];
			colmxId=6;
			//xlabel="Task";
			ylabel="Hour";
			accronyms=['Sprint Total','Actual','Estimate'];
		}else if (value=='Testing'){
			pcols=[15,8,13,14];
			//xlabel="Budget";
			ylabel="Hour";
			accronyms=['Sprint Total','Actual','Estimate'];
		}else if (value=='Overall'){
			pcols=[15,7,8,6];
			//xlabel="Av.Hourly Rate";
			ylabel="Hour";
			accronyms=['Sprint Total','Actual','Estimate'];
		}
		data=getJSONDataForVelocityChart (table,pcols);
		if(myBarChart){
			myBarChart.clearAll();
			myBarChart.destructor();
		}
		doMultiBarChart(chartcontainer,data, xlabel,ylabel,table,colmxId,accronyms);
		//drawVelocityChart(chartcontainer,data, xlabel,ylabel,table,colmxId);
	});
	if(widget_form){
		chartcontainer=widget_form.getContainer(table+'_chart1_cont');
	}
	 doMultiBarChart(chartcontainer,data, xlabel,ylabel,table,colmxId,accronyms);
	//drawVelocityChart(chartcontainer,data, xlabel,ylabel,table,colmxId);
	
	}

var myBarChart;
function doMultiBarChart(chartcontainer,data, xlabel,ylabel,table,colmxId,accronyms) {
	 var grid=gridlist[table];
	 var ymax=10;
	 var value=0;
	 if(grid){
		 grid.forEachRow(function(id) {
				 value=grid.cells(id,colmxId).getValue();
				 if(value>ymax){
					 ymax=value;
				 }
			});
		
	 }
	myBarChart =  new dhtmlXChart({
		view:"bar",
		container:chartcontainer,
		value:"#col1#",
		color: "#58dccd",
		gradient:"rising",
		tooltip:{
			template:"#col1#"
		},
		width:20,
		xAxis:{
			title:xlabel,
			template:"'#col0#"
		},
		yAxis:{
			title:ylabel,
			start:0,
			step:10,
			end:ymax
		},
		legend:{
			values:[{text:accronyms[0],color:"#58dccd"},{text:accronyms[1],color:"#a7ee70"},{text:accronyms[2],color:"#36abee"}],
			valign:"middle",
			align:"right",
			width:100,
			layout:"y"
		}
	});
	myBarChart.addSeries({
		value:"#col2#",
		color:"#a7ee70",
		tooltip:{
			template:"#col2#"
		}
	});
	myBarChart.addSeries({
		value:"#col3#",
		color:"#36abee",
		tooltip:{
			template:"#col3#"
		}
	});
	myBarChart.addSeries({
		value:"#col4#",
		color:"#e6abee",
		tooltip:{
			template:"#col4#"
		}
	});
	myBarChart.parse(data,"json");
}
 function drawVelocityChart(chartcontainer,data, xlabel,ylabel,table,colmxId){
	 var grid=gridlist[table];
	 var ymax=10;
	 var value=0;
	 if(grid){
		 grid.forEachRow(function(id) {
				 value=grid.cells(id,colmxId).getValue();
				 if(value>ymax){
					 ymax=value;
				 }
			});
		
	 }
	
	 myVelocityChart =  new dhtmlXChart({
			view:"line",
			container:chartcontainer,
			value:"#col1#",
			item:{
				borderColor: "#1293f8",
				color: "#ffffff"
			},
			line:{
				color:"#1293f8",
				width:3
			},
			tooltip:{
				template:"#col1#"
			},
			offset:0,
			xAxis:{
				template:"#col0#",
				start:0,
				step:5,
				end:50,
			},
			yAxis:{
				start:0,
				step:5,
				end:ymax,
				/*template:function(value){
					return value%5?"":value
				}*/
			},
			padding:{
				left:35,
				bottom: 50
			},
			origin:0,
			legend:{
				layout:"x",
				width: 75,
				align:"center",
				valign:"bottom",
				values:[
					{text:xlabel,color:"#3399ff"},
					{text:ylabel,color:"#66cc00"}
				],
				margin: 50
			}
		});
	 
	  myVelocityChart.addSeries({
			value:"#col2#",
			item:{
				borderColor: "#66cc00",
				color: "#ffffff"
			},
			line:{
				color:"#66cc00",
				width:3
			},
			tooltip:{
				template:"#col2#"
			}
		});
	  
	  myVelocityChart.addSeries({
			value:"#col3#",
			item:{
				borderColor: "#22ee00",
				color: "#ffffff"
			},
			line:{
				color:"#22ee00",
				width:3
			},
			tooltip:{
				template:"#col3#"
			}
		});
	  myVelocityChart.parse(data,"json");
 }
// project progress
var pcols;
var pdata;
var pchartcontainer;
var pwidget_form;	
var pBarChart1;
var xlabel;
var ylabel;
function draw_projectprogress_chart(table) {
	pcols=[4,5,6];
	xlabel="Budget";
	ylabel="Amount";
	pdata=getJSONDataForProgressChart(table,pcols);
	pwidget_form=getWidgetForm(table);
	pwidget_form.attachEvent("onChange", function (name, value){
	     //your code here
		if(value=='Time'){
			pcols=[7,8,9,10];
			xlabel="Time";
			ylabel="Hour";
		}else if (value=='Task'){
			pcols=[12,13,14,15];
			xlabel="Task";
			ylabel="Count";
		}else if (value=='Budget'){
			pcols=[4,5,6];
			xlabel="Budget";
			ylabel="Amount";
		}else if (value=='Burn'){
			pcols=[16,17];
			xlabel="Av.Hourly Rate";
			ylabel="Amount";
		}
		pdata=getJSONDataForProgressChart(table,pcols);
		if(pBarChart1){
			pBarChart1.clearAll();
			pBarChart1.destructor();
		}
		drawProgressChart(pchartcontainer,pdata, xlabel,ylabel);
	});
	if(pwidget_form){
		 pchartcontainer=widget_form.getContainer(table+'_chart1_cont');
	}
	drawProgressChart(pchartcontainer,pdata, xlabel,ylabel);
	
	}

function drawProgressChart(chartcontainer,data,xlabel,ylabel){
	
	 pBarChart1 =   new dhtmlXChart({
		view:"bar",
		container:chartcontainer,
		value:"#col1#",
		label:"#col1#",
		radius:0,
		width:40,
		tooltip:{
			template:"#col1#"
		},
		xAxis:{
			template:"'#col0#",
			title:xlabel,
			lines: true
		},
		yAxis:{
			title:ylabel
		},
		padding:{
			left:40,
			right:10,
			top:50
		}
	});
	
	
	pBarChart1.parse(data,"json");	
}

function getJSONDataForProgressChart(table, cols){
	var data="";
	var grid=gridlist[table];
	if(grid &&cols &&cols.length>0){
		grid.forEachRow(function(id) {
		  
	       for(var i=0;i<cols.length;i++){
	    	   var rowdata="";
	    	   var chartcolid=0;
	    	   var colidx=cols[i];
	       	   var value=grid.cells(id,colidx).getValue();
	       	   if(!value){
	       		value=0;
	       	   }
	       	   var collabel=grid.getColLabel(colidx);
	       	   if(collabel &&collabel.length>20){
	       		   var items=collabel.split(" ");
	       		   collabel=items[0];
	       		   /*if(collabel.length<20 &&items.length>1){
	       			collabel+=" " +item[1];
	       		   }
	       		   */
	       	   }
	       	   
	       	   rowdata+="\"col"+chartcolid+"\":\""+collabel+"\"";
	       	   
	       	   //second col count
	       	   chartcolid++;
	       	   rowdata+=",\"col"+chartcolid+"\":\""+value+"\"";
	       	   
	       	 //3rd col % = count/ Test Count
	       	   chartcolid++;
	       	  
	       	  
	       	  data+="{"+rowdata+"},"
	       }
	     
			
		});
		
		if(data!=""){
			return "[\n"+data+"\n]";
		}
	}
	
}

function getUniqueValueListFromColumn(table,colidx){
	var data={};
	var grid=gridlist[table];
	
	if(grid &&colidx){
		grid.forEachRow(function(id) {
			 var value=grid.cells(id,colidx).getValue();
	         if(value && !data[value]){
	        	 data[value]=value;
	         }
		});
		
	}
	return data;
	
}

function getFilteredJSONDataForChart(table,filterVal, filterColIdx ){
	var data="";
	var grid=gridlist[table];
	var cols=getChartCols(menuid,table);
	if(grid &&cols &&cols.length>0 &&filterColIdx && filterVal){
		grid.forEachRow(function(id) {
			var rowdata="";
			var targetVal=grid.cells(id,filterColIdx).getValue();
		  if(targetVal &&targetVal==filterVal){
		       for(var i=0;i<cols.length;i++){
		    	   var colidx=cols[i];
		       	   var value=grid.cells(id,colidx).getValue();
		       	   if(value &&i==0 &&value.length>15){
		       		   var items=value.split(" ");
		       		   value=items[0];
		       		   if(value.length<15 &&items.length>1){
		       			value+=" " +items[1];
		       		   }
		       	   }
		       	   if(value &&i<cols.length-1){
		       		rowdata+="\"col"+i+"\":\""+value+"\",";
		       	   }else{
		       		rowdata+="\"col"+i+"\":\""+value+"\"";
		       	   }
		       }
		  }
		  if(rowdata!=""){
			  data+="{"+rowdata+"},"
		  }
	      
			
		});
		
		if(data!=""){
			return "[\n"+data+"\n]";
		}
	}
	
}


function draw_browser_result_chart(table){
	
	var filterColIdx=3;
	
	var grid=gridlist[table];
	var filter=getUniqueValueListFromColumn(table,filterColIdx);
	if(filter ){
		
		for(var objfilter in filter){
			var data=getFilteredJSONDataForChart(table,objfilter, filterColIdx )
			//dhtmlx.alert(data);
			
			var chartcontainer;
			var widget_form=getWidgetForm(table);
			if(widget_form){
				 chartcontainer=widget_form.getContainer(table+'_chart_cont');
			}
			
			var myBrowserLineChart =  new dhtmlXChart({
				view:"line",
				container:chartcontainer,
				value:"#col0#",
				//label:objfilter,
				item:{
					borderColor: "#1293f8",
					color: "#ffffff"
				},
				line:{
					color:"#66cc00",
					width:1
				},
				tooltip:{
					template:objfilter+" Pass (%) ="+ "#col0#"
				},
				offset:0,
				xAxis:{
					template:"#col2#",
					start:0,
					step:2,
					end:60,
				},
				yAxis:{
					start:0,
					step:10,
					end:110,
					template:function(value){
						return value%5?"":value
					}
				},
				padding:{
					left:35,
					bottom: 50
				},
				origin:0,
				legend:{
					layout:"x",
					width: 75,
					align:"center",
					valign:"bottom",
					values:[
						{text:"Pass (%)",color:"#66cc00"},
						{text:"Fail (%)",color:"#FF0000"}
					],
					margin: 10
				}
			});
			
			
			myBrowserLineChart.addSeries({
				value:"#col1#",
				item:{
					borderColor: "#99cc00",
					color: "#ffffff"
				},
				line:{
					color:"#FF0000",
					width:1
				},
				tooltip:{
					template:objfilter+" Fail (%) ="+ "#col1#" 
				}
			});
			if(data){
				myBrowserLineChart.parse(data,"json");
			}
			
			
		  }
	  }
	
}
