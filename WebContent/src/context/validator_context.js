
function setupValidator(name, description,packagename){
	validator_template={ "validator": {}};
	try{
		if(description &&description.indexOf("curl")>0) description=description.substring(0,(description.indexOf("curl")-5));
		if(name ){
			validator_template.validator["_name"]=name;
			validator_template.validator["_description"]=description;
			validator_template.validator["_packagename"]=packagename;
			
			
		}
	}catch(err){}
}
function getObjectVar(key,value){
	var obj={};
	obj["_id"]=key;
	obj["_value"]=value;
}
function setValidatorVaraibles(key, value){
	try{
		var  idx=0;
		if(key && value){
			if(!validator_template.validator["variables"]){
				validator_template.validator["variables"]={};
				validator_template.validator["variables"]["var"]=[];
				validator_template.validator["variables"]["var"][idx]={};
				validator_template.validator["variables"]["var"][idx]["_id"]=key;
				validator_template.validator["variables"]["var"][idx]["_value"]=value;
			}else{
				idx=validator_template.validator["variables"]["var"].length;
				validator_template.validator["variables"]["var"][idx]={};
				validator_template.validator["variables"]["var"][idx]["_id"]=key;
				validator_template.validator["variables"]["var"][idx]["_value"]=value;
				
			}
			
		}
	}catch(err){}
}

function setupValidateWs(name, method,url, callwait){
	try{
		if(name && method &&url){
			if(!validator_template.validator["ws"]){
				validator_template.validator["ws"]={};
				
			}
			validator_template.validator["ws"]["url"]=url;
			validator_template.validator["ws"]["_name"]=name;
			validator_template.validator["ws"]["_method"]=method;
			validator_template.validator["ws"]["_callwait"]=callwait;	
			
			
		}
	}catch(err){}
}

function getObjectParam(key,value){
	var obj={};
	obj["_name"]=key;
	obj["__text"]=value;
}
function setupValidatorWsAttributes(key, value, attrtype){
	try{
		if(key && value && attrtype){
			if(key=='body' &&value.indexOf("-d")>0){
				try{
					var begin=value.indexOf("-d")+3
					var end=value.indexOf("}}'")+2;
					 value=value.substring(begin,end);
					 value=value.replace("'{","{");
					 
				}catch(err){}
				
			}
			var  idx=0;
			if(!validator_template.validator["ws"]){
				validator_template.validator["ws"]={};
				
			}
			if(attrtype &&attrtype=="param" ){
				
				if(!validator_template.validator["ws"]["param"]){
					validator_template.validator["ws"]["param"]=[];
				}else{
					idx=validator_template.validator["ws"]["param"].length;
				}
				validator_template.validator["ws"]["param"][idx]={};
				validator_template.validator["ws"]["param"][idx]["_name"]=key;
				validator_template.validator["ws"]["param"][idx]["__text"]=value;
			}else if(attrtype &&attrtype=="cookie" ){
				if(!validator_template.validator["ws"]["cookie"]){
					validator_template.validator["ws"]["cookie"]=[];
				}else{
					idx=validator_template.validator["ws"]["cookie"].length;
				}
				validator_template.validator["ws"]["cookie"][idx]={};
				validator_template.validator["ws"]["cookie"][idx]["_name"]=key;
				validator_template.validator["ws"]["cookie"][idx]["__text"]=value;
				
			}
			
		}
	}catch(err){}
}

function setValidatorAsserts(name, nodepath,indexpath,elements,values,datatype,operator){
	try{
		var  idx=0;
		if(name && value){
			if(!validator_template.validator["assert"]){
				validator_template.validator["assert"]={};
				
			}else{
				idx=validator_template.validator["assert"].length;
				
			}
			validator_template.validator["assert"][idx]["_name"]=key;
			validator_template.validator["assert"][idx]["_nodepath"]=value;
			validator_template.validator["assert"][idx]["_indexpath"]=indexpath;
			validator_template.validator["assert"][idx]["_elements"]=elements;
			validator_template.validator["assert"][idx]["_values"]=values;
			validator_template.validator["assert"][idx]["_datatype"]=datatype;
			validator_template.validator["assert"][idx]["_operator"]=operator;
			
		}
	}catch(err){}
}



function showTestmaxXML(name){
	var items;
	var content;
	if(name){
		items=name.split(":");
		updateHTMLContent(items[0],items[1],validator_xml);
	}
	
}

function showTestmaxJson(name){
	var items;
	var content;
	if(name){
		items=name.split(":");
		content=JSON.stringify(validator_template);
		content=content.split("{").join("<br>{");
		updateHTMLContent(items[0],items[1],content);
	}
	
}

//Copies a string to the clipboard. Must be called from within an 
//event handler such as click. May return false if it failed, but
//this is not always possible. Browser support for Chrome 43+, 
//Firefox 42+, Safari 10+, Edge and IE 10+.
//IE: The clipboard feature may be disabled by an administrator. By
//default a prompt is shown the first time the clipboard is 
//used (per session).
function copyToClipBoard(name) {
	var table;
	if(name){
		table=name.split(":")[0];
	}
	var html_cell=htmlcells[table];
	if(!validator_xml){ 
		text="Nothing to copy!"
	}else if(html_cell.getText()=="RestAssured"){
		text=restassuredcontent;
		text=text.split("<br>").join("\n");
	}else if(html_cell.getText()=="ValidatorJSON"){
		text=JSON.stringify(validator_template);
		text=text.split("<br>").join("\n");
	}else if(html_cell.getText()=="ValidatorXML"){
		text=validator_xml;
		text=text.split("&lt;").join("<");
		text=text.split("&gt;").join(">");
		text=text.split("<br>").join("\n");
		text=text.split("&quot;").join("\"");
	}
		
	
	
 if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
     var textarea = document.createElement("textarea");
     textarea.textContent = text;
     textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
     document.body.appendChild(textarea);
     textarea.select();
     try {
         return document.execCommand("copy");  // Security exception may be thrown by some browsers.
     } catch (ex) {
         console.warn("Copy to clipboard failed.", ex);
         return false;
     } finally {
         document.body.removeChild(textarea);
     }
 }
}
/*
var validator_template={
		  "validator": {
			    "variables": {
			      "var": [
			        {
			          "_id": "endpoint",
			          "_value": "global:envsetup.endpoint_iop_@env_url",
			          "_index": "0"
			        },
			        {
			          "_id": "companyName",
			          "_value": "Autotask Company @now",
			          "_global": "yes"
			        }
			      ]
			    },
			    "ws": {
			      "url": "@endpoint/webservices/json/MarketingManager/v1",
			      "param": [
			        {
			          "_name": "Accept",
			          "__text": "application/json"
			        },
			      ],
			      "cookie": [
			        {
			          "_name": "qbn.ptc.agentid",
			          "__text": "@agentId"
			        }
			      ],
			      "_name": "ws1",
			      "_method": "POST",
			      "_callwait": "1000"
			    },
			    "assert": {
			      "_name": "Verify company Id",
			      "_nodepath": "return",
			      "_indexpath": "0",
			      "_elements": "CompanyExternalId",
			      "_values": "0",
			      "_datatype": "number",
			      "_failtoexit": "@failtoexit",
			      "_operator": "Gt"
			    },
			    "_name": "Call CreateCompany API",
			    "_description": "Test CreateCompany API"
			  }
			}
*/