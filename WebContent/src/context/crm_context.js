

var mycontact_main_context = [
                              {type: "settings", position: "label-left", labelWidth: 130}
                      	];

var mylead_main_context = [
                            {type: "settings", position: "label-left", labelWidth: 130}
                    	];

var lead_main_context = [
                            {type: "settings", position: "label-left", offsetLeft:"30" ,labelWidth: 200},
                    		{ type:"fieldset" , name:"search_filterset", label:"Lead Search Filters", list:[
                    		{ type:"input" , name:"name", label:"Partial Contact First Name [*]"  },
                    		{ type:"input" , name:"lastname", label:"Partial Last Name [*]"  },
                    		{ type:"input" , name:"agentid", label:"Agent Id"  },
                    		{ type:"input" , name:"company", label:"Company"  },
                    		{ type:"select" , name:"leadstage", label:"Lead Stage", inputWidth:140, options:[
                    		         { value:"", text:"All" },
                    		         { value:"Raw", text:"Raw" },
                    		         { value:"Call", text:"Call" },
                    		         { value:"Appointment", text:"Appointment" },
                    		         { value:"Contact", text:"Contact" },  
                    		         { value:"Opportunity", text:"Opportunity" },
                    		         { value:"Customer", text:"Customer" },
                    		         { value:"Closed", text:"Closed" }
                    		] },
                    		{ type:"select" , name:"leadstatus", label:"Followup Status", inputWidth:140, options:[
                    		         { value:"", text:"None" },
                                     { value:"Intro Email", text:"Intro Email" },
                                     { value:"Appointment Email", text:"Appointment Email" },
                                     { value:"Followupd Email", text:"Followupd Email" },
                                     { value:"1st Phone Call", text:"1st Phone Call" },
                                     { value:"2nd Phone Call", text:"2nd Phone Call" },
                                     { value:"3rd Phone Call", text:"3rd Phone Call" },
                                     { value:"4th Phone Call", text:"4th Phone Call" },
                                     { value:"5th Phone Call", text:"5th Phone Call" },
                                     { value:"Closed", text:"Closed" }
                                     ] },
                            { type:"select" , name:"leadsource", label:"Lead Source", inputWidth:140, options:[
                                    { value:"", text:"None" },
                                    { value:"Internet Survey", text:"Internet Survey" },
                                    { value:"Networking", text:"Networking" },
                                    { value:"Events", text:"Events" },
                                    { value:"Trade Show", text:"Trade Show" },
                                    { value:"Google Search", text:"Google Search" },
                                    { value:"Internet Search", text:"Internet Search" },
                                    { value:"Google Ads", text:"Google Ads" },
                                    { value:"Facebook Ads", text:"Facebook Ads" },
                                    { value:"LinkedIn Ads", text:"LinkedIn Ads" },
                                    { value:"Twitter Ads", text:"Twitter Ads" },
                                    { value:"Reference", text:"Reference" },
                                    { value:"Friends", text:"Friends" },
                                    { value:"Other Ads", text:"Other Ads" }
                                    ] },
                    		{ type:"button" , name:"search:lead", value:"Search", command:"search"  },                                                                      		 
                    		 { type:"newcolumn" },
                    		{ type:"input" , name:"city", label:"City"  },
                    		{ type:"input" , name:"zipcode", label:"Zip Code"  },
                    		{ type:"input" , name:"mobile", label:"Mobile No"  },
                    		{ type:"input" , name:"officephone", label:"Office No"  },
                    		{ type:"calendar" ,format:"%m/%d/%Y" , name:"gendate", label:"Entry Date"  },
                    		{ type:"input" , name:"withindays", label:"Within Days", value:"30"  },
                    		{ type:"input" , name:"rownum", label:"No of Records", value:"30"  },
                    		
                    		]  }
                    	];

var contact_main_context = [
                         {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
                 		{ type:"fieldset" , name:"search_filterset", label:"Contact Search Filters", list:[
                 		{ type:"input" , name:"name", label:"Partial Contact First Name [*]"  },
                 		{ type:"input" , name:"lastname", label:"Partial Last Name [*]"  },
                 		{ type:"input" , name:"agentid", label:"Agent Id"  },
                 		{ type:"input" , name:"company", label:"Company"  },
                 		{ type:"select" , name:"contactstage", label:"Contact Stage", inputWidth:140, options:[
                 		   { value:"", text:"All" },
	                       { value:"Raw", text:"Raw" },
	                       { value:"Prospect", text:"Prospect" },
	                       { value:"Opportunity", text:"Opportunity" },  
	                       { value:"Customer", text:"Customer" },
	                       { value:"Not Interested", text:"Not Interested" },
          		           { value:"Obsolete", text:"Obsolete" }
	                     ] },
                 		{ type:"button" , name:"search:contact", value:"Search", command:"search"  },
                 		{ type:"newcolumn" },
                 		{ type:"input" , name:"city", label:"City"  },
                 		{ type:"input" , name:"zipcode", label:"Zip Code"  },
                 		{ type:"input" , name:"mobile", label:"Mobile No"  },
                 		{ type:"input" , name:"officephone", label:"Office No"  },
                 		{ type:"calendar" ,format:"%m/%d/%Y" , name:"gendate", label:"Entry Date"  },
                 		]  }
                 	];

var campaign_main_context = [
                         {type: "settings", position: "label-left", offsetLeft:"30" ,labelWidth: 200},
                 		{ type:"fieldset" , name:"search_filterset", label:"Campaign Search Filters", list:[
                 		{ type:"input" , name:"name", label:"Partial Campaign Name [*]"  },
                 		{ type:"input" , name:"title", label:"Partial Title [*]"  },
                 		{ type:"input" , name:"campaignid", label:"Campaign Id"  },
                 		{ type:"button" , name:"search:campaign", value:"Search", command:"search"  },
                 		{ type:"newcolumn" },
                 		{ type:"input" , name:"agentid", label:"Agent Id"  },
                 		{ type:"input" , name:"owner", label:"Owner"  }
                 		
                 		]  }
                 	];

var opportunity_main_context = [
                                {type: "settings", position: "label-left", offsetLeft:"30" ,labelWidth: 200},
                        		{ type:"fieldset" , name:"search_filterset", label:"Opportunity Search Filters", list:[
                        		{ type:"input" , name:"name", label:"Partial Name [*]"  },
                        		{ type:"input" , name:"lastname", label:"Partial Last Name [*]"  },
                        		{ type:"button" , name:"search:opportunity", value:"Search", command:"search"  },
                        		{ type:"newcolumn" },
                                       { type:"input" , name:"opportunityid", label:"Opportunity Id"  },
                        		{ type:"input" , name:"agentid", label:"Agent Id"  },
                        		
                        		]  }
                        	];

var customer_main_context = [
                             {type: "settings", position: "label-left", offsetLeft:"30" ,labelWidth: 200},
                     		{ type:"fieldset" , name:"search_filterset", label:"Customer Search Filters", list:[
                     		{ type:"input" , name:"name", label:"Partial Name [*]"  },
                     		{ type:"input" , name:"lastname", label:"Partial Last Name [*]"  },
                     		{ type:"button" , name:"search:customer", value:"Search", command:"search"  },
                     		{ type:"newcolumn" },
                                    { type:"input" , name:"customerid", label:"Customer Id"  },
                     		{ type:"input" , name:"agentid", label:"Agent Id"  },
                     		
                     		]  }
                     	];

/*
var mycontact_grid_context=
	[
		{ type:"fieldset" , name:"mycontact_list", label:"My Contact", list:[
				{ type:"container" , name:"mycontact_grid_container", id:"mycontact_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mycontact_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"update:mycontact:update_contact", value:"Save", width:"100"  }
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mycontact_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"mycontact_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"mycontact_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
*/

var mycontact_grid_context=
	[
	{ type:"fieldset" , name:"mycontact_list", label:"My Contact List", list:[
	    
		{ type:"container" , name:"mycontact_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"mycontact_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"mycontact_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"mycontact_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"mycontact_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:mycontact:update_contact", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var mycontact_toolbar=
	[
		{ id: "update:mycontact:update_contact", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
	];


/*
var mylead_grid_context=
	[
		{ type:"fieldset" , name:"mylead_list", label:"My Lead", list:[
				{ type:"container" , name:"mylead_grid_container", id:"mylead_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mylead_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"update:mylead:update_contact", value:"Save", width:"100"  },
				{ type:"button" , name:"mylead:lead:remove_custom_table", value:"Clear", width:"100", command:""  }
		 ]  },
		
		 { type:"fieldset" , name:"lead_next_steps", label:"Next Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:leadnote", value:"Go To Note", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"mylead_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"mylead_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"mylead_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];

*/

var mylead_grid_context=
	[
	{ type:"fieldset" , name:"mylead_list", label:"My Lead List", list:[
	    
		{ type:"container" , name:"mylead_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"mylead_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"mylead_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"mylead_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"mylead_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:mylead:update_contact", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var mylead_toolbar=
	[
		{ id: "update:mylead:update_contact", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "mylead:lead:remove_custom_table", type: "button", img: "clear.gif",  title: "Clear", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:leadnote", type: "button", img: "down1.gif", title: "Next step to add variables", action:"action_button_callback"}
		
	];

/*
var campaign_grid_context=
	[
		{ type:"fieldset" , name:"campaign_list", label:"Campaign List", list:[
			{ type:"container" , name:"campaign_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"campaign_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:campaign", value:"Create", width:"100"  },
			{ type:"button" , name:"update:campaign:update_table_data", value:"Save", width:"100"  },
			{ type:"button" , name:"file:download:campaign", value:"Download",width:"100", command:"download:download_feature"  },
			//{ type:"button" , name:"campaign:campaign:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"campaign_add_set", label:"Addons", offsetLeft:"30", list:[
            { type:"button" , name:"campaign:lead:handle_custom_changes", value:"View Lead", width:"100"  },                                                                             
	        { type:"button" , name:"campaign:campaignnote:handle_custom_changes", value:"Add Note", width:"100"  },                                                                                                                  	     
	 ]  },
	 { type:"fieldset" , name:"campaign_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:surveyquestion", value:"Go To Survey", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"campaign_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"campaign_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"campaign_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var campaign_grid_context=
	[
	{ type:"fieldset" , name:"campaign_list", label:"Campaign List", list:[
	    
		{ type:"container" , name:"campaign_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"campaign_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"campaign_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"campaign_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"campaign_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:campaign:update_table_data", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var campaign_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add Script", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "campaign:campaignnote:handle_custom_changes", text: "Add Note", img: "note.gif"},
				
			]
		},
		{ id: "create:campaign", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "update:campaign:update_table_data", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "file:download:campaign", type: "button", img: "download.gif",  title: "Download campaign list", action:"action_button_callback" },
		{ id: "campaign:lead:handle_custom_changes", type: "button", img: "lookup.gif",  title: "View Lead", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:varprovision", type: "button", img: "down1.gif", title: "Next step to add variables", action:"action_button_callback"}
		
	];

/*
var campaignnote_grid_context=
	[
		{ type:"fieldset" , name:"campaignnote_list", label:"Notes", list:[
			{ type:"container" , name:"campaignnote_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"campaignnote_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:campaignnote", value:"Create", width:"100"  },
			{ type:"button" , name:"save:campaignnote", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"campaignnote_next_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:campaign", value:"Back To Campaign", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"campaignnote_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"campaignnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"campaignnote_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

*/

var campaignnote_grid_context=
	[
	{ type:"fieldset" , name:"campaignnote_list", label:"Campaign Notes", list:[
	    
		{ type:"container" , name:"campaignnote_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"campaignnote_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"campaignnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"campaignnote_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"campaignnote_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:campaignnote", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var campaignnote_toolbar=
	[
		
		{ id: "create:campaignnote", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:campaignnote", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:campaign", type: "button", img: "up1.gif", title: "Back to campaign", action:"action_button_callback"},
		
	];

/*
var customernote_grid_context=
	[
		{ type:"fieldset" , name:"customernote_list", label:"Notes", list:[
			{ type:"container" , name:"customernote_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"customernote_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:customernote", value:"Create", width:"100"  },
			{ type:"button" , name:"save:customernote", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"customernote_next_steps", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:customer", value:"Back To Customer", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"customernote_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"customernote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"customernote_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

*/

var customernote_grid_context=
	[
	{ type:"fieldset" , name:"customernote_list", label:"Customer Notes", list:[
	    
		{ type:"container" , name:"customernote_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"customernote_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"customernote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"customernote_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"customernote_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:customernote", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var customernote_toolbar=
	[
		
		{ id: "create:customernote", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:customernote", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:customer", type: "button", img: "up1.gif", title: "Back to customer", action:"action_button_callback"},
		
	];

/*
var opportunitynote_grid_context=
	[
		{ type:"fieldset" , name:"opportunitynote_list", label:"Notes", list:[
			{ type:"container" , name:"opportunitynote_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"opportunitynote_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:opportunitynote", value:"Create", width:"100"  },
			{ type:"button" , name:"save:opportunitynote", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"opportunitynote_next_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:opportunity", value:"Back To Opportunity", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"opportunitynote_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"opportunitynote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"opportunitynote_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

*/

var opportunitynote_grid_context=
	[
	{ type:"fieldset" , name:"opportunitynote_list", label:"Opportunity Notes", list:[
	    
		{ type:"container" , name:"opportunitynote_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"opportunitynote_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"opportunitynote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"opportunitynote_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"opportunitynote_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:opportunitynote", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var opportunitynote_toolbar=
	[
		
		{ id: "create:opportunitynote", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:opportunitynote", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:opportunity", type: "button", img: "up1.gif", title: "Back to opportunity", action:"action_button_callback"},
		
	];

/*
var surveyquestion_grid_context=
	[
		{ type:"fieldset" , name:"surveyquestion_list", label:"Survey Questions", list:[
			{ type:"container" , name:"surveyquestion_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"surveyquestion_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:surveyquestion", value:"Create", width:"100"  },
			{ type:"button" , name:"save:surveyquestion", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"surveyquestion_next_steps", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:campaign", value:"Back To Campaign", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"surveyquestion_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"surveyquestion_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"surveyquestion_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var surveyquestion_grid_context=
	[
	{ type:"fieldset" , name:"surveyquestion_list", label:"Survey Questions", list:[
	    
		{ type:"container" , name:"surveyquestion_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"surveyquestion_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"surveyquestion_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"surveyquestion_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"surveyquestion_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:surveyquestion", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var surveyquestion_toolbar=
	[
		
		{ id: "create:surveyquestion", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:surveyquestion", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:campaign", type: "button", img: "up1.gif", title: "Back to campaign", action:"action_button_callback"},
		
	];

/*
var qualifygift_grid_context=
	[
		{ type:"fieldset" , name:"qualifygift_list", label:"Qualify Gifts", list:[
			{ type:"container" , name:"qualifygift_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"qualifygift_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:qualifygift", value:"Create", width:"100"  },
			{ type:"button" , name:"save:qualifygift", value:"Save", width:"100"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"qualifygift_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"qualifygift_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"qualifygift_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	*/

var qualifygift_grid_context=
	[
	{ type:"fieldset" , name:"qualifygift_list", label:"Qualifying Gifts", list:[
	    
		{ type:"container" , name:"qualifygift_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"qualifygift_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"qualifygift_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"qualifygift_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"qualifygift_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:qualifygift", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var qualifygift_toolbar=
	[
		
		{ id: "create:qualifygift", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:qualifygift", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		
	];

/*
var contact_grid_context=
	[
		{ type:"fieldset" , name:"contact_list", label:"Contact List", list:[
			{ type:"container" , name:"contact_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"contact_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:contact", value:"Create", width:"100"  },
			{ type:"button" , name:"update:contact:update_table_data", value:"Save", width:"100"  },
			{ type:"button" , name:"file:download:contact", value:"Download",width:"100", command:"download:download_feature"  },
			//{ type:"button" , name:"contact:contact:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"contact_add_set", label:"Addons", offsetLeft:"30", list:[
	         { type:"button" , name:"contact:opportunity:handle_custom_changes", value:"Add Opportunity", width:"100"  },
	         { type:"button" , name:"contact:customer:handle_custom_changes", value:"Add Customer", width:"100"  },                                                                                                        	     
	 ]  },
	 { type:"fieldset" , name:"contact_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:contactnote", value:"Go To Note", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"contact_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:lead", value:"Back To Lead", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"contact_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"contact_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"contact_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var contact_grid_context=
	[
	{ type:"fieldset" , name:"contact_list", label:"Contact List", list:[
	    
		{ type:"container" , name:"contact_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"contact_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"contact_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"contact_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"contact_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:contact:update_table_data", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var contact_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add Script", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "contact:opportunity:handle_custom_changes", text: "Add Opportunity", img: "opportunity.gif"},
			    { type: "button", id: "contact:customer:handle_custom_changes", text: "Add Customer", img: "customer.gif"},
				
			]
		},
		{ id: "create:contact", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "update:contact:update_table_data", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "file:download:contact", type: "button", img: "download.gif",  title: "Download Contacts", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:lead", type: "button", img: "up1.gif", title: "Back to Lead", action:"action_button_callback"},
		{ id: "scroll:contactnote", type: "button", img: "down1.gif", title: "Next step to add notes", action:"action_button_callback"}
		
	];

/*
var contactnote_grid_context=
	[
		{ type:"fieldset" , name:"contactnote_list", label:"Notes", list:[
			{ type:"container" , name:"contactnote_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"contactnote_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:contactnote", value:"Create", width:"100"  },
			{ type:"button" , name:"save:contactnote", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"contactnote_next_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:contact", value:"Back To Contact", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"contactnote_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"contactnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"contactnote_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

*/

var contactnote_grid_context=
	[
	{ type:"fieldset" , name:"contactnote_list", label:"Contact Notes", list:[
	    
		{ type:"container" , name:"contactnote_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"contactnote_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"contactnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"contactnote_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"contactnote_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:contactnote", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var contactnote_toolbar=
	[
		
		{ id: "create:contactnote", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:contactnote", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:contact", type: "button", img: "up1.gif", title: "Back to Contact", action:"action_button_callback"},
		
	];

/*
var lead_grid_context=
	[
		{ type:"fieldset" , name:"lead_list", label:"Lead List", list:[
			{ type:"container" , name:"lead_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"lead_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:lead", value:"Create", width:"100"  },
			{ type:"button" , name:"update:lead:validate_lead", value:"Save", width:"100"  },
			{ type:"button" , name:"file:download:lead", value:"Download",width:"100", command:"download:download_feature"  },
			//{ type:"button" , name:"lead:lead:remove_custom_table", value:"Clear", width:"100", command:""  }
			
	 ]  },
	 { type:"fieldset" , name:"lead_add_set", label:"Addons", offsetLeft:"30", list:[
	       { type:"button" , name:"lead:contact:handle_custom_changes", value:"Add Contact", width:"100"  },                                                                                                         	     
	 ]  },
	 { type:"fieldset" , name:"lead_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:leadnote", value:"Go To Note", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"lead_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:campaign", value:"Back To Campaign", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"lead_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"lead_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"lead_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var lead_grid_context=
	[
	{ type:"fieldset" , name:"lead_list", label:"Lead List", list:[
	    
		{ type:"container" , name:"lead_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"lead_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"lead_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"lead_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"lead_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:lead:validate_lead", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var lead_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add Script", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "lead:contact:handle_custom_changes", text: "Add Contact", img: "contact.gif"},
				
			]
		},
		{ id: "create:lead", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "update:lead:validate_lead", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "file:download:lead", type: "button", img: "download.gif",  title: "Download Lead", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:campaign", type: "button", img: "up1.gif", title: "Back to campaign", action:"action_button_callback"},
		{ id: "scroll:leadnote", type: "button", img: "down1.gif", title: "Next step to add note", action:"action_button_callback"}
		
	];
/*
var leadnote_grid_context=
	[
		{ type:"fieldset" , name:"leadnote_list", label:"Notes", list:[
			{ type:"container" , name:"leadnote_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"leadnote_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:leadnote", value:"Create", width:"100"  },
			{ type:"button" , name:"save:leadnote", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"leadnote_next_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:lead", value:"Back To Lead", width:"100"  },
	        { type:"button" , name:"scroll:mylead", value:"Back To Lead", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"leadnote_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"leadnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"leadnote_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var leadnote_grid_context=
	[
	{ type:"fieldset" , name:"leadnote_list", label:"Lead Notes", list:[
	    
		{ type:"container" , name:"leadnote_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"leadnote_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"leadnote_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"leadnote_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"leadnote_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:leadnote", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var leadnote_toolbar=
	[
		
		{ id: "create:leadnote", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:leadnote", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:lead", type: "button", img: "up1.gif", title: "Back to Lead", action:"action_button_callback"},
		{ id: "scroll:mylead", type: "button", img: "up1.gif", title: "Back to MyLead", action:"action_button_callback"},
		
	];

/*
var customer_grid_context=
	[
		{ type:"fieldset" , name:"customer_list", label:"Customer List", list:[
			{ type:"container" , name:"customer_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"customer_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:customer", value:"Create", width:"100"  },
			{ type:"button" , name:"update:customer:update_table_data", value:"Save", width:"100"  },
			{ type:"button" , name:"file:download:customer", value:"Download",width:"100", command:"download:download_feature"  },
			//{ type:"button" , name:"customer:customer:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"opportunity_add_set", label:"Addons", offsetLeft:"30", list:[
	         { type:"button" , name:"customer:customernote:handle_custom_changes", value:"Add Note", width:"100"  },        	     
	 ]  },
	 { type:"fieldset" , name:"customer_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:deal", value:"Go To Deal", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"customer_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:contact", value:"Back To Contact", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"customer_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"customer_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"customer_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/
var customer_grid_context=
	[
	{ type:"fieldset" , name:"customer_list", label:"Customer List", list:[
	    
		{ type:"container" , name:"customer_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"customer_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"customer_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"customer_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"customer_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:customer", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var customer_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to customer", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "customer:customernote:handle_custom_changes", text: "Add Note", img: "note.gif"},
				
			]
		},
		{ id: "create:customer", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:customer", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "file:download:customer", type: "button", img: "download.gif",  title: "Download customer list", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:contact", type: "button", img: "up1.gif", title: "Back to contact", action:"action_button_callback"},
		{ id: "scroll:deal", type: "button", img: "down1.gif", title: "Next step to deal", action:"action_button_callback"}
		
	];

/*
var deal_grid_context=
	[
		{ type:"fieldset" , name:"deal_list", label:"Deal List", list:[
			{ type:"container" , name:"deal_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"deal_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:deal", value:"Create", width:"100"  },
			{ type:"button" , name:"save:deal", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"deal_priv_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:opportunity", value:"Go To Opportunity", width:"100"  },
	        { type:"button" , name:"scroll:customer", value:"Go To Customer", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"deal_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"deal_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"deal_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var deal_grid_context=
	[
	{ type:"fieldset" , name:"deal_list", label:"Deal List", list:[
	    
		{ type:"container" , name:"deal_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"deal_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"deal_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"deal_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"deal_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:deal", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var deal_toolbar=
	[
		
		{ id: "create:deal", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:deal", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:opportunity", type: "button", img: "up1.gif", title: "Back to opportunity", action:"action_button_callback"},
		{ id: "scroll:customer", type: "button", img: "up2.gif", title: "Back to customer", action:"action_button_callback"},
		
	];

/*
var opportunity_grid_context=
	[
		{ type:"fieldset" , name:"opportunity_list", label:"Opportunity List", list:[
			{ type:"container" , name:"opportunity_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"opportunity_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:opportunity", value:"Create", width:"100"  },
			{ type:"button" , name:"update:opportunity:update_table_data", value:"Save", width:"100"  },
			{ type:"button" , name:"file:download:opportunity", value:"Download",width:"100", command:"download:download_feature"  },
			//{ type:"button" , name:"opportunity:opportunity:remove_custom_table", value:"Clear", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"opportunity_add_set", label:"Addons", offsetLeft:"30", list:[
	        { type:"button" , name:"opportunity:opportunitynote:handle_custom_changes", value:"Add Note", width:"100"  },
                                                                                                                             	     
	  ]  },
	 { type:"fieldset" , name:"opportunity_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:deal", value:"Go To Deal", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"opportunity_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:contact", value:"Back To Contact", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"opportunity_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"opportunity_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"opportunity_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

*/

var opportunity_grid_context=
	[
	{ type:"fieldset" , name:"opportunity_list", label:"Opportunity List", list:[
	    
		{ type:"container" , name:"opportunity_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"opportunity_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"opportunity_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"opportunity_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"opportunity_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"update:opportunity:update_table_data", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var opportunity_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to Opportunity", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "opportunity:opportunitynote:handle_custom_changes", text: "Add Note", img: "note.gif"},
				
			]
		},
		{ id: "create:opportunity", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "update:opportunity:update_table_data", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "file:download:opportunity", type: "button", img: "download.gif",  title: "Download opportunities", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:contact", type: "button", img: "up1.gif", title: "Back to contact", action:"action_button_callback"},
		{ id: "scroll:dea", type: "button", img: "down1.gif", title: "Next step to deal", action:"action_button_callback"}
		
	];

/*
var leaddoc_grid_context=
	[
		{ type:"fieldset" , name:"leaddoc_list", label:"Document List", list:[
			{ type:"container" , name:"leaddoc_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"leaddoc_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"make:leaddoc:createAttachment", value:"Attachment", width:"90"  },
			{ type:"button" , name:"show:leaddoc:getDownloadFile", value:"Download", width:"90"  },
			{ type:"button" , name:"delete:leaddoc:deleteFile", value:"Delete", width:"90"  }
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"leaddoc_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"leaddoc_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"leaddoc_fileupload_cont", inputWidth:300, inputHeight:200  },
			{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
	]  }
	];
	*/

var leaddoc_grid_context=
	[
	{ type:"fieldset" , name:"leaddoc_list", label:"Document List", list:[
	    
		{ type:"container" , name:"leaddoc_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"leaddoc_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"leaddoc_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"leaddoc_fileupload_cont", inputWidth:300, inputHeight:200  },
		{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  },
		
		]  },
	]  }
	
	];

var leaddoc_toolbar=
	[
		
		{ id: "make:leaddoc:createAttachment", type: "button", img: "attachment.gif", title: "Attachment", action:"action_button_callback"},
		{ id: "show:leaddoc:getDownloadFile", type: "button", img: "download.gif",  title: "Download", action:"action_button_callback" },
		{ id: "delete:leaddoc:deleteFile", type: "button", img: "delete.gif",  title: "Delete file", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:lead", type: "button", img: "up1.gif", title: "Back to lead", action:"action_button_callback"},
		
	];

function copy_lead_data(table){
	 //dhtmlx.message("copy_lead_data");
	 var itemlist=":name,:lastname,:company,:address,:country,:officephone,:mobile,:email,:fax,:agentid,:city,:state,:zipcode,:url,:otherlead";
	 var cols=itemlist.split(",");
	 var lead=getDataForm("lead");
	 var contact=getDataForm("contact");
	 var contactgrid=gridlist["contact"];
	 if(contactgrid){
		 var name= contactgrid.cells(0,2).getValue();
		 if(name){
			 return false;
		 }
		
	 }
	 for (var i=0;i<cols.length;i++){
		 var col=cols[i];
		 if(lead){
			 var value;
			 lead.forEachItem(function(name){
					if(name.indexOf(col)>=0){
						value= lead.getItemValue(name);
						if(value){
							contact.forEachItem(function(colname){
								if(colname.indexOf(col)>=0){
									contact.setItemValue(colname,value);
									
								 }
								
							 });
							
						}
					 }
					
				 });
		 }
		 
	 }
	
}

/*
function copy_contact_data(table){
	 //dhtmlx.message("copy_contact_data");
	 var itemlist=":name,:lastname,:company,:address,:country,:officephone,:mobile,:email,:fax,:agentid,:city,:state,:zipcode,:url,:othercontact";
	 var cols=itemlist.split(",");
	 var contact=getDataForm("contact");
	 var lead=getDataForm("lead");
	 var leadgrid=gridlist["lead"];
	 if(leadgrid){
		 var name= leadgrid.cells(0,2).getValue();
		 if(name){
			 return false;
		 }
		
	 }
	 for (var i=0;i<cols.length;i++){
		 var col=cols[i];
		 if(contact){
			 var value;
			 contact.forEachItem(function(name){
					if(name.indexOf(col)>=0){
						value= contact.getItemValue(name);
						if(value){
							lead.forEachItem(function(colname){
								if(colname.indexOf(col)>=0){
									lead.setItemValue(colname,value);
									
								 }
								
							 });
							
						}
					 }
					
				 });
		 }
		 
	 }
	
}
*/

function validate_lead(name){
	var items=name.split(":");
	var table=items[1];
	var form=getDataForm(table);
	
	if(form){
		setFilterValue(table);
		form.forEachItem(function(name){
			if(name.indexOf(":lead2assignedto")>=0){
				//var t = form.getSelect(name);
				//var val=t.options[t.selectedIndex].value;
				var val=form.getItemValue(name);
				if(!val){
					dhtmlx.alert("Please select a person to assign this lead!")
					
				}else{
					saveChanges(table, null);
				}
			 }
			
		 });
	}
	
}

function update_mycontact(name){
	var items=name.split(":");
	var table=items[1];
	
	if(!verify_row(table)){
		return;
	}
	
	//dataforms["tasks"]=form;
	saveChanges(table, "contact");
}

function update_table_data(name){
	var items=name.split(":");
	var table=items[1];
	
	setFilterValue(table);
	
	saveChanges(table, null);
}

function setFilterValue(table){
	 var form=getDataForm(table);
	 
	 if(form){
		 var value;
		 form.forEachItem(function(name){
				if(name.indexOf(":name")>=0){
					value= form.getItemValue(name);
					if(value){
						main_form.setItemValue('name',value);
						
					}
				 }
				
			 });
	 }
}
/*
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
*/

