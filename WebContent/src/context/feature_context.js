

var feature_main_context = [
        {type: "settings", position: "label-left", labelWidth: 150},
		{ type:"fieldset" , name:"search_filterset", label:"Feature Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Feature Name:"  },
		{ type:"input" , name:"projectname", label:"Partial Project Name:"  },
		{ type:"button" , name:"search:feature:search_custom_action", value:"Search", command:"save"  }
		]  }
	];


var featuregroup_main_context = [
         {type: "settings", position: "label-left", labelWidth: 150},
         { type:"fieldset" , name:"search_filterset", label:"Featuregroup Search Filters", list:[
         { type:"input" , name:"name", label:"Partial Group Name:"  },
         { type:"input" , name:"productname", label:"Partial Product Name:"  },
         { type:"button" , name:"search:featuregroup", value:"Search", command:"save"  }
         ]  }
       ];

/*
var feature_grid_context=
[
	{ type:"fieldset" , name:"feature_list", label:"Feature List", list:[
			{ type:"container" , name:"feature_grid_container", id:"feature_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"feature_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"feature:featuretestcount:handle_custom_changes", value:"Feature Facts", width:"100", command:""  },
			{ type:"button" , name:"create:feature", value:"Create", width:"100"  },
			{ type:"button" , name:"save:feature", value:"Save", width:"100"  },
			{ type:"button" , name:"file:download:feature", value:"Download",width:"100", command:"download:download_feature"  },
			{ type:"button" , name:"template:feature:generate_script_template", value:"Script Template", width:"100", command:"generate_template"  }
			//{ type:"button" , name:"project:feature:remove_custom_table", value:"Clear", width:"100", command:""  }
			
	 ]  },
	 { type:"fieldset" , name:"feature_add_set", label:"Addons", offsetLeft:"30", list:[
	    { type:"button" , name:"feature:tasks:handle_custom_changes", value:"Add Tasks", width:"100"  },
	    { type:"button" , name:"feature:featurelist:handle_custom_changes", value:"Add Test Group", width:"100"  },
	    //{ type:"button" , name:"feature:jenkinsjob:handle_custom_changes", value:"Add CI Jobs", width:"100"  },
	    { type:"button" , name:"feature:documents:handle_custom_changes", value:"Add Documents", width:"100"  },
	   
	 ]  },
	 { type:"fieldset" , name:"feature_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:scenerio", value:"Go To Scenario", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"feature_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:epic", value:"Back To Epic", width:"100"  },
	        { type:"button" , name:"scroll:mytasks", value:"Back To My Tasks", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"feature_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"feature_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"feature_datagrid_cont", inputWidth:0, inputHeight:0  },
			{ type:"container" , name:"feature_fileupload_cont", inputWidth:300, inputHeight:200  },
	]  }
];
*/
var feature_grid_context=
	[
	{ type:"fieldset" , name:"feature_list", label:"Feature List", list:[
	    
		{ type:"container" , name:"feature_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"feature_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"feature_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"feature_datagrid_cont", inputWidth:0, inputHeight:0  },
		
		{ type:"button" , name:"save:feature", value:"Save", width:"100"  }
		]  },
	]  },
	{ type:"block" , name:"feature_action_block",  list:[
	    { type:"container" , name:"feature_html_cont",  inputWidth:"1200", inputHeight:"300"  },
	 ]  },
	
	];

var feature_toolbar=
	[

		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Feature Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "feature:featuretestcount:handle_custom_changes", text: "feature Facts",img: "facts.gif" }
			]
		},
		
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to feature", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "feature:tasks:handle_custom_changes", text: "Add Tasks", img: "task.gif"},
				{ type: "button", id: "feature:featurelist:handle_custom_changes", text: "Add Test Group",img: "testgroup.gif" },
				{ type: "button", id: "feature:documents:handle_custom_changes", text: "Add Documents",img: "document.gif" },
				
			]
		},
		
		{ type: "separator"},
		
		{ id: "create:feature", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:feature", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "file:download:feature", type: "button", img: "download.gif",  title: "Download file", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:epic", type: "button", img: "up1.gif", title: "Previous step Epic", action:"action_button_callback"},
		{ id: "scroll:mytasks", type: "button", img: "up1.gif", title: "Previous step mytask", action:"action_button_callback"},
		{ id: "scroll:scenerio", type: "button", img: "down1.gif",  title: "Next step scenario", action:"action_button_callback" },
		{ id: "scroll:tasks", type: "button", img: "down1.gif",  title: "Next step Task", action:"action_button_callback" },
		
	]

/*
var featuretestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		{ type:"fieldset" , name:"featuretestcount_list", label:"Feature Facts", list:[
			{ type:"container" , name:"featuretestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"featuretestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"feature:featuretestcount:removeMe", value:"Close", width:"100", command:"feature:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featuretestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"featuretestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			
	]  }
	];
	*/

var featuretestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"featuretestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"featuretestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"featuretestcount_list", label:"Feature Test Facts", list:[
			{ type:"container" , name:"featuretestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"featuretestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"feature:featuretestcount:removeMe", value:"Close", width:"100", command:""  }
	 ]  }
	 
	];

var featuretestcount_toolbar=
	[
		{ id: "feature:featuretestcount:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"}
		
	]

/*
 var jenkinsjob_grid_context=
	[
		{ type:"fieldset" , name:"jenkinsjob_list", label:"Automation Job List", list:[
				{ type:"container" , name:"jenkinsjob_grid_container", id:"jenkinsjob_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jenkinsjob_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:jenkinsjob", value:"Create", width:"100"  },
				{ type:"button" , name:"save:jenkinsjob", value:"Save", width:"100"  },
				{ type:"button" , name:"feature:jenkinsjob:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jenkinsjob_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"jenkinsjob_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"jenkinsjob_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	*/

var jenkinsjob_grid_context=
	[
	{ type:"fieldset" , name:"jenkinsjob_list", label:"jenkinsjob List", list:[
	    
		{ type:"container" , name:"jenkinsjob_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"jenkinsjob_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"jenkinsjob_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"jenkinsjob_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"jenkinsjob_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:jenkinsjob", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

	var jenkinsjob_toolbar=
	[
		
		{ id: "create:jenkinsjob", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:jenkinsjob", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "feature:jenkinsjob:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"}
		
		
	]


/*var teststeps_grid_context=
	[
		{ type:"fieldset" , name:"teststeps_list", label:"Test Steps", list:[
				{ type:"container" , name:"teststeps_grid_container", id:"teststeps_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"teststeps_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:teststeps", value:"Create", width:"100"  },
				{ type:"button" , name:"save:teststeps", value:"Save", width:"100"  },
				{ type:"button" , name:"feature:teststeps:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"teststeps_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"teststeps_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"teststeps_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	*/


/*var featuregroup_grid_context=
	[
		{ type:"fieldset" , name:"featuregroup_list", label:"Feature Group List", list:[
				{ type:"container" , name:"featuregroup_grid_container", id:"featuregroup_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"featuregroup_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:featuregroup", value:"Create", width:"100"  },
				{ type:"button" , name:"save:featuregroup", value:"Save", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"featuregroup_next_steps", label:"Next Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:grouprun", value:"Go To Grouprun", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"featuregroup_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"featuregroup_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"featuregroup_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	*/

var featuregroup_grid_context=
	[
	{ type:"fieldset" , name:"featuregroup_list", label:"Featuregroup List", list:[
	    
		{ type:"container" , name:"featuregroup_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"featuregroup_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"featuregroup_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"featuregroup_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"featuregroup_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:featuregroup", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

	var featuregroup_toolbar=
	[
		
		{ id: "create:featuregroup", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:featuregroup", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:grouprun", type: "button", img: "down1.gif", title: "Next step", action:"action_button_callback"}
		
		
	]

var featurelist_grid_context=
	[
		{ type:"fieldset" , name:"featurelist_list", label:"Feature Group List", list:[
				{ type:"container" , name:"featurelist_grid_container", id:"featurelist_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"featurelist_workarea_set", label:"Work Area", offsetLeft:"130", list:[
				{ type:"container" , name:"featurelist_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"featurelist_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	
	

	var featurelist_toolbar=
		[
			{ id: "scroll:feature", type: "button", img: "up1.gif", title: "Previous step to feature", action:"action_button_callback"}
			
		]

function update_feature_status(table){
	var form=dataforms[table];
	if(form){
		
		form.forEachItem(function(name){
			if(name.indexOf("projectname")>=0){
				 form.hideItem(name);
			 }
			
	         if(name.indexOf("status")>=0){
	        	 if(!form.getItemValue(name)||form.getItemValue(name)==''){
	        		 form.setItemValue(name,'Not Started');
	        		 form.disableItem(name);
	        	 }else{
	        		 form.disableItem(name);
	        	 }
	         }
		 }
	)};
	
}

function generate_script_template(name){
	 var rowid;
	 var colidx=5;
	 var grid;
	var items=name.split(":");
	if(items &&items.length==3){
		table=items[1];
		grid=gridlist[table];
	}
	
	 if(grid){
		 try{
			 rowid=grid.getSelectedRowId();
		 }catch(err){
			 //dhtmlx.alert(err);
			 rowid=grid.getSelectedRowId();
		 }
		
		 if(rowid){
			 var objid=grid.cells(rowid,1).getValue();
			 var name=grid.cells(rowid,5).getValue();
			 var  furl=www_url+'/rest/file/tempalte?token='+token +"&refid="+objid+"&name="+name;
			 var downloadurl=www_url.replace("testrepo","").trim()+"feature/feature_template.xml";
			 executeDownload(furl,table,downloadurl,'feature_template');
			
		 }else{
			 dhtmlx.alert("Please select a row from the list to download!")
		 }
	 }
	  
	}


function update_featuregrouplist_for_feature(table,event){
	 //dhtmlx.message("Row Id="+rowId + " table="+table);
	 var grid=gridlist[table];
	
	 try{
		 if(grid &&event &&event=='onCheck'){
			 var rowid=grid.getSelectedRowId();
			 var choice=grid.cells(rowid,0).getValue();
			 var featuremap2featuregroup=grid.cells(rowid,5).getValue();
			 setDataFormFieldValue(table,"isactive",choice);
			 setDataFormFieldValue(table,"featuremap2featuregroup",featuremap2featuregroup);
			 //matrixlist should save data to matrixmap
			 saveChanges(table,"featuremap");
		 }
		       
		}catch(err){
		  dhtmlx.message(err);
		}	
		
}