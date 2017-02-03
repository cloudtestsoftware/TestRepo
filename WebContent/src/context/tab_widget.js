var tabwidget_container;
var tabwidget_form;
var tabwidget_layout;
var tabwidget_cell;
var tabwidgetlist;
var tabwidgetforms;
var tabdataforms;
var tab_form;


function initTabWidget(){
	 tabwidgetlist={};
	 tabwidgetforms={};
	 tabdataforms={};
}
//use this function to add container under tab
function addTabContainer(table,container,form){

	 var fieldset_name=table+"_tab_form_fieldset";
	 var caption=getCaption(menuid,table);
	 var height="500";
	 if(getLayoutHeight(table)){
	 	height=getLayoutHeight(table);
	 }
	 
	 var itemData=	{ type:"fieldset" , name:fieldset_name, label:caption, list:[
			{ type:"container" , name:container, inputWidth:layoutWidth, inputHeight:height  }
			]  }
			
	 form.addItem(null, itemData, itemcount++, "insertAfter");
	 tab_form=form;

}

function addTabWidgetLayout(table,container,form, filter){
    var contextData=null;
    var caption=getCaption(menuid,table);
 	tabwidget_form=tabwidgetforms[table];
 	//button_width=getButtonWidth(table);
  	/* tabwidget_layout = new dhtmlXLayoutObject({
		parent: form.getContainer(container),
		pattern: '1C'
	});
	*/
 	tabwidget_layout = new dhtmlXLayoutObject({
 		parent: form.getContainer(container),
 		pattern: '1C',
 		skin:skin,
 		cells: [{id: "a", header: false, margin:"0px"}]
 	});
 	try{
 		toolbarData=eval(table+"_tab_toolbar");
 		if(toolbarData){
 	    	widget_toolbar = tabwidget_layout.attachToolbar();
 	     	widget_toolbar.setIconsPath('./src/codebase/imgs/icons/imgs/24/');
 	     	widget_toolbar.loadStruct(toolbarData, function() {});
 	     	widget_toolbar.attachEvent("onClick", function(id){
 	     		 action_button_callback(id,null);
 	     	});
 	    }
 	}catch(err){
 		dhtmlx.message(err + "! No Toolbar data for "+table+"!");
 	}
 	
	//
	try{
     	contextData=eval(table+"_tab_grid_context");
    	tabwidget_cell = tabwidget_layout.cells('a');
		tabwidget_cell.setText(caption);
   		tabwidgetlist[table]=tabwidget_layout;
		tabwidget_form=tabwidget_cell.attachForm(contextData);
		tabwidget_form.attachEvent('onButtonClick', function(name, command){
	        action_button_callback(name,command);
		});
		try{
			
			//toolbarwidgetforms[menuid][table]=tabwidget_form;
			//tabwidget_form=toolbarwidgetforms[menuid];
			
		}catch(err){}
		
		tabwidgetforms[table]=tabwidget_form;
		if( current_grid &&current_grid.getSelectedRowId()){
			current_parent_id=current_grid.cells(current_grid.getSelectedRowId(),1).getValue();
			tabwidgetforms[table].setUserData("parent_objid","",current_parent_id);
		}
		try{
			
		}catch(err){}
		
		tabwidgetforms[table].setUserData("filter","",filter);
		container=table+"_tab_grid_container";
    	addGridToTabForm(container,table,tabwidget_form,filter);
    
    }catch(err){
      dhtmlx.message(err + " please define "+table+"_grid_context");
      //clearParentChildBeneath(table);
      return false;
    }
   
}

function addGridToTabForm(container, table,tabwidget_form,filter){
	
	var  gurl;
	var relation;
   
  	var	grid=new dhtmlXGridObject(tabwidget_form.getContainer(container));
   
    if(filter){
        //dhtmlx.message(filter);
    	gurl=www_url+'/rest/'+table+'/filter?token='+token +"&filters="+filter;
    	
    }
	current_table=table;
	grid.clearAll();
	grid.load(gurl,'xml');
    grid.setUserData("","table",table);
	grid.attachEvent("onXLE", function(grid,count){
		if(updated_objid){
			selectGridRow(table,updated_objid)
			updated_objid=null;
	    }
		callCustomRowSelect(table,"onXLE");
		callCustomFormLoad(table);
  	});
  	
	
	grid.attachEvent('onRowSelect',function(rowId,cellIndex){
		
        	 //clear all child table underneath current_table
         	 clearParentChildBeneath(table)
       
			grid_onRowSelect_callback(grid,table,rowId,cellIndex);
         	gridlist[table]=grid;
		
	});
	
	grid.attachEvent("onCheck", function(rId,cInd,state){
		
		    //dhtmlx.message(grid.cells(rId,0).getValue());
			grid.selectRowById(rId);
			grid_onRowSelect_callback(grid,table,rId,cInd);
			callCustomRowSelect(table);
		
	});
	
	
	grid.attachEvent("onRowCreated", function(rId,rObj,rXml){
		showListInGrid(grid,table);
	}); 
	current_grid=grid;
	gridlist[table]=grid;
	 var data_form=dataforms[table];
	 
	 if(data_form){
	   try{
	   
	 	data_form.unload();
	 	
	   }catch(err){
	   
	   }
	 	data_form=null;
	 	addTabDataForm(table);
	 }else{
		 addTabDataForm(table);
     }

}

function addTabDataForm(table){
	   var parent_objid;
	   var container=table+"_form_cont";
	   var data_form=tabdataforms[table];
	    if(data_form){
	       try{
	            data_form.unload();
	            data_form=null;
	        }catch(err){
	            data_form=null;
	        }
	    }
	    if(tabwidgetforms[table]){
	    	parent_objid=tabwidgetforms[table].getUserData("parent_objid","");
	    }

	    var  furl=www_url+'/rest/'+table+'/form?token='+token +"&relationfilter="+parent_objid;
	    
	   
	    tabwidget_form=tabwidgetforms[table];
	    
	    data_form=new dhtmlXForm(tabwidget_form.getContainer(container));
	    
	    data_form.setUserData("","table",table);
	   
	    
	    var formstruct=datafromstruct[table];
	    if(!formstruct){
	        
	        data_form.load(furl);
	        get(furl,table);
	        
	     }else{
	         data_form.loadStruct(formstruct);
	    }
	 
	    data_form.attachEvent("onFocus", function(name, value){
	        setFormRelation(table);
	    });
	    
	    data_form.attachEvent("onChange", function(name, value){
	    	callCustomFormOnChange(table);
		});
	    data_form.attachEvent("onXLE", function(){
	    	callCustomFormLoad(table);
		});
	                    
	    tabdataforms[table]=data_form;
	   
	    
	    
	}