<!DOCTYPE html>
<html>
<head>
	<title>Cloud Test Software, Artitelly, Inc</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<link rel="stylesheet" type="text/css" href="./src/codebase/dhtmlx.css"/>
	<link rel="stylesheet" type="text/css" href="./src/codebase/skins/web/dhtmlx.css"/>
	<link rel="stylesheet" type="text/css" href="./src/codebase/skins/terrace/dhtmlx.css"/>

	<script src="./src/codebase/dhtmlx.js"></script>
	<script language="JavaScript" src="./src/change_style.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/testrepo.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/textversion.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/common_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/project_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/product_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/testmatrix_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/testrun_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/testuser_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/bug_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/feature_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/scenerio_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/featurerun_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/testscenerio_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/board_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/tab_widget.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/company_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/appadmin_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/timesheet_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/my_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/training_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/crm_context.js" type="text/javascript"></script>
	<script language="JavaScript" src="./src/context/cloud_context.js" type="text/javascript"></script>
	<style>
		div#layoutObj {
			position: absolute;
			margin-top: 0px;
			margin-left: 0px;
			margin-bottom: 30px;
			width: 100%;
			height: 100%;
			overflow-y: auto;
			overflow-x: auto;
		}
	div#layoutObjChild {
			position: absolute;
			margin-top: 30px;
			margin-left: 0px;
			margin-bottom: 30px;
			width: 100%;
			height: 100%;
			overflow-y: auto;
			overflow-x: auto;
		}
	div.controls {
			margin-top: 10px;
			margin-left: 0px;
			margin-bottom: 30px;
			font-size: 14px;
			font-family: Tahoma;
			color: #404040;
			height: 60px;
		}
			
	 html, body {
			width: 100%;
			height: 100%;
			margin: 0px;
			padding: 0px;
			background-color: #ebebeb;
			overflow-y: auto;
			overflow-x: auto;
		}
		
		div.articles {
  			width: 100%;
  			margin-right: 12%;
  			margin-left: 1%;
  			float: left;
  			position: absolute; top: 10px; 
		}
		div.fullarticle {
  			width: 50%;
  			margin-right: 12%;
  			margin-left: 3%;
  			float: left;
  			position: absolute; top: 100px; left: 37%;
  			visibility: hidden;
		}


		div.articlelist {
  			float: left;
  			margin-right: 3%;
  	    	width: 35%;
  	    	border: 1px solid black;
  	    	
		}
		
		div.dhxform_item_label_left.button_up div.dhxform_btn_txt {
			background-image: url(./src/codebase/imgs/up2.gif);
			background-repeat: no-repeat;
			background-position: 0px 3px;
			padding-left: 13px;
			margin: 0px 15px 0px 12px;
			
		}
		div.dhxform_item_label_left.button_down div.dhxform_btn_txt {
			background-image: url(./src/codebase/imgs/down2.gif);
			background-repeat: no-repeat;
			background-position: 0px 3px;
			padding-left: 17px;
			margin: 0px 15px 0px 12px;
		}
		
	</style>
	
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-60394650-1', 'auto');
  ga('send', 'pageview');

</script>
</head>
<body onload="doOnLoad();">
	<div id="layoutObj"></div>
	<input type="hidden" id="usertoken" value="<%=request.getParameter("usertoken")%>"/>
	<input type="hidden" id="username" value="<%=request.getParameter("username")%>"/>
	<input type="hidden" id="firstname" value="<%=request.getParameter("firstname")%>"/>
	<input type="hidden" id="userrole" value="<%=request.getParameter("modules")%>"/>
	<script type="text/javascript" charset="utf-8">
		 var www_url="<%=request.getParameter("baseurl") %>";
		 var username=document.getElementById("username").value;
		 var firstname=document.getElementById("firstname").value;
		 var token=document.getElementById("usertoken").value;
		 var userrole=document.getElementById("userrole").value;
	</script>
	
</body>
</html>