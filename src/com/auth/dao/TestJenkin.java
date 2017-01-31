package com.auth.dao;

import java.net.URI;

import javax.ws.rs.core.MediaType;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;

public class TestJenkin {

	public TestJenkin() {
		// TODO Auto-generated constructor stub
	}

	public static void main(String[] args) {
		System.out.println("started testing");
		final String nodeEntryPointUri = "http://sjana:a41c97d5c249fb34a4d0a9511d44136b@jenkins.softleanerp.com/job/TestMe/build?token=test123";
		// http://jenkins.softleanerp.com/job/forgerock/build";

		WebResource resource = Client.create()
		        .resource( nodeEntryPointUri );
		// POST {} to the node entry point URI
		ClientResponse response = resource.accept( MediaType.APPLICATION_JSON )
		        .type( MediaType.APPLICATION_JSON )
		        .entity( "{}" )
		        .post( ClientResponse.class );

		final URI location = response.getLocation();
		System.out.println(String.format(
		        "POST to [%s], status code [%d]",
		        nodeEntryPointUri, response.getStatus() ) );
		/*
		System.out.println( String.format(
		        "POST to [%s], status code [%d], location header [%s]",
		        nodeEntryPointUri, response.getStatus(), location.toString() ) );
		        */
		response.close();

		
		// TODO Auto-generated method stub

	}

}
