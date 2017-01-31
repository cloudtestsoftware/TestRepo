

var calendar_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Calendar Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"button" , name:"search:calendar", value:"Search", command:"save"  }
		]  }
	];

var cloudimage_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
   		{ type:"fieldset" , name:"search_filterset", label:"Cloud Image Filters", list:[
   		{ type:"input" , name:"name", label:"Partial Name [*]"  },
   		
   		{ type:"button" , name:"search:cloudimage", value:"Search", command:"search"  }
   		]  }
   	];

/*
var calendar_grid_context=
	[
		{ type:"fieldset" , name:"calendar_list", label:"Calendar List", list:[
			{ type:"container" , name:"calendar_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"calendar_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:calendar", value:"Create", width:"100"  },
			{ type:"button" , name:"save:calendar", value:"Save", width:"100"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"calendar_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"calendar_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"calendar_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	*/

var calendar_grid_context=
	[
	{ type:"fieldset" , name:"calendar_list", label:"Calendar List", list:[
	    
		{ type:"container" , name:"calendar_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"calendar_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"calendar_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"calendar_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"calendar_save_block", offsetLeft:"100", list:[
        { type:"button" , name:"save:calendar", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

	var calendar_toolbar=
	[
		
		{ id: "create:calendar", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:calendar", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
	]

	/*
var week_grid_context=
	[
		{ type:"fieldset" , name:"week_list", label:"Week List", list:[
			{ type:"container" , name:"week_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"week_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:week", value:"Create", width:"100"  },
			{ type:"button" , name:"save:week", value:"Save", width:"100"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"week_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"week_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"week_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	
	*/
	var week_grid_context=
		[
		{ type:"fieldset" , name:"week_list", label:"Week List", list:[
		    
			{ type:"container" , name:"week_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
			
			{ type:"newcolumn"   },
			
			{ type:"block" , name:"week_action_block", offsetLeft:"30", list:[
	        
			{ type:"container" , name:"week_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"week_datagrid_cont", inputWidth:0, inputHeight:0  },
			{ type:"block" , name:"week_save_block", offsetLeft:"100", list:[
			{ type:"button" , name:"save:week", value:"Save", width:"90",  }
			]  },
			]  },
		]  }
		
		];

	var week_toolbar=
		[
			
			{ id: "create:week", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
			{ id: "save:week", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
			
		]
	
	
/*
 var cloudimage_grid_context=
	[
		{ type:"fieldset" , name:"cloudimage_list", label:"Cloud Image List", list:[
			{ type:"container" , name:"cloudimage_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"cloudimage_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:cloudimage", value:"Create", width:"70"  },
			{ type:"button" , name:"save:cloudimage", value:"Save", width:"70"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"cloudimage_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"cloudimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"cloudimage_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	*/
	
	var cloudimage_grid_context=
		[
		{ type:"fieldset" , name:"cloudimage_list", label:"cloudimage List", list:[
		    
			{ type:"container" , name:"cloudimage_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
			
			{ type:"newcolumn"   },
			
			{ type:"block" , name:"cloudimage_action_block", offsetLeft:"30", list:[
	        
			{ type:"container" , name:"cloudimage_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"cloudimage_datagrid_cont", inputWidth:0, inputHeight:0  },
			{ type:"block" , name:"cloudimage_save_block", offsetLeft:"100", list:[
			{ type:"button" , name:"save:cloudimage", value:"Save", width:"90",  }
			]  },
			]  },
		]  }
		
		];

		var cloudimage_toolbar=
		[
			
			{ id: "create:cloudimage", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
			{ id: "save:cloudimage", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
			
		]

