
var myprofile_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130}
	];


var mytasks_main_context = [
                              {type: "settings", position: "label-left", labelWidth: 130}
                      	];

var mybug_main_context = [
                            {type: "settings", position: "label-left", labelWidth: 130}
                    	];

var referral_main_context = [
                          {type: "settings", position: "label-left", labelWidth: 130}
                  	];

var mytraining_main_context = [
                             {type: "settings", position: "label-left", labelWidth: 130}
                     	];

var bookcourse_main_context = [
                               {type: "settings", position: "label-left", labelWidth: 130}
                       	];
var consultant_main_context = [
                               {type: "settings", position: "label-left", labelWidth: 130}
                       	];

var developer_main_context = [
                               {type: "settings", position: "label-left", labelWidth: 130}
                       	];
var support_main_context = [
                            {type: "settings", position: "label-left", labelWidth: 130},
                    		{ type:"fieldset" , name:"search_filterset", label:"Bug Search Filters", list:[
                    		{ type:"input" , name:"name", label:"Partial Name [*]"  },
                    		{ type:"button" , name:"search:support", value:"Search", command:"save"  }
                    		]  }
                    	];

/*
var myprofile_grid_context=
[
	{ type:"fieldset" , name:"myprofile_list", label:"My Profile", list:[
			{ type:"container" , name:"myprofile_grid_container", id:"myprofile_grid_container", inputWidth:"500", inputHeight:"400"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"myprofile_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"update:myprofile:update_testuser_profile", value:"Save", width:"100"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"myprofile_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"myprofile_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"myprofile_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
];
*/
var myprofile_grid_context=
	[
	{ type:"fieldset" , name:"myprofile_list", label:"My Profile", list:[
	    
		{ type:"container" , name:"myprofile_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"myprofile_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"myprofile_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"myprofile_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"myprofile_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:myprofile:update_testuser_profile", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var myprofile_toolbar=
	[
		{ id: "update:myprofile:update_testuser_profile", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
	];

/*
var mytasks_grid_context=
	[
		{ type:"fieldset" , name:"mytasks_list", label:"My Tasks", list:[
				{ type:"container" , name:"mytasks_grid_container", id:"mytasks_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mytasks_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"update:mytasks:update_testuser_tasks", value:"Save", width:"100"  },
				{ type:"button" , name:"subtasks:mytasks:create_testuser_tasks", value:"Add Sub Tasks", width:"100"  },
				{ type:"button" , name:"mytasks:feature:handle_custom_changes", value:"View Feature", width:"100"  },
				//{ type:"button" , name:"mytasks:mytasks:remove_custom_table", value:"Clear", width:"100", command:""  }
		 ]  },
		 { type:"fieldset" , name:"mytasks_next_step", label:"Next Steps", offsetLeft:"30", list:[
		       { type:"button" , name:"scroll:tasknote", value:"Go To Note", width:"100"  },   
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mytasks_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"mytasks_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"mytasks_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
*/

var mytasks_grid_context=
	[
	{ type:"fieldset" , name:"mytasks_list", label:"My Tasks", list:[
	    
		{ type:"container" , name:"mytasks_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"mytasks_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"mytasks_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"mytasks_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"mytasks_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:mytasks:update_testuser_tasks", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var mytasks_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to mytask", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "subtasks:mytasks:create_testuser_tasks", text: "Add Subtask", img: "task.gif"},
				
			]
		},
		{ id: "create:mytasks", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "update:mytasks:update_testuser_tasks", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "mytasks:feature:handle_custom_changes", type: "button", img: "view.gif",  title: "View Feature", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:tasknote", type: "button", img: "down1.gif", title: "Next step to add notes", action:"action_button_callback"}
		
	];

/*
var mybug_grid_context=
	[
		{ type:"fieldset" , name:"mybug_list", label:"My Bugs", list:[
				{ type:"container" , name:"mybug_grid_container", id:"mybug_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mybug_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"update:mybug:update_testuser_bug", value:"Save", width:"100"  },
				{ type:"button" , name:"mybug:bugscenerio:handle_custom_changes", value:"Scenerio", width:"100"  },
				{ type:"button" , name:"mybug:attachment:handle_custom_changes", value:"Attachments", width:"100", command:""},
				{ type:"button" , name:"file:download:bug", value:"Download", width:"100"  },
				//{ type:"button" , name:"mybug:mybug:remove_custom_table", value:"Clear", width:"100", command:""  }
		 ]  },
		 { type:"fieldset" , name:"bug_view_set", label:"Next Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:resolution", value:"Go To Resolution", width:"100"  }, 
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mybug_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"mybug_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"mybug_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
*/

var mybug_grid_context=
	[
	{ type:"fieldset" , name:"mybug_list", label:"My Bugs", list:[
	    
		{ type:"container" , name:"mybug_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"mybug_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"mybug_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"mybug_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"mybug_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:mybug", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var mybug_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to mybug", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "mybug:attachment:handle_custom_changes", text: "Add Attachments", img: "attachment.gif"},
				
			]
		},
		
		{ id: "update:mybug:update_testuser_bug", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "mybug:bugscenerio:handle_custom_changes", type: "button", img: "scenario.gif",  title: "View Scenario", action:"action_button_callback" },
		{ id: "file:download:bug", type: "button", img: "download.gif", title: "Download bugs", action:"action_button_callback"},
		{ type: "separator" },
		{ id: "scroll:resolution", type: "button", img: "down1.gif", title: "Next step to add resolution", action:"action_button_callback"}
		
	];

/*
var referral_grid_context=
	[
		{ type:"fieldset" , name:"referral_list", label:"Referral List", list:[
			{ type:"container" , name:"referral_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"referral_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:referral", value:"Create", width:"100"  },
			{ type:"button" , name:"send:referral:send_referral", value:"Send", width:"100"  },
			{ type:"button" , name:"claim:referral:make_claim", value:"Make Claim", width:"100"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"referral_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"referral_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"referral_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var referral_grid_context=
	[
	{ type:"fieldset" , name:"referral_list", label:"Referral List", list:[
	    
		{ type:"container" , name:"referral_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"referral_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"referral_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"referral_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"referral_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"send:referral:send_referral", value:"Send", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var referral_toolbar=
	[
		
		{ id: "create:referral", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "send:referral:send_referral", type: "button", img: "send.gif",  title: "Send", action:"action_button_callback" },
		{ id: "claim:referral:make_claim", type: "button", img: "claim.gif",  title: "Make A Claim", action:"action_button_callback" },
		
		
	];

/*
var support_grid_context=
	[
		{ type:"fieldset" , name:"support_list", label:"Support List", list:[
			{ type:"container" , name:"support_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"support_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:support", value:"Create", width:"100"  },
			{ type:"button" , name:"save:support", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"support_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:supportnote", value:"Go To Note", width:"100"  }, 
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"support_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"support_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"support_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/
var support_grid_context=
	[
	{ type:"fieldset" , name:"support_list", label:"Support List", list:[
	    
		{ type:"container" , name:"support_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"support_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"support_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"support_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"support_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:support", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var support_toolbar=
	[
		
		{ id: "create:support", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:support", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:supportnote", type: "button", img: "down1.gif", title: "Add notes", action:"action_button_callback"},
		
	];

/*
var supportnote_grid_context=
	[
		{ type:"fieldset" , name:"supportnote_list", label:"Notes", list:[
			{ type:"container" , name:"supportnote_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"supportnote_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:supportnote", value:"Create", width:"100"  },
			{ type:"button" , name:"save:supportnote", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"support_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:support", value:"Back To Support", width:"100"  }, 
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"supportnote_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"supportnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"supportnote_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/
var supportnote_grid_context=
	[
	{ type:"fieldset" , name:"supportnote_list", label:"supportnote List", list:[
	    
		{ type:"container" , name:"supportnote_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"supportnote_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"supportnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"supportnote_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"supportnote_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:supportnote", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var supportnote_toolbar=
	[
		
		{ id: "create:supportnote", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:supportnote", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:support", type: "button", img: "up1.gif", title: "Back to support", action:"action_button_callback"},
		
	];

/*
var consultant_grid_context=
    [
        { type:"fieldset" , name:"consultant_list", label:"Consultant Booking", list:[
            { type:"container" , name:"consultant_grid_container", inputWidth:"500", inputHeight:"400"  },
            { type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"consultant_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"create:consultant", value:"Create", width:"100"  },
            { type:"button" , name:"save:consultant", value:"Save", width:"100"  }
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"consultant_workarea_set", label:"Work Area", offsetLeft:"30", list:[
            { type:"container" , name:"consultant_form_cont", inputWidth:"50%", inputHeight:"100%"  },
            { type:"container" , name:"consultant_datagrid_cont", inputWidth:0, inputHeight:0  }
    ]  }
    ];
*/
var consultant_grid_context=
	[
	{ type:"fieldset" , name:"consultant_list", label:"Consultant List", list:[
	    
		{ type:"container" , name:"consultant_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"consultant_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"consultant_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"consultant_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"consultant_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:consultant", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var consultant_toolbar=
	[
		
		{ id: "create:consultant", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:consultant", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
	];

/*
var developer_grid_context=
    [
        { type:"fieldset" , name:"developer_list", label:"Freelancer Developers", list:[
            { type:"container" , name:"developer_grid_container", inputWidth:"500", inputHeight:"400"  },
            { type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"developer_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"create:developer", value:"Create", width:"100"  },
            { type:"button" , name:"save:developer", value:"Save", width:"100"  }
     ]  },
     { type:"fieldset" , name:"developer_next_steps", label:"Next Steps", offsetLeft:"30", list:[
            { type:"button" , name:"scroll:resume", value:"Go To Resume", width:"100"  },
     ]  },
     { type:"newcolumn"   },
     { type:"fieldset" , name:"developer_workarea_set", label:"Work Area", offsetLeft:"30", list:[
            { type:"container" , name:"developer_form_cont", inputWidth:"50%", inputHeight:"100%"  },
            { type:"container" , name:"developer_datagrid_cont", inputWidth:0, inputHeight:0  }
    ]  }
    ];
*/
var developer_grid_context=
	[
	{ type:"fieldset" , name:"developer_list", label:"Developer List", list:[
	    
		{ type:"container" , name:"developer_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"developer_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"developer_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"developer_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"developer_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:developer", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var developer_toolbar=
	[
		
		{ id: "create:developer", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:developer", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:resume", type: "button", img: "down1.gif", title: "Next to resume", action:"action_button_callback"},
		
	];

/*
var resume_grid_context=
	[
		{ type:"fieldset" , name:"resume_list", label:"Attachment List", list:[
			{ type:"container" , name:"resume_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"resume_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"make:resume:createAttachment", value:"Attachment", width:"100"  },
			{ type:"button" , name:"show:resume:getDownloadFile", value:"Download", width:"100"  },
			{ type:"button" , name:"delete:resume:deleteFile", value:"Delete", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"resume_priv_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:developer", value:"Back To Developer", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"resume_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"resume_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"resume_fileupload_cont", inputWidth:300, inputHeight:200  },
			{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
	]  }
	];
	*/

var resume_grid_context=
	[
	{ type:"fieldset" , name:"resume_list", label:"Resume List", list:[
	    
		{ type:"container" , name:"resume_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"resume_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"resume_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"resume_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"resume_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"make:resume:createAttachment", value:"Attach Resume", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var resume_toolbar=
	[
		
		{ id: "make:resume:createAttachment", type: "button", img: "attachment.gif", title: "Attachment", action:"action_button_callback"},
		{ id: "show:resume:getDownloadFile", type: "button", img: "download.gif",  title: "Download", action:"action_button_callback" },
		{ id: "delete:resume:deleteFile", type: "button", img: "delete.gif",  title: "Delete", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:developer", type: "button", img: "up1.gif", title: "Back to developer", action:"action_button_callback"},
		
	];

function disable_referral_items(table){
	
	var form=getDataForm(table);
	disableFormCols(table);
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf("referralstatus")>=0){
				var t = form.getSelect(name);
				var value=t.options[t.selectedIndex].value;
				var widget_form=widgetforms[table];
				if(value=='Trained' &&widget_form){
					widget_form.enableItem("claim:referral:make_claim");
				}else if(widget_form && value!='Trained'){
					widget_form.disableItem("claim:referral:make_claim");
					
				}
			}
			if(name.indexOf("message")>=0){
				var message=" Hi {Friend},   \n\t I am forwarding you this website www.artitelly.biz.   \n\n\t They provide completely free cloud based"+
				" integrated test repository management, project management, execution, sprint planning, bug tracking, time management solution with multiple "+ 
				" \tcustom reports, graphs and analytics within single application suite in cloud.     "+
				"\n\n\tThese are very helpful to our team to roll out release cycles faster with better quality, fastest execution cycles, results and reports "+
				" and also with faster decision making process helping our QE organization to look better.     \n\tWe are very happy to find this solution in cloud which surely better than JIRA or other solutions.   "+
				"\n\t Our company is currently using this solution and it is completely free for any size of company.   "+
				"\n\n\t Please try out using this URL http://sandbox.artitelly.com/testrepo/service . If you like, you can promote yourself to the production very easily.     "+
				"\n\n\t Thank you,    \n{Yours}";
				var editor=form.getEditor(name).setContent(message);
			}
				
		 });
	}
	
}
function send_referral(name){
	var items=name.split(":");
	var table=items[1];
	var form=getDataForm(table);
	saveChanges(table, null);
	
	var sendto;
	var message;
	var friend;
	var payee;
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf(":name:")>=0){
				friend=form.getItemValue(name);
			}
			if(name.indexOf(":payee:")>=0){
				payee=form.getItemValue(name);
			}
			if(name.indexOf(":email:")>=0){
				sendto= form.getItemValue(name);
			 }else  if(name.indexOf("message")>=0){
				 message= stripTags(form.getItemValue(name));
				 //message= form.getEditor(name).getContent();
			 }
		 });
		if(friend){
			message=message.replace("{Friend}",friend);
		}
		if(payee){
			message=message.replace("{Yours}",payee);
		}
		var email_url=www_url+"/rest/email/sendmessage?token="+token+"&sendto="+sendto+"&reason=referral&message="+message;
		var pass="Message sent successful!";
		var fail="Failed to send email to the receipent!";
		
		sendMessage(email_url,pass,fail);
	}
	
	
}

function make_claim(table){
	 //dhtmlx.message("Row Id="+rowId + " table="+table);
	 var data_form=dataforms[table];
	 var url=www_url+'/rest/referral';
	 var objid;
	 var data;
	 var response
	 try{
		  data_form.forEachItem(function(name){
			  var objid;
	          if(name.indexOf("objid")>=0){
	        	  objid=form.getItemValue(name);
	          }
	          if(objid){
	        	  url+="/"+objid+"/update"
	        	  data="referralstatus='Claim Issued'";
	          }
	         
			  if(data){
			       url+='?token='+token +'&data='+data;
			       response=executeGet(url);
			  }else{
				  if(debug){
					  dhtmlx.message("method>>make_claim >> No data to update!")
				  }
				 
			  }
		  });
	 }catch(err){
		 dhtmlx.message(err);
		 return null;
	}	
		return response;
}

function update_testuser_profile(name){
	var items=name.split(":");
	var table=items[1];
	var form=getDataForm(table);
	var verifypassword;
	var password;
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf("verifypassword")>=0){
				verifypassword= form.getItemValue(name);
			 }else  if(name.indexOf("password")>=0){
				 password= form.getItemValue(name);
			 }
		 });
	}
	 
	if(verifypassword && password &&password!=verifypassword){
		dhtmlx.alert("your password and verify password does not match!, Please enter same!")
		return false;
	}
	saveChanges(table, "testuser");
}

function update_testuser_tasks(name){
	var items=name.split(":");
	var table=items[1];
	
	if(!verify_row(table)){
		return;
	}
	
	var form=getDataForm(table);
	var storypoint;
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf("storypoint")>=0){
				storypoint= form.getItemValue(name);
				if(storypoint==""){
					form.setItemValue(name,0);
				}
			 }
			
		 });
	}
	//dataforms["tasks"]=form;
	saveChanges(table, "tasks");
}

function verify_row(table){
	var rowid;
	var grid=gridlist[table];
	if(grid){
		rowid=grid.getSelectedRowId();
		if(!rowid){
			dhtmlx.alert("Please select a row to create or save your work!");
			return false;
		}
	}
	return true;
	
}

function create_testuser_tasks(name){
	var items=name.split(":");
	var table=items[1];
	var grid=gridlist[table];
	var rowid;
	if(grid){
		rowid=grid.getSelectedRowId();
		if(!rowid){
			dhtmlx.alert("Please select a row to add sub tasks");
		}else{
			verify_row(table);
			handle_create_changes(name);
			var  colIdx=0;
			grid.forEachCell(rowid,function(c){
		           
		           try{
		           		var colid=grid.getColumnId(colIdx);
		           		var value=grid.cells(rowid,colIdx).getValue();
		           		
		           		if(colid.indexOf('tasks2')>=0){
		           			dataforms[table].setItemValue(colid, value);
		           		}
		           		if(colid.indexOf('storypoint')>=0){
		           			dataforms[table].setItemValue(colid, "2");
		           		}
		           
		           }catch(err){
		              dhtmlx.message('Error='+err +'  name='+ colid+ '  value='+value +'  type='+ type);
		             
		           }
		           colIdx++;
		        });
			
		}
	}
	
}


function update_testuser_bug(name){
	var items=name.split(":");
	var table=items[1];
	
	if(!verify_row(table)){
		return;
	}
	
	//dataforms["tasks"]=form;
	saveChanges(table, "bug");
}

