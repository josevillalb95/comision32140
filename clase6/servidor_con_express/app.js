const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
let visitas = 0;

// ruta de tipo GET llamada / que retorna un HTML
app.get('/', (req, res) =>{
    console.log( req.connection.remoteAddress) 
    res.send(`
        <h1 style="color: blue" >Bienvenidos al servidor express comision 32140! </h1> 
        <img src="https://media4.giphy.com/media/xUjSOWCndCdECCyOEY/giphy.gif?cid=ecf05e47745edacfe0d3f601feb46227793f5fd5d0e00f8a&rid=giphy.gif&ct=g" > 
        `
    )
})


// ruta de tipo GET que retorna una web 
app.get('/web', (req, res) => res.send(`
 

<!doctype html>
<html lang="es">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="theme-color" content="#f33784"/>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
<meta name="google-site-verification" content="3xIl6rwvbZFMPw2Os_ecSGlPPwrQuE11U5J9Ko2bbas"/>
<meta property="fb:pages" content="411445362304338"/>
<title>Páginas web estáticas vs páginas web dinámicas | OpenWebinars</title>
<!-- Move to BLOG --><link rel="canonical" href="https://openwebinars.net/blog/paginas-web-estaticas-vs-paginas-web-dinamicas/"/>
<link rel="preload" as="font" href="https://openwebinars.net/static/font-awesome/webfonts/fa-solid-900.woff2">
<link rel="preload" as="font" href="https://openwebinars.net/static/font-awesome/webfonts/fa-brands-400.woff2">
<link rel="preload" as="font" href="https://openwebinars.net/static/fonts/lato-light/lato-light-webfont.woff2">
<link rel="preload" as="font" href="https://openwebinars.net/static/fonts/lato-v13-latin-ext_latin-regular.woff2">
<link rel="preload" as="font" href="https://openwebinars.net/static/fonts/lato-v13-latin-ext_latin-300.woff2">
<link rel="preload" as="font" href="https://openwebinars.net/static/fonts/lato-v13-latin-ext_latin-700.woff2">
<link rel="preload" as="font" href="https://openwebinars.net/static/fonts/lato-v13-latin-ext_latin-900.woff2">
<link rel="preload" as="font" href="https://openwebinars.net/static/fonts/bergen/bergentext-bold-webfont.woff2">
<meta name="robots" content="index, follow">
<meta name="description" content="Te mostramos una comparativa entre una página web dinámica y estática, destacando sus diferencias y en qué casos es recomendable utilizar una u otra."/>
<!-- Google Authorship and Publisher Markup -->
<link rel="author" href="https://www.imarv.in/"/>
<link rel="alternate" type="application/rss+xml" title="OpenWebinars.net &raquo; Feed" href="/feed"/>
<!-- Twitter Card data -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@openwebinarsnet">
<meta name="twitter:title" content="Páginas web estáticas vs páginas web dinámicas">
<meta name="twitter:description" content="Te mostramos una comparativa entre una página web dinámica y estática, destacando sus diferencias y en qué casos es recomendable utilizar una u otra.">
<meta name="twitter:creator" content="@openwebinarsnet">
<!-- Twitter summary card with large image must be at least 280x150px -->
<meta name="twitter:image" content="https://dc722jrlp2zu8.cloudfront.net/media/featured_images/P%C3%A1ginas_web_est%C3%A1ticas_vs_p%C3%A1ginas_web_din%C3%A1micas.jpg">
<!-- Open Graph data -->
<meta property="og:title" content="Páginas web estáticas vs páginas web dinámicas"/>
<meta property="og:locale" content="es_ES"/>
<meta property="og:type" content="article"/>
<meta property="og:url" content="https://openwebinars.net/blog/paginas-web-estaticas-vs-paginas-web-dinamicas/"/>
<meta property="og:image" content="https://dc722jrlp2zu8.cloudfront.net/media/featured_images/P%C3%A1ginas_web_est%C3%A1ticas_vs_p%C3%A1ginas_web_din%C3%A1micas.jpg"/>
<meta property="og:description" content="Te mostramos una comparativa entre una página web dinámica y estática, destacando sus diferencias y en qué casos es recomendable utilizar una u otra."/>
<meta property="og:site_name" content="OpenWebinars.net"/>
<meta property="article:published_time" content="2021-02-01T17:00:00+01:00"/>
<meta id="published_time" property="article:modified_time" content="2022-09-05T12:50:50.698487+02:00"/>
<meta property="fb:admins" content="100001483111976"/>
<meta property="fb:app_id" content="618927021547911"/>
<link rel="shortcut icon" href="/static/img/favicon/favicon.ico" sizes="64x64"/>
<link rel="manifest" href="/static/manifest.json" type="text/cache-manifest">
<link rel="apple-touch-icon-precomposed" type="image/png" href="/static/img/favicon/xfavicon-32x32.png.pagespeed.ic.gD4NU3X3N_.webp"/>
<link rel="apple-touch-icon-precomposed" sizes="72x72" type="image/png" href="/static/img/favicon/apple-icon-72x72.png"/>
<link rel="apple-touch-icon-precomposed" sizes="114x114" type="image/png" href="/static/img/favicon/xapple-icon-144x144.png.pagespeed.ic.AVDbp3WUZp.webp"/>
<link rel="apple-touch-icon" sizes="57x57" href="/static/img/favicon/apple-icon-57x57.png"/>
<link rel="apple-touch-icon" sizes="60x60" href="/static/img/favicon/apple-icon-60x60.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="/static/img/favicon/apple-icon-72x72.png"/>
<link rel="apple-touch-icon" sizes="76x76" href="/static/img/favicon/apple-icon-76x76.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="/static/img/favicon/xapple-icon-114x114.png.pagespeed.ic.pmZPq2twNr.webp"/>
<link rel="apple-touch-icon" sizes="120x120" href="/static/img/favicon/xapple-icon-120x120.png.pagespeed.ic.ADV5WCM6mF.webp"/>
<link rel="apple-touch-icon" sizes="144x144" href="/static/img/favicon/xapple-icon-144x144.png.pagespeed.ic.AVDbp3WUZp.webp"/>
<link rel="apple-touch-icon" sizes="152x152" href="/static/img/favicon/xapple-icon-152x152.png.pagespeed.ic.qghcxd0VMO.webp"/>
<link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/xapple-icon-180x180.png.pagespeed.ic.vttFxPvhUC.webp"/>
<link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/xfavicon-16x16.png.pagespeed.ic.KkxmmEzYCm.webp"/>
<link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/xfavicon-32x32.png.pagespeed.ic.gD4NU3X3N_.webp"/>
<link rel="icon" type="image/png" sizes="96x96" href="/static/img/favicon/xfavicon-96x96.png.pagespeed.ic.AH_VMI-eJF.webp"/>
<link rel="icon" type="image/png" sizes="192x192" href="/static/img/favicon/xandroid-icon-192x192.png.pagespeed.ic.5mObORa-8k.webp"/>
<link rel="manifest" href="/static/img/favicon/manifest.json"/>
<meta name="msapplication-TileColor" content="#f33784"/>
<meta name="msapplication-TileImage" content="https://openwebinars.net/static/img/favicon/ms-icon-144x144.png"/>
<meta name="theme-color" content="#f33784"/>
<style>body:not(.scrolled) #hubspot-messages-iframe-container{display:none!important}.link-ofus{cursor:pointer}.navbar.fixed .navbar-brand{background:url(/static/images/ow-logo-secondary.svg) no-repeat center top;background-size:100% 100%}body:not(.scrolled) .adroll_consent_banner, body:not(.scrolled) .adroll_mini_consent_banner{display:none!important}</style>
<link rel="amphtml" href="https://openwebinars.net/amp/blog/paginas-web-estaticas-vs-paginas-web-dinamicas/"/>
<style>body:not(.scrolled) #st-2 {display:none}@media (min-width:1025px){#st-2{top:337px!important}}#previewModal .modal-lg{max-width:75%;max-height:90vh}</style>
<!-- DO NOT USE static tag because we Delegate optimizations to pagespeed module -->
<style>@font-face{font-family:'Bergen';src:url(/static/fonts/bergen/bergentext-bold-webfont.woff2) format('woff2') , url(/static/fonts/bergen/bergentext-bold-webfont.woff) format('woff') , url(/static/fonts/bergen/BergenText-Bold.otf) format('opentype');font-weight:900;font-style:normal;font-display:fallback}@font-face{font-family:'Lato';font-display:fallback;font-style:normal;font-weight:100;font-display:fallback;src:url(/static/fonts/lato-v13-latin-ext_latin-100.eot);src:local('Lato Hairline') , local('Lato-Hairline') , url(/static/fonts/lato-v13-latin-ext_latin-100.eot?#iefix) format('embedded-opentype') , url(/static/fonts/lato-v13-latin-ext_latin-100.woff2) format('woff2') , url(/static/fonts/lato-v13-latin-ext_latin-100.woff) format('woff') , url(/static/fonts/Lato-Regular.ttf) format('truetype') , url(/static/fonts/lato-v13-latin-ext_latin-100.svg#Lato) format('svg')}@font-face{font-family:'Lato';font-display:fallback;font-style:normal;font-weight:300;font-display:fallback;src:url(/static/fonts/lato-v13-latin-ext_latin-300.eot);src:local('Lato Light') , local('Lato-Light') , url(/static/fonts/lato-v13-latin-ext_latin-300.eot?#iefix) format('embedded-opentype') , url(/static/fonts/lato-v13-latin-ext_latin-300.woff2) format('woff2') , url(/static/fonts/lato-v13-latin-ext_latin-300.woff) format('woff') , url(/static/fonts/Lato-Regular.ttf) format('truetype') , url(/static/fonts/lato-v13-latin-ext_latin-300.svg#Lato) format('svg')}@font-face{font-family:'Lato';font-display:fallback;font-style:normal;font-weight:400;font-display:fallback;src:url(/static/fonts/lato-v13-latin-ext_latin-regular.eot);src:local('Lato Regular') , local('Lato-Regular') , url(/static/fonts/lato-v13-latin-ext_latin-regular.eot?#iefix) format('embedded-opentype') , url(/static/fonts/lato-v13-latin-ext_latin-regular.woff2) format('woff2') , url(/static/fonts/lato-v13-latin-ext_latin-regular.woff) format('woff') , url(/static/fonts/Lato-Regular.ttf) format('truetype') , url(/static/fonts/lato-v13-latin-ext_latin-regular.svg#Lato) format('svg')}@font-face{font-family:'Lato';font-display:fallback;font-style:normal;font-weight:700;font-display:fallback;src:url(/static/fonts/lato-v13-latin-ext_latin-700.eot);src:local('Lato Bold') , local('Lato-Bold') , url(/static/fonts/lato-v13-latin-ext_latin-700.eot?#iefix) format('embedded-opentype') , url(/static/fonts/lato-v13-latin-ext_latin-700.woff2) format('woff2') , url(/static/fonts/lato-v13-latin-ext_latin-700.woff) format('woff') , url(/static/fonts/Lato-Regular.ttf) format('truetype') , url(/static/fonts/lato-v13-latin-ext_latin-700.svg#Lato) format('svg')}@font-face{font-family:'Lato';font-display:fallback;font-style:normal;font-weight:900;font-display:fallback;src:url(/static/fonts/lato-v13-latin-ext_latin-900.eot);src:local('Lato Black') , local('Lato-Black') , url(/static/fonts/lato-v13-latin-ext_latin-900.eot?#iefix) format('embedded-opentype') , url(/static/fonts/lato-v13-latin-ext_latin-900.woff2) format('woff2') , url(/static/fonts/lato-v13-latin-ext_latin-900.woff) format('woff') , url(/static/fonts/Lato-Regular.ttf) format('truetype') , url(/static/fonts/lato-v13-latin-ext_latin-900.svg#Lato) format('svg')}@font-face{font-family:"Font Awesome 5 Brands";font-style:normal;font-weight:normal;font-display:auto;src:url(/static/font-awesome/webfonts/fa-brands-400.eot);src:url(/static/font-awesome/webfonts/fa-brands-400.eot?#iefix) format("embedded-opentype") , url(/static/font-awesome/webfonts/fa-brands-400.woff2) format("woff2") , url(/static/font-awesome/webfonts/fa-brands-400.woff) format("woff") , url(/static/font-awesome/webfonts/fa-brands-400.ttf) format("truetype") , url(/static/font-awesome/webfonts/fa-brands-400.svg#fontawesome) format("svg")}@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:400;font-display:auto;src:url(/static/font-awesome/webfonts/fa-regular-400.eot);src:url(/static/font-awesome/webfonts/fa-regular-400.eot?#iefix) format("embedded-opentype") , url(/static/font-awesome/webfonts/fa-regular-400.woff2) format("woff2") , url(/static/font-awesome/webfonts/fa-regular-400.woff) format("woff") , url(/static/font-awesome/webfonts/fa-regular-400.ttf) format("truetype") , url(/static/font-awesome/webfonts/fa-regular-400.svg#fontawesome) format("svg")}@font-face{font-family:"Font Awesome 5 Free";font-style:normal;font-weight:900;font-display:auto;src:url(/static/font-awesome/webfonts/fa-solid-900.eot);src:url(/static/font-awesome/webfonts/fa-solid-900.eot?#iefix) format("embedded-opentype") , url(/static/font-awesome/webfonts/fa-solid-900.woff2) format("woff2") , url(/static/font-awesome/webfonts/fa-solid-900.woff) format("woff") , url(/static/font-awesome/webfonts/fa-solid-900.ttf) format("truetype") , url(/static/font-awesome/webfonts/fa-solid-900.svg#fontawesome) format("svg")}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:hidden}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right)>.swal2-modal{margin:auto}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}</style>
<style>@charset "UTF-8";.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}40%,43%,70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06)}70%{-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@-webkit-keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}@-webkit-keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes pulse{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes rubberBand{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shake{0%,to{-webkit-transform:translateZ(0);transform:translateZ(0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes swing{20%{-webkit-transform:rotate(15deg);transform:rotate(15deg)}40%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}60%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}80%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate(-3deg);transform:scale3d(.9,.9,.9) rotate(-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(3deg);transform:scale3d(1.1,1.1,1.1) rotate(3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate(-3deg);transform:scale3d(1.1,1.1,1.1) rotate(-3deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}@keyframes wobble{0%{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate(-5deg);transform:translate3d(-25%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate(3deg);transform:translate3d(20%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate(-3deg);transform:translate3d(-15%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate(2deg);transform:translate3d(10%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate(-1deg);transform:translate3d(-5%,0,0) rotate(-1deg)}to{-webkit-transform:none;transform:none}}@-webkit-keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{0%,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInDown{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}@-webkit-keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInLeft{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}@-webkit-keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInRight{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes bounceInUp{0%,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDownBig{0%{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeft{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeftBig{0%{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{0%{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRightBig{0%{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUpBig{0%{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@-webkit-keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@-webkit-keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@-webkit-keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)}0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)}50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{0%{-webkit-transform:perspective(400px) rotateY(-1turn);transform:perspective(400px) rotateY(-1turn)}0%,40%{-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-190deg);transform:perspective(400px) translateZ(150px) rotateY(-190deg)}50%{-webkit-transform:perspective(400px) translateZ(150px) rotateY(-170deg);transform:perspective(400px) translateZ(150px) rotateY(-170deg)}50%,80%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95)}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@-webkit-keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{0%{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg)}60%{-webkit-transform:perspective(400px) rotateX(10deg);transform:perspective(400px) rotateX(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateX(-5deg);transform:perspective(400px) rotateX(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{0%{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}0%,40%{-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}40%{-webkit-transform:perspective(400px) rotateY(-20deg);transform:perspective(400px) rotateY(-20deg)}60%{-webkit-transform:perspective(400px) rotateY(10deg);transform:perspective(400px) rotateY(10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotateY(-5deg);transform:perspective(400px) rotateY(-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@-webkit-keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@keyframes flipOutX{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateX(-20deg);transform:perspective(400px) rotateX(-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotateX(90deg);transform:perspective(400px) rotateX(90deg);opacity:0}}@-webkit-keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@keyframes flipOutY{0%{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotateY(-15deg);transform:perspective(400px) rotateY(-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotateY(90deg);transform:perspective(400px) rotateY(90deg);opacity:0}}@-webkit-keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)}60%,80%{opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:none;transform:none;opacity:1}}@keyframes lightSpeedIn{0%{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg)}60%,80%{opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg)}to{-webkit-transform:none;transform:none;opacity:1}}@-webkit-keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{0%{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@-webkit-keyframes rotateIn{0%{transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateIn{0%{transform-origin:center;-webkit-transform:rotate(-200deg);transform:rotate(-200deg);opacity:0}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@-webkit-keyframes rotateInDownLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@-webkit-keyframes rotateInDownRight{0%{transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownRight{0%{transform-origin:right bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@-webkit-keyframes rotateInUpLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpLeft{0%{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@-webkit-keyframes rotateInUpRight{0%{transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpRight{0%{transform-origin:right bottom;-webkit-transform:rotate(-90deg);transform:rotate(-90deg);opacity:0}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@-webkit-keyframes rotateOut{0%{transform-origin:center;opacity:1}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@keyframes rotateOut{0%{transform-origin:center;opacity:1}0%,to{-webkit-transform-origin:center}to{transform-origin:center;-webkit-transform:rotate(200deg);transform:rotate(200deg);opacity:0}}@-webkit-keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes rotateOutDownLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@-webkit-keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutDownRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@-webkit-keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@keyframes rotateOutUpLeft{0%{transform-origin:left bottom;opacity:1}0%,to{-webkit-transform-origin:left bottom}to{transform-origin:left bottom;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}}@-webkit-keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@keyframes rotateOutUpRight{0%{transform-origin:right bottom;opacity:1}0%,to{-webkit-transform-origin:right bottom}to{transform-origin:right bottom;-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:0}}@-webkit-keyframes hinge{0%{transform-origin:top left}0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);transform-origin:top left}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{transform-origin:top left}0%,20%,60%{-webkit-transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate(80deg);transform:rotate(80deg);transform-origin:top left}40%,80%{-webkit-transform:rotate(60deg);transform:rotate(60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@-webkit-keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes rollIn{0%{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate(-120deg);transform:translate3d(-100%,0,0) rotate(-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@keyframes rollOut{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate(120deg);transform:translate3d(100%,0,0) rotate(120deg)}}@-webkit-keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@-webkit-keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInDown{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{0%{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes zoomOut{0%{opacity:1}50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%,to{opacity:0}}@keyframes zoomOut{0%{opacity:1}50%{-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%,to{opacity:0}}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInDown{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInRight{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes slideInUp{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}</style>
<style>@font-face{font-family:"Bergen";src:url(/static/fonts/bergen/bergentext-bold-webfont.woff2) format("woff2") , url(/static/fonts/bergen/bergentext-bold-webfont.woff) format("woff") , url(/static/fonts/bergen/BergenText-Bold.otf) format("opentype");font-weight:900;font-style:normal;font-display:swap}@font-face{font-family:"Lato-light";src:url(/static/fonts/lato-light/lato-light-webfont.woff2) format("woff2") , url(/static/fonts/lato-light/lato-light-webfont.woff) format("woff") , url(/static/fonts/lato-v13-latin-ext_latin-100.eot?#iefix) format("embedded-opentype");font-weight:100;font-style:normal}:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#666;--gray-dark:#333;--primary:#010101;--secondary:#f33784;--success:#00d388;--info:#b3b7e9;--warning:#f33784;--danger:#6b396c;--light:#f5f5f5;--dark:#333;--middle-gray:#bfbfbf;--tertiary:#19a4bf;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system , BlinkMacSystemFont , "Segoe UI" , Roboto , "Helvetica Neue" , Arial , "Noto Sans" , sans-serif , "Apple Color Emoji" , "Segoe UI Emoji" , "Segoe UI Symbol" , "Noto Color Emoji";--font-family-monospace:SFMono-Regular , Menlo , Monaco , Consolas , "Liberation Mono" , "Courier New" , monospace}*,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}article,figure,footer,header,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#191919;text-align:left;background-color:#fff}[tabindex="-1"]:focus:not(:focus-visible){outline:0!important}h1,h2,h3,h5{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}ol,ul{margin-top:0;margin-bottom:1rem}b,strong{font-weight:bolder}small{font-size:80%}a{color:#010101;text-decoration:none;background-color:rgba(0,0,0,0)}a:hover{color:#000;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}pre,code{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}input,button{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button{text-transform:none}button,[type="button"],[type="submit"]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{padding:0;border-style:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}h1,h2,h3,h5,.h1,.h3{margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:2.5rem}h2{font-size:2rem}h3,.h3{font-size:1.75rem}h5{font-size:1.25rem}small{font-size:80%;font-weight:400}.list-inline-item:not(:last-child){margin-right:.5rem}.img-fluid{max-width:100%;height:auto}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}pre{display:block;font-size:87.5%;color:#191919}pre code{font-size:inherit;color:inherit;word-break:normal}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1320px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1320px}}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-xl-7,.col-xl-6,.col-lg-10,.col-lg-8,.col-lg-6,.col-lg-4,.col-lg-3,.col-md-10,.col-md-8,.col-md-6,.col-md-5,.col-md-2,.col-sm-12,.col-sm-6,.col,.col-12,.col-6{position:relative;width:100%;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}@media (min-width:576px){.col-sm-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-12{-webkit-box-flex:0;-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}@media (min-width:768px){.col-md-2{-webkit-box-flex:0;-ms-flex:0 0 16.6666666667%;flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-5{-webkit-box-flex:0;-ms-flex:0 0 41.6666666667%;flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-8{-webkit-box-flex:0;-ms-flex:0 0 66.6666666667%;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-10{-webkit-box-flex:0;-ms-flex:0 0 83.3333333333%;flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width:992px){.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-ms-flex:0 0 33.3333333333%;flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-8{-webkit-box-flex:0;-ms-flex:0 0 66.6666666667%;flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-10{-webkit-box-flex:0;-ms-flex:0 0 83.3333333333%;flex:0 0 83.3333333333%;max-width:83.3333333333%}}@media (min-width:1200px){.col-xl-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-webkit-box-flex:0;-ms-flex:0 0 58.3333333333%;flex:0 0 58.3333333333%;max-width:58.3333333333%}}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.form-control{display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#4c4c4c;background-color:#fff;background-clip:padding-box;border:1px solid #999;border-radius:.25rem;-webkit-transition:border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out , box-shadow .15s ease-in-out;transition:border-color .15s ease-in-out , box-shadow .15s ease-in-out , -webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.form-control{-webkit-transition:none;transition:none}}.form-control::-ms-expand{background-color:rgba(0,0,0,0);border:0}.form-control:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #4c4c4c}.form-control:focus{color:#4c4c4c;background-color:#fff;border-color:#414141;outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(1,1,1,.25);box-shadow:0 0 0 .2rem rgba(1,1,1,.25)}.form-control::-webkit-input-placeholder{color:#666;opacity:1}.form-control::-moz-placeholder{color:#666;opacity:1}.form-control:-ms-input-placeholder{color:#666;opacity:1}.form-control::-ms-input-placeholder{color:#666;opacity:1}.form-control::placeholder{color:#666;opacity:1}.form-control:disabled{background-color:#ccc;opacity:1}.form-control-lg{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{color:#666}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#00d388}.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip,.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip{display:block}.was-validated .custom-control-input:valid~.custom-control-label,.custom-control-input.is-valid~.custom-control-label{color:#00d388}.was-validated .custom-control-input:valid~.custom-control-label::before,.custom-control-input.is-valid~.custom-control-label::before{border-color:#00d388}.was-validated .custom-control-input:valid:checked~.custom-control-label::before,.custom-control-input.is-valid:checked~.custom-control-label::before{border-color:#07ffa7;background-color:#07ffa7}.was-validated .custom-control-input:valid:focus~.custom-control-label::before,.custom-control-input.is-valid:focus~.custom-control-label::before{-webkit-box-shadow:0 0 0 .2rem rgba(0,211,136,.25);box-shadow:0 0 0 .2rem rgba(0,211,136,.25)}.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before{border-color:#00d388}.was-validated .custom-file-input:valid~.custom-file-label,.custom-file-input.is-valid~.custom-file-label{border-color:#00d388}.was-validated .custom-file-input:valid:focus~.custom-file-label,.custom-file-input.is-valid:focus~.custom-file-label{border-color:#00d388;-webkit-box-shadow:0 0 0 .2rem rgba(0,211,136,.25);box-shadow:0 0 0 .2rem rgba(0,211,136,.25)}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#6b396c}.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip,.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip{display:block}.was-validated .custom-control-input:invalid~.custom-control-label,.custom-control-input.is-invalid~.custom-control-label{color:#6b396c}.was-validated .custom-control-input:invalid~.custom-control-label::before,.custom-control-input.is-invalid~.custom-control-label::before{border-color:#6b396c}.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,.custom-control-input.is-invalid:checked~.custom-control-label::before{border-color:#8c4b8d;background-color:#8c4b8d}.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,.custom-control-input.is-invalid:focus~.custom-control-label::before{-webkit-box-shadow:0 0 0 .2rem rgba(107,57,108,.25);box-shadow:0 0 0 .2rem rgba(107,57,108,.25)}.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before,.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before{border-color:#6b396c}.was-validated .custom-file-input:invalid~.custom-file-label,.custom-file-input.is-invalid~.custom-file-label{border-color:#6b396c}.was-validated .custom-file-input:invalid:focus~.custom-file-label,.custom-file-input.is-invalid:focus~.custom-file-label{border-color:#6b396c;-webkit-box-shadow:0 0 0 .2rem rgba(107,57,108,.25);box-shadow:0 0 0 .2rem rgba(107,57,108,.25)}.form-inline{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (min-width:576px){.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .input-group{width:auto}}.btn{display:inline-block;font-weight:400;color:#191919;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;-webkit-transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , box-shadow .15s ease-in-out , -webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.btn{-webkit-transition:none;transition:none}}.btn:hover{color:#191919;text-decoration:none}.btn:focus{outline:0;-webkit-box-shadow:0 0 0 .2rem rgba(1,1,1,.25);box-shadow:0 0 0 .2rem rgba(1,1,1,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn-primary{color:#fff;background-color:#010101;border-color:#010101}.btn-primary:hover{color:#fff;background-color:#000;border-color:#000}.btn-primary:focus{color:#fff;background-color:#000;border-color:#000;-webkit-box-shadow:0 0 0 .2rem rgba(39,39,39,.5);box-shadow:0 0 0 .2rem rgba(39,39,39,.5)}.btn-primary:disabled{color:#fff;background-color:#010101;border-color:#010101}.btn-primary:not(:disabled):not(.disabled):active,.btn-primary:not(:disabled):not(.disabled).active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#000;border-color:#000}.btn-primary:not(:disabled):not(.disabled):active:focus,.btn-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(39,39,39,.5);box-shadow:0 0 0 .2rem rgba(39,39,39,.5)}.btn-secondary{color:#fff;background-color:#f33784;border-color:#f33784}.btn-secondary:hover{color:#fff;background-color:#f1136e;border-color:#e90e68}.btn-secondary:focus{color:#fff;background-color:#f1136e;border-color:#e90e68;-webkit-box-shadow:0 0 0 .2rem rgba(245,85,150,.5);box-shadow:0 0 0 .2rem rgba(245,85,150,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#f33784;border-color:#f33784}.btn-secondary:not(:disabled):not(.disabled):active,.btn-secondary:not(:disabled):not(.disabled).active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#e90e68;border-color:#dd0d62}.btn-secondary:not(:disabled):not(.disabled):active:focus,.btn-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(245,85,150,.5);box-shadow:0 0 0 .2rem rgba(245,85,150,.5)}.btn-success:not(:disabled):not(.disabled):active,.btn-success:not(:disabled):not(.disabled).active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#00a067;border-color:#00935f}.btn-success:not(:disabled):not(.disabled):active:focus,.btn-success:not(:disabled):not(.disabled).active:focus,.show>.btn-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(38,218,154,.5);box-shadow:0 0 0 .2rem rgba(38,218,154,.5)}.btn-info:not(:disabled):not(.disabled):active,.btn-info:not(:disabled):not(.disabled).active,.show>.btn-info.dropdown-toggle{color:#191919;background-color:#8b92de;border-color:#8288db}.btn-info:not(:disabled):not(.disabled):active:focus,.btn-info:not(:disabled):not(.disabled).active:focus,.show>.btn-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(156,159,202,.5);box-shadow:0 0 0 .2rem rgba(156,159,202,.5)}.btn-warning:not(:disabled):not(.disabled):active,.btn-warning:not(:disabled):not(.disabled).active,.show>.btn-warning.dropdown-toggle{color:#fff;background-color:#e90e68;border-color:#dd0d62}.btn-warning:not(:disabled):not(.disabled):active:focus,.btn-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(245,85,150,.5);box-shadow:0 0 0 .2rem rgba(245,85,150,.5)}.btn-danger:not(:disabled):not(.disabled):active,.btn-danger:not(:disabled):not(.disabled).active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#4a274b;border-color:#422342}.btn-danger:not(:disabled):not(.disabled):active:focus,.btn-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(129,87,130,.5);box-shadow:0 0 0 .2rem rgba(129,87,130,.5)}.btn-light:not(:disabled):not(.disabled):active,.btn-light:not(:disabled):not(.disabled).active,.show>.btn-light.dropdown-toggle{color:#191919;background-color:#dcdcdc;border-color:#d5d5d5}.btn-light:not(:disabled):not(.disabled):active:focus,.btn-light:not(:disabled):not(.disabled).active:focus,.show>.btn-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(212,212,212,.5);box-shadow:0 0 0 .2rem rgba(212,212,212,.5)}.btn-dark:not(:disabled):not(.disabled):active,.btn-dark:not(:disabled):not(.disabled).active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1a1a1a;border-color:#131313}.btn-dark:not(:disabled):not(.disabled):active:focus,.btn-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(82,82,82,.5);box-shadow:0 0 0 .2rem rgba(82,82,82,.5)}.btn-middle-gray:not(:disabled):not(.disabled):active,.btn-middle-gray:not(:disabled):not(.disabled).active,.show>.btn-middle-gray.dropdown-toggle{color:#191919;background-color:#a6a6a6;border-color:#9f9f9f}.btn-middle-gray:not(:disabled):not(.disabled):active:focus,.btn-middle-gray:not(:disabled):not(.disabled).active:focus,.show>.btn-middle-gray.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(166,166,166,.5);box-shadow:0 0 0 .2rem rgba(166,166,166,.5)}.btn-tertiary:not(:disabled):not(.disabled):active,.btn-tertiary:not(:disabled):not(.disabled).active,.show>.btn-tertiary.dropdown-toggle{color:#fff;background-color:#137d92;border-color:#127487}.btn-tertiary:not(:disabled):not(.disabled):active:focus,.btn-tertiary:not(:disabled):not(.disabled).active:focus,.show>.btn-tertiary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(60,178,201,.5);box-shadow:0 0 0 .2rem rgba(60,178,201,.5)}.btn-outline-primary:not(:disabled):not(.disabled):active,.btn-outline-primary:not(:disabled):not(.disabled).active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#010101;border-color:#010101}.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(1,1,1,.5);box-shadow:0 0 0 .2rem rgba(1,1,1,.5)}.btn-outline-secondary:not(:disabled):not(.disabled):active,.btn-outline-secondary:not(:disabled):not(.disabled).active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#f33784;border-color:#f33784}.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(243,55,132,.5);box-shadow:0 0 0 .2rem rgba(243,55,132,.5)}.btn-outline-success:not(:disabled):not(.disabled):active,.btn-outline-success:not(:disabled):not(.disabled).active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#00d388;border-color:#00d388}.btn-outline-success:not(:disabled):not(.disabled):active:focus,.btn-outline-success:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-success.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(0,211,136,.5);box-shadow:0 0 0 .2rem rgba(0,211,136,.5)}.btn-outline-info:not(:disabled):not(.disabled):active,.btn-outline-info:not(:disabled):not(.disabled).active,.show>.btn-outline-info.dropdown-toggle{color:#191919;background-color:#b3b7e9;border-color:#b3b7e9}.btn-outline-info:not(:disabled):not(.disabled):active:focus,.btn-outline-info:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-info.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(179,183,233,.5);box-shadow:0 0 0 .2rem rgba(179,183,233,.5)}.btn-outline-warning:not(:disabled):not(.disabled):active,.btn-outline-warning:not(:disabled):not(.disabled).active,.show>.btn-outline-warning.dropdown-toggle{color:#fff;background-color:#f33784;border-color:#f33784}.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(243,55,132,.5);box-shadow:0 0 0 .2rem rgba(243,55,132,.5)}.btn-outline-danger:not(:disabled):not(.disabled):active,.btn-outline-danger:not(:disabled):not(.disabled).active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#6b396c;border-color:#6b396c}.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(107,57,108,.5);box-shadow:0 0 0 .2rem rgba(107,57,108,.5)}.btn-outline-light:not(:disabled):not(.disabled):active,.btn-outline-light:not(:disabled):not(.disabled).active,.show>.btn-outline-light.dropdown-toggle{color:#191919;background-color:#f5f5f5;border-color:#f5f5f5}.btn-outline-light:not(:disabled):not(.disabled):active:focus,.btn-outline-light:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-light.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(245,245,245,.5);box-shadow:0 0 0 .2rem rgba(245,245,245,.5)}.btn-outline-dark:not(:disabled):not(.disabled):active,.btn-outline-dark:not(:disabled):not(.disabled).active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#333;border-color:#333}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(51,51,51,.5);box-shadow:0 0 0 .2rem rgba(51,51,51,.5)}.btn-outline-middle-gray:not(:disabled):not(.disabled):active,.btn-outline-middle-gray:not(:disabled):not(.disabled).active,.show>.btn-outline-middle-gray.dropdown-toggle{color:#191919;background-color:#bfbfbf;border-color:#bfbfbf}.btn-outline-middle-gray:not(:disabled):not(.disabled):active:focus,.btn-outline-middle-gray:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-middle-gray.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(191,191,191,.5);box-shadow:0 0 0 .2rem rgba(191,191,191,.5)}.btn-outline-tertiary:not(:disabled):not(.disabled):active,.btn-outline-tertiary:not(:disabled):not(.disabled).active,.show>.btn-outline-tertiary.dropdown-toggle{color:#fff;background-color:#19a4bf;border-color:#19a4bf}.btn-outline-tertiary:not(:disabled):not(.disabled):active:focus,.btn-outline-tertiary:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-tertiary.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(25,164,191,.5);box-shadow:0 0 0 .2rem rgba(25,164,191,.5)}.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.dropdown{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid rgba(0,0,0,0);border-bottom:0;border-left:.3em solid rgba(0,0,0,0)}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#191919;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#191919;text-align:inherit;white-space:nowrap;background-color:rgba(0,0,0,0);border:0}.dropdown-item:hover,.dropdown-item:focus{color:#0c0c0c;text-decoration:none;background-color:#e5e5e5}.dropdown-item:active{color:#fff;text-decoration:none;background-color:#010101}.dropdown-item:disabled{color:#666;pointer-events:none;background-color:rgba(0,0,0,0)}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.input-group{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.form-control{position:relative;-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%;min-width:0;margin-bottom:0}.input-group>.form-control:focus,.input-group>.custom-select:focus,.input-group>.custom-file .custom-file-input:focus~.custom-file-label{z-index:3}.input-group>.form-control:not(:last-child),.input-group>.custom-select:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.form-control:not(:first-child),.input-group>.custom-select:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-prepend,.input-group-append{display:-webkit-box;display:-ms-flexbox;display:flex}.input-group-append .btn{position:relative;z-index:2}.input-group-append .btn:focus{z-index:3}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#4c4c4c;text-align:center;white-space:nowrap;background-color:#ccc;border:1px solid #999;border-radius:.25rem}.input-group-lg>.form-control:not(textarea),.input-group-lg>.custom-select{height:calc(1.5em + 1rem + 2px)}.input-group-sm>.form-control:not(textarea),.input-group-sm>.custom-select{height:calc(1.5em + 0.5rem + 2px)}.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text,.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;border-color:#010101;background-color:#010101}.custom-control-input:focus~.custom-control-label::before{-webkit-box-shadow:0 0 0 .2rem rgba(1,1,1,.25);box-shadow:0 0 0 .2rem rgba(1,1,1,.25)}.custom-control-input:focus:not(:checked)~.custom-control-label::before{border-color:#414141}.custom-control-input:not(:disabled):active~.custom-control-label::before{color:#fff;background-color:#5a5a5a;border-color:#5a5a5a}.custom-control-input[disabled]~.custom-control-label,.custom-control-input:disabled~.custom-control-label{color:#666}.custom-control-input[disabled]~.custom-control-label::before,.custom-control-input:disabled~.custom-control-label::before{background-color:#ccc}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url(data:image/svg+xml,%3csvg\ xmlns=\'http://www.w3.org/2000/svg\'\ width=\'8\'\ height=\'8\'\ viewBox=\'0\ 0\ 8\ 8\'%3e%3cpath\ fill=\'%23fff\'\ d=\'M6.564.75l-3.59\ 3.612-1.538-1.55L0\ 4.26l2.974\ 2.99L8\ 2.193z\'/%3e%3c/svg%3e)}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{border-color:#010101;background-color:#010101}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url(data:image/svg+xml,%3csvg\ xmlns=\'http://www.w3.org/2000/svg\'\ width=\'4\'\ height=\'4\'\ viewBox=\'0\ 0\ 4\ 4\'%3e%3cpath\ stroke=\'%23fff\'\ d=\'M0\ 2h4\'/%3e%3c/svg%3e)}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(1,1,1,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(1,1,1,.5)}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url(data:image/svg+xml,%3csvg\ xmlns=\'http://www.w3.org/2000/svg\'\ width=\'12\'\ height=\'12\'\ viewBox=\'-4\ -4\ 8\ 8\'%3e%3ccircle\ r=\'3\'\ fill=\'%23fff\'/%3e%3c/svg%3e)}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(1,1,1,.5)}.custom-switch .custom-control-input:checked~.custom-control-label::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.custom-switch .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(1,1,1,.5)}.custom-select[multiple],.custom-select[size]:not([size="1"]){height:auto;padding-right:.75rem;background-image:none}.custom-file-input:focus~.custom-file-label{border-color:#414141;-webkit-box-shadow:0 0 0 .2rem rgba(1,1,1,.25);box-shadow:0 0 0 .2rem rgba(1,1,1,.25)}.custom-file-input[disabled]~.custom-file-label,.custom-file-input:disabled~.custom-file-label{background-color:#ccc}.custom-file-input:lang(en)~.custom-file-label::after{content:"Browse"}.custom-file-input~.custom-file-label[data-browse]::after{content:attr(data-browse)}.nav-link{display:block;padding:.5rem 1rem}.nav-link:hover,.nav-link:focus{text-decoration:none}.navbar{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar .container{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{text-decoration:none}.navbar-nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:rgba(0,0,0,0);border:1px solid rgba(0,0,0,0);border-radius:.25rem}.navbar-toggler:hover,.navbar-toggler:focus{text-decoration:none}@media (max-width:991.98px){.navbar-expand-lg>.container{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}.card{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card-body{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-text:last-child{margin-bottom:0}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-img-top{-ms-flex-negative:0;flex-shrink:0;width:100%}.card-img-top{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}@media (min-width:576px){.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion>.card:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion>.card:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.breadcrumb{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#ccc;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#666;content:"/"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#666}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;-webkit-transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , -webkit-box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , box-shadow .15s ease-in-out;transition:color .15s ease-in-out , background-color .15s ease-in-out , border-color .15s ease-in-out , box-shadow .15s ease-in-out , -webkit-box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.badge{-webkit-transition:none;transition:none}}.badge:empty{display:none}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-secondary{color:#fff;background-color:#f33784}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:hover{color:#000;text-decoration:none}.close:not(:disabled):not(.disabled):hover,.close:not(:disabled):not(.disabled):focus{opacity:.75}button.close{padding:0;background-color:rgba(0,0,0,0);border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.toast:not(:last-child){margin-bottom:.75rem}.modal{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal-dialog-centered{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.modal-dialog-centered::before{display:block;height:calc(100vh - 1rem);content:""}.modal-content{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #b2b2b2;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.modal-header .close{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - 3.5rem)}.modal-dialog-centered::before{height:calc(100vh - 3.5rem)}}@media (min-width:992px){.modal-lg{max-width:800px}}.carousel-item-next:not(.carousel-item-left),.active.carousel-item-right{-webkit-transform:translateX(100%);transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-right),.active.carousel-item-left{-webkit-transform:translateX(-100%);transform:translateX(-100%)}@-webkit-keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-border{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes spinner-grow{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.border-top{border-top:1px solid #b2b2b2!important}.border-bottom{border-bottom:1px solid #b2b2b2!important}.border-0{border:0!important}.rounded-circle{border-radius:50%!important}.d-none{display:none!important}.d-inline{display:inline!important}.d-block{display:block!important}.d-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-block{display:block!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-block{display:block!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-block{display:block!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-block{display:block!important}}.flex-column{-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;-ms-flex-direction:column!important;flex-direction:column!important}.justify-content-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-webkit-box-align:start!important;-ms-flex-align:start!important;align-items:flex-start!important}.align-items-center{-webkit-box-align:center!important;-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-webkit-box-align:baseline!important;-ms-flex-align:baseline!important;align-items:baseline!important}@media (min-width:576px){.flex-sm-row{-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-ms-flex-direction:row!important;flex-direction:row!important}}@media (min-width:768px){.justify-content-md-center{-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important}}@media (min-width:992px){.justify-content-lg-end{-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important}}.float-right{float:right!important}@supports(position: sticky){.sticky-top{position:sticky;top:0;z-index:1020}}.w-75{width:75%!important}.w-100{width:100%!important}.ml-0{margin-left:0!important}.mt-1{margin-top:.25rem!important}.mr-1{margin-right:.25rem!important}.ml-1{margin-left:.25rem!important}.mt-2{margin-top:.5rem!important}.mr-2{margin-right:.5rem!important}.ml-2{margin-left:.5rem!important}.mt-3{margin-top:1rem!important}.mr-3{margin-right:1rem!important}.mb-3{margin-bottom:1rem!important}.ml-3{margin-left:1rem!important}.mt-4{margin-top:1.5rem!important}.mb-4{margin-bottom:1.5rem!important}.mt-5{margin-top:3rem!important}.mb-5{margin-bottom:3rem!important}.p-0{padding:0!important}.px-0{padding-right:0!important}.pb-0{padding-bottom:0!important}.px-0{padding-left:0!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.py-3{padding-top:1rem!important}.py-3{padding-bottom:1rem!important}.pt-4{padding-top:1.5rem!important}.pb-4{padding-bottom:1.5rem!important}.pt-5{padding-top:3rem!important}.pb-5{padding-bottom:3rem!important}@media (min-width:576px){.mr-sm-2{margin-right:.5rem!important}.mr-sm-auto{margin-right:auto!important}}@media (min-width:768px){.mb-md-5{margin-bottom:3rem!important}.pb-md-0{padding-bottom:0!important}.pb-md-1{padding-bottom:.25rem!important}.pl-md-4{padding-left:1.5rem!important}}@media (min-width:992px){.mb-lg-0{margin-bottom:0!important}.ml-lg-5{margin-left:3rem!important}.pr-lg-0{padding-right:0!important}.pl-lg-0{padding-left:0!important}.mr-lg-auto{margin-right:auto!important}.ml-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.ml-xl-0{margin-left:0!important}}.text-left{text-align:left!important}.text-center{text-align:center!important}.font-weight-bold{font-weight:700!important}.text-white{color:#fff!important}.text-secondary{color:#f33784!important}a.text-secondary:hover,a.text-secondary:focus{color:#d10d5d!important}@media print{@page{size:a3}}body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;min-height:100vh;font-family:Lato,Helvetica\ Neue,Helvetica,Arial,sans-serif;font-weight:300}body:not(.error404) main{min-height:calc(100vh - 518px)}main{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}::-moz-selection{background:#f44f93}::selection{background:#f44f93}h1,h2,h3,h5,.h1,.h3{font-family:Lato,Helvetica\ Neue,Helvetica,Arial,sans-serif;font-weight:400}a{color:#010101}a:hover{text-decoration:none}.text-secondary{color:#f33784!important}.accordion-title:not(.collapsed) i{-webkit-transform:rotate(180deg);transform:rotate(180deg);color:#f33784}.badge-secondary{color:#fff;background-color:#f33784}.badge-pill{border-radius:3px}.breadcrumb{display:none;margin:1rem 0;display:none;border-width:.0625rem 0 .0625rem 0;border-color:rgba(230,230,230,.3);border-style:solid;background-color:rgba(0,0,0,0);border-radius:0}@media (min-width:992px){.breadcrumb{display:-webkit-box;display:-ms-flexbox;display:flex}}.breadcrumb-item{color:#fff;font-size:1.125rem}.breadcrumb-item a{font-size:1rem;color:#fff}.breadcrumb-item a:hover{text-decoration:none}.breadcrumb-item.active{line-height:28px;font-size:1rem;font-weight:normal;color:#fff!important;text-decoration:none}.breadcrumb-item.active strong{font-weight:normal}.btn{border-radius:5px}.btn-lg{line-height:2rem}.btn-primary{color:#fff;border-color:#010101;background-color:#010101;border:1px solid #fff}.btn-primary:hover,.btn-primary:active,.btn-primary:focus{border-color:#000;background-color:#000;-webkit-box-shadow:none;box-shadow:none;border:1px solid #fff}.btn-secondary{color:#fff;border-color:#f33784;background-color:#f33784}.btn-secondary:hover,.btn-secondary:active,.btn-secondary:focus{border-color:#d10d5d;background-color:#d10d5d;-webkit-box-shadow:none;box-shadow:none}.card-header{-webkit-box-align:start;-ms-flex-align:start;align-items:start;padding-top:1.25rem}.card-body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-align:start;-ms-flex-align:start;align-items:start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:auto!important}.card-body .card-text{width:100%}.card-leading{padding-bottom:1rem;margin-bottom:1.25rem;border-width:0}.card-leading .card-header{margin:0;padding:0}.card-leading .card-header img{cursor:pointer}.card-leading .card-body{padding:0 0 1rem 0;background-color:#fff}.card-leading .card-content{padding:0 1rem}.card-leading .card-content ul{list-style:none}.card-leading .card-content ul li{padding:.5rem 0;position:relative;font-size:.8125rem;font-weight:300;color:#616161}.card-leading .card-content ul li::before{position:absolute;top:-2px;left:0;content:"•";font-size:1.5rem;color:#f33784;display:inline-block;margin-left:-1rem}.card-leading .card-title{margin:0;padding:1rem;font-size:1.375rem;font-weight:700;line-height:1.4;word-break:break-word;background-color:#fff}.card-leading .card-title a{display:block}.card-leading .card-title a:hover{text-decoration:underline}.card-leading .card-text{font-size:1rem;font-weight:400;color:#000}.card-leading .card-footer{padding:0 2.625rem;border-width:0;background-color:#fff}.card-leading .card-footer .card-text{font-size:.8125rem}pre{border-radius:4px}pre code{display:block;overflow-x:auto;padding:.5em;white-space:pre-wrap;border-radius:4px}.dropdown-toggle{padding-right:1.5rem;-moz-text-align-last:left;text-align-last:left;background-color:#fff}.dropdown-toggle::after{position:absolute;right:13px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}@media (min-width:992px){.dropdown .columns-2{width:36rem}}.navbar-brand{width:12.5rem;min-height:2rem;display:inline-block;position:relative;background:url(/static/images/ow-logo-primary.svg) no-repeat center top;background-size:100% 100%}.navbar-brand span{display:block;position:absolute;top:-625rem;left:-625rem}.navbar-nav-search .input-group{margin-top:.25rem}@media (min-width:1200px){.navbar-nav-search .input-group{min-width:16.9rem}}.navbar-nav-search .input-group .form-control{padding-top:0;padding-bottom:0;border-width:0;background-color:#2f2e2f;color:#fff;-webkit-transition:all .5s ease;transition:all .5s ease}.navbar-nav-search .input-group .form-control::-webkit-input-placeholder{color:#fff;opacity:1}.navbar-nav-search .input-group .form-control::-moz-placeholder{color:#fff;opacity:1}.navbar-nav-search .input-group .form-control:-ms-input-placeholder{color:#fff;opacity:1}.navbar-nav-search .input-group .form-control::-ms-input-placeholder{color:#fff;opacity:1}.navbar-nav-search .input-group .form-control::placeholder{color:#fff;opacity:1}.navbar-nav-search .input-group .form-control:focus{-webkit-transition:all .3s ease;transition:all .3s ease;background-color:#424242!important}.navbar-nav-search .input-group-append .btn{border-color:#010101;border-width:0 0 0 0;background-color:#2f2e2f;min-width:40px;min-height:36px}.navbar-nav-search .input-group-append .btn i{color:#f33784}.navbar-nav-courses{margin-left:10px;margin-bottom:4px}@media (min-width:768px){.navbar-nav-courses:not(.navbar-academy){margin-left:50px}}.navbar-nav-courses .nav-link{color:#fff;min-width:78px;margin-top:0;font-weight:bold;-moz-text-align-last:left;text-align-last:left}@media (min-width:768px){.navbar-nav-courses .nav-link{-moz-text-align-last:center;text-align-last:center}}.navbar-nav-courses .nav-link:hover{color:#c4c4c4}.navbar-nav-courses .dropdown-toggle{position:relative;border-color:#111;background-color:rgba(0,0,0,0);font-size:1rem}.navbar-nav-courses .dropdown-toggle::after{vertical-align:-moz-middle-with-baseline;vertical-align:middle;opacity:0;-webkit-transition:all .3s ease;transition:all .3s ease;font-family:"Font Awesome 5 Free";font-weight:600;content:"";font-size:.75rem;border:none;color:#e3e3e3}.navbar-nav-courses .dropdown-toggle:hover::after{opacity:1}.navbar-nav-courses .dropdown-toggle:hover,.navbar-nav-courses .dropdown-toggle:focus{-webkit-box-shadow:none;box-shadow:none}.navbar-nav-courses .dropdown-toggle+.dropdown-menu:not(.dropdown-menu-academy){position:relative;overflow:hidden}@media (min-width:768px){.navbar-nav-courses .dropdown-toggle+.dropdown-menu:not(.dropdown-menu-academy){overflow:initial;position:absolute}}.navbar-nav-courses .dropdown-toggle+.dropdown-menu:not(.dropdown-menu-academy)::after{position:absolute;content:"";background:#fff;width:12px;height:12px;border-radius:3px 0 0 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-box-shadow:-2px -2px 2px rgba(0,0,0,.08);box-shadow:-2px -2px 2px rgba(0,0,0,.08);top:-6px;left:15px}.navbar-nav-access .nav-item{margin:0 .5rem}.navbar-nav-access .nav-item-login{font-size:1rem;font-weight:400;white-space:nowrap}.navbar-nav-access .nav-item-login span{color:#010101;cursor:pointer;border-width:0 0 .125rem 0;border-color:#f33784;border-style:solid;border:0}.navbar-nav-access .nav-link{font-size:1rem;font-weight:400;padding:.25rem 1rem;text-transform:none}.navbar.fixed{width:100%;position:fixed;top:0;left:0;z-index:1000000;background:-webkit-gradient(linear,left top,left bottom,color-stop(70%,rgba(11,10,10,.75)),to(transparent));background:linear-gradient(180deg,rgba(11,10,10,.75) 70%,transparent 100%);-webkit-transition:all .5s ease;transition:all .5s ease}.navbar.fixed .navbar-brand{background:url(/static/images/ow-logo-secondary.svg) no-repeat center top;background-size:100% 100%;z-index:1}.navbar.fixed .navbar-nav-courses .dropdown-toggle{border-color:#111}.navbar.fixed .navbar-nav-access .nav-item-login span{color:#fff;cursor:pointer}.navbar #cursosMenu+.dropdown-menu{max-height:65vh;position:relative;overflow:hidden;overflow-y:auto;top:95%}@media (min-width:768px){.navbar #cursosMenu+.dropdown-menu{overflow:initial;position:absolute}}.navbar .dropdown-item{font-size:.9rem;padding:.5rem 1.5rem}.scrolled .navbar.fixed{-webkit-transition:all .3s ease;transition:all .3s ease;background-color:#0b0a0a}nav#main .dropdown:hover>.dropdown-menu:not(.dropdown-menu-academy):not(.dropdown-menu-right){display:block;top:95%}nav.nav-social-network{vertical-align:middle}nav.nav-social-network .title{display:inline-block;margin-right:1rem;padding:.25rem;font-size:.875rem;color:#828282}nav.nav-social-network ul{margin:0;padding:0;display:inline-block;list-style-type:none;list-style-position:inside}nav.nav-social-network ul li{margin-right:.5rem;display:inline-block}nav.nav-social-network ul li:last-child{margin-right:0}nav.nav-social-network ul li a{width:2rem;padding:.25rem .5rem;display:block;font-size:1rem;color:#707070;text-align:center;border:1px solid #c4c4c4;border-radius:100%}nav.nav-social-network ul li a:hover{color:#f33784;background-color:#fff}nav.nav-social-network{vertical-align:middle}nav.nav-social-network .title{display:inline-block;margin-right:1rem;padding:.25rem;font-size:.875rem;color:#828282}nav.nav-social-network ul{margin:0;padding:0;display:inline-block;list-style-type:none;list-style-position:inside}nav.nav-social-network ul li{margin-right:.5rem;display:inline-block}nav.nav-social-network ul li:last-child{margin-right:0}nav.nav-social-network ul li a{width:2rem;padding:.25rem .5rem;display:block;font-size:1rem;color:#707070;text-align:center;border:1px solid #c4c4c4;border-radius:100%}nav.nav-social-network ul li a:hover{color:#f33784;background-color:#fff}.modal .modal-content{border-radius:.6rem}.modal .modal-header{border-bottom-width:0}.modal .modal-header .modal-title{text-transform:uppercase;font-weight:700;color:#010101;text-align:center;margin:0 auto}.modal .modal-header .close{border-radius:2rem;background-color:#f33784;width:2rem;height:2rem;padding:.25rem;margin:0;color:#fff;font-weight:900;opacity:1}input[type="text"],input[type="password"],input[type="email"],input[type="tel"]{font-family:Lato,Helvetica\ Neue,Helvetica,Arial,sans-serif;font-size:1rem;font-weight:300;border-width:.0625rem;border-color:#bfbfbf;border-style:solid;background-color:#fff}input[type="text"]:hover,input[type="text"]:focus,input[type="password"]:hover,input[type="password"]:focus,input[type="email"]:hover,input[type="email"]:focus,input[type="tel"]:hover,input[type="tel"]:focus{border-color:#737373}input[type="text"],input[type="password"],input[type="email"],input[type="tel"]{padding-left:1.25rem;padding-right:1.25rem;border-radius:5px}@media (max-width:991.98px){#main-menu{margin:1rem 0 0 0;padding:1.25rem;border:1px solid #343434;background:#010101}}.plans-list-style li:nth-child(2n){background-color:#1c1c1c}#status .btn:not(:disabled):not(.disabled):active:focus,#status .btn:not(:disabled):not(.disabled).active:focus,#status .show>.btn.dropdown-toggle:focus{-webkit-box-shadow:0 0 0 .2rem rgba(91,91,91,.5)!important;box-shadow:0 0 0 .2rem rgba(91,91,91,.5)!important}.pricing .section.section.form-precios form input:not([type=checkbox]),.pricing section.section.form-precios form select{padding:.5rem 0!important;border:0;border-radius:0;border-bottom:1px solid #fff;background-color:#111;-webkit-appearance:none;background-color:rgba(0,0,0,0)!important}.banner-in-post{background-color:#e4e4e4}.banner-in-post p{margin:0;line-height:18px}.modal-search-wrapper{position:fixed;z-index:30;width:100%;height:150vh;background:-webkit-gradient(linear,left top,left bottom,color-stop(100%,rgba(21,21,21,.95)),color-stop(0%,transparent));background:linear-gradient(180deg,rgba(21,21,21,.95) 100%,transparent 0%);top:0;padding:0 20px 20px 20px;-webkit-transition:top 600ms ease , height 600ms ease , opacity 300ms ease;transition:top 600ms ease , height 600ms ease , opacity 300ms ease;overflow:hidden}.modal-search-wrapper input{padding:8px}.modal-search-wrapper .input-group-append .btn{border-color:#010101;border-width:0 0 0 0;background-color:#2f2e2f;min-width:40px;min-height:36px;border-radius:5px 0 0 5px!important}.modal-search-wrapper .input-group-append .btn i{color:#fff!important}.modal-search-wrapper .scrollbar{overflow:hidden;height:80vh;overflow-y:auto;scrollbar-color:#555 #313131;-ms-flex-line-pack:baseline;align-content:baseline}.modal-search-wrapper .scrollbar::-webkit-scrollbar{width:10px}.modal-search-wrapper .scrollbar::-webkit-scrollbar-thumb{background:#666;border-radius:20px}.modal-search-wrapper .scrollbar::-webkit-scrollbar-track{background:#ddd;border-radius:20px}.modal-search-wrapper .scrollbar{overflow:hidden;height:80vh;overflow-y:auto;scrollbar-color:#555 #313131;-ms-flex-line-pack:baseline;align-content:baseline}.modal-search-wrapper .scrollbar::-webkit-scrollbar{width:10px}.modal-search-wrapper .scrollbar::-webkit-scrollbar-thumb{background:#666;border-radius:20px}.modal-search-wrapper .scrollbar::-webkit-scrollbar-track{background:#ddd;border-radius:20px}@-webkit-keyframes threeBarLoad{0%,80%,100%{-webkit-box-shadow:0 0 #333;box-shadow:0 0 #333;height:20px}40%{-webkit-box-shadow:0 -10px #333;box-shadow:0 -10px #333;height:30px}}@keyframes threeBarLoad{0%,80%,100%{-webkit-box-shadow:0 0 #333;box-shadow:0 0 #333;height:20px}40%{-webkit-box-shadow:0 -10px #333;box-shadow:0 -10px #333;height:30px}}article#post{padding:0 0 1.25rem 0;border-width:0 0 3px 0;border-style:solid;border-color:#e6e6e6;letter-spacing:-.0125rem;font-weight:400;color:#333;line-height:1.5}@media (max-width:991.98px){article#post a{word-break:break-word}}article#post strong{color:#191919}article#post h2,article#post h3{font-weight:600;color:#191919}article#post h2{margin-top:2.5rem}article#post ul{list-style:none;counter-reset:elementcounter}article#post ul li{padding:.5rem 0;position:relative;line-height:1.5;font-size:1.1rem}article#post ul li::before{position:relative;top:0;left:-.7rem;color:#4c4c4c;display:inline-block;margin-left:-.7rem}article#post ul li p{display:inline}article#post ul>li::before{content:"■"}article#post img[alt=""],article#post .center-block,article#post .aligncenter{margin:0 auto;max-width:100%;height:auto;display:block}article#post .img-responsive{max-width:100%;height:auto}article#post p{margin:1.25rem 0;font-size:1.125rem;line-height:1.5}article#post p+h3{margin-top:2rem}article#post a:not(.btn):not(.cta_button){color:#f33784;cursor:pointer;font-weight:600}article#post a:not(.btn):not(.cta_button):hover{text-decoration:underline}@media (max-width:991.98px){#main-menu{margin:1rem 0 0 0;padding:1.25rem;border:1px solid #343434;background:#010101}}footer#footer{background-color:#111;padding:0!important}footer#footer .top nav{min-width:100%;border-bottom:1px solid #989696}@media (min-width:576px){footer#footer .top nav{border-bottom:0}}@media (min-width:768px){footer#footer .top nav{padding:40px;min-width:18rem}}footer#footer .top nav .h3{display:block;font-size:1.3rem;font-weight:bold;color:#fff;line-height:4rem;cursor:pointer}@media (min-width:768px){footer#footer .top nav .h3{cursor:default;line-height:1rem;margin-bottom:1.5rem}}footer#footer .top nav a,footer#footer .top nav .link-ofus{color:#fff;display:block;line-height:3rem;border-top:1px solid #252525}@media (min-width:576px){footer#footer .top nav a,footer#footer .top nav .link-ofus{line-height:1.7rem;border:0}}footer#footer .top nav a::after,footer#footer .top nav .link-ofus::after{content:"";display:block;opacity:0;width:1%;height:2px;background-color:#f33784;-webkit-transition:all .3s ease;transition:all .3s ease}footer#footer .top nav a:hover::after,footer#footer .top nav .link-ofus:hover::after{content:"";opacity:.5;width:50%;-webkit-transition:all .3s ease;transition:all .3s ease}footer#footer .top nav ul{display:none;margin-bottom:0;padding:0}@media (min-width:576px){footer#footer .top nav ul{display:block}}footer#footer .top nav ul li{list-style:none}footer#footer .top+.bottom{margin-top:1.25rem}footer#footer .bottom{margin-top:1.25rem;padding:1.25rem 0;background-color:#121212}footer#footer .bottom .copyright{margin:0;padding:0;font-size:.8125rem;color:#696969}footer#footer .bottom .copyright a{color:#fff}footer#footer .bottom .copyright a:hover{color:#bbb}section.section{padding:3.75rem 0}section.section header{text-align:center}section.section header .title{margin:0 0 1rem 0;padding:0;font-size:2rem;font-weight:400;color:#f33784;line-height:1.3}section.section header .description{margin:0 0 2rem 0;padding:0;font-size:1.625rem;font-weight:300;color:#737373;line-height:1.3}section.section.comments{padding-bottom:0}section.section.form-precios form input:not([type=checkbox]),section.section.form-precios form select{width:100%!important;padding:.5rem 1rem!important;border-width:.0625rem;border-color:#333;border-style:solid;background-color:#000;color:#fff}section#hero .title{color:#fff;font-family:Bergen,Lato,Lato-light,Helvetica,Arial,sans-serif;font-size:1.7rem;font-weight:900}@media (max-width:480px){section#hero .title{font-size:1.75rem}}@media (min-width:768px){section#hero .title{font-size:2.5rem}}@media (min-width:992px){section#hero .title{font-size:2.8125rem}}@media (min-width:1200px){section#hero .title{font-size:3.7rem}}section#hero .meta{margin-top:1rem}section#hero .meta ul{list-style-type:none;list-style-position:inside}section#hero .meta ul li{font-size:1rem;font-weight:300;color:#fff}section#hero .meta ul li strong{font-weight:700}section#hero.tertiary{padding:3.75rem 0 1.875rem 0;min-height:20vh;border-bottom:3px solid #f33784;background-image:url(/static/images/xbg-generico.jpg.pagespeed.ic.GzBIwWZy4v.webp)!important;background-position:right!important;background-repeat:no-repeat!important}section#hero.tertiary{background:#000}section#hero.tertiary .title{font-weight:400}@media (min-width:576px){section#hero.tertiary .title{font-size:1.25rem}}@media (min-width:768px){section#hero.tertiary .title{font-size:1.5rem}}@media (min-width:992px){section#hero.tertiary .title{font-size:2.25rem}}body.posts section#hero.tertiary{border:0}body.posts .title:not(span){font-size:2.2rem}body.posts .meta .author .avatar{width:45px;height:45px;margin:0}body.posts .meta .author ul li{font-size:.9rem!important;color:#d0d0d0!important}body.posts .meta .author .btn-sm{padding:2px 7px;font-size:.875rem;line-height:16px}#CookielawBanner{display:none;width:100%;color:#666;position:fixed;bottom:0;z-index:99999;left:0;border-width:1px 0 0 0;border-color:#fff;border-style:solid;background:#e6e6e6;-webkit-box-shadow:0 0 15px 0 rgba(153,153,153,.5);box-shadow:0 0 15px 0 rgba(153,153,153,.5)}#CookielawBanner p{margin:0;padding:1.25rem 0;line-height:1}#CookielawBanner a{color:#666;text-decoration:underline}#CookielawBanner a.btn{color:#fff;text-decoration:none}#CookielawBanner{display:inherit}#demo-form{margin:0;padding:0 0 2rem 0}#demo-form .form.register input:not([type=submit]){width:100%;padding:.5rem 1rem}.external-form form input:not([type=checkbox]),.external-form form select{width:100%!important;padding:.5rem 1rem!important;border-width:.0625rem;border-color:#bfbfbf;border-style:solid}.blackfriday #price .d-lg-table tr:nth-child(1) td:nth-child(4){border-top:4px solid #f33784;border-left:4px solid #f33784;border-right:4px solid #f33784}.blackfriday #price .d-lg-table tr:last-child td:nth-child(4){border-bottom:4px solid #f33784;border-left:4px solid #f33784;border-right:4px solid #f33784}.blackfriday #price .d-lg-table tr td:nth-child(4){border-left:4px solid #f33784;border-right:4px solid #f33784;padding:1em;background-color:#05030d;color:#fff}.navidad #price .d-lg-table tr:nth-child(1) td:nth-child(4){border-top:4px solid #f33784;border-left:4px solid #f33784;border-right:4px solid #f33784}.navidad #price .d-lg-table tr:last-child td:nth-child(4){border-bottom:4px solid #f33784;border-left:4px solid #f33784;border-right:4px solid #f33784}.navidad #price .d-lg-table tr td:nth-child(4){border-left:4px solid #f33784;border-right:4px solid #f33784;padding:1em;background-color:#05030d;color:#fff}.checkbox-path input:checked~div img{fill:orange}.checkbox-path input:checked~.sello{display:block}.ahorras .col-6:nth-child(1){background-color:#000;border-radius:1rem 0 0 1rem;font-size:1.75em;font-weight:bold;padding:.5em}.ahorras .col-6:nth-child(2){padding:1em;background-color:#010101;border-radius:0 1rem 1rem 0}.ahorras .col-6:nth-child(2) div{color:#b3b3b3}.ahorras .col-6:nth-child(2) span{text-decoration:line-through}.cybermonday #price .d-lg-table tr:nth-child(1) td:nth-child(4){border-top:4px solid #f33784;border-left:4px solid #f33784;border-right:4px solid #f33784}.cybermonday #price .d-lg-table tr:last-child td:nth-child(4){border-bottom:4px solid #f33784;border-left:4px solid #f33784;border-right:4px solid #f33784}.cybermonday #price .d-lg-table tr td:nth-child(4){border-left:4px solid #f33784;border-right:4px solid #f33784;padding:1em;background-color:#05030d;color:#fff}.login-freeweekend a:not(.condiciones a){color:#fff;text-decoration:underline}.carreras.carrera .section:not(.you-can-get) .title{color:#121212;font-weight:700}.carreras.carrera .section:not(.you-can-get) .description{color:#121212;font-size:1.5rem;font-weight:400}</style>
<style>@-webkit-keyframes rotation {
	from {-webkit-transform: rotate(0deg);}
	to {-webkit-transform: rotate(359deg);}
}@-moz-keyframes rotation {
	from {-moz-transform: rotate(0deg);}
	to {-moz-transform: rotate(359deg);}
}@-o-keyframes rotation {
	from {-o-transform: rotate(0deg);}
	to {-o-transform: rotate(359deg);}
}@keyframes rotation {
	from {transform: rotate(0deg);}
	to {transform: rotate(359deg);}
}</style>
<style>.modal-header{padding:50px 45px}@media (min-width:1200px){.modal-header{padding:50px 55px}}.modal-header img{width:200px}.modal-subheader h1{color:#f33784;font-size:26px;padding:0 40px;font-weight:800}@media (min-width:1200px){.modal-subheader h1{margin:0 25px;font-size:36px}}.modal-subheader h2{color:#9996b1;font-size:20px;padding:8px 40px;font-weight:400}.modal-subheader h2 span{font-weight:700}@media (min-width:1200px){.modal-subheader h2{margin:0 25px;font-size:24px}}.text-left h3{color:#9996b1;font-size:1rem}@media (min-width:1200px){.text-left h3{font-size:18px}}.modal-body{padding:8px 40px}@media (min-width:1200px){.modal-body{margin:20px 25px}}.text-phone-form{font-size:10px;font-weight:400;line-height:normal;display:-webkit-box;display:-ms-flexbox;display:flex}.label-modal{color:#404040;font-size:16px;font-weight:500}.text-error-password{color:red;font-weight:bold}</style>
<!-- GTM Variables -->
<script>var dataLayer=[{'environment':'Live'}];var trackcmp_email='';var user_is_authenticated=false;dataLayer.push({'user-role':''});dataLayer.push({'active_subscription':false});dataLayer.push({'active_plan':''});</script>
<!-- anti-flicker snippet (recommended)  -->
<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-NP7728':true});</script>
<script>dataLayer.push({'post_category':['desarrollo-web']});</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NP7728');</script>
<!-- End Google Tag Manager -->
<!-- Track abandons before Google Analyics is loaded -->
<script>window.__trackAbandons=()=>{document.removeEventListener('visibilitychange',window.__trackAbandons);const ANALYTICS_URL='https://www.google-analytics.com/collect';const GA_COOKIE=document.cookie.replace(/(?:(?:^|.*;)\s*_ga\s*\=\s*(?:\w+\.\d\.)([^;]*).*$)|^.*$/,'$1');const TRACKING_ID='GTM-NP7728';const CLIENT_ID=GA_COOKIE||(Math.random()*Math.pow(2,52));navigator.sendBeacon&&navigator.sendBeacon(ANALYTICS_URL,['v=1','t=event','ec=Load','ea=abandon','ni=1','dl='+encodeURIComponent(location.href),'dt='+encodeURIComponent(document.title),'tid='+TRACKING_ID,'cid='+CLIENT_ID,'ev='+Math.round(performance.now()),].join('&'));};document.addEventListener('visibilitychange',window.__trackAbandons);</script>
<script>var mixpanel={track:function(){console.log("")}};</script>
<!-- Absolutely important JS to be loade prior body -->
<script src="/static/js/purser.min.js.pagespeed.jm.SC_sq9AfjH.js"></script>
<!-- Rest of JS -->
<script src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.0/es6-promise.auto.min.js" defer></script>
<!-- Bootstrap core JavaScript ================================================== -->
<!-- Defered so the pages load faster -->
<script src="/static/jquery/dist/jquery.min.js.pagespeed.jm.rTfr6cJYHr.js" defer></script>
<script src="/static/js/vendor/popper.min.js.pagespeed.jm.6At_7jnRHK.js" defer></script>
<script src="/static/bootstrap/dist/js/bootstrap.min.js.pagespeed.jm.gixNc8dxxc.js" defer></script>
<script defer src="/static/sweetalert2/dist/sweetalert2.min.js"></script>
<script defer src="/static/js/cookielaw.min.js.pagespeed.jm.iVxWmuxUaK.js"></script>
<script src="/static/js/toastr.min.js.pagespeed.jm.yhmmnqHXkQ.js" defer></script>
<script src="/static/js/counter.min.js.pagespeed.jm.lXKtF9vhA7.js" defer></script>
<script src="/static/aos/dist/aos.js" defer></script>
<script src="/static/vue/dist/vue.min.js.pagespeed.jm.oAHFMHNKUH.js" defer></script>
<script src="/static/axios/dist/axios.min.js.pagespeed.jm.Vi55gU2M1M.js" defer></script>
<script src="/static/js/search/search.js?rev=49e353f57" defer></script>
<script>function csrfSafeMethod(method){return(/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));}function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}return"";}function localStorageSupport(){return(('localStorage'in window)&&window['localStorage']!==null)}function sessionStorageSupport(){return(('sessionStorage'in window)&&window['sessionStorage']!==null)}function saveUTM(last){if(typeof last!=='undefined'){var object=purser.visits.all()[purser.visits.all().length-1]}else{var object=purser.visits.all()[0]
if(document.cookie.indexOf('utm_tracked')<0){var expiryDate=new Date();expiryDate.setTime(expiryDate.getTime()+10*365*24*60*60*1000);Object.keys(object).map(function(objectKey,index){var value=object[objectKey];document.cookie=objectKey+"="+value+";domain=.openwebinars.net;path=/;expires="+expiryDate.toUTCString();});document.cookie="utm_tracked=true;domain=.openwebinars.net;path=/;expires="+expiryDate.toUTCString();}}$.post('/try_save_utm',$.param(object));}function setValue(id,val){var el=document.getElementById(id);el.value=val;el.dispatchEvent(new Event('change'));}function op(url){window.location=url;return false;}function add_course(ev){ev.preventDefault();ev.stopPropagation();$self=$(this);$.ajax({url:this.dataset.href||'/api/academy/favorite/',method:"POST",dataType:"json",data:{'course-id':this.dataset.id,'tag':this.dataset.tag||'','interest':this.dataset.interest||'','csrfmiddlewaretoken':'JqgbohSWHyuRbeeBnoTuMcmXFut0BiNHTimiBj8KXPea6SMw8PGsuE46RopA7wWd'}}).done(function(data){if(data.action=='favorite'){$self.removeClass('far').addClass('fas');}else if(data.action=='unfavorite'){$self.removeClass('fas').addClass('far');}else{toastr.clear();toastr[data.result](data.action);$self.parentsUntil('.list-unstyled').remove();if(data.refresh){window.location.reload(true);}}});return false;}function sendQueuedEvents(){if(localStorageSupport()&&localStorage.queue){queue=JSON.parse(localStorage.queue)
$.ajax({url:'/tracker',method:"PUT",data:queue}).done(function(data){console.debug(queue.action+'@'+queue.current+'='+data)})
localStorage.queue=''}}</script>
<script>
var pagespeed = {
  set selectors(array) {
    this.myselectors = array;
  },
	get selectors() {
		return this.myselectors.filter(function(elem){
			return elem.indexOf('.fa') < 0 && elem.indexOf('aos') < 0
		})
	},
  myselectors: []
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
		navigator.serviceWorker.getRegistrations().then(
			function(registrations) {
					for(let registration of registrations) {
							registration.unregister();
					}
		});
    // navigator.serviceWorker.register('/sw.js').then(function(registration) {
    //   // Registration was successful
    //   console.log('ServiceWorker registration successful with scope: ', registration.scope);
    // }).catch(function(err) {
    //   // registration failed :(
    //   console.log('ServiceWorker registration failed: ', err);
    // });
  });
}
</script>
<link rel="dns-prefetch" href="//dc722jrlp2zu8.cloudfront.net"><link rel="dns-prefetch" href="//platform-api.sharethis.com"><script data-pagespeed-no-defer>(function(){function f(a,b,d){if(a.addEventListener)a.addEventListener(b,d,!1);else if(a.attachEvent)a.attachEvent("on"+b,d);else{var c=a["on"+b];a["on"+b]=function(){d.call(this);c&&c.call(this)}}};window.pagespeed=window.pagespeed||{};var g=window.pagespeed;function k(a){this.g=[];this.f=0;this.h=!1;this.j=a;this.i=null;this.l=0;this.b=!1;this.a=0}function l(a,b){var d=b.getAttribute("data-pagespeed-lazy-position");if(d)return parseInt(d,0);var d=b.offsetTop,c=b.offsetParent;c&&(d+=l(a,c));d=Math.max(d,0);b.setAttribute("data-pagespeed-lazy-position",d);return d}
function m(a,b){var d,c,e;if(!a.b&&(0==b.offsetHeight||0==b.offsetWidth))return!1;a:if(b.currentStyle)c=b.currentStyle.position;else{if(document.defaultView&&document.defaultView.getComputedStyle&&(c=document.defaultView.getComputedStyle(b,null))){c=c.getPropertyValue("position");break a}c=b.style&&b.style.position?b.style.position:""}if("relative"==c)return!0;e=0;"number"==typeof window.pageYOffset?e=window.pageYOffset:document.body&&document.body.scrollTop?e=document.body.scrollTop:document.documentElement&&
document.documentElement.scrollTop&&(e=document.documentElement.scrollTop);d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;c=e;e+=d;var h=b.getBoundingClientRect();h?(e=h.top-d,c=h.bottom):(h=l(a,b),d=h+b.offsetHeight,e=h-e,c=d-c);return e<=a.f&&0<=c+a.f}
k.prototype.m=function(a){p(a);var b=this;window.setTimeout(function(){var d=a.getAttribute("data-pagespeed-lazy-src");if(d)if((b.h||m(b,a))&&-1!=a.src.indexOf(b.j)){var c=a.parentNode,e=a.nextSibling;c&&c.removeChild(a);a.c&&(a.getAttribute=a.c);a.removeAttribute("onload");a.tagName&&"IMG"==a.tagName&&g.CriticalImages&&f(a,"load",function(){g.CriticalImages.checkImageForCriticality(this);b.b&&(b.a--,b.a||g.CriticalImages.checkCriticalImages())});a.removeAttribute("data-pagespeed-lazy-src");a.removeAttribute("data-pagespeed-lazy-replaced-functions");
c&&c.insertBefore(a,e);if(c=a.getAttribute("data-pagespeed-lazy-srcset"))a.srcset=c,a.removeAttribute("data-pagespeed-lazy-srcset");a.src=d}else b.g.push(a)},0)};k.prototype.loadIfVisibleAndMaybeBeacon=k.prototype.m;k.prototype.s=function(){this.h=!0;q(this)};k.prototype.loadAllImages=k.prototype.s;function q(a){var b=a.g,d=b.length;a.g=[];for(var c=0;c<d;++c)a.m(b[c])}function t(a,b){return a.a?null!=a.a(b):null!=a.getAttribute(b)}
k.prototype.u=function(){for(var a=document.getElementsByTagName("img"),b=0,d;d=a[b];b++)t(d,"data-pagespeed-lazy-src")&&p(d)};k.prototype.overrideAttributeFunctions=k.prototype.u;function p(a){t(a,"data-pagespeed-lazy-replaced-functions")||(a.c=a.getAttribute,a.getAttribute=function(a){"src"==a.toLowerCase()&&t(this,"data-pagespeed-lazy-src")&&(a="data-pagespeed-lazy-src");return this.c(a)},a.setAttribute("data-pagespeed-lazy-replaced-functions","1"))}
g.o=function(a,b){function d(){if(!(c.b&&a||c.i)){var b=200;200<(new Date).getTime()-c.l&&(b=0);c.i=window.setTimeout(function(){c.l=(new Date).getTime();q(c);c.i=null},b)}}var c=new k(b);g.lazyLoadImages=c;f(window,"load",function(){c.b=!0;c.h=a;c.f=200;if(g.CriticalImages){for(var b=0,d=document.getElementsByTagName("img"),r=0,n;n=d[r];r++)-1!=n.src.indexOf(c.j)&&t(n,"data-pagespeed-lazy-src")&&b++;c.a=b;c.a||g.CriticalImages.checkCriticalImages()}q(c)});b.indexOf("data")&&((new Image).src=b);f(window,
"scroll",d);f(window,"resize",d)};g.lazyLoadInit=g.o;})();

pagespeed.lazyLoadInit(false, "https://www.gstatic.com/psa/static/1.gif");
</script></head>
<body class="posts">
<div class="modal-search-wrapper" style="top:-100px; opacity:0; height:10vh;" id="modal-search">
<div id="search-filed" class="container modal-search animated fadeInDown">
<button class="btn text-white float-right" id="btn-close"><i class="fa fa-times"></i></button>
<div id="main-buscador" class="modal-search-body">
<form class="navbar-nav-search form-inline w-100 mb-3 mb-lg-0" @submit.prevent="redirect">
<div class="input-group w-100 mr-sm-2">
<div class="input-group-append">
<button class="btn" type="submit" id="button-addon1" aria-label="buscar"><i class="fas fa-search"></i></button>
</div>
<input id="search_field" ref="search_field" v-model="s" @keyup="pre_serarch" autocomplete="off" type="text" data-hj-whitelist class="form-control form-control-lg " placeholder="Buscar cursos, talleres y carreras en OpenWebinars..." aria-label="Buscar cursos, talleres y carreras en OpenWebinars" aria-describedby="button-addon1" name="s">
</div>
</form>
<div>
<div class="row pr-2 mt-4 scrollbar">
<div v-if="loading" id="three-bar-loader"></div>
<div v-if="all_paths.length > 0" class="col-12 col-md-4">
<div class="row">
<div class="col-12">
<h5 class="h5 text-white mb-0">Carreras</h5>
</div>
<div class="col-12 mt-3" v-for="item in all_paths">
<a :href="item.url" class="card" :title="item.name" :class="{'path' : get_type(item.type,item.subtype) == 0 }">
<div class="row">
<div class="col-auto pr-0 logo">
<figure>
<img class="img-fluid" :src="item.logo">
</figure>
</div>
<div class="col-9">
<div class="title"><strong v-html="item.name"></strong></div>
<div class="subtitle"><small v-html="types[get_type(item.type,item.subtype)]"></small></div>
</div>
</div>
</a>
</div>
</div>
</div>
<div :class="lessons.length > 0?'col-12 col-md-4':'col-12 col-md-8'">
<div class="row">
<div v-if="courses_and_workshops.length > 0" class="col-12">
<h5 class="h5 text-white mb-0">Cursos y talleres</h5>
</div>
<div :class="lessons.length > 0?'col-12 mt-3':'col-12 col-md-6 mt-3'" v-for="item in courses_and_workshops">
<a :href="item.url" class="card" :title="item.name" :class="{'path' : get_type(item.type,item.subtype) == 0 }">
<div class="row">
<div class="col-auto pr-0 logo">
<figure>
<img class="img-fluid" :src="item.logo">
</figure>
</div>
<div class="col-9">
<div class="title"><strong v-html="item.name"></strong></div>
<div class="subtitle"><small v-html="types[get_type(item.type,item.subtype)]"></small></div>
</div>
</div>
</a>
</div>
</div>
</div>
<div v-if="lessons.length > 0" class="col-12 col-md-4">
<div class="row">
<div class="col-12">
<h5 class="h5 text-white mb-0">Vídeos</h5>
</div>
<div class="col-12 mt-3" v-for="item in lessons">
<a :href="item.url" class="card lessons" :title="item.name" :class="{'path' : get_type(item.type,item.subtype) == 0 }">
<div class="row">
<div class="col-auto pr-0 logo">
<figure>
<img class="img-fluid" :src="item.logo">
</figure>
</div>
<div class="col-9">
<div class="title"><strong v-html="item.name"></strong></div>
<div class="subtitle"><small v-html="types[get_type(item.type,item.subtype)]"></small></div>
</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-NP7728" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
<!-- Mautic (pixel hack) -->
<noscript><img src="https://mautic.openwebinars.net/mtracking.gif" alt="Mautic Pixel" height="0" width="0" style="display:none;visibility:hidden" data-pagespeed-no-defer></noscript>
<!-- End Mautic (pixel hack) -->
<div id="CookielawBanner">
<div class="container">
<p class="text-center">
<small>Las cookies nos permiten ofrecer nuestros servicios. Al utilizar nuestros servicios, aceptas el uso que hacemos de las cookies. <a href="/aviso-legal-cookies/" title="Aviso de Cookies">Más Información</a>.</small>
<a class="btn btn-secondary btn-sm" href="javascript:Cookielaw.createCookielawCookie();">Aceptar</a>
</p>
</div>
</div>
<script>window.setTimeout(function(){$('#CookielawBanner').hide()},10000);</script>
<nav class="navbar navbar-expand-lg  fixed" id="main">
<div class="container">
<a class="navbar-brand" href="/">
<img data-pagespeed-lazy-src="/static/images/ow-logo-secondary.svg" alt="Logo OpenWebinars" class="d-none" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
<span>Cursos Online de Programación y Sistemas con OpenWebinars</span>
</a>
<button class="navbar-toggler px-0" type="button" data-toggle="collapse" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
<i class="fas fa-lg fa-bars text-secondary"></i>
</button>
<div class="collapse navbar-collapse" style="z-index: 50;" id="main-menu">
<div class="navbar-nav justify-content-around align-items-start flex-sm-row">
<form class="navbar-nav-search d-block d-sm-none form-inline w-100 mb-3 mb-lg-0" action="/buscador/">
<div class="input-group w-100 mr-sm-2">
<input type="text" data-hj-whitelist class="form-control form-control-lg " placeholder="¿Qué quieres aprender hoy?" aria-label="¿Qué quieres aprender hoy?" aria-describedby="button-addon1" name="s">
<div class="input-group-append">
<button class="btn" type="submit" id="button-addon1" aria-label="buscar"><i class="fas fa-search"></i></button>
</div>
</div>
</form>
<ul class="navbar-nav navbar-nav-courses mr-sm-auto">
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" role="button" id="cursosMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="/cursos/">Cursos</a>
<div class="dropdown-menu columns-2" aria-labelledby="cursosMenu">
<div class="p-0">
<div class="row">
<div class="col-lg-6 pr-lg-0">
<a class="dropdown-item" href="/cursos/azure/"> Azure</a>
<a class="dropdown-item" href="/cursos/amazon-web-services/"> AWS</a>
<a class="dropdown-item" href="/cursos/robotica/"> Robótica y Hardware</a>
<a class="dropdown-item" href="/cursos/cloud-computing/"> Cloud Computing</a>
<a class="dropdown-item" href="/cursos/videojuegos/"> Videojuegos</a>
<a class="dropdown-item" href="/cursos/management/"> Management</a>
<a class="dropdown-item" href="/cursos/desarrollo-movil/"> Desarrollo de aplicaciones móviles</a>
<a class="dropdown-item" href="/cursos/ciberseguridad-ethical-hacking/"> Ciberseguridad</a>
<a class="dropdown-item" href="/cursos/blockchain/"> Blockchain</a>
<a class="dropdown-item" href="/cursos/bases-de-datos/"> Bases de datos</a>
<a class="dropdown-item" href="/cursos/testing/"> Testing</a>
<a class="dropdown-item text-secondary font-weight-bold border-top pt-2 mt-1 d-none d-lg-block" href="/carreras/"> Ver carreras</a>
</div>
<div class="col-lg-6 pl-lg-0">
<a class="dropdown-item" href="/cursos/frontend/"> Frontend</a>
<a class="dropdown-item" href="/cursos/drupal/"> Drupal</a>
<a class="dropdown-item" href="/cursos/backend/"> Backend</a>
<a class="dropdown-item" href="/cursos/metodologias/"> Metodologías</a>
<a class="dropdown-item" href="/cursos/certificaciones-oficiales/"> Certificaciones oficiales</a>
<a class="dropdown-item" href="/cursos/big-data/"> Big Data</a>
<a class="dropdown-item" href="/cursos/sistemas/"> Sistemas y Redes</a>
<a class="dropdown-item" href="/cursos/devops/"> DevOps</a>
<a class="dropdown-item" href="/cursos/herramientas/"> Herramientas</a>
<a class="dropdown-item" href="/cursos/wordpress/"> WordPress</a>
<a class="dropdown-item" href="/cursos/ui/"> UX y UI</a>
<a class="dropdown-item font-weight-bold border-top pt-2 mt-1" href="/cursos/"> Ver todos</a>
</div>
</div>
</div>
</div>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" id="nav-soluciones" href="#" role="button" data-toggle="dropdown" data-hover="dropdown" aria-haspopup="true" aria-expanded="false">
Soluciones
</a>
<div class="dropdown-menu" aria-labelledby="nav-soluciones">
<a class="dropdown-item" href="https://recursos.openwebinars.net/soluciones/tecnologicas/" rel="nofollow"><i class="mr-1 fas fa-laptop"></i> Tecnologías de la información</a>
<a class="dropdown-item" href="https://recursos.openwebinars.net/soluciones/consultoras/" rel="nofollow"><i class="mr-1 fas fa-code"></i> Consultoras</a>
<a class="dropdown-item" href="https://recursos.openwebinars.net/soluciones/banca-y-seguros/" rel="nofollow"><i class="mr-1 far fa-credit-card"></i> Banca y seguros</a>
<a class="dropdown-item" href="https://recursos.openwebinars.net/soluciones/organismos-publicos/" rel="nofollow"><i class="mr-1 fas fa-university"></i> Organismos públicos</a>
<a class="dropdown-item" href="https://recursos.openwebinars.net/soluciones/otras-industrias/" rel="nofollow"><i class="mr-1 fas fa-city"></i> Otras Industrias</a>
</div>
</li>
<li class="nav-item"><a class="nav-link link-ofus" href="/precios/">Precios</a></li>
<li class="nav-item"><a class="nav-link" href="/blog/">Blog</a></li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle" href="#" onClick="window.location.href='http://recursos.openwebinars.net/'" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Recursos
</a>
<div class="dropdown-menu" aria-labelledby="navbarDropdown">
<a class="dropdown-item" href="http://recursos.openwebinars.net/eventos/" target="_blank" rel="nofollow"><i class="mr-1 fas fa-calendar-day"></i> Eventos</a>
<a class="dropdown-item" href="http://recursos.openwebinars.net/clientes/" target="_blank" rel="nofollow"><i class="mr-1 fas fa-file-invoice"></i> Casos de estudio</a>
<a class="dropdown-item" href="https://recursos.openwebinars.net/ebooks-y-guias/" target="_blank" rel="nofollow"><i class="mr-1 fas fa-book"></i> Guías y reportes</a>
<a class="dropdown-item" href="https://recursos.openwebinars.net/becasow/" target="_blank" rel="nofollow"><i class="mr-1 fas fa-graduation-cap"></i> BecasOW</a>
<a class="dropdown-item" href="https://talentotecnologico.fm/" target="_blank" rel="nofollow"><i class="ml-1 mr-2 fas fa-microphone"></i> Podcast</a>
</div>
</li>
</ul>
</div><!-- /.navbar-nav -->
<div class="navbar-nav ml-lg-auto">
<ul class="navbar-nav navbar-nav-access mr-lg-auto">
<li class="nav-item d-md-block d-none">
<a href="#" id="search-btn" class="nav-link text-white"><i class="fas fa-search"></i></a>
</li>
<li class="nav-item nav-item-login"><span class="nav-link link-ofus text-center" onclick="return op('/accounts/login/');">Iniciar sesión</span></li>
<li class="nav-item nav-item-register d-none d-xl-inline"><a class="nav-link btn btn-secondary btn-block link-ofus" href="/precios/" role="button">Comenzar</a></li>
</ul>
</div><!-- /.navbar-nav -->
</div><!-- .collapse .navbar-collapse -->
</div><!-- /.container -->
</nav>
<section id="hero" class="tertiary">
<nav class="container" aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/">Inicio</a></li>
<li class="breadcrumb-item"><a href="/blog/">Blog de programación y sistemas</a></li>
<li class="breadcrumb-item"><a href="/blog/categoria/desarrollo-web/">Desarrollo Web</a></li>
<li class="breadcrumb-item active"><strong aria-current="page">Páginas web estáticas vs páginas web dinámicas</strong></li>
</ol>
</nav>
<div class="container">
<h1 class="title ml-3 ">Páginas web estáticas vs páginas web dinámicas</h1>
<div class="meta ml-3">
<div class="row author align-items-center text-left ml-0">
<figure class="avatar">
<img class="meta-author-image img-fluid rounded-circle" src="/avatar/Qv7qPQLo/80/" alt="Marvin López Mendoza">
</figure>
<ul class="list meta d-inline w-75 pl-2 pl-md-4">
<li class="meta-date">Escrito por <strong>Marvin López Mendoza</strong> el 01 de Febrero de 2021 </li>
<li><span class="meta-reading-time">10 min de lectura</span>
<a href="/blog/categoria/desarrollo-web/" class="btn btn-secondary btn-sm ml-2">Desarrollo Web</a>
</li>
</ul>
</div>
</div>
</div>
</section>
<main role="main">
<section class="post-section py-3">
<div class="container-fluid">
<div class="row justify-content-md-center justify-content-lg-end">
<div class="col-12 col-md-10 col-lg-6">
<article id="post" class="post-content mb-md-5 mb-lg-0 ml-lg-5 ml-xl-0" data-tags='[]'>
<figure>
<img data-pagespeed-no-defer src="https://dc722jrlp2zu8.cloudfront.net/media/cache/49/48/49483c4e3b5bfcf288d1491d3787c228.webp" alt="Páginas web estáticas vs páginas web dinámicas" class="webfeedsFeaturedVisual img-fluid w-100 mb-4">
</figure>
<p>Cuando se trata de desarrollar un sitio web lo primero que debes considerar es cómo lo quieres construir, como un sitio web estático o como un sitio web dinámico. Pero, ¿qué hace que un sitio web sea categorizado “<em>estático</em>” o “<em>dinámico</em>”?</p>
<p>Te invito que me acompañes en este comparativo para que conozcas cómo distinguir las diferencias entre estos dos tipos de páginas web y que puedas decidir cuál es el que te conviene según tu necesidad.</p>
<p>Pero antes de entrar en detalles de cada uno de estos tipos de sitios web, primero debes entender cómo funciona la comunicación en Internet cuando queremos ver una página web.</p>
<h2 id="comunicación-entre-servidores-y-navegadores-web">Comunicación entre servidores y navegadores web</h2>
<p>Para entender la comunicación más básica que ocurre en Internet, debemos saber que en ella están involucrados un servidor web, como IIS, Apache o NGINX, que contiene los archivos HTML, CSS y JavaScript de las páginas web, y un cliente, el navegador (<em>Chrome, Firefox, Edge</em>).</p>
<p>El servidor web y el cliente se comunican a través de los protocolos <strong>HTTP</strong> (<em>Hypertext Transfer Protocol</em>), el protocolo de Transferencia de Hipertexto y la versión segura <strong>HTTPS</strong> (<em>HyperText Transfer Protocol Secure</em>), una serie de reglas que permiten la transferencia de información a través de archivos en la Internet. La diferencia principal entre HTTP y HTTPS, es que, con este último, la comunicación entre el servidor y el cliente es cifrada permitiendo que la transmisión de los datos sea segura, brindando mayor integridad y confidencialidad a los mismos.</p>
<p>La comunicación entre ellos inicia cuando el usuario, a través del navegador, ingresa la dirección de un sitio web (<em>conocida como la URL del inglés Uniform Resource Locator ó LRU que se refiere al Localizador de Recursos Uniforme en español</em>), generando una petición al servidor web para encontrar los archivos de dicha página en dónde están alojados (<em>HTTP request</em>). Luego, el servidor web responde a la petición y devuelve los archivos del sitio web (<em>HTTP response</em>). La respuesta llega al navegador como una copia en formato HTML de la página web, y es en este momento cuando el usuario puede verla en su pantalla.</p>
<h2 id="qué-es-una-página-web-estática">Qué es una página web estática</h2>
<p>Lo primero que debemos entender es ¿a qué nos referimos con la palabra estática en el contexto de una página web?, y no es más que aquello que en el ámbito del código fuente del sitio web se encuentra fijo, no se mueve ni cambia de ninguna manera. Cuando hablamos de “estático” también podemos referirnos a que la página web tiene un número fijo de página, es decir, que tal como fue diseñada y almacenada en el servidor web, así mismo la recibe el navegador y la ve el usuario, como un número fijo de páginas HTML.</p>
<p>Una página web estática está compuesta por archivos HTML individuales por cada página que son pre-generados y presentados al usuario a través del navegador de la misma forma.</p>
<p>Como una página web estática básica está compuesta por elementos como títulos, cuadros de textos, etiquetas, imágenes y otros elementos multimedia, un usuario solo puede interactuar con una página web estática a través de lo que permiten los elementos HTML, por ejemplo haciendo clic en enlaces, botones o rellenando formularios como el clásico formulario de subscripción.</p>
<p>No son tan complejos técnicamente como un sitio web dinámico, pero tampoco son tan versátiles y efectivos cuando se trata de entregar funcionalidad. En pocas palabras, en una página web estática, verás la misma información, diseño y contenido cada vez que la visites, a menos que alguien aplique cambios al código fuente de forma manual.</p>
<p>Si quisieras crear una página web estática solo necesitas un editor de texto como el Bloc de notas y saber de HTML y CSS, no es necesario utilizar entornos de desarrollo complejos.</p>
<h3 id="ventajas-de-una-página-web-estática">Ventajas de una página web estática</h3>
<p>Entre las ventajas de una página web estática podemos mencionar:</p>
<ul>
<li>
<p><strong>El coste inicial de una página web estática puede ser mucho menor que al de una dinámica</strong>.<br/>
Por su naturaleza estática, la complejidad y tiempo de desarrollo es menor porque no requiere del uso de lenguajes de programación o bases de datos, y por ende su coste monetario es más bajo.</p>
</li>
<li>
<p><strong>Son muy flexibles cuando se trata del diseño</strong>.<br/>
Dado a su naturaleza independiente, cada página puede tener un diseño diferente. No es necesario un solo diseño para múltiples tipos de contenido, lo que en los sitios web dinámicos se le conoce como plantillas (templates).</p>
</li>
<li>
<p><strong>Los tiempos de carga son muy rápidos</strong>.<br/>
Ya que los sitios web estáticos son construidos previamente. No implica ejecución de scripts o secuencias de comandos complejas, bases de datos ni análisis de contenido a través de lenguajes de plantillas, etc.<br/>
Sin embargo, con la revolución del Jamstack, los generadores de sitios web estáticos como Jekyll, GatsbyJS o Eleventy, y los Headless CMS como Netlify CMS, Siteleaf o Forestry, y además la incorporación de CDN (<em>Content Delivery Network en inglés</em>) para gestionar los recursos multimedia, se puede generar un aumento en el coste de carga de una página web estática dependiendo de sus características.</p>
</li>
</ul>
<h3 id="desventajas-de-una-página-web-estática">Desventajas de una página web estática</h3>
<p>Algunas desventajas de elegir una página web estática son:</p>
<ul>
<li>
<p><strong>Una página web estática puede ser más difícil de actualizar</strong>.<br/>
Para usuarios no técnicos, una vez la página es creada, hacer pequeños ajustes en el contenido puede representar un desafío a menos que estén familiarizados con HTML, CSS y el código del sitio web en general. Si no es así, es posible que deban pedirle al desarrollador que la creó originalmente, que realice los cambios que necesitan.</p>
</li>
<li>
<p><strong>Agregar contenido a la página web o realizar actualizaciones puede incurrir en costos adicionales</strong>.<br/>
Esto puede verse como una consecuencia de la desventaja anterior. Es decir que, con el tiempo, el mantenimiento de un sitio estático puede generar costos de mantenimiento continuo que podrían evitarse si tuvieras una página web dinámica.</p>
</li>
<li>
<p><strong>Agregar nuevas páginas o funcionalidades a una web estática puede ser más difícil que hacerlo para una web dinámica</strong>.<br/>
Por ejemplo, si creas una página web para promocionar productos de tecnología, cada vez que quieras agregar un producto, como un nuevo televisor o un nuevo portátil, tendrías que crear una nueva página específicamente para ese producto, lo que puede llevar mucho tiempo además del costo que puede llevar este proceso.</p>
</li>
</ul>
<h2 id="ejemplos-de-páginas-web-estáticas">Ejemplos de páginas web estáticas</h2>
<p>Un ejemplo sencillo de cómo es una página web estática, es el siguiente:</p>
<pre>
<code class="&lt;html&gt;">&lt;head&gt;
&lt;title&gt;Ejemplo página web estática&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
La fecha de hoy es Enero 1, 2020
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Aquí, la fecha está escrita directamente en el código de la página (<em>estática</em>) y cada vez que se recargue la página, dirá lo mismo, <strong>Enero 1, 2020</strong> … la única forma de que cambie es si alguien actualiza el código y escribe otra fecha o aplica alguna instrucción que la haga dinámica para que la fecha sea diferente cada vez que carga.</p>
<p>Algunos ejemplos de sitios web estáticos:</p>
<ul>
<li><a href="https://million-devs.netlify.com" rel="nofollow" target="_blank">https://million-devs.netlify.com</a></li>
<li><a href="https://www.imuniapp.com" rel="nofollow" target="_blank">https://www.imuniapp.com</a></li>
<li><a href="https://marvlm.github.io/tdd-infographic/" target="_blank">https://marvlm.github.io/tdd-infographic/</a></li>
</ul>
<div><img alt="Imagen 0 en Páginas web estáticas vs páginas web dinámicas" class="img-responsive center-block" height="640" data-pagespeed-lazy-src="https://dc722jrlp2zu8.cloudfront.net/media/cache/7f/dd/7fddd1f98c82a55b55d565b8377a6b58.webp" data-pagespeed-lazy-srcset="https://dc722jrlp2zu8.cloudfront.net/media/cache/7f/dd/7fddd1f98c82a55b55d565b8377a6b58.webp 960w, https://dc722jrlp2zu8.cloudfront.net/media/cache/2b/20/2b2062e0073c712624b72cdb6fa59c98.webp 480w" width="960" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"/></div>
<h2 id="qué-es-una-página-web-dinámica">Qué es una página web dinámica</h2>
<p>La palabra dinámica se refiere a elementos que cambian continuamente, son interactivos y funcionales, en lugar de ser simplemente informativos. Por supuesto, eso requiere utilizar más que solo código HTML y CSS.</p>
<p>En comparación con las páginas web estáticas, que son mayoritariamente informativas, una página web dinámica incluye aspectos que se caracterizan por la interactividad y la funcionalidad, por ejemplo, los usuarios pueden interactuar con la información que se presenta en la página gracias a las instrucciones creadas a través de los lenguajes de programación y la base de datos sobre la que está construida.</p>
<p>Los sitios web dinámicos basan su comportamiento y funcionalidad en dos tipos de programación, <strong>front-end</strong> (del lado del cliente) y <strong>back-end</strong> (<em>del lado del servidor</em>). Las instrucciones del lado del cliente es código JavaScript que se ejecuta en el navegador. Mientras que las instrucciones que se ejecutan del lado del servidor son instrucciones escritas en lenguajes de scripting o programación, como ASP.Net, PHP, Python, etc. y que son ejecutadas para crear lo que el usuario ha solicitado en su interacción con la página.</p>
<p>Una vez ejecutadas las instrucciones en el servidor, un nuevo HTTP response se envía al navegador del usuario para mostrarle lo que ha solicitado. El resultado final es el mismo que en un sitio web estático: una página HTML que el usuario ve desde el navegador.</p>
<p>Por resumir, una página web dinámica puede ser más compleja cuando hablamos de su diseño y desarrollo, pero también es más versátil cuando se trata de la funcionalidad que ofrece.</p>
<h3 id="ventajas-de-una-página-web-dinámica">Ventajas de una página web dinámica</h3>
<p>Entre las ventajas de una página web dinámica están:</p>
<ul>
<li>
<p><strong>Puede gestionar información a través de bases de datos</strong>.<br/>
Esto permite que el usuario pueda solicitar información fácilmente de una manera organizada y estructurada dentro de un catálogo, además de crear y mostrar contenido según el tipo de usuario que acceda a la página.</p>
</li>
<li>
<p><strong>El contenido se puede gestionar a través de un CMS</strong>.<br/>
El contenido almacenado en el CMS puede incluir una variedad de archivos, desde el texto hasta las imágenes que se muestran, diseños de página, configuraciones del sitio y más. Esto permite una flexibilidad extrema a la hora de crear el sitio y también permite que varios usuarios puedan manipular el contenido según sea necesario.</p>
</li>
<li>
<p><strong>El coste de mantenimiento es menor</strong>.<br/>
Si la página no necesita cambios en el diseño básico o en la funcionalidad definida al inicio de su desarrollo. Ya que se puede gestionar la información a través de un CMS, existe poco o nada de costes cuando se trata de su mantenimiento.</p>
</li>
</ul>
<h3 id="desventajas-de-una-página-web-dinámica">Desventajas de una página web dinámica</h3>
<p>Algunas desventajas de una página web dinámica son:</p>
<ul>
<li>
<p><strong>Pueden existir limitaciones en el diseño.</strong><br/>
Ya que el contenido está principalmente basado en la información contenida en la base de datos y la presentación al usuario se basa en la estructura de la misma. Esto puede hacer que el diseño sea complicado, ya que lo más sencillo es optar por un enfoque único para todas las páginas. Dependiendo del CMS, puede resultar difícil crear varios diseños o plantillas que permitan mostrar diferentes tipos de contenido de diferentes formas.</p>
</li>
<li>
<p><strong>Puede involucrar altos costos de construcción iniciales.</strong><br/>
Al coste del desarrollo de la página web se le suma el coste del desarrollo de las bases de datos donde se guardará el contenido a mostrar, etc. El desarrollo también puede costar más a medida que se agregan nuevas funcionalidades. Si bien los costos de mantenimiento pueden ser más bajos como fue mencionado en las ventajas, también puede involucrar costos de desarrollo iniciales mucho más altos que al desarrollar una página web estática.</p>
</li>
</ul>
<h2 id="ejemplos-de-páginas-web-dinámicas">Ejemplos de páginas web dinámicas</h2>
<p>Como ya hemos visto, es muy sencillo determinar si una página web es dinámica: por ejemplo, cuando puedes interactuar con ella, o si cada vez que la recargas, puedes ver contenido distinto.</p>
<p>Por lo tanto, la mayoría de las páginas que regularmente visitas es probable que sean dinámicas porque son interactivas. Por ejemplo, una página web dinámica te permite crear un perfil de usuario <a href="https://www.facebook.com/" rel="nofollow" target="_blank">Facebook.com</a>, comentar una publicación <a href="https://www.linkedin.com/" rel="nofollow" target="_blank">LinkedIn.com</a>, pedir tu cena <a href="https://www.just-eat.es/" rel="nofollow" target="_blank">just-eat.es</a> o hacer una reserva <a href="https://www.booking.com/" rel="nofollow" target="_blank">Booking.com</a>.</p>
<p>Siguiendo el ejemplo de la página que muestra una fecha, si queremos convertirla en una página web dinámica, podemos cambiar la fecha escrita textualmente por una función que retorne la fecha actual, de esta forma:</p>
<pre>
<code class="&lt;html&gt;">&lt;head&gt;
&lt;title&gt;Página web dinámica&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
La fecha de hoy es &lt;%=Datetime.Now()%&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
<p>Aquí, cada vez que se recarga la página, se mostrará la fecha y hora actual, es decir será diferente en cada recarga de la página, ya que la instrucción <strong>&lt;%=Datetime.Now()%&gt;</strong> le indica al servidor que retorne la fecha del momento en que recibe la petición.</p>
<h2 id="página-web-dinámica-vs-estática:-conclusión">Página web dinámica vs estática: Conclusión</h2>
<p>En conclusión, si tienes que crear una página web y debes tomar la decisión entre crear una página web estática o una dinámica, debe basar tu decisión principalmente en los objetivos que quieres cumplir con tu página web y los recursos de tiempo y conocimientos que tengas disponibles.</p>
<p>La mayoría de las personas que no poseen conocimientos técnicos de diseño y desarrollo de páginas web, prefieren los sitios web dinámicos porque a través de plataformas CMS como WordPress, Joomla, Drupal o Ghost pueden crear sitios web dinámicos de una forma muy fácil y rápida, a la vez que son más fáciles de mantener a largo plazo.</p>
<p>Si bien es cierto que las páginas web dinámicas ofrecen más posibilidades, pueden ser mucho más complejas de construir y mantener para los usuarios que no tengan conocimientos técnicos y deseen incorporar integraciones que no ofrezcan los CMS; mientras que las páginas web estáticas son algo más limitadas, pero en principio son mucho más simples de crear y mantener si posees conocimientos en HTML y CSS.</p>
</article>
</div>
<div class="blog-sidebar col-12 col-md-5 col-lg-3">
<div id="blog-sidebar-content" style="position: absolute;">
<!-- This site is converting visitors into subscribers and customers with OptinMonster - https://optinmonster.com -->
<div id="om-sngo137vekw8jd5mobuu-holder"></div>
</div>
</div>
</div>
</div>
</div>
</section>
<div id="dummy-footer"></div>
<section class="section leadings">
<div class="container">
<header>
<h3 class="title">Relacionado</h3>
<p class="description">Te dejamos una selección de cursos, carreras y artículos</p>
</header>
<div class="row justify-content-center">
<div class="col-md-6 col-lg-4">
<article class="card card-leading flex">
<header class="card-header" style="cursor: pointer"/>
<img class="card-img-top" data-pagespeed-lazy-src="https://dc722jrlp2zu8.cloudfront.net/media/cache/46/c0/46c0f543779668cefce2a86365c28332.webp" alt="Curso de HTML5 y CSS3" onclick="window.location='/cursos/html5-css3/'" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);"/>
</header>
<div class="card-body">
<h3 class="card-title w-100"><a href="/cursos/html5-css3/" rel="follow">
Curso de HTML5 y CSS3
</a></h3>
<div class="card-content">
<p><span class="badge badge-pill badge-secondary">curso</span></p>
<p class="card-text">Con este curso <strong>aprenderás</strong>:</p>
<ul>
<li>Aprenderás lo qué es HTML y CSS.</li>
<li>Conocerás la estructura de una página Web.</li>
<li>Podrás añadir todo tipo de contenido a dichas páginas web.</li>
</ul>
</div>
</div>
<footer class="card-footer ">
<p class="card-text "> <span class="d-inline  d-lg-none d-xl-inline"> Duración:</span> <b>4</b> horas y <b>21</b> minutos</p>
</footer>
</article>
</div>
</div>
</div>
</section>
<section id="app" class="section comments">
<div class="container-fluid">
<div class="row justify-content-md-center border-bottom">
<div class="col-12 col-lg-10 col-xl-7 mb-5 justify-content-center d-flex">
<button class="btn btn-outline btn-primary" onclick="window.location='/accounts/login/?next=/blog/paginas-web-estaticas-vs-paginas-web-dinamicas/';">Inicia sesión para comentar</button>
</div>
</div>
</div>
</section>
<section style="background-color: #0f0f0f">
<div class="container">
<div class="row pt-5 mt-5">
<div class="col text-center">
<h3 class="h1 text-white pb-4">Más de 300 empresas confían en nosotros</h3>
</div>
</div>
<div class="row align-items-baseline pb-2 mt-3" style="width:85%; margin: 0 auto">
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/ow-client-oesia.svg" class="img-fluid" alt="Oesia" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/ow-client-vass.svg" class="img-fluid" alt="Vass" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/everis-e1585140479223.png" class="img-fluid" alt="Everis" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/ayesa.png" class="img-fluid" alt="Ayesa" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/ow-client-altran.svg" class="img-fluid" alt="Altran" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/Ibermatica_Logo.png" class="img-fluid" alt="Ibermatica" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/viewnext.png" class="img-fluid" alt="" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/atmira.png" class="img-fluid" alt="Atmira" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/GFI-logo-2011.png" class="img-fluid" alt="GFI" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/accenture.png" class="img-fluid" alt="Accenture" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/gmv.png" class="img-fluid" alt="GMV" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/concatel.png" class="img-fluid" alt="Concatel" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/ow-client-telefonica.svg" class="img-fluid" alt="Telefonica" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/caser-1024x238.png" class="img-fluid" alt="Caser" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/banco-espana-1024x238.png" class="img-fluid" alt="Banco de España" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/kpmg.png" class="img-fluid" alt="kpmg" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/mapfre.svg" class="img-fluid" alt="Mapfre" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
<div class="col-6 col-md-2 text-center pt-4 pb-4">
<img data-pagespeed-lazy-src="/static/images/empresas/blog/Randstad_Logo.svg" class="img-fluid" alt="Randstad" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
</div>
</div>
</div>
<div class="text-center pb-4">
<a href="/empresas/" id="cta-blog-empresas" class="btn btn-secondary mt-2 mb-3">INFORMACIÓN PARA EMPRESAS</a>
</div>
</section>
<!-- Modal Preview Imgae -->
<div class="modal fade" id="previewModal" tabindex="-1" role="dialog" aria-labelledby="previewModalLabel">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="previewModalLabel"></h5>
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
</div>
<div id="overlay-image" class="modal-body" style="padding: 0;"></div>
</div>
</div>
</div>
<div class="modal fade mt-5" id="modalCreateAccount" tabindex="-1" role="dialog" aria-labelledby="modalContactoTitle" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
<form action="/signup/freemium/" method="POST" id="contact-form">
<div class="modal-content">
<div class="modal-header pb-0">
<img data-pagespeed-lazy-src="/static/public/img/freemium/logo-openwebinars.svg" alt="Cursos Online de Programación y Sistemas con OpenWebinars" class="logo img-responsive" src="https://www.gstatic.com/psa/static/1.gif" onload="pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);" onerror="this.onerror=null;pagespeed.lazyLoadImages.loadIfVisibleAndMaybeBeacon(this);">
<button type="button" class="close d-xl-none d-lg-none d-sm-block d-xs-block" data-dismiss="modal" aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>
</div>
<div class="modal-subheader">
<h1>¡Mejora tus conocimientos gratis y
no pares de crecer profesionalmente!</h1>
<h2>
<span>Únete a OpenWebinars</span> y disfruta gratis de 5 cursos nuevos cada mes y más ventajas.
</h2>
</div>
<div class="modal-body pb-5 pb-md-1">
<div class="text-left">
<h3>Regístrate con tu e-mail:</h3>
<input type="hidden" name="csrfmiddlewaretoken" value="JqgbohSWHyuRbeeBnoTuMcmXFut0BiNHTimiBj8KXPea6SMw8PGsuE46RopA7wWd">
<div class="row mb-3">
<div class="col-xl-6 form-group">
<label class="label-modal" for="id_email">Email*</label>
<div class="input-group">
<input required class="form-control border-0" style="background: #F1F2F5" id="id_email" name="email" placeholder="Escribe aquí tu email" type="email" value="">
</div>
</div>
<div class="col-xl-6">
<label class="label-modal" for="id_phone">Teléfono*</label>
<div class="input-group">
<div class="input-group-prepend">
<span class="input-group-text border-0" style="background: #F1F2F5" id="basic-addon1"><svg class="mr-2" width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.9982 0H0.00268555V22H28.9982V0Z" fill="#C60B1E"/>
<path d="M29 5.5H0V16.5004H29V5.5Z" fill="#FFC400"/>
</svg>
+34
</span>
</div>
<input required class="form-control border-0" style="background: #F1F2F5" maxlength="9" pattern="[0-9]{9}" id="id_phone_number" name="phone_number_id" placeholder="Escribe aquí tu teléfono" type="tel">
<input id="id_phone" name="phone_number" type="hidden">
</div>
<span class="text-phone-form mt-2 ">Recibirás un código por SMS para activar tu cuenta, evitar bots y multi cuentas. No te enviaremos SPAM.</span>
</div>
</div>
<div class="row">
<div class="col-xl-6">
<div class="form-group">
<label class="label-modal" for="id_first_name">Nombre*</label>
<input style="background: #F1F2F5" required class="form-control border-0" id="id_first_name" name="first_name" placeholder="Escribe aquí tu nombre" type="text">
</div>
</div>
<div class="col-xl-6">
<div class="form-group">
<label class="label-modal" for="id_last_name">Apellidos*</label>
<input style="background: #F1F2F5" required class="form-control border-0 " id="id_last_name" name="last_name" placeholder="Escribe aquí tus apellidos" type="text">
</div>
</div>
</div>
<div class="row mt-4">
<div class="col-xl-6">
<div class="form-group">
<label class="label-modal" for="id_first_name">Contraseña*</label>
<input style="background: #F1F2F5" required class="form-control border-0 " id="id_password1" name="password1" placeholder="Escribe aquí tu contraseña" type="password">
</div>
<ul id="password-error" class="help-block form-text errors text-error-password"></ul>
</div>
<div class="col-xl-6">
<div class="form-group">
<label class="label-modal" for="id_last_name">Repita la contraseña*</label>
<input style="background: #F1F2F5" required class="form-control border-0 " id="id_password2" name="password2" placeholder="Repite tu contraseña" type="password">
</div>
</div>
</div>
<div class="pb-5 pb-md-0">
<div class="d-flex flex-column align-items-center ">
<button class="btn btn-submit btn-secondary btn-lg mr-3 mt-3 mb-4 disabled " role="button" style="width: 100%;pointer-events:none" type="onSubmit">
Crea tu cuenta gratis
</button>
<button class="border-0 d-xl-block d-lg-block d-sm-none d-xs-none" style="background-color: white; color:#ababab; text-decoration: underline;" data-dismiss="modal" aria-label="Close">
No quiero acceder a los 5 cursos gratis
</button>
</div>
</div>
</div>
</div>
</div>
</form>
</div>
</div>
</div>
</main>
<footer id="footer">
<div class="top">
<div class="container">
<div id="footer-nav" class="row justify-content-around">
<div class="col-12 col-sm-6 col-lg-4 justify-content-center row">
<nav>
<span class="h3">Soluciones
<i class="fa fa-chevron-down d-md-none float-right p-3 mt-1"></i>
</span>
<ul>
<li><a href="/particulares/">Particulares</a></li>
<li><a href="/empresas/">Empresas</a></li>
<li><a href="https://recursos.openwebinars.net/becasow/">Centros Educativos</a></li>
</ul>
</nav>
</div>
<div class="col-12 col-sm-6 col-lg-4 justify-content-center row">
<nav>
<span class="h3">Productos
<i class="fa fa-chevron-down d-md-none float-right p-3 mt-1"></i>
</span>
<ul>
<li><a href="/cursos/">Cursos</a></li>
<li><a href="/carreras/">Carreras</a></li>
<li><a href="/buscador/?kind=taller">Talleres</a></li>
<li><a href="https://recursos.openwebinars.net/becasow/">BecasOW</a></li>
</ul>
</nav>
</div>
<div class="col-12 col-sm-12 col-lg-4 justify-content-center row">
<nav>
<span class="h3">Acerca de
<i class="fa fa-chevron-down d-md-none float-right p-3 mt-1"></i>
</span>
<ul>
<li><span onclick="return op('/nosotros/')" class="link-ofus">Nosotros</span></li>
<li><span onclick="return op('/contacto/')" class="link-ofus">Contacta</span></li>
<li><a href="/blog/">Blog</a></li>
<li><a href="https://recursos.openwebinars.net/" target="_blank">Recursos</a></li>
</ul>
</nav>
</div>
</div>
</div>
</div>
<div class="bottom ">
<div class="container">
<div class="row d-flex align-items-center">
<div class="col-lg-8 py-2">
<p class="copyright">&copy; 2022 OpenWebinars S.L. todos los derechos reservados |
<a href="/sitemap/">Mapa del Sitio</a>
· <span onclick="return op('/terminos-condiciones/')" class="link-ofus text-white">Términos y condiciones de uso</span>
· <span onclick="return op('/politica-privacidad/')" class="link-ofus text-white">Política de privacidad</span>
· <span onclick="return op('/aviso-legal-cookies/')" class="link-ofus text-white">Cookies</span>
</p>
</div>
<div class="col-lg-4">
<nav class="justify-content-end nav-social-network row">
<span class="title">Síguenos</span>
<ul>
<li><a href="https://www.facebook.com/openwebinars" title="OpenWebinars en Facebook" class="facebook" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></a></li>
<li><a href="https://twitter.com/openwebinars" title="OpenWebinars en Twitter" class="twitter" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a></li>
<li><a href="https://www.instagram.com/openwebinarsnet/" title="OpenWebinars en Instagram" class="instagram" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></a></li>
<li><a href="https://es.linkedin.com/company/openwebinars" title="OpenWebinars en Linkedin" class="likedin" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
</ul>
</nav>
</div>
</div>
</div>
</div>
</footer>
<!-- Modal newsletterModal -->
<div class="modal fade" id="newsletterModal" tabindex="-1" role="dialog" aria-labelledby="newsletterModalLabel">
<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
<div class="modal-content">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<span class="modal-title" id="newsletterModalLabel"></span>
</div>
<div id="demo-form" class="modal-body">
<div id="newsletter-modal-form"></div>
</div>
</div>
</div>
</div>
<script type="text/javascript" data-pagespeed-no-defer>pagespeed.lazyLoadImages.overrideAttributeFunctions();</script><script>var unread=0;var lnb=document.getElementsByClassName('live_notify_badge');if(lnb.length){lnb[0].className+=' d-none';}function process_notification_callback(data){if(!window.jQuery){return}rcvd=data.unread_list.length;if(rcvd){$('.live_notify_badge').addClass('badge-primary').removeClass('d-none');}else{$('.live_notify_badge').removeClass('badge-primary animated flash').addClass('d-none');}if(unread){if(rcvd>unread){$('.live_notify_badge').addClass('animated flash').show();if((rcvd-unread)>1){toastr['warning']('Tienes '+(rcvd-unread)+' mensajes nuevos','',{'timeOut':0})}else{toastr['warning']('Tienes '+(rcvd-unread)+' mensaje nuevo','',{'timeOut':0})}}else{$('.live_notify_badge').removeClass('animated flash');}}unread=data.unread_list.length;}function render_notification_list(data){}</script>
<script>function onSubmit(token){document.getElementById("contact-form").submit();}</script>
<script src="/static/highlightjs/highlight.pack.min.js.pagespeed.jm.Plc3jVkz_y.js" defer></script>
<script type="application/ld+json">
{
  "@context": "http://schema.org/",
  "@type": "BlogPosting",
  "name": "Páginas web estáticas vs páginas web dinámicas",
  "headline": "Páginas web estáticas vs páginas web dinámicas",
  "author": {
    "@type": "Person",
    "name": "Marvin López Mendoza"
  },
  "publisher": {
    "@type": "Organization",
    "name": "OpenWebinars",
    "logo": {
      "@type": "ImageObject",
      "url": "https://openwebinars.net/static/img/logos/logo-openwebinars@60px.png",
      "height": "60px",
      "width": "314px"
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://dc722jrlp2zu8.cloudfront.net/media/featured_images/P%C3%A1ginas_web_est%C3%A1ticas_vs_p%C3%A1ginas_web_din%C3%A1micas.jpg",
    "height": "600px",
    "width": "1200px"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://openwebinars.net/blog/paginas-web-estaticas-vs-paginas-web-dinamicas/"
  },
  "datePublished": "2021-02-01T17:00:00+01:00",
  "dateModified": "2022-09-05T12:50:50.698487+02:00"
}
</script>
<script type="application/ld+json">
  {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "item": {
      "@id": "https://openwebinars.net/",
      "name": "OpenWebinars"
    }
  },{
    "@type": "ListItem",
    "position": 2,
    "item": {
      "@id": "https://openwebinars.net/blog/",
      "name": "Blog de programación y sistemas"
    }
  },{
    "@type": "ListItem",
    "position": 3,
    "item": {
      "@id": "https://openwebinars.net/blog/categoria/desarrollo-web/",
      "name": "Desarrollo Web"
    }
  },{
    "@type": "ListItem",
    "position": 4,
    "item": {
      "@id": "https://openwebinars.net/blog/paginas-web-estaticas-vs-paginas-web-dinamicas/",
      "name": "Páginas web estáticas vs páginas web dinámicas"
    }
  }]
}
</script>
<script>dataLayer.push({event:"view_post",post_title:"Páginas web estáticas vs páginas web dinámicas",post_type:"Post",fb_event_type:"ViewContent"});</script>
<script defer src="/static/js/jquery.gifplayer.js"></script>
<script defer src="/static/js/experiments/banner-freemium-02.js"></script>
<script>var idx=window.location.href.indexOf("#")
var hash=idx!=-1?window.location.href.substring(idx):"";</script>
<script src="//platform-api.sharethis.com/js/sharethis.js#property=5aa7d5fb40033c0013635fff&product=sticky-share-buttons" defer></script>
<script>
      var idb = ''

      document.addEventListener("DOMContentLoaded", function(event) {
        
        var $body = document.querySelector('body')
        var oldClass = $body.className;
        
        if(window.scrollY >= 10){
          $body.className = oldClass + " scrolled";
        }else{
          if(window.scrollY === undefined){
            $body.className = oldClass + " scrolled";
          }else{
            $body.className = oldClass;
          }
        }
        window.onscroll = function(e) {
          if(window.scrollY >= 10){
            $body.className = oldClass + " scrolled";
          }else{
            if(window.scrollY === undefined){
              $body.className = oldClass + " scrolled";
            }else{
              $body.className = oldClass;
            }
          }
        };

        AOS.init();

        $("#footer-nav").on("click", ".h3", function () {
          if ($(window).width() <= 730) {
            console.log($(this).text());
            $(this).parent().toggleClass('active')
          }
        });

        sendQueuedEvents();

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "preventDuplicates": true,
          "newestOnTop": true,
          "progressBar": false,
          "positionClass": "toast-bottom-left",
          "onclick": null,
          "showDuration": "400",
          "hideDuration": "1000",
          "timeOut": "8000",
          "extendedTimeOut": "4000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }

        
$('.external-form style').remove();
$('select[name="field[12]"] option:first').attr('disabled', 'disabled').text("Selecciona el tema que te interese");
$('.external-form').show();
$('article#post img.zoom').click(function(ev){
  document.getElementById("previewModalLabel").innerHTML = this.alt;
  document.getElementById("overlay-image").innerHTML = '';
  document.getElementById("overlay-image").appendChild(this.cloneNode(true));
  $('#previewModal').modal();
}).css('cursor', 'zoom-in');

$("#id_phone_number").blur(() => {
  $("#id_phone").val('+34' + $("#id_phone_number").val())
})
let timer;

  $('#id_password1').keyup(() => {
    clearTimeout(timer)
    $('#password-error').find('li').remove()
    const value = $('#id_password1').val()
    const first_name = $('#id_first_name').val()
    const last_name = $('#id_last_name').val()
    timer = setTimeout(()=>{
      if(value.length < 9){
        $('<li>Su contraseña debe contener al menos 9 carácteres</li>').appendTo('#password-error')
      }
      if($.isNumeric(value)){
        $('<li>Su contraseña no puede ser completamente numérica.</li>').appendTo('#password-error')
      }
      if((value.toLowerCase().includes(first_name.toLowerCase()) || value.toLowerCase().includes(last_name.toLowerCase())) 
      && (first_name !== '' && last_name !== '')){
        $('<li>Su contraseña no se puede asemejar a su informacion personal</li>').appendTo('#password-error')
        
      }
      if($('#password-error').find('li').length === 0){
        if ($("#id_password1").val() != $("#id_password2").val()) {
          $("#id_password2").addClass("is-invalid")
          $("#id_password1").addClass("is-invalid")
          $("#id_password2").removeClass("is-valid")
          $("#id_password1").removeClass("is-valid")
          $('.btn-submit').addClass('disabled')
          $('<li class="text-error-password">Las contraseñas no coinciden</li>').appendTo('#password-error')
        } else {
          $("#id_password2").addClass("is-valid")
          $("#id_password1").addClass("is-valid")
          $("#id_password1").removeClass("is-invalid")
          $("#id_password2").removeClass("is-invalid")
          $('.btn-submit').removeClass('disabled')
          $('.btn-submit').css('pointer-events', 'auto')
        }
      } 
    }, 500)
  })
  $('#id_password2').keyup(() => {
    $("#password-error").find('li').remove()
    if ($("#id_password1").val() != $("#id_password2").val()) {
      $("#id_password2").addClass("is-invalid")
      $("#id_password1").addClass("is-invalid")
      $('.btn-submit').addClass('disabled')
      $("#id_password2").removeClass("is-valid")
      $("#id_password1").removeClass("is-valid")
      $('<li class="text-error-password">Las contraseñas no coinciden</li>').appendTo('#password-error')
    } else {
      $("#id_password2").addClass("is-valid")
      $("#id_password1").addClass("is-valid")
      $("#id_password1").removeClass("is-invalid")
      $("#id_password2").removeClass("is-invalid")
      $('.btn-submit').removeClass('disabled')
      $('.btn-submit').css('pointer-events', 'auto')
    }
  })


  // Sidebar
if ($("#blog-sidebar-content").length) {
  var w = window.innerWidth;
  var scrollTimeout;
  var $sidebar = $("#blog-sidebar-content"), offset = $sidebar.offset(), topPadding = 76;
  footer_offset = $("#dummy-footer").offset();
  var sidebar_width = Math.min(447, $sidebar.width());
  var $window = $( window ); // 1. Window Object.
  var sidebar_height = 0;
  var $featuredMedia = $( "#ow-player" ); // 1. The Video Container.
  if ($featuredMedia.length){
    var $featuredVideo = $( "#ow-player>iframe" ); // 2. The Real Video.

    var top_video = $featuredMedia.offset().top; // 4. The video position from the top of the document;
    var video_offset = Math.floor( top_video + ( $featuredMedia.outerHeight() - 300 ) ); //5. offset
  }

  function scrollPage() {
    marginTop = topPadding;
    footer_offset = $("#dummy-footer").offset();
    if (window.innerWidth >= 992 && window.innerHeight >= $('#blog-sidebar-content').outerHeight() && $window.scrollTop() > offset.top - marginTop ) {
      sidebar_height = $('#blog-sidebar-content').outerHeight();
      if ((Math.max($('#blog-sidebar-content').outerHeight(),sidebar_height)+$window.scrollTop()+marginTop) < footer_offset.top) {
        $sidebar.css({
          'position': 'fixed',
          'top': $('.smartbar-popup').length*77,
          'bottom': '',
          'margin-top': marginTop+"px",
          'max-width': sidebar_width ? (sidebar_width+"px") : '23.25%'
        });
      } else if ((Math.max($('#blog-sidebar-content').outerHeight(), sidebar_height)+$window.scrollTop()+marginTop) >= footer_offset.top) {
        $sidebar.css({
          'position': 'absolute',
          'top': '',
          'bottom': '0px',
          'max-width': sidebar_width ? (sidebar_width+"px") : 'calc(100% - 30px)'
        });
      }
    } else {
      if(window.innerWidth < 992){

      if($('#banner-1').length > 0){
        $('#banner-1').css({
          'width': '100%',
          'margin': '20px 0 0 0',
        })
      }
      if($('#banner-2').length > 0){
        $('#banner-2').css({
          'margin': '20px auto',
        })
      }
      }
      $sidebar.css({
        'position': 'relative',
        'margin-top': 0,
        'max-width': '100%'
      });
    }

  }

  $window.on( "resize", function() {
    offset = $sidebar.offset();
    sidebar_width = Math.min(447, $(".blog-sidebar").width());
    sidebar_height = $('#blog-sidebar-content').outerHeight();
    if ($featuredMedia.length && $featuredMedia.offset()){
     top = $featuredMedia.offset().top;
     video_offset = Math.floor( top_video + ( $featuredMedia.outerHeight() - 300 ));
    }
  } ).on( "scroll", function(){
    clearTimeout(scrollTimeout);
    window.setTimeout(scrollPage, 100);
  } );
}

  window.setTimeout(function (){
    $('pre').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }, 5000)


        $('.add-course').bind('click', add_course).css('cursor','pointer');

        if (!purser.visits.all().length) {
          purser.visits.create();
          saveUTM();
        } else {
          
        }

        

        
        document.removeEventListener('visibilitychange', window.__trackAbandons);
        
      })
      </script>
<!-- Facebook Pixel Events -->
<!-- End Facebook Pixel Events -->
<script>var contador=0;var launcher=setInterval(function(){contador++
if(document.querySelector('#adroll_consent_banner #navigate')){$('.adroll_consent_container').css({'right':'10px','bottom':'40px'})
$('#adroll_consent_banner').css({'background-color':'#222','color':'white'})
$('#adroll_consent_banner .adroll_consent_box').css({'color':'#e4e4e4'})
$('#adroll_consent_banner .adroll_consent_box a').css({'color':'white'})
$('.adroll_consent_banner #adroll_settings').css({'color':'white','background-color':'transparent'})
$('.adroll_consent_banner .adroll_consent_button_bar .adroll_consent_button').css({'color':'white','background-color':'#f33784'})
$('#adroll_consent_banner .adroll_consent_first_page_logo').css({'display':'none'})
$('#adroll_consent_banner #navigate').prepend('<div class="adroll_consent_box" style="color: rgb(228, 228, 228);">Las cookies nos permiten ofrecer nuestros servicios. Al utilizar nuestros servicios, aceptas el uso que hacemos de las cookies. <a style="color: white;" href="/aviso-legal-cookies/" title="Aviso de Cookies">Más Información</a>.</div>')
$('#CookielawBanner').remove()
clearInterval(launcher)
$('#adroll_allow').on('click',function(e){e.preventDefault();Cookielaw.createCookielawCookie();})}else if(contador==10){clearInterval(launcher)}},500)</script>
<noscript class="psa_add_styles"><style>#newsletter-modal-form .form.register{border:0;box-shadow:none}.live_notify_badge{position:relative;top:-12px;left:-12px}body:not(.scrolled) #hubspot-messages-iframe-container{display:none!important}.link-ofus{cursor:pointer}.navbar.fixed .navbar-brand{background:url(/static/images/ow-logo-secondary.svg) no-repeat center top;background-size:100% 100%}h1 span{display:block}body:not(.scrolled) .adroll_consent_banner, body:not(.scrolled) .adroll_mini_consent_banner{display:none!important}</style><style>body:not(.scrolled) #st-2 {display:none}@media (min-width:1025px){#st-2{top:337px!important}}.hs-button{white-space:normal}.giphy-embed{max-width:100%;height:auto;display:block!important;position:relative;width:100%!important}#previewModal .modal-lg{max-width:75%;max-height:90vh}#previewModal img{cursor:inherit!important;width:100%!important;height:auto!important;margin:0!important}.CodeMirror,.CodeMirror-scroll{min-height:150px}</style><link rel="stylesheet" type="text/css" href="/static/A.css,,__fonts.css+font-awesome,,_css,,_all.min.css+css,,_toastr.min.css+sweetalert2,,_dist,,_sweetalert2.min.css,Mcc.GgQRaPZaok.css.pagespeed.cf.2Bg_CyC6lf.css"/><link rel="stylesheet" type="text/css" href="/static/A.animate.css,,_animate.min.css+aos,,_dist,,_aos.css,Mcc.UT5CJvtRRi.css.pagespeed.cf.5r0NZU6C8O.css"/><link rel="stylesheet" type="text/css" href="/static/css/A.responsive.css,qrev=49e353f57.pagespeed.cf.9AXMB_Ou3T.css"/><link rel="stylesheet" type="text/css" href="/static/A.jquery.gifplayer,,_dist,,_gifplayer.css+bootstrap-markdown,,_css,,_bootstrap-markdown.min.css,Mcc.OKpzc1fWTB.css.pagespeed.cf.6ErVlJ_iPu.css"><link rel="stylesheet" type="text/css" href="/static/A.highlight,,_src,,_styles,,_atom-one-light.css+css,,_modal-freemium.css,Mcc.7b4-w77puD.css.pagespeed.cf.z6TdnRlYHs.css"><style>.async-hide{opacity:0!important}</style></noscript><script data-pagespeed-no-defer>(function(){function b(){var a=window,c=e;if(a.addEventListener)a.addEventListener("load",c,!1);else if(a.attachEvent)a.attachEvent("onload",c);else{var d=a.onload;a.onload=function(){c.call(this);d&&d.call(this)}}};var f=!1;function e(){if(!f){f=!0;for(var a=document.getElementsByClassName("psa_add_styles"),c=0,d;d=a[c];++c)if("NOSCRIPT"==d.nodeName){var k=document.createElement("div");k.innerHTML=d.textContent;document.body.appendChild(k)}}}function g(){var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||null;a?a(function(){window.setTimeout(e,0)}):b()}
var h=["pagespeed","CriticalCssLoader","Run"],l=this;h[0]in l||!l.execScript||l.execScript("var "+h[0]);for(var m;h.length&&(m=h.shift());)h.length||void 0===g?l[m]?l=l[m]:l=l[m]={}:l[m]=g;})();
pagespeed.CriticalCssLoader.Run();</script></body>
</html>
  
`
));


// ruta de tipo GET que retorna una api
app.get('/api', (req, res) =>{
   
    res.json([
        {
        "name": "Harry Potter",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "31-07-1980",
        "yearOfBirth": 1980,
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "black",
        "wand": {
        "wood": "holly",
        "core": "phoenix feather",
        "length": 11
        },
        "patronus": "stag",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Daniel Radcliffe",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/harry.jpg"
        },
        {
        "name": "Hermione Granger",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "19-09-1979",
        "yearOfBirth": 1979,
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "brown",
        "hairColour": "brown",
        "wand": {
        "wood": "vine",
        "core": "dragon heartstring",
        "length": ""
        },
        "patronus": "otter",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Emma Watson",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/hermione.jpeg"
        },
        {
        "name": "Ron Weasley",
        "alternate_names": [
        "Dragomir Despard"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "01-03-1980",
        "yearOfBirth": 1980,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "red",
        "wand": {
        "wood": "willow",
        "core": "unicorn tail-hair",
        "length": 14
        },
        "patronus": "Jack Russell terrier",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Rupert Grint",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/ron.jpg"
        },
        {
        "name": "Draco Malfoy",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "05-06-1980",
        "yearOfBirth": 1980,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "grey",
        "hairColour": "blonde",
        "wand": {
        "wood": "hawthorn",
        "core": "unicorn tail-hair",
        "length": 10
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Tom Felton",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/draco.jpg"
        },
        {
        "name": "Minerva McGonagall",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "04-10-1925",
        "yearOfBirth": 1925,
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "tabby cat",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Dame Maggie Smith",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/mcgonagall.jpg"
        },
        {
        "name": "Cedric Diggory",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": 1977,
        "wizard": true,
        "ancestry": "",
        "eyeColour": "grey",
        "hairColour": "brown",
        "wand": {
        "wood": "ash",
        "core": "unicorn hair",
        "length": 12.25
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Robert Pattinson",
        "alternate_actors": [],
        "alive": false,
        "image": "https://hp-api.herokuapp.com/images/cedric.png"
        },
        {
        "name": "Cho Chang",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "brown",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "swan",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Katie Leung",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/cho.jpg"
        },
        {
        "name": "Severus Snape",
        "alternate_names": [
        "Half-Blood Prince"
        ],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "09-01-1960",
        "yearOfBirth": 1960,
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "black",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "doe",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Alan Rickman",
        "alternate_actors": [],
        "alive": false,
        "image": "https://hp-api.herokuapp.com/images/snape.jpg"
        },
        {
        "name": "Rubeus Hagrid",
        "alternate_names": [],
        "species": "half-giant",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "06-12-1928",
        "yearOfBirth": 1928,
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "black",
        "hairColour": "black",
        "wand": {
        "wood": "oak",
        "core": "",
        "length": 16
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Robbie Coltrane",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/hagrid.png"
        },
        {
        "name": "Neville Longbottom",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "30-07-1980",
        "yearOfBirth": 1980,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "cherry",
        "core": "unicorn tail-hair",
        "length": 13
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Matthew Lewis",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/neville.jpg"
        },
        {
        "name": "Luna Lovegood",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "13-02-1981",
        "yearOfBirth": 1981,
        "wizard": true,
        "ancestry": "",
        "eyeColour": "grey",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "hare",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Evanna Lynch",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/luna.jpg"
        },
        {
        "name": "Ginny Weasley",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "11-08-1981",
        "yearOfBirth": 1981,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "brown",
        "hairColour": "red",
        "wand": {
        "wood": "yew",
        "core": "",
        "length": ""
        },
        "patronus": "horse",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Bonnie Wright",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/ginny.jpg"
        },
        {
        "name": "Sirius Black",
        "alternate_names": [
        "Padfoot",
        "Snuffles"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "03-11-1959",
        "yearOfBirth": 1959,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "grey",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "hare",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Gary Oldman",
        "alternate_actors": [
        "James Walters",
        "Rohan Gotobed"
        ],
        "alive": false,
        "image": "https://hp-api.herokuapp.com/images/sirius.JPG"
        },
        {
        "name": "Remus Lupin",
        "alternate_names": [
        "Professor Lupin",
        "Moony",
        "Remus John Lupin"
        ],
        "species": "werewolf",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "10-03-1960",
        "yearOfBirth": 1960,
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "brown",
        "wand": {
        "wood": "cypress",
        "core": "unicorn tail-hair",
        "length": 10.25
        },
        "patronus": "wolf",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "David Thewlis",
        "alternate_actors": [],
        "alive": false,
        "image": "https://hp-api.herokuapp.com/images/lupin.jpg"
        },
        {
        "name": "Arthur Weasley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "06-02-1950",
        "yearOfBirth": 1950,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "weasel",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Mark Williams",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/arthur.jpg"
        },
        {
        "name": "Bellatrix Lestrange",
        "alternate_names": [
        "Bella"
        ],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": 1951,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "brown",
        "hairColour": "black",
        "wand": {
        "wood": "walnut",
        "core": "dragon heartstring",
        "length": 12.75
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Helena Bonham Carter",
        "alternate_actors": [],
        "alive": false,
        "image": "https://hp-api.herokuapp.com/images/bellatrix.jpg"
        },
        {
        "name": "Lord Voldemort",
        "alternate_names": [
        "Tom Marvolo Riddle"
        ],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "31-12-1926",
        "yearOfBirth": 1926,
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "red",
        "hairColour": "bald",
        "wand": {
        "wood": "yew",
        "core": "phoenix feather",
        "length": 13.5
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Ralph Fiennes",
        "alternate_actors": [],
        "alive": false,
        "image": "https://hp-api.herokuapp.com/images/voldemort.jpg"
        },
        {
        "name": "Horace Slughorn",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "green",
        "hairColour": "blonde",
        "wand": {
        "wood": "cedar",
        "core": "dragon heartstring",
        "length": 10.25
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Jim Broadbent",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/slughorn.JPG"
        },
        {
        "name": "Kingsley Shacklebolt",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "brown",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "lynx",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "George Harris",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/kingsley.jpg"
        },
        {
        "name": "Dolores Umbridge",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "brown",
        "hairColour": "grey",
        "wand": {
        "wood": "birch",
        "core": "dragon heartstring",
        "length": 8
        },
        "patronus": "persian cat",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Imelda Staunton",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/umbridge.jpg"
        },
        {
        "name": "Lucius Malfoy",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": 1954,
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "grey",
        "hairColour": "blonde",
        "wand": {
        "wood": "elm",
        "core": "dragon heartstring",
        "length": 18
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jason Isaacs",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/lucius.jpg"
        },
        {
        "name": "Vincent Crabbe",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "black",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Jamie Waylett",
        "alternate_actors": [],
        "alive": false,
        "image": "https://hp-api.herokuapp.com/images/crabbe.jpg"
        },
        {
        "name": "Gregory Goyle",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Josh Herdman",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/goyle.jpg"
        },
        {
        "name": "Mrs Norris",
        "alternate_names": [],
        "species": "cat",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "yellow",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Maxime, Alanis and Tommy the cats",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/norris.JPG"
        },
        {
        "name": "Argus Filch",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "squib",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "David Bradley",
        "alternate_actors": [],
        "alive": true,
        "image": "https://hp-api.herokuapp.com/images/filch.jpg"
        },
        {
        "name": "Vernon Dursley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Richard Griffiths",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Petunia Dursley",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Fiona Shaw",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dudley Dursley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "blue",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Harry Melling",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Lily Potter",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "green",
        "hairColour": "",
        "wand": {
        "wood": "willow",
        "core": "",
        "length": 10.25
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Geraldine Somerville",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "James Potter",
        "alternate_names": [
        "Prongs"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "mahogany",
        "core": "",
        "length": 11
        },
        "patronus": "stag",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Adrian Rawlins",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Albus Dumbledore",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": 0,
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "blue",
        "hairColour": "silver",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Richard Harris",
        "alternate_actors": [
        "Michael Gambon"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Madam Pomfrey",
        "alternate_names": [
        "Poppy Pomfrey"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Gemma Jones",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mrs Figg",
        "alternate_names": [
        "Arabella Doreen Figg"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "squib",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Kathryn Hunter",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Marge Dursley",
        "alternate_names": [
        "Marjorie Eileen Dursley",
        "Aunt Marge",
        "Auntie Marge",
        "Margie"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Pam Ferris",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Yvonne",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Piers Polkiss",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jason Boyd",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dennis",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Christopher Rithin",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Malcolm",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Richard Macklin",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gordon",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Miranda Gaushawk",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Bathilda Bagshot",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Adalbert Waffling",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Emeric Switch",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Phyllida Spore",
        "alternate_names": [
        "Dame Phyllida Spore"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Arsenius Jigger",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Newt Scamander",
        "alternate_names": [
        "Newton Artemis Fido Scamander"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Eddie Redmayne",
        "alternate_actors": [
        "Joshua Shea",
        "Callum Turner"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Quentin Trimble",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Tom",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Derek Deadman",
        "alternate_actors": [
        "Jim Tavare"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Doris Crockford",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Nina Young",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Quirinus Quirrel",
        "alternate_names": [
        "Professor Quirrel"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Ian Hart",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Griphook",
        "alternate_names": [],
        "species": "goblin",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Verne Troyer",
        "alternate_actors": [
        "Warwick Davis"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Madam Malkin",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Vindictus Viridian",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Garrick Ollivander",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "pale, silvery",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "John Hurt",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Hedwig",
        "alternate_names": [],
        "species": "owl",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "amber",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Gizmo",
        "alternate_actors": [
        "Ook",
        "Sprout",
        "Kasper",
        "Swoops",
        "Oh Oh",
        "Elmo",
        "Bandit"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Molly Weasley",
        "alternate_names": [
        "Molly Prewett",
        "Mollywabbles"
        ],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Julie Walters",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Percy Weasley",
        "alternate_names": [
        "Perce",
        "Percy Ignatius Weasley",
        "Weatherby"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Chris Rankin",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fred Weasley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "James Phelps",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "George Weasley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Oliver Phelps",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Lee Jordan",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Luke Youngblood",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bill Weasley",
        "alternate_names": [
        "William Arthur Weasley"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Richard Fish",
        "alternate_actors": [
        "Domhnall Gleeson"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Charlie Weasley",
        "alternate_names": [
        "Charles Weasley"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Alex Crockford",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fat Friar",
        "alternate_names": [],
        "species": "ghost",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Simon Fisher-Becker",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Peeves",
        "alternate_names": [],
        "species": "poltergeist",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Hannah Abbott",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Charlotte Skeoch",
        "alternate_actors": [
        "Louisa Warren"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Susan Bones",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Eleanor Columbus",
        "alternate_actors": [
        "Emma Jayne-Corboz"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Terry Boot",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Kevin Lee Yi",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mandy Brocklehurst",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Christina Petrou",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Lavender Brown",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Kathleen Cauley",
        "alternate_actors": [
        "Jennifer Smith",
        "Jessie Cave"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Millicent Bulstrode",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Helen Stuart",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Justin Finch-Fletchley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Edward Randell",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Seamus Finnegan",
        "alternate_names": [
        "O'Flaherty"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "sandy",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Devon Murray",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Morag MacDougal",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Lily Moon",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Theodore Nott",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Pansy Parkinson",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Genevieve Gaunt",
        "alternate_actors": [
        "Lauren Shotton",
        "Scarlett Byrne"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Parvati Patil",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Sitara Shah",
        "alternate_actors": [
        "Shefali Chowdhury"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Padma Patil",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Sharon Sandhu",
        "alternate_actors": [
        "Afshan Azad"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Sally-Anne Perks",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Lisa Turpin",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Blaise Zabini",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Louis Cordice",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Nearly Headless Nick",
        "alternate_names": [
        "Sir Nicholas de Mimsy-Porpington",
        "Sir Nicholas",
        "Nick"
        ],
        "species": "ghost",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "John Cleese",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Bloody Baron",
        "alternate_names": [],
        "species": "ghost",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Terence Bayler",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Fat Lady",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Elizabeth Spriggs",
        "alternate_actors": [
        "Dawn French"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Pomona Sprout",
        "alternate_names": [
        "Professor Sprout"
        ],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Miriam Margolyes",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Cuthbert Binns",
        "alternate_names": [
        "Professor Binns"
        ],
        "species": "ghost",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Emeric the Evil",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Uric the Oddball",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Filius Flitwick",
        "alternate_names": [
        "Professor Flitwick"
        ],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Warwick Davis",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Madam Hooch",
        "alternate_names": [
        "Rolanda Hooch"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "yellow",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Zoë Wanamaker",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Oliver Wood",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Sean Biggerstaff",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gregory the Smarmy",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Wizard Baruffio",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Angelina Johnson",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Danielle Tabor",
        "alternate_actors": [
        "Tiana Benjamin"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Marcus Flint",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Jamie Yeates",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Alicia Spinet",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Leilah Sutherland",
        "alternate_actors": [
        "Rochelle Douglas"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Katie Bell",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Emily Dale",
        "alternate_actors": [
        "Georgina Leonidas"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Adrian Pucey",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Scot Fearn",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Miles Bletchley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "David Churchyard",
        "alternate_actors": [
        "Amy Puglia"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Terrence Higgs",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Will Theakston",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fluffy",
        "alternate_names": [],
        "species": "three-headed dog",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Nicolas Flamel",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Brontis Jodorowsky",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Gellert Grindelwald",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "blue",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jamie Campbell Bower",
        "alternate_actors": [
        "Michael Byrne",
        "Johnny Depp",
        "Mads Mikkelsen"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Norberta",
        "alternate_names": [],
        "species": "dragon",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "orange",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ronan",
        "alternate_names": [],
        "species": "centaur",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bane",
        "alternate_names": [],
        "species": "centaur",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jason Piper",
        "alternate_actors": [
        "Nuno Silva"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Firenze",
        "alternate_names": [
        "Professor Firenze"
        ],
        "species": "centaur",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "blue",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Ray Fearon",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Elfrick the Eager",
        "alternate_names": [],
        "species": "goblin",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Perenelle Flamel",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Bertie Bott",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dobby",
        "alternate_names": [],
        "species": "house-elf",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "green",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Toby Jones",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Mr Mason",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jim Norton",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mrs Mason",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Veronica Clifford",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Perkins",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "white",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Celestina Warbeck",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "larch",
        "core": "phoenix feather",
        "length": 10.5
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gilderoy Lockhart",
        "alternate_names": [
        "Professor Lockhart"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "blue",
        "hairColour": "blond",
        "wand": {
        "wood": "cherry",
        "core": "dragon heartstring",
        "length": 9
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Kenneth Branagh",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mundungus Fletcher",
        "alternate_names": [
        "Dung"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "ginger",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Andy Linden",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mr Borgin",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Edward Tudor-Pole",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mr Granger",
        "alternate_names": [
        "Wendell Wilkins"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Tom Knight",
        "alternate_actors": [
        "Ian Kelly"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mrs Granger",
        "alternate_names": [
        "Monica Wilkins"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Heather Bleasdale",
        "alternate_actors": [
        "Michelle Fairley"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dr Filibuster",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Colin Creevey",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Hugh Mitchell",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Gladys Gudgeon",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Veronica Smethley",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Patrick Delaney-Podmore",
        "alternate_names": [
        "Sir Patrick Delaney-Podmore"
        ],
        "species": "ghost",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Z. Nettles",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "D.J. Prod",
        "alternate_names": [
        "Demetrius J. Prod"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Chris Wilson",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Elsie Prod",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Moaning Myrtle",
        "alternate_names": [
        "Myrtle Elizabeth Warren"
        ],
        "species": "ghost",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Shirley Henderson",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Godric Gryffindor",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Rowena Ravenclaw",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Helga Hufflepuff",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Salazar Slytherin",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Madame Pince",
        "alternate_names": [
        "Irma Pince"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Sally Mortemore",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Milicent Bullstroude",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Helen Stuart",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ernie Macmillan",
        "alternate_names": [
        "Ernest Macmillan"
        ],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "boar",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Louis Doyle",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Armando Dippet",
        "alternate_names": [
        "Professor Dippet"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "white",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Alfred Burke",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Penelope Clearwater",
        "alternate_names": [
        "Penny"
        ],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Gemma Padley",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Cornelius Fudge",
        "alternate_names": [
        "Minister Cornelius Oswald Fudge"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Robert Hardy",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Aragog",
        "alternate_names": [],
        "species": "acromantula",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "white",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Julian Glover",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Mosag",
        "alternate_names": [],
        "species": "acromantula",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "black",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Stanley Shunpike",
        "alternate_names": [
        "Stan"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Lee Ingleby",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ernest Prang",
        "alternate_names": [
        "Ernie"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jimmy Gardner",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Madam Marsh",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Florean Fortescue",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Sir Cadogan",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Paul Whitehouse",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Sybill Trelawney",
        "alternate_names": [
        "Sybill Patricia Trelawney",
        "Professor Trelawney"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Emma Thompson",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Buckbeak",
        "alternate_names": [
        "Beaky",
        "Witherwings"
        ],
        "species": "hippogriff",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "orange",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Peter Pettigrew",
        "alternate_names": [
        "Wormtail",
        "Scabbers",
        "Wormy"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "chestnut",
        "core": "dragon heartstring",
        "length": 9.25
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Timothy Spall",
        "alternate_actors": [
        "Charles Hughes"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Madam Rosmerta",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Julie Christie",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Derek",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Septima Vector",
        "alternate_names": [
        "Professor Vector"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Cassius Warrington",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Ashley Hull",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Graham Montague",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Peregrine Derrick",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Lucian Bole",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Walden Macnair",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Peter Best",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Franc Bryce",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Eric Sykes",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Dot",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Bertha Jorkins",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Barty Crouch",
        "alternate_names": [
        "Bartemius Crouch Senior"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Roger Lloyd-Pack",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Ludo Bagman",
        "alternate_names": [
        "Ludovic Bagman"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "blue",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Amos Diggory",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jeff Rawle",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mr Roberts",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mr Payne",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Basil",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Archie Aymslowe",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Cuthbert Mockridge",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gilbert Wimple",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Arnold Peasegood",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Broderick Bode",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Saul Croaker",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ali Bashir",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Victor Krum",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "dark",
        "hairColour": "dark",
        "wand": {
        "wood": "hornbeam",
        "core": "dragon heartstring",
        "length": 10.25
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Stanislav Ianevski",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Winky",
        "alternate_names": [],
        "species": "house-elf",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Narcissa Malfoy",
        "alternate_names": [
        "Cissy"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Helen McCrory",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Vasily Dimitrov",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Clara Ivanova",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Lev Zograf",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Alexei Levski",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Pyotr Vulchanov",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ivan Volkov",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Connolly",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Barry Ryan",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Troy",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mullet",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Moran",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Quigley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Aidan Lynch",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Hassan Mostafa",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dennis Creevey",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Aurora Sinistra",
        "alternate_names": [
        "Professor Sinistra"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Stewart Ackerley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Malcolm Baddock",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Eleanor Branstone",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Owen Cauldwell",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Emma Dobbs",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Laura Madley",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Natalie McDonald",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Graham Pritchard",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Orla Quirke",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Kevin Whitby",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Eloise Midgen",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Samantha Clinch",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Alastor Moody",
        "alternate_names": [
        "Professor Moody",
        "Mad-Eye"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "dark",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Brendan Gleeson",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Madame Maxime",
        "alternate_names": [
        "Olympe Maxime"
        ],
        "species": "half-giant",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Frances de la Tour",
        "alternate_actors": [
        "Ian Whyte"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Igor Karkaroff",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "blue",
        "hairColour": "silver",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Predrag Bjelac",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Poliakoff",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fawcett",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Alex Argenti",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Summers",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fleur Delacour",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "blue",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Clémence Poésy",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gregorovic",
        "alternate_names": [
        "Mykew Gregorovitch"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "white",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Rade Šerbedžija",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Rita Skeeter",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Miranda Richardson",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Stebbins",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Wilhelmina Grubbly-Plank",
        "alternate_names": [
        "Professor Grubbly-Plank"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Apple Brook",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bozo",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Peter O'Farrell",
        "alternate_actors": [
        "Robert Wilfort"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Evan Rosier",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Wilkes",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Avery",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Richard Rosson",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Antonin Dolohov",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "dark",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Arben Bajraktaraj",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Travers",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Tav MacDougall",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Marlene McKinnon",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Mulciber",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Augustus Rookwood",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Richard Trinder",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Frank Longbottom",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "James Payton",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Alice Longbottom",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "white",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Lisa Wood ",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Violet",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Apollyon Pringle",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ogg",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mafalda Hopkirk",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "hazel",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jessica Hynes",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Nymphadora Tonks",
        "alternate_names": [
        "Dora",
        "Nymphadora Lupin"
        ],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Natalia Tena",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Elphias Doge",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "blue",
        "hairColour": "silver",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Peter Cartwright",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dedalus Diggle",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "David Brett",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Sturgis Podmore",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Hestia Jones",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ragnok",
        "alternate_names": [],
        "species": "goblin",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Alphard Black",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Regulus Black",
        "alternate_names": [
        "Regulus Arcturus Black"
        ],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Tom Moorcroft",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Phineas Nigelus Black",
        "alternate_names": [
        "Professor Phineas Nigellus Black"
        ],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "John Atterbury",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Araminta Meliflua Black",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Elladora Black",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Andromeda Tonks",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ted Tonks",
        "alternate_names": [
        "Edward"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Rodolphus Lestrange",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Rabastan Lestrange",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Eric Munch",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bob",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Nicholas Blane",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bengie Fenwick",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Edgar Bones",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Cliff Lanning",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Amelia Bones",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Sian Thomas",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Caradoc Dearborn",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Gideon Prewett",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Fabian Prewett",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Aberforth Dumbledore",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "blue",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "goat",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jim McManus",
        "alternate_actors": [
        "Ciarán Hinds"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dorcas Meadowes",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Algie Longbottom",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Anthony Goldstein",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Stubby Boardman",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Doris Purkiss",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Euan Abercrombie",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Rose Zeller",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Patricia Stimpson",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Kenneth Towler",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Vicky Frobisher",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Geoffrey Hooper",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Cassandra Trelawney",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Michael Corner",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Ryan Nelson",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Zacharias Smith",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Nick Shirm",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Barnabas the Barmy",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Karkus",
        "alternate_names": [],
        "species": "giant",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Golgomath",
        "alternate_names": [],
        "species": "giant",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fridwulfa",
        "alternate_names": [],
        "species": "giant",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Andrew Kirke",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Jack Sloper",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Everard",
        "alternate_names": [
        "Professor Everard"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Sam Beazley",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Dilys Derwent",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "silver",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Hippocrates Smethwyck",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Augustus Pye",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Urquhart Rackharrow",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Willy Widdershins",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Agnes",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Miriam Strout",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Madam Puddifoot",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Summerby",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Marietta Edgecombe",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Madam Edgecombe",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "John Dawlish",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Richard Leaf",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bradley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Roger Davies",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Henry Lloyd-Hughes",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Grawp",
        "alternate_names": [],
        "species": "giant",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "green",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Tony Maudsley",
        "alternate_actors": [
        "William Todd-Jones"
        ],
        "alive": true,
        "image": ""
        },
        {
        "name": "Griselda Marchbanks",
        "alternate_names": [
        "Madam Professor Griselda Marchbanks"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Eddie Carmichael",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Daphne Greengrass",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Tofty",
        "alternate_names": [
        "Professor Tofty"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "brown",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Tiberius Ogden",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Pierre Bonaccord",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Stubby Boardman",
        "alternate_names": [
        "Sirius Black"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Magorian",
        "alternate_names": [],
        "species": "centaur",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Michael Wildman",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Emmeline Vance",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Brigitte Millar",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Herbert Chorley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Rufus Scrimgeour",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "yellowish",
        "hairColour": "tawny",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Bill Nighy",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Corban Yaxley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "blue",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Peter Mullan",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fenrir Greyback",
        "alternate_names": [],
        "species": "werewolf",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Dave Legeno",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dirk Cresswell",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Barnabas Cuffe",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Roger C. Bailey",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ambrosius Flume",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "bald",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gwenog Jones",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "brown",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Arkie Philpott",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Verity",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Romilda Vane",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "dark",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Anna Shaffer",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Cormac McLaggen",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Freddie Stroma",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Marcus Belby",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Robert Knox",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Damocles Belby",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Tiberius",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Bertie Higgs",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Proudfoot",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Savage",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Humphrey Belcher",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bob Ogden",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Morfin Gaunt",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "dark",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Marvolo Gaunt",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "brown",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Merope Gaunt",
        "alternate_names": [
        "Merope Riddle"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "dull",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Cecilia",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Tom Riddle",
        "alternate_names": [
        "Tom Riddle Senior"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "dark",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Demelza Robins",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Katy Huxley-Golden",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Jimmy Peakes",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ritchie Coote",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Ashley Virgil",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Melinda Bobbin",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Leanne",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Isabella Laughland",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Caractacus Burke",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Billy Stubbs",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Amy Benson",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dennis Bishop",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mrs Cole",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Amelda Brown",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Eric Whalley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "muggle",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Vaisey",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "dark",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Harper",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Urquhart",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Eldred Worple",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Paul Ritter",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Sangwini",
        "alternate_names": [],
        "species": "vampire",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "dark",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Charlie Bennison",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gawain Robards",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Fergus",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Wilkie Twycross",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Cadwallader",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Galatea Merrythought",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Hepzibah Smith",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Hokey",
        "alternate_names": [],
        "species": "house-elf",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Octavius Pepper",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Bertram Aubrey",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Eileen Prince",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Amycus Carrow",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Ralph Ineson",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Alecto Carrow",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Suzie Toase",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gibbon",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Tobias Snape",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Pius Thicknesse",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Guy Henry",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Charity Burbage",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": true,
        "actor": "Carolyn Pickles",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Percival Dumbledore",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Kendra Dumbledore",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "dark",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Ariana Dumbledore",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Hebe Beardsall",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Betty Braithwaite",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Apolline Delacour",
        "alternate_names": [],
        "species": "half-human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-veela",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gabrielle Delacour",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "quarter-veela",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Angelica Mandy",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Monsieur Delacour",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Dragomir Gorgovitch",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Xenophilius Lovegood",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Ravenclaw",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "white",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Rhys Ifans",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Muriel",
        "alternate_names": [
        "Aunt Muriel"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "grey",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Matyelok Gibbs",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bilius",
        "alternate_names": [
        "Uncle Bilius"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Thorfinn Rowle",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Rod Hunt",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Reg Cattermole",
        "alternate_names": [
        "Reginald Cattermole"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Steffan Rhodri",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Albert Runcorn",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "David O'Hara",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Arkie Alderton",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Mary Cattermole",
        "alternate_names": [
        "Mary Elizabeth Cattermole"
        ],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "muggleborn",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "cherry",
        "core": "unicorn hair",
        "length": 8.75
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Kate Fleetwood",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Maisie Cattermole",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ellie Cattermole",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Alfred Cattermole",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Gornuk",
        "alternate_names": [],
        "species": "goblin",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Bowman Wright",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Ivor Dillonsby",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Enid Smeek",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Egbert the Egregious",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Godelot",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Hereward",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Loxias",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Barnabas Deverill",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Arcus",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Livius",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Antioch Peverell",
        "alternate_names": [
        "First Brother"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Cadmus Peverell",
        "alternate_names": [
        "Second Brother"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Ignotus Peverell",
        "alternate_names": [
        "Third Brother"
        ],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Selwyn",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Scabior",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Nick Moran",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Ragnuk the First",
        "alternate_names": [
        "King Ragnuk the First"
        ],
        "species": "goblin",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Ted Lupin",
        "alternate_names": [
        "Edward Remus Teddy Lupin"
        ],
        "species": "human",
        "gender": "male",
        "house": "Hufflepuff",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Luke Newberry",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Marius",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Bogrod",
        "alternate_names": [],
        "species": "goblin",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": false,
        "ancestry": "",
        "eyeColour": "black",
        "hairColour": "white",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Jon Key",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "The Grey Lady",
        "alternate_names": [
        "Helena Ravenclaw"
        ],
        "species": "ghost",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Nina Young",
        "alternate_actors": [
        "Kelly Macdonald"
        ],
        "alive": false,
        "image": ""
        },
        {
        "name": "Dexter Fortescue",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": false,
        "image": ""
        },
        {
        "name": "Lily Potter",
        "alternate_names": [
        "Lily Luna Potter"
        ],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": false,
        "hogwartsStaff": false,
        "actor": "Daphne de Beistegui",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "James Potter",
        "alternate_names": [
        "James Sirius Potter"
        ],
        "species": "human",
        "gender": "male",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Will Dunn",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Albus Severus Potter",
        "alternate_names": [
        "Al"
        ],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "green",
        "hairColour": "black",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Arthur Bowen",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Rose Weasley",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "Gryffindor",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "red",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Helena Barlow",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Hugo Weasley",
        "alternate_names": [],
        "species": "human",
        "gender": "male",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "half-blood",
        "eyeColour": "",
        "hairColour": "brown",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Ryan Turner",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Scorpius Malfoy",
        "alternate_names": [
        "Scorpius Hyperion Malfoy"
        ],
        "species": "human",
        "gender": "male",
        "house": "Slytherin",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "pure-blood",
        "eyeColour": "grey",
        "hairColour": "blond",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "Bertie Gilbert",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        },
        {
        "name": "Victoire Weasley",
        "alternate_names": [],
        "species": "human",
        "gender": "female",
        "house": "",
        "dateOfBirth": "",
        "yearOfBirth": "",
        "wizard": true,
        "ancestry": "",
        "eyeColour": "",
        "hairColour": "blonde",
        "wand": {
        "wood": "",
        "core": "",
        "length": ""
        },
        "patronus": "",
        "hogwartsStudent": true,
        "hogwartsStaff": false,
        "actor": "",
        "alternate_actors": [],
        "alive": true,
        "image": ""
        }
        ]);
})

// ruta de tipo GET llamada /visitas que retorna un texto con contandor
app.get('/visitas', (req, res) =>{
    visitas=visitas+1;
    res.send(`La cantidad de visitas: ${visitas}`);
})


// ruta de tipo GET llamada /fyh que retorna un json con la fecha
let fyh = new Date().toLocaleString();
app.get('/fyh', (req, res) => res.json({ fyh }));

// cualquier otra ruta de cualquier tipo por el all distinta a las anteriores  
// (el * es un comodin)
app.all('*', (req, res) => res.send('Ruta no válida!'));


const server = app.listen( PORT, () => console.log(`Server listening on PORT ${PORT}`));
server.on('error', err => console.log(`Error on server ${err}`));