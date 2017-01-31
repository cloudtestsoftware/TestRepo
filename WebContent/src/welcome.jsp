

<div class="articles">
<h1>Welcome back <font color="red"> <%=request.getParameter("firstname")%>! </font></h1>
<h4>While you are seeing demo project, just click search button to see default list after selecting any menu. If you are session out just click refresh. </h4>

<h3> To read, please click on below topics</h3>

<div class="articlelist">
    <ul>
        <li name="mytopic" style="display:block;margin-bottom:10px;" onclick="toggleArticles('article1'); this.style.background='#999999';">Introduction to Cloud Test Software</li>
        <li name="mytopic" style="display:block;margin-bottom:10px;" onclick="toggleArticles('article2'); this.style.background='#999999';">Manage budget, resource, cost for agile projects</li>
        <li name="mytopic" style="display:block;margin-bottom:10px;" onclick="toggleArticles('article3');this.style.background='#999999';">See Demo how to create your first project</li>
        <li name="mytopic" style="display:block;margin-bottom:10px;" onclick="toggleArticles('article4');this.style.background='#999999';">See Demo how to record and run simple automation script</li>
    </ul>
</div>


<div id="all_articles">
	<div class="fullarticle" id="article1">
	    <h3>Introduction To CloudTestSoftware.com</h3>
	    <p><iframe width="560" height="315" src="https://www.youtube.com/embed/i2z3GpVPkX0" frameborder="0" allowfullscreen></iframe>
	</p>
	</div>
	<div class="fullarticle" id="article2">
	    <h3>Manage budget, resource, cost for agile projects</h3> 
	    <p><a href="http://www.cloudtestsoftware.com/#!How-to-manage-budget-resource-cost-in-agile-project/c1r0o/55ef7bbf0cf28ffc7ef4afe9" target="_blank">Read article</a> 
	    <p><iframe width="560" height="315" src="https://www.youtube.com/embed/VjsPih3GHNQ" frameborder="0" allowfullscreen></iframe>
	</div>
    <div class="fullarticle" id="article3">
	    <h3>See Demo how to create your first project</h3>  
	    <p><iframe width="560" height="315" src="https://www.youtube.com/embed/9I9SVMVhFXg" frameborder="0" allowfullscreen></iframe>
	</div>
	
	
	<div class="fullarticle" id="article4">
	    <h3>See Demo how to record and run simple automation script</h3> 
	    <p><a href="http://www.cloudtestsoftware.com/#!Discounted-Automation-Testing-in-Cloud-and-Saving-Cost/c1r0o/55e8935b0cf2de902a7d17a6" target="_blank">Read article</a> 
	    <p><iframe width="560" height="315" src="https://www.youtube.com/embed/Vqni9zsHiWo" frameborder="0" allowfullscreen></iframe>
	</div>
	
</div>
</div>