

var feature_main_context = [
        {type: "settings", position: "label-left", labelWidth: 150},
		{ type:"fieldset" , name:"search_filterset", label:"Feature Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Feature Name:"  },
		{ type:"input" , name:"projectname", label:"Partial Project Name:"  },
		{ type:"button" , name:"search:feature:search_custom_action", value:"Search", command:"save"  }
		]  }
	];



var feature_grid_context=
[
	{ type:"fieldset" , name:"feature_list", label:"Feature List", list:[
			{ type:"container" , name:"feature_grid_container", id:"feature_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"feature_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"feature:featuretestcount:handle_custom_changes", value:"Feature Facts", width:"100", command:""  },
			{ type:"button" , name:"create:feature", value:"Create", width:"100"  },
			{ type:"button" , name:"save:feature", value:"Save", width:"100"  },
			{ type:"button" , name:"file:download:feature", value:"Download",width:"100", command:"download:download_feature"  },
			//{ type:"button" , name:"project:feature:remove_custom_table", value:"Clear", width:"100", command:""  }
			
	 ]  },
	 { type:"fieldset" , name:"feature_add_set", label:"Addons", offsetLeft:"30", list:[
	    { type:"button" , name:"feature:tasks:handle_custom_changes", value:"Add Tasks", width:"100"  },
	    { type:"button" , name:"feature:jenkinsjob:handle_custom_changes", value:"Add CI Jobs", width:"100"  },
	    { type:"button" , name:"feature:documents:handle_custom_changes", value:"Add Documents", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"feature_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:scenerio", value:"Go To Scenario", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"feature_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:epic", value:"Back To Epic", width:"100"  },
	        { type:"button" , name:"scroll:mytasks", value:"Back To My Tasks", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"feature_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"feature_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"feature_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
];

var featuretestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		{ type:"fieldset" , name:"featuretestcount_list", label:"Feature Facts", list:[
			{ type:"container" , name:"featuretestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"featuretestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"feature:featuretestcount:removeMe", value:"Close", width:"100", command:"feature:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"featuretestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"featuretestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			
	]  }
	];

var jenkinsjob_grid_context=
	[
		{ type:"fieldset" , name:"jenkinsjob_list", label:"Automation Job List", list:[
				{ type:"container" , name:"jenkinsjob_grid_container", id:"jenkinsjob_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jenkinsjob_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:jenkinsjob", value:"Create", width:"100"  },
				{ type:"button" , name:"save:jenkinsjob", value:"Save", width:"100"  },
				{ type:"button" , name:"feature:jenkinsjob:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jenkinsjob_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"jenkinsjob_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"jenkinsjob_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];




function update_feature_status(table){
	var form=dataforms[table];
	if(form){
		
		form.forEachItem(function(name){
			if(name.indexOf("projectname")>=0){
				 form.hideItem(name);
			 }
			
	         if(name.indexOf("status")>=0){
	        	 if(!form.getItemValue(name)||form.getItemValue(name)==''){
	        		 form.setItemValue(name,'Not Started');
	        		 form.disableItem(name);
	        	 }else{
	        		 form.disableItem(name);
	        	 }
	         }
		 }
	)};
	
}

