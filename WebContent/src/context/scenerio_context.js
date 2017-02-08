

var scenerio_main_context = [
        {type: "settings", position: "label-left", labelWidth: 150},
		{ type:"fieldset" , name:"search_filterset", label:"Scenario Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Scenario Name:"  },
		{ type:"input" , name:"featurename", label:"Partial Feature Name:"  },
		{ type:"input" , name:"projectname", label:"Partial Project Name:"  },
		{ type:"button" , name:"search:scenerio:search_custom_action", value:"Search", command:"save"  }
		]  }
	];

var scenerio_grid_context=
	[
	{ type:"fieldset" , name:"scenerio_list", label:"Scenario List", list:[
	    
		{ type:"container" , name:"scenerio_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"scenerio_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"scenerio_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"scenerio_datagrid_cont", inputWidth:0, inputHeight:0  },
		
		{ type:"block" , name:"scenerio_save_block", offsetLeft:"90", list:[
		{ type:"button" , name:"save:scenerio", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

var scenerio_toolbar=
	[

		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Scenario summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "scenerio:testcount:handle_custom_changes", text: "Scenario Facts",img: "facts.gif" }
			]
		},
		
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to scenario", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "scenerio:matrixlist:handle_custom_changes", text: "Add Test Matrix", img: "testcase.gif"},
				
			]
		},
		
		{ type: "separator"},
		
		{ id: "create:scenerio", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:scenerio", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "file:download:scenerio", type: "button", img: "download.gif",  title: "Download file", action:"action_button_callback" },
		
		{ type: "separator" },
		{ id: "scroll:feature", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"},
		{ id: "scroll:teststeps", type: "button", img: "down1.gif", title: "Add Test cases", action:"action_button_callback"},
		//{ id: "scenerio:matrixlist:handle_custom_changes", type: "button", img: "down1.gif",  title: "Next step", action:"action_button_callback" },
		
	]

/*
var scenerio_grid_context=
	[
		{ type:"fieldset" , name:"scenerio_list", label:"Scenario List", list:[
				{ type:"container" , name:"scenerio_grid_container", id:"scenerio_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"scenerio_action_set", label:"Actions", offsetLeft:"30", list:[
		        { type:"button" , name:"scenerio:testcount:handle_custom_changes", value:"Scenario Facts", width:"100", command:""  },                                                                                    
				{ type:"button" , name:"create:scenerio", value:"Create", width:"100"  },
				{ type:"button" , name:"save:scenerio", value:"Save", width:"100"  },
				{ type:"button" , name:"file:download:scenerio", value:"Download",width:"100", command:"download:download_feature" },
				//{ type:"button" , name:"project:scenerio:remove_custom_table", value:"Clear", width:"100", command:""  }
				
		 ]  },
		 { type:"fieldset" , name:"scenerio_add_set", label:"Addons", offsetLeft:"30", list:[
		       { type:"button" , name:"scenerio:teststeps:handle_custom_changes", value:"Add Tests", width:"100"  },
		  ]  },
		 { type:"fieldset" , name:"scenerio_next_step", label:"Next Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:matrixlist", value:"Go To Matrix", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"scenerio_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:feature", value:"Back To Feature", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"scenerio_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"scenerio_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"scenerio_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	*/

var matrixmap_grid_context=
	[
	{ type:"fieldset" , name:"matrixmap_list", label:"Matrixmap List", list:[
	    
		{ type:"container" , name:"matrixmap_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"matrixmap_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"matrixmap_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"matrixmap_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"matrixmap_save_block", offsetLeft:"90", list:[
		{ type:"button" , name:"save:matrixmap", value:"Save", width:"100",  }
		]  },
		
		]  },
	]  }
	
	];

	var matrixmap_toolbar=
	[
		
		{ id: "create:matrixmap", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:matrixmap", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
	]
	/*
var matrixmap_grid_context=
	[
		{ type:"fieldset" , name:"matrixmap_list", label:"Matrix List", list:[
				{ type:"container" , name:"matrixmap_grid_container", id:"matrixmap_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"matrixmap_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:matrixmap", value:"Create", width:"80"  },
				{ type:"button" , name:"save:matrixmap", value:"Save", width:"80"  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"matrixmap_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"matrixmap_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"matrixmap_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

*/
	
	var matrixlist_grid_context=
		[
		{ type:"fieldset" , name:"matrixlist_list", label:"Matrixlist List", list:[
		    
			{ type:"container" , name:"matrixlist_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
			
			{ type:"newcolumn"   },
			
			{ type:"block" , name:"matrixlist_action_block", offsetLeft:"30", list:[
	        
			{ type:"container" , name:"matrixlist_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"matrixlist_datagrid_cont", inputWidth:0, inputHeight:0  },
			{ type:"block" , name:"matrixlist_save_block", offsetLeft:"90", list:[
       		{ type:"button" , name:"save:matrixlist", value:"Save", width:"100",  }
       		]  },
			]  },
		]  }
		
		];

		var matrixlist_toolbar=
		[
			
			{ id: "create:matrixlist", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
			{ id: "save:matrixlist", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
			{ type: "separator" },
			{ id: "scroll:project", type: "button", img: "home.gif", title: "Go to Project", action:"action_button_callback"},
			{ id: "scenerio:matrixlist:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"},
			//{ id: "scroll:project", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"}
			
		]
		
/*		
var matrixlist_grid_context=
	[
		{ type:"fieldset" , name:"matrixlist_list", label:"Matrix List", list:[
				{ type:"container" , name:"matrixlist_grid_container", id:"matrixlist_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"matrixlist_view_set", label:"Previous Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:scenerio", value:"Back To Scenario", width:"100"  },
		        { type:"button" , name:"scroll:project", value:"Back To Project", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"matrixlist_workarea_set", label:"Work Area", offsetLeft:"130", list:[
				{ type:"container" , name:"matrixlist_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"matrixlist_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
*/

var testcount_grid_context=
			[
			{ type:"fieldset" , name:"testcount_list", label:"Testcount List", list:[
			    
				{ type:"container" , name:"testcount_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
				
				{ type:"newcolumn"   },
				
				{ type:"block" , name:"testcount_action_block", offsetLeft:"30", list:[
		        
				{ type:"container" , name:"testcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"testcount_datagrid_cont", inputWidth:0, inputHeight:0  },

				{ type:"block" , name:"testcount_save_block", offsetLeft:"90", list:[
				{ type:"button" , name:"save:testcount", value:"Save", width:"100",  }
				]  },
				]  },
			]  }
			
			];

var testcount_toolbar=
			[
				{ id: "scenerio:testcount:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"}
				
			]
			
/*var testcount_grid_context=
	[
		{ type:"fieldset" , name:"testcount_list", label:" Facts", list:[
			{ type:"container" , name:"testcount_grid_container", inputWidth:"500", inputHeight:"500"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testcount_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"scenerio:testcount:removeMe", value:"Close", width:"100", command:"feature:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"testcount_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];

*/
var teststeps_grid_context=
	[
	{ type:"fieldset" , name:"teststeps_list", label:"Teststeps List", list:[
	    
		{ type:"container" , name:"teststeps_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"teststeps_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"teststeps_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"teststeps_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"teststeps_save_block", offsetLeft:"90", list:[
      	{ type:"button" , name:"save:teststeps", value:"Save", width:"100",  }
      	]  },
		]  },
	]  }
	
	];

	var teststeps_toolbar=
	[
		
		{ id: "create:teststeps", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:teststeps", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scenerio:teststeps:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"},
		//{ id: "scroll:testscenerio", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"},
		
		
	]
/*	
var teststeps_grid_context=
	[
		{ type:"fieldset" , name:"teststeps_list", label:"Test Steps", list:[
				{ type:"container" , name:"teststeps_grid_container", id:"teststeps_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"teststeps_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:teststeps", value:"Create", width:"100"  },
				{ type:"button" , name:"save:teststeps", value:"Save", width:"100"  },
				{ type:"button" , name:"scenerio:teststeps:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"fieldset" , name:"teststeps_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
		        //{ type:"button" , name:"scroll:scenerio", value:"Back To Scenerio", width:"100"  },
		        { type:"button" , name:"scroll:testscenerio", value:"Back To Test", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"teststeps_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"teststeps_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"teststeps_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	*/
function update_matrixlist_for_scenerio(table,event){
	 //dhtmlx.message("Row Id="+rowId + " table="+table);
	 var grid=gridlist[table];
	
	 try{
		 if(grid &&event &&event=='onCheck'){
			 var rowid=grid.getSelectedRowId();
			 var choice=grid.cells(rowid,0).getValue();
			 setDataFormFieldValue(table,"isactive",choice);
			 //matrixlist should save data to matrixmap
			 saveChanges(table,"matrixmap");
		 }
		       
		}catch(err){
		  dhtmlx.message(err);
		}	
		
}