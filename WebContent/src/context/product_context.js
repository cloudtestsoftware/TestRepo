

var product_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Product Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"button" , name:"search:product", value:"Search", command:"save"  }
		]  }
	];

/*
var product_grid_context=
	[
		{ type:"fieldset" , name:"product_list", label:"Product List", list:[
			{ type:"container" , name:"product_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"product_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"product:producttestcount:handle_custom_changes", value:"Product Facts", width:"100"  },
			{ type:"button" , name:"create:product", value:"Create", width:"100"  },
			{ type:"button" , name:"save:product", value:"Save", width:"100"  },
			//{ type:"button" , name:"product:product:remove_custom_table", value:"Clear", width:"100", command:""  }
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
*/

var product_grid_context=
	[
	{ type:"fieldset" , name:"product_list", label:"Product List", list:[
	    
		{ type:"container" , name:"product_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"product_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"product_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"product_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"product_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:product", value:"Save", width:"100",  }
		]  },
		]  },
	]  }
	
	];

	var product_toolbar=
	[
		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Product Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "product:producttestcount:handle_custom_changes", text: "Product Facts",img: "facts.gif" }
			]
		},
		{ id: "create:product", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:product", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:release", type: "button", img: "down1.gif", title: "Next step release", action:"action_button_callback"}
		
		
	]

	/*
var release_grid_context=
	[
		{ type:"fieldset" , name:"release_list", label:"Release List", list:[
			{ type:"container" , name:"release_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	
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
	*/

	var release_grid_context=
		[
		{ type:"fieldset" , name:"release_list", label:"Release List", list:[
		    
			{ type:"container" , name:"release_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
			
			{ type:"newcolumn"   },
			
			{ type:"block" , name:"release_action_block", offsetLeft:"30", list:[
	        
			{ type:"container" , name:"release_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"release_datagrid_cont", inputWidth:0, inputHeight:0  },
			{ type:"button" , name:"save:release", value:"Save", width:"100"  }
			]  },
		]  }
		
		];

	var release_toolbar=
		[

			{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Release Summary", openAll: true, renderSelect: false,
				options: [
					{ type: "button", id: "release:releasetestcount:handle_custom_changes", text: "Release Facts",img: "facts.gif" }
				]
			},
			
			{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to release", openAll: true, renderSelect: false,
				options: [
				    { type: "button", id: "release:documents:handle_custom_changes", text: "Add Document", img: "document.gif"},
					
				]
			},
			
			{ type: "separator"},
			
			{ id: "create:release", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
			{ id: "save:release", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
			
			{ type: "separator" },
			{ id: "scroll:product", type: "button", img: "up1.gif", title: "Previous step product", action:"action_button_callback"},
			{ id: "scroll:project", type: "button", img: "down1.gif",  title: "Next step project", action:"action_button_callback" },
			
		]

	/*
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
	*/

	var producttestcount_grid_context=
		[   
		    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		    { type:"fieldset" , name:"producttestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	        { type:"container" , name:"producttestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			]  },
			{ type:"fieldset" , name:"producttestcount_list", label:"product Facts", list:[
				{ type:"container" , name:"producttestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
				 { type:"newcolumn"   },
				{ type:"container" , name:"producttestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				
		 ]  }
		 
		];

	var producttestcount_toolbar=
		[
			{ id: "product:producttestcount:removeMe", type: "button", img: "up1.gif", title: "Previous step product", action:"action_button_callback"}
			
		]

	/*
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
	*/

	var releasetestcount_grid_context=
		[   
		    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
		    { type:"fieldset" , name:"releasetestcount_workarea_set", label:"Work Area", offsetLeft:"30", list:[
	        { type:"container" , name:"releasetestcount_chart_cont", inputWidth:"1150", inputHeight:"400"  }
			]  },
			{ type:"fieldset" , name:"releasetestcount_list", label:"release Facts", list:[
				{ type:"container" , name:"releasetestcount_grid_container", inputWidth:"500", inputHeight:"200"  },
				 { type:"newcolumn"   },
				{ type:"container" , name:"releasetestcount_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				
		 ]  }
		 
		];

	var releasetestcount_toolbar=
		[
			{ id: "release:releasetestcount:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:"action_button_callback"}
			
		]

	
	var documents_grid_context=
		[
			{ type:"fieldset" , name:"documents_list", label:"Documents List", list:[
				{ type:"container" , name:"documents_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"documents_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"documents_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"documents_fileupload_cont", inputWidth:300, inputHeight:200  },
				{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
		]  }
		];
	
	var documents_toolbar=
		[
			{ id: "make:documents:createAttachment", type: "button", img: "upload.gif", title: "Upload File", action:"action_button_callback"},
			{ id: "show:documents:getDownloadFile", type: "button", img: "download.gif", title: "Download File", action:"action_button_callback"},
			{ id: "delete:documents:deleteFile", type: "button", img: "delete.gif", title: "Delete File", action:"action_button_callback"},
			{ id: "scroll:release", type: "button", img: "up1.gif", title: "Back to Release", action:"action_button_callback"},
			{ id: "scroll:epic", type: "button", img: "up1.gif", title: "Back to epic", action:"action_button_callback"},
			{ id: "scroll:feature", type: "button", img: "up1.gif", title: "Back to feature", action:"action_button_callback"},
			
		]

	/*
var documents_grid_context=
	[
		{ type:"fieldset" , name:"documents_list", label:"Documents List", list:[
			{ type:"container" , name:"documents_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"documents_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"make:documents:createAttachment", value:"Upload", width:"100"  },
			{ type:"button" , name:"show:documents:getDownloadFile", value:"Download", width:"100"  },
			{ type:"button" , name:"delete:documents:deleteFile", value:"Delete", width:"100"  },
			//{ type:"button" , name:"bug:documents:removeMe", value:"Close", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"documents_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:release", value:"Back To Release", width:"100"  },
	        { type:"button" , name:"scroll:epic", value:"Back To Epic", width:"100"  },
	        { type:"button" , name:"scroll:feature", value:"Back To Feature", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"documents_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"documents_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"documents_fileupload_cont", inputWidth:300, inputHeight:200  },
			{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
	]  }
	];
	*/


