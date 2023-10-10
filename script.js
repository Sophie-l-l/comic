$(document).ready(function() {
    // Initialize AOS
    AOS.init();

    // Scroll-based animation for hands
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        var scrollDirection = scrollTop > lastScrollTop ? 'up' : 'down'; // Declare scrollDirection
        var fadeValue = 1 - (scrollTop / ($(document).height() - $(window).height()));
        var moveValue = scrollTop * 1.4; // Adjust the scroll speed as needed

        // Update left position and opacity for the left hand
        $('#left-hand').css({
            'margin-left': -moveValue + 'px', // Note the negative sign
            'opacity': fadeValue
        });

        // Update right position and opacity for the right hand
        $('#right-hand').css({
            'margin-right': -moveValue + 'px', // Note the negative sign
            'opacity': fadeValue
        });

         // Update the text box styles based on scroll position
         
        var horrorTheme = {
            fontFamily: 'Creepster, cursive',
            color: 'red',
            backgroundColor: 'black'
        };

        var cuteTheme={
            fontFamily: 'Helvetica, Arial, sans-serif',
            color: '#ff6600',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
        };

        var defaultTheme = {
            fontFamily: 'Arial, sans-serif',
            color: '#333',
            backgroundColor: 'rgba(255, 255, 255, 0.8)'
        };

        if (scrollDirection === 'up') {
            // Apply the horror theme styles when scrolling up
            $('#line1').css(cuteTheme);
            $('#line2').css(cuteTheme);
        } else {
            // Apply the default styles when scrolling down
            $('#line1').css(defaultTheme);
            $('#line2').css(defaultTheme);
        }

        lastScrollTop = scrollTop;
    });
    var lastScrollTop = 0; // Variable to track the last scroll position
});

let tail1=document.getElementById("tail");
let tail2=document.getElementById("tail2");

tail1.addEventListener("click",()=>{
    
        tail1.style.opacity=0;
        tail2.style.opacity=1;
})

tail2.addEventListener("click",()=>{
   
        tail1.style.opacity=1;
        tail2.style.opacity=0;
})

AOS.init();

$(document).ready(function() {
    var initialStopColor = $('#colorStop').attr('stop-color');
  
    $(window).on('scroll', function() {
      var scrollPosition = $(this).scrollTop();
      var newStopColor = calculateStopColor(scrollPosition);
  
      $('#colorStop').attr('stop-color', newStopColor);
    });
  
    function calculateStopColor(scrollPosition) {
      var red = Math.min(237, 237 + scrollPosition);
      var green = Math.max(239, 239 - scrollPosition);
      var blue = 63;
  
      return 'rgb(' + red + ',' + green + ',' + blue + ')';
    }
  });
  

