
var restassuredcontent;
var cookies={};
var header={};
var variables={};

var restassured_template=
" package @packagename;\n\n"+
" import com.jayway.restassured.builder.RequestSpecBuilder;   \n "+
" import com.jayway.restassured.path.json.JsonPath;   \n "+
" import com.jayway.restassured.response.Response;   \n "+
" import com.jayway.restassured.specification.RequestSpecification;   \n "+
" import static com.jayway.restassured.RestAssured.given;   \n "+
" import com.testmax.track.CustomHandler; \n"+
" import java.util.HashMap;   \n \n \n"+



/**
 * Created by testrepo on .
 */
" public class @apiname { \n \n "+
    
    " private  HashMap<String,String> header;   \n "+
    " private  HashMap<String,String> cookies;   \n "+
    " private  HashMap<String,String> variables;   \n "+
    " private  static HashMap<String,String> inputlist;   \n "+
    " private  static HashMap<String,String> outputlist;   \n "+
    " private  RequestSpecBuilder builder;   \n "+
    " private  Response response;   \n "+
    " private  Response callerresponse;   \n "+
    " private  RequestSpecification spec;   \n "+
    " private  JsonPath jsonpath;   \n "+
    " private  String url=\"@url\";   \n "+
    " private static HashMap<String,String> varmap; \n"+
    " private  String method=\"@method\";   \n \n"+
    


    " public static void main(String[] args) { \n"+
    "         runtest(); \n"+
   "} \n\n"+
   
   " // add list of behaviors you want to execute in this method calling .then().nextBehaviorToCall()\n" +
   "public static void runtest() { \n"+
   "      varmap=CustomHandler.getVarMap(); \n"+
   "      setGlobalInputData(); \n"+
   "      setGlobalOutputtData(null); \n"+
   "      @apiname test= new @apiname(null,null);   \n "+
   "      test.@apiname();   \n "+
  "} \n\n"+
  " public @apiname(){ \n"+
  "    this.varmap= CustomHandler.getVarMap(); \n"+
  "      setGlobalInputData(); \n"+
  "      setGlobalOutputtData(null); \n"+
  "} \n\n"+
   " public @apiname( Response response,HashMap<String,String> cookies){ \n"+
   "    this.callerresponse=response; \n"+
   "    this.cookies=cookies;  \n"+
   "    this.varmap= CustomHandler.getVarMap(); \n"+
   "} \n\n"+
    " private  HashMap<String,String> getHeader(){ \n"+
    "    header=new HashMap<String,String>();   \n "+
    "   @header \n"+

    "    return header;   \n "+
   "} \n\n"+

    " private  HashMap<String,String> getDefaultCookies(){\n"+
    "    cookies=new HashMap<String,String>();   \n "+
    "    @cookies \n"+
    "    return cookies;   \n "+
    "}\n\n"+

    " private  HashMap<String,String> getVariables(){\n"+
    "    variables=new HashMap<String,String>();   \n "+
    "    @variables \n "+
    "    return variables;   \n "+
    "}\n\n"+
    
    " private static void setGlobalInputData(){\n"+
    "    inputlist=new HashMap<String,String>();   \n "+
    "    @inputlist \n "+
    "}\n\n"+
    
    " private static void setGlobalOutputtData( HashMap<String,String> newoutputlist){\n"+
    "    if(outputlist==null &&newoutputlist==null) {" +
    "    \toutputlist=new HashMap<String,String>();   \n "+
    "    \t@outputlist \n "+
    "} else{\n outputlist=newoutputlist; \n}\n}\n\n"+

    " private  String getRequestBody(){\n"+
    "    String body=\"@body\";   \n \n"+
    "// first replace local variables\n"+
    "    HashMap<String,String> vars=getVariables();   \n "+
    "    for(String key : vars.keySet()){ \n "+
    "        String val=vars.get(key);   \n "+
    "        body=body.replaceAll(\"@\"+key,val);   \n "+
        "}\n"+
    "// next replace data from input XL sheet\n"+
    "    if (varmap!=null){\n"+
    "\t    for(String key : varmap.keySet()){ \n "+
    "\t        String val=varmap.get(key);   \n "+
    "\t        body=body.replaceAll(\"@\"+key,val);   \n "+
    "\t}\n }\n"+
    "// then replace output data from the previous call\n"+
    "    if (outputlist!=null){\n"+
    "\t    for(String key : outputlist.keySet()){ \n "+
    "\t        String val=outputlist.get(key);   \n "+
    "\t        body=body.replaceAll(\"@\"+key,val);   \n "+
    "\t}\n }\n"+
    "    return body;   \n "+

    "}\n\n"+

    " public Response getResponse(){\n"+

    "    return response;   \n "+
    "}\n\n"+

    " public JsonPath getJsonPath(){\n"+

    "    return jsonpath;   \n "+
    "}\n\n"+
   
    "    private void populateOutputList(){ \n"+
     "       if(outputlist!=null && jsonpath!=null){ \n"+
      "          for(String key : outputlist.keySet()){ \n"+
      "              String xpath=outputlist.get(key); \n"+
     "               try{ \n"+
     "                   String val=jsonpath.getString(xpath); \n"+
     "                   if(val!=null && !val.isEmpty() ){ \n"+
     "                       outputlist.put(key,val); \n"+
    "                      CustomHandler.addTestResult(key,val); \n"+
        "                    }  \n"+
        "                }catch(Exception e){}\n"+
        "           }\n"+
        "     }\n"+
        "  } \n"+

    " public HashMap<String,String> getCookies(){\n"+
    "   return cookies;   \n "+
    "}\n\n"+
    " public ApiMapper @apiname(){\n"+

    "    builder = new RequestSpecBuilder().addHeaders(getHeader());   \n "+
    "// if this is the fist call from the client then set the cookie otherwise get cookie from previous call\n"+
    "    if(this.getCookies()==null){ \n "+
    "        builder.addCookies(this.getDefaultCookies());   \n "+
        "}else{\n"+
    "    	 builder.addCookies(this.cookies); \n"+
    "}\n"+
    "    if(method.equalsIgnoreCase(\"POST\")){ \n "+
    "        builder.setBody(getRequestBody());   \n "+
    "        spec = builder.build().log().all();   \n "+
    "        response = given(spec).post(url).then().log().all().extract().response();   \n "+
        "} else if(method.equalsIgnoreCase(\"GET\")){ \n "+
    "        spec = builder.build().log().all();   \n "+
     "       response = given(spec).get(url).then().log().all().extract().response();   \n "+
        "}\n"+
     "   jsonpath = new JsonPath(response.asString());   \n "+
     "   populateOutputList(); \n" +
     "   cookies.putAll(response.getCookies());   \n "+
     "   return new ApiMapper();   \n "+
    "}\n\n"+ 
    
    "class ApiMapper { \n"+
        "\t// add behaviors which should follow to the next call \n"+
        "\t// use default behavior as then() and change return object type replacing void \n"+
        "\t// Ex:  private updateCompanyAddress.ApiMapper updateCompanyAddress(){ \n"+
        "\t//    updateCompanyAddress called= new updateCompanyAddress(response,cookies); \n"+
        "\t//    updateCompanyAddress.ApiMapper obj=called.updateCompanyAddress();\n\n"+
        "\t//    updateCompanyAddress.setGlobalOutputtData(outputlist);\n"+
        "\t//    add any return varaible need to assert \n"+
        "\t//    CustomHandler.addTestResult(\"companyId\",String.valueOf(jsonpath.getInt(\"loginMobileMultiResponse.return.id[0]\"))); \n"+
        "\t//    return obj;\n"+
        "\t//} \n\n"+
        "\t      private ApiMapper then() {return this;} \n"+
        
        "\t//    1st behavior \n " +
        "\t//    private anotherClass.ApiMapper anotherBhavior(){ \n"+
        "\t//    anotherClass called= new anotherClass(response,cookies); \n"+
        "\t//    anotherClass.ApiMapper obj=called.anotherBhavior();\n"+
        "\t//    return obj;\n"+
        "\t//} \n\n"+
        "\t//    2nd behavior \n " +
        "\t//    private anotherClass2.ApiMapper anotherBhavior2(){ \n"+
        "\t//    anotherClass2 called= new anotherClass2(response,cookies); \n"+
        "\t//    anotherClass2.ApiMapper obj=called.anotherBhavior2();\n"+
        "\t//    return obj;\n"+
        "\t//} \n\n"+
    "}\n\n"+
"}\n";

function getRestAssuredTemplate(){
	var template=restassured_template
	var cookies;
	var header;
	var variables;
	var repogrid=gridlist["servicerepo"];
	var inputdata;
	var outputdata;
	if(repogrid){
		 var rowid=repogrid.getSelectedRowId();
		 if(!rowid) rowid=1;
		 
		 inputdata=getColumnValueByGridRowId(repogrid,"postbody",rowid);
		 outputdata=getColumnValueByGridRowId(repogrid,"responsebody",rowid);
		 if(inputdata){
			 var inputvarlist=inputdata.replace("D!","").split("\n");
			 var inputlist="";
			 if(inputvarlist &&inputvarlist.length>0){
				 for(var i=0;i<inputvarlist.length;i++){
					 var items=inputvarlist[i].split("=");
					 if(items &&items.length>1){
						 inputlist+="\inputlist.put(\""+items[0]+"\",\""+items[1]+"\");\n";
					 }
				 }
				
			 }
			 if (inputlist!=""){
					template=template.split("@inputlist").join(inputlist);
			}	
		 }else{
				template=template.split("@inputlist").join("");
			}
		 
		 if(outputdata){
			 var outputvarlist=outputdata.replace("D!","").split("\n");
			 var outputlist="";
			 if(outputvarlist &&outputvarlist.length>0){
				 for(var i=0;i<outputvarlist.length;i++){
					 var oitems=outputvarlist[i].split("=");
					 if(oitems &&oitems.length>1){
						 outputlist+="\toutputlist.put(\""+oitems[0]+"\",\""+oitems[1]+"\");\n";
					 }
				 }
				
			 }
			 
			 if (outputlist!=""){
					template=template.split("@outputlist").join(outputlist);
			}
		 }else{
				template=template.split("@outputlist").join("");
			}
		 
	}
	if (validator_template.validator["_packagename"]){
		template=template.split("@packagename").join(validator_template.validator._packagename);
	}
	if(validator_template.validator["ws"]["url"]){
		template=template.split("@url").join(validator_template.validator.ws.url);
	}
	
	if(validator_template.validator["ws"]["_name"]){
		template=template.split("@apiname").join(validator_template.validator.ws._name.split(" ").join("_"));
	}
	
	if(validator_template.validator["ws"]["_method"]){
		template=template.split("@method").join(validator_template.validator.ws._method.split(" ").join("_"));
	}
	
	if(validator_template.validator["ws"]["cookie"].length>0){
		cookies="";
		for (var idx=0; idx<validator_template.validator["ws"]["cookie"].length; idx++){
			
			var key=validator_template.validator["ws"]["cookie"][idx]["_name"];
			var value=validator_template.validator["ws"]["cookie"][idx]["__text"];
			cookies+="\tcookies.put(\""+key+"\",\""+value+"\");\n";
		}
		
	}
	
	if(validator_template.validator["ws"]["param"].length>0){
		header="";
		for (var idx=0; idx<validator_template.validator["ws"]["param"].length; idx++){
			
			var key=validator_template.validator["ws"]["param"][idx]["_name"];
			var value=validator_template.validator["ws"]["param"][idx]["__text"];
			if(key=="body"){
				value=value.split("\"").join("\\\"");
				value=value.split("\n").join("\"+\n\"");
				template=template.split("@body").join(value);
			}else{
				header+="\theader.put(\""+key+"\",\""+value+"\");\n";
			}
			
		}
		
	}
	
	if(validator_template.validator["variables"]["var"].length>0){
		variables="";
		for (var idx=0; idx<validator_template.validator["variables"]["var"].length; idx++){
			
			var key=validator_template.validator["variables"]["var"][idx]["_id"];
			var value=validator_template.validator["variables"]["var"][idx]["_value"];
			
			variables+="\tvariables.put(\""+key+"\",\""+value+"\");\n";
			cookies=cookies.split("@"+key).join(value);
		}
		
	}
	
	if(cookies){
		template=template.split("@cookies").join(cookies);
	}
	if(header){
		template=template.split("@header").join(header);
	}
	if(variables){
		template=template.split("@variables").join(variables);
	}
	
	//console.log(template);
	
	return template;
	
}

function showRestAssured(name){
	var items;
	
	if(name){
		items=name.split(":");
		restassuredcontent=getRestAssuredTemplate();
		restassuredcontent=restassuredcontent.split("\n").join("<br>");
		updateHTMLContent(items[0],items[1],restassuredcontent);
	}
	
}
