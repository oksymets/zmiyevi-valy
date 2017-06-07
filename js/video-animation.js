//global video
var video = $('#video-events');

function listenerCondition(time) {
    if(video[0].currentTime > time){
        video[0].pause();
    }
};   

function playVideoFromTo(startTime, endTime) {
    video.off();
    video[0].currentTime = startTime;
    video[0].play();
    video.on('timeupdate', function() {
        listenerCondition(endTime);
    });
}


//starting video 
$('.credits').waypoint(function(direction) {
    $(".video-events-con").animate({ opacity: 0 }, 100 );
    video.attr("src", "video/valy1500.mp4");
    video.prop('loop', false);
    video[0].load();
    video[0].pause();
    if (direction === 'up') {
        $(".video-events-con").animate({ opacity: 1 }, 100 );
        video.attr("src", "video/starting-valy.mp4");
        video.prop('loop', true);
        video[0].load();
        video[0].play();
    }
},{ offset: 50 });


//fade-in animation
$('.start-animation').waypoint(function(direction) {

    if (direction === "down") {
        $("#pereyaslav").show().css('opacity', '0');
        $(".video-events-con").animate({ opacity: 1 }, 100 );
        video[0].play();
        video.on('timeupdate', function() {
            listenerCondition(4);
        });
        setTimeout(function() { 
            $("#pereyaslav").animate({ opacity: 1 }, 100 );
        }, 5000);
    } else if (direction === "up") {
        $(".video-events-con").animate({ opacity: 0 }, 100 );
        video[0].pause();
        $("#pereyaslav").hide();
        $("#pereyaslav").animate({ opacity: 0 }, 100 );
    }

},{ offset: 250 });



$('#pereyaslav-details').waypoint(function(direction) {

    if (direction === "down") {
        $("#pereyaslav").hide();
        $("#pereyaslav").animate({ opacity: 0 }, 100 );
        playVideoFromTo(4,26);
    } else if (direction === "up") {
        video[0].currentTime = 0;
    }

},{ offset: 250 });



$('#kruglyk-intro').waypoint(function(direction) {

    if ( direction === "down") {
        $("#kruglyk").show().css('opacity', '0');
        setTimeout(function() { 
            $("#kruglyk").animate({ opacity: 1 }, 100 );
        }, 12000);
        playVideoFromTo(26.5, 41);
    } else if (direction === "up") {
        $("#kruglyk").hide();
        $("#kruglyk").animate({ opacity: 0 }, 100 );
        video[0].currentTime = 4;
    }

},{ offset: 250 });



$('#kruglyk-details').waypoint(function(direction) {

    if (direction === "down") {
        $("#kruglyk").hide();
        $("#kruglyk").animate({ opacity: 0 }, 100 );
        playVideoFromTo(41.5,82);
    } else if (direction === "up") {
        video[0].currentTime = 26;
    }

},{ offset: 250 });



$('#khodosivka-intro').waypoint(function(direction) {

    if (direction === "down") {
        $("#khodosivka").show().css('opacity', '0');
        setTimeout(function() { 
            $("#khodosivka").animate({ opacity: 1 }, 100 );
        }, 7000);
        playVideoFromTo(82,90);
    } else if (direction === "up") {
        $("#khodosivka").hide();
        $("#khodosivka").animate({ opacity: 0 }, 100 );
        video[0].currentTime = 41;
    }


},{ offset: 250 });


$('#khodosivka-details').waypoint(function(direction) {

    if (direction === "down") {
        $("#khodosivka").hide();
        $("#khodosivka").animate({ opacity: 0 }, 100 );
        playVideoFromTo(93,125);
    } else if (direction === "up") {
        video[0].currentTime = 82;
    } 

},{ offset: 250 });



$('.end-animation').waypoint(function(direction) {

    if (direction === "down") {
        $(".video-events-con").animate({ opacity: 0 }, 100 );
        video[0].pause();
    } if (direction === "up") {
        $(".video-events-con").animate({ opacity: 1 }, 100 );
        video[0].currentTime = 93;
    }

},{ offset: 600 });
