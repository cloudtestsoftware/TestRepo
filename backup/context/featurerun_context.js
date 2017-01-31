

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


var featurerun_grid_context=
	[
		{ type:"fieldset" , name:"featurerun_list", label:"Feature Run List", list:[
			{ type:"container" , name:"featurerun_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featurerun_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"featurerun:featuretestresult:handle_custom_changes", value:"Feature Run Facts", width:"110", command:""  },                                                                                   
			{ type:"button" , name:"buttonfilter:featurerun:isautomated='No'", value:"Manual Test", width:"110"  },
			{ type:"button" , name:"buttonfilter:featurerun:isautomated='Yes'", value:"Automated Test", width:"110"  },
			{ type:"button" , name:"file:download:featurerun", value:"Download", width:"110"  },
			//{ type:"button" , name:"testrun:featurerun:remove_custom_table", value:"Clear", width:"110", command:""  }
			
	 ]  },
	 { type:"fieldset" , name:"featurerun_next_step", label:"Next Steps", offsetLeft:"30", list:[
	       { type:"button" , name:"scroll:testscenerio", value:"Go To Scenerio", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"featurerun_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:testrun", value:"Back To Matrixrun", width:"100"  },
	  ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featurerun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"featurerun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"featurerun_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];



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





