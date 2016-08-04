function setAppearableElements() {
    $(window).scroll(function () {
        // This is then function used to detect if the element is scrolled into view
        function elementScrolled(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        function animate(elem) {
            if (!$(elem).hasClass('invisible')) return;
            setTimeout(function () {
                $(elem).addClass('fadeInUp');
                $(elem).removeClass('invisible');
            }, 300);
        }
        // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
        if (elementScrolled('#about-me')) {
            animate('#about-me');
        }
        if (elementScrolled('#experience')) {
            animate('#experience');
        }
        if (elementScrolled('#skills')) {
            animate('#skills');
        }
        if (elementScrolled('#education')) {
            animate('#education');
        }
    });
}
$(document).ready(function () {
    /*
							var defaults = {
					  			containerID: 'toTop', // fading element id
								containerHoverID: 'toTopHover', // fading element hover id
								scrollSpeed: 1200,
								easingType: 'linear' 
					 		};
							*/
    $().UItoTop({
        easingType: 'easeOutQuart'
    });
    /* ---- particles.js config ---- */
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100
                , "density": {
                    "enable": true
                    , "value_area": 800
                }
            }
            , "color": {
                "value": "#ffffff"
            }
            , "shape": {
                "type": "circle"
                , "stroke": {
                    "width": 0
                    , "color": "#000000"
                }
                , "polygon": {
                    "nb_sides": 5
                }
                , "image": {
                    "src": "img/github.svg"
                    , "width": 100
                    , "height": 100
                }
            }
            , "opacity": {
                "value": 0.5
                , "random": false
                , "anim": {
                    "enable": false
                    , "speed": 1
                    , "opacity_min": 0.1
                    , "sync": false
                }
            }
            , "size": {
                "value": 3
                , "random": true
                , "anim": {
                    "enable": false
                    , "speed": 40
                    , "size_min": 0.1
                    , "sync": false
                }
            }
            , "line_linked": {
                "enable": true
                , "distance": 125
                , "color": "#ffffff"
                , "opacity": 0.4
                , "width": 1
            }
            , "move": {
                "enable": true
                , "speed": 5
                , "direction": "none"
                , "random": false
                , "straight": false
                , "out_mode": "out"
                , "bounce": false
                , "attract": {
                    "enable": false
                    , "rotateX": 600
                    , "rotateY": 1200
                }
            }
        }
        , "interactivity": {
            "detect_on": "canvas"
            , "events": {
                "onhover": {
                    "enable": true
                    , "mode": "grab"
                }
                , "onclick": {
                    "enable": false
                    , "mode": "push"
                }
                , "resize": true
            }
            , "modes": {
                "grab": {
                    "distance": 140
                    , "line_linked": {
                        "opacity": 1
                    }
                }
                , "bubble": {
                    "distance": 400
                    , "size": 40
                    , "duration": 2
                    , "opacity": 8
                    , "speed": 3
                }
                , "repulse": {
                    "distance": 200
                    , "duration": 0.4
                }
                , "push": {
                    "particles_nb": 4
                }
                , "remove": {
                    "particles_nb": 2
                }
            }
        }
        , "retina_detect": true
    });

    //setAppearableElements();
});