// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import "jquery-ui"

//
// $( document ).ready(function(){
//   $('.category-filter').on('change', function(){
//     console.log($(this).val());
//     // $.ajax({
//     //     url: 'movies',
//     //     type: 'GET',
//     //     dataType: 'script',
//     //     data: { category_id: $(this).val() }
//     // });
//   });
// });

// import "./movies"

//
// (function() {
//   "use strict";
//
//   /**
//    * Easy selector helper function
//    */
//   const select = (el, all = false) => {
//     el = el.trim()
//     if (all) {
//       return [...document.querySelectorAll(el)]
//     } else {
//       return document.querySelector(el)
//     }
//   }
//
//   /**
//    * Easy event listener function
//    */
//   const on = (type, el, listener, all = false) => {
//     let selectEl = select(el, all)
//     if (selectEl) {
//       if (all) {
//         selectEl.forEach(e => e.addEventListener(type, listener))
//       } else {
//         selectEl.addEventListener(type, listener)
//       }
//     }
//   }
//
//   /**
//    * Easy on scroll event listener
//    */
//   const onscroll = (el, listener) => {
//     el.addEventListener('scroll', listener)
//   }
//
//   /**
//    * Back to top button
//    */
//   let backtotop = select('.back-to-top')
//   if (backtotop) {
//     const toggleBacktotop = () => {
//       if (window.scrollY > 50) {
//         backtotop.classList.add('active')
//       } else {
//         backtotop.classList.remove('active')
//       }
//     }
//     window.addEventListener('load', toggleBacktotop)
//     onscroll(document, toggleBacktotop)
//   }
//
//
//
// })()
