(()=>{var e,t={229:(e,t,a)=>{"use strict";var n=a(374),o=a(638);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}o(window).on("load",(function(){var e;(e=o("[data-slider-id]")).length&&e.each((function(){var e,t=o(this),a=t.data("slider-id"),c=t.data("slider-prev"),r=t.data("slider-next"),l=o('[data-slider-button="'.concat(c,'"]')),d=o('[data-slider-button="'.concat(r,'"]')),u=o("[data-slider-buttons]");u.length&&t.find(".swiper-slide").length<+u.data("slider-buttons")&&u.addClass("hidden");var v={slidesPerView:"auto",spaceBetween:12,speed:500,breakpoints:s({},1280,{spaceBetween:0})};switch(a){case"main":v=i(i({},v),{},{slidesPerGroup:1,spaceBetween:12,slidesPerView:"auto",on:{slideChange:function(e){var t=Math.abs(e.progress);0===t?l.removeClass("visible"):l.addClass("visible"),1===t?d.removeClass("visible"):d.addClass("visible")},init:function(){var e=document.querySelectorAll(".menu-filter__item");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}))}},breakpoints:{320:{},1280:{slidesPerView:2,spaceBetween:32,slidesPerGroup:2}},scrollbar:{el:".swiper-scrollbar",draggable:!0}});break;case"main-2":v=i(i({},v),{},{spaceBetween:12,slidesPerView:1,allowTouchMove:!1,on:{slideChange:function(e){var t=Math.abs(e.progress);0===t?l.removeClass("visible"):l.addClass("visible"),1===t?d.removeClass("visible"):d.addClass("visible")},init:function(){var e=document.querySelectorAll(".menu-filter__item");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}))}},breakpoints:{320:{},1280:{spaceBetween:32}},scrollbar:{el:".swiper-scrollbar",draggable:!0}});break;case"main-3":v=i(i({},v),{},{spaceBetween:12,slidesPerView:2,on:{slideChange:function(e){var t=Math.abs(e.progress);0===t?l.removeClass("visible"):l.addClass("visible"),1===t?d.removeClass("visible"):d.addClass("visible")},init:function(){var e=document.querySelectorAll(".menu-filter__item");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}))}},breakpoints:{320:{slidesPerView:"auto"},1280:{spaceBetween:32,allowTouchMove:!1}},scrollbar:{el:".swiper-scrollbar",draggable:!0}});break;case"location":v=i(i({},v),{},{loop:!0,allowTouchMove:!1,scrollbar:{el:".slider-location__scrollbar",draggable:!0}});break;case"location-img":v=i(i({},v),{},{loop:!0,allowTouchMove:!1});break;case"location-mobile":v=i(i({},v),{},{slidesPerView:"auto",spaceBetween:12,scrollbar:{el:".slider-location__scrollbar_mobile",draggable:!0}});break;case"location-chief-mobile":v=i(i({},v),{},{slidesPerView:"auto",spaceBetween:12,scrollbar:{el:".slider-location__mobile-scroll_chief",draggable:!0}});break;case"chef":v=i(i({},v),{},{allowTouchMove:!1,loop:!0,scrollbar:{el:".slider-location__scrollbar_chef",draggable:!0}});break;case"food-card":v=i(i({},v),{},{pagination:{el:".swiper-pagination"}});break;case"menu":v={speed:400,slidesPerView:"auto",spaceBetween:0,on:{slideChange:function(e){var t=Math.abs(e.progress);console.log(t),0===t?l.removeClass("visible"):l.addClass("visible"),1===t?d.removeClass("visible"):d.addClass("visible")},init:function(){var e=document.querySelectorAll(".menu-filter__item");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}))}}}}e=new n.Z(t[0],v),l.on("click",(function(){e.slidePrev()})),d.on("click",(function(){e.slideNext()}))}))}));var r=a(638),l=r(".overlay");function d(){v(),l.removeClass("overlay_active"),r("body").removeClass("modal-active"),v(),f=""}function u(){v(),l.addClass("overlay_active"),r("body").addClass("modal-active")}function v(){r(".modal__item").each((function(e,t){r(t).removeClass("modal__item-active")}))}r((function(){l.on("click",(function(e){d()}))}));var m=a(638),f="";m((function(){m(".sidebar");m("[data-sidebar]").each((function(e,t){m(t).on("click",(function(){var e=m(t).data("sidebar");if(f===e)return m("[data-modal=".concat(e,"]")).removeClass("modal__item-active"),d(),void(f="");d(),u(),m("[data-modal=".concat(e,"]")).addClass("modal__item-active"),f=e}))}))}));a(996),a(295);var b=a(638);b((function(){b(".modal").on("click",(function(e){b(e.target).hasClass("modal__item")&&d()}))}));a(917);var p=a(638);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){k(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y={closeExisting:!0,touch:!1,hideScrollbar:!1,autoFocus:!1,baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-stage"></div></div>',animationEffect:"zoom",animationDuration:400};p((function(){p("[data-fancy-button]").on("click",(function(e){e.preventDefault(),function(e){var t=g({},y),a=e.data("fancy-button"),n=p('[data-fancy-modal="'.concat(a,'"]'));if("about"===a)t.animationEffect="left";else t=g({},y);p.fancybox.defaults=g(g({},p.fancybox.defaults),t),p.fancybox.open(n)}(p(this))}))}));a(50);var w=a(638);document.addEventListener("DOMContentLoaded",(function(){w((function(){w(".close").each((function(e,t){w(t).on("click",(function(){d()}))}))}))}));a(490);var _=a(638);_((function(){_(".select__select");_(".select__select").each((function(){var e=_(this),t=e.closest(".select-wrapper"),a=getComputedStyle(t[0]),n=_(this).data("select-placeholder");"static"===a.position&&t.css("position","relative"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n}),e.on("select2:open",(function(e){t.css("z-index","100000");var a="scroll.select2";_(e.target).parents().off(a),_(window).off(a);var n=t.find(".select2-dropdown");n.hide();var o=setTimeout((function(){n.slideDown({duration:500}),clearTimeout(o)}),0)})),e.on("select2:closing",(function(a){a.preventDefault();var o=t.find(".select2-dropdown"),c=setTimeout((function(){t.css("z-index","");var a=t.find(".select2");a.addClass("closing"),a.removeClass("select2-container--open"),o.slideUp(500,(function(){var a=setTimeout((function(){e.select2("destroy"),e.select2({dropdownParent:t,selectOnClose:!0,minimumResultsForSearch:1/0,placeholder:n}),e.removeClass("closing"),t.css("z-index",""),clearTimeout(a)}),300)})),clearTimeout(c)}),0)}))}))}));a(803);var C=a(638);const L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:58,a=C(e),n=a.find("span"),o=a.find("a");setInterval((function(){t<0?a.fadeOut({duration:400,easing:"linear",complete:function(){o.fadeIn(400)}}):(n.text("0:".concat(t<10?"0"+t:t)),t-=1)}),1e3)};var O=a(814),S=a(126),E=a(638);E((function(){var e=E("[data-date-input]"),t=new Date,a={content:"Сегодня",className:"custom-button-classname",onClick:function(a){a.selectDate(t),a.setViewDate(t),setTimeout((function(){e.val("Сегодня, ".concat(e.val())),e.trigger("input")}),0)}},n={content:"Завтра",className:"custom-button-classname",onClick:function(a){var n=t.getTime()+864e5;a.selectDate(n),a.setViewDate(n),setTimeout((function(){e.val("Завтра, ".concat(e.val())),e.trigger("input")}),0)}};new O.Z("#airdatepicker",{locale:S.Z,autoClose:!0,minDate:t,keyboardNav:!0,classes:"dateAir",onSelect:function(){e.trigger("input")},dateFormat:function(e){return e.toLocaleString("ru",{day:"2-digit",month:"long"})},buttons:[a,n]}),new O.Z("#airdatepicker2",{locale:S.Z,autoClose:!0,minDate:t,keyboardNav:!0,classes:"dateAir",dateFormat:function(e){return e.toLocaleString("ru",{day:"2-digit",month:"long"})},buttons:[a,n]})}));a(563),a(419);var P=a(638);P((function(){P("form").parsley(),Parsley.addMessages("ru",{defaultMessage:"Некорректное значение",type:{email:"Введите адрес электронной почты",url:"Введите URL адрес",number:"Введите число",integer:"Введите целое число",digits:"Введите только цифры",alphanum:"Введите буквенно-цифровое значение"},notblank:"Это поле должно быть заполнено",required:"Обязательное поле",pattern:"Это значение некорректно",min:"Это значение должно быть не менее чем %s",max:"Это значение должно быть не более чем %s",range:"Это значение должно быть от %s до %s",minlength:"Минимум %s символов",maxlength:"Это значение должно содержать не более %s символов",length:"Это значение должно содержать от %s до %s символов",mincheck:"Выберите не менее %s значений",maxcheck:"Выберите не более %s значений",check:"Выберите от %s до %s значений",equalto:"Пароли не совпадают"}),Parsley.setLocale("ru"),Inputmask({mask:"+7 (999) 999-99-99",showMaskOnHover:!1}).mask("[data-mask-phone]"),window.Parsley.addValidator("phone",{requirementType:"string",validateString:function(e){return 11===e.replaceAll(/\D/g,"").length},messages:{ru:"Заполните поле"}}),window.Parsley.addValidator("string",{requirementType:"string",validateString:function(e){return!/[^a-zа-яё\s]/i.test(e)},messages:{ru:"Спецсимволы и цифры запрещены"}})}));a(23),a(771);var x=a(638);x((function(){var e=x("[data-mobile-menu]"),t=x(".mobile-menu "),a=x("[data-close=mobile-menu]");e.on("click",(function(){t.addClass("mobile-menu-active"),x("body").addClass("modal-active")})),a.on("click",(function(){t.removeClass("mobile-menu-active"),x("body").removeClass("modal-active")}));var n=x("[data-mobile=booking]"),o=x("[data-sidebar=3]");x("[data-close=1]");n.on("click",(function(){o.trigger("click")}))}));var j=1024,q=768,D=window.matchMedia("(min-width: ".concat(j,"px)")),T=(window.matchMedia("(min-width: ".concat(q,"px)")),a(638));document.addEventListener("DOMContentLoaded",(function(){D.matches||window.addEventListener("click",(function(e){var t=e.target;if(t.closest("[data-accordion-button]")){var a=t.closest("[data-accordion]"),n=a.querySelector("[data-accordion-dropdown]");a.classList.toggle("active"),T(n).slideToggle(300)}}))}));var M=a(638);M((function(){var e=M(".modal"),t=M("[data-modal=3]");M("[data-back=1]").on("click",(function(){t.removeClass("modal__item-active"),e.removeClass("modal-active")})),M("[data-close=1]").on("click",(function(){t.removeClass("modal__item-active"),M(".mobile-menu").removeClass("mobile-menu-active"),e.removeClass("modal-active")}))}));a(732),a(459),a(924),a(619);var B=a(638);B((function(){B('[data-fancy-modal="k23u"]').on("click",(function(){L(".confirm__row")}))}));a(413)},996:(e,t,a)=>{var n=a(638);n((function(){var e=n(".basket"),t=(n(".basket__btn"),n(".basket__row-middle")),a=n("[data-basket]");e.find("input").each((function(e,t){n(t).on("input",(function(e){var t=n(e.target).closest(".input-wrapper").siblings("button");n(e.target).val().length>0?t.addClass("controls__input-btn-active"):t.removeClass("controls__input-btn-active")}))})),a.each((function(e,t){n(t).on("click",(function(){a.each((function(e,t){n(t).removeClass("controls__basket-btn-active")})),n(t).addClass("controls__basket-btn-active"),n("[data-basketBox]").each((function(e,t){n(t).removeClass("controls__input-active")})),n("[data-basketBox=".concat(n(t).data("basket"),"]")).addClass("controls__input-active")}))})),t.on("scroll",(function(){var t,a,o,c,i;t=document.querySelector(".basket__row-middle"),a=document.querySelectorAll(".basket__item"),o=Array.from(a).pop(),c=o.getBoundingClientRect().y+o.getBoundingClientRect().height,i=t.getBoundingClientRect().y+t.getBoundingClientRect().height,c<=i?e.addClass("basket-active"):e.removeClass("basket-active"),n(".basket__row-middle").scrollTop()>0?e.addClass("basket-scroll"):e.removeClass("basket-scroll")})),n("[data-basket-modal]").each((function(e,t){n(t).on("click",(function(){"close"===n(t).data("basket-modal")&&n(".basket").addClass("basket_empty"),n.fancybox.close("[data-fancy-modal=modal-1]")}))}))}))},619:(e,t,a)=>{var n=a(638);n((function(){var e=n(".address");e.each((function(e,t){n(t).on("click",(function(){n(t).toggleClass("address_black")}))})),n(".modal-card__close").on("click",(function(){console.log("sdf"),e.each((function(e,t){n(t).removeClass("address_black")}))}))}))},459:(e,t,a)=>{var n=a(638);n((function(){n("[data-cards-delete=yes]").on("click",(function(){n(".card-delete").addClass("card-delete-active")}))}))},23:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-checkout-thumbs]"),t=document.querySelectorAll("[data-checkout-address]");e.forEach((function(e,a){e.addEventListener("click",(function(){e.classList.contains("active")||(document.querySelector(".checkout-thumbs__item.active").classList.remove("active"),document.querySelector(".checkout-address.active").classList.remove("active"),e.classList.add("active"),t[a].classList.add("active"),0===!a&&document.querySelector('[data-methods-payment="pickup"]').classList.remove("active"))}))}));var a=document.querySelectorAll(".checkout-address__restaurants-item"),n=document.querySelector(".checkout-methods__plug");window.addEventListener("click",(function(e){(target=e.target.closest("[data-rest-test]"),target&&(target.classList.contains("active")?(target.classList.remove("active"),n.classList.add("active"),document.querySelector('[data-methods-payment="pickup"]').classList.remove("active"),document.querySelector(".checkout-methods__input").classList.remove("active")):(a.forEach((function(e){e.classList.remove("active")})),target.classList.add("active"),n.classList.remove("active"),document.querySelector('[data-methods-payment="pickup"]').classList.add("active"),document.querySelector(".checkout-methods__input").classList.add("active"))),methodTarget=e.target.closest('[data-method-payment="pickup"]'),methodTarget)&&(methodTarget.classList.contains("active")||(document.querySelector(".checkout-methods__payments-item.pickup.active").classList.remove("active"),methodTarget.classList.add("active"),document.querySelector('[data-method-payment="cash"]').classList.contains("active")?document.querySelector(".checkout-methods__input").classList.add("active"):document.querySelector(".checkout-methods__input").classList.remove("active")))}))}))},50:(e,t,a)=>{var n=a(638);n((function(){n("[data-counter-btn]").each((function(e,t){n(t).on("click",(function(){var e=n(t).siblings("p");"increment"===n(t).data("counterBtn")?e.text(+e.text()+1):+e.text()>1?e.text(+e.text()-1):e.text()}))}))}))},924:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-input]");e.length&&e.forEach((function(e){var t=e.closest("[data-input-parent]");e.oninput=function(){this.value?t.classList.add("filled"):t.classList.remove("filled")}}))}))},803:()=>{document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("click",(function(e){var t=e.target.closest("[data-card-btn]");t&&t.classList.remove("active")}))}))},413:(e,t,a)=>{var n=a(638);n((function(){n("[data-menu-card=btn]").each((function(e,t){n(t).on("click",(function(){n(t).fadeOut(0),n(t).siblings(".counter").addClass("menu-slider__counter_active"),counter.fadeIn(0)}))}))}))},295:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll("[data-serving]");e.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(e){e.classList.remove("active")})),t.classList.add("active")}))}))}))},771:()=>{document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("[data-checkout-select]"),t=document.querySelectorAll("[data-checkout-date]");e.onchange=function(){1===e.selectedIndex?t.forEach((function(e){e.classList.remove("active"),"late"===e.dataset.checkoutDate&&e.classList.add("active")})):t.forEach((function(e){e.classList.remove("active"),"fast"===e.dataset.checkoutDate&&e.classList.add("active")}))}}))},732:(e,t,a)=>{var n=a(638);n((function(){var e=n("[data-btnSelect]"),t=n(".address-item");function a(){t.each((function(e,t){n(t).removeClass("address-item-active")}))}e.each((function(e,t){n(t).on("click",(function(){a(),n(t).closest(".address-item").addClass("address-item-active")}))}))}))}},a={};function n(e){var o=a[e];if(void 0!==o)return o.exports;var c=a[e]={exports:{}};return t[e].call(c.exports,c,c.exports,n),c.exports}n.m=t,e=[],n.O=(t,a,o,c)=>{if(!a){var i=1/0;for(d=0;d<e.length;d++){for(var[a,o,c]=e[d],s=!0,r=0;r<a.length;r++)(!1&c||i>=c)&&Object.keys(n.O).every((e=>n.O[e](a[r])))?a.splice(r--,1):(s=!1,c<i&&(i=c));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[a,o,c]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,a)=>{var o,c,[i,s,r]=a,l=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(r)var d=r(n)}for(t&&t(a);l<i.length;l++)c=i[l],n.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return n.O(d)},a=self.webpackChunk=self.webpackChunk||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var o=n.O(void 0,[963],(()=>n(229)));o=n.O(o)})();