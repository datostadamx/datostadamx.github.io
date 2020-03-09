jQuery(document).ready(function( $ ) {

  // Boton para subir
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Fijar el nav menu al hacer scrolling
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Altura responsiva para celulares
  if (window.matchMedia("(max-width: 767px)").matches) {
    $('#intro').css({ height: $(window).height() });
  }

  // Inicia Wow.js
  new WOW().init();

  // Inicia Venobox
  $('.venobox').venobox({
    overlayColor: 'rgba(6, 12, 34, 0.85)',
    closeBackground: '',
    closeColor: '#fff'
  });

  // Inicia superfish en el nav menu
  $('.nav-menu').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  // Navegacion en celular
  if ($('#nav-menu-container').length) {
    var $mobile_nav = $('#nav-menu-container').clone().prop({
      id: 'mobile-nav'
    });
    $mobile_nav.find('> ul').attr({
      'class': '',
      'id': ''
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function(e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  // Scrolling suave para el menu y enlace con .scrollto
  $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if( ! $('#header').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu').length) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Carrusel de fotos con .owlCarousel
  $(".gallery-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    navText: ["Anterior", "Siguiente"],
    autoplay: true,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      992: {
        items: 4,
        loop:false
      }
    }
  });

});

// Redireccionar a TLS
if (window.location.host.indexOf('github.io') > -1 && window.location.protocol != "https:"){
    window.location.protocol = "https";
}

// DOM HTML Back-end
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/organizers/', (req, res) => {
  res.sendFile('./organizers.html', { root: __dirname });
});

app.get('/faq/', (req, res) => {
  res.sendFile('./faq.html', { root: __dirname });
});

app.get('/online/', (req, res) => {
  res.sendFile('./online.html', { root: __dirname });
});

app.get('/google/', (req, res) => {
  res.sendFile('./online.html', { root: __dirname });
});

app.get('/code-of-conduct/', (req, res) => {
  res.sendFile('./code-of-conduct.html', { root: __dirname });
});

// Speakers-Pointers
app.get('/speakers/benjamin/', (req, res) => {
  res.sendFile('./speakers-benjamin.html', { root: __dirname });
});

app.get('/speakers/alejandro/', (req, res) => {
  res.sendFile('./speakers-alejandro.html', { root: __dirname });
});

app.get('/speakers/gustavo/', (req, res) => {
  res.sendFile('./speakers-gustavo.html', { root: __dirname });
});

app.get('/speakers/andres/', (req, res) => {
  res.sendFile('./speakers-andres.html', { root: __dirname });
});
