let mainNav = document.getElementById('main-nav');
let navbarToggle = document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click', function () {
  if (this.classList.contains('active')) {
    // mainNav.style.display = "none";
    mainNav.classList.remove('active-nav');
    this.classList.remove('active');
  } else {
    // mainNav.style.display = "flex";
    mainNav.classList.add('active-nav');
    this.classList.add('active');
  }
});


// console.log($('.project-detail__text h2'));
// console.log($('.project-detail__text h2').offset());




$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  var latestEl = -1;
  $('.project-detail__text h2').each(function(index) {
    if(($(this).offset().top - 10) <= scroll) {
      latestEl = index
    }
    // console.log($(this).offset().top);
  });

  if(latestEl == -1) {
    $('.project-detail__side-nav a[href*="#"]').removeClass('textBold');
  } else {
    $('.project-detail__side-nav a[href*="#"]').each(function(index) {
      if(latestEl == index) {
        $('.project-detail__side-nav a[href*="#"]').eq(index).addClass('textBold')
      } else if(latestEl != index) {
        $('.project-detail__side-nav a[href*="#"]').eq(index).removeClass('textBold');
      }
    })
  }
  // console.log(latestEl);
});


// Project page - side-nav smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // finds all links with a # and removes the textBold class
    // $('a[href*="#"]').removeClass('textBold');

    // adds the 'textBold' class to the scroll link clicked -> making it bold
    // $(event.target).addClass('textBold')
    
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({          
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });