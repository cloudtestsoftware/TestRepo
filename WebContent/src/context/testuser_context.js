

var testuser_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Test User Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		
		{ type:"button" , name:"search:testuser", value:"Search", command:"save"  }
		]  }
	];

/*
var testuser_grid_context=
	[
		{ type:"fieldset" , name:"testuser_list", label:"Testuser List", list:[
			{ type:"container" , name:"testuser_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testuser_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:testuser", value:"Create", width:"100"  },
			{ type:"button" , name:"save:testuser", value:"Save", width:"100"  },
			{ type:"button" , name:"delete:testuser", value:"Delete", width:"100"  },
			
			//{ type:"button" , name:"privilegegroup:testuser:removeMe", value:"Close", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"testuser_next_step", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:privilegegroup", value:"Back To Group", width:"100"  },
	        { type:"button" , name:"scroll:company", value:"Back To Company", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testuser_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testuser_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"testuser_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/
var testuser_grid_context=
	[
	{ type:"fieldset" , name:"testuser_list", label:"Testuser List", list:[
	    
		{ type:"container" , name:"testuser_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"testuser_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"testuser_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"testuser_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"testuser_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:testuser", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var testuser_toolbar=
	[
		
		{ id: "create:testuser", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:testuser", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ id: "delete:testuser", type: "button", img: "delete.gif",  title: "Delete", action:"" },
		{ type: "separator" },
		{ id: "scroll:company", type: "button", img: "up1.gif", title: "Back to company", action:""},
		{ id: "scroll:privilegegroup", type: "button", img: "up2.gif", title: "Back to Privelege Group", action:""},
		
	];

