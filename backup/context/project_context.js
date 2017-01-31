

var project_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Project Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"select" , name:"status", label:"Project Status", inputWidth:140, options:[
					{ value:"Open", text:"Open" },
		{ value:"In Active", text:"In Progress" },
		{ value:"Closed", text:"Closed" }
			] },
		{ type:"button" , name:"search:project:search_custom_action", value:"Search", command:"save"  },
		
		]  },
		
	];

var project_grid_context=
	[
		{ type:"fieldset" , name:"project_list", label:"Project List", list:[
			{ type:"container" , name:"project_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"project_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"project:projectprogress:handle_custom_changes", value:"Project Dashboard", width:"100", command:""  },                                                                                   
	        { type:"button" , name:"project:projecttestcount:handle_custom_changes", value:"Project Facts", width:"100", command:""  },
	        { type:"button" , name:"create:project", value:"Create", width:"100"  },
	        { type:"button" , name:"save:project", value:"Save", width:"100"  },
			//{ type:"button" , name:"project:project:remove_custom_table", value:"Clear", width:"100", command:""  },
			
	 ]  },
	 { type:"fieldset" , name:"project_add_set", label:"Addons", offsetLeft:"30", list:[
            { type:"button" , name:"project:member:handle_custom_changes", value:"Add Member", width:"100"  },
            { type:"button" , name:"project:board:handle_custom_changes", value:"Add Board", width:"100"  },
	                                                                            	     
	  ]  },
	  { type:"fieldset" , name:"project_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:epic", value:"Go To Epic", width:"100"  },
	  ]  },
	  { type:"fieldset" , name:"project_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:release", value:"Back To Release", width:"100"  },
	         //{ type:"button" , name:"scroll:product", value:"Back To Product", width:"100"  },
	         
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"project_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"project_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"project_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	


var member_grid_context=
	[
		{ type:"fieldset" , name:"member_list", label:"Member List", list:[
				{ type:"container" , name:"member_grid_container", id:"member_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"member_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:member", value:"Create", width:"100"  },
				{ type:"button" , name:"save:member", value:"Save", width:"100"  },
				{ type:"button" , name:"project:member:removeMe", value:"Close", width:"100", command:""  }
				
		 ]  },
		 { type:"fieldset" , name:"member_add_set", label:"Addons", offsetLeft:"30", list:[
		         { type:"button" , name:"member:hourbooked:handle_custom_changes", value:"Hour Booked", width:"100"  },
		  ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"member_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"member_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"member_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

var board_grid_context=
	[
		{ type:"fieldset" , name:"board_list", label:"Board List", list:[
				{ type:"container" , name:"board_grid_container", id:"board_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"board_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:board", value:"Create", width:"100"  },
				{ type:"button" , name:"save:board", value:"Save", width:"100"  },
				{ type:"button" , name:"project:board:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"board_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"board_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"board_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];


var projecttestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		{ type:"fieldset" , name:"projecttestcount_list", label:"Project Facts", list:[
			{ type:"container" , name:"projecttestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"projecttestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"project:projecttestcount:removeMe", value:"Close", width:"100", command:"project:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"projecttestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"projecttestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			
	]  }
	];


var projectprogress_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		{ type:"fieldset" , name:"projectprogress_list", label:"Project Budget & Time ", list:[
			{ type:"container" , name:"projectprogress_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"projectprogress_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"project:projectprogress:removeMe", value:"Close", width:"100", command:"project:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"projectprogress_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	      { type:"select" , name:"choice", label:"Selection", inputWidth:140, options:[
                       { value:"Budget", text:"Budget" },
                       { value:"Time", text:"Time Spent" },
                       { value:"Task", text:"Task Progress" },
                       { value:"Burn", text:"Av. Hourly Rate" },
            ] },                                                                                             
			{ type:"container" , name:"projectprogress_chart1_cont", inputWidth:"350", inputHeight:"450"  },
			
	]  }
	];

var epic_grid_context=
	[
		{ type:"fieldset" , name:"epic_list", label:"Epic List", list:[
				{ type:"container" , name:"epic_grid_container", id:"epic_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"epic_action_set", label:"Actions", offsetLeft:"30", list:[
                { type:"button" , name:"epic:epictestcount:handle_custom_changes", value:"Epic Facts", width:"100", command:""  },
				{ type:"button" , name:"create:epic", value:"Create", width:"100"  },
				{ type:"button" , name:"save:epic", value:"Save", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"epic_add_set", label:"Addons", offsetLeft:"30", list:[
		        { type:"button" , name:"epic:documents:handle_custom_changes", value:"Add Documents", width:"100"  },
		        { type:"button" , name:"epic:estimation:handle_custom_changes", value:"Add Estimation", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"epic_next_step", label:"Next Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:feature", value:"Go To Feature", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"epic_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:project", value:"Back To Project", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"epic_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"epic_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"epic_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

var hourbooked_grid_context=
	[
		{ type:"fieldset" , name:"hourbooked_list", label:"HourBooked List", list:[
				{ type:"container" , name:"hourbooked_grid_container", id:"hourbooked_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"hourbooked_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:hourbooked", value:"Create", width:"100"  },
				{ type:"button" , name:"save:hourbooked", value:"Save", width:"100"  },
				{ type:"button" , name:"member:hourbooked:removeMe", value:"Close", width:"100", command:""  }
				
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"hourbooked_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"hourbooked_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"hourbooked_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

var estimation_grid_context=
	[
		{ type:"fieldset" , name:"estimation_list", label:"Estimation List", list:[
				{ type:"container" , name:"estimation_grid_container", id:"estimation_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"estimation_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:estimation", value:"Create", width:"100"  },
				{ type:"button" , name:"save:estimation", value:"Save", width:"100"  },
				{ type:"button" , name:"epic:estimation:removeMe", value:"Close", width:"100", command:""  }
				
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"estimation_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"estimation_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"estimation_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
var epictestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		{ type:"fieldset" , name:"epictestcount_list", label:"Epic Facts", list:[
			{ type:"container" , name:"epictestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"epictestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"epic:epictestcount:removeMe", value:"Close", width:"100", command:"epic:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"epictestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"epictestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			
	]  }
	];

function populate_member(table){
	var form=getDataForm(table);
	if(form){
		form.forEachItem(function(name){
			 if(name.indexOf("member2assignto")>=0){
				 var elm=form.getSelect(name);
				 var value= elm.options[elm.selectedIndex].text;
				 form.setItemValue("member:name:false:VARCHAR2",value);
			 }
		 });
	}
}
