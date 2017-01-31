<!DOCTYPE html>
<html>
<head>
	<title>Integration with dhtmlxToolbar</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<link rel="stylesheet" type="text/css" href="./src/codebase/dhtmlx.css"/>
	<link rel="stylesheet" href="./src/codebase/dhtmlx.css" type="text/css" charset="utf-8">
	<link rel="alternate stylesheet" type="text/css"  title="web" href="./src/codebase/skins/web/dhtmlx.css"  charset="utf-8"/>
	<link rel="alternate stylesheet" type="text/css" title="terrace" href="./src/codebase/skins/terrace/dhtmlx.css"  charset="utf-8"/>
	<script src="./src/codebase/dhtmlx.js"></script>
	<script language="JavaScript" src="./src/change_style.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/testrepo.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/testrepo_context.js" type="text/javascript"></script>
	<style>
		html, body {
			width: 100%;
			height: 100%;
			margin: 0px;
			padding: 0px;
			background-color: #ebebeb;
			overflow: hidden;
		}
	</style>
	
	
</head>
<body style='width:100%;height:100%'>
	
	<input type="hidden" id="usertoken" value="<%=request.getParameter("usertoken")%>"/>
	<input type="hidden" id="username" value="<%=request.getParameter("username")%>"/>
	<input type="hidden" id="userrole" value="<%=request.getParameter("userrole")%>"/>
	<script type="text/javascript" charset="utf-8">
		
		 var www_url="<%=request.getParameter("baseurl") %>";
		 var username=document.getElementById("username").value;
		 var token=document.getElementById("usertoken").value;
		 var userrole=document.getElementById("userrole").value;
		 
		 addMainLayout();
		 manageUserSettings(userrole);
		 
		 
		 
		 
	 </script>
</body>
</html>