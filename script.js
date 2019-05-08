/* global $ */
$.ajax({
    url: " https://api.soundcloud.com/tracks?q=beyonce&client_id=5aa8e389ba4e24b6106af5159ab3e344",
    method: "GET",
    success: function(response){
        console.log(response);
    },
});
