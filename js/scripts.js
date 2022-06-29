$('.slider-cont').slick({
  infinite: true,
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false
});

$('.choose-cont').slick({
  infinite: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1800,
  pauseOnHover: false
});

$('.webgl-slider').slick({
  infinite: true,
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  fade: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 18000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      },
    },
  ],
});

$('.impact-slider').slick({
  infinite: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  fade: false,
  arrows: false,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 2000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
      },
    },
  ],
});


$('.burguer').click(function () {
  $('.menu').toggleClass('active');
  $('.burguer').toggleClass('active');
});

//funcion para cambiar de color el nav cuando pasa la clase "ancla"

var lastScrollTop = 0;
$(window).scroll(function (e) {
  $altoportada = $('.ancla').height();
  var st = $(this).scrollTop();
  if (st > $altoportada) {
    $('nav').addClass('activo')
  } else {
    $('nav').removeClass('activo')
  }
  if ($(".responsive-menu").hasClass("activo")) {
    $('nav').addClass('scrolldown')
  }
  lastScrollTop = st;

});

/***** empieza timeline para los iconos ******/

let tmline = gsap.timeline({
  scrollTrigger: {
    trigger: ".objetivos",
    toggleActions: "play none none none",
    start: "top center"
    //markers: true
  }
});

tmline.from(".icon", {
  opacity: 0,
  scale: 0,
  duration: .8
});

tmline.from(".puntos", {
  rotation: "360",
  transformOrigin: '50% 50%',
  repeat: -1,
  duration: 15,
  ease: "linear"
});

/***** ANIMACION PARA TODa la pagina ******/

const textos = gsap.utils.toArray('.text');
textos.forEach(text => {
  gsap.from(text, {
    opacity: 0,
    y: -50,
    delay: .5,
    ease: Expo.easeOut,
    duration: 1,
    scrollTrigger: {
      trigger: text,
      toggleActions: "restart none none reverse",
      start: "top 80%",
      /*start: "top 80%",*/
      //markers:true
    }
  })
});


const underlines = gsap.utils.toArray('.underlineChild');
underlines.forEach(underline => {
  gsap.to(underline, {
    width:"95%",
    ease: Power4.easeOut,
    duration: 2,
    delay:.6,
    scrollTrigger: {
      trigger: underline,
      toggleActions: "restart none none reverse",
      start: "top 80%",
      //markers:true
    }
  })
});


gsap.from('.width', {
  width:"0",
  padding:"0",
  ease: Power4.easeOut,
  duration: .5,
  //delay:.5,
  scrollTrigger: {
    trigger: '.consumidores3' ,
    toggleActions: "restart none none reverse",
    start: "top 80%",
    //markers:true
  }
})

$(".coloredbg").each(function() {
  // Content Reveal Animation
  ScrollTrigger.create({
    trigger: ".section88",
    start: "top 80%",
    end: "bottom 100px",
    onEnter: () => $(this).addClass('revealed'),
    onLeave: () => $(this).removeClass('revealed'),
    onEnterBack: () => $(this).addClass('revealed'),
    onLeaveBack: () => $(this).removeClass('revealed'),
  });
});

//////////////////

$content =  $('#cursor');
$('.avatars div').hover(function () {
    onHover = $(this).data('hover');
    $content.removeClass();
    $content.addClass(onHover);
});

/////////////////

$('.faq li').click(function () {
  $(this).toggleClass('active');
})


$('#switch1').click(function () {
  $(this).find('.sd').toggleClass('active');
  $('.av1').toggleClass('active');
  $('.light1').toggleClass('active');
})

$('#switch2').click(function () {
  $(this).find('.sd').toggleClass('active');
  $('.av2').toggleClass('active');
  $('.light2').toggleClass('active');
})

$('#switch3').click(function () {
  $(this).find('.sd').toggleClass('active');
  $('.av3').toggleClass('active');
  $('.light3').toggleClass('active');
})

$('.mem1').click(function () {

  $('.memm2').removeClass('active');
  $('.memm3').removeClass('active');
  $('.memm4').removeClass('active');
  $('.memm5').removeClass('active');
  $('.memm6').removeClass('active');
  $('.memm7').removeClass('active');
  $('.memm8').removeClass('active');
  $('.memm1').addClass('active');
})

$('.mem2').click(function () {
  $('.memm1').removeClass('active');
  $('.memm3').removeClass('active');
  $('.memm4').removeClass('active');
  $('.memm5').removeClass('active');
  $('.memm6').removeClass('active');
  $('.memm7').removeClass('active');
  $('.memm8').removeClass('active');

  $('.memm2').addClass('active');
})

$('.mem3').click(function () {
  $('.memm1').removeClass('active');
  $('.memm2').removeClass('active');
  $('.memm4').removeClass('active');
  $('.memm5').removeClass('active');
  $('.memm6').removeClass('active');
  $('.memm7').removeClass('active');
  $('.memm8').removeClass('active');

  $('.memm3').addClass('active');
})

$('.mem4').click(function () {
  $('.memm1').removeClass('active');
  $('.memm2').removeClass('active');
  $('.memm3').removeClass('active');

  $('.memm5').removeClass('active');
  $('.memm6').removeClass('active');
  $('.memm7').removeClass('active');
  $('.memm8').removeClass('active');

  $('.memm4').addClass('active');
})

$('.mem5').click(function () {
  $('.memm1').removeClass('active');
  $('.memm2').removeClass('active');
  $('.memm3').removeClass('active');
  $('.memm4').removeClass('active');
  $('.memm6').removeClass('active');
  $('.memm7').removeClass('active');
  $('.memm8').removeClass('active');

  $('.memm5').addClass('active');
})

$('.mem6').click(function () {
  $('.memm1').removeClass('active');
  $('.memm2').removeClass('active');
  $('.memm3').removeClass('active');
  $('.memm4').removeClass('active');
  $('.memm5').removeClass('active');

  $('.memm7').removeClass('active');
  $('.memm8').removeClass('active');

  $('.memm6').addClass('active');
})

$('.mem7').click(function () {
  $('.memm1').removeClass('active');
  $('.memm2').removeClass('active');
  $('.memm3').removeClass('active');
  $('.memm4').removeClass('active');
  $('.memm5').removeClass('active');
  $('.memm6').removeClass('active');
  $('.memm8').removeClass('active');

  $('.memm7').addClass('active');
})

$('.mem8').click(function () {
  $('.memm1').removeClass('active');
  $('.memm2').removeClass('active');
  $('.memm3').removeClass('active');
  $('.memm4').removeClass('active');
  $('.memm5').removeClass('active');
  $('.memm6').removeClass('active');
  $('.memm7').removeClass('active');

  $('.memm8').addClass('active');
})

////////////////

/* var imagerare = document.getElementById("imagerare");
var currentPosrare = 0;
var imagesrare = ["img/section4/Rare1.svg", "img/section4/Rare2.svg", "img/section4/Rare3.svg"]
function volgendefotorare() {
    if (++currentPosrare >= imagesrare.length)
        currentPosrare = 0;
    imagerare.src = imagesrare[currentPosrare];
}
setInterval(volgendefotorare, 3000);


var imagemouth = document.getElementById("imagemouth");
var currentPosmouth = 0;
var imagesmouth = ["img/section4/Mouth1.svg", "img/section4/Mouth2.svg", "img/section4/Mouth3.svg"]
function volgendefotomouth() {
    if (++currentPosmouth >= imagesmouth.length)
        currentPosmouth = 0;
    imagemouth.src = imagesmouth[currentPosmouth];
}
setInterval(volgendefotomouth, 3000);

var imagehead = document.getElementById("imagehead");
var currentPoshead = 0;
var imageshead = ["img/section4/Head1.svg", "img/section4/Head2.svg", "img/section4/Head3.svg"]
function volgendefotohead() {
    if (++currentPoshead >= imageshead.length)
        currentPoshead = 0;
    imagehead.src = imageshead[currentPoshead];
}
setInterval(volgendefotohead, 3000);

var imageeyes = document.getElementById("imageeyes");
var currentPoseyes = 0;
var imageseyes = ["img/section4/Eyes1.svg", "img/section4/Eyes2.svg", "img/section4/Eyes3.svg"]
function volgendefotoeyes() {
    if (++currentPoseyes >= imageseyes.length)
        currentPoseyes = 0;
    imageeyes.src = imageseyes[currentPoseyes];
}
setInterval(volgendefotoeyes, 3000);

var imageclothes = document.getElementById("imageclothes");
var currentPosclothes = 0;
var imagesclothes = ["img/section4/Cloth1.svg", "img/section4/Cloth2.svg", "img/section4/Cloth3.svg"]
function volgendefotoclothes() {
    if (++currentPosclothes >= imagesclothes.length)
        currentPosclothes = 0;
    imageclothes.src = imagesclothes[currentPosclothes];
}
setInterval(volgendefotoclothes, 3000);

var imagebg = document.getElementById("imagebg");
var currentPosbg = 0;
var imagesbg = ["img/section4/Background1.svg", "img/section4/Background2.svg", "img/section4/Background3.svg"]
function volgendefotobg() {
    if (++currentPosbg >= imagesbg.length)
        currentPosbg = 0;
    imagebg.src = imagesbg[currentPosbg];
}
setInterval(volgendefotobg, 3000);
 */


////////////////////////////////////

var image = document.getElementById("image");
var currentPos = 0;
var images = ["img/section4/Avatar1.svg", "img/section4/Avatar2.svg", "img/section4/Avatar3.svg"]

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

setInterval(volgendefoto, 3000);

/////////////////////////// 3js


//funcion para rotar el slider 3D
let current_rotation3 = 0;
let current_rotation4 = 0;

function rotar3(){
  current_rotation3 += 120;
  document.querySelector(".content-carrousel").style.transform =
    "rotateY(" + current_rotation3 + "deg)";
}

 function rotar4(){
    current_rotation4 += 90;
    document.querySelector("#carrusel4").style.transform =
    "rotateY(" + current_rotation4 + "deg)";
 }

 $(".test3").click(function () {
  current_rotation3 += 120;
  document.querySelector(".content-carrousel").style.transform =
    "rotateY(" + current_rotation3 + "deg)";
});

$(".test4").click(function () {
  current_rotation4 += 90;
  document.querySelector("#carrusel4").style.transform =
    "rotateY(" + current_rotation4 + "deg)";
});

//cada 2 segundos ejecuta la funcion
var intervalId = window.setInterval(function(){
  rotar3()
  rotar4()
}, 2000);

//hover al mouse detiene la animaicion
$('.content-carrousel , #carrusel4').on('mouseenter',function(){
  clearTimeout(intervalId);
});

//empieza timeout again cuando el mouse sale
$('.content-carrousel , #carrusel4').on('mouseleave',function(){
  intervalId = window.setInterval(function(){
    rotar3()
    rotar4()
  }, 2000);
});

