var cloudprovider_main_context = [
                               {type: "settings", position: "label-left", labelWidth: 130},
                       		{ type:"fieldset" , name:"search_filterset", label:"Cloud Search Filters", list:[
                       		{ type:"input" , name:"name", label:"Partial Name [*]"  },
                       		
                       		{ type:"button" , name:"search:cloudprovider", value:"Search", command:"search"  }
                       		]  }
                       	];

/*
var cloudprovider_grid_context=
	[
		{ type:"fieldset" , name:"cloudprovider_list", label:"Provider List", list:[
			{ type:"container" , name:"cloudprovider_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"cloudprovider_action_set", label:"Actions", offsetLeft:"30", list:[
	       
	        { type:"button" , name:"create:cloudprovider", value:"Create", width:"100"  },
	        { type:"button" , name:"save:cloudprovider", value:"Save", width:"100"  },
			
	 ]  },
	 { type:"fieldset" , name:"cloudprovider_add_set", label:"Addons", offsetLeft:"30", list:[
            { type:"button" , name:"cloudprovider:createimage:handle_custom_changes", value:"Provision Image", width:"100"  },
            { type:"button" , name:"cloudprovider:launchimage:handle_custom_changes", value:"Launch Image", width:"100"  },
	                                                                            	     
	  ]  },
	  { type:"fieldset" , name:"cloudprovider_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:accesskey", value:"Go To Access", width:"100"  },
	  ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"cloudprovider_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"cloudprovider_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"cloudprovider_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var cloudprovider_grid_context=
	[
	{ type:"fieldset" , name:"cloudprovider_list", label:"Provider List", list:[
	    
		{ type:"container" , name:"cloudprovider_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"cloudprovider_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"cloudprovider_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"cloudprovider_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"cloudprovider_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:cloudprovider", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var cloudprovider_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to Cloud Provider", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "cloudprovider:createimage:handle_custom_changes", text: "Provision Image", img: "baseimage.gif"},
			    { type: "button", id: "cloudprovider:launchimage:handle_custom_changes", text: "Launch Image", img: "launchimage.gif"},
				
			]
		},
		{ id: "create:cloudprovider", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:cloudprovider", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:accesskey", type: "button", img: "down1.gif", title: "Next step to access key", action:"action_button_callback"}
		
	];

/*
var createimage_grid_context=
	[
		{ type:"fieldset" , name:"createimage_list", label:"Image List", list:[
			{ type:"container" , name:"createimage_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"createimage_action_set", label:"Actions", offsetLeft:"30", list:[
	       
	        { type:"button" , name:"create:createimage", value:"Create", width:"100"  },
	        { type:"button" , name:"save:createimage", value:"Save", width:"100"  },
	        { type:"button" , name:"provision:createimage:handle_custom_changes", value:"Provision Image", width:"100"  },
			
	 ]  },
	 { type:"fieldset" , name:"createimage_add_set", label:"Addons", offsetLeft:"30", list:[
            { type:"button" , name:"createimage:createscript:handle_custom_changes", value:"Add Script", width:"100"  },                                                                 	     
	  ]  },
	  { type:"fieldset" , name:"createimage_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:varprovision", value:"Go To Variable", width:"100"  },
	  ]  },
	  { type:"fieldset" , name:"createimage_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:cloudprovider", value:"Back To Provider", width:"100"  },
	         
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"createimage_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"createimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"createimage_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	
	*/

var createimage_grid_context=
	[
	{ type:"fieldset" , name:"createimage_list", label:"Createimage List", list:[
	    
		{ type:"container" , name:"createimage_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"createimage_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"createimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"createimage_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"createimage_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:createimage", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var createimage_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add Script", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "createimage:createscript:handle_custom_changes", text: "Add Script", img: "script.gif"},
				
			]
		},
		{ id: "create:createimage", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:createimage", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "provision:createimage:handle_custom_changes", type: "button", img: "launchimage.gif",  title: "Provision Image", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:cloudprovider", type: "button", img: "up1.gif", title: "Back to provider", action:"action_button_callback"},
		{ id: "scroll:varprovision", type: "button", img: "down1.gif", title: "Next step to add variables to provision", action:"action_button_callback"}
		
	];

/*
var launchimage_grid_context=
	[
		{ type:"fieldset" , name:"launchimage_list", label:"Image List", list:[
			{ type:"container" , name:"launchimage_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"launchimage_action_set", label:"Actions", offsetLeft:"30", list:[
	       
	        { type:"button" , name:"create:launchimage", value:"Create", width:"100"  },
	        { type:"button" , name:"save:launchimage", value:"Save", width:"100"  },
	        { type:"button" , name:"launch:launchimage", value:"Launch Image", width:"100"  },
			
			
	 ]  },
	 { type:"fieldset" , name:"launchimage_add_set", label:"Addons", offsetLeft:"30", list:[
            { type:"button" , name:"launchimage:launchscript:handle_custom_changes", value:"Add Script", width:"100"  },                                                                 	     
	  ]  },
	  { type:"fieldset" , name:"launchimage_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:varlaunch", value:"Go To Variable", width:"100"  },
	  ]  },
	  { type:"fieldset" , name:"launchimage_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:cloudprovider", value:"Back To Provider", width:"100"  },
	         
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"launchimage_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"launchimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"launchimage_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	*/

var launchimage_grid_context=
	[
	{ type:"fieldset" , name:"launchimage_list", label:"launchimage List", list:[
	    
		{ type:"container" , name:"launchimage_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"launchimage_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"launchimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"launchimage_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"launchimage_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:launchimage", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var launchimage_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add Script", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "launchimage:launchscript:handle_custom_changes", text: "Add Script", img: "script.gif"},
				
			]
		},
		{ id: "create:launchimage", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:launchimage:handle_custom_changes", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "launch:launchimage", type: "button", img: "launchimage.gif",  title: "Launch Image", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:cloudprovider", type: "button", img: "up1.gif", title: "Back to provider", action:"action_button_callback"},
		{ id: "scroll:varlaunch", type: "button", img: "down1.gif", title: "Next step to add variables to launch", action:"action_button_callback"}
		
	];

/*
var accesskey_grid_context=
    [
      { type:"fieldset" , name:"accesskey_list", label:"Provision Var List", list:[
        { type:"container" , name:"accesskey_grid_container", inputWidth:"500", inputHeight:"400"  },
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"accesskey_action_set", label:"Actions", offsetLeft:"30", list:[
        { type:"button" , name:"create:accesskey", value:"Create", width:"100"  },
        { type:"button" , name:"save:accesskey", value:"Save", width:"100"  }
        
     ]  },
     { type:"fieldset" , name:"accesskey_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
         { type:"button" , name:"scroll:cloudprovider", value:"Back To Provider", width:"100"  },
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"accesskey_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"accesskey_form_cont", inputWidth:"50%", inputHeight:"100%"  },
        { type:"container" , name:"accesskey_datagrid_cont", inputWidth:0, inputHeight:0  }
    ]  }
    ];
    */

var accesskey_grid_context=
	[
	{ type:"fieldset" , name:"accesskey_list", label:"accesskey List", list:[
	    
		{ type:"container" , name:"accesskey_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"accesskey_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"accesskey_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"accesskey_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"accesskey_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:accesskey", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var accesskey_toolbar=
	[
		
		{ id: "create:accesskey", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:accesskey", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:cloudprovider", type: "button", img: "up1.gif", title: "Back to provider", action:"action_button_callback"},
		
	];

/*
var varprovision_grid_context=
	  [
	    { type:"fieldset" , name:"varprovision_list", label:"Provision Var List", list:[
	      { type:"container" , name:"varprovision_grid_container", inputWidth:"500", inputHeight:"400"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"varprovision_action_set", label:"Actions", offsetLeft:"30", list:[
	      { type:"button" , name:"create:varprovision", value:"Create", width:"100"  },
	      { type:"button" , name:"save:varprovision", value:"Save", width:"100"  }
	      
	   ]  },
	   { type:"fieldset" , name:"varprovision_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	       { type:"button" , name:"scroll:createimage", value:"Back To Image", width:"100"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"varprovision_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	      { type:"container" , name:"varprovision_form_cont", inputWidth:"50%", inputHeight:"100%"  },
	      { type:"container" , name:"varprovision_datagrid_cont", inputWidth:0, inputHeight:0  }
	  ]  }
	  ];

*/

var varprovision_grid_context=
	[
	{ type:"fieldset" , name:"varprovision_list", label:"varprovision List", list:[
	    
		{ type:"container" , name:"varprovision_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"varprovision_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"varprovision_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"varprovision_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"varprovision_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:varprovision", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var varprovision_toolbar=
	[
		
		{ id: "create:varprovision", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:varprovision", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:createimage", type: "button", img: "up1.gif", title: "Back to Image", action:"action_button_callback"},
		
	];
/*
var varlaunch_grid_context=
	  [
	    { type:"fieldset" , name:"varlaunch_list", label:"Provision Var List", list:[
	      { type:"container" , name:"varlaunch_grid_container", inputWidth:"500", inputHeight:"400"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"varlaunch_action_set", label:"Actions", offsetLeft:"30", list:[
	      { type:"button" , name:"create:varlaunch", value:"Create", width:"100"  },
	      { type:"button" , name:"save:varlaunch", value:"Save", width:"100"  }
	      
	   ]  },
	   { type:"fieldset" , name:"varlaunch_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	      { type:"button" , name:"scroll:launchimage", value:"Back To Launch", width:"100"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"varlaunch_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	      { type:"container" , name:"varlaunch_form_cont", inputWidth:"50%", inputHeight:"100%"  },
	      { type:"container" , name:"varlaunch_datagrid_cont", inputWidth:0, inputHeight:0  }
	  ]  }
	  ];
*/
var varlaunch_grid_context=
	[
	{ type:"fieldset" , name:"varlaunch_list", label:"Launch Var List", list:[
	    
		{ type:"container" , name:"varlaunch_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"varlaunch_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"varlaunch_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"varlaunch_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"varlaunch_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:varlaunch", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var varlaunch_toolbar=
	[
		
		{ id: "create:varlaunch", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:varlaunch", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:launchimage", type: "button", img: "up1.gif", title: "Back to launch image", action:"action_button_callback"},
		
	];

/*
var createscript_grid_context=
	  [
	    { type:"fieldset" , name:"createscript_list", label:"Provision Script List", list:[
	      { type:"container" , name:"createscript_grid_container", inputWidth:"500", inputHeight:"400"  },
	      { type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"createscript_action_set", label:"Actions", offsetLeft:"30", list:[
	      { type:"button" , name:"make:createscript:createAttachment", value:"Upload", width:"100"  },
	      { type:"button" , name:"show:createscript:getDownloadFile", value:"Download", width:"100"  },
	      { type:"button" , name:"delete:createscript:deleteFile", value:"Delete", width:"100"  },
	      { type:"button" , name:"bug:createscript:removeMe", value:"Close", width:"100", command:""  }
	   ]  },
	   { type:"fieldset" , name:"createscript_view_set", label:"Previous Steps", offsetLeft:"30", list:[
	          { type:"button" , name:"scroll:createimage", value:"Back To Image", width:"100"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"createscript_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	      { type:"container" , name:"createscript_form_cont", inputWidth:"50%", inputHeight:"100%"  },
	      { type:"container" , name:"createscript_fileupload_cont", inputWidth:300, inputHeight:200  },
	      { type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
	  ]  }
	  ];
*/

var createscript_grid_context=
	[
	{ type:"fieldset" , name:"createscript_list", label:"Launch Script List", list:[
	    
		{ type:"container" , name:"createscript_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"createscript_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"createscript_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"createscript_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"container" , name:"createscript_fileupload_cont", inputWidth:300, inputHeight:200  },
		{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
		
		]  },
	]  }
	
	];

var createscript_toolbar=
	[
		
		{ id: "make:createscript:createAttachment", type: "button", img: "upload.gif", title: "Upload script file", action:"action_button_callback"},
		{ id: "show:createscript:getDownloadFile", type: "button", img: "download.gif",  title: "Download script file", action:"action_button_callback" },
		{ id: "delete:createscript:deleteFile", type: "button", img: "delete.gif", title: "Delete script file", action:"action_button_callback"},
		{ type: "separator" },
		{ id: "scroll:createimage", type: "button", img: "up1.gif", title: "Back to image", action:"action_button_callback"},
		
		
	];

/*
var launchscript_grid_context=
	  [
	    { type:"fieldset" , name:"launchscript_list", label:"Provision Script List", list:[
	      { type:"container" , name:"launchscript_grid_container", inputWidth:"500", inputHeight:"400"  },
	      { type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"launchscript_action_set", label:"Actions", offsetLeft:"30", list:[
	          { type:"button" , name:"make:launchscript:createAttachment", value:"Upload", width:"100"  },
	      { type:"button" , name:"show:launchscript:getDownloadFile", value:"Download", width:"100"  },
	      { type:"button" , name:"delete:launchscript:deleteFile", value:"Delete", width:"100"  },
	      { type:"button" , name:"bug:launchscript:removeMe", value:"Close", width:"100", command:""  }
	   ]  },
	   { type:"fieldset" , name:"launchscript_view_set", label:"Previous Steps", offsetLeft:"30", list:[
	          { type:"button" , name:"scroll:createimage", value:"Back To Image", width:"100"  },
	   ]  },
	   { type:"newcolumn"   },
	   { type:"fieldset" , name:"launchscript_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	      { type:"container" , name:"launchscript_form_cont", inputWidth:"50%", inputHeight:"100%"  },
	      { type:"container" , name:"launchscript_fileupload_cont", inputWidth:300, inputHeight:200  },
	      { type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
	  ]  }
	  ];
*/

var launchscript_grid_context=
	[
	{ type:"fieldset" , name:"launchscript_list", label:"Launch Script List", list:[
	    
		{ type:"container" , name:"launchscript_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"launchscript_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"launchscript_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"launchscript_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"container" , name:"launchscript_fileupload_cont", inputWidth:300, inputHeight:200  },
		{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
		
		]  },
	]  }
	
	];

var launchscript_toolbar=
	[
		
		{ id: "make:launchscript:createAttachment", type: "button", img: "upload.gif", title: "Upload script file", action:"action_button_callback"},
		{ id: "show:launchscript:getDownloadFile", type: "button", img: "download.gif",  title: "Download script file", action:"action_button_callback" },
		{ id: "delete:launchscript:deleteFile", type: "button", img: "delete.gif", title: "Delete script file", action:"action_button_callback"},
		{ type: "separator" },
		{ id: "scroll:createimage", type: "button", img: "up1.gif", title: "Back to image", action:"action_button_callback"},
		
		
	];
function save_privilege(name){
	
	table=name.split(":")[1];
	var module_form=dataforms['module'];
	datafromstruct['module']=null;
	if(module_form){
		module_form.unload();
		dataforms['module']=null;
	}
	
	remove_custom_table(name);
	saveChanges(table,null);

}

function set_customercloud_form_data(table){
	
	var form=dataforms[table];
	var items;
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf("2images")>=0){
				var t = form.getSelect(name);
				var text=t.options[t.selectedIndex].text;
				if(text){
					items=text.split(",");
				}
			 }
			
			if(items!=null && items.length>0){
					if(name.indexOf(":name")>=0){
						form.setItemValue(name,items[0]);
					}else if(name.indexOf("ostype")>=0){
						form.setItemValue(name,items[1]);
					}else if(name.indexOf("region")>=0){
						form.setItemValue(name,items[2]);
					}else if(name.indexOf("imageid")>=0){
						form.setItemValue(name,items[3]);
					}else if(name.indexOf("artifact")>=0){
						form.setItemValue(name,items[4]);
					}
			 }
		 });
	}
}