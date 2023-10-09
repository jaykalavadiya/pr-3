$(document).ready(function(){
    $(".toggle-manu").click(function(){
        $("nav").slideToggle();
    });
    $(".top-btn").click(function(){
      $("html").animate({"scrollTop":"0"})
    })
});
$(window).scroll(function(){
    if($(this).scrollTop() > 0){
        $("header").addClass("activ");
        
    }
    else{
        $("header").removeClass("activ");
        
    }
});

// theme-swicher

$(document).ready(function(){
    $(".theme-swicher").click(function(){
        $(".theme-swicher").toggleClass("activ-2");
    });

    $("ul li").click(function(){
        var color = $(this).css("background-color");
        $(":root").css("--body-bg-color", color);
    });

    $("ul li").click(function(){
        var color = $(this).css("color");
        $(":root").css("--color-white", color);
    });
});
// count
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counter[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counter[j], j);
    }
  });


  $(document).ready(function () {
    $('.owl-carousel-1').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
});
$(document).ready(function () {
  $('.owl-carousel-2').owlCarousel({
      loop: true,
      margin: 30,
      center:true,
      nav: false,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          900: {
              items: 1
          },
          1000: {
              items: 3
          }
      }
  })
});

// pointer

const coords = {x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');
console.log(circles);

circles.forEach(function(circle) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener('mousemove', function(e) {
  coords.x = e.clientX;
  coords.y = e.clientY;

});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach( function(circle, index) {
    circle.style.left = x - 15 + "px";
    circle.style.top = y - 15 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;
    
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.2;
    y += (nextCircle.y - y) * 0.2;
  });
  
  requestAnimationFrame(animateCircles);
}

animateCircles();

window.addEventListener('click', function() {
  circles.forEach(function(circle) {
    circle.style.transform = 'scale(1.4)';
  });
});

