
var weeksheet_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Timesheet Search Filters", list:[
		{ type:"input" , name:"name", label:"First Name [*]"  },
		{ type:"input" , name:"lastname", label:"Last Name "  },
		{ type:"calendar" ,format:"%m/%d/%Y" , name:"startdate", label:"Any Day Of Week"  },
		
		{ type:"button" , name:"search:weeksheet", value:"Search", command:"save"  }
		]  }
	];

/*
var weeksheet_grid_context=
	[
		{ type:"fieldset" , name:"weeksheet_list", label:"Time Entry List", list:[
			{ type:"container" , name:"weeksheet_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"feature_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"file:download:weeksheet", value:"Download",width:"100", command:""  }
			
	 ]  },
	 { type:"fieldset" , name:"timesheet_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:timesheet", value:"Go To Timesheet", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"weeksheet_workarea_set", label:"Work Area", offsetLeft:"130", list:[
			{ type:"container" , name:"weeksheet_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"weeksheet_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	*/

var weeksheet_grid_context=
	[
	{ type:"fieldset" , name:"weeksheet_list", label:"Time Entry", list:[
	    
		{ type:"container" , name:"weeksheet_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"weeksheet_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"weeksheet_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"weeksheet_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"weeksheet_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:weeksheet", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var weeksheet_toolbar=
	[
		
		{ id: "file:download:weeksheet", type: "button", img: "download.gif", title: "Download", action:""},
		
		{ type: "separator" },
		{ id: "scroll:timesheet", type: "button", img: "down1.gif", title: "Go to Timesheet", action:""},
		
	];

/*
var timesheet_grid_context=
	[
		{ type:"fieldset" , name:"timesheet_list", label:"Task Entry List", list:[
			{ type:"container" , name:"timesheet_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"timesheet_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:timesheet", value:"Create", width:"100"  },
			{ type:"button" , name:"save:timesheet", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"timesheet_next_step", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:weeksheet", value:"Back To Week", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"timesheet_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"timesheet_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"timesheet_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	*/

var timesheet_grid_context=
	[
	{ type:"fieldset" , name:"timesheet_list", label:"Timesheet List", list:[
	    
		{ type:"container" , name:"timesheet_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"timesheet_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"timesheet_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"timesheet_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"timesheet_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:timesheet", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var timesheet_toolbar=
	[
		
		{ id: "create:timesheet", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:timesheet", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		{ id: "scroll:weeksheet", type: "button", img: "up1.gif", title: "Back to week", action:""},
		
	];



function show_weeksheet_visible_col(table){
	
	var grid= gridlist[table];
	if(grid){
		var clolist=[3,6,7,9];
		showCustomGridColumns(grid,clolist,75)
	}
}