package com.jenkins.jobs;

import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;

public class JobData {
    private String username;
    private String password;
    private String token;
    private String server;
    private String port;
    private String job;
    private String name;
	private String jobname;
	private String buildno;
	private String buildid;
	private String jenkinsurl;
	private String workspace;
	private String env;
	private String browser;
	private String page;
	private String nodename;
	private String datasetextension;
	private String runtype;
	private String overrideattribute;
	private String groupbythread;
	private String baseurl,action,threads,timeout,serviceurl;
	
	
	
    public String getServiceurl() {
		return serviceurl;
	}

	public void setServiceurl(String serviceurl) {
		this.serviceurl = serviceurl;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJobname() {
		return jobname;
	}

	public void setJobname(String jobname) {
		this.jobname = jobname;
	}

	public String getBuildno() {
		return buildno;
	}

	public void setBuildno(String buildno) {
		this.buildno = buildno;
	}

	public String getBuildid() {
		return buildid;
	}

	public void setBuildid(String buildid) {
		this.buildid = buildid;
	}

	public String getJenkinsurl() {
		return jenkinsurl;
	}

	public void setJenkinsurl(String jenkinsurl) {
		this.jenkinsurl = jenkinsurl;
	}

	public String getWorkspace() {
		return workspace;
	}

	public void setWorkspace(String workspace) {
		this.workspace = workspace;
	}

	public String getEnv() {
		return env;
	}

	public void setEnv(String env) {
		this.env = env;
	}

	public String getBrowser() {
		return browser;
	}

	public void setBrowser(String browser) {
		this.browser = browser;
	}

	public String getPage() {
		return page;
	}

	public void setPage(String page) {
		this.page = page;
	}

	public String getNodename() {
		return nodename;
	}

	public void setNodename(String nodename) {
		this.nodename = nodename;
	}

	public String getDatasetextension() {
		return datasetextension;
	}

	public void setDatasetextension(String datasetextension) {
		this.datasetextension = datasetextension;
	}

	public void setParameters(List<NameValuePair> parameters) {
		this.parameters = parameters;
	}
	private List<NameValuePair> parameters;

    public JobData() {
        parameters = new ArrayList<NameValuePair>();
    }

    public String getRuntype() {
		return runtype;
	}

	public void setRuntype(String runtype) {
		this.runtype = runtype;
	}
	
    public String getOverrideattribute() {
		return overrideattribute;
	}

	public void setOverrideattribute(String overrideattribute) {
		this.overrideattribute = overrideattribute;
	}

	public String getGroupbythread() {
		return groupbythread;
	}

	public void setGroupbythread(String groupbythread) {
		this.groupbythread = groupbythread;
	}

	public String getBaseurl() {
		return baseurl;
	}

	public void setBaseurl(String baseurl) {
		this.baseurl = baseurl;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getThreads() {
		return threads;
	}

	public void setThreads(String threads) {
		this.threads = threads;
	}

	public String getTimeout() {
		return timeout;
	}

	public void setTimeout(String timeout) {
		this.timeout = timeout;
	}

	public String getUsername() {return username;}
    public void setUsername(String username) {this.username = username;}
    public String getPassword() {return password;}
    public void setPassword(String password) {this.password = password;}
	public String getToken() {return token;}
    public void setToken(String token) {this.token = token;}
    public String getServer() {return server;}
    public void setServer(String server) {this.server = server;}
    public String getPort() {return port;}
    public void setPort(String port) {this.port = port;}
    public String getJob() {return job;}
    public void setJob(String job) {this.job = job;}
    public List<NameValuePair> getParameters() {return parameters;}

	
}

