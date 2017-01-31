

var testscenerio_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Test Scenario Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Run Name [*]"  },
		{ type:"calendar" ,format:"%m/%d/%Y" , name:"duedate", label:"Due Date"  },
		{ type:"select" , name:"isautomated", label:"Automated?", inputWidth:140, options:[
		 { value:"No", text:"No" },
		 { value:"Yes", text:"Yes" }
		] },
		{ type:"select" , name:"status", label:"Run Status", inputWidth:140, options:[
		   { value:"Not Started", text:"Not Started" },
		   { value:"Passed", text:"Passed" },
		   { value:"Failed", text:"Failed" },
		   { value:"Pending", text:"Pending" },
		   { value:"Skipped", text:"Skipped" },
		   { value:"Defect", text:"Defect" },
		  
		] },
		{ type:"button" , name:"search:testscenerio", value:"Search", command:"save"  }
		]  }
	];

var testscenerio_grid_context=
	[
		{ type:"fieldset" , name:"testscenerio_list", label:"Test Scenario List", list:[
			{ type:"container" , name:"testscenerio_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testscenerio_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"file:download:testscenerio", value:"Download", width:"100"  },
			{ type:"button" , name:"scenerio:teststeps:handle_custom_changes", value:"View Tests", width:"100"  },
			
	 ]  },
	 { type:"fieldset" , name:"testscenerio_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:sceneriorun", value:"Go To Test", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"testscenerio_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:featurerun", value:"Back To Feature", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testscenerio_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testscenerio_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"testscenerio_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

var sceneriorun_grid_context=
	[
		{ type:"fieldset" , name:"sceneriorun_list", label:"Scenario Run List", list:[
			{ type:"container" , name:"sceneriorun_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"sceneriorun_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:sceneriorun", value:"Create", width:"100"  },
			{ type:"button" , name:"save:sceneriorun", value:"Save", width:"100"  },
			{ type:"button" , name:"sceneriorun:bug:handle_custom_changes", value:"Raise Defect", width:"100"  },
			//{ type:"button" , name:"sceneriorun:sceneriorun:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"sceneriorun_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:attachment", value:"Go To Attachment", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"sceneriorun_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:testscenerio", value:"Back To Scenerio", width:"100"  },
	         { type:"button" , name:"scroll:featurerun", value:"Back To Feature", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"sceneriorun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"sceneriorun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"sceneriorun_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	
function create_new_sceneriorun_form(table){
	datafromstruct['sceneriorun']=null;
}