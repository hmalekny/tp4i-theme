!function(a){var i={};function s(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return a[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=a,s.c=i,s.d=function(a,i,e){s.o(a,i)||Object.defineProperty(a,i,{enumerable:!0,get:e})},s.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,i){if(1&i&&(a=s(a)),8&i)return a;if(4&i&&"object"==typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&i&&"string"!=typeof a)for(var t in a)s.d(e,t,function(i){return a[i]}.bind(null,t));return e},s.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return s.d(i,"a",i),i},s.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},s.p="/",s(s.s=10)}([function(a,i,s){"use strict";var e=Object.prototype.hasOwnProperty;function t(a,i){return Array.isArray(a)?function(a,i){for(var s,e="",c="",l=Array.isArray(i),r=0;r<a.length;r++)(s=t(a[r]))&&(l&&i[r]&&(s=n(s)),e=e+c+s,c=" ");return e}(a,i):a&&"object"==typeof a?function(a){var i="",s="";for(var t in a)t&&a[t]&&e.call(a,t)&&(i=i+s+t,s=" ");return i}(a):a||""}function c(a){if(!a)return"";if("object"==typeof a){var i="";for(var s in a)e.call(a,s)&&(i=i+s+":"+a[s]+";");return i}return a+""}function l(a,i,s,e){return!1!==i&&null!=i&&(i||"class"!==a&&"style"!==a)?!0===i?" "+(e?a:a+'="'+a+'"'):("function"==typeof i.toJSON&&(i=i.toJSON()),"string"==typeof i||(i=JSON.stringify(i),s||-1===i.indexOf('"'))?(s&&(i=n(i))," "+a+'="'+i+'"'):" "+a+"='"+i.replace(/'/g,"&#39;")+"'"):""}i.merge=function a(i,s){if(1===arguments.length){for(var e=i[0],t=1;t<i.length;t++)e=a(e,i[t]);return e}for(var l in s)if("class"===l){var r=i[l]||[];i[l]=(Array.isArray(r)?r:[r]).concat(s[l]||[])}else if("style"===l){var r=c(i[l]);r=r&&";"!==r[r.length-1]?r+";":r;var n=c(s[l]);n=n&&";"!==n[n.length-1]?n+";":n,i[l]=r+n}else i[l]=s[l];return i},i.classes=t,i.style=c,i.attr=l,i.attrs=function(a,i){var s="";for(var r in a)if(e.call(a,r)){var n=a[r];if("class"===r){n=t(n),s=l(r,n,!1,i)+s;continue}"style"===r&&(n=c(n)),s+=l(r,n,!1,i)}return s};var r=/["&<>]/;function n(a){var i=""+a,s=r.exec(i);if(!s)return a;var e,t,c,l="";for(e=s.index,t=0;e<i.length;e++){switch(i.charCodeAt(e)){case 34:c="&quot;";break;case 38:c="&amp;";break;case 60:c="&lt;";break;case 62:c="&gt;";break;default:continue}t!==e&&(l+=i.substring(t,e)),t=e+1,l+=c}return t!==e?l+i.substring(t,e):l}i.escape=n,i.rethrow=function a(i,e,t,c){if(!(i instanceof Error))throw i;if(!("undefined"==typeof window&&e||c))throw i.message+=" on line "+t,i;try{c=c||s(13).readFileSync(e,"utf8")}catch(s){a(i,null,t)}var l=3,r=c.split("\n"),n=Math.max(t-l,0),d=Math.min(r.length,t+l);var l=r.slice(n,d).map(function(a,i){var s=i+n+1;return(s==t?"  > ":"    ")+s+"| "+a}).join("\n");i.path=e;i.message=(e||"Pug")+":"+t+"\n"+l+"\n\n"+i.message;throw i}},function(a,i,s){var e=s(0);a.exports=function(a){var i,t="",c=a||{};return function(a){var c=s(7);t=t+'<header><div class="container"><a class="header-logo" href="/"><img'+e.attr("src",a(s(2)),!0,!0)+' alt="شفافیت برای ایران"></a><ul class="header-menu">',function(){var a=c;if("number"==typeof a.length)for(var s=0,l=a.length;s<l;s++){var r=a[s];t=t+'<li class="header-item"><a href="#"'+e.attr("title",r.title,!0,!0)+"><i"+e.attr("class",e.classes(["icon icon-"+r.icon],[!0]),!1,!0)+"></i><span>"+e.escape(null==(i=r.title)?"":i)+"</span></a></li>"}else for(var s in l=0,a)l++,r=a[s],t=t+'<li class="header-item"><a href="#"'+e.attr("title",r.title,!0,!0)+"><i"+e.attr("class",e.classes(["icon icon-"+r.icon],[!0]),!1,!0)+"></i><span>"+e.escape(null==(i=r.title)?"":i)+"</span></a></li>"}.call(this),t+="</ul></div></header>"}.call(this,"asset"in c?c.asset:"undefined"!=typeof asset?asset:void 0),t}},function(a,i){a.exports="../images/logo.svg?5ce9024fe459c9086f77f8efa938260c"},function(a,i,s){var e=s(0);a.exports=function(a){var i,s="";return s+='<section class="subscribe-wrapper"><div class="container"><div class="row"><div class="col-12 col-md-8 offset-md-2 col-xl-6 offset-xl-3"><form class="text-center subscribe-form" action="/"><div class="subscribe-title">اولین نفر باشید که از شفافیت مطلع می‌شوید</div><div class="input-group mb3"><input class="form-control" type="email" name="email" placeholder="ایمیل خود را وارد کنید"><div class="input-group-append"><button class="btn btn-info" type="submit">اشتراک</button></div></div><small class="form-text text-muted mt-2">برای ایمیل شما اسپم نفرستاده و برای حریم خصوصی شما احترام قائلیم.</small></form></div></div></div></section><footer><div class="footer-about"><div class="container"><div class="row align-items-center"><div class="col-4 col-md-2"><a class="footer-logo" href="#" title="شفافیت برای ایران"><i class="icon icon-logo"></i></a></div><div class="col-6 offset-2 col-md-3 offset-md-0"><div class="footer-social-links">',function(){var a=["instagram","bale","telegram","soroush","twitter","aparat"];if("number"==typeof a.length)for(var i=0,t=a.length;i<t;i++){var c=a[i];s=s+'<a href="#"'+e.attr("title",c,!0,!0)+"><i"+e.attr("class",e.classes(["icon icon-"+c],[!0]),!1,!0)+"></i></a>"}else for(var i in t=0,a)t++,c=a[i],s=s+'<a href="#"'+e.attr("title",c,!0,!0)+"><i"+e.attr("class",e.classes(["icon icon-"+c],[!0]),!1,!0)+"></i></a>"}.call(this),s+='</div></div><div class="col-12 col-md-7"><div class="footer-desc mt-4 mt-md-0">«شفافیت برای ایران» مجموعه ‌ای است غیر انتفاعی راسخ پیرامون ضرورت تحقق مفهوم کلان و زیر ساختی «شفافیت» در سطوح مختلف حکومت،\n به عنوان «ساده‌ترین، سریع‌ترین، کم هزینه‌ترین و کارآمدترین» راهکار برای حل مشکلات بنیادین حکمرانی، از سال 1393 کار خود را آغاز کرده است.</div></div></div></div></div><div class="footer-menu"><div class="container"><ul>',function(){var a=["درباره ما","ارتباط با ما","بسته‌های رسانه‌ای","حمایت از ما","شبکه نخبگان"];if("number"==typeof a.length)for(var t=0,c=a.length;t<c;t++){var l=a[t];s=s+'<li><a href="#"'+e.attr("title",l,!0,!0)+">"+e.escape(null==(i=l)?"":i)+"</a></li>"}else for(var t in c=0,a)c++,l=a[t],s=s+'<li><a href="#"'+e.attr("title",l,!0,!0)+">"+e.escape(null==(i=l)?"":i)+"</a></li>"}.call(this),s+='</ul></div></div><div class="footer-copyright"><div class="container d-flex flex-wrap"><div><i class="icon icon-cc ml-2"></i><i class="icon icon-nc ml-2"></i><i class="icon icon-by ml-3"></i><span>بسط و گسترش مطالب شفافیت برای ایران برای اهداف غیر تجاری و با لینک به منبع باعث خرسندی ماست.</span></div><div class="mr-auto"><span>با افتخار طراحی شده توسط<a href="http://pixeler.ir" title="پیکسلر"> پیکسلر</a> در ایران</span><i class="icon icon-map text-info mr-2"></i></div></div></div></footer>'}},,,,function(a){a.exports=[{title:"سامانه‌ها",icon:"solar"},{title:"بلاگ",icon:"blog"},{title:"پروژه‌ها",icon:"projects"},{title:"آکادمی",icon:"academy"},{title:"نقشه",icon:"pin"},{title:"انجمن",icon:"forum"}]},,,function(a,i,s){s(11),s(27),s(12),s(14),a.exports=s(18)},function(a,i){},function(a,i,s){var e=s(0);a.exports=function(a){var i,t="",c=a||{};return function(c,l,r){void 0===r&&(t+='<lang>= "fa";</lang>'),t=t+"<!DOCTYPE html><html"+(e.attr("lang","fa"==r?"fa-IR":"en",!0,!0)+e.attr("dir","fa"==r?"rtl":"ltr",!0,!0))+"><head>","fa"==r&&(t=t+"<title>"+e.escape(null==(i="Blog page")?"":i)+" | "+e.escape(null==(i=c.title)?"":i)+"</title>"),t=t+'<meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta charset="utf-8"><link rel="stylesheet"'+e.attr("href",l.baseUrl+"assets/css/main.css"+l.assetsHash,!0,!0)+' type="text/css"></head><body'+e.attr("class",e.classes([[].join(" ")],[!0]),!1,!0)+">"+(null==(i=s(1).call(this,a))?"":i)+e.escape(null==(i="\n\n")?"":i)+'\x3c!-- content--\x3e<div class="main-content"><section class="blog-banners mt-3"><div class="container"><div class="row"><div class="col-md-6"><div class="banner-overlay banner-overlay-caption banner-overlay-caption-big"><img src="./demo-images/banner-8.jpg" alt="banner"><a href="#" title="title"><span>میزان مشارکت در رأی گیری و حضور و غیاب نمایندگان داوطلب منتشر شد</span></a></div></div><div class="col-md-6"><div class="row"><div class="col-6"><div class="banner-overlay banner-overlay-caption"><img src="./demo-images/banner-3.jpg" alt="banner"><a href="#" title="title"><span>بیانیه شفافیت برای ایران پیرامون سامانه شفافیت</span></a></div></div><div class="col-6"><div class="banner-overlay banner-overlay-caption"><img src="./demo-images/banner-7.jpg" alt="banner"><a href="#" title="title"><span>بیانیه شفافیت برای ایران پیرامون سامانه شفافیت</span></a></div></div><div class="col-6"><div class="banner-overlay banner-overlay-caption"><img src="./demo-images/banner-6.jpg" alt="banner"><a href="#" title="title"><span>بیانیه شفافیت برای ایران پیرامون سامانه شفافیت</span></a></div></div><div class="col-6"><div class="banner-overlay banner-overlay-caption"><img src="./demo-images/banner-5.jpg" alt="banner"><a href="#" title="title"><span>بیانیه شفافیت برای ایران پیرامون سامانه شفافیت</span></a></div></div></div></div></div></div></section><section class="container mt-5"><div class="legend"><div class="legend-title text-dark">مجلس شورای اسلامی</div><div class="legend-link"><a class="text-gray" href="#">دیدن همه<i class="icon icon-left"> </i></a></div></div><div class="owl-carousel" data-items="3">',function(){var a=[1,2,3,4];if("number"==typeof a.length)for(var i=0,s=a.length;i<s;i++){var c=a[i];t=t+'<div class="card-blog-min"><a href="#" title="title"> <div class="card-cover"><img'+e.attr("src","./demo-images/post-md-"+c+".jpg",!0,!0)+'></div><div class="card-title">تأثیر فرهنگ ژاپن بر اقتصاد مقاومتی</div><div class="card-details"><span persian>3 ساعت پیش - 5 دقیقه برای خواندن</span><span class="text-dark"><i class="icon icon-comment ml-1 mr-3"></i><span persian>12 دیدگاه</span></span></div><div class="card-desc">سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\nبه پایان رسد و زمان مورد نیاز شامل حروف چینی دستاوردهای اصلی و جوابگوی تایپ ...</div></a></div>'}else for(var i in s=0,a)s++,c=a[i],t=t+'<div class="card-blog-min"><a href="#" title="title"> <div class="card-cover"><img'+e.attr("src","./demo-images/post-md-"+c+".jpg",!0,!0)+'></div><div class="card-title">تأثیر فرهنگ ژاپن بر اقتصاد مقاومتی</div><div class="card-details"><span persian>3 ساعت پیش - 5 دقیقه برای خواندن</span><span class="text-dark"><i class="icon icon-comment ml-1 mr-3"></i><span persian>12 دیدگاه</span></span></div><div class="card-desc">سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\nبه پایان رسد و زمان مورد نیاز شامل حروف چینی دستاوردهای اصلی و جوابگوی تایپ ...</div></a></div>'}.call(this),t+='</div></section><section class="container mt-5"><div class="legend"><div class="legend-title text-dark">پرونده‌ها</div><div class="legend-link"><a class="text-gray" href="#">دیدن همه<i class="icon icon-left"> </i></a></div></div><div class="row"><div class="col-6 col-md-4"><div class="card-case"><div class="card-cover"><img src="./demo-images/post-md-2.jpg"><div class="card-title">جمع نویسی</div></div><div class="card-rate bg-success">خوب</div></div></div><div class="col-6 col-md-4"><div class="card-case"><div class="card-cover"><img src="./demo-images/post-md-3.jpg"><div class="card-title">شفافیت حضور و غیاب</div></div><div class="card-rate bg-warning text-dark">متوسط</div></div></div><div class="col-6 col-md-4"><div class="card-case"><div class="card-cover"><img src="./demo-images/post-md-4.jpg"><div class="card-title">مبانی دینی شفافیت</div></div><div class="card-rate bg-danger">ضعیف</div></div></div></div></section><section class="bg-gray-100 mt-5 py-5"><div class="container"><div class="legend"><div class="legend-title text-dark">حاکمیت باز</div><div class="legend-link"><a class="text-gray" href="#">دیدن همه<i class="icon icon-left"></i></a></div></div><div class="row">',function(){var a=[1,2,3];if("number"==typeof a.length)for(var i=0,s=a.length;i<s;i++)t+='<div class="col-12 col-lg-6"><div class="card-horiz border"><a href="#"><div class="card-cover"><img src="./demo-images/post-md-2.jpg"></div><div class="card-content"><div class="card-title">سامانه قراردادها به طور آزمایشی کار خود را آغاز کرد</div><div class="card-details" persian>3 ساعت پیش - 5 دقیقه برای خواندن</div></div></a></div></div><div class="col-12 col-lg-6"><div class="card-horiz border"><a href="#"><div class="card-cover"><img src="./demo-images/post-md-4.jpg"></div><div class="card-content"><div class="card-title">سامانه قراردادها به طور آزمایشی کار خود را آغاز کرد</div><div class="card-details" persian>3 ساعت پیش - 5 دقیقه برای خواندن</div></div></a></div></div>';else for(var i in s=0,a)s++,t+='<div class="col-12 col-lg-6"><div class="card-horiz border"><a href="#"><div class="card-cover"><img src="./demo-images/post-md-2.jpg"></div><div class="card-content"><div class="card-title">سامانه قراردادها به طور آزمایشی کار خود را آغاز کرد</div><div class="card-details" persian>3 ساعت پیش - 5 دقیقه برای خواندن</div></div></a></div></div><div class="col-12 col-lg-6"><div class="card-horiz border"><a href="#"><div class="card-cover"><img src="./demo-images/post-md-4.jpg"></div><div class="card-content"><div class="card-title">سامانه قراردادها به طور آزمایشی کار خود را آغاز کرد</div><div class="card-details" persian>3 ساعت پیش - 5 دقیقه برای خواندن</div></div></a></div></div>'}.call(this),t+='</div></div></section><section class="container mt-5"><div class="legend"><div class="legend-title">آخرین مطالب بلاگ</div></div><div class="row"><div class="col-12 col-md-5">',function(){var a=[1,2];if("number"==typeof a.length)for(var i=0,s=a.length;i<s;i++)t+='<div class="card-blog"><div class="card-cover"><a href="#"> <img src="./demo-images/post-md-2.jpg"></a></div><div class="card-categories"><a class="btn btn-sm btn-outline-dark font-weight-bold" href="#">حکومت باز</a></div><div class="card-details"><span persian>3 ساعت پیش - 5 دقیقه برای خواندن</span><span class="text-dark"><i class="icon icon-comment ml-1 mr-3"></i><span persian>12 دیدگاه</span></span></div><a class="card-title" href="#">میزان مشارکت در رأی گیری و حضور و غیاب نمایندگان داوطلب منتشر شد</a><div class="card-desc">حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد\nتا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.\nدر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\nو زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div><a class="card-more" href="#">خواندن بیشتر<i class="icon icon-left"></i></a></div>';else for(var i in s=0,a)s++,t+='<div class="card-blog"><div class="card-cover"><a href="#"> <img src="./demo-images/post-md-2.jpg"></a></div><div class="card-categories"><a class="btn btn-sm btn-outline-dark font-weight-bold" href="#">حکومت باز</a></div><div class="card-details"><span persian>3 ساعت پیش - 5 دقیقه برای خواندن</span><span class="text-dark"><i class="icon icon-comment ml-1 mr-3"></i><span persian>12 دیدگاه</span></span></div><a class="card-title" href="#">میزان مشارکت در رأی گیری و حضور و غیاب نمایندگان داوطلب منتشر شد</a><div class="card-desc">حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد\nتا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.\nدر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\nو زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div><a class="card-more" href="#">خواندن بیشتر<i class="icon icon-left"></i></a></div>'}.call(this),t+='</div><div class="col-12 col-md-7">',function(){var a=[1,2];if("number"==typeof a.length)for(var i=0,s=a.length;i<s;i++)t+='<div class="card-blog"><div class="card-cover"><a href="#"> <img src="./demo-images/banner-1.jpg"></a></div><div class="card-categories"><a class="btn btn-sm btn-outline-dark font-weight-bold" href="#">قانون گزاری</a></div><div class="card-details"><span persian>3 ساعت پیش - 5 دقیقه برای خواندن</span><span class="text-dark"><i class="icon icon-comment ml-1 mr-3"></i><span persian>12 دیدگاه</span></span></div><a class="card-title" href="#">میزان مشارکت در رأی گیری و حضور و غیاب نمایندگان داوطلب منتشر شد</a><div class="card-desc">حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد\nتا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.\nدر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\nو زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div><a class="card-more" href="#">خواندن بیشتر<i class="icon icon-left"></i></a></div>';else for(var i in s=0,a)s++,t+='<div class="card-blog"><div class="card-cover"><a href="#"> <img src="./demo-images/banner-1.jpg"></a></div><div class="card-categories"><a class="btn btn-sm btn-outline-dark font-weight-bold" href="#">قانون گزاری</a></div><div class="card-details"><span persian>3 ساعت پیش - 5 دقیقه برای خواندن</span><span class="text-dark"><i class="icon icon-comment ml-1 mr-3"></i><span persian>12 دیدگاه</span></span></div><a class="card-title" href="#">میزان مشارکت در رأی گیری و حضور و غیاب نمایندگان داوطلب منتشر شد</a><div class="card-desc">حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد\nتا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.\nدر این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\nو زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div><a class="card-more" href="#">خواندن بیشتر<i class="icon icon-left"></i></a></div>'}.call(this),t=t+'</div></div><div class="col-12 col-md-11 text-center mt-4"><a class="btn btn-warning rounded-pill" href="#">این داستان ادامه دارد ... </a></div></section><div class="my-5 py-5"></div></div>'+(null==(i=s(3).call(this,a))?"":i)+e.escape(null==(i="\n\n")?"":i)+"\x3c!-- vendor include: jquery, bootstrap--\x3e<script"+e.attr("src",l.baseUrl+"assets/js/vendor.js"+l.assetsHash,!0,!0)+"><\/script><script"+e.attr("src",l.baseUrl+"assets/js/main.js"+l.assetsHash,!0,!0)+"><\/script></body></html>"}.call(this,"brand"in c?c.brand:"undefined"!=typeof brand?brand:void 0,"config"in c?c.config:"undefined"!=typeof config?config:void 0,"lang"in c?c.lang:"undefined"!=typeof lang?lang:void 0),t}},function(a,i){},function(a,i,s){var e=s(0);a.exports=function(a){var i,t="",c=a||{};return function(c,l,r,n){var d=[];d.push("homepage");var o=s(7),v=s(15),p=s(16);void 0===n&&(t+='<lang>= "fa";</lang>'),t=t+"<!DOCTYPE html><html"+(e.attr("lang","fa"==n?"fa-IR":"en",!0,!0)+e.attr("dir","fa"==n?"rtl":"ltr",!0,!0))+"><head>","fa"==n&&(t=t+"<title>"+e.escape(null==(i="Home page")?"":i)+" | "+e.escape(null==(i=l.title)?"":i)+"</title>"),t=t+'<meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta charset="utf-8"><link rel="stylesheet"'+e.attr("href",r.baseUrl+"assets/css/main.css"+r.assetsHash,!0,!0)+' type="text/css"></head><body'+e.attr("class",e.classes([d.join(" ")],[!0]),!1,!0)+">"+(null==(i=s(1).call(this,a))?"":i)+e.escape(null==(i="\n\n")?"":i)+'\x3c!-- content--\x3e<div class="main-content"><section id="intro-header"><div class="intro-bg"><i class="icon icon-sun"></i><img class="intro-bg-img"'+e.attr("src",c(s(17)),!0,!0)+' alt="شفافیت برای ایران"></div><div class="container"><a class="intro-logo" href="#" title="شفافیت برای ایران"><img'+e.attr("src",c(s(2)),!0,!0)+' alt="شفافیت برای ایران"></a><h1 class="intro-title">رصد برترین تجربیات شفافیت، با هدف بهره‌مندی در کشور اسلامی‌مان، ایران</h1><a class="btn btn-warning rounded-pill mt-4" href="#">می‌خواهم بیشتر بدانم</a><ul class="intro-menu">',function(){var a=o;if("number"==typeof a.length)for(var s=0,c=a.length;s<c;s++){var l=a[s];t=t+'<li class="intro-item"><a href="#"'+e.attr("title",l.title,!0,!0)+"><i"+e.attr("class",e.classes(["icon icon-"+l.icon],[!0]),!1,!0)+"></i><span>"+e.escape(null==(i=l.title)?"":i)+"</span></a></li>"}else for(var s in c=0,a)c++,l=a[s],t=t+'<li class="intro-item"><a href="#"'+e.attr("title",l.title,!0,!0)+"><i"+e.attr("class",e.classes(["icon icon-"+l.icon],[!0]),!1,!0)+"></i><span>"+e.escape(null==(i=l.title)?"":i)+"</span></a></li>"}.call(this),t+='</ul></div></section><div class="container"><div class="banner-overlay"><img src="./demo-images/banner-1.jpg" alt="banner"><a href="#" title="title">میزان مشارکت در رأی گیری و حضور و غیاب نمایندگان منتشر شد</a></div></div><section class="container mt-5 pt-3 py-5"><div class="legend"><div class="legend-title">آخرین مطالب بلاگ</div></div><div class="row"><div class="col-12 col-lg-8"><div class="row">',function(){var a=p.fixed;if("number"==typeof a.length)for(var s=0,c=a.length;s<c;s++){var l=a[s];t=t+'<div class="col-12 col-sm-6"><div class="card-fixed"><a href="#"><div class="card-cover"><img'+e.attr("src",l.cover,!0,!0)+'></div><div class="card-title-wrapper"><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+"</div></div></a></div></div>"}else for(var s in c=0,a)c++,l=a[s],t=t+'<div class="col-12 col-sm-6"><div class="card-fixed"><a href="#"><div class="card-cover"><img'+e.attr("src",l.cover,!0,!0)+'></div><div class="card-title-wrapper"><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+"</div></div></a></div></div>"}.call(this),t+='</div></div><div class="col-12 col-lg-4 d-flex"><div class="last-post-list-min-wrapper"><div class="last-post-list-min">',function(){var a=[1,2];if("number"==typeof a.length)for(var s=0,c=a.length;s<c;s++)(function(){var a=p.other;if("number"==typeof a.length)for(var s=0,c=a.length;s<c;s++){var l=a[s];t=t+'<div class="card-horiz-min"><a href="#"><div class="card-cover"><img'+e.attr("src",l.cover,!0,!0)+'></div><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+"</div></a></div>"}else for(var s in c=0,a)c++,l=a[s],t=t+'<div class="card-horiz-min"><a href="#"><div class="card-cover"><img'+e.attr("src",l.cover,!0,!0)+'></div><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+"</div></a></div>"}).call(this);else for(var s in c=0,a)c++,function(){var a=p.other;if("number"==typeof a.length)for(var s=0,c=a.length;s<c;s++){var l=a[s];t=t+'<div class="card-horiz-min"><a href="#"><div class="card-cover"><img'+e.attr("src",l.cover,!0,!0)+'></div><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+"</div></a></div>"}else for(var s in c=0,a)c++,l=a[s],t=t+'<div class="card-horiz-min"><a href="#"><div class="card-cover"><img'+e.attr("src",l.cover,!0,!0)+'></div><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+"</div></a></div>"}.call(this)}.call(this),t=t+'</div></div></div></div><a class="btn btn-primary rounded-pill btn-icon-left mt-3" href="#" title="خواندن همه مطالب بلاگ"><span>خواندن همه مطالب بلاگ</span><i class="icon icon-left"></i></a></section><section class="working-wrapper mt-5"><div class="container"><div class="row"><div class="col-12 col-md-6"><div class="card-horiz-icon working-header"><div class="card-cover"><img'+e.attr("src",c(s(2)),!0,!0)+' alt="شفافیت برای ایران"></div><div class="card-content"><div class="card-title">حوزه فعالیت‌ها</div><div class="card-desc">این یک متن الکی است و طراحان برای پر کردن جاهای خالی در طراحی از آن استفاده می‌کنند و ارزشی ندارد.</div></div></div></div>',function(){var a=v;if("number"==typeof a.length)for(var s=0,c=a.length;s<c;s++){var l=a[s];t=t+'<div class="col-12 col-md-6"><div class="card-horiz-icon"><div class="card-cover"><i'+e.attr("class",e.classes(["icon icon-"+l.icon],[!0]),!1,!0)+'></i></div><div class="card-content"><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+'</div><div class="card-desc">'+e.escape(null==(i=l.desc)?"":i)+'</div><div class="card-details"><a class="text-secondary font-weight-bold" href="#">بیشتر بدانید...</a></div></div></div></div>'}else for(var s in c=0,a)c++,l=a[s],t=t+'<div class="col-12 col-md-6"><div class="card-horiz-icon"><div class="card-cover"><i'+e.attr("class",e.classes(["icon icon-"+l.icon],[!0]),!1,!0)+'></i></div><div class="card-content"><div class="card-title">'+e.escape(null==(i=l.title)?"":i)+'</div><div class="card-desc">'+e.escape(null==(i=l.desc)?"":i)+'</div><div class="card-details"><a class="text-secondary font-weight-bold" href="#">بیشتر بدانید...</a></div></div></div></div>'}.call(this),t=t+'</div></div></section><section class="container mt-2 py-5"><div class="legend"><div class="legend-title">سامانه‌ها</div></div><div class="row"><div class="col-12 col-md-4"><div class="banner-overlay banner-overlay-dark mb-3"><img src="./demo-images/banner-5.jpg" alt="banner"><a href="#" title="title">شفافیت قراردادها</a></div></div><div class="col-12 col-md-4"><div class="banner-overlay banner-overlay-dark mb-3"><img src="./demo-images/banner-4.jpg" alt="banner"><a href="#" title="title">جمع نویسی</a></div></div><div class="col-12 col-md-4"><div class="banner-overlay banner-overlay-dark mb-3"><img src="./demo-images/banner-1.jpg" alt="banner"><a href="#" title="title">سامانه رصد تکلیف قانونی</a></div></div></div><a class="btn btn-primary rounded-pill btn-icon-left mt-3" href="#" title="دیدن همه سامانه‌ها"><span>دیدن همه سامانه‌ها</span><i class="icon icon-left"></i></a></section><section class="mt-2 py-5 bg-gray-100"><div class="container"><div class="legend"><div class="legend-title">پروژه‌ها</div></div><div class="row"><div class="col-12 col-md-4 d-flex"><div class="card-horiz-project mb-3"><a href="#"><div class="card-cover"><img src="./demo-images/project-thumb-1.png" alt="project-1"></div><div class="card-title">پروژه مطالعه تعارض منافع در وزارت رفاه</div></a></div></div><div class="col-12 col-md-4 d-flex"><div class="card-horiz-project mb-3"><a href="#"><div class="card-cover"><img src="./demo-images/project-thumb-2.png" alt="project-2"></div><div class="card-title">پروژه تدوین سیاست داده باز برای شهرداری تهران</div></a></div></div><div class="col-12 col-md-4 d-flex"><div class="card-horiz-project mb-3"><a href="#"><div class="card-cover"><img src="./demo-images/project-thumb-3.png" alt="project-3"></div><div class="card-title">پروژه نحوه سنجش شفافیت در نهاهای زیرمجموعه رهبری</div></a></div></div></div><a class="btn btn-primary rounded-pill btn-icon-left mt-3" href="#" title="دیدن همه پروژه‌ها"><span>دیدن همه پروژه‌ها</span><i class="icon icon-left"></i></a></div></section><section class="container py-5 mt-3"><div class="row"><div class="col-12 col-md-6"><div class="banner-overlay banner-overlay-btn mb-3"><img src="./demo-images/banner-2.jpg" alt="banner"><a href="#" title="title"><span>نقشه شفافیت</span></a></div></div><div class="col-12 col-md-6"><div class="banner-overlay banner-overlay-btn mb-3"><img src="./demo-images/banner-3.jpg" alt="banner"><a href="#" title="title"><span>انجمن شفافیت</span></a></div></div></div></section></div>'+(null==(i=s(3).call(this,a))?"":i)+e.escape(null==(i="\n\n")?"":i)+"\x3c!-- vendor include: jquery, bootstrap--\x3e<script"+e.attr("src",r.baseUrl+"assets/js/vendor.js"+r.assetsHash,!0,!0)+"><\/script><script"+e.attr("src",r.baseUrl+"assets/js/main.js"+r.assetsHash,!0,!0)+"><\/script></body></html>"}.call(this,"asset"in c?c.asset:"undefined"!=typeof asset?asset:void 0,"brand"in c?c.brand:"undefined"!=typeof brand?brand:void 0,"config"in c?c.config:"undefined"!=typeof config?config:void 0,"lang"in c?c.lang:"undefined"!=typeof lang?lang:void 0),t}},function(a){a.exports=[{icon:"lab",title:"رصد و پژوهش",desc:"این یک متن الکی است و طراحان برای پر کردن جاهای خالی در طراحی از آن استفاده می‌کنند و ارزشی ندارد."},{icon:"solar",title:"طراحی و توسعه سامانه",desc:"این یک متن الکی است و طراحان برای پر کردن جاهای خالی در طراحی از آن استفاده می‌کنند و ارزشی ندارد."},{icon:"network",title:"ترویج و شبکه‌سازی",desc:"این یک متن الکی است و طراحان برای پر کردن جاهای خالی در طراحی از آن استفاده می‌کنند و ارزشی ندارد."},{icon:"academy",title:"آموزش و توانمندسازی",desc:"این یک متن الکی است و طراحان برای پر کردن جاهای خالی در طراحی از آن استفاده می‌کنند و ارزشی ندارد."},{icon:"blog",title:"تدوین و ارزیابی متون قانونی",desc:"این یک متن الکی است و طراحان برای پر کردن جاهای خالی در طراحی از آن استفاده می‌کنند و ارزشی ندارد."}]},function(a){a.exports={fixed:[{cover:"./demo-images/post-md-1.jpg",title:"سامانه شفافیت قراردادها به طور آزمایشی کار خود را آغاز کرد"},{cover:"./demo-images/post-md-2.jpg",title:"پیمایش سازمان‌های ناظر بر پارلمان"},{cover:"./demo-images/post-md-3.jpg",title:"موافقت با انتشار «میزان مشارکت در رأی‌گیری‌ها» و «حضور و غیاب» نمایندگان داوطلب"},{cover:"./demo-images/post-md-4.jpg",title:"شفافیت آرای نمایندگان دست‌ها را رو می‌کند"}],other:[{cover:"./demo-images/post-xs-1.jpg",title:"باید بدانند وکلایشان در مجلس چه می‌کنند مردم"},{cover:"./demo-images/post-xs-2.jpg",title:"داوطلبان شفافیت آراء"},{cover:"./demo-images/post-xs-3.jpg",title:"«حل مشکلات عمومی با استفاده از داده» معرفی دوره مجازی"},{cover:"./demo-images/post-xs-4.jpg",title:"آشنایی با نوآوری‌های داده باز در نپال"},{cover:"./demo-images/post-xs-5.jpg",title:"سامانه شفافیت قراردادها به طور آزمایشی کار خود را آغاز کرد"}]}},function(a,i){a.exports="../images/cover.png?627b782806089627cc34bb319e616c4c"},function(a,i,s){var e=s(0);a.exports=function(a){var i,t="",c=a||{};return function(c,l,r){void 0===r&&(t+='<lang>= "fa";</lang>'),t=t+"<!DOCTYPE html><html"+(e.attr("lang","fa"==r?"fa-IR":"en",!0,!0)+e.attr("dir","fa"==r?"rtl":"ltr",!0,!0))+"><head>","fa"==r&&(t=t+"<title>"+e.escape(null==(i="Single post")?"":i)+" | "+e.escape(null==(i=c.title)?"":i)+"</title>"),t=t+'<meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta charset="utf-8"><link rel="stylesheet"'+e.attr("href",l.baseUrl+"assets/css/main.css"+l.assetsHash,!0,!0)+' type="text/css"></head><body'+e.attr("class",e.classes([[].join(" ")],[!0]),!1,!0)+">"+(null==(i=s(1).call(this,a))?"":i)+e.escape(null==(i="\n\n")?"":i)+'\x3c!-- content--\x3e<div class="main-content"><div class="page-cover"><img src="./demo-images/banner-9.jpg" alt="عنوان پست"></div><div class="post-header"><div class="container"><div class="post-header-contnet"><div class="categories"><a href="#">قانون گزاری </a><a href="#">جغرافیا</a></div><h1 class="post-title">تاثیر فرهنگ ژاپن بر اقتصاد مقاومتی در ایران</h1><div class="post-details"><span persian>3 ساعت پیش - 5 دقیقه برای خواندن</span><a class="mr-3" href="#comments"><i class="icon icon-comment"></i><span persian>12 دیدگاه</span></a></div><div class="post-share"><div class="title">همرسانی:</div><a href="#"><i class="icon icon-facebook"></i></a><a href="#"><i class="icon icon-telegram"></i></a><a href="#"><i class="icon icon-twitter"></i></a></div></div><div class="post-header-excerpt">در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\nوزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</div></div></div><div class="post-main"><div class="container"><p>در حالی شاهد اختلاف نظر مجلس و دولت درباره سازوکار افزایش حقوق کارمندان هستیم که اصلاح نظام حقوق، \nنیازمند شفافیت اطلاعات حقوق و مزایای مدیران و کارمندان است که متاسفانه علی رغم ماده ۲۹ قانون برنامه ششم توسعه، همچنان در دسترس نیست.</p><figure><img src="./demo-images/banner-10.jpg" alt="تصویر 1"><figcaption>@ حسن الماسی</figcaption></figure><p>دولت به دنبال افزایش حقوق تمام کارمندان با درصدی یکسان (۲۰ درصدی) بود ولی نمایندگان مجلس نهایتا پیشنهاد دیگری در این زمینه را مصوب کردند \nو مقرر شد حقوق تمام کارمندان ۴۰۰ هزار تومان افزایش یابد. علاوه بر این، حقوق آنها «تا ۱۰ درصد» افزایش پیدا کند، \nصوبه ای که در راستای حمایت بیشتر از افراد با حقوق های پایین بود. متن این مصوبه مجلس بدین شرح بود: \n«افزایش حقوق گروه­های حقوق‌­بگیر از قبیل هیئت­های علمی، قضات، کارکنان کشوری و لشگری شاغل و بازنشستگان کشوری و لشگری، \nکلیه دستگاه های اجرایی موضوع ماده 29 قانون برنامه ششم توسعه و همچنین وزارت اطلاعات و سازمان انرژی اتمی \nبه نحوی که تفاوت تطبیق موضوع ماده 78 قانون مدیریت خدمات کشوری مصوب 8 مهر 1386 در حکم حقوق بدون تغییر باقی بماند، \nبه شرح ذیل تعیین می گردد: از ابتدای سال 1398 حقوق ثابت یا عناوین مشابه مشمولین این بند به میزان 4 میلیون ریال افزایش می یابد، \nعلاوه بر این افزایش  جزء 1 ضریب ریالی سالانه مشمولین این بند نسبت به ضریب ریالی سال 1397 به میزان تا 10 درصد افزایش می یابد».</p><blockquote><p>این مصوبه مجلس با واکنش منفی دولت مواجه شد به گونه ای که دقایقی بعد از تصویب این موضوع در صحن مجلس، \nمحمدباقر نوبخت رئیس سازمان برنامه و بودجه اعلام کرد دولت این مصوبه را اجرا نخواهد کرد.</p></blockquote><p style="text-align: center"><strong>واکنش قابل تامل لاریجانی به عدم اجرای ماده ۲۹ قانون برنامه ششم توسعه توسط دولت</strong></p><h1>تیتر1:  اگر ماده ۲۹ قانون برنامه ششم توسعه اجرایی می شد...</h1><h2>تیتر2:  اگر ماده ۲۹ قانون برنامه ششم توسعه اجرایی می شد...</h2><h3>تیتر3:  اگر ماده ۲۹ قانون برنامه ششم توسعه اجرایی می شد...</h3><h4>تیتر4:  اگر ماده ۲۹ قانون برنامه ششم توسعه اجرایی می شد...</h4><h5>تیتر5:  اگر ماده ۲۹ قانون برنامه ششم توسعه اجرایی می شد...</h5></div></div><div class="container"><div class="row"><div class="col-12 col-lg-6"><div class="text-right mb-2 font-weight-bold text-gray">مطلب قبلی</div><div class="card-horiz border"><a href="#"><div class="card-cover"><img src="./demo-images/post-md-2.jpg"></div><div class="card-content align-self-center"><div class="card-title">سامانه قراردادها به طور آزمایشی کار خود را آغاز کرد</div><div class="card-details" persian>3 ساعت پیش - 5 دقیقه برای خواندن</div></div></a></div></div><div class="col-12 col-lg-6"><div class="text-left mb-2 font-weight-bold text-gray">مطلب بعدی</div><div class="card-horiz border"><a href="#"><div class="card-content align-self-center"><div class="card-title">سامانه قراردادها به طور آزمایشی کار خود را آغاز کرد</div><div class="card-details" persian>3 ساعت پیش - 5 دقیقه برای خواندن</div></div><div class="card-cover"><img src="./demo-images/post-md-2.jpg"></div></a></div></div></div></div><div id="comments"><div class="container comment-form"><form><div class="form-row"><div class="form-group col-md-4"><input class="form-control" type="text" placeholder="نام و نام خانوادگی"></div><div class="form-group col-md-4"><input class="form-control" type="text" placeholder="ایمیل"></div><div class="form-group col-md-4"><input class="form-control ltr" type="text" placeholder="http://"></div><div class="form-group col-12"><textarea class="form-control" cols="30" rows="8" placeholder="دیدگاه خود را با ما در میان بگذارید"></textarea></div><div class="form-group"><button class="btn btn-warning rounded-pill px-5" type="submit">ارسال دیدگاه</button></div></div></form></div></div></div>'+(null==(i=s(3).call(this,a))?"":i)+e.escape(null==(i="\n\n")?"":i)+"\x3c!-- vendor include: jquery, bootstrap--\x3e<script"+e.attr("src",l.baseUrl+"assets/js/vendor.js"+l.assetsHash,!0,!0)+"><\/script><script"+e.attr("src",l.baseUrl+"assets/js/main.js"+l.assetsHash,!0,!0)+"><\/script></body></html>"}.call(this,"brand"in c?c.brand:"undefined"!=typeof brand?brand:void 0,"config"in c?c.config:"undefined"!=typeof config?config:void 0,"lang"in c?c.lang:"undefined"!=typeof lang?lang:void 0),t}},,,,,,,,,function(a,i){}]);