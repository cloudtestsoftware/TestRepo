
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
    " private  RequestSpecBuilder builder;   \n "+
    " private  Response response;   \n "+
    " private  Response callerresponse;   \n "+
    " private  RequestSpecification spec;   \n "+
    " private  JsonPath jsonpath;   \n "+
    " private  String url=\"@url\";   \n "+
    " private static HashMap<String,String> varmap; \n"+
    " private  String method=\"@method\";   \n \n"+
    


    " public static void main(String[] args) { \n"+
    "//      @apiname test= new @apiname(null,null);   \n "+
    "//      test.@apiname();   \n "+
    "         runtest(); \n"+
   "} \n\n"+
   
   " // add list of behaviors you want to execute in this method calling .then().nextBehaviorToCall()\n" +
   "public static void runtest() { \n"+
   "      varmap=CustomHandler.getVarMap(); \n"+
   "      @apiname test= new @apiname(null,null);   \n "+
   "      test.@apiname();   \n "+
  "} \n\n"+
  " public @apiname(){ \n"+
  "    this.varmap= CustomHandler.getVarMap(); \n"+
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

    " private  String getRequestBody(){\n"+
    "    String body=\"@body\";   \n "+

    "    HashMap<String,String> vars=getVariables();   \n "+
    "    for(String key : variables.keySet()){ \n "+

    "        String val=variables.get(key);   \n "+
    "        body=body.replaceAll(\"@\"+key,val);   \n "+
        "}\n"+
    "    return body;   \n "+

    "}\n\n"+

    " public Response getResponse(){\n"+

    "    return response;   \n "+
    "}\n\n"+

    " public JsonPath getJsonPath(){\n"+

    "    return jsonpath;   \n "+
    "}\n\n"+

    " public HashMap<String,String> getCookies(){\n"+

    "   return cookies;   \n "+
    "}\n\n"+
    " public ApiMapper @apiname(){\n"+

    "    builder = new RequestSpecBuilder().addHeaders(getHeader());   \n "+
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
     "   cookies.putAll(response.getCookies());   \n "+
     "   return new ApiMapper();   \n "+
    "}\n\n"+ 
    
    "class ApiMapper { \n"+
        "\t// add behaviors which should follow to the next call \n"+
        "\t// use default behavior as then() and change return object type replacing void \n"+
        "\t// Ex:  private updateCompanyAddress.ApiMapper updateCompanyAddress(){ \n"+
        "\t//    updateCompanyAddress called= new updateCompanyAddress(response,cookies); \n"+
        "\t//    updateCompanyAddress.ApiMapper obj=called.updateCompanyAddress();\n\n"+
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
	
	console.log(template);
	
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
