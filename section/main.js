$(document).ready(function () { 
    var page_url = window.location.href;
    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
 // alert(page_id);
if (page_id == 'section1') { 
    $('html, body').animate({ 
        scrollTop: $('#scroll-' + page_id).offset().top },
        500); }
else if (page_id == 'section2') { 
    $('html, body').animate({ 
        scrollTop: $('#scroll-' + page_id).offset().top },
        500); } 
else if (page_id == 'section3') { 
    $('html, body').animate({ 
        scrollTop: $('#scroll-' + page_id).offset().top },
        500); } 
else if (page_id == 'section4') { 
    $('html, body').animate({ 
        scrollTop: $('#scroll-' + page_id).offset().top },
        500); } 
        });

$(document).ready(function(){

    $("a").on('click', function(event) {         
        if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
            });
            } 
        });
        });

        
        function leftOpen() {
            $('#timelinbx').css("width", $(window).width() - 280);
        }
        function leftClose() {
            $('#timelinbx').css("width", "100%");
        }
    
        $(window).resize(function() {        
            $('.timelinbx').css('width', $(window).width() - 50 );        
            $('.timelinbx').css('height', $(window).height() - 50 );   
        });
        
        
