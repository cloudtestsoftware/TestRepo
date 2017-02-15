var servicerepo_main_context = [
        { type:"block" , name:"servicerepo_home_block", offsetLeft:"10", list:[
        { type:"container" , name:"servicerepo_home_container", inputWidth:"10", inputHeight:"10"  },
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Service Repo Search Filters",  list:[
        
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"select" , name:"servicetype", label:"Servicetype", inputWidth:140, options:[
					{ value:"CICD", text:"CICD" },
					{ value:"AWS", text:"AWS" },
					{ value:"Application", text:"Application"},
					{ value:"Custom", text:"Custom"},
					{ value:"3rdParty", text:"3rd Party"},
			
			] },
		{ type:"button" , name:"search:servicerepo", value:"Search", command:"save"  },
		
		]  },
		]  },
		
	];

var servicerepo_grid_context=
	[
	{ type:"fieldset" , name:"servicerepo_list", label:"Servicerepo List", list:[
	    
		{ type:"container" , name:"servicerepo_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
       
		
		{ type:"block" , name:"servicerepo_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"servicerepo_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"servicerepo_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"servicerepo_save_block", offsetLeft:"100", list:[
    	{ type:"button" , name:"save:servicerepo", value:"Save", width:"100",  }
    	]  },
		]  },
	]  }
	
	];

var servicerepo_toolbar=
	[
	    
				
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to servicerepo", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "servicerepo:serviceauth:handle_custom_changes", text: "Add Auth",img: "security.gif" },
				{ type: "button", id: "servicerepo:serviceparam:handle_custom_changes", text: "Add Global Parameters", img: "api.gif" },
				{ type: "button", id: "servicerepo:servicedoc:handle_custom_changes", text: "Add API Template", img: "attachment.gif" },
			]
		},
		
		{ type: "separator"},
		
		{ id: "servicerepo:servicerepo:runServiceRepoUrlTest", type: "button", img: "testrun.gif", title: "Run Job", action:""},
		
		{ id: "create:servicerepo", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:servicerepo", type: "button", img: "save.gif",  title: "Save", action:"" },
		
		{ type: "separator" },
		{ id: "scroll:serviceapi", type: "button", img: "down1.gif",  title: "Next step add service param", action:"" },
		
	]

var serviceauth_grid_context=
	[
	{ type:"fieldset" , name:"serviceauth_list", label:"Service Auth List", list:[
	    
		{ type:"container" , name:"serviceauth_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"serviceauth_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"serviceauth_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"serviceauth_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"serviceauth_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:serviceauth", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

var serviceauth_toolbar=
	[
		
		{ id: "create:serviceauth", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:serviceauth", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		{ id: "scroll:servicerepo", type: "button", img: "up1.gif", title: "Previous step servicerepo", action:""}
		
	]

var serviceparam_grid_context=
	[
	{ type:"fieldset" , name:"serviceparam_list", label:"Service Param List", list:[
	    
		{ type:"container" , name:"serviceparam_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"serviceparam_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"serviceparam_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"serviceparam_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"serviceparam_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:serviceparam", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

var serviceparam_toolbar=
	[
		
		{ id: "create:serviceparam", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:serviceparam", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		{ id: "scroll:servicerepo", type: "button", img: "up1.gif", title: "Previous step servicerepo", action:""},
		
		
	]

var servicedoc_grid_context=
	[
	{ type:"fieldset" , name:"servicedoc_list", label:"Service Document Template List", list:[
	    
		{ type:"container" , name:"servicedoc_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"servicedoc_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"servicedoc_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"servicedoc_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"container" , name:"servicedoc_fileupload_cont", inputWidth:300, inputHeight:200  },
		{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  },
		{ type:"block" , name:"servicedoc_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:servicedoc", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var servicedoc_toolbar=
	[
		
		{ id: "make:servicedoc:createAttachment", type: "button", img: "upload.gif",  title: "Upload file", action:"" },
		{ id: "show:servicedoc:getDownloadFile", type: "button", img: "download.gif",  title: "Download servicedoc", action:"" },
		{ id: "delete:servicedoc:deleteFile", type: "button", img: "delete.gif",  title: "Delete servicedoc", action:"" },
		{ id: "servicerepo:servicedoc:removeMe", type: "button", img: "close.gif", title: "Close", action:""},
		{ type: "separator" },
		
		{ id: "home:servicerepo", type: "button", img: "home.gif", title: "Back to home", action:""},
		
		
	];

var serviceapi_grid_context=
	[
	{ type:"fieldset" , name:"serviceapi_list", label:"Service API List", list:[
	    
		{ type:"container" , name:"serviceapi_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
       
		
		{ type:"block" , name:"serviceapi_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"serviceapi_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"serviceapi_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"serviceapi_save_block", offsetLeft:"100", list:[
    	{ type:"button" , name:"save:serviceapi", value:"Save", width:"100",  }
    	]  },
		]  },
	]  }
	
	];

var serviceapi_toolbar=
	[
	    
				
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to serviceapi", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "serviceapi:apitemplate:handle_custom_changes", text: "Add API Template", img: "attachment.gif" },
			]
		},
		
		{ type: "separator"},
		{ id: "servicerepo:servicerepo:runServiceApiUrlTest", type: "button", img: "testrun.gif", title: "Run Job", action:""},
		
		{ id: "create:serviceapi", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:serviceapi", type: "button", img: "save.gif",  title: "Save", action:"" },
		
		{ type: "separator" },
		{ id: "scroll:servicerepo", type: "button", img: "up1.gif",  title: "Back to service repo", action:"" },
		{ id: "scroll:apiparam", type: "button", img: "down1.gif",  title: "Add Api parameters", action:"" },
		
	]

var apitemplate_grid_context=
	[
	{ type:"fieldset" , name:"apitemplate_list", label:"Service Api Template List", list:[
	    
		{ type:"container" , name:"apitemplate_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"apitemplate_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"apitemplate_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"apitemplate_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"container" , name:"apitemplate_fileupload_cont", inputWidth:300, inputHeight:200  },
		{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  },
		{ type:"block" , name:"apitemplate_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:apitemplate", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var apitemplate_toolbar=
	[
		
		{ id: "make:apitemplate:createAttachment", type: "button", img: "upload.gif",  title: "Upload file", action:"" },
		{ id: "show:apitemplate:getDownloadFile", type: "button", img: "download.gif",  title: "Download apitemplate", action:"" },
		{ id: "delete:apitemplate:deleteFile", type: "button", img: "delete.gif",  title: "Delete apitemplate", action:"" },
		{ id: "serviceapi:apitemplate:removeMe", type: "button", img: "close.gif", title: "Close", action:""},
		{ type: "separator" },
		
		{ id: "home:servicerepo", type: "button", img: "home.gif", title: "Back to home", action:""},
		{ id: "serviceapi:apitemplate:removeMe", type: "button", img: "up1.gif", title: "Back to service api", action:""}
		
	];

var apiparam_grid_context=
	[
	{ type:"fieldset" , name:"apiparam_list", label:"Api Param List", list:[
	    
		{ type:"container" , name:"apiparam_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"apiparam_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"apiparam_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"apiparam_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"apiparam_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:apiparam", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

var apiparam_toolbar=
	[
		
		{ id: "create:apiparam", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:apiparam", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		{ id: "home:servicerepo", type: "button", img: "home.gif", title: "Back to home", action:""},
		{ id: "scroll:serviceapi", type: "button", img: "up1.gif", title: "Previous step serviceapi", action:""}
		
	]


//grid=caller object's grid, 
//table= target object
//relation= table2caller object relation name
// id = caller object's rowid
function getServiceLocalData(grid, id, relation){
	var localgrid;
	var paramgrid_container={ type:"block" , name:table+"_fieldset_"+id, list:[
	                    { type:"container" , name:relation+"_container_"+id, inputWidth:0, inputHeight:0  }
	                    ]  };
	if(relation && relation.split("2").length>1){
		var caller=relation.split("2")[1];
		var table=relation.split("2")[0];
		var form=widgetforms[caller];
		var isready=false;
		if(form){
			form.addItem(null, paramgrid_container, itemcount++, "insertAfter");
			if(!paramgrid[relation]) paramgrid[relation]={};
			paramgrid[relation][id]=null;
			var objid=getColumnValueByGridRowId(grid,"objid",id);
				//grid.cells(id,1).getValue();
		    localgrid= new dhtmlXGridObject(form.getContainer(relation+"_container_"+id));
			
			localgrid.setUserData("",relation,objid);
			var gurl=www_url+"/rest/"+table+"/filter?token="+token +"&filters="+relation+"='"+objid+"'";
			//var data=executeGet(gurl);
			//localgrid.load(data,"xml");
			localgrid.load(gurl);
			//setTimeout(dhtmlx.message("loading data!"), 5000); 
			
			localgrid.attachEvent("onXLE", function(localgrid,count){
				hideGrid(localgrid);
		  	}); 
			/*
			while (!isready) {
				setInterval(dhtmlx.message("loading data!"), 1000); 
			}
			*/
			paramgrid[relation][id]=localgrid;
		}
	}
    
	return localgrid;
	
}

function sleep(milliseconds,isready) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds ||isready){
            break;
        }
    }
}
function initGlobalData(){
	var grid=gridlist["servicerepo"];
	var rowid;
	contenttype=null;
	if(grid){
		contenttype={};
		var globalparamrelation="serviceparam2servicerepo";
	    rowid=grid.getSelectedRowId();
	    getServiceLocalData(grid, rowid, globalparamrelation);
	    var globalauthrelation="serviceauth2servicerepo";
	    getServiceLocalData(grid, rowid, globalauthrelation);
	}
}
function setGlobalHttpHeaderWithServiceParam(httpro){
	var grid=gridlist["servicerepo"];
	var rowid;
	var globalparamgrid;
	if(grid){
		var globalparamrelation="serviceparam2servicerepo";
	    rowid=grid.getSelectedRowId();
	    if(!rowid) rowid=1;
	    if(!paramgrid[globalparamrelation]) paramgrid[globalparamrelation]={};
	    globalparamgrid=paramgrid[globalparamrelation][rowid];
		if(!globalparamgrid){
			globalparamgrid=getServiceLocalData(grid, rowid, globalparamrelation);
		 }
		if(globalparamgrid){
			globalparamgrid.forEachRow(function(id) {
				
				
				var header=getColumnValueByGridRowId(globalparamgrid,"paramtype",id);
				if(header && header=="HEADER"){
					var keyname=getColumnValueByGridRowId(globalparamgrid,"name",id);
					var keyvalue=getColumnValueByGridRowId(globalparamgrid,"keyvalue",id);
					
					if(keyname && keyvalue){
						httpro.setRequestHeader(keyname, keyvalue );
					}
					if(keyname=="Content-Type"){
						contenttype["serviceparam"]=keyvalue;
					}
					
				}
				
				
			});
		}
	}
}

function replaceDataWithGlobalVariables(data){
	var grid=gridlist["servicerepo"];
	var rowid;
	var globalparamgrid;
	if(grid){
		var globalparamrelation="serviceparam2servicerepo";
	    rowid=grid.getSelectedRowId();
	    if(!rowid) rowid=1;
	    if(!paramgrid[globalparamrelation]) paramgrid[globalparamrelation]={};
	    globalparamgrid=paramgrid[globalparamrelation][rowid];
		if(!globalparamgrid){
			globalparamgrid=getServiceLocalData(grid, rowid, globalparamrelation);
		 }
		if(globalparamgrid){
			globalparamgrid.forEachRow(function(id) {
				
				
				var variable=getColumnValueByGridRowId(globalparamgrid,"paramtype",id);
				//if(variable && variable=="VARIABLE"){
					var keyname=getColumnValueByGridRowId(globalparamgrid,"name",id);
					var keyvalue=getColumnValueByGridRowId(globalparamgrid,"keyvalue",id);
					try{
						if(keyname && keyvalue &&data){
							data=data.split("@"+keyname).join(keyvalue);
						}
					}catch(err){}
					
					
					if(keyname=="Content-Type"){
						contenttype["serviceparam"]=keyvalue;
					}
					
				//}
				
				
			});
		}
		
		
	}
	return data;
	
}


function replaceHttpAuthHeader(data){
	var grid=gridlist["servicerepo"];
	var rowid;
	var globalauthgrid;
	if(grid){
		var globalauthrelation="serviceauth2servicerepo";
	    rowid=grid.getSelectedRowId();
	    if(!rowid) rowid=1;
	    if(!paramgrid[globalauthrelation]) paramgrid[globalauthrelation]={};
		globalauthgrid=paramgrid[globalauthrelation][rowid];
		if(!globalauthgrid){
			globalauthgrid=getServiceLocalData(grid, rowid, globalauthrelation);
		 }
		if(globalauthgrid){
			globalauthgrid.forEachRow(function(id) {
				
				//var isactive=getColumnValueByGridRowId(globalauthgrid,"isactive",id);
				//if(isactive && isactive=="true"){
				
					var authtype=getGridColumnValueForSelectedRow(grid,"authtype");
					var authvalue=getColumnValueByGridRowId(globalauthgrid,"keyvalue",id);
					var keyname=getColumnValueByGridRowId(globalauthgrid,"name",id);
					try{
						
						if(keyname && authvalue &&data){
							data=data.split("@"+keyname).join(authvalue);
						}
					}catch(err){}
					
					
					
				//}
				
				
			});
			
		}
		
	}
	return data;
	
}
// will be called only for serviceapi
function replaceDataWithApiParamVariables(data){
	var grid=gridlist["serviceapi"];
	var rowid;
	var apiparamgrid;
	if(grid){
		var apiparamrelation="apiparam2serviceapi";
	    rowid=grid.getSelectedRowId();
	    if(!rowid) rowid=1;
	    if(!paramgrid[apiparamrelation]) paramgrid[apiparamrelation]={};
	    apiparamgrid=paramgrid[apiparamrelation][rowid];
		if(!apiparamgrid){
			apiparamgrid=getServiceLocalData(grid, rowid, apiparamrelation);
		 }
		if(apiparamgrid){
			apiparamgrid.forEachRow(function(id) {
				
				
				var variable=getColumnValueByGridRowId(apiparamgrid,"paramtype",id);
				//if(variable && variable=="VARIABLE"){
					var keyname=getColumnValueByGridRowId(apiparamgrid,"name",id);
					var keyvalue=getColumnValueByGridRowId(apiparamgrid,"keyvalue",id);
					
					try{
						if(keyname && keyvalue &&data){
							data=data.split("@"+keyname).join(keyvalue);
						}
					}catch(err){}
					
					if(keyname=="Content-Type"){
						contenttype["serviceapi"]=keyvalue;
					}
					
				//}
				
				
			});
		}
		
		
	}
	return data;
	
}

// will be called for serviceapi
function setHttpHeaderWithApiParam(httpro){
	var grid=gridlist["serviceapi"];
	var rowid;
	var apiparamgrid;
	if(grid){
		var apiparamrelation="apiparam2serviceapi";
	    rowid=grid.getSelectedRowId();
	    if(!rowid) rowid=1;
	    if(!paramgrid[apiparamrelation]) paramgrid[apiparamrelation]={};
	    apiparamgrid=paramgrid[apiparamrelation][rowid];
		if(!apiparamgrid){
			apiparamgrid=getServiceLocalData(grid, rowid, apiparamrelation);
		 }
		if(apiparamgrid){
			apiparamgrid.forEachRow(function(id) {
				
				
				var header=getColumnValueByGridRowId(apiparamgrid,"paramtype",id);
				if(header && header=="HEADER"){
					var keyname=getColumnValueByGridRowId(apiparamgrid,"name",id);
					var keyvalue=getColumnValueByGridRowId(apiparamgrid,"keyvalue",id);
					
					if(keyname && keyvalue){
						httpro.setRequestHeader(keyname, keyvalue );
					}
					
				}
				
				
			});
		}
	}
}

function setHttpAuthHeader(httpro){
	var grid=gridlist["servicerepo"];
	var rowid;
	var globalauthgrid;
	if(grid){
		var globalauthrelation="serviceauth2servicerepo";
	    rowid=grid.getSelectedRowId();
	    if(!rowid) rowid=1;
	    if(!paramgrid[globalauthrelation]) paramgrid[globalauthrelation]={};
		globalauthgrid=paramgrid[globalauthrelation][rowid];
		if(!globalauthgrid){
			globalauthgrid=getServiceLocalData(grid, rowid, globalauthrelation);
		 }
		if(globalauthgrid){
			globalauthgrid.forEachRow(function(id) {
				
				
				//var isactive=getColumnValueByGridRowId(globalauthgrid,"isactive",id);
				//if(isactive && isactive=="true"){
					var authtype=getGridColumnValueForSelectedRow(grid,"authtype");
					var authvalue=getColumnValueByGridRowId(globalauthgrid,"keyvalue",id);
					if(!authtype) authtype="Basic";
					if(authvalue){
						httpro.setRequestHeader('Authorization', authvalue );
						httpro.setRequestHeader("Access-Control-Allow-Origin", "*" );
						httpro.setRequestHeader("Access-Control-Allow-Headers", "Origin, X-tested-With, Content-Type, Accept");
					   
						
						//httpro.setRequestHeader('Authorization', 'Basic '+authvalue );
						return;
					}
					
				//}
				
				
			});
		}
	}
	
}

function runServiceRepoUrlTest2(name){
	var grid=gridlist["servicerepo"];
	
	if(grid){
		 var rowid=grid.getSelectedRowId();
		 if(!rowid) rowid=1;
		 var methodtype=getColumnValueByGridRowId(grid,"methodtype",rowid);
		// var authtype=getColumnValueByGridRowId(grid,"authtype",rowid);
		 var servicetype=getColumnValueByGridRowId(grid,"servicetype",rowid);
		 var url=getColumnValueByGridRowId(grid,"endpoint",rowid);
		  xml=getColumnValueByGridRowId(grid,"postbody",rowid);
		 if(servicetype=='CICD'){
			 url=www_url+"/rest/jenkin/cicdpost?token="+token ;
		 }
		 if(methodtype && methodtype=='POST' &&xml){
			 
			 	
			 	url=replaceDataWithGlobalVariables(url);
			 
			 	httpro = new XMLHttpRequest();
			 	httpro.open("POST", url, true);
			 	if(servicetype=='CICD'){
			 	httpro.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			 	}else{
			 		setHttpAuthHeader(httpro)
					setGlobalHttpHeaderWithServiceParam(httpro);
			 	}
				
				httpro.onreadystatechange = function () { 
				    if (httpro.readyState == 4 && httpro.status == 200) {
				        var json = JSON.parse(httpro.responseText);
				        dhtmlx.alert(json);
				        //console.log(json.email + ", " + json.password)
				    }
				}
				
				//var data = JSON.stringify({"email":"hey@mail.com","password":"101010"});
				if(xml){
					xml=replaceDataWithGlobalVariables(xml);
					xml=xml.split("<br>").join("\n");
					/*
					xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+
						"<servicerepo>\n"+
						"<record id=\"0\">\n"+
						"<command isRequired=\"true\" type=\"VARCHAR\">"+body+"</command>\n"+
						"</record>\n"+
						"</servicerepo>\n";
						*/


				}
				
				if(xml){
					
					var formData = new FormData();
					formData.append("body",xml);
					httpro.send(formData);
					//httpro.send(body);
					//postData(body,url,null);
					
				}else{
					setInterval(dhtmlx.message("Waiting to post data to TEP! "),1000);
				}
				 
			 
		 }else if(methodtype && methodtype=='GET'){
			 
			    httpro = new XMLHttpRequest();
			 	url=replaceDataWithGlobalVariables(url);
			 	httpro.open("GET", url, true);
				setHttpAuthHeader(httpro)
				setGlobalHttpHeaderWithServiceParam(httpro);
				httpro.onreadystatechange = function () { 
				    if (httpro.readyState == 4 && httpro.status == 200) {
				        var json = JSON.parse(httpro.responseText);
				        dhtmlx.alert(json);
				        //console.log(json.email + ", " + json.password)
				    }
				}
				
				httpro.send();
			 
		 }
	}
	
}


function saveCICDChanges(table,posturl){
	
	var parent_data= collect_form_data(table,null);
	if(parent_data){
		posturl=replaceDataWithGlobalVariables(posturl);
		//replace auth
		parent_data=replaceHttpAuthHeader(parent_data);
		//replace param
		parent_data=replaceDataWithGlobalVariables(parent_data);
		postData(parent_data, posturl,table);
	}else{
		dhtmlx.message("No Data found in the object ="+table);
	}
	
	
}

function runServiceRepoUrlTest(name){
	var grid=gridlist["servicerepo"];
	
	if(grid){
		 var rowid=grid.getSelectedRowId();
		 if(!rowid) rowid=1;
		 var methodtype=getColumnValueByGridRowId(grid,"methodtype",rowid);
		// var authtype=getColumnValueByGridRowId(grid,"authtype",rowid);
		 var servicetype=getColumnValueByGridRowId(grid,"servicetype",rowid);
		 var url=getColumnValueByGridRowId(grid,"endpoint",rowid);
		 var body=getColumnValueByGridRowId(grid,"postbody",rowid);
		 if(servicetype=='CICD'){
			 url=www_url+"/rest/cicd/cicddata?token="+token ;
		 }
		 if(methodtype && methodtype=='POST' &&body && (body.indexOf("curl")==0 ||body.indexOf("--header")>0 )){
			 
			 	saveCICDChanges("servicerepo",url);
			 	
		 }else if(methodtype && methodtype=='POST'){
			 
			 	httpro = new XMLHttpRequest();
			 	httpro.open("POST", url, true);
			 	
			 	setHttpAuthHeader(httpro)
				setGlobalHttpHeaderWithServiceParam(httpro);
			 	
				
				httpro.onreadystatechange = function () { 
				    if (httpro.readyState == 4 && httpro.status == 200) {
				        var json = JSON.parse(httpro.responseText);
				        dhtmlx.alert(json);
				        //console.log(json.email + ", " + json.password)
				    }
				}
				if(body){
					body=replaceDataWithGlobalVariables(body);
					body=body.split("<br>").join("");
				}
				
				if(body){
					if(contenttype &&contenttype["serviceparam"]){
							if(contenttype &&(contenttype["serviceparam"].indexOf("form-urlencoded")>0 
									||contenttype["serviceparam"].indexOf("form-")>0)){
								httpro.setRequestHeader("Content-Type",contenttype["serviceparam"]);
								var formData = new FormData();
								formData.append("body",body);
								httpro.send(formData);
							}else if(contenttype &&contenttype["serviceparam"].indexOf("json")>0 ){
								httpro.send(body);
							}
					}else{
						httpro.send(body);
					}
					
				}
				 
			 
		 }else if(methodtype && methodtype=='GET'){
			 
			    httpro = new XMLHttpRequest();
			 	url=replaceDataWithGlobalVariables(url);
			 	httpro.open("GET", url, true);
				setHttpAuthHeader(httpro)
				setGlobalHttpHeaderWithServiceParam(httpro);
				httpro.onreadystatechange = function () { 
				    if (httpro.readyState == 4 && httpro.status == 200) {
				        var json = JSON.parse(httpro.responseText);
				        dhtmlx.alert(json);
				        //console.log(json.email + ", " + json.password)
				    }
				}
				
				httpro.send();
			 
		 }
	}
	
}


function runServiceApiUrlTest(name){
	var repogrid=gridlist["servicerepo"];
	var grid=gridlist["serviceapi"];
	var url;
	
	if(repogrid){
		 var rowid=grid.getSelectedRowId();
		 if(!rowid) rowid=1;
		 url=getColumnValueByGridRowId(repogrid,"endpoint",rowid);;
	}
	if(grid){
		 var rowid=grid.getSelectedRowId();
		 if(!rowid) rowid=1;
		 var methodtype=getColumnValueByGridRowId(grid,"methodtype",rowid);
		// var authtype=getColumnValueByGridRowId(grid,"authtype",rowid);
		 //var servicetype=getColumnValueByGridRowId(grid,"servicetype",rowid);
		 var uri=getColumnValueByGridRowId(grid,"uri",rowid);
		 var body=getColumnValueByGridRowId(grid,"postbody",rowid);
		 if(uri &&(uri.indexOf("http:")||uri.indexOf("https:"))){
			 url=uri;
		 }else{
			 url=url+uri;
		 }
		 if(methodtype && methodtype=='POST' &&body){
			 
			 	httpro = new XMLHttpRequest();
			 	url=replaceDataWithApiParamVariables(url);
			 	url=replaceDataWithGlobalVariables(url);
			 	httpro.open("POST", url, true);
				setHttpAuthHeader(httpro)
				setGlobalHttpHeaderWithServiceParam(httpro);
				setHttpHeaderWithApiParam(httpro);
				httpro.onreadystatechange = function () { 
				    if (httpro.readyState == 4 && httpro.status == 200) {
				        var json = JSON.parse(httpro.responseText);
				        dhtmlx.alert(json);
				        //console.log(json.email + ", " + json.password)
				    }
				}
				//var data = JSON.stringify({"email":"hey@mail.com","password":"101010"});
				if(body){
					body=replaceDataWithApiParamVariables(body);
					body=replaceDataWithGlobalVariables(body);
					body=body.split("<br>").join("\n");
				}
				
				httpro.send(body);
			 
		 }else if(methodtype && methodtype=='GET'){
			 
			    httpro = new XMLHttpRequest();
			    url=replaceDataWithApiParamVariables(url);
			 	url=replaceDataWithGlobalVariables(url);
			 	httpro.open("GET", url, true);
				setHttpAuthHeader(httpro)
				setGlobalHttpHeaderWithServiceParam(httpro);
				setHttpHeaderWithApiParam(httpro);
				httpro.onreadystatechange = function () { 
				    if (httpro.readyState == 4 && httpro.status == 200) {
				        var json = JSON.parse(httpro.responseText);
				        dhtmlx.alert(json);
				        //console.log(json.email + ", " + json.password)
				    }
				}
				
				httpro.send();
			 
		 }
	}
	
}


