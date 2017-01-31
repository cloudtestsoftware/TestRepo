

var company_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Company Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		
		{ type:"button" , name:"search:company", value:"Search", command:"search"  }
		]  }
	];

var privilegegroup_main_context = [
            {type: "settings", position: "label-left", labelWidth: 130},
       		{ type:"fieldset" , name:"search_filterset", label:"Privilege Search Filters", list:[
       		{ type:"input" , name:"name", label:"Partial Name [*]"  },
       		
       		{ type:"button" , name:"search:privilegegroup", value:"Search", command:"search"  }
       		]  }
       	];


var cloudsetting_main_context = [
                               {type: "settings", position: "label-left", labelWidth: 130},
                       		{ type:"fieldset" , name:"search_filterset", label:"Cloud Search Filters", list:[
                       		{ type:"input" , name:"name", label:"Partial Name [*]"  },
                       		
                       		{ type:"button" , name:"search:cloudsetting", value:"Search", command:"search"  }
                       		]  }
                       	];

var jenkins_main_context = [
                            {type: "settings", position: "label-left", labelWidth: 130},
                    		{ type:"fieldset" , name:"search_filterset", label:"Jenkins Filters", list:[
                    		{ type:"input" , name:"name", label:"Partial Name [*]"  },
                    		
                    		{ type:"button" , name:"search:jenkins", value:"Search", command:"search"  }
                    		]  }
                    	];

/*
 var company_grid_context=
	[
		{ type:"fieldset" , name:"company_list", label:"Company List", list:[
			{ type:"container" , name:"company_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"company_action_set", label:"Actions", offsetLeft:"30", list:[
			//{ type:"button" , name:"create:company", value:"Create", width:"100"  },
			{ type:"button" , name:"save:company", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"company_next_step", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:testuser", value:"Go To User", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"company_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"company_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"company_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var company_grid_context=
	[
	{ type:"fieldset" , name:"company_list", label:"Company List", list:[
	    
		{ type:"container" , name:"company_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"company_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"company_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"company_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"company_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:company", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var company_toolbar=
	[
		
		//{ id: "create:company", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:company", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:testuser", type: "button", img: "up1.gif", title: "Back to user", action:"action_button_callback"},
		
	];

/*
var privilegegroup_grid_context=
	[
		{ type:"fieldset" , name:"privilegegroup_list", label:"Privilege List", list:[
			{ type:"container" , name:"privilegegroup_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"privilegegroup_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:privilegegroup", value:"Create", width:"100"  },
			{ type:"button" , name:"update:privilegegroup:save_privilege", value:"Save", width:"100"  },
			{ type:"button" , name:"privilegegroup:testuser:handle_custom_changes", value:"Add User", width:"100"  },
			//{ type:"button" , name:"privilegegroup:privilegegroup:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"privilegegroup_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:module", value:"Go To Module", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"privilegegroup_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"privilegegroup_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"privilegegroup_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var privilegegroup_grid_context=
	[
	{ type:"fieldset" , name:"privilegegroup_list", label:"privilegegroup List", list:[
	    
		{ type:"container" , name:"privilegegroup_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"privilegegroup_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"privilegegroup_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"privilegegroup_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"privilegegroup_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:privilegegroup", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var privilegegroup_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add Script", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "privilegegroup:testuser:handle_custom_changes", text: "Add User", img: "user.gif"},
				
			]
		},
		{ id: "create:privilegegroup", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:privilegegroup", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		
		{ id: "scroll:module", type: "button", img: "down1.gif", title: "Next step to add variables", action:"action_button_callback"}
		
	];

/*
var module_grid_context=
	[
		{ type:"fieldset" , name:"module_list", label:"Module List", list:[
			{ type:"container" , name:"module_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"module_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:module", value:"Create", width:"100"  },
			{ type:"button" , name:"save:module", value:"Save", width:"100"  },
			{ type:"button" , name:"delete:module", value:"Delete", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"module_priv_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:privilegegroup", value:"Back To Group", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"module_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"module_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"module_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var module_grid_context=
	[
	{ type:"fieldset" , name:"module_list", label:"Module List", list:[
	    
		{ type:"container" , name:"module_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"module_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"module_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"module_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"module_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:module", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var module_toolbar=
	[
		
		{ id: "create:module", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:module", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:privilegegroup", type: "button", img: "up1.gif", title: "Back to group", action:"action_button_callback"},
		
	];

/*
var cloudsetting_grid_context=
	[
		{ type:"fieldset" , name:"cloudsetting_list", label:"Cloud Setting List", list:[
			{ type:"container" , name:"cloudsetting_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"cloudsetting_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:cloudsetting", value:"Create", width:"100"  },
			{ type:"button" , name:"save:cloudsetting", value:"Save", width:"100"  }
			
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"cloudsetting_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"cloudsetting_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"cloudsetting_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var cloudsetting_grid_context=
	[
	{ type:"fieldset" , name:"cloudsetting_list", label:"Cloud Setting List", list:[
	    
		{ type:"container" , name:"cloudsetting_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"cloudsetting_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"cloudsetting_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"cloudsetting_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"cloudsetting_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:cloudsetting", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var cloudsetting_toolbar=
	[
		
		{ id: "create:cloudsetting", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:cloudsetting", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
		
	];

/*
var customerimage_grid_context=
	[
		{ type:"fieldset" , name:"customerimage_list", label:"Customer Image List", list:[
			{ type:"container" , name:"customerimage_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"customerimage_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:customerimage", value:"Create", width:"100"  },
			{ type:"button" , name:"save:customerimage", value:"Save", width:"100"  },
			{ type:"button" , name:"launch:customerimage", value:"Lunch Image", width:"100"  },
			{ type:"button" , name:"start:customerimage", value:"Start Image", width:"100"  },
			{ type:"button" , name:"stop:customerimage", value:"Stop Image", width:"100"  },
			{ type:"button" , name:"terminate:customerimage", value:"Terminate", width:"100"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"customerimage_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"customerimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"customerimage_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	
	*/

var customerimage_grid_context=
	[
	{ type:"fieldset" , name:"customerimage_list", label:"Customer Cloud Image List", list:[
	    
		{ type:"container" , name:"customerimage_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"customerimage_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"customerimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"customerimage_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"customerimage_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:customerimage", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var customerimage_toolbar=
	[
		
		{ id: "create:customerimage", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:customerimage", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "launch:customerimage", type: "button", img: "launch.gif", title: "Launch Image", action:"action_button_callback"},
		{ id: "start:customerimage", type: "button", img: "start.gif",  title: "Start Image", action:"action_button_callback" },
		{ id: "stop:customerimage", type: "button", img: "stop.gif", title: "Stop Image", action:"action_button_callback"},
		{ id: "terminate:customerimage", type: "button", img: "terminate.gif",  title: "Terminate", action:"action_button_callback" },
		
	];


/*
var jenkins_grid_context=
    [
        { type:"fieldset" , name:"jenkins_list", label:"Freelancer Developers", list:[
            { type:"container" , name:"jenkins_grid_container", inputWidth:"500", inputHeight:"400"  },
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"jenkins_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"create:jenkins", value:"Create", width:"100"  },
            { type:"button" , name:"save:jenkins", value:"Save", width:"100"  }
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"jenkins_workarea_set", label:"Work Area", offsetLeft:"30", list:[
            { type:"container" , name:"jenkins_form_cont", inputWidth:"50%", inputHeight:"100%"  },
            { type:"container" , name:"jenkins_datagrid_cont", inputWidth:0, inputHeight:0  }
    ]  }
    ];
*/

var jenkins_grid_context=
	[
	{ type:"fieldset" , name:"jenkins_list", label:"jenkins List", list:[
	    
		{ type:"container" , name:"jenkins_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"jenkins_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"jenkins_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"jenkins_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"jenkins_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:jenkins", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var jenkins_toolbar=
	[
		
		{ id: "create:jenkins", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:jenkins", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
		
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