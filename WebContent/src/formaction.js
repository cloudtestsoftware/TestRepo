

 
/* Ajax Call */
function replace(strURL){
		var xmlHttpReq;
		// Mozilla/Safari
		if (window.XMLHttpRequest) {
			xmlHttpReq = new XMLHttpRequest();
		}
		// IE
		else if (window.ActiveXObject) {
			xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
		}	
		
			xmlHttpReq.open('GET', strURL, true);
			xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			xmlHttpReq.onreadystatechange = function() {
				if (xmlHttpReq.readyState == 4) {	
					document.getElementById("content").innerHTML =  xmlHttpReq.responseText;						
				}
			}
			xmlHttpReq.send(null);
		
}


function registerUser(){
    //var urldata;
    var www=document.getElementById("baseurl").value;
    var token=document.getElementById("token").value;
    
	var myform=document.forms['signInForm'];
	var formfields=myform.elements['formfields'].value.split(",");
	var xmldata=document.getElementById('xmldata').innerHTML;
	var leaddata=document.getElementById('leaddata').innerHTML;
	if(formfields!=null &&formfields.length>0){
		for(var i=0;i<formfields.length;i++){
			if(formfields[i]=='reasoncode'){
		       var reason=myform.elements['reasoncode'];
		       var code=reason.options[reason.selectedIndex].value;
		       xmldata=xmldata.split("@"+formfields[i]).join(code);
		       leaddata=leaddata.split("@"+formfields[i]).join(code);
		       
		       //for get
		       //urldata+="&"+formfields[i]+"="+code;
			}else{
		  		var val=myform.elements[formfields[i]].value;
		  		xmldata=xmldata.split("@"+formfields[i]).join(val);
		  		leaddata=leaddata.split("@"+formfields[i]).join(val);
		  		 //urldata+="&"+formfields[i]+"="+val;
		  	}
		}
	}
	 
	
	  xmldata=xmldata.split("!--").join("");
	  xmldata=xmldata.split("--").join("");
	  // lead
	  leaddata=leaddata.split("!--").join("");
	  leaddata=leaddata.split("--").join("");
	
	 //post URL
	 var url=www+"/rest/profile/formdata?token="+token;
	 var res=postData(xmldata,url,token);
	 
	//post Lead
	 //var leadurl=www+"/rest/lead/formdata?token="+token;
	 //var res=postData(leaddata,leadurl,token);
	 
	 sendEmail();
	
	return false;
}

 function resetPassword(){
		var www=document.getElementById("baseurl").value;
		var token=document.getElementById("token").value;
		var myform=document.forms['passwordResetForm'];
		var email=myform.elements['email'].value
		var url=www+"/rest/email/resetpassword?token="+token+"&sendto="+email;
		var pass="Your password reset is sucessful. Please check your email and use temporary password to login!";
		var fail="Your password reset is unsucessful! Please use correct email to reset password!"
		call_get(url,pass,fail);
		
		return false;
		
		
 }
function getData(url) {
    	var http;
    	var xmlDoc;
    	
       if (window.XMLHttpRequest)
  			{// code for IE7+, Firefox, Chrome, Opera, Safari
  				http=new XMLHttpRequest();
  			}
			else
  			{// code for IE6, IE5
  				http=new ActiveXObject("Microsoft.XMLHTTP");
  			}
			http.open("GET",url,false);
			http.send(null);
			
			
			http.onreadystatechange = function() {//Call a function when the state changes.
   			if(http.readyState == 4 && http.status == 200) {
   			   var get_reponse=http.responseText;
      			
      			
      			if (window.DOMParser)
  				{
  					parser=new DOMParser();
  					xmlDoc=parser.parseFromString(post_reponse,"text/xml");
  				}
	   			else // Internet Explorer
  				{
  					xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  		   			xmlDoc.async=false;
  					xmlDoc.loadXML(get_reponse); 
        		} 
        		var objid=xmlDoc.getElementsByTagName("cell")[1].childNodes[0].nodeValue;
        		
        		if(objid.length==32){
        			alert("Registration successful! Please login using your email and password.");
        		}else{
        		  	alert("Registration Failed! Email already in use. Retrieve your password using your email.");
        		}
   			}
		}
}


function call_get(url, pass_message, fail_message) {
	var http;
	var xmlDoc;
	
   if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
				http=new XMLHttpRequest();
			}
		else
			{// code for IE6, IE5
				http=new ActiveXObject("Microsoft.XMLHTTP");
			}
		http.open("GET",url,true);
		http.send(null);
		
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
			   var get_reponse=http.responseText;
			   if(get_reponse.indexOf("Success")>=0){
				   alert(pass_message);
			   }else{
				   alert(fail_message);
  				}
  			}
    		
		}
}
    
function postData(xml,url,token){
    
        var http = new XMLHttpRequest();
        var www=document.getElementById("baseurl").value;
        var token=document.getElementById("token").value;
        var email=document.getElementById("username").value;
        
		http.open("POST", url,true);
		
    
		http.onreadystatechange = function() {//Call a function when the state changes.
   			if(http.readyState == 4 && http.status == 200) {
   			   post_reponse=http.responseText;
      			//alert(post_reponse);
      			if (window.DOMParser)
  				{
  					parser=new DOMParser();
  					xmlDoc=parser.parseFromString(post_reponse,"text/xml");
  				}
	   			else // Internet Explorer
  				{
  					xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  		   			xmlDoc.async=false;
  					xmlDoc.loadXML(post_reponse); 
        		} 
        		var objid=xmlDoc.getElementsByTagName("cell")[1].childNodes[0].nodeValue;
        		
        		var email_url=www+"/rest/email/"+objid+"/sendemail?token="+token+"&sendto="+email+"&reason=activation";
        		if(objid){
        			
        			var pass="Registration successful! Please activate your account using your email.";
        			
        			var fail="Registration Failed! Email already in use. Retrieve your password using your email.";
        			
        			call_get(email_url,pass,fail);
        		}
        		
   			}
		}
		
		var formData = new FormData();
		formData.append("body", xml);
		http.send(formData);
		
    }

function sendEmail() {
	var http;
	var xmlDoc;

	var www=document.getElementById("baseurl").value;
	var token=document.getElementById("token").value;
	var subject=" New lead from Registration ";
	var leaddetails=document.getElementById("firstname").value +" " + 
	               document.getElementById("lastname").value +
	               "\n email="+document.getElementById("username").value +
	               "\n  phone="+document.getElementById("contactno").value ;
	
	var message="\n Hi ,   \nPlease look at the following lead who just signed up today    "+leaddetails +"  CRM Administrator";
	var url=www+"/rest/email/sendmessage?token="+token+"&sendto=sjana@cloudtestsoftware.com" +"&message="+message+"&subject="+subject;
	
   if (window.XMLHttpRequest)
			{// code for IE7+, Firefox, Chrome, Opera, Safari
				http=new XMLHttpRequest();
			}
		else
			{// code for IE6, IE5
				http=new ActiveXObject("Microsoft.XMLHTTP");
			}
		http.open("GET",url,true);
		http.send(null);
		
		
		http.onreadystatechange = function() {//Call a function when the state changes.
			if(http.readyState == 4 && http.status == 200) {
			   var get_reponse=http.responseText;
			   
  			}
    		
		}
}
