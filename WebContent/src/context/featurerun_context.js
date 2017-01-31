

var featurerun_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Feature Name:"  },
		{ type:"input" , name:"runname", label:"Partial Run Name:"  },
		{ type:"input" , name:"projectname", label:"Partial Project Name:"  },
		{ type:"input" , name:"matrixname", label:"Partial Matrix Name:"  },
		{ type:"button" , name:"search:featurerun", value:"Search", command:"save"  }
		]  }
	];

/*
var featurerun_grid_context=
	[
		{ type:"fieldset" , name:"featurerun_list", label:"Feature Run List", list:[
			{ type:"container" , name:"featurerun_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featurerun_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"featurerun:featuretestresult:handle_custom_changes", value:"Feature Run Facts", width:"110", command:""  },                                                                                   
			//{ type:"button" , name:"buttonfilter:featurerun:isautomated='No'", value:"Manual Test", width:"110"  },
			//{ type:"button" , name:"myfeaturerun:featurerun:handle_custom_changes:buttonfilter:isautomated='Yes'", value:"Automated Test", width:"110"  },
			{ type:"button" , name:"file:download:featurerun", value:"Download", width:"110"  },
			//{ type:"button" , name:"testrun:featurerun:remove_custom_table", value:"Clear", width:"110", command:""  }
			
	 ]  },
	 { type:"fieldset" , name:"featurerun_next_step", label:"Next Steps", offsetLeft:"30", list:[
	       { type:"button" , name:"scroll:testscenerio", value:"Go To Scenerio", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"featurerun_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:testrun", value:"Back To Matrixrun", width:"100"  },
	        { type:"button" , name:"scroll:grouprun", value:"Back To Grouprun", width:"100"  },
	  ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featurerun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"featurerun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"featurerun_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

*/

var featurerun_grid_context=
	[
	{ type:"fieldset" , name:"featurerun_list", label:"Featurerun List", list:[
	    
		{ type:"container" , name:"featurerun_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"featurerun_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"featurerun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"featurerun_datagrid_cont", inputWidth:0, inputHeight:0  },
		
		]  },
	]  }
	
	];

var featurerun_toolbar=
	[
		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Run Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "featurerun:featuretestresult:handle_custom_changes", text: "Feature run facts",img: "facts.gif" },
				
			]
		},

		{ id: "file:download:featurerun", type: "button", img: "download.gif", title: "Download", action:"action_button_callback"},
		{ type: "separator" },
		{ id: "scroll:testrun", type: "button", img: "up1.gif", title: "Back to testrun", action:"action_button_callback"},
		{ id: "scroll:grouprun", type: "button", img: "up2.gif", title: "Back to grouprun", action:"action_button_callback"},
		{ id: "scroll:testscenerio", type: "button", img: "down1.gif", title: "Go to testscenario", action:"action_button_callback"},
		
	];

/*
var featuretestresult_grid_context=
	[
		{ type:"fieldset" , name:"featuretestresult_list", label:"Feature Run Facts", list:[
			{ type:"container" , name:"featuretestresult_grid_container", inputWidth:"500", inputHeight:"500"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featuretestresult_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"featurerun:featuretestresult:removeMe", value:"Close", width:"100", command:""  },
			{ type:"button" , name:"scroll:feature:tabwidget", value:"Back To Feature", width:"100"  },  
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featuretestresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"featuretestresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"featuretestresult_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];

*/

var featuretestresult_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"featuretestresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"featuretestresult_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"featuretestresult_list", label:"Feature Test Facts", list:[
			{ type:"container" , name:"featuretestresult_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"featuretestresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  }
	 
	];

var featuretestresult_toolbar=
	[
		{ id: "release:featuretestresult:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"},
		{ id: "scroll:feature:tabwidget", type: "button", img: "up2.gif", title: "Back to feature", action:"action_button_callback"}
		
	]
/*
var groupfeaturerun_grid_context=
	[
		{ type:"fieldset" , name:"groupfeaturerun_list", label:"Group Feature Run List", list:[
			{ type:"container" , name:"groupfeaturerun_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"groupfeaturerun_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"groupfeaturerun:featuretestresult:handle_custom_changes", value:"Feature Run Facts", width:"110", command:""  },  
			{ type:"button" , name:"file:download:groupfeaturerun", value:"Download", width:"110"  },
	 ]  },
	 { type:"fieldset" , name:"groupfeaturerun_next_step", label:"Next Steps", offsetLeft:"30", list:[
	       { type:"button" , name:"scroll:groupscenerio", value:"Go To Scenerio", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"groupfeaturerun_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:grouprun", value:"Back To Grouprun", width:"100"  },
	  ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"groupfeaturerun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"groupfeaturerun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"groupfeaturerun_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/
var groupfeaturerun_grid_context=
	[
	{ type:"fieldset" , name:"groupfeaturerun_list", label:"groupfeaturerun List", list:[
	    
		{ type:"container" , name:"groupfeaturerun_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"groupfeaturerun_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"groupfeaturerun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"groupfeaturerun_datagrid_cont", inputWidth:0, inputHeight:0  },
		
		]  },
	]  }
	
	];

var groupfeaturerun_toolbar=
	[
		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Run Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "groupfeaturerun:featuretestresult:handle_custom_changess", text: "Group Run Facts",img: "facts.gif" },
				
			]
		},

		{ id: "file:download:groupfeaturerun", type: "button", img: "download.gif", title: "Download", action:"action_button_callback"},
		{ type: "separator" },
		{ id: "scroll:grouprun", type: "button", img: "up2.gif", title: "Back to grouprun", action:"action_button_callback"},
		{ id: "scroll:groupscenerio", type: "button", img: "down1.gif", title: "Go to scenario", action:"action_button_callback"},
		
	];


