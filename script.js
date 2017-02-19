$(document).ready(function(){

	$('#search-button').click(function(){
		var searchForm = $('#search-form').val();
		//ajax and return to JSON	
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchForm +"&format=json&callback=?";
		$.ajax({

			type: "GET",
			url: url,
			contentType: "application/json; charset=utf-8",
			async: false,
			dataType: "json",
			success: function(data, textStatus, jqXHR){
			$('#output').html('');
			for(var i = 0; i<data[1].length; i++){
			 $('#output').prepend("<div class='section'><a href="+data[3][i]+" target='_blank'><h2>" + 
			 	data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div>" );  
			}
			$('#search-form').val('');
			} 
		});
	});

	$("#search-form").keypress(function(e){
      if(e.which==13){
        $("#search-button").click();
      }
    	});
});