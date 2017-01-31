 package com.auth.dao; 
 

import com.testrepo.dao.ProfileDao;
import com.testrepo.dao.ProjectDao;

import cms.service.exceptions.AuthenticationException;
import cms.service.exceptions.DaoException;



public class TestBean {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		 String data="";
		for(String x:args){
			data+=x +" ";
		}
		String xml=data.replaceAll("> <", ">\n<");
		System.out.println(xml);
     /* String xml="<?xml version=\"1.0\" encoding=\"UTF-8\"?>"+
    		  "<entity>"+
      "<record id=\"0\">"+
      "<objid isRequired=\"true\" type=\"RAW\"></objid>"+
      "<name isRequired=\"false\" type=\"VARCHAR\">Soft</name>"+
      "<description isRequired=\"false\" type=\"VARCHAR\">Soft</description>"+
      "<expertise isRequired=\"false\" type=\"VARCHAR\">Test</expertise>"+
      "<licensecount isRequired=\"false\" type=\"NUMBER\">100</licensecount>"+
      "<virtuallicense isRequired=\"false\" type=\"NUMBER\">100</virtuallicense>"+
      "<licenseused isRequired=\"false\" type=\"NUMBER\">0</licenseused>"+
      "<virtuallicenseused isRequired=\"true\" type=\"NUMBER\">0</virtuallicenseused>"+
      "</record>"+
      "</entity>";
      */
		try {
			testProjectBean( xml);
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	
	private static void testProjectBean(String xml) throws AuthenticationException{
		
		
		   ProjectDao post;
			try {
				post=new ProjectDao(null,null);
				//System.out.println(xml);
				post.setPostXml(xml.trim());
				System.out.println(post.getMainxml());
				post.postProjectContainer();
			
			} catch (DaoException d) {
				 d.printStackTrace();
			}
			
		}
/*	
   private static void testProfileBean(String xml) throws AuthenticationException{
		
		
	   ProfileDao post;
		try {
			post=new ProfileDao(null,null);
			//System.out.println(xml);
			post.setPostXml(xml.trim());
			System.out.println(post.getMainxml());
			post.postProfileContainer();
		
		} catch (DaoException d) {
			 d.printStackTrace();
		}
		
	}
	
  private static void testEntityBean(String xml) throws AuthenticationException{
		
		
		EntityDao post;
		try {
			post=new EntityDao(null,null);
			//System.out.println(xml);
			post.setPostXml(xml.trim());
			System.out.println(post.getMainxml());
			post.postEntityContainer();
		
		} catch (DaoException d) {
			 d.printStackTrace();
		}
		
	}
	
private static void testPartListBean(String xml) throws AuthenticationException{
		
		
	PartlistDao post;
		try {
			post=new PartlistDao(null,null);
			//System.out.println(xml);
			post.setPostXml(xml.trim());
			System.out.println(post.getMainxml());
			post.postPartlistContainer();
		
		} catch (DaoException d) {
			 d.printStackTrace();
		}
		
	} */

}
