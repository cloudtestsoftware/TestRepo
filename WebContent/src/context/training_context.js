

var training_main_context = [
        {type: "settings", position: "label-left", labelWidth: 150},
		{ type:"fieldset" , name:"search_filterset", label:"training Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial training Name:"  },
		{ type:"input" , name:"projectname", label:"Partial Project Name:"  },
		{ type:"button" , name:"search:training:search_custom_action", value:"Search", command:"save"  }
		]  }
	];

/*
var training_grid_context=
[
	{ type:"fieldset" , name:"training_list", label:"Training List", list:[
			{ type:"container" , name:"training_grid_container", id:"training_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"training_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:training", value:"Create", width:"100"  },
			{ type:"button" , name:"save:training", value:"Save", width:"100"  },
			{ type:"button" , name:"prod:training:give_prod_access", value:"Grant Prod", width:"100"  },
			{ type:"button" , name:"prod:training:revoke_prod_access", value:"Revoke Prod", width:"100"  }
			
	 ]  },
	 { type:"fieldset" , name:"training_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:bookcourse", value:"Go To Booking", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"training_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"training_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"training_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
];
*/

var training_grid_context=
	[
	{ type:"fieldset" , name:"training_list", label:"training List", list:[
	    
		{ type:"container" , name:"training_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"training_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"training_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"training_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"training_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:training", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var training_toolbar=
	[
		
		{ id: "create:training", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:training", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "prod:training:give_prod_access", type: "button", img: "approve.gif", title: "Grant", action:"action_button_callback"},
		{ id: "prod:training:revoke_prod_access", type: "button", img: "revoke.gif",  title: "Revoke", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:bookcourse", type: "button", img: "down1.gif", title: "Go to booking course", action:"action_button_callback"},
		
	];

/*
var mytraining_grid_context=
	[
		{ type:"fieldset" , name:"mytraining_list", label:"Training List", list:[
			{ type:"container" , name:"mytraining_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"mytraining_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:bookcourse", value:"Go To Booking", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"mytraining_workarea_set", label:"Work Area", offsetLeft:"150", list:[
			{ type:"container" , name:"mytraining_form_cont", inputWidth:"55%", inputHeight:"100%"  },
			{ type:"container" , name:"mytraining_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
	*/
var mytraining_grid_context=
	[
	{ type:"fieldset" , name:"mytraining_list", label:"My Training", list:[
	    
		{ type:"container" , name:"mytraining_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"mytraining_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"mytraining_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"mytraining_datagrid_cont", inputWidth:0, inputHeight:0  },
		
		]  },
	]  }
	
	];

var mytraining_toolbar=
	[
		
		{ id: "scroll:bookcourse", type: "button", img: "down1.gif", title: "Go to booking of training", action:"action_button_callback"},
		
	];

/*
var bookcourse_grid_context=
	[
		{ type:"fieldset" , name:"bookcourse_list", label:"Course List", list:[
			{ type:"container" , name:"bookcourse_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"bookcourse_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:bookcourse", value:"Create", width:"100"  },
			{ type:"button" , name:"save:bookcourse", value:"Save", width:"100"  },
			{ type:"button" , name:"payment:bookcourse:make_payment", value:"Pay Fees", width:"100"  },
			{ type:"button" , name:"register:bookcourse:get_prod_access", value:"Register Prod", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"coursefeedback_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:coursefeedback", value:"Go To Feedback", width:"100"  },
	 ]  },
	 { type:"fieldset" , name:"coursefeedback_priv_steps", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:mytraining", value:"Back To Booking", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"bookcourse_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"bookcourse_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"bookcourse_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var bookcourse_grid_context=
	[
	{ type:"fieldset" , name:"bookcourse_list", label:"Booked Course List", list:[
	    
		{ type:"container" , name:"bookcourse_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"bookcourse_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"bookcourse_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"bookcourse_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"bookcourse_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:bookcourse", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var bookcourse_toolbar=
	[
		
		{ id: "create:bookcourse", type: "button", img: "create.gif", title: "Create", action:"action_button_callback"},
		{ id: "save:bookcourse", type: "button", img: "save.gif",  title: "Save", action:"action_button_callback" },
		{ id: "payment:bookcourse:make_payment", type: "button", img: "payment.gif", title: "Pay Fees", action:"action_button_callback"},
		{ id: "register:bookcourse:get_prod_access", type: "button", img: "register.gif",  title: "Register course", action:"action_button_callback" },
		{ type: "separator" },
		{ id: "scroll:mytraining", type: "button", img: "up1.gif", title: "Back to booking", action:"action_button_callback"},
		{ id: "scroll:coursefeedback", type: "button", img: "down1.gif", title: "give feedback", action:"action_button_callback"},
		
	];
var coursefeedback_grid_context=
	[
		{ type:"fieldset" , name:"coursefeedback_list", label:"Feedback List", list:[
			{ type:"container" , name:"coursefeedback_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"coursefeedback_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"create:coursefeedback", value:"Create", width:"100"  },
			{ type:"button" , name:"save:coursefeedback", value:"Save", width:"100"  }
	 ]  },
	 { type:"fieldset" , name:"coursefeedback_next_steps", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:bookcourse", value:"Back To Booking", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"coursefeedback_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"coursefeedback_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"coursefeedback_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];

function get_prod_access(name){
	window.open("http://prod.artitelly.com/testrepo/service?adminuser=sa&token="+token);
}


function verify_prod_access(table){
	var form=getDataForm(table);
	var verifystatus;
	
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf("status")>=0){
				verifystatus= form.getItemValue(name);
				
			 }
		 });
	}
	 
	if(verifystatus &&verifystatus=='Prodaccess'){
		showFormButton(table,'register:');
	}
}

function make_payment(name){
	var items=name.split(":");
	var table=items[1];
	var form=dataforms[table];
	var grid=gridlist[table];
	var rowid;
	var description = "Artitelly Product and Quality life cycle management course fee payment";
	var amount;
	var objid;
	if(grid){
		rowid=grid.getSelectedRowId();
		if(!rowid){
			dhtmlx.alert("Please select a row for which you are paying!");
			return false;
		}
	}
	if(form){
		form.forEachItem(function(name){
			if(name.indexOf("objid")>=0){
				objid= form.getItemValue(name);
			 }else if(name.indexOf("amountpaid")>=0){
				 amount=form.getItemValue(name);;
			 }
		 });
	}
	var url=www_url+"/service?usertoken="+token+"&amount="+amount+"&refobjid="+objid+"&description="+description+"&username="+username;
	window.open(url);
}
