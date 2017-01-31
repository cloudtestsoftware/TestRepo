

var testrun_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Matrixrun Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"select" , name:"status", label:"Run Status", inputWidth:140, options:[
		  { value:"Open", text:"Active" },
		  { value:"In Active", text:"Expired" }
		] },
		{ type:"button" , name:"search:testrun", value:"Search", command:"save"  }
		]  }
	];


var testrun_grid_context=
	[
		{ type:"fieldset" , name:"testrun_list", label:"Matrixtrun List", list:[
			{ type:"container" , name:"testrun_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrun_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"testrun:testrunresult:handle_custom_changes", value:"Matrixrun Facts", width:"100", command:""  },                                                                                
			{ type:"button" , name:"create:testrun", value:"Create", width:"100"  },
			{ type:"button" , name:"save:testrun", value:"Save", width:"100"  },
			{ type:"button" , name:"testrun:jobrun:handle_custom_changes", value:"Run Job ", width:"100"  },
			//{ type:"button" , name:"testrun:testrun:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"testrun_next_step", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:featurerun", value:"Go To Featurerun", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"testrun_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:testmatrix", value:"Back To Matrix", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testrun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"testrun_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

var testrunresult_grid_context=
	[
		{ type:"fieldset" , name:"testrunresult_list", label:"Matrix Run Facts", list:[
			{ type:"container" , name:"testrunresult_grid_container", inputWidth:"500", inputHeight:"500"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrunresult_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"testrun:testrunresult:removeMe", value:"Close", width:"100", command:""  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrunresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testrunresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"testrunresult_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];

var jobrun_grid_context=
	[
		{ type:"fieldset" , name:"jobrun_list", label:"Job Launch", list:[
				{ type:"container" , name:"jobrun_grid_container", id:"jobrun_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jobrun_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"automation:jobrun:post_run_job", value:"Run", width:"100"  },
				{ type:"button" , name:"feature:jobrun:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jobrun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"jobrun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"jobrun_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

function set_base_url(table){
	var form=dataforms[table];
	
	form.forEachItem(function(name){
      	if(name.indexOf("serviceurl")>=0){
      	  	form.setItemValue(name,www_url);
      	}
     
 	});
	
}

function post_run_job(name){
	var items=name.split(":");
	var table=items[1];
	saveChanges(table, "jenkin");
}

