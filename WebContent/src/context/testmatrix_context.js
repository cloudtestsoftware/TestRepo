

var testmatrix_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Test Matrix Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		
		{ type:"button" , name:"search:testmatrix", value:"Search", command:"save"  }
		]  }
	];

/*
var testmatrix_grid_context=
	[
		{ type:"fieldset" , name:"testmatrix_list", label:"Test Matrix List", list:[
			{ type:"container" , name:"testmatrix_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testmatrix_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:testmatrix", value:"Create", width:"100"  },
			{ type:"button" , name:"save:testmatrix", value:"Save", width:"100"  },
			//{ type:"button" , name:"testmatrix:testmatrix:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"testmatrix_add_set", label:"Addons", offsetLeft:"30", list:[
	       { type:"button" , name:"testmatrix:testenv:handle_custom_changes", value:"Add Test Env", width:"100"  },
	     
	 ]  },
	 { type:"fieldset" , name:"testmatrix_view_set", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:testrun", value:"Go To Matrixrun", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testmatrix_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testmatrix_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"testmatrix_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var testmatrix_grid_context=
	[
	{ type:"fieldset" , name:"testmatrix_list", label:"Testmatrix List", list:[
	    
		{ type:"container" , name:"testmatrix_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"testmatrix_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"testmatrix_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"testmatrix_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"testmatrix_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:testmatrix", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var testmatrix_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to testmatrix", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "testmatrix:testenv:handle_custom_changes", text: "Add Test Env", img: "epic.gif"},
				
			]
		},
		{ id: "create:testmatrix", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:testmatrix", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:testrun", type: "button", img: "down1.gif", title: "Go to matrix run", action:"action_button_callback"},
		
	];

/*
var testenv_grid_context=
	[
		{ type:"fieldset" , name:"testenv_list", label:"Testenv List", list:[
				{ type:"container" , name:"testenv_grid_container", id:"testenv_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"testenv_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:testenv", value:"Create", width:"100"  },
				{ type:"button" , name:"save:testenv", value:"Save", width:"100"  },
				{ type:"button" , name:"delete:testenv", value:"Delete", width:"100"  },
				{ type:"button" , name:"testmatrix:testenv:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"testenv_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"testenv_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"testenv_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
*/

var testenv_grid_context=
	[
	{ type:"fieldset" , name:"testenv_list", label:"Testenv List", list:[
	    
		{ type:"container" , name:"testenv_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"testenv_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"testenv_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"testenv_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"testenv_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:testenv", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var testenv_toolbar=
	[
		
		{ id: "create:testenv", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:testenv", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "delete:testenv", type: "button", img: "delete.gif",  title: "Delete", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "testmatrix:testenv:removeMe", type: "button", img: "up1.gif", title: "Back to previous step", action:"action_button_callback"},
		
	];


function show_testmatrix_col(table){
	var grid= gridlist[table];
	if(grid){
		var clolist=[2,3];
		showCustomGridColumns(grid,clolist)
	}
}
