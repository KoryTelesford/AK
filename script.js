/* global $ */

$("button").click(function() {
    

$.ajax({
    url: " https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
        console.log(response);
        $("searchButton").click(function() {
          var searchTerm = $("#searchTerm").val();
          var giphyUrl =" https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344";
            
            $.ajax({
             url: giphyUrl,
             method: "GET",
             success: function(response) {
                  var imageSrc =response[1].user.permalink_url;
                 console.log(response);
                 
                 var imageHtml= "<imgsrc= " + imageSrc + "/>"
                 
                 
             }}
                
                
                
                
            );
            
            
        }); 
    }
    
});
