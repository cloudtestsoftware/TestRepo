

var bug_main_context = [
        {type: "settings", position: "label-left", labelWidth: 130},
		{ type:"fieldset" , name:"search_filterset", label:"Bug Search Filters", list:[
		{ type:"input" , name:"name", label:"Partial Name [*]"  },
		{ type:"button" , name:"search:bug", value:"Search", command:"save"  }
		]  }
	];


/*
var bug_grid_context=
	[
		{ type:"fieldset" , name:"bug_list", label:"Bug List", list:[
			{ type:"container" , name:"bug_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"bug_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:bug", value:"Create", width:"100"  },
			{ type:"button" , name:"save:bug", value:"Save", width:"100"  },
			{ type:"button" , name:"bug:bugscenerio:handle_custom_changes", value:"View Scenerio", width:"100"  },
			{ type:"button" , name:"file:download:bug", value:"Download", width:"100"  },
			{ type:"button" , name:"bug:bug:removeMe", value:"Close", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"bug_add_set", label:"Addons", offsetLeft:"30", list:[
	        { type:"button" , name:"bug:attachment:handle_custom_changes", value:"Attachments", width:"100", command:""},                                              	     
	 ]  },
	 { type:"fieldset" , name:"bug_view_set", label:"Next Steps", offsetLeft:"30", list:[
	       { type:"button" , name:"scroll:resolution", value:"Go To Resolution", width:"100"  }, 
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"bug_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"bug_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"bug_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var bug_grid_context=
	[
	{ type:"fieldset" , name:"bug_list", label:"Bug List", list:[
	    
		{ type:"container" , name:"bug_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"bug_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"bug_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"bug_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"bug_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:bug", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var bug_toolbar=
	[
		{ id: "new", type: "buttonSelect", img: "new.gif",text: "Add", title:"Add to Bug", openAll: true, renderSelect: false,
			options: [
			    { type: "button", id: "bug:attachment:handle_custom_changes", text: "Add Attachment", img: "attachment.gif"},
				
			]
		},
		{ id: "create:bug", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:bug", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ id: "bug:bugscenerio:handle_custom_changes", type: "button", img: "scenario.gif",  title: "View scenerio", action:"" },
		{ id: "file:download:bug", type: "button", img: "download.gif",  title: "Download bug list", action:"" },
		{ id: "bug:bug:removeMe", type: "button", img: "close.gif", title: "Close", action:""},
		{ type: "separator" },
		{ id: "scroll:resolution", type: "button", img: "down1.gif", title: "Next step to bug board", action:""}
		
	];



/*

var attachment_grid_context=
	[
		{ type:"fieldset" , name:"attachment_list", label:"Attachment List", list:[
			{ type:"container" , name:"attachment_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"attachment_action_set", label:"Actions", offsetLeft:"30", list:[
	        { type:"button" , name:"make:attachment:createAttachment", value:"Upload", width:"100"  },
			{ type:"button" , name:"show:attachment:getDownloadFile", value:"Download", width:"100"  },
			{ type:"button" , name:"delete:attachment:deleteFile", value:"Delete", width:"100"  },
			{ type:"button" , name:"bug:attachment:removeMe", value:"Close", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"attachment_view_set", label:"Previous Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:sceneriorun", value:"Back To Test", width:"100"  },
	        { type:"button" , name:"scroll:testscenerio", value:"Back To Scenerio", width:"100"  },
	        { type:"button" , name:"scroll:featurerun", value:"Back To Feature", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"attachment_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"attachment_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"attachment_fileupload_cont", inputWidth:300, inputHeight:200  },
			{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  }
	]  }
	];

*/
var attachment_grid_context=
	[
	{ type:"fieldset" , name:"attachment_list", label:"Attatchment List", list:[
	    
		{ type:"container" , name:"attachment_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"attachment_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"attachment_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"attachment_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"container" , name:"attachment_fileupload_cont", inputWidth:300, inputHeight:200  },
		{ type:"container" , name:"simpleLog", inputWidth:300, inputHeight:200  },
		{ type:"block" , name:"attachment_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:attachment", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var attachment_toolbar=
	[
		
		{ id: "make:attachment:createAttachment", type: "button", img: "upload.gif",  title: "Upload file", action:"" },
		{ id: "show:attachment:getDownloadFile", type: "button", img: "download.gif",  title: "Download attachment", action:"" },
		{ id: "delete:attachment:deleteFile", type: "button", img: "delete.gif",  title: "Delete attachment", action:"" },
		{ id: "bug:attachment:removeMe", type: "button", img: "close.gif", title: "Close", action:""},
		{ type: "separator" },
		{ id: "scroll:sceneriorun", type: "button", img: "up1.gif", title: "Back to test", action:""},
		{ id: "scroll:testscenerio", type: "button", img: "up1.gif", title: "Back to scenario", action:""},
		{ id: "scroll:featurerun", type: "button", img: "up1.gif", title: "Back to feature", action:""}
		
	];



/*
var bugscenerio_grid_context=
	[
		{ type:"fieldset" , name:"bugscenerio_list", label:"Member List", list:[
				{ type:"container" , name:"bugscenerio_grid_container", id:"bugscenerio_grid_container", inputWidth:"500", inputHeight:"400"  },
				{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"bugscenerio_view_set", label:"Previous Steps", offsetLeft:"30", list:[
		         { type:"button" , name:"scroll:bug", value:"Back To Bug", width:"100"  },
		         { type:"button" , name:"scroll:mybug", value:"Back To Bug", width:"100"  },
		 ]  },
		 { type:"newcolumn"   },
		 { type:"fieldset" , name:"bugscenerio_workarea_set", label:"Work Area", offsetLeft:"30", list:[
				{ type:"container" , name:"bugscenerio_form_cont", inputWidth:"50%", inputHeight:"100%"  },
				{ type:"container" , name:"bugscenerio_datagrid_cont", inputWidth:0, inputHeight:0  }
		]  }
	];
	
	*/

var bugscenerio_grid_context=
	[
	{ type:"fieldset" , name:"bugscenerio_list", label:"Bug Scenario List", list:[
	    
		{ type:"container" , name:"bugscenerio_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"bugscenerio_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"bugscenerio_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"bugscenerio_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"bugscenerio_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:bugscenerio", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var bugscenerio_toolbar=
	[
		
	{ id: "scroll:bug", type: "button", img: "up.gif", title: "Back to Bug", action:""},
	{ id: "scroll:mybug", type: "button", img: "up1.gif", title: "Back to my bug", action:""},
		
	];


/*
var resolution_grid_context=
	[
		{ type:"fieldset" , name:"resolution_list", label:"Resolution List", list:[
			{ type:"container" , name:"resolution_grid_container", inputWidth:"500", inputHeight:"400"  },
			{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"resolution_action_set", label:"Actions", offsetLeft:"30", list:[
			{ type:"button" , name:"create:resolution", value:"Create", width:"100"  },
			{ type:"button" , name:"save:resolution", value:"Save", width:"100"  },
			{ type:"button" , name:"mybug:resolution:removeMe", value:"Close", width:"100", command:""  }
	 ]  },
	 { type:"fieldset" , name:"resolution_view_set", label:"Next Steps", offsetLeft:"30", list:[
	        { type:"button" , name:"scroll:bug", value:"Back To Bug", width:"100"  },
	 ]  },
	 { type:"newcolumn"   },
	 { type:"fieldset" , name:"resolution_workarea_set", label:"Work Area", offsetLeft:"30", list:[
			{ type:"container" , name:"resolution_form_cont", inputWidth:"50%", inputHeight:"100%"  },
			{ type:"container" , name:"resolution_datagrid_cont", inputWidth:0, inputHeight:0  }
	]  }
	];
*/

var resolution_grid_context=
	[
	{ type:"fieldset" , name:"resolution_list", label:"Resolution List", list:[
	    
		{ type:"container" , name:"resolution_grid_container", inputWidth:"500", inputHeight:"400"  },
		{ type:"input" , name:"grid:rowcount", label:"Total Rows:"  },
		
		{ type:"newcolumn"   },
		
		{ type:"block" , name:"resolution_action_block", offsetLeft:"30", list:[
        
		{ type:"container" , name:"resolution_form_cont", inputWidth:"50%", inputHeight:"100%"  },
		{ type:"container" , name:"resolution_datagrid_cont", inputWidth:0, inputHeight:0  },
		{ type:"block" , name:"resolution_save_block", offsetLeft:"100", list:[
		{ type:"button" , name:"save:resolution", value:"Save", width:"90",  }
		]  },
		]  },
	]  }
	
	];

var resolution_toolbar=
	[
		
		{ id: "create:resolution", type: "button", img: "create.gif", title: "Create", action:""},
		{ id: "save:resolution", type: "button", img: "save.gif",  title: "Save", action:"" },
		{ type: "separator" },
		{ id: "mybug:resolution:removeMe", type: "button", img: "up1.gif", title: "Previous step", action:""},
		{ id: "scroll:bug", type: "button", img: "up1.gif", title: "Next step to bug", action:""}
		
	];


function createAttachment(name){
	doUpload(name);
}



function doUpload(name) {
	
	var table;
	var relation;
	var parent_objid;
	var items=name.split(":");
	if(items &&items.length==3){
		table=items[1];
	}
	var uploadcontainer;
	var widget_form=getWidgetForm(table);
	if(widget_form){
		uploadcontainer=widget_form.getContainer(table+'_fileupload_cont');
	}
	var parent=getParent(menuid,table);
	var grid=gridlist[parent];
	if(parent &&grid&&grid.getSelectedRowId()){
		relation=getRelation(menuid,table);
		parent_objid=grid.cells(grid.getSelectedRowId(),1).getValue();
	}else{
		dhtmlx.alert("please select a row in the parent grid="+parent);
		return;
	}
	var upload_url=www_url+'/rest/file/upload?token='+token+"&table="+table.toLowerCase();
	if(relation && parent_objid){
		upload_url+="&relation="+relation+"="+parent_objid;
	}
	var formData = [
		{type: "fieldset", label: "Uploader", list:[
			{type: "upload", name: "myFiles", inputWidth: 330, url: upload_url}
		]}
	];
	if(attachment_form){
		attachment_form.unload();
		attachment_form=null;
	}
	attachment_form = new dhtmlXForm(uploadcontainer, formData);
	
	
	
	attachment_form.attachEvent("onUploadFile",function(realName, serverName){
		dhtmlx.alert("<b>onUploadFile</b>, real name: "+realName+", server name: "+serverName);
	});
	
	attachment_form.attachEvent("onUploadComplete",function(count){
		
		reloadGrid(table);
	});
	
	attachment_form.attachEvent("onUploadFail",function(realName){
		//getStatus();
		reloadGrid(table);
	});
	
	attachment_form.attachEvent("onFileAdd",function(realName){
		
		reloadGrid(table);
	});
	
	
}

function getDownloadFile(name){
	 var rowid;
	 var colidx=5;
	var items=name.split(":");
	if(items &&items.length==3){
		table=items[1];
		if(table &&table.toLowerCase()=='resume'){
			colidx=4;
		}
		if(table &&table.toLowerCase()=='documents'){
			colidx=7;
		}
	}
	
	 if(current_grid){
		 try{
			 rowid=current_grid.getSelectedRowId();
		 }catch(err){
			 //dhtmlx.alert(err);
			 rowid=current_grid.getSelectedRowId();
		 }
		
		 if(rowid){
			 var uri=current_grid.cells(rowid,colidx).getValue();
			 var url=www_url.replace("testrepo","").trim()+"/"+uri;
			 downloadURI(table, url,"download me");
			
		 }else{
			 dhtmlx.alert("Please select a row from the list to download!")
		 }
	 }
	  
	}

function downloadURI(table,uri, name) 
{  
	var uploadcontainer=getWidgetForm(table).getContainer(table+'_fileupload_cont');
    var link = document.createElement("a");
    uploadcontainer.appendChild(link);
    link.download = name;
    link.href = uri;
    link.click();
}

function deleteFile(name){
	 var rowid;
	 var colidx=5;
	var items=name.split(":");
	if(items &&items.length==3){
		table=items[1];
		if(table &&table.toLowerCase()=='resume'){
			colidx=4;
		}
	}
	
	 if(current_grid){
		 try{
			 rowid=current_grid.getSelectedRowId();
		 }catch(err){
			 //dhtmlx.alert(err);
			 rowid=current_grid.getSelectedRowId();
		 }
		
		 if(rowid){
			 var uri=current_grid.cells(rowid,colidx).getValue();
			 var delete_url=www_url+'/rest/file/delete?token='+token+"&filename="+uri.split("/")[1]+"&table="+table.toLowerCase();
			 //dhtmlx.alert(delete_url);
			 var response=executeGet(delete_url);
			 if(response){
				 dhtmlx.alert(response);
			 }
		 }else{
			 dhtmlx.alert("Please select a row from the list to download!")
		 }
	 }
	 reloadGrid(table);
	}
function getStatus() {
	var s = attachment_form.getUploaderStatus("myFiles");
	dhtmlx.message(s);
}

