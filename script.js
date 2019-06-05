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
          
          let trackInput = document.getElementById(‘trackInput’);
          let submitButton = document.getElementById(‘submitButton’); 
          
          submitButton.onclick = searchTracks;
            
          function searchTracks() {
             let searchResults = trackInput.value;    
          }
          
          response.json().then(function(data) {
          let track = data;
          console.log(track);
          
          function renderTracks() {

           
             
              
          }
        }
    }
});
       