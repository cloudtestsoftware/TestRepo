
<!DOCTYPE html>
<html>
<head>
	<title>Sign in - Artitelly, Inc</title>

	<link rel="stylesheet" type="text/css" href="./src/login.css" />
	<script language="JavaScript" src="./src/formaction.js" type="text/javascript"></script>
	
</head>

<body >
	<!--

-->

<div class="topHead">
	<input type="hidden" id="token" value="<%=request.getParameter("token")%>"/>
	 <input type="hidden" id="baseurl" value="<%=request.getParameter("baseurl")%>"/>
</div>

<div id="content">
    
	<div id="signinBlock">
			<h1>Registration</h1>
			<p>Please do not use public email if you are not just a trial customer! Your test data will be visible to all users using same public email provider. </p><br>
			<p><b>Use your company email address such that we make a private group for your company and your data are secured only for your group.<b></b></p>
			<span class="formContainer">			    
 				<form id="signInForm" onsubmit="return registerUser();" action="/testrepo/service" method="POST">
					<span class="field signinRow ">
						<input class="fillin validated " autofocus="true" id="username" name="username" value="" title="Email" type="email" required="required" placeholder="Email" />
						<a class="resetPassLink" href="./service">Login?</a>
						<span class="message"></span>
					</span>
					
					<span class="field signinRow passRow ">
						<input class="fillin validated " id="password" name="password" title="Password" value="" type="password" required="required" placeholder="Password" />
						
						<span class="message"></span>
					</span>
					
					<span class="field signinRow ">
						<input class="fillin validated " id="firstname"  name="firstname"  value="" title="First Name" type="text" required="required" placeholder="First Name" />
						
						<span class="message"></span>
					</span>
					
					<span class="field signinRow passRow ">
						<input class="fillin validated " id="lastname" name="lastname" title="Last Name" value="" type="text" required="required" placeholder="Last Name" />
						
						<span class="message"></span>
					</span>
					
					<span class="field signinRow  ">
						<input class="fillin validated " id="company" name="company" title="Company" value="" type="text" required="required" placeholder="Company" />
						
						<span class="message"></span>
					</span>
				
				   <span class="field signinRow  ">
						<input class="fillin validated " id="country" name="country" title="Country" value="" type="text" required="required" placeholder="Country" />
						
						<span class="message"></span>
					</span>
					
				   <span class="field signinRow passRow ">
						<input class="fillin validated " id="contactno" name="contactno" title="Comtact No" value="" type="text" required="required" placeholder="Mobile Number" />
						
						<span class="message"></span>
					</span>
					
					<span class="field signinRow passRow ">
					<select id="reasoncode" name="reasoncode" class="blueText">
						<option selected="" value="0">---How do you find us?---</option>
						<option value="Friends">Friends and Reference</option>
						<option value="Internet">Internet</option>
						<option value="Social">Social Networking</option>
						<option value="Sam101">Sam Ramsey</option>
						<option value="Harry01">Harry Gordon</option>
						<option value="Chuck01">Chuck Nolan</option>
						<option value="Srimanta101">Srimanta Jana</option>
					</select>
					<span class="message"></span>
					</span>
					
					<div class="error">
						<span class="message"></span>
					</div>

					<div class="buttonWrap">
						<input type="hidden" name="persist" value="true" />
						<input type="hidden" name="returnTo" value="/" />
						<input type="hidden"  name="body" value="" />
						<input type="hidden"  name="token" value="" />
						<input type="hidden" id="formfields" value="username,password,firstname,lastname,country,company,contactno,reasoncode" />
						<input class="button" type="submit"  alt="Register Now!" value="Register" />
					</div>
				</form>	
			</span>
		</div>
		
<div  id="xmldata" style="display:none;">
    <?xml version="1.0" encoding="UTF-8"?>
	<profile>
		<record id="0">
			<objid isRequired="true" type="RAW"></objid>
			<name isRequired="true" type="VARCHAR">@username</name>
			<password isRequired="true" type="VARCHAR">@password</password>
			<verifypassword isRequired="true" type="VARCHAR">@password</verifypassword>
			<firstname isRequired="true" type="VARCHAR">@firstname</firstname>
			<lastname isRequired="true" type="VARCHAR">@lastname</lastname>
			<company isRequired="true" type="VARCHAR">@company</company>
			<url isRequired="false" type="VARCHAR"></url>
			<street isRequired="true" type="VARCHAR">Your Street</street>
			<city isRequired="true" type="VARCHAR">Your City</city>
			<state isRequired="true" type="VARCHAR">Your State</state>
			<zipcode isRequired="true" type="VARCHAR">00000</zipcode>
			<countrycode isRequired="true" type="VARCHAR">@country</countrycode>
			<phone isRequired="true" type="VARCHAR">@contactno</phone>
			<phone2 isRequired="false" type="VARCHAR">@contactno</phone2>
			<fax isRequired="false" type="VARCHAR">000-000-0000</fax>
			<reasoncode isRequired="true" type="VARCHAR">@reasoncode</reasoncode>
			<mediacode isRequired="true" type="VARCHAR">1</mediacode>
		</record>
	</profile>
</div>

<div  id="leaddata" style="display:none;">
		    <?xml version="1.0" encoding="UTF-8"?>
			<lead>
				<record id="0">
					<objid isRequired="true" type="RAW"></objid>
					<lead2assignedto isRequired="false" type="RAW"></lead2assignedto>
					<lead2campaign isRequired="false" type="RAW"></lead2campaign>
					<name isRequired="true" type="VARCHAR">@firstname</name>
					<middlename isRequired="false" type="VARCHAR"></middlename>
					<lastname isRequired="true" type="VARCHAR">@lastname</lastname>
					<jobtitle isRequired="false" type="VARCHAR">Specify title</jobtitle>
					<company isRequired="false" type="VARCHAR">@company</company>
					<address isRequired="true" type="VARCHAR">specify address</address>
					<country isRequired="false" type="VARCHAR">@country</country>
					<state isRequired="false" type="VARCHAR">specify state</state>
					<city isRequired="false" type="VARCHAR">specify city</city>
					<zipcode isRequired="false" type="VARCHAR">xxxxx</zipcode>
					<officephone isRequired="false" type="VARCHAR">@contactno</officephone>
					<mobile isRequired="true" type="VARCHAR">@contactno</mobile>
					<fax isRequired="false" type="VARCHAR"></fax>
					<email isRequired="false" type="VARCHAR">@username</email>
					<url isRequired="false" type="VARCHAR">specify website</url>
					<othercontact isRequired="false" type="VARCHAR"></othercontact>
					<quicknote isRequired="false" type="VARCHAR">user registration</quicknote>
					<leadstage isRequired="false" type="VARCHAR">Raw</leadstage>
					<leadstatus isRequired="false" type="VARCHAR">None</leadstatus>
					<leadsource isRequired="false" type="VARCHAR">@reasoncode</leadsource>
					<referrer isRequired="false" type="VARCHAR"></referrer>
					<agentid isRequired="false" type="VARCHAR">registration</agentid>
					<leadid isRequired="false" type="VARCHAR"></leadid>
				</record>
			</lead>
    
        </div>
</div>


	
</body>
</html>