// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require parallaxScroller.min
//= require skroller.min
//= require scrollReveal.min
//= require_tree .

$(function(){
  // Init Skrollr
  var s = skrollr.init();

  // Init scrollReveal.min.js
  window.scrollReveal = new scrollReveal();

  $('.profile, .text').addClass('animated fadeInUp');
  $('.scroll-btn').addClass('animated fadeIn');

})

/* parallax */

var top_header = '';
$(document).ready(function(){
  top_header = $('#header-page')
});
$(window).scroll(function () {
  var st = $(window).scrollTop()
  top_header.css({'background-position':"center "+(st*.5)+"px"})
});

/*
 ** Slide-In Nav **
 *
/*
*/
  $(window).load(function() {
    $('.nav_slide_button').click(function() {
      $('.pull').slideToggle();
    });
  });

/*
 ** Nav Transformation **
 *
/*
*/
  document.querySelector("#nav-toggle").addEventListener("click", function() {
    this.classList.toggle("active");
  });

/*
 ** Smooth Scrolling **
 *
/*
*/
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });