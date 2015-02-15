$(document).ready(function() {
    		$("#googlebutton").click(function() {
	    		$( "#dialog-login" ).dialog({
			      	modal: true,
			      	buttons: {
			        	Ok: function() {
			        		
			          		$( this ).dialog( "close" );
			        	}
			      	}
			    });
			}); 
    	});