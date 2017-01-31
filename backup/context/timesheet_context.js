
var weeksheet_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Timesheet Search Filters", list:[
		{ type:"input" , name:"name", label:"First Name [*]"  },
		{ type:"input" , name:"lastname", label:"Last Name "  },
		{ type:"calendar" ,format:"%m/%d/%Y" , name:"startdate", label:"Any Day Of Week"  },
		
		{ type:"button" , name:"search:weeksheet", value:"Search", command:"save"  }
		]  }
	];


var weeksheet_grid_context=
	[
		{ type:"fieldset" , name:"weeksheet_list", label:"Time Entry List", list:[
			{ type:"container" , name:"weeksheet_grid_container", inputWidth:"500", inputHeight:"400"  },
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

var timesheet_grid_context=
	[
		{ type:"fieldset" , name:"timesheet_list", label:"Task Entry List", list:[
			{ type:"container" , name:"timesheet_grid_container", inputWidth:"500", inputHeight:"400"  },
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


function show_weeksheet_visible_col(table){
	
	var grid= gridlist[table];
	if(grid){
		var clolist=[3,6,7,9];
		showCustomGridColumns(grid,clolist,75)
	}
}