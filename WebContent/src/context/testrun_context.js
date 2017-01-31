

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

var grouprun_main_context = [
                             {type: "settings", position: "label-left", labelWidth: 130},
                     		{ type:"fieldset" , name:"search_filterset", label:"Group Search Filters", list:[
                     		{ type:"input" , name:"name", label:"Partial Name [*]"  },
                     		{ type:"select" , name:"status", label:"Run Status", inputWidth:140, options:[
                     		  { value:"Open", text:"Active" },
                     		  { value:"In Active", text:"Expired" }
                     		] },
                     		{ type:"button" , name:"search:grouprun", value:"Search", command:"save"  }
                     		]  }
                     	];

/*
var testrun_grid_context=
	[
		{ type:"fieldset" , name:"testrun_list", label:"Matrixtrun List", list:[
			{ type:"container" , name:"testrun_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrun_action_set", label:"Actions", offsetLeft:"30", list:[
            { type:"button" , name:"testrun:testrunresult:handle_custom_changes", value:"Matrixrun Facts", width:"100", command:""  },
            { type:"button" , name:"testrun:summaryreport:handle_custom_changes:buttonfilter:status='Current'", value:"Summary Reports", width:"100"  },
            { type:"button" , name:"testrun:testrunchart:handle_custom_changes", value:"Summary Chart", width:"100", command:""  },
            { type:"button" , name:"testrun:browserchart:handle_custom_changes", value:"Browser Chart", width:"100", command:""  },
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
*/

var testrun_grid_context=
	[
	{ type:"fieldset" , name:"testrun_list", label:"Testrun List", list:[
	    
		{ type:"container" , name:"testrun_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"testrun_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"testrun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"testrun_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"button" , name:"save:testrun", value:"Save", width:"100"  }
		]  },
	]  }
	
	];

var testrun_toolbar=
	[

		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Testrun Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "testrun:testrunresult:handle_custom_changes", text: "Matrixrun Facts",img: "facts.gif" },
				{ type: "button", id: "testrun:summaryreport:handle_custom_changes:buttonfilter:status='Current'", text: "Summary Reports",img: "facts.gif" },
				{ type: "button", id: "testrun:testrunchart:handle_custom_changes", text: "Summary Chart",img: "facts.gif" },
				{ type: "button", id: "testrun:browserchart:handle_custom_changes", text: "Browser Chart",img: "facts.gif" },
			]
		},
		
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to testrun", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "testrun:documents:handle_custom_changes", text: "Add Document", img: "document.gif"},
				{ type: "button", id: "testrun:estimation:handle_custom_changes", text: "Add Estimation",img: "estimation.gif" },
				
			]
		},
		
		{ type: "separator"},
		
		{ id: "testrun:jobrun:handle_custom_changes", type: "button", img: "testrun.gif", title: "Run Job", action:"action_button_callback"},
		
		
		{ type: "separator" },
		{ id: "scroll:testmatrix", type: "button", img: "up1.gif", title: "Back to matrix", action:"action_button_callback"},
		{ id: "scroll:featurerun", type: "button", img: "down1.gif",  title: "Next step feature run", action:"action_button_callback" },
		
	];

/*
var testrunresult_grid_context=
	[
		{ type:"fieldset" , name:"testrunresult_list", label:"Matrix Run Facts", list:[
			{ type:"container" , name:"testrunresult_grid_container", inputWidth:"500", inputHeight:"500"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	
	 { type:"fieldset" , name:"testrunresult_next_step", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:sceneriorunresult", value:"Go To Failure", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"testrunresult_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:testrun", value:"Back To Run", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrunresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testrunresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"testrunresult_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];
	*/

var testrunresult_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"testrunresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"testrunresult_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"testrunresult_list", label:"Matrixrun Facts", list:[
			{ type:"container" , name:"testrunresult_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"testrunresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  }
	 
	];

var testrunresult_toolbar=
	[
	 	{ id: "scroll:testrun", type: "button", img: "up1.gif", title: "Back to testrun", action:"action_button_callback"},
		{ id: "scroll:sceneriorunresult", type: "button", img: "down1.gif", title: "Go to failures", action:"action_button_callback"}
		
	];

/*
var grouprunresult_grid_context=
	[
		{ type:"fieldset" , name:"grouprunresult_list", label:"Group Run Facts", list:[
			{ type:"container" , name:"grouprunresult_grid_container", inputWidth:"500", inputHeight:"500"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"grouprunresult_next_step", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:sceneriorunresult", value:"Go To Failure", width:"100"  },
	  ]  },
	  { type:"fieldset" , name:"grouprunresult_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	          { type:"button" , name:"scroll:grouprun", value:"Back To Group", width:"100"  },
	  ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"grouprunresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"grouprunresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"grouprunresult_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];
	*/

var grouprunresult_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"grouprunresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"grouprunresult_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"grouprunresult_list", label:"Grouprun Facts", list:[
			{ type:"container" , name:"grouprunresult_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"grouprunresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  }
	 
	];

var grouprunresult_toolbar=
	[
	 	{ id: "scroll:grouprun", type: "button", img: "up1.gif", title: "Back to Grouprun", action:"action_button_callback"},
		{ id: "scroll:sceneriorunresult", type: "button", img: "down1.gif", title: "Go to failures", action:"action_button_callback"}
		
	];

/*
var sceneriorunresult_grid_context=
	[
		{ type:"fieldset" , name:"sceneriorunresult_list", label:"Test Result Facts", list:[
			{ type:"container" , name:"sceneriorunresult_grid_container", inputWidth:"500", inputHeight:"500"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	
	 { type:"fieldset" , name:"sceneriorunresult_action_set", label:"Actions", offsetLeft:"30", list:[
	         { type:"button" , name:"update:sceneriorunresult:update_sceneriorun_result", value:"Update", width:"100"  },       			
	  ]  },
	 { type:"fieldset" , name:"sceneriorunresult_next_step", label:"Next Steps", offsetLeft:"30", list:[
	           { type:"button" , name:"scroll:bug", value:"Go To Bug", width:"100"  },
	        ]  },
	
	  { type:"fieldset" , name:"sceneriorunresult_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	             { type:"button" , name:"scroll:testrunresult", value:"Back To Result", width:"100"  },
	             { type:"button" , name:"scroll:grouprunresult", value:"Back To Result", width:"100"  },
	             { type:"button" , name:"scroll:summaryreport", value:"Back To Result", width:"100"  },
	  ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"sceneriorunresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"sceneriorunresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"sceneriorunresult_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];
	*/

var sceneriorunresult_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"sceneriorunresult_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"sceneriorunresult_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"sceneriorunresult_list", label:"release Facts", list:[
			{ type:"container" , name:"sceneriorunresult_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"sceneriorunresult_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"block" , name:"testrun_save_block", offsetLeft:"100", list:[
	    	{ type:"button" , name:"update:sceneriorunresult:update_sceneriorun_result", value:"Update", width:"100",  }
	    	]  },
			
	 ]  }
	 
	];

var sceneriorunresult_toolbar=
	[
	 	{ id: "update:sceneriorunresult:update_sceneriorun_result", type: "button", img: "Save.gif", title: "Update", action:"action_button_callback"},
	 	{ id: "scroll:testrunresult", type: "button", img: "up.gif", title: "Back to result", action:"action_button_callback"},
	 	{ id: "scroll:grouprunresult", type: "button", img: "up1.gif", title: "Back to group result", action:"action_button_callback"},
	 	{ id: "scroll:summaryreport", type: "button", img: "up2.gif", title: "Back to Summary", action:"action_button_callback"},
		{ id: "scroll:bug", type: "button", img: "down1.gif", title: "Go to Bug", action:"action_button_callback"}
		
	];

/*
var jobrun_grid_context=
	[
		{ type:"fieldset" , name:"jobrun_list", label:"Job Launch", list:[
				{ type:"container" , name:"jobrun_grid_container", id:"jobrun_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jobrun_action_set", label:"Actions", offsetLeft:"30", list:[
				{ type:"button" , name:"automation:jobrun:post_run_job", value:"Run", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"jobrun_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:testrun", value:"Back To Testrun", width:"100"  },
		        { type:"button" , name:"scroll:grouprun", value:"Back To Grouprun", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"jobrun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"jobrun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"jobrun_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
*/

var jobrun_grid_context=
	[
	{ type:"fieldset" , name:"jobrun_list", label:"Jobrun List", list:[
	    
		{ type:"container" , name:"jobrun_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"jobrun_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"jobrun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"jobrun_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"jobrun_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"automation:jobrun:post_run_job", value:"Run", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var jobrun_toolbar=
	[
		
		{ id: "automation:jobrun:post_run_job", type: "button", img: "testrun.gif", title: "Run", action:"action_button_callback"},
		
		{ type: "separator" },
		{ id: "scroll:testrun", type: "button", img: "up1.gif", title: "Back to Testrun", action:"action_button_callback"},
		{ id: "scroll:grouprun", type: "button", img: "up2.gif", title: "Back to Grouprun", action:"action_button_callback"},
		
	];

/*
var grouprun_grid_context=
	[
		{ type:"fieldset" , name:"grouprun_list", label:"Group Run List", list:[
				{ type:"container" , name:"grouprun_grid_container", id:"grouprun_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"grouprun_action_set", label:"Actions", offsetLeft:"30", list:[
		        { type:"button" , name:"testrun:grouprunresult:handle_custom_changes", value:"Grouprun Facts", width:"100", command:""  }, 
		        { type:"button" , name:"grouprun:testrunchart:handle_custom_changes", value:"Summary Chart", width:"100", command:""  },
	            { type:"button" , name:"grouprun:browserchart:handle_custom_changes", value:"Browser Chart", width:"100", command:""  },
	 	        { type:"button" , name:"grouprun:summaryreport:handle_custom_changes:buttonfilter:status='Current'", value:"Summary Reports", width:"100"  },
				{ type:"button" , name:"create:grouprun", value:"Create", width:"100"  },
				{ type:"button" , name:"save:grouprun", value:"Save", width:"100"  },
				{ type:"button" , name:"grouprun:jobrun:handle_custom_changes", value:"Run Job ", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"grouprun_next_step", label:"Next Steps", offsetLeft:"30", list:[
		        { type:"button" , name:"scroll:featurerun", value:"Go To Featurerun", width:"100"  },
		 ]  },
		 { type:"fieldset" , name:"grouprun_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
		         { type:"button" , name:"scroll:featuregroup", value:"Back To Group", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"grouprun_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"grouprun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"grouprun_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	*/

var grouprun_grid_context=
	[
	{ type:"fieldset" , name:"grouprun_list", label:"Grouprun List", list:[
	    
		{ type:"container" , name:"grouprun_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"grouprun_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"grouprun_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"grouprun_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"button" , name:"save:grouprun", value:"Save", width:"100"  }
		]  },
	]  }
	
	];

var grouprun_toolbar=
	[

		{ id: "summary", type: "buttonSelect", img: "summary.gif",text: "Summary", title:"Testrun Summary", openAll: true, renderSelect: false,
			options: [
				{ type: "button", id: "testrun:grouprunresult:handle_custom_changes", text: "Matrixrun Facts",img: "facts.gif" },
				{ type: "button", id: "grouprun:summaryreport:handle_custom_changes:buttonfilter:status='Current'", text: "Summary Reports",img: "facts.gif" },
				{ type: "button", id: "grouprun:testrunchart:handle_custom_changes", text: "Summary Chart",img: "facts.gif" },
				{ type: "button", id: "grouprun:browserchart:handle_custom_changes", text: "Browser Chart",img: "facts.gif" },
			]
		},
		{ type: "separator"},
		
		{ id: "create:grouprun", type: "button", img: "new.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:grouprun", type: "button", img: "save.gif", title: "Save", action:"action_button_callback"},
		{ id: "grouprun:jobrun:handle_custom_changes", type: "button", img: "run.gif", title: "Run", action:"action_button_callback"},
		
		{ type: "separator" },
		{ id: "scroll:featuregroup", type: "button", img: "up1.gif", title: "Back to Group", action:"action_button_callback"},
		{ id: "scroll:featurerun", type: "button", img: "down1.gif",  title: "Next step feature run", action:"action_button_callback" },
		
	];
/*
var summaryreport_grid_context=
	[
		{ type:"fieldset" , name:"summaryreport_list", label:"Summary Run Facts", list:[
			{ type:"container" , name:"summaryreport_grid_container", inputWidth:"500", inputHeight:"500"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"summaryreport_action_set", label:"Actions", offsetLeft:"30", list:[
	         { type:"button" , name:"file:download:summaryreport", value:"Download", width:"110"  },
	         { type:"button" , name:"report:summaryreport:open_html_report", value:"Show Report", width:"110", command:""  }
	 ]  },
	 { type:"fieldset" , name:"summaryreport_next_step", label:"Next Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:sceneriorunresult", value:"Go To Failure", width:"110"  },
	 ]  },
	 { type:"fieldset" , name:"sceneriorunresult_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	         { type:"button" , name:"scroll:testrun", value:"Back To Run", width:"110"  },
	         { type:"button" , name:"scroll:grouprun", value:"Back To Group", width:"110"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"summaryreport_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"summaryreport_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"summaryreport_chart_cont", inputWidth:"600", inputHeight:"400"  }
			
	]  }
	];
*/
var summaryreport_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"summaryreport_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"summaryreport_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"summaryreport_list", label:"release Facts", list:[
			{ type:"container" , name:"summaryreport_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"summaryreport_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  }
	 
	];

var summaryreport_toolbar=
	[
	 	{ id: "report:summaryreport:open_html_report", type: "button", img: "reports.gif", title: "Show Report", action:"action_button_callback"},
		{ id: "scroll:grouprun", type: "button", img: "up1.gif", title: "Back to Group", action:"action_button_callback"},
		{ id: "scroll:testrun", type: "button", img: "up.gif", title: "Back to Test Run", action:"action_button_callback"},
		{ id: "scroll:sceneriorunresult", type: "button", img: "down1.gif", title: "Go to failures", action:"action_button_callback"},
		
	];
	

/*
var browserchart_grid_context=
	[
		{ type:"fieldset" , name:"browserchart_list", label:"Browser Chart", list:[
		    { type:"container" , name:"browserchart_chart_cont", inputWidth:"1000", inputHeight:"400"  },
			{ type:"button" , name:"scroll:testrun", value:"Back To Run", width:"110"  },
	        { type:"button" , name:"scroll:grouprun", value:"Back To Group", width:"110"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"browserchart_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	   { type:"container" , name:"browserchart_grid_container", inputWidth:"500", inputHeight:"500"  },
	 ]  },
     { type:"newcolumn"   },
	 { type:"fieldset" , name:"browserchart_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"browserchart_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	]  }
	];
	*/

var browserchart_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"browserchart_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"browserchart_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"browserchart_list", label:"release Facts", list:[
			{ type:"container" , name:"browserchart_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"browserchart_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  }
	 
	];

var browserchart_toolbar=
	[
		{ id: "scroll:grouprun", type: "button", img: "up1.gif", title: "Back to Group", action:"action_button_callback"},
		{ id: "scroll:testrun", type: "button", img: "up.gif", title: "Back to Test Run", action:"action_button_callback"},
		
	];
	
/*
var testrunchart_grid_context=
	[
		{ type:"fieldset" , name:"testrunchart_list", label:"Testrun Chart", list:[
		    { type:"container" , name:"testrunchart_chart_cont", inputWidth:"1000", inputHeight:"400"  },
		    { type:"button" , name:"scroll:testrun", value:"Back To Run", width:"110"  },
		    { type:"button" , name:"scroll:grouprun", value:"Back To Group", width:"110"  },
			
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrunchart_priv_step", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"container" , name:"testrunchart_grid_container", inputWidth:"500", inputHeight:"500"  },
	        
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"testrunchart_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"testrunchart_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	]  }
	];
	*/
var testrunchart_grid_context=
	[   
	    {type: "settings", position: "label-left",offsetLeft:"30", labelWidth: 200},
	    { type:"fieldset" , name:"testrunchart_workarea_set", label:"Work Area", offsetLeft:"30", list:[
        { type:"container" , name:"testrunchart_chart_cont", inputWidth:"1150", inputHeight:"400"  }
		]  },
		{ type:"fieldset" , name:"testrunchart_list", label:"release Facts", list:[
			{ type:"container" , name:"testrunchart_grid_container", inputWidth:"500", inputHeight:"200"  },
			 { type:"newcolumn"   },
			{ type:"container" , name:"testrunchart_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			
	 ]  }
	 
	];

var testrunchart_toolbar=
	[
		{ id: "scroll:grouprun", type: "button", img: "up1.gif", title: "Back to Group", action:"action_button_callback"},
		{ id: "scroll:testrun", type: "button", img: "up.gif", title: "Back to Test Run", action:"action_button_callback"},
				
	];

function update_sceneriorun_result(name){
	var items=name.split(":");
	var table=items[1];
	/*
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
	}*/
	//dataforms["tasks"]=form;
	saveChanges(table, "sceneriorun");
}
function open_html_report(name){
	//dhtmlx.alert(name);
	var items=name.split(":");
	var table=items[1];
	var grid=gridlist[table];
	var rowid;
	var form=dataforms[table];
	var jenkinurl;
	var jobname;
	var projectfolder="";
	var runid;
	var env;
	
	if(grid){
		rowid=grid.getSelectedRowId();
		if(!rowid){
			dhtmlx.alert("Please select a row first to see the report!")
		}
	}
	form.forEachItem(function(name){
		var value=form.getItemValue(name);
      	if(name.indexOf(":jenkinsurl")>=0  &&value){
      		jenkinurl=value;
      	}else if(name.indexOf(":runid")>=0 &&value){
      		runid=value;
    	}else if(name.indexOf(":env")>=0 &&value){
      		env=value;
      	}if(name.indexOf(":projectfolder")>=0 &&value){
      		projectfolder=value;
      	}if(name.indexOf(":jobname")>=0 &&value){
      		jobname=value;
      	}
     
 	});
	if(projectfolder &&jobname &&projectfolder!=jobname){
		projectfolder="/"+projectfolder;
	}else{
		projectfolder="";
	}
	//var url=jenkinurl+"/results/"+jobname+projectfolder+"/output/"+runid+"/report/"+env+"_jenkin_summary_report_"+runid+".html";
	var url=jenkinurl+"/results/"+jobname+projectfolder+"/output/"+runid+"/report/html_report.html";
	window.open(url);
	
	return false;
}

function set_base_url(table){
	var form=dataforms[table];
	form.forEachItem(function(name){
      	if(name.indexOf("serviceurl")>=0){
      	  	form.setItemValue(name,www_url);
      	    dataforms[table]=form;
      	}
     
 	});
	
}

function post_run_job(name){
	var items=name.split(":");
	var table=items[1];
	var grid=gridlist[table];
	var jobcounter=0;
	if(grid){
		grid.forEachRow(function(id) {
			var value=grid.cells(id,0).getValue();
	        if(value=="1"){
	        	 grid_onRowSelect_callback(grid,table,id,null);
	        	 var browsers=getBrowsers(grid,id);
	        	 if(browsers){
	        		var browserslist=browsers.split(";");
	        		for(var i=0;i<browserslist.length;i++){
	        			var browseritems;
	        			if(browserslist[i]){
	        				 browseritems=browserslist[i].split(":");
	        			}
	        			 
	        			set_form_column_value(table,"browsers",browseritems[0]);
	        			set_form_column_value(table,"threads",browseritems[1]);
	        			set_base_url(table);
	        			saveChanges(table, "jenkin");
	        			jobcounter++;
	        		}
	        		//finally reset browsers original value after posting the job
	        		set_form_column_value(table,"browsers",browsers);
	        	 }else{
	        		 saveChanges(table, "jenkin");
	        		 jobcounter++;
	        	 }
	        	
	        	
	        }
	       
		});
	}
	
	if(jobcounter>0){
		dhtmlx.alert("Posted total ="+jobcounter+ " Jenkin Jobs Successfully!");
	}else{
		dhtmlx.alert("No Jenkin Jobs Posted! Please try again!");
	}
}

/*
function post_run_job(name){
	var items=name.split(":");
	var table=items[1];
	var grid=gridlist[table];
	var jobcounter=0;
	if(grid){
		grid.forEachRow(function(id) {
			var value=grid.cells(id,0).getValue();
	        if(value=="1"){
	        	 grid_onRowSelect_callback(grid,table,id,null);
	        		 saveChanges(table, "jenkin");
	        		 jobcounter++;
	        	 }
		});
	}
	
	if(jobcounter>0){
		dhtmlx.alert("Posted total ="+jobcounter+ " Jenkin Jobs Successfully!");
	}else{
		dhtmlx.alert("No Jenkin Jobs Posted! Please try again!");
	}
}
*/
function set_form_column_value(table,column,value){
	var form=dataforms[table];
	form.forEachItem(function(name){
      	if(name.indexOf(column)>=0){
      	  	form.setItemValue(name,value);
      	    dataforms[table]=form;
      	}
     
 	});
	
}
function getBrowsers(grid,rowId){
	var colIdx=0;
	var value;
	grid.forEachCell(rowId,function(c){
        try{
        		var colid=grid.getColumnId(colIdx);
        		if(colid.indexOf('browsers')>=0){
        			value=grid.cells(rowId,colIdx).getValue();
        		}
        }catch(err){
           dhtmlx.message('Error='+err +'  name='+ colid+ '  value='+value +'  type='+ type);
          
        }
        
         colIdx++;
     });
	return value;
}
