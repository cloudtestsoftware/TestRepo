package com.jenkins.jobs;

import java.util.List;
import java.util.Scanner;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;

public class Sample {
    public static void main(String[] args) throws Exception {
        final Logger log = Logger.getLogger(Sample.class.getCanonicalName());
        JobData jd = new JobData();
        jd.setUsername("sjana");
        jd.setPassword("srijit96");
        //jd.setPassword("a41c97d5c249fb34a4d0a9511d44136b");
       /*
        Scanner input = new Scanner(System.in);
        try {
            System.out.print("What is your user name? ");
            jd.setUsername(input.next());
            System.out.print("What is your password? ");
            jd.setPassword(input.next());
        } catch (Exception e) {
            log.log(Level.SEVERE, "The system encountered an exception while attempting to login");
        } finally {
              input.close();
        }
 */
        jd.setJob("TestMe");
        jd.setServer("http://jenkins.softleanerp.com");
        jd.setJenkinsurl("http://jenkins.softleanerp.com");
        //jd.setPort("80");
        // set the parameters
        List<NameValuePair> parameters = jd.getParameters();
        parameters.add(new BasicNameValuePair("token", "test123"));
        //parameters.add(new BasicNameValuePair("browsers", "firefox"));
        //parameters.add(new BasicNameValuePair("baseurl", "http://www.softleanerp.com"));
        // run the job
        JenkinsPoster jp = new JenkinsPoster(jd);
        log.info("executing postJenkinsJob");
        jp.postJenkinsJob();
        log.info("executed postJenkinsJob");
    }   
}