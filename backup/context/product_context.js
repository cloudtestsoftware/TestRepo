

var product_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Product Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"button" , name:"search:product", value:"Search", command:"save"  }
		]  }
	];


var product_grid_context=
	[
		{ type:"fieldset" , name:"product_list", label:"Product List", list:[
			{ type:"container" , name:"product_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"product_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"product:producttestcount:handle_custom_changes", value:"Product Facts", width:"100"  },
			{ type:"button" , name:"create:product", value:"Create", width:"100"  },
			{ type:"button" , name:"save:product", value:"Save", width:"100"  },
			//{ type:"button" , name:"product:product:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"functionalgroup_add_set", label:"Addons", offsetLeft:"30", list:[
	        { type:"button" , name:"product:functionalgroup:handle_custom_changes", value:"Add Group", width:"100"  },
	  ]  },
	 { type:"fieldset" , name:"product_next_step", label:"Next Steps", offsetLeft:"30", list:[
	          { type:"button" , name:"scroll:release", value:"Go To Release", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"product_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"product_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"product_datagrid_cont", inputWidth:0, inputHeight:0  }
			
	]  }
	];

var release_grid_context=
	[
		{ type:"fieldset" , name:"release_list", label:"Release List", list:[
			{ type:"container" , name:"release_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 /*
	 { type:"fieldset" , name:"release_view_set", label:"Scroll", offsetLeft:"20", list:[
	        { type:"button" , name:"scroll:product", value:"Up",  width:"30", className: "button_up"  },
	        { type:"newcolumn"   },
	        { type:"button" , name:"scroll:project", value:"Down",  width:"40",  className: "button_down"  },
	 ]  },
	 */
	 { type:"fieldset" , name:"release_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"release:releasetestcount:handle_custom_changes", value:"Release Facts", width:"100"  },
			{ type:"button" , name:"create:release", value:"Create", width:"100"  },
			{ type:"button" , name:"save:release", value:"Save", width:"100"  },
			//{ type:"button" , name:"release:release:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"release_add_set", label:"Addons", offsetLeft:"30", list:[
	        { type:"button" , name:"release:documents:handle_custom_changes", value:"Add Documents", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"release_next_step", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:project", value:"Go To Project", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"release_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	    { type:"button" , name:"scroll:product", value:"Back To Product", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"release_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"release_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"release_datagrid_cont", inputWidth:0, inputHeight:0  }
			
	]  }
	];


var producttestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		{ type:"fieldset" , name:"producttestcount_list", label:"Product Facts", list:[
			{ type:"container" , name:"producttestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"producttestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"product:producttestcount:removeMe", value:"Close", width:"100", command:"product:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"producttestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"producttestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			
	]  }
	];

var releasetestcount_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		{ type:"fieldset" , name:"releasetestcount_list", label:"Release Facts", list:[
			{ type:"container" , name:"releasetestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"releasetestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"button" , name:"release:releasetestcount:removeMe", value:"Close", width:"100", command:"release:remove_custom_table"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"releasetestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"releasetestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			
	]  }
	];

var documents_grid_context=
	[
		{ type:"fieldset" , name:"documents_list", label:"Documents List", list:[
			{ type:"container" , name:"documents_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"documents_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"make:documents:createAttachment", value:"Upload", width:"100"  },
			{ type:"button" , name:"show:documents:getDownloadFile", value:"Download", width:"100"  },
			{ type:"button" , name:"delete:documents:deleteFile", value:"Delete", width:"100"  },
			{ type:"button" , name:"bug:documents:removeMe", value:"Close", width:"100", command:""  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"documents_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"documents_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"documents_fileupload_cont", inputWidth:300, inputHeight:200  },
			{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
	]  }
	];

var functioanlgroup_grid_context=
	[
		{ type:"fieldset" , name:"functioanlgroup_list", label:"Functional Group List", list:[
				{ type:"container" , name:"functioanlgroup_grid_container", id:"functioanlgroup_grid_container", inputWidth:"500", inputHeight:"400"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"functioanlgroup_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"create:functioanlgroup", value:"Create", width:"100"  },
				{ type:"button" , name:"save:functioanlgroup", value:"Save", width:"100"  },
				{ type:"button" , name:"product:functioanlgroup:removeMe", value:"Close", width:"100", command:""  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"functioanlgroup_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"functioanlgroup_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"functioanlgroup_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
