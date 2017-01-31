package com.auth.bean;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Authorization {
	private String token;
	private String loginname;
    private String msg;
    
	public Authorization() {
		
	}

	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getLoginname() {
		return loginname;
	}
	public void setLoginname(String loginname) {
		this.loginname = loginname;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	
	
}
