
$('.slider-cont').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false
});

$('.slider-prod').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 4000,
  pauseOnHover: false
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


//funcion para cambiar el contenido de los recuadros mision vision
$content = $('#inner');
$('#inner a').hover(function () {
  onHover = $(this).data('hover');
  $content.removeClass();
  $content.addClass(onHover);
});


//animacion flechita
gsap.from('.lineas', { repeat: -1, yoyo: true, y: "20", ease: Power4.easeOut, duration: 1 })
//termina animaicon flechita


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


/***** termina timeline para los iconos ******/

/***** empieza timeline para los testimonios ******/

let test = gsap.timeline({
  scrollTrigger: {
    trigger: ".testimonios",
    toggleActions: "restart restart none reverse",
    start: "top center",
    //ease: Power4.easeInOut

    //markers: true
  }
});

test.from(".test", {
  opacity: 0,
  scale: 0,
  duration: .8
});

/***** termina timeline para los iconos ******/


let masks = document.querySelectorAll('.mask');

masks.forEach(mask => {
  let image = mask.querySelector('img');

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: mask,
      toggleActions: "restart none none reset",
      start: "top 80%",
      //markers:true
    }
  });

  tl.set(mask, { autoAlpha: 1 });


  tl.fromTo(mask, 1, {
    clipPath: "inset(100% 0% 0% 0%)"
  }, {
    clipPath: "inset(0% 0% 0% 0%)", //hay que usar porcentajes en los ceros también
    duration: 1,
    ease: Power3.easeOut,
  });

  tl.from(image, 3, {
    scale: 1.4,
    delay: -1.5,
    ease: Power2.out
  });

})

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

const cuadros = gsap.utils.toArray('.cuadro');
cuadros.forEach(cuadro => {
  gsap.from(cuadro, {
    width:0,
    padding:0,
    ease: Power4.easeOut,
    duration: .6,
    scrollTrigger: {
      trigger: cuadro,
      toggleActions: "restart none none complete",
      start: "top center",
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

var image = document.getElementById("image");
var currentPos = 0;
var images = ["img/section4/Avatar1.svg", "img/section4/Avatar2.svg", "img/section4/Avatar3.svg"]

function volgendefoto() {
    if (++currentPos >= images.length)
        currentPos = 0;

    image.src = images[currentPos];
}

setInterval(volgendefoto, 1000);

///////////////////////////


const scene = new THREE.Scene();
//Objects
const geometry = new THREE.SphereGeometry(15,30,16);

//Materials
const material = new THREE.PointsMaterial({
  size:0.2,
  color :'red'
})

//Mesh
const mesh = new THREE.Points(geometry,material)
scene.add(mesh)


const sizes = {
  width:800,
  height:600
}


const camera = new THREE.PerspectiveCamera(75,sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

//Renderer
const canvas = document.querySelector('.webgl')
console.log(canvas)

const renderer = new THREE.WebGLRenderer({
  canvas:canvas
})

renderer.setSize(sizes.width, sizes.height)


//Animations
const tick = () =>
{
  //Update objects
  mesh.rotation.y +=0.1

  //Render
  renderer.render(scene,camera)

  window.requestAnimationFrame(tick)

}
tick()

