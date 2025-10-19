

//Navbar Fixed
var nav_offset_top = $("header").height() + 120;

function navbarFixed() {
    if ($(".mt-header").length) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $(".mt-header").addClass("navbar_fixed");
            } else {
                $(".mt-header").removeClass("navbar_fixed");
            }
        });
    }
}

navbarFixed();


//scroll top to bottom
 // declare variable
  var scrollTop = $(".scrollup");
  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();
    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  }); // scroll END
  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  }); // click() scroll top EMD

$(".hamburger-wrap").on('click', function(){
  $(".hamburger-icon").toggleClass("menu-open");
  $("body").toggleClass("menu-open");
  $(".mt-col").toggleClass("nav-open");
  $('.mt-navigation').slideToggle();
});

$(window).resize(function(){
  var winWidthNew = $(window).width();
  if($(winWidthNew > 991)) {
    $('.hamburger-icon').removeClass('menu-open');
    $('body').removeClass('menu-open');
    $('.mt-navigation').removeAttr('style');
  }
  
});

new WOW().init();


/*Scroll to top when arrow up clicked END*/
/* animate smooth scrolling sections */
$(".mt-navigation ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top 
     }, 700, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});


const convertImages = (query, callback) => {
  const images = document.querySelectorAll(query);

  images.forEach(image => {
    fetch(image.src)
    .then(res => res.text())
    .then(data => {
      const parser = new DOMParser();
      const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

      if (image.id) svg.id = image.id;
      if (image.className) svg.classList = image.classList;

      image.parentNode.replaceChild(svg, image);
    })
    .then(callback)
    .catch(error => console.error(error))
  });
}

convertImages('img');

//slider
const slider = $(".mt-banner_slider");
slider
.slick({
  dots: false,
  arrows:true,
   slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
    responsive: [
    
    {
      breakpoint: 576,
      settings: {
       dots:true,
       arrows:false,
      }
    }
  ]
});

// slider
  $slick_slider = $('.mt-main_row');
  settings_slider = {
    dots: false,
    arrows: true,
    autoplay:true,
     responsive: [
    
    {
      breakpoint: 375,
      settings: {
       dots:true,
       arrows:false,
      }
    }
  ]
  }
  slick_on_mobile( $slick_slider, settings_slider);

// slick on mobile
  function slick_on_mobile(slider, settings){
    $(window).on('load resize', function() {
      if ($(window).width() > 768) {
        if (slider.hasClass('slick-initialized')) {
          slider.slick('unslick');
        }
        return
      }
      if (!slider.hasClass('slick-initialized')) {
        return slider.slick(settings);
      }
    });
  };

  $(function() {
  $('.mt-login_box .mt-form').matchHeight();
});
  $(".mt-search").focus(function() {
            $('.search-full-view').addClass("search-normal-screen");
        });
        $("#search-close").click(function() {
            $('.search-full-view').removeClass("search-normal-screen");
        });


  $('input[type="file"]').each(function() {
    // get label text
    var label = $(this).parents('.mt-file').find('label').text();
    label = (label) ? label : 'Upload';

    // wrap the file input
    $(this).wrap('<div class="input-file"></div>');
    // display label
    $(this).before('<span class="btn">'+label+'</span>');
    // we will display selected file here
    $(this).before('<span class="file-selected"></span>');

    // file input change listener 
    $(this).change(function(e){
        // Get this file input value
        var val = $(this).val();
        
        // Let's only show filename.
        // By default file input value is a fullpath, something like 
        // C:\fakepath\Nuriootpa1.jpg depending on your browser.
        var filename = val.replace(/^.*[\\\/]/, '');

        // Display the filename
        $(this).siblings('.file-selected').text(filename);
    });
});

// Open the file browser when our custom button is clicked.
$('.input-file .btn').click(function() {
    $(this).siblings('input[type="file"]').trigger('click');
});