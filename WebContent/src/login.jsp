
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
	<div id="inner">
		<h1 id="signinLogo"><a href="/"></a></h1>
		
		<div id="signinBlock">
			<h1>Sign in to CloudTestSoftware</h1>
			<span class="formContainer">			    
 				<form id="signInForm" action="/testrepo/service" method="POST" target="_blank">
					<span class="field signinRow ">
						<input class="fillin validated " autofocus="true" name="username" id="username" value="" title="Email" type="email" required="required" placeholder="Email" />
						<% if (!request.getParameter("baseurl").contains("prod.")){ %>
						<a class="resetPassLink"  onclick="replace('./src/signup.jsp');">Register?</a>
						<%} %>
						<span class="message"></span>
					</span>
					
					<span class="field signinRow passRow ">
						<input class="fillin validated " name="password" id="password" title="Password" type="password" required="required" placeholder="Password" />
						<a class="resetPassLink" onclick="replace('./src/resetpwd.jsp');">Forgot?</a>
						<span class="message"></span>
					</span>
				
					<div class="error">
						<span class="message"></span>
					</div>

					<div class="buttonWrap">
						<input type="hidden" name="persist" value="true" />
						<input type="hidden" name="returnTo" value="/" />

						<input class="button" type="submit" alt="Sign in!" value="Login"  />
					</div>
				</form>	
			</span>
		</div>
	</div>
</div>


	
</body>
</html>