

var project_main_context = [
        { type:"block" , name:"project_home_block", offsetLeft:"10", list:[
        { type:"container" , name:"project_home_container", inputWidth:"10", inputHeight:"10"  },
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Project Search Filters",  list:[
        
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"select" , name:"status", label:"Project Status", inputWidth:140, options:[
					{ value:"Open", text:"Open" },
		{ value:"In Active", text:"In Progress" },
		{ value:"Closed", text:"Closed" }
			] },
		{ type:"button" , name:"search:project:search_custom_action", value:"Search", command:"save"  },
		
		]  },
		]  },
		
	];

var project_grid_context=
	[
	{ type:"fieldset" , name:"project_list", label:"Project List", list:[
	    
		{ type:"container" , name:"project_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
       
		
		{ type:"block" , name:"project_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"project_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"project_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"project_save_block", offsetLeft:"100", list:[
    	{ type:"button" , name:"save:project", value:"Save", width:"100",  }
    	]  },
		]  },
	]  }
	
	];

var project_toolbar=
	[
	    
		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Project Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "project:projectprogress:handle_custom_changes", text: "Project Dashboard",img: "board.gif" },
				{ type: "button", id: "project:projecttestcount:handle_custom_changes", text: "Project Facts",img: "facts.gif" }
			]
		},
		
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to project", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "project:member:handle_custom_changes", text: "Add Member",img: "member.gif" },
				{ type: "button", id: "project:board:handle_custom_changes", text: "Add Board", img: "board.gif" },
			]
		},
		
		{ type: "separator"},
		
		{ id: "create:project", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:project", type: "button", img: "save.gif",  title: "Save", action:"" },
		
		{ type: "separator" },
		{ id: "scroll:release", type: "button", img: "up1.gif", title: "Previous step", action:""},
		{ id: "scroll:epic", type: "button", img: "down1.gif",  title: "Next step", action:"" },
		
	]


var member_grid_context=
	[
	{ type:"fieldset" , name:"member_list", label:"Member List", list:[
	    
		{ type:"container" , name:"member_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"member_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"member_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"member_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"member_save_block", offsetLeft:"100", list:[
    	{ type:"button" , name:"save:member", value:"Save", width:"100",  }
    	]  },
		]  },
	]  }
	
	];


var member_toolbar=
	[
		
		{ id: "create:member", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:member", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		{ id: "project:member:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""}
		//{ id: "scroll:project", type: "button", img: "up1.gif", title: "Previous step", action:""}
		
	]

var board_grid_context=
	[
	{ type:"fieldset" , name:"board_list", label:"board List", list:[
	    
		{ type:"container" , name:"board_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"board_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"board_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"board_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"board_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:board", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

var board_toolbar=
	[
		
		{ id: "create:board", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:board", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		//{ id: "project:board:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""}
		{ id: "scroll:project", type: "button", img: "up1.gif", title: "Previous step", action:""}
		
	]
/*
var board_grid_context=
	[
		{ type:"fieldset" , name:"board_list", label:"Board List", list:[
				{ type:"container" , name:"board_grid_container", id:"board_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  }
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

*/
var projecttestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"projecttestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"projecttestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"projecttestcount_list", label:"Project Facts", list:[
			{ type:"container" , name:"projecttestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"projecttestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  }
	 
	];

var projecttestcount_toolbar=
	[
		{ id: "project:projecttestcount:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""}
		
	]

var projectprogress_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"projectprogress_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"select" , name:"choice", label:"Selection", inputWidth:140, options:[
        { value:"Budget", text:"Budget" },
        { value:"Time", text:"Time Spent" },
        { value:"Task", text:"Task Progress" },
        { value:"Burn", text:"Av. Hourly Rate" },
        ] },                                                                                             
        { type:"container" , name:"projectprogress_chart1_cont", inputWidth:"350", inputHeight:"450"  },
        ]  },
      //{ type:"newcolumn"   },
		{ type:"fieldset" , name:"projectprogress_list", label:"Project Budget & Time ", list:[
			{ type:"container" , name:"projectprogress_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"projectprogress_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  },
	 
	 
	];

var projectprogress_toolbar=
	[
		{ id: "project:projectprogress:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""}
		
	]

var epic_grid_context=
	[
	{ type:"fieldset" , name:"epic_list", label:"Epic List", list:[
	    
		{ type:"container" , name:"epic_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"epic_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"epic_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"epic_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"epic_save_block", offsetLeft:"100", list:[
    	{ type:"button" , name:"save:epic", value:"Save", width:"100",  }
    	]  },
		]  },
	]  }
	
	];

var epic_toolbar=
	[

		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Epic Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "epic:epictestcount:handle_custom_changes", text: "Epic Facts",img: "facts.gif" }
			]
		},
		
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to epic", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "epic:documents:handle_custom_changes", text: "Add Document", img: "document.gif"},
				{ type: "button", id: "epic:estimation:handle_custom_changes", text: "Add Estimation",img: "estimation.gif" },
				
			]
		},
		
		{ type: "separator"},
		
		{ id: "create:epic", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:epic", type: "button", img: "save.gif",  title: "Save", action:"" },
		
		{ type: "separator" },
		{ id: "scroll:project", type: "button", img: "up1.gif", title: "Previous step", action:""},
		{ id: "scroll:feature", type: "button", img: "down1.gif",  title: "Next step", action:"" },
		
	]

/*
var epic_grid_context=
	[
		{ type:"fieldset" , name:"epic_list", label:"Epic List", list:[
				{ type:"container" , name:"epic_grid_container", id:"epic_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
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
*/

var hourbooked_grid_context=
	[
	{ type:"fieldset" , name:"hourbooked_list", label:"Hourbooked List", list:[
	    
		{ type:"container" , name:"hourbooked_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"hourbooked_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"hourbooked_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"hourbooked_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"hourbooked_save_block", offsetLeft:"100", list:[
    	{ type:"button" , name:"save:hourbooked", value:"Save", width:"100",  }
    	]  },
		]  },
	]  }
	
	];

	var hourbooked_toolbar=
	[
		
		{ id: "create:hourbooked", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:hourbooked", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		{ id: "epic:hourbooked:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""}
		//{ id: "scroll:project", type: "button", img: "up1.gif", title: "Previous step", action:""}
		
	]
	/*
var hourbooked_grid_context=
	[
		{ type:"fieldset" , name:"hourbooked_list", label:"HourBooked List", list:[
				{ type:"container" , name:"hourbooked_grid_container", id:"hourbooked_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
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
*/
	var estimation_grid_context=
		[
		{ type:"fieldset" , name:"estimation_list", label:"estimation List", list:[
		    
			{ type:"container" , name:"estimation_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
			
			{ type:"newcolumn"   },
			
			{ type:"block" , name:"estimation_action_block", offsetLeft:"30", list:[
	        
			{ type:"container" , name:"estimation_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"estimation_datagrid_cont", inputWidth:0, inputHeight:0  },
			{ type:"block" , name:"estimation_save_block", offsetLeft:"100", list:[
        	{ type:"button" , name:"save:estimation", value:"Save", width:"100",  }
        	]  },
			]  },
		]  }
		
		];

		var estimation_toolbar=
		[
			
			{ id: "create:estimation", type: "button", img: "create.gif", title: "Create", action:""},
			{ id: "save:estimation", type: "button", img: "save.gif",  title: "Save", action:"" },
			{ type: "separator" },
			{ id: "epic:estimation:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""}
			//{ id: "scroll:project", type: "button", img: "up1.gif", title: "Previous step", action:""}
			
		]
 /*var estimation_grid_context=
	[
		{ type:"fieldset" , name:"estimation_list", label:"Estimation List", list:[
				{ type:"container" , name:"estimation_grid_container", id:"estimation_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
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
	*/
		
		var epictestcount_grid_context=
			[   
			    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
			    { type:"fieldset" , name:"epictestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
		        { type:"container" , name:"epictestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
				]  },
				{ type:"fieldset" , name:"epictestcount_list", label:"Project Facts", list:[
					{ type:"container" , name:"epictestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
					 { type:"newcolumn"   },
					{ type:"container" , name:"epictestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
					{ type:"button" , name:"epic:epictestcount:removeMe", value:"Close", width:"100", command:"project:remove_custom_table"  }
			 ]  }
			 
			];

		var epictestcount_toolbar=
			[
				{ id: "epic:epictestcount:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""}
				
			]
/*		
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
*/






function myFunction(id) {
	dhtmlx.message("Hello id="+id);
	// console.log("myFunction called", arguments);
}
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
