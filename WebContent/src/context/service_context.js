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
				{ type: "button", id: "servicerepo:serviceapi:handle_custom_changes", text: "Add Service API", img: "api.gif" },
				{ type: "button", id: "servicerepo:servicedoc:handle_custom_changes", text: "Add API Template", img: "attachment.gif" },
			]
		},
		
		{ type: "separator"},
		
		{ id: "create:servicerepo", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:servicerepo", type: "button", img: "save.gif",  title: "Save", action:"" },
		
		{ type: "separator" },
		{ id: "scroll:serviceparam", type: "button", img: "down1.gif",  title: "Next step add service param", action:"" },
		
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
		
		{ id: "create:serviceauth", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:serviceauth", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:servicerepo", type: "button", img: "up1.gif", title: "Previous step servicerepo", action:"action_button_callback"}
		
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
		
		{ id: "create:serviceparam", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:serviceparam", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:servicerepo", type: "button", img: "up1.gif", title: "Previous step servicerepo", action:"action_button_callback"},
		{ id: "scroll:serviceapi", type: "button", img: "up1.gif", title: "Previous step serviceapi", action:"action_button_callback"}
		
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
		
		{ id: "make:servicedoc:createAttachment", type: "button", img: "upload.gif",  title: "Upload file", action:"action_button_callback" },
		{ id: "show:servicedoc:getDownloadFile", type: "button", img: "download.gif",  title: "Download servicedoc", action:"action_button_callback" },
		{ id: "delete:servicedoc:deleteFile", type: "button", img: "delete.gif",  title: "Delete servicedoc", action:"action_button_callback" },
		{ id: "serviceapi:servicedoc:removeMe", type: "button", img: "close.gif", title: "Close", action:"action_button_callback"},
		{ type: "separator" },
		
		{ id: "scroll:servicerepo", type: "button", img: "up1.gif", title: "Back to servicerepo", action:"action_button_callback"},
		{ id: "scroll:serviceapi", type: "button", img: "up1.gif", title: "Back to service api", action:"action_button_callback"}
		
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
				
				{ type: "button", id: "serviceapi:servicedoc:handle_custom_changes", text: "Add API Template", img: "attachment.gif" },
			]
		},
		
		{ type: "separator"},
		
		{ id: "create:serviceapi", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:serviceapi", type: "button", img: "save.gif",  title: "Save", action:"" },
		
		{ type: "separator" },
		{ id: "scroll:serviceparam", type: "button", img: "down1.gif",  title: "Next step add service param", action:"action_button_callback" },
		
	]
