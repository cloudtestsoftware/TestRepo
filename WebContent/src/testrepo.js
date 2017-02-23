
var debug=false;		
var skin;
var itemcount=1;
var main_layout;
var window_layout;
var main_cell;
var testrepo_toolbar;
var main_form;
var advance_form;
var task_form;

var gridlist = {};
var widgetlist = {};
var widgetforms = {};
var dataforms={};

//toolbar tab variables
var toolbarmainforms={};
var toolbardataforms={};
var toolbargridlist = {};
var toolbarwidgetlist = {};
var toolbarwidgetforms = {};
var toolbarcurrentgrid = {};
var toolbargridformdata={};
var toolbardatafromstruct={}
var toolbarchildcaller={};


var gridformdata={};
var datafromstruct={}
var childcaller={};

var widget_layout;
var widget_cell;
var hidden_form;
var widget_form;
var widget_toolbar;
var attachment_form;

//tabbar
var search_tabbar;
var regular_tab;
var advance_tab;
var task_tab;
var menuid;
var menuselectid;
var button_filter;
var customtable;

//var button_width;
//grids

var current_grid;
var data_grid;
//var data_form;
		
// data
var parent_rowid;
var current_parent_id;
var updated_objid;
var current_table;

//board
var boardlayout={};
var boardcell={};
var boarddataview={};
var boardgrid={};

//serviceapi

var paramgrid= {};
var contenttype={};
var htmllayouts={};
var htmlcells={};
var validator_template;
var validator_xml;

/*
var servicerepodata={};
var serviceauthdata{};
var serviceparamdata{};
var serviceapidata={};
var apiparamdata={};
*/

var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0];
var  layoutWidth,  layoutHeight;
//var main_win ;
//var layout_win ;

var  inputGridWidth,  inputGridHeight;

		var iconsPath = {
			dhx_skyblue: "imgs",
			dhx_web: "icons_web",
			dhx_terrace: "icons_terrace"
		};
	
		var imagePath = {
			dhx_skyblue: "skyblue",
			dhx_web: "web",
			dhx_terrace: "terrace"
		};
		
		function doOnLoad(layout_skin) {
		
			initWorkspace();
			
			skin = "dhx_skyblue";
			if(layout_skin){
				skin=layout_skin;
			}
			
			dhtmlx.image_path="./src/codebase/skins/"+imagePath[skin]+"/imgs/";
			dhtmlx.skin=skin;
			if(!window_layout){
				window_layout = new dhtmlXLayoutObject({
					parent: "layoutObj",
					pattern: "1C",
					skin: skin,
					cells: [{id: "a", header: false}]
				});
			}
			
			
			if (main_layout != null) {
				main_layout.unload();
				testrepo_toolbar = myGrid = main_layout = null;
			}
		/*	
			main_win = new dhtmlXWindows();
			layout_win = main_win.createWindow("w1",0, 30, layoutWidth, layoutHeight);
			layout_win.setText("Welcome");
            main_layout=layout_win.attachLayout({
				parent: "layoutObjChild",
				pattern: "1C",
				skin: skin,
				cells: [{id: "a", header: false}]
			});
		*/
			
		
			
			main_layout = new dhtmlXLayoutObject({
				parent: "layoutObj",
				pattern: "1C",
				skin: skin,
				cells: [{id: "a", header: false}]
			});
		
			
			main_layout.setAutoSize("a","a");
			main_layout.setSizes(true);
			 if (window.attachEvent)
			        window.attachEvent("onresize",resizeLayout);
			    else
			        window.addEventListener("resize",resizeLayout, true);

			    var t;
			    function resizeLayout(){
			        window.clearTimeout(t);
			        t = window.setTimeout(function(){
			        	try{
			        		main_layout.setSizes(true);
			        	}catch(err){}
			        },200);
			    }
			
			//
			testrepo_toolbar = main_layout.attachToolbar({
				//icons_path: "./src/codebase/imgs/icons/"+iconsPath[skin]+"/",
				icons_path: "./src/codebase/imgs/icons/imgs/24/",
				skin: skin,
				xml: "./src/codebase/data/testrepo_toolbar.xml"
			});
			
			main_cell = main_layout.cells('a');
			main_cell.setText('Test Repo');
			main_cell.setWidth(layoutWidth);
			main_cell.setHeight(layoutHeight);
			//main_cell.setHeight(2000);
			main_cell.attachURL('./src/welcome.jsp?firstname='+firstname, true);
		
			testrepo_toolbar.attachEvent("onClick", function(id){
				

				try{
					var oldmenuselectid=menuselectid;
					menuselectid=null;
					if(id.indexOf(":")>=0){
						menuselectid=id.split(":")[0];
						id=id.split(":")[1];
						testrepo_toolbar.setItemImage(menuselectid, "green.gif");
						testrepo_toolbar.setItemImage(menuid, menuid+".gif");
					}else{
						testrepo_toolbar.setItemImage(id, "green.gif");
						testrepo_toolbar.setItemImage(menuid, menuid+".gif");
					}
					
					if(menuid &&menuid!=id &&menuselectid==null){
						testrepo_toolbar.setItemImage(menuid, menuid+".gif");
					}else if(oldmenuselectid &&menuselectid!=null && oldmenuselectid!=menuselectid){
						testrepo_toolbar.setItemImage(oldmenuselectid, oldmenuselectid+".gif");
					}
					//layout_win.setText(testrepo_toolbar.getItemText(id));
					
				}catch(err){
					
					if(oldmenuselectid){
						testrepo_toolbar.setItemImage(oldmenuselectid, oldmenuselectid+".gif");
						//layout_win.setText(testrepo_toolbar.getItemText(oldmenuselectid,oldmenuselectid+":"+id));
					}
					
				}
				
				testrepo_toolbar_callback(id);
			});
			
			testrepo_toolbar.attachEvent("onXLE", function(){
				doToolbar();
			});
			 
		}
		


function destroyTabWorkspace(id){
	 widget_form=null;
	 current_grid=null;
	 gridlist = null;
	 widgetlist=null;
	 widgetforms = null;
	 dataforms=null;
	 gridformdata=null;
	 datafromstruct=null;
	 tabdataforms=null;
	 childcaller=null;
	 
	 //initialize
	 gridlist = {};
	 widgetlist={};
	 widgetforms = {};
	 dataforms={};
	 gridformdata={};
	 datafromstruct={};
	 tabdataforms={};
	 childcaller={};
	 
	 if(toolbarmainforms[id]){
		 
		 toolbarmainforms[id]=null;
	     toolbardataforms[id]=null;
	     toolbargridlist[id] = null;
	     toolbarwidgetlist[id] = null;
	     toolbarwidgetforms[id] = null;
	     toolbarcurrentgrid[id]=null;
	     toolbardatafromstruct[id]=null;
	     toolbarchildcaller[id]=null;
	     toolbargridformdata[id]=null;
	     
	    
	     
	     toolbarmainforms[id]={};
	     toolbardataforms[id]={};
	     toolbargridlist[id] = {};
	     toolbarwidgetlist[id] = {};
	     toolbarwidgetforms[id] = {};
	     toolbarcurrentgrid[id]={};
	     toolbardatafromstruct[id]={};
	     toolbarchildcaller[id]={};
	     toolbargridformdata[id]={};
	 }
	
}
function initWorkspace(){
	 
	 widget_form=null;
	 current_grid=null;
	 gridlist = null;
	 widgetlist=null;
	 widgetforms = null;
	 dataforms=null;
	 gridformdata=null;
	 datafromstruct=null;
	 tabdataforms=null;
	 childcaller=null;
	 
	 //initialize
	 gridlist = {};
	 widgetlist={};
	 widgetforms = {};
	 dataforms={};
	 gridformdata={};
	 datafromstruct={};
	 tabdataforms={};
	 childcaller={};
	 
	 //initialize toolbar menu
	 if(!toolbarmainforms[menuid]){
		 toolbarmainforms[menuid]={};
	     toolbardataforms[menuid]={};
	     toolbargridlist[menuid] = {};
	     toolbarwidgetlist[menuid] = {};
	     toolbarwidgetforms[menuid] = {};
	     toolbarcurrentgrid[menuid]={};
	     toolbardatafromstruct[menuid]={};
	     toolbarchildcaller[menuid]={};
	     toolbargridformdata[menuid]={};
	 }
	
	 
	 layoutWidth=w.innerWidth||e.clientWidth||g.clientWidth;
	 layoutHeight=w.innerHeight||e.clientHeight||g.clientHeight;
	 if(!layoutWidth){
		 layoutWidth=2000;
	 }
	 if(!layoutHeight){
		 layoutHeight=1300;
	 }
	 
	
	 
}

function initTabClick(caller){
	
	     menuid=caller;
	     
		 //initialize worspace
		 initWorkspace();
		 
		 if(toolbarwidgetforms[menuid]){
			 main_form=toolbarmainforms[menuid];
			 gridlist=toolbargridlist[menuid];
			 widgetlist=toolbarwidgetlist[menuid];
			 widgetforms=toolbarwidgetforms[menuid];
			 dataforms=toolbardataforms[menuid];
			 current_grid=toolbarcurrentgrid[menuid];
			 childcaller=toolbarchildcaller[menuid];
			 gridformdata=toolbargridformdata[menuid];
			 datafromstruct=toolbardatafromstruct[menuid];
			
		 }
	
     
}

function destroyTabWorkspaceForSkin(){
	 search_tabbar=null;
	 widget_form=null;
	 current_grid=null;
	 gridlist = null;
	 widgetlist=null;
	 widgetforms = null;
	 dataforms=null;
	 gridformdata=null;
	 datafromstruct=null;
	 tabdataforms=null;
	 childcaller=null;
	 advance_form=null;
	 task_form=null;
	 
	 if(toolbarmainforms[menuid]){
		 
		 toolbarmainforms=null;
	     toolbardataforms=null;
	     toolbargridlist = null;
	     toolbarwidgetlist = null;
	     toolbarwidgetforms = null;
	     toolbarcurrentgrid=null;
	     toolbardatafromstruct=null;
	     toolbarchildcaller=null;
	     toolbargridformdata=null;
	     
	     toolbarmainforms={};
	     toolbardataforms={};
	     toolbargridlist = {};
	     toolbarwidgetlist = {};
	     toolbarwidgetforms = {};
	     toolbarcurrentgrid={};
	     toolbardatafromstruct={};
	     toolbarchildcaller={};
	     toolbargridformdata={};
	 }
	
}

function removeToolbarObjectMemory(menuid, table){
	
	
	 //initialize
	 gridlist[table] = null;
	 widgetlist[table]=null;
	 widgetforms[table] = null;
	 dataforms[table]=null;
	 gridformdata[table]=null;
	 datafromstruct[table]=null;
	 //tabdataforms[table]=null;
	 childcaller[table]=null;
	 
	 //initialize toolbar menu
	 if(!toolbarmainforms[menuid]){
		 toolbarmainforms[table]=null;
	     toolbardataforms[menuid][table]=null;
	     toolbargridlist[menuid][table]=null;
	     toolbarwidgetlist[menuid][table]=null;
	     toolbarwidgetforms[menuid][table]=null;
	     toolbarcurrentgrid[menuid][table]=null;
	     toolbardatafromstruct[menuid][table]=null;
	     toolbarchildcaller[menuid][table]=null;
	     toolbargridformdata[menuid][table]=null;
	 }
	 
}
function reInitializeBoardObjects(table){
	 gridlist[table] = toolbargridlist[menuid][table];
	 widgetlist[table]=toolbarwidgetlist[menuid][table];
	 widgetforms[table] = toolbarwidgetforms[menuid][table];
	 dataforms[table]=toolbardataforms[menuid][table];
	 gridformdata[table]=toolbargridformdata[menuid][table];
	 datafromstruct[table]=toolbardatafromstruct[menuid][table];
	 tabdataforms[table]=toolbardataforms[menuid][table];
	 childcaller[table]=toolbarchildcaller[menuid][table];
}
function call_testrepo_toolbar_skin(skin){
	destroyTabWorkspaceForSkin();
	doOnLoad(skin);
}

function testrepo_toolbar_callback(id){

	 var tooltext='';
	 var caller=id;
	 //toolbar button image
	
	 try{
		 if(toolbarmainforms[id]  && toolbarmainforms[id].getForm()) {
			    var last_id=search_tabbar.getActiveTab();
			    search_tabbar.tabs(last_id).disable();
		    	search_tabbar.tabs(id).enable();
		    	search_tabbar.tabs(id).setActive();
			 
			 return;
		 }
	 }catch(err){
		 
	 }
	 
	 
	
	 if( menuid !=id){
		 menuid=id;
		 initWorkspace();
		 try{
			 if(toolbarmainforms[id]){
			    	 main_form=toolbarmainforms[id];
			    	 gridlist =toolbargridlist[id];
			    	 widgetlist=toolbarwidgetlist[id];
			    	 widgetforms =toolbarwidgetforms[id];
			    	 dataforms=toolbardataforms[id];
			    	 current_grid=toolbarcurrentgrid[id];
			    	 childcaller=toolbarchildcaller[id];
					 gridformdata=toolbargridformdata[id];
					 datafromstruct=toolbardatafromstruct[id];
			 }
	    	
      	 }catch(err){
      	 	
      	 }
	 }
	 
	
	 
	 if(advance_form){
		 try{
			 advance_form.unload();
			 search_tabbar.removeTab("advance");
			 advance_form=null;
      	 }catch(err){
      		advance_form=null;
      	 }
	 }
	 
	 if(task_form){
		 try{
			 task_form.unload();
			 search_tabbar.removeTab("task");
			 task_form=null;
      	 }catch(err){
      		task_form=null;
      	 }
	 }
	 
    if(id.indexOf("dhx_")>=0){
     
    	call_testrepo_toolbar_skin(id);
    	return false;
       
     }
    
    /*else {
    	  if(id.indexOf("settings:")>=0){
    		  var tmp_id=id.split(":")[1];
    		  id=tmp_id;
    		  tooltext = testrepo_toolbar.getListOptionText("settings", id);
    	  }else{
    		  tooltext = testrepo_toolbar.getItemText(id);
    	  }
     
     }
     */
   //add regular tabbar
    if(!search_tabbar){
    	search_tabbar = main_cell.attachTabbar();
    }
    
	search_tabbar.addTab(caller,caller);
	search_tabbar.enableTabCloseButton(true);
	regular_tab = search_tabbar.cells(caller);
	
	if(menuid=='projectboard'){
		search_tabbar.addTab('advance','Sprint Board');
		advance_tab = search_tabbar.cells('advance');
		search_tabbar.addTab('task','Sprint Tasks');
		task_tab = search_tabbar.cells('task');
	}
    //add regular search
    //addRegularMainSearchForm(caller);
    //if(menuselectid=="testuser" &&caller.indexOf("my")>=0 ){
    if((menuselectid=="crm" && caller.indexOf("my")>=0) ||menuselectid=="testuser" ||menuselectid=="artitelly"){
    	 addRegularMainSearchForm(caller);
    	action_button_callback("search:"+caller,null);
    }else {
    	 addRegularMainSearchForm(caller);
    }
    search_tabbar.attachEvent("onTabClose", function(id){
    	
    	destroyTabWorkspace(id);
    	//search_tabbar.goToPrevTab();
    	//search_tabbar.setTabInActive();
    	
        return true;
    });
    
    search_tabbar.attachEvent("onSelect", function(id, lastId){
    	
    	if(toolbarmainforms[id]){
	    	 main_form=toolbarmainforms[id];
	    	 gridlist =toolbargridlist[id];
	    	 widgetlist=toolbarwidgetlist[id];
	    	 widgetforms =toolbarwidgetforms[id];
	    	 dataforms=toolbardataforms[id];
	    	 current_grid=toolbarcurrentgrid[id];
	    	 childcaller=toolbarchildcaller[id];
			 gridformdata=toolbargridformdata[id];
			 datafromstruct=toolbardatafromstruct[id];
	 }
        // your code here
        return true;
    });
    search_tabbar.attachEvent('onTabClick', function(id, last_id){
    	if(last_id){
    		if(id!='advance' && id!='task'){
    			initTabClick(id);
    		}else{
    			initTabClick("projectboard");
    		}
        	search_tabbar.tabs(last_id).disable();
	    	search_tabbar.tabs(id).enable();
	    	search_tabbar.tabs(id).setActive();
			if(id==caller && !toolbarmainforms[id]){
				
				addRegularMainSearchForm(caller);
			}else if(id=='advance' &&last_id && last_id!='task'){
				//dhtmlx.message("Sprint Board");
				
				addAdvanceForm(caller)
				loadDataView();
			}
    	}
	});
  
   
}


function addAdvanceForm(caller){
	var formContext;
	
	if(advance_form && caller=='projectboard'){
    	 try{
    		 advance_form.unload();
    		 advance_form=null;
      	 }catch(err){
      		advance_form=null;
      	 }
    }
	try{
		if(caller=='projectboard'){
			formContext=projectboard_advance_context();
		}
		/*else{
			 formContext=eval(caller+"_advance_context");
		}*/
		
		if(formContext){
	  	 	  advance_form = advance_tab.attachForm(formContext);
	  	 	 
	  		}
		 
	 }catch(err){
	    dhtmlx.alert("Form context is not defined!, Please contact your system admin to add form context in this application for this menu item!");
	    
	    return false;
  	 }
 
   
}
function addRegularMainSearchForm(caller){
	
	var  formContext;
	    try{
	    	formContext=eval(caller+"_main_context");
	    }catch(err){ }
	
	  /*
	  if(main_form){
	   
	    	return;
	       
	    }else{
	    	 try{
	      	 	 main_form.unload();
	      	 	 main_form=null;
	      	 }catch(err){
	      	 	 main_form=null;
	      	 }
	    }
	    */
	    
	    try{
	  	 	if(formContext){
	  	 	  main_form = regular_tab.attachForm(formContext);
	  	 	  toolbarmainforms[caller]=main_form;
	  	 	  regular_tab.setActive();
	  		}
	  	 	
	  	 }catch(err){
	  	 	main_cell.attachURL('./src/welcome.jsp?firstname='+firstname, true);
		    dhtmlx.alert("Form context is not defined!, Please contact your system admin to add form context in this application for this menu item!");
		    return false;
	  	 }
	  
	    
	    if(main_form){
			main_form.attachEvent('onButtonClick', function(name, command){
		        action_button_callback(name,command);
			});
		}
}

function doToolbar(){
	 var items=userrole.split(",");
	 for (var i=0;i<items.length;i++){
		 var menu=items[i];
		 if(menu){
			 testrepo_toolbar.hideItem(menu); 
		 }
	 }
	
}

function addWidgetLayout(table,container ){
    var contextData=null;
    var toolbarData;
   
    var items;
    var caption=getCaption(menuid,table);
 	widget_form=widgetforms[table];
 
  	 widget_layout = new dhtmlXLayoutObject({
		parent: getMainForm().getContainer(container),
		pattern: '1C',
		skin:skin,
		cells: [{id: "a", header: false, margin:"0px"}]
	});
	try{
		toolbarData=eval(table+"_toolbar");
		if(toolbarData){
	    	widget_toolbar = widget_layout.attachToolbar();
	     	widget_toolbar.setIconsPath('./src/codebase/imgs/icons/imgs/24/');
	     	widget_toolbar.loadStruct(toolbarData, function() {});
	     	widget_toolbar.attachEvent("onClick", function(id){
	     		 action_button_callback(id,null);
	     	});
	    }
	}catch(err){
		dhtmlx.message(err + "! No Toolbar data for "+table+"!");
	}
	
 	
 	
	try{
     	contextData=eval(table+"_grid_context");
    	widget_cell = widget_layout.cells('a');
		//widget_cell.setText(caption);
    	widget_cell.hideHeader();
    	//widget_cell.setWidth('0');
   		widgetlist[table]=widget_layout;
   		toolbarwidgetlist[menuid][table]=widget_layout;
		widget_form=widget_cell.attachForm(contextData);
		widget_form.attachEvent('onButtonClick', function(name, command){
	        action_button_callback(name,command);
		});

		try{
			
			toolbarwidgetforms[menuid][table]=widget_form;
			widgetforms[table]=widget_form;
			
		}catch(err){}
		
		
		widgetforms[table]=widget_form;
		try{
			if(current_grid &&current_grid.getSelectedRowId()){
				//add parent relation
				current_parent_id=current_grid.cells(current_grid.getSelectedRowId(),1).getValue();
				getWidgetForm(table).setUserData("parent_objid","",current_parent_id);
				//validate if additional relation need to set from the parent grid
				var additional_relation=getAdditionalRelation(menuid, table);
				var mutiple_relations;
				if(additional_relation){
					mutiple_relations=additional_relation.split(",");
				}
				if(mutiple_relations &&mutiple_relations.length>=1){
					for(var i=0;i<mutiple_relations.length;i++){
						try{
							additional_relation=mutiple_relations[i];
							items=additional_relation.split(":");
						}catch(err){}
						 
						if(additional_relation){
							var colidx=getGridColumnIndex(current_grid,(items&& items.length>1?items[1]:additional_relation));
							if(colidx!=-1){
								var value=current_grid.cells(current_grid.getSelectedRowId(),colidx).getValue();
								getWidgetForm(table).setUserData(additional_relation,"",value);
							}
							
						}
					}
				}
				/*
				try{
					items=additional_relation.split(":");
				}catch(err){}
				 
				if(additional_relation){
					var colidx=getGridColumnIndex(current_grid,(items&& items.length>1?items[1]:additional_relation));
					if(colidx!=-1){
						var value=current_grid.cells(current_grid.getSelectedRowId(),colidx).getValue();
						getWidgetForm(table).setUserData(additional_relation,"",value);
					}
					
				}*/
			}
		}catch(err){}
		
			
		container=table+"_grid_container";
    	addGridToMainForm(container,table,widget_form);
    
    }catch(err){
      dhtmlx.message(err + " please define "+table+"_grid_context");
      clearParentChildBeneath(table);
      return false;
    }
   
}

function addWidgetContainer(table,container){
	var tabwidget;
	 var fieldset_name=table+"_form_fieldset";
	 var caption=getCaption(menuid,table);
	 var height="500";
	 if(getLayoutHeight(table)){
	 	height=getLayoutHeight(table);
	 }
	
	 var itemData= { type:"block" , name:fieldset_name, list:[
			{ type:"container" , name:container, inputWidth:layoutWidth, inputHeight:height  }
			]  }
			
	
	 /*var itemData=	{ type:"fieldset" , name:fieldset_name, label:caption, list:[
			{ type:"container" , name:container, inputWidth:layoutWidth, inputHeight:height  }
			]  }
			*/
		
	 
		 getMainForm().addItem(null, itemData, itemcount++, "insertAfter");
	

}


function getWidgetForm(table){
	var form;
	if(widgetforms[table]){
		form=widgetforms[table];
	}else if(toolbarwidgetforms[menuid]){
		form=toolbarwidgetforms[menuid][table];
		
	}
	return form;
}

function getMainForm(){
	var form=main_form;
	
	 if(search_tabbar &&task_form &&search_tabbar.getActiveTab()=="task"	) {
		 form= task_form;
	 }
	 return form;
}

function scrollToChild(child){
	 var container;
	 var table=child.split(":")[1];
	 var table_container=table+"_container";
	
	 if(child.indexOf("mainmenu")>=0){
		 document.getElementById("layoutObj").scrollIntoView();
		 return false;
	 }
	 try{
		  container= getMainForm().getContainer(table_container);
	 }catch(err){}
	 
	 if(!container){

		 table_container=table+"_home_container";
		 try{
			  container= getMainForm().getContainer(table_container);
		 }catch(err){}
	 }
	 if(!container ){// &&child.indexOf("tabwidget")>=0
		 table_container=table+"_grid_container";
		 if(!container && getWidgetForm(table)){
			 try{
				 container= getWidgetForm(table).getContainer(table_container);
			 }catch(err){}
			
		 }
		 if(!container && getWidgetForm(table)){
			 table_container=table+"_tab_grid_container";
			 try{
				 container= getWidgetForm(table).getContainer(table_container);
			 }catch(err){}
			
		 }
			
	 }
    
     if(!container){
    	 //dhtmlx.alert("No Container Object is found!");
    	 //dhtmlx.alert("Please select a row in the grid!" + " Form container ="+ container + " not found!");
    	 return false;
     }
	 var cont_id=container.getAttribute("id");
	 if(cont_id){
		 document.getElementById(cont_id).scrollIntoView(true);
		 window.scrollTo(50,0);
		 if(table){
			  var grid=gridlist[table];
				 if(grid){
					 var rowid=grid.getSelectedRowId();
					 if(rowid){
						 //grid_onRowSelect_callback(grid,table,rowid,null);
						 grid.clearSelection();
					 }
				 }
		  }
	 }else{
		 dhtmlx.alert("Please select a row in the grid!");
    	 return false;
	 }
}

function goToHome(child){
	 var container;
	 var table=child.split(":")[1];
	 var table_container=table+"_home_container";
	
	 try{
		  container= getMainForm().getContainer(table_container);
	 }catch(err){}
	 
	 
    if(!container){
    	 return false;
    }
	 var cont_id=container.getAttribute("id");
	 if(cont_id){
		 document.getElementById(cont_id).scrollIntoView(true);
		 window.scrollTo(0,0);
		 
	 }
	 return false;
	
	
}
function removeWidget(table){
	  var fieldset_name=table+"_form_fieldset";
	   if(main_form){
		   main_form.removeItem(fieldset_name);
	   }
	   removeAddons(menuid,table);
	   removeToolbarObjectMemory(menuid, table);
	 
	}

function removeList(table){
	  var fieldset_name=table+"_list";
	  var widget=getWidgetForm(table);
	  widget.removeItem(fieldset_name);
	}

function addGridToMainForm(container, table,widget_form){
	var grid_skin=skin.replace("dhx_","");
	var  gurl;
	var items;
	var multirelation;
	var relation;
	var tabfilter;
	var relationfilter;
    var additional_relation;
  	var	grid=new dhtmlXGridObject(widget_form.getContainer(container));
	var invokefilter=getInvokeFilter(menuid, table);
    var parent_objid=getWidgetForm(table).getUserData("parent_objid","");
    var filter=getSearchFilter(table);
   
    if(task_form &&search_tabbar.getActiveTab()=="task" && table=="feature"){
    	filter=task_form.getUserData("filter","");
    }
    //if you have mutiple tabs like board and want to swtich between tab using some filter you can use tab filter
    //look at the code in board_context.js in method addSprintTask()
    try{
    	  tabfilter=getWidgetForm(table).getUserData("filter","");
    }catch(err){}
   
   
    var uri=getURI(menuid, table);
	if(!uri){
		uri="filter";
	}
	
    if(filter && ((menuid==table)||invokefilter ||search_tabbar.getActiveTab()=="task")){
        //dhtmlx.message(filter);
    	
    	gurl=www_url+'/rest/'+table+'/'+uri+'?token='+token +"&filters="+filter;
    	
    }else  if(parent_objid){
    	try{
        	relation=getRelation(menuid,table);
        	additional_relation=getAdditionalRelation(menuid, table);
        	
        	try{
        		if(additional_relation){
        			multirelation=additional_relation.split(",");
        		}
        		
			}catch(err){}
        	
        	if(uri=='filter'){
        		if(relation){
        			relationfilter=relation+"='"+parent_objid+"'";
        		}
	        	if(multirelation && multirelation.length>0){
	        	  for(var i=0;i<multirelation.length; i++){
	        		  
	        		  additional_relation=multirelation[i];
	        		  if(additional_relation){
	          			try{
	      					items=additional_relation.split(":");
	      				}catch(err){}
	      				
	          			if(!relationfilter){
	          				
	          				if(items && items.length==2){
	          					relationfilter=items[0]+"='"+getWidgetForm(table).getUserData(additional_relation,"")+"'";
	          				}else{
	          					relationfilter=additional_relation+"='"+getWidgetForm(table).getUserData(additional_relation,"")+"'";
	          				}
	          				
	          			}else{
	          				
	          				if(items && items.length==2){
	          					relationfilter+=" and " +items[0]+"='"+getWidgetForm(table).getUserData(additional_relation,"")+"'";
	          				}else{
	          					relationfilter+=" and "+additional_relation+"='"+getWidgetForm(table).getUserData(additional_relation,"")+"'";
	          				}
	          				//relationfilter+=" and "+additional_relation+"='"+getWidgetForm(table).getUserData(additional_relation,"")+"'";
	          			}
	          			
	          			
	          		}
	        	  }	
	        	 
	        	}
        	}else{
        		relationfilter=table+"."+relation+String.fromCharCode(1)+"="+String.fromCharCode(1)+parent_objid;
        		if(multirelation &&multirelation.length>0){
        		 for(var i=0;i<multirelation.length; i++){
           		    additional_relation=multirelation[i];
	        		if(additional_relation){
	        			relationfilter+=String.fromCharCode(2)+table+"."+additional_relation+String.fromCharCode(1)+"="+String.fromCharCode(1)+
	        			getWidgetForm(table).getUserData(additional_relation,"");
	        		}
        		 }
        		}
        	}	
        	if(relationfilter){
        		if(button_filter &&button_filter!=""){
    				relationfilter+=button_filter;
    				button_filter="";
    			}
        		gurl=www_url+'/rest/'+table+'/'+uri+'?token='+token +"&filters="+relationfilter;
        		
        	}else{
        		dhtmlx.message("No relation found for table="+table+"!");
        	}
        }catch(err){
        
        }
    }else  if(tabfilter &&tabfilter!=''){
    	gurl=www_url+'/rest/'+table+'/filter?token='+token +"&filters="+tabfilter;
    }else{
    	
  	  	gurl=www_url+'/rest/'+table+'/rows?token='+token;
  	 }
	current_table=table;
	
	grid.setImagePath("./src/codebase/skins/"+grid_skin+"/imgs/");
	//enable auto height and width
	if(layoutWidth>1200){
		 grid.enableAutoWidth(true,600,400);
	}
	//grid.enableAutoHeight(true,400,true);
	grid.clearAll();
	grid.load(gurl,'xml');
    grid.setUserData("","table",table);
   
	grid.attachEvent("onXLE", function(grid,count){
		if(updated_objid){
			selectGridRow(table,updated_objid)
			updated_objid=null;
	    }
		callCustomRowSelect(table,"onXLE");
		callCustomFormLoad(table);
		
  	});
	
	grid.attachEvent("onDataReady",function(){
		setGridFilters(grid);
	});
  	//grid.setUserData("","table",table);
	gridlist[table]=grid;
	
	if(toolbargridlist[menuid] &&!toolbargridlist[menuid][table]){
		toolbargridlist[menuid][table]=grid;
	}
	
	grid.attachEvent('onRowSelect',function(rowId,cellIndex){
		
	        //alert("rowid="+grid.getSelectedRowId())
		   if(!getChooseExclude(table) &&grid.getColumnId(0).indexOf("choose")>=0){
			   grid.cells(rowId,0).setValue("1");
		   }
			grid_onRowSelect_callback(grid,table,rowId,cellIndex);
			callCustomRowSelect(table,'onRowSelect');
			gridlist[table]=grid;
			if(toolbargridlist[menuid] &&!toolbargridlist[menuid][table]){
				toolbargridlist[menuid][table]=grid;
			}
		
	});
	
	grid.attachEvent("onCheck", function(rId,cInd,state){
		//try{
		    //dhtmlx.message(grid.cells(rId,0).getValue());
			grid.selectRowById(rId);
			grid_onRowSelect_callback(grid,table,rId,cInd);
			
			callCustomRowSelect(table,'onCheck');
		/*}catch (err){
			dhtmlx.message("Error onCheck: "+err);
		}*/
	});
	
	
	grid.attachEvent("onRowCreated", function(rId,rObj,rXml){
		
		showListInGrid(grid,table);
		if(grid.getRowsNum()==0){
			 dhtmlx.alert("Your session got expired! Please click Refresh button on the browser!");
		}
		if(widgetforms[table] &&widgetforms[table].isItem("grid:rowcount")){
			widgetforms[table].setItemValue("grid:rowcount",grid.getRowsNum());
			widgetforms[table].disableItem("grid:rowcount");
		}
		
		if(!getChooseExclude(table) && grid.getColumnId(0).indexOf("choose")>=0){
			grid.setColumnHidden(0,true);
		}
		
		
	}); 
	
	
	current_grid=grid;
	toolbarcurrentgrid[menuid]=grid;
	
	 var data_form=getDataForm(table);
	 
	
	 if(data_form){
	   try{
	   
	 	data_form.unload();
	 	
	   }catch(err){
	   
	   }
	 	data_form=null;
	 	 addDataForm(table);
	 }else{
           addDataForm(table);
     }

}

function setGridFilters(grid){
	var rowId=0;
	var colIdx=0;
	var filter="";
	grid.forEachCell(rowId,function(c){
		try{
			var colid=grid.getColumnId(colIdx);
			if(colid){
				filter+=",#text_filter";
	        	colIdx++;
			}
			
		}catch(err){}
			
			
     });
	
	grid.attachHeader(filter);
	
}

function addDataForm(table){
   var parent_objid;
   var listrelation;
   var listrelation_val;
   var container=table+"_form_cont";
   var data_form=dataforms[table];
   //var reloadform=getReloadForm(menuid, table);
  	if(data_form){
  	   try{
    		data_form.unload();
			data_form=null;
		}catch(err){
			data_form=null;
		}
   	}
   if(!widgetforms[table]) widgetforms=toolbarwidgetforms[menuid];
   
   if(widgetforms[table]){
  	 parent_objid=widgetforms[table].getUserData("parent_objid","");
   }
   
   	var  furl=www_url+'/rest/'+table+'/form?token='+token +"&relationfilter="+parent_objid;
   	
    var listrelation=getListRelation(menuid, table);
    if(listrelation){
    	listrelation_val=listrelation+"='"+getWidgetForm(table).getUserData((listrelation.split(".").length>0?listrelation.split(".")[1]:listrelation),"")+"'";
    	furl+=","+listrelation_val;
    }
   	
    if(widgetforms[table]){
    	widget_form=widgetforms[table];
    }
   	
   	data_form=new dhtmlXForm(widget_form.getContainer(container));
   	
   	data_form.setUserData("","table",table);
   
    
    var formstruct=datafromstruct[table];
    if(!formstruct){
    	
    	data_form.load(furl);
     	get(furl,table);
    	
     }else{
   		 data_form.loadStruct(formstruct);
    }
 
    data_form.attachEvent("onFocus", function(name, value){
    	setFormRelation(table);
	});
    
    data_form.attachEvent("onChange", function(name, value){
    	callCustomFormOnChange(table);
	});
    data_form.attachEvent("onXLE", function(){
    	callCustomFormLoad(table);
    	setDataFormFieldWidth(table);
	});
	try{
		
		toolbardataforms[menuid][table]=data_form;
		
	}catch(err){}

	dataforms[table]=data_form;
	addHTMLContent(table);
   	
}

function addHTMLContent(table){
	var container=widget_form.getContainer(table+"_html_cont");
	var html_layout;
	var html_cell;
	if(container){
		html_layout = new dhtmlXLayoutObject({
			parent: container,
			pattern: '1C'
		});
        
	    html_cell = html_layout.cells('a');
	    html_cell.hideHeader();
	    htmllayouts[table]=html_layout;
	    htmlcells[table]=html_cell;
	}
	
	
}

function updateHTMLContent(table,title,content){
	
	var html_cell=htmlcells[table];
	if(html_cell){
		html_cell.showHeader();
		html_cell.showInnerScroll();
	    html_cell.setText(title);
	    html_cell.attachHTMLString("");
		html_cell.attachHTMLString(content);
	}
}

function setParentObject(form, parent, table){
    var dhxCombo = form.getCombo(name);
	dhxCombo.forEachOption(function(optId){
      //
	});
	setChecked(typeindex);

	var someItem = myForm.getSelect(name);
}




function grid_onRowSelect_callback(grid,table,rowId,cellIndex){
        var colIdx=0;
        var formdata={};
        var current_table=null
        var child_table=getChild(menuid,table);
        var form=null;
        var focusitem;
        if(current_grid){
        	current_table=current_grid.getUserData("","table");
        }else{
        	current_table=grid.getUserData("","table");
        }
        //if child caller
        if(childcaller[current_table]|| childcaller[table]){
        	current_table=grid.getUserData("","table");
        }
        current_grid=grid;
        toolbarcurrentgrid[menuid]=grid;
        
        if(child_table &&child_table!=current_table & current_table!=table){
           current_table=child_table;
        }
        
        //check if this is current working grid
        if(current_table &&!( current_table==table)){
        	widget_form=widgetforms[current_table];
        	if(widget_form){
        		try{
        			widget_form.unload();
        		}catch(err){}
        		
        		widgetforms[current_table]=null;
        		dataforms[current_table]=null;
        		
        	}
        	 //clear all child table underneath current_table
         	 clearParentChildBeneath(current_table)
        }
        current_parent_id="";
        if(grid.cells(rowId,1).getValue() &&grid.cells(rowId,1).getValue().indexOf('new')<0){
        	current_parent_id=grid.cells(rowId,1).getValue();
        	
        	if(widgetforms[current_table]){
        		widgetforms[current_table].setUserData("parent_objid","",current_parent_id);
        	}
        }
       if( widgetforms[table]){
    	   widgetforms[table].enableItem("save:"+table);
       }
        //create data form for selected row in the current grid 
        form=getDataForm(table);
        
        if(!form){
           addDataForm(table);
           form=dataforms[table];
        }
        if(form){
            
            var relation=getRelation(menuid,table);
   			grid.forEachCell(rowId,function(c){
	           
	           try{
	           		var colid=grid.getColumnId(colIdx);
	           		var value=grid.cells(rowId,colIdx).getValue();
	           		//formate json
	           		value=formatJSON(value);
	           		var type=form.getItemType(colid);
	           		//value=value.split("-").join("&nbsp;");
	           		
	           		if(colid.indexOf('choose')<0){
	           			formdata[colid]=value;
	           			form.setItemValue(colid, value);
	           			if(!focusitem && !form.isItemHidden(colid)){
	           				focusitem=colid;
	           			}
	           			if(relation &&value &&widgetforms[table] && colid.indexOf(relation)>=0){
	           				widgetforms[table].setUserData("parent_objid","",value);
	           			}
	           		}
	           		
	           
	           }catch(err){
	              dhtmlx.message('Error='+err +'  name='+ colid+ '  value='+value +'  type='+ type);
	             
	           }
	           
	            colIdx++;
	        });
   			 setFormRelation(table);
	         gridformdata[table]=formdata;
	         toolbargridformdata[menuid][table]=formdata;
	       
	    }else{
	        dhtmlx.message("Form is not loaded yet!");
	    }
	   
      
	 //load child table
       if(child_table &&child_table!=table){
        		handle_find_changes("find:"+child_table);
       }
       form.setItemFocus(focusitem);
       
	
	 
}

function setFormRelation(table){
	var value;
	var items;
	var form=getDataForm(table);
   	var relation=getRelation(menuid,table);
    var additional_relation=getAdditionalRelation(menuid, table);
	var form_table=form.getUserData("","table");
	 var formdata=gridformdata[table];
	 if(widgetforms[table]){
		 value=widgetforms[table].getUserData("parent_objid","");
	 }
	 if(!value){
		 value=current_parent_id;
	 }
	
	if(relation||additional_relation){
	    	form.forEachItem(function(name){
	           	if(relation &&name.indexOf(relation.toLowerCase())>=0){
	        		form.setItemValue(name,value);
	        		if(formdata){
	        			formdata[name]=value;
	        		}
	        	}
	           	//var additional_relation=getAdditionalRelation(menuid, table);
	           	try{
	           		 items=additional_relation.split(":");
	           	}catch(err){
	           		
	           	}
	           
    			if(additional_relation &&(name.indexOf(additional_relation.toLowerCase())>=0 
    					||(items && items.length>1 && name.indexOf(items[1].toLowerCase())>=0)
    					||(items && items.length>1 &&items[0].indexOf("2")>0 && name.indexOf(items[0].toLowerCase())>=0))){
    				var advalue=getWidgetForm(table).getUserData(additional_relation,"");
    				if(advalue){
    						form.setItemValue(name,advalue);
    				}
    				
    			}
	        });
	 }
}
function getDataForm(table){
	
	if(tabdataforms &&tabdataforms[table]){
	  	   return tabdataforms[table];
	}
	if(toolbardataforms[menuid] &&toolbardataforms[menuid][table]){
		return toolbardataforms[menuid][table];
	}
	 return dataforms[table];
	
}

function setDataFormFieldValue(table, field, value){
	var form=getDataForm(table);
	if(form){
		 form.forEachItem(function(name){
		           if(name.indexOf(field)>=0){
		              form.setItemValue(name,value);
		           }
		        });
	}
}

function setDataFormFieldWidth(table){
	
	
	var form=getDataForm(table);
	var width;
	if(layoutWidth &&layoutWidth>1300){
		width=600*(layoutWidth/1300)*0.75;
	}
		
	if(width<600) {
		width=600;
	}
		
	if(form){
		 form.forEachItem(function(name){
			 try{
				 form.setItemWidth(name, width);
			 }catch(err){}
			
		  });
		 if(form.getEditor(name)){
			 try{ 
				 form.getEditor(name).setWidth(width);
			 }catch(err){}
			
		 }
		 
	}
	
}

function clearParentChildBeneath(table){
  removeWidget(table);
  
  while (getChild(menuid,table)!=null){
	   try{
		   var child=getChild(menuid,table);
	        table=child;
	  		widget_form=widgetforms[child];
	        if(widget_form){
	        	widget_form.unload();
	        	widgetforms[child]=null;
	        	dataforms[child]=null;
	        	removeWidget(child);
	        	
	        }
	   }catch(err){
		   dhtmlx.message(err + " could not find object " +child +" in widgetforms list!")
	   }
        
        	
   }
  clearCustomChildBeneath(table);
}

function clearAllChildBeneath(table){
	  if(getChild(menuid,table)==null){
		  return false;
	  }
	  while (getChild(menuid,table)!=null){
		   try{
			   var child=getChild(menuid,table);
		        table=child;
		  		widget_form=widgetforms[child];
		        if(widget_form){
		        	widget_form.unload();
		        	widgetforms[child]=null;
		        	dataforms[child]=null;
		        	removeWidget(child);
		        	
		        }
		   }catch(err){}
	        	
	   }
	   return true;
	}

function removeAddons(menuid,table){
	var addons=getAddons(menuid,table);
	if(addons){
		var addonslist=addons.split(",");
		if(addonslist.length>0){
			for ( var i=0;i<addonslist.length;i++){
				var child=addonslist[i];
				try{
			  		widget_form=widgetforms[child];
			        if(widget_form){
			        	widget_form.unload();
			        	widgetforms[child]=null;
			        	dataforms[child]=null;
			        	removeWidget(child);
			        	
			        }
			   }catch(err){}
				
			}
		}
	}
}

function removeMe(name){
	  var menulist=getMenu(menuid);
	  var items=name.split(":");
	  var table=items[0];
	  scrollToChild("scroll:"+table);
	}

function clearCustomChildBeneath(table){
	  var menulist=getMenu(menuid);
	  var remove=false;
	 if(menulist){
		 for (var child in menulist) {
			 if(child==table){
				 remove=true;
			 }
			 if(child!=table &&remove){
				try{
				  		widget_form=widgetforms[child];
				        if(widget_form){
				        	widget_form.unload();
				        	widgetforms[child]=null;
				        	dataforms[child]=null;
				        	removeWidget(child);
				        	
				        }
				   }catch(err){}
			 }
	
		 }
	 }
	 
	}


function addChartToMainForm(container, grid){

	var project_chart = new dhtmlXChart({
		view: 'pie',
		container: main_form.getContainer('project_chart_cont') ,
		tooltip:{
			template:'#sales#'
		},
		legend:{"template":"#year#","marker":{"type":"square","width":25,"height":15}},
		gradient: false,
		value:'#sales#'
	});

	project_chart.load('./src/codebase/data/chart.xml', 'xml');
}


function action_button_callback(name,command){
   
	if(name.indexOf('search:')>=0){
	  
	  handle_search_context(name);
	
	}else if(name.indexOf('save:')>=0){
	   handle_save_changes(name);
	   
	}else if(name.indexOf('scroll:')>=0){
		   scrollToChild(name);
	   
	}else if(name.indexOf('delete:')>=0){
		handle_delete_record(name); 
		   
    }else if(name.indexOf('create:')>=0){
	   handle_create_changes(name);
	   	   
	}else if(name.indexOf('edit:')>=0){
	  
	   handle_edit_changes(name);
	
	}else if(name.indexOf('find:')>=0){
	   handle_find_changes(name);
	   
	}else if(name.indexOf('home:')>=0){
		goToHome(name);
	   
	}else if(name.indexOf(':download')>=0){
		grid2excel(name);
	   
	}else if(name.split(":").length>=3){
		  eval(name.split(":")[2]+"(\""+name+"\")");
	  }
	
}	



function handle_create_changes(name){
  var table;
  if(name!=null){
     table=name.split(":")[1];
     gridformdata[table]=null;
     addDataForm(table);
     callCustomRowSelect(table,"create");
  }
  hideFormCols(table);
  hideFormButton(table);
  disableFormCols(table);
}

function handle_search_context(name){
  var table;
  if(name!=null){
     table=name.split(":")[1];
     clearParentChildBeneath(table);
     initWorkspace();
     widget_container=table+"_container";
     addWidgetContainer(table,widget_container);
     addWidgetLayout(table,widget_container);
     
  }
  if(name.split(":").length==3){
	  eval(name.split(":")[2]+"(\""+table+"\")");
  }
  
}


function handle_find_changes(name){
  var table;
  var parent;
  var grid=current_grid;
  var rowid;

  if(name){
     table=name.split(":")[1];
     parent=getParent(menuid,table);
     //grid=gridlist[parent];
  }

  if(grid){
  	rowid=grid.getSelectedRowId();
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
     callCustomFormLoad(table);
    
  }
  
}

function handle_button_filter(name){
	var items=name.split(":");
	button_filter="";
	var table;
	if(items.length==3){
		button_filter=(items[2].indexOf("and")>=0?items[2]:" and "+items[2]);
		table=items[1];
		var grid=gridlist[table];
		if(grid){
			var rowid=grid.getSelectedRowId();
			if(rowid){
				grid_onRowSelect_callback(grid,table,rowid,null);
			}else{
				dhtmlx.alert("Please select a row first!")
			}
		}
		
	}
	scrollToChild("scroll:"+table);
	
}
function handle_edit_changes(name){
  
  if(name!=null){
     table=name.split(":")[1];
     reloadForm(table);
    
  }
}

function handle_delete_record(name){
	var delete_objid;
	var table=name.split(":")[1];
	if(current_grid && current_grid.getSelectedRowId()){
		delete_objid=current_grid.cells(current_grid.getSelectedRowId(),1).getValue();
		if(delete_objid){
			var deleteurl=www_url+"/rest/"+table+"/"+delete_objid+"/delete?token="+token;
			//executeGet(deleteurl);
			executeDelete(deleteurl,table)
		}
	}else{
		dhtmlx.alert("Please secet a row to delete!");
	}
	
	
}

function executeDelete(url,table){
	var xmlHttpReq;
    var response;
	// Mozilla/Safari
	if (window.XMLHttpRequest) {
		xmlHttpReq = new XMLHttpRequest();
	}
	// IE
	else if (window.ActiveXObject) {
		xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}	
	
		xmlHttpReq.open('GET', url, true);
		xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlHttpReq.onreadystatechange = function() {
			if (xmlHttpReq.readyState == 4) {	
				response=xmlHttpReq.responseText;
				clearAllChildBeneath(table);
			    reloadGrid(table);
				return response;
			}
		}
		xmlHttpReq.send(null);
	
}
function  handle_save_changes(name){
	
	table=name.split(":")[1];
	
	saveChanges(table,null);

}

function saveChanges(table, target){
	
	var parent_data= collect_form_data(table,target);
  	
  	if(parent_data && parent_data!=null ){  
		var posturl=www_url+"/rest/"+table+"/formdata?token="+token;
		 if(target &&target!=null){
			 posturl=www_url+"/rest/"+target+"/formdata?token="+token;
		 }
		
		postData(parent_data, posturl,table);
	
    	//ajax_post_handler(parent_data, posturl);
    }
}


//the name of the button should have
//[caller]:[child]:[custom method]
//example : project:sprint:handle_custom_project_changes
function handle_custom_changes(name){
	var items=name.split(":");
	if(items.length>=3){
		 customtable=items[1];
	  }
	try{
		clearCustomChildBeneath(items[0]);
		clearCustomChildBeneath(customtable);
		if(!clearAllChildBeneath(items[1])){
			clearAllChildBeneath(items[0])
		}
		
	}catch(err){
		
	}
	
	if(items.length==5 &&items[3] &&items[3]=='buttonfilter'){
		
		button_filter=(items[4].indexOf("and")>=0?items[4]:" and "+items[4]);
	}
	
	
	load_child_widget(customtable);
	scrollToChild("scroll:"+customtable);
	
}

function remove_custom_table(name){
	var items=name.split(":");
	if(items.length==3){
		 customtable=items[1];
	  }
	try{
		clearCustomChildBeneath(items[0]);
		clearCustomChildBeneath(customtable);
		if(!clearAllChildBeneath(items[1])){
			clearAllChildBeneath(items[0])
		}
	}catch(err){
		
	}
	
	//removeCustomTableLayout();
	
}
function reloadForm(table){
    addDataForm(table);
    var formdata=gridformdata[table];
    if(formdata){
   	 var form=dataforms[table];
   	
    	form.forEachItem(function(name){
	      	var value=formdata[name];
	      	form.setItemValue(name,value);
	     
	 	});
	 	//reset mode
	 	form.setUserData("","mode","");
	 	
	 }
    callCustomFormLoad(table);
    
}
function collect_form_data(table,target){
	var data_form=getDataForm(table);
	var validationerror="";
	var validation_message="";
	var xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n"+"<"+(target&&target!=null?target:table)+">\n";
	 xml+="<record id=\"0\">\n"
	if(table=='undefined')
		return '\n';
	
	try{
	  data_form.forEachItem(function(name){
          var nulldate=false; 
          var colid=name;
          var excludecol=getFormColsExcludeUpdate(menuid, table);
	           if(colid){
	        	   
	              var tags=colid.split(":");
	             
	              if(tags.length>=4){
		               var col=tags[1];
		               if(!excludecol ||excludecol &&excludecol.indexOf(col)<0){
			               var isnullable=tags[2];
			               var type=tags[3].replace("2","");
			               var coltype=data_form.getItemType(colid);
			               var inputlen=0
			              
			               var val =null;
			               try{
			            	  val =data_form.getEditor(colid).getContent();
			            	  try{
			            		 
			            		  val=createTextVersion(val);
			            		  val = JSON.parse(val);
			            		  val=JSON.stringify(val);
			            		 
			            	  }catch(err){ }
			            	 
			            	  
			               }catch(err){
			            	   val =data_form.getItemValue(colid);
			               }
			               if(tags[4]){
			            	   inputlen=tags[4]
			            	   
			               }
			               if(colid.indexOf('DATE')>=0){
			            	   try{
			            		   val= data_form.getCalendar(colid).getDate(true);
			            		   if(val==null){
			            			   nulldate=true;  
			            		   }
			            	   }catch(err){
			            		   validation_message="Please enter date for "+col;
				            	   validationerror+= (validationerror==""?col : ","+col );
			            	   }
			            	  
			               }else if(colid.indexOf('NUMBER')>=0&&val!='' && !isNumber(val)){
			            	   validation_message="Please enter a number for "+col;
			            	   validationerror+= (validationerror==""?col : ","+col );
			            	  
			               }
			               if(col=='objid' && val=='newid'||colid.indexOf('DATE')>=0 &&val==null){
			                 val='';
			               }
			               if(isnullable=='false' && val=='' && col!='objid'){
			               	  validationerror+= (validationerror==""?col : ","+col );
			               }
			               val=htmlencode(val);
			               if(val.length>inputlen &&colid.indexOf(":VARCHAR")>0){
		            		   val=val.substr(0,inputlen);
		            		   dhtmlx.message("Your size of text for col="+col+" cut shot to the limit="+inputlen);
		            	   }
			               if(col.indexOf("2")<0 &&nulldate==false||col.indexOf("2")>0 &&val!=''){
			               		xml+="<"+col+" isRequired=\""+(isnullable=='false'?"true":"false")+"\" type=\""+type+ "\">"+val+"</"+col+">\n"
			               }
		               }
	              }
	           }
	           
	          
	        });
	        xml+="</record>\n";
      
		
		if(validationerror==''){
	     	xml+="</"+(target&&target!=null?target:table)+">\n";
	    	return xml;
	    }else if( validationerror!=''){
	    	 var error_msg='Required fields not set with value for object='+(target&&target!=null?target:table)+'.\n\n  Fields: '+ validationerror + ".\n\n Please correct your data as below.\n " +validation_message;
	    	 dhtmlx.alert(error_msg);
	    	 validation_message="";
	    	 return null;
	    }
	}catch(err){
	  dhtmlx.alert(err);
	  return null;
	}	
	
    return null;

}

function formatJSON(val){
	try{
		var txt=JSON.parse(val);
		if (typeof txt == 'object') {
		    //Json
			val=JSON.stringify(val, null, 4);
			val=val.trim().split("{").join("{<br>");
			val=val.trim().split("}").join("<br>}<br>");
			val=val.trim().split(",").join(",<br>");
			
			return val;
		}
	}catch(err){}
	
	val=keepStringFormating(val);
	
	return val;
	
}
function keepStringFormating(txt){
	
	try{
		txt=txt.replace(/\n/gi,"<br>");
		
	}catch(err){}
	try{
		txt=txt.split("!D").join("<div><br></div>");
		//txt=txt.replace(/!p/gi,"<p>");
	}catch(err){}
	/*
	try{
		txt=txt.replace(/p!/gi,"</p>");
	}catch(err){}
	*/
	try{
		txt=txt.replace(/!B/gi,"<b>");
	}catch(err){}
	try{
		txt=txt.replace(/B!/gi,"</b>");
	}catch(err){}
	
	try{
		txt=txt.replace(/!i/gi,"<i>");
	}catch(err){}
	try{
		txt=txt.replace(/i!/gi,"</i>");
	}catch(err){}
	
	try{
		txt=txt.replace(/!U/gi,"<u>");
	}catch(err){}
	try{
		txt=txt.replace(/U!/gi,"</u>");
	}catch(err){}
	
	
	
	return txt;
}

function strip(html)
{
   var tmp = document.implementation.createHTMLDocument("New").body;
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function postData(xml,url,table){
    
        var http = new XMLHttpRequest();
   
		http.open("POST", url,true);
		
    
		http.onreadystatechange = function() {//Call a function when the state changes.
   			if(http.readyState == 4 && http.status == 200) {
   			   post_reponse=http.responseText;
   			   if(url.indexOf("/formdata")<0){
   				 updateServiceResponseToTable(table,null,post_reponse);
   			   }
   			  
      			if (window.DOMParser)
  				{
  					parser=new DOMParser();
  					xmlDoc=parser.parseFromString(post_reponse,"text/xml");
  				}
	   			else // Internet Explorer
  				{
  					xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  		   			xmlDoc.async=false;
  					xmlDoc.loadXML(post_reponse); 
        		} 
      			try{
      				updated_objid=xmlDoc.getElementsByTagName("cell")[1].childNodes[0].nodeValue;
      			}catch(err){
      				
      			}
      			
        		
        		if(updated_objid && updated_objid.length==32){
        			clearAllChildBeneath(table);
        		    reloadGrid(table);
        		   
        			//dhtmlx.alert("Data posted successfully!");
        		}else if(url.indexOf("/jenkin")<0 && url.indexOf("/cicddata")<0){
        		  	dhtmlx.alert("Failed to save your data! Please try again.");
        		}else if( url.indexOf("/cicddata")>0){
        			dhtmlx.alert("Posted CI/CD Job Successfully!");
        		}
        		
        		/*else if(url.indexOf("/jenkin")>=0){
        			jobcounter=jobcounter+1;
        		  	//dhtmlx.alert("Posted Jenkin Job Successfully!");
        		}*/
   			}
		}
		
		var formData = new FormData();
		formData.append("body", xml);
		http.send(formData);
		
    }
    
function reloadGrid(table){
		container=table+"_grid_container";
		widget_form=getWidgetForm(table);
    	addGridToMainForm(container,table,widget_form);
    	callCustomRowSelect(table,"reload");

} 

function selectGridRow(table,objid){
  var grid=gridlist[table];
  if(grid){
  	grid.forEachRow(function(id){
  		if(grid.cells(id,1).getValue()==objid){
		//grid.selectRow(id);
		grid.selectRowById(id);
		grid_onRowSelect_callback(grid,table,id,null);
		//return false;
		}
	 });
	}
  
}
   
function ajax_post_handler(xml, url){
  
   if (xml=="\n"){
    	return;
   }else{
   	//alert(xml);
	
     hidden_form.setItemValue("body",xml);
   
    hidden_form.send(url, "post", function(loader, response){
		post_reponse=response;
		//var x=loader.xmlDoc;
	
		if (window.DOMParser)
  		{
  			parser=new DOMParser();
  			xmlDoc=parser.parseFromString(post_reponse,"text/xml");
  		}
	   else // Internet Explorer
  		{
  			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  		    xmlDoc.async=false;
  			xmlDoc.loadXML(post_reponse); 
        } 
        var objid=xmlDoc.getElementsByTagName("cell")[0].childNodes[0].nodeValue;
        if(objid){
			current_parent_id=objid;
			if(reloadchild==false){
				setStatusBar("Updated "+current_table+":id:"+current_parent_id);
			}
	    	
	    }else{
	    	setStatusBar(current_table+":Update Failed!");
	    }
	    
	});
	
	//remove all data collection
	//xmldata={};
	
	}
}



function get(strURL,table){
		var xmlHttpReq;
	
		// Mozilla/Safari
		if (window.XMLHttpRequest) {
			xmlHttpReq = new XMLHttpRequest();
		}
		// IE
		else if (window.ActiveXObject) {
			xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
		}	
		
			xmlHttpReq.open('GET', strURL, true);
			xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xmlHttpReq.onreadystatechange = function() {
				var response=xmlHttpReq.responseText;;
				if (xmlHttpReq.readyState == 4) {	
					datafromstruct[table]=xmlHttpReq.responseText;
					toolbardatafromstruct[table]=xmlHttpReq.responseText;
				}
				if(response.indexOf("Authentication Failed for user=null")>=0){
					dhtmlx.alert("Your session got expired! Please click Refresh button on the browser!");
				}
			}
			xmlHttpReq.send(null);
		
}

function executeGet(url){
	var xmlHttpReq;
    var response;
	// Mozilla/Safari
	if (window.XMLHttpRequest) {
		xmlHttpReq = new XMLHttpRequest();
	}
	// IE
	else if (window.ActiveXObject) {
		xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}	
	
		xmlHttpReq.open('GET', url, true);
		xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlHttpReq.onreadystatechange = function() {
			if (xmlHttpReq.readyState == 4) {	
				response=xmlHttpReq.responseText;
				return response;
			}
		}
		xmlHttpReq.send(null);
	
}


function executeDownload(url,table,downloaduri,filename){
	var xmlHttpReq;
    var response;
	// Mozilla/Safari
	if (window.XMLHttpRequest) {
		xmlHttpReq = new XMLHttpRequest();
	}
	// IE
	else if (window.ActiveXObject) {
		xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}	
	
		xmlHttpReq.open('GET', url, true);
		xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xmlHttpReq.onreadystatechange = function() {
			if (xmlHttpReq.readyState == 4) {	
				response=xmlHttpReq.responseText;
				downloadURI(table,downloaduri,filename);
				return response;
			}
		}
		xmlHttpReq.send(null);
	
}
function sendURLData(data,url) {
	  var XHR = new XMLHttpRequest();
	  var urlEncodedData = "";
	  var urlEncodedDataPairs = [];
	  var name;

	  // We turn the data object into an array of URL encoded key value pairs.
	  for(name in data) {
	    urlEncodedDataPairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	  }

	  // We combine the pairs into a single string and replace all encoded spaces to 
	  // the plus character to match the behaviour of the web browser form submit.
	  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');

	  // We define what will happen if the data is successfully sent
	  XHR.addEventListener('load', function(event) {
	    alert('Yeah! Data sent and response loaded.');
	  });

	  // We define what will happen in case of error
	  XHR.addEventListener('error', function(event) {
	    alert('Oups! Something goes wrong.');
	  });

	  // We setup our request
	  XHR.open('POST', url);

	  // We add the required HTTP header to handle a form data POST request
	  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  XHR.setRequestHeader('Content-Length', urlEncodedData.length);

	  // And finally, We send our data.
	  XHR.send(urlEncodedData);
	}

function sendFormData(data, url) {
	  var XHR = new XMLHttpRequest();
	  var FD  = new FormData();

	  // We push our data into our FormData object
	  for(name in data) {
	    FD.append(name, data[name]);
	  }

	  // We define what will happen if the data are successfully sent
	  XHR.addEventListener('load', function(event) {
	    alert('Yeah! Data sent and response loaded.');
	  });
     
	 
	  // We define what will happen in case of error
	  XHR.addEventListener('error', function(event) {
	    alert('Oups! Something goes wrong.');
	  });

	  // We setup our request
	  XHR.open('POST', url);
	  // We add the required HTTP header to handle a form data POST request
	 
	  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	  

	  // We just send our FormData object, HTTP headers are set automatically
	  XHR.send(FD);
	}
function sendMessage(url, pass_message, fail_message) {
	var http;
	var xmlDoc;
	
   if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
				http=new XMLHttpRequest();
			}
		else
			{// code for IE6, IE5
				http=new ActiveXObject("Microsoft.XMLHTTP");
			}
		http.open("GET",url,true);
		http.send(null);
		
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
			   var get_reponse=http.responseText;
			   if(get_reponse.indexOf("Success")>=0){
				   dhtmlx.alert(pass_message);
			   }else{
				   dhtmlx.alert(fail_message);
  				}
  			}
    		
		}
}

function getXMLDoc(xml){
  var parser;
  var xmlDoc;
   if (window.DOMParser)
  		{
  			parser=new DOMParser();
  			xmlDoc=parser.parseFromString(xml,"text/xml");
  		}
	   else // Internet Explorer
  		{
  			xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  		    xmlDoc.async=false;
  			xmlDoc.loadXML(xml); 
        }
      return xmlDoc; 
}

function addHiddenForm(){

var str = [
		{ type:"hidden" , name:"body"  }
	];

   hidden_form = main_cell.attachForm(str);
}

function showListInGrid(grid,table){
	var colNum=grid.getColumnsNum();
	var visibility;
	var coltype="";
	var showlistcol=getShowListCols(menuid,table);
	if(showlistcol &&showlistcol.length>0){
		showCustomGridColumns(grid,showlistcol,150);
		return;
	}
   
	for( var i=0;i<colNum;i++){
	    if(coltype!=""){
	    	coltype+=",";
	    }
		if(grid.getColumnId(i).indexOf("name:")>=0 ){
			grid.setColumnHidden(i,false);
			if(colNum.length==2){
				grid.setColWidth(i,"250");
			}else{
				grid.setColWidth(i,"200");
			}
			coltype+="ro";
		}else if(grid.getColumnId(i).indexOf("choose:")==0){
			grid.setColumnHidden(i,false);
			if(skin.indexOf('terrace')>=0){
				grid.setColWidth(0,"100");
			}
			coltype+="ra";
		}else{
			grid.setColumnHidden(i,true);
			coltype+=grid.getColType(i);
		}
	}
	//grid.setColTypes(coltype);
	
}
function getGridColumnIndex(grid,colname){
	 var colNum=grid.getColumnsNum();
		
		for( var i=0;i<colNum;i++){
			if(grid.getColumnId(i).indexOf(colname)>=0 ){
				return i;
			}
		}
	return -1;
	
}

function setGridColumnValueForSelectedRow(grid,colname,value){
	 var colNum=grid.getColumnsNum();
	 var value;	
		for( var i=0;i<colNum;i++){
			if(grid.getColumnId(i).indexOf(":"+colname)>=0 ){
				grid.cells(grid.getSelectedRowId(),i).setValue(value);
				return grid.getColumnId(i);
			}
		}
	return null;
	
}

function getGridColumnValueForSelectedRow(grid,colname){
	 var colNum=grid.getColumnsNum();
	 var value;	
		for( var i=0;i<colNum;i++){
			if(grid.getColumnId(i).indexOf(":"+colname)>=0 ){
				value=grid.cells(grid.getSelectedRowId(),i).getValue();
			}
		}
	return value;
	
}

function getColumnValueByGridRowId(grid,colname,rowid){
	 var colNum=grid.getColumnsNum();
	 var value;	
		for( var i=0;i<colNum;i++){
			if(grid.getColumnId(i).indexOf(":"+colname)>=0 ){
				value=grid.cells(rowid,i).getValue();
			}
		}
	return value;
	
}



function showAllGridColumns(grid){
    
    var colNum=grid.getColumnsNum();
	
	for( var i=0;i<colNum;i++){
		if(grid.getColumnId(i).indexOf("choose:")>=0 ){
			grid.setColumnHidden(i,true);
		}else{
			grid.setColumnHidden(i,false);
		}
		
	}
	//grid.setColTypes(coltype);
	
}

function showCustomGridColumns(grid,colidx,colwidth){
	
	
var colNum=grid.getColumnsNum();
	
	for( var i=0;i<colNum;i++){
		if(grid.getColumnId(i).indexOf("choose:")>=0 ){
			grid.setColumnHidden(i,false);
			grid.setColWidth(i,"70");
		}else{
			grid.setColumnHidden(i,true);
		}
		
	}
	
	for( var i=0;i<colidx.length;i++){
		grid.setColumnHidden(colidx[i],false);
		if(colwidth){
			if(grid.getColumnId(colidx[i]).indexOf("name:")>=0 &&colidx.length==2){
				grid.setColWidth(colidx[i],250);
			}else{
				grid.setColWidth(colidx[i],colwidth);
			}
	  }
	}
	
}

function getJSONDataForResultChart(table){
	var data="";
	var grid=gridlist[table];
	var cols=getChartCols(menuid,table);
	if(grid &&cols &&cols.length>0){
		grid.forEachRow(function(id) {
		   var testcount;
	       for(var i=0;i<cols.length;i++){
	    	   var rowdata="";
	    	   var pct;
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
	       	   if(chartcolid==0 &&i==0){
	       		   testcount=value;
	       	   }
	       	   rowdata+="\"col"+chartcolid+"\":\""+collabel+"\"";
	       	   
	       	   //second col count
	       	   chartcolid++;
	       	   rowdata+=",\"col"+chartcolid+"\":\""+value+"\"";
	       	   
	       	 //3rd col % = count/ Test Count
	       	   chartcolid++;
	       	   try{
	       		 pct=Math.round((value/testcount)*100);
	       	   }catch(err){
	       		pct=0;
	       	   }
	       	   
	       	   rowdata+=",\"col"+chartcolid+"\":\""+pct+"%"+"\"";
	       	  
	       	  data+="{"+rowdata+"},"
	       }
	     
			
		});
		
		if(data!=""){
			return "[\n"+data+"\n]";
		}
	}
	
}


function getJSONDataForChart(table){
	var data="";
	var grid=gridlist[table];
	var cols=getChartCols(menuid,table);
	if(grid &&cols &&cols.length>0){
		grid.forEachRow(function(id) {
			var rowdata="";
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
	       data+="{"+rowdata+"},"
			
		});
		
		if(data!=""){
			return "[\n"+data+"\n]";
		}
	}
	
}

function getJSONDataForLineChart(table,xmaxIdx, ymaxIdx ){
	var data="";
	var ymax;
	var xmal;
	var data_ymax="";
	var data_xmax="";
	var grid=gridlist[table];
	var cols=getChartCols(menuid,table);
	if(grid &&cols &&cols.length>0){
		grid.forEachRow(function(id) {
			var rowdata="";
			if(!ymax ||!xmax){
				ymax=grid.cells(id,ymaxIdx).getValue();
				xmax=grid.cells(id,xmaxIdx).getValue();
				data_ymax="{\"col0\":\"0\",\"col1\":\""+ymax+"\",\"col2\":\""+ymax+"\"},";
				data_xmax="{\"col0\":\""+xmax+"\",\"col1\":\""+xmax+"\",\"col2\":\"0\"},";
			}
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
	       data+="{"+rowdata+"},"
			
		});
		
		if(data!=""){
			return "[\n"+data_ymax+data+data_xmax+"\n]";
		}
	}
	
}

function getJSONDataForVelocityChart(table,cols ){
	var data="";
	var ymax;
	var xmal;
	var data_ymax="";
	var data_xmax="";
	var grid=gridlist[table];
	
	if(grid &&cols &&cols.length>0){
		grid.forEachRow(function(id) {
			var rowdata="";
			/*if(!ymax ||!xmax){
				ymax=grid.cells(id,ymaxIdx).getValue();
				xmax=grid.cells(id,xmaxIdx).getValue();
				data_ymax="{\"col0\":\"0\",\"col1\":\""+ymax+"\",\"col2\":\""+ymax+"\"},";
				data_xmax="{\"col0\":\""+xmax+"\",\"col1\":\""+xmax+"\",\"col2\":\"0\"},";
			}*/
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
	       data+="{"+rowdata+"},"
			
		});
		
		if(data!=""){
			return "[\n"+data+"\n]";
		}
	}
	
}
function getJSONDatafromGrid(grid, cols){
	var data="";
	if(grid &&cols &&cols.length>0){
		grid.forEachRow(function(id) {
			var rowdata="";
	       for(var i=0;i<cols.length;i++){
	    	   var colidx=cols[i];
	       	   var value=grid.cells(id,colidx).getValue();
	       	   if(value &&i==0 &&value.length>15){
	       		   value=value.split(" ")[0];
	       	   }
	       	   if(value &&i<cols.length-1){
	       		rowdata+="\"col"+i+"\":\""+value+"\",";
	       	   }else{
	       		rowdata+="\"col"+i+"\":\""+value+"\"";
	       	   }
	       }
	       data+="{"+rowdata+"},"
			
		});
		
		if(data!=""){
			return "[\n"+data+"\n]";
		}
	}
	
}

function callCustomRowSelect(table,event){
	var custom_method=getRowSelect(menuid, table);
    if(custom_method){
    	eval(custom_method+"(\""+table+"\",\""+event+"\")");
    }
}

function callCustomFormOnChange(table){
	hideFormCols(table);
	hideFormButton(table);
	disableFormCols(table);
	disableFormButton(table);
	enableEditorToolbar(table);
	var custom_method=getFormOnChange(menuid, table);
    if(custom_method){
    	eval(custom_method+"(\""+table+"\")");
    }
}

function callCustomFormLoad(table){
	hideFormCols(table);
	hideFormButton(table);
	disableFormCols(table);
	disableFormButton(table);
	enableEditorToolbar(table);
	var custom_method=getFormLoad(menuid, table);
    if(custom_method){
    	eval(custom_method+"(\""+table+"\")");
    }
}
function hideFormCols(table){
	var hidecols=getFormColsHide(menuid, table);
	 if(hidecols){
		 var form=getDataForm(table);
		 var cols=hidecols.split(",");
		 if(form &&cols &&cols.length>0){
			 for(var i=0;i<cols.length;i++){
				 form.forEachItem(function(name){
					 if(name.indexOf(cols[i])>=0){
						 form.hideItem(name);
					 }
				 });
			 }
			
		 }
		 
	 }
}


function enableEditorToolbar(table){
	var form=getDataForm(table);
	if(form){
		try{
			form.forEachItem(function(name){
				try{
					var editor=form.getEditor(name);
					if(editor){
						editor.toolbar=true;
					 }
				  }catch(err){  }
				 
			 });
		}catch(err){}
		
	}
	
	
	
}
function disableFormCols(table){
	var disablecols=getFormDisabledFields(menuid, table);
	 if(disablecols){
		 var form=getDataForm(table);
		 var cols=disablecols.split(",");
		 if(form &&cols &&cols.length>0){
			 for(var i=0;i<cols.length;i++){
				 form.forEachItem(function(name){
					 if(name.indexOf(cols[i])>=0){
						 form.disableItem(name);
					 }
				 });
			 }
			
		 }
		 
	 }
}


function hideFormButton(table){
	var hidebuttons=getFormButtonHide(menuid, table);
	 if(hidebuttons){
		 var form=getWidgetForm(table);
		 var butons=hidebuttons.split(",");
		 if(form &&butons &&butons.length>0){
			 for(var i=0;i<butons.length;i++){
				 form.forEachItem(function(name){
					 if(butons[i] &&butons[i]!="" && name.indexOf(butons[i])>=0){
						 form.hideItem(name);
					 }
				 });
				 
				 //hide toolbar button if any
				 try{
					 widget_toolbar.hideItem(butons[i]);
					 
				 }catch(err){}
				
			 }
			
		 }
		 
	 }
	
}

function disableFormButton(table){
	var disablebuttons=getFormButtonDisabled(menuid, table);
	 if(disablebuttons){
		 var form=getWidgetForm(table);
		 var butons=disablebuttons.split(",");
		 if(form &&butons &&butons.length>0){
			 for(var i=0;i<butons.length;i++){
				 form.forEachItem(function(name){
					 if(name.indexOf(butons[i])>=0){
						 form.disableItem(name);
					 }
				 });
			 }
			
		 }
		 
	 }
	
}
function showFormButton(table, button){
	
	 if(button){
		 var form=getWidgetForm(table);
		 var butons=button.split(",");
		 if(form &&butons &&butons.length>0){
			 for(var i=0;i<butons.length;i++){
				 form.forEachItem(function(name){
					 if(name.indexOf(butons[i])>=0){
						 form.showItem(name);
					 }
				 });
			 }
			
		 }
		 
	 }
	
}
function getSyncResponse(url){
    var loader = dhtmlxAjax.getSync(url);
    var response = loader.xmlDoc.responseText;
    return(response);
 }
 

 function strtrim(str) {
    return str.replace(/^\s+|\s+$/g,"");
 }
 
function stripTags(str){
	
	if(str){
	  return str.replace(/(<([^>]+)>)/ig," ");
	}
	return str;
}
 

function grid2excel(name){

//use below commented line if you deploy the grid-excel.war
//grid.toExcel(www_url+'/XML2Excel/generate', 'color');
	var list=name.split(":");
	var table;
	var excel_url=(www_url.indexOf("localhost")>0?"http://sandbox.artitelly.com/":www_url.replace("/testrepo",""))+"/grid-excel/generate";
	if(list &&list.length==3){
		table=list[2];
		var grid=gridlist[table];
		showAllGridColumns(grid);
		grid.toExcel(excel_url);
		//grid.toExcel("http://dhtmlxgrid.appspot.com/export/excel");
		showListInGrid(grid,table);
	}else{
		dhtmlx.message("There is no table defined with download name="+name);
	}
	

}

function grid2pdf(grid){
//grid.toPDF(www_url+'/XML2PDF/generate', 'color');
	grid.toPDF("http://dhtmlxgrid.appspot.com/export/pdf");
}

function syncFirstRowGridDataToForm(form, grid){
	  
   	grid.forEachRow(function(id){
  		form.bind(grid);
		grid.setCursor(id);
		return false;
	 });
}


function syncSelectedGridDataRowToForm(form, grid,row_id){
       if(!row_id){
       	row_id=0;
       }
       
  		form.bind(grid);
		grid.setCursor(row_id);
	
}
function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 

var toggleArticles = function(id) {
	var items=document.getElementsByClassName("fullarticle")
	for (var i=0;i<items.length;i++){
		var item=items[i].style.visibility='hidden';
	}
	var names=document.getElementsByName("mytopic")
	for (var i=0;i<names.length;i++){
		var name=names[i].style.background='000000';
	}
	var element=document.getElementById(id);
	
    if(element.style.visibility=='visible'){
        element.style.visibility='hidden';
    } else {
        element.style.visibility='visible'
    }
};