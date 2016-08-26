var backgroundImages = ['1.jpeg','2.jpeg','3.jpg','4.jpg'];
var maxImageCount = backgroundImages.length;
var indexImage = 0;

function showNextBackgroundImage(){
    var backgroundElement = $('.background-container');
    backgroundElement.fadeOut(1000,function(){

        if(indexImage >= maxImageCount){
            indexImage = 0;
        }

        var css = {
            "background": 'url(./images/' + backgroundImages[indexImage] + ') no-repeat center center fixed',
            "background-size": 'cover'
        };

        backgroundElement.css(css);

        indexImage++;

        backgroundElement.fadeIn(1000,function(){
            setTimeout(showNextBackgroundImage, 5000);
        });
    });
}

$(document).ready(function () {
    var sideNav = $('#side-nav');

    $('#hamburger').on('click',function(event){
        event.stopPropagation();
        $('#overlay').fadeIn();

        sideNav.addClass('shown');
        sideNav.removeClass('hidden');
    });
    
    $('#overlay').on('click',function(){

        $(this).fadeOut();

        console.log('overlay clicked!!!');

        sideNav.addClass('hidden');
        sideNav.removeClass('shown');
    });

    showNextBackgroundImage();
});