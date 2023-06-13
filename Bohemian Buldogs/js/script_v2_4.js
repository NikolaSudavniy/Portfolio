// screen.orientation.lock("portrait-primary");

$(document).ready(function(){
  function meetSlider(){
    $('.slider_slick')
      .on('init', () => {
        $('.lt1').removeClass('lt1');
        $('.lt2').removeClass('lt2');
        $('.lt3').removeClass('lt3');
        $('.lt3').removeClass('lt4');
        $('.gt1').removeClass('gt1');
        $('.gt2').removeClass('gt2');
        $('.gt3').removeClass('gt3');
        $('.gt3').removeClass('gt4');
        let lt1 = $(".slick-current").prev().addClass('lt1');
        let lt2 = lt1.prev().addClass('lt2');
        let lt3 = lt2.prev().addClass('lt3');
        let lt4 = lt3.prev().addClass('lt4');
        let gt1 = $(".slick-current").next().addClass('gt1');
        let gt2 = gt1.next().addClass('gt2');
        let gt3 = gt2.next().addClass('gt3');
        let gt4 = gt3.next().addClass('gt4');
        
    })
    .slick({
      centerMode: true,
      centerPadding: 0,
      slidesToShow: 7,
      draggable: false,
      speed: 200,
      arrows: true,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                centerPadding: '0',
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                draggable: true,
                centerPadding: '80px',
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
    .on('afterChange',function(){
      $('.lt1').removeClass('lt1');
      $('.lt2').removeClass('lt2');
      $('.lt3').removeClass('lt3');
      $('.lt4').removeClass('lt4');
      $('.gt1').removeClass('gt1');
      $('.gt2').removeClass('gt2');
      $('.gt3').removeClass('gt3');
      $('.gt4').removeClass('gt4');
      let lt1 = $(".slick-current").prev().addClass('lt1');
      let lt2 = lt1.prev().addClass('lt2');
      let lt3 = lt2.prev().addClass('lt3');
      let lt4 = lt3.prev().addClass('lt4');
      let gt1 = $(".slick-current").next().addClass('gt1');
      let gt2 = gt1.next().addClass('gt2');
      let gt3 = gt2.next().addClass('gt3');
      let gt4 = gt3.next().addClass('gt4');
    });
  }

  function tutorialsSlider(){
    $('.tutorials_slider')
      .on('init', () => {
        $('.lt1').removeClass('lt1');
        $('.lt2').removeClass('lt2');
        $('.lt3').removeClass('lt3');
        $('.gt1').removeClass('gt1');
        $('.gt2').removeClass('gt2');
        $('.gt3').removeClass('gt3');
        let lt1 = $(".slick-current").prev().addClass('lt1');
        let lt2 = lt1.prev().addClass('lt2');
        let lt3 = lt2.prev().addClass('lt3');
        let gt1 = $(".slick-current").next().addClass('gt1');
        let gt2 = gt1.next().addClass('gt2');
        let gt3 = gt2.next().addClass('gt3');
        
    })
    .slick({
      centerMode: true,
      centerPadding: 0,
      speed: 200,
      draggable: false,
      slidesToShow: 5,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                draggable: true,
                centerPadding: '0',
              }
            }
          ]
    })
    .on('afterChange',function(){
      $('.lt1').removeClass('lt1');
      $('.lt2').removeClass('lt2');
      $('.lt3').removeClass('lt3');
      $('.gt1').removeClass('gt1');
      $('.gt2').removeClass('gt2');
      $('.gt3').removeClass('gt3');
      let lt1 = $(".slick-current").prev().addClass('lt1');
      let lt2 = lt1.prev().addClass('lt2');
      let lt3 = lt2.prev().addClass('lt3');
      let gt1 = $(".slick-current").next().addClass('gt1');
      let gt2 = gt1.next().addClass('gt2');
      let gt3 = gt2.next().addClass('gt3');
    });
  }

  function ratingSlider(){
    $('.rating_slider')
    .on('init', () => {
      // for hover
      $( ".rating .card" ).each(function( index ) {
        $( this ).data('index',index);
        // console.log(  $( this ).data('index') );
      });
    })
    .slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              centerMode: true,
              centerPadding: '0',
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '0',
            }
          }
        ]
    })
    .on('afterChange',function(){
    /**** */
    // console.log('afterChange')
    // $('.rating .card').css({outline:'0px solid red'});
    // $('.rating .slick-center').css({outline:'1px solid red'});
    });
  }
  /** */
  // $('.properties_slider')
  //   .slick({
  //     infinite: true,
  //     slidesToShow: 3,
  //     slidesToScroll: 3
  //   })
  function wheelSlider(){
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          800:{
              items:3
          }
      }
    });
  }
    
  function menu(){
    $('.menu-toggle').click(function(){
      $('header').toggleClass('open');      
      $('.header_small .logo').toggleClass('logo_white');    
      $('body').toggleClass('hidden');   
      window.scrollTo(0, 0);
      // event ? event.preventDefault() : window.event.returnValue = false;
      return false;
    })

    $('.menu a').click(function(){
      $('header').removeClass('open');      
      $('.header_small .logo').removeClass('logo_white'); 
      $('body').removeClass('hidden'); 
      $('.menu a').removeClass('active');
      $(this).addClass('active');
    })
  }

  function roadmapCompass(){
    $('.roadmap_container .compass').hover(
      function(){
        $(this).addClass('animate')
      },
      function(){
        $(this).removeClass('animate')
      },
    )
  }

  function meetCalc(){
    $('.meet_form input').on('input',function(){
      $('.calc span.bold').html(($(this).val()*0.09).toFixed(2));
    });
  }

  function raitingHangeColor(){
    let currentCardRaiting = null;
    if($('.rating .slick-active' ==3 )){
      currentCardRaiting = $('.rating .slick-current');
    }
    else{
      currentCardRaiting = $('.rating .card').eq(2);
    }
    
    // if($('.rating .card').length === 5 ){
    //   currentCardRaiting = $('.rating .card').eq(2);
    //   currentCardRaiting.css({filter:'blur(0.01px) grayscale(0)'});

    //   $('.rating .card').hover(
    //     function(){
    //       if($(this).data('index') != 2){
    //         currentCardRaiting.css({filter:'blur(2px) grayscale(100%)'});
    //       }
    //     },
    //     function(){ 
    //       currentCardRaiting.css({filter:'blur(0.01px) grayscale(0)'});    
    //     }
    //   )
    // }
    // else{
    //   currentCardRaiting = null;
    // }
  }
 
  /*constructor*/
  // $('.constructor_wrap a ').hover(
  //   function(){
  //     $('._test').css({opacity:1})
  //   },
  //   function(){
  //     $('._test').css({opacity:0})
  //   }
  // )
  function  featuresChangeGradient(){
    let slide = document.querySelector('#slide');
    let thumb = slide.querySelector('.thumb');
    let inner = slide.querySelector('.inner');

    thumb.onmousedown = function(event) {
      event.preventDefault(); 

      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - inner.getBoundingClientRect().left;
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = inner.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
        thumb.style.left = newLeft + 'px';

        let value = newLeft*360/rightEdge;
        $('.bg-gradient').css({filter:`hue-rotate(${value}deg)`})
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    };

    thumb.ondragstart = function() {
      return false;
    };
    
  }

  function fag(){
    $('.faq .info p').slideUp(0);
    $('.faq h3').click(function(){
      $(this).next().slideToggle();
      $(this).closest('.info').toggleClass('active-fag')
    })
  }

  
function constructor(){
  $('.constructor_wrap a').hover(
    function(){
      $('#'+$(this).data().id).css('filter','drop-shadow(0px 4px 10px rgba(255, 255, 255, 0.83))');
      if( $(this).data().id == 'coola'){
        $('#sport').css('display','none');
      }
    },
    function(){
      $('#'+$(this).data().id).css('filter','none');
      if( $(this).data().id == 'coola'){
        $('#sport').css('display','block');
      }
    }
  )
}

function roadmapScroll(){
  $(document).on('scroll', goPaws);
  let t = null;
  let arr = [
    [142, 166, 3,  '#2AA7CC'],
    [142, 157, 32, '#2AA7CC'],
    [142, 187, 36, '#2AA7CC'],
    [197, 180, 54, '#54D3DB'],

    [156, 202, 105, '#54D3DB'],
    [212, 189, 121, '#54D3DB'],
    [156, 202, 144, '#54D3DB'],
    [212, 189, 164, '#54D3DB'],

    [156, 203, 250, '#54D3DB'],
    [212, 190, 267, '#54D3DB'],
    [156, 203, 290, '#54D3DB'],
    [212, 190, 306, '#54D3DB'],

    [159, 180, 423, '#54D3DB'],
    [209, 147, 438, '#54D3DB'],
    [159, 180, 462, '#54D3DB'],
    [209, 166, 478, '#54D3DB'],

    [125, 161, 596, '#54D3DB'],
    [176, 158, 618, '#54D3DB'],
    [120, 180, 628, '#54D3DB'],
    [173, 179, 651, '#54D3DB'],

    [135, 231, 732, '#54D3DB'],
    [126, 270, 754, '#54D3DB'],
    [169, 231, 758, '#54D3DB'],
    [120, 279, 784, '#54D3DB'],

    [120, 327, 765, '#54D3DB'],
    [109, 538, 780, '#54D3DB'],
    [117, 560, 757, '#54D3DB'],
    [150, 581, 780, '#54D3DB'],

    [47, 640, 751, '#54C3DB'],
    [83, 662, 756, '#54C3DB'],
    [47, 671, 727, '#54AADB'],
    [83, 694, 732, '#54AADB'],

    [358, 765, 639, '#5492DB'],
    [46, 789, 630, '#5492DB'],
    [358, 790, 586, '#5469DB'],
    [59, 812, 580, '#5469DB'],

    [354, 802, 483, '#9754DB'],
    [36, 819, 466, '#9754DB'],
    [354, 809, 430, '#9754DB'],
    [36, 828, 418, '#9754DB'],

    [321, 790, 329, '#9754DB'],
    [28, 813, 309, '#9754DB'],
    [28, 789, 284, '#CE42FF'],
    [28, 824, 272, '#CE42FF'],

    [10, 910, 145, '#DB54CD'],
    [73, 947, 135, '#DB54CD'],
    [10, 940, 105, '#FF42CA'],
    [73, 982, 103, '#FF42CA'],

    [41, 998, 64, '#DB5464'],
    [91, 1038, 81, '#DB5464'],
    [41, 1054, 46, '#FF9142'],
    [91, 1108, 65, '#FF9142'],

    [123, 1163, 43, '#FF9142'],
  ]
  let count = 0;

  function goPaws(){
    if($(this).scrollTop() >= $('.roadmap').offset().top-400){
      $(document).off('scroll', goPaws);
      t = setInterval(addPaws, 150)
    }

    function addPaws(){
      
      if(count >= arr.length - 1){
        clearInterval(t);
      }      
      $(`
      <svg class="animate_paws" width="17" height="18" viewBox="0 0 17 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.26696 8.91902C4.18691 8.8881 4.90762 8.11726 4.8767 7.19731C4.84578 6.27735 4.07494 5.55665 3.15498 5.58757C2.23503 5.61849 1.51432 6.38933 1.54524 7.30928C1.57616 8.22924 2.347 8.94994 3.26696 8.91902Z" />
        <path d="M6.17614 6.15315C7.09609 6.12223 7.8168 5.35139 7.78588 4.43144C7.75496 3.51148 6.98412 2.79078 6.06416 2.8217C5.14421 2.85262 4.4235 3.62346 4.45442 4.54341C4.48534 5.46337 5.25618 6.18407 6.17614 6.15315Z" />
        <path d="M10.1732 6.01887C11.0932 5.98795 11.8139 5.21712 11.7829 4.29716C11.752 3.37721 10.9812 2.6565 10.0612 2.68742C9.14128 2.71834 8.42057 3.48918 8.45149 4.40913C8.48241 5.32909 9.25325 6.04979 10.1732 6.01887Z" />
        <path d="M13.2611 8.58308C14.1811 8.55216 14.9018 7.78132 14.8708 6.86137C14.8399 5.94141 14.0691 5.22071 13.1491 5.25163C12.2292 5.28255 11.5085 6.05339 11.5394 6.97334C11.5703 7.8933 12.3411 8.614 13.2611 8.58308Z" />
        <path d="M11.8858 10.537C11.2833 9.87691 10.7774 9.31359 10.1682 8.65368C9.84963 8.30418 9.44443 7.9576 8.97265 7.81337C8.89846 7.78918 8.8245 7.77165 8.75076 7.76079C8.58329 7.73974 8.40339 7.74578 8.23016 7.75161C8.05692 7.75743 7.87702 7.76347 7.70491 7.80261C7.63206 7.8184 7.55944 7.84085 7.48705 7.86997C7.02602 8.04555 6.65166 8.41834 6.3506 8.78866C5.79377 9.48776 5.32686 10.0838 4.76337 10.7831C3.91986 11.6853 2.87961 12.6875 3.12496 14.0333C3.34102 14.7064 3.85003 15.363 4.72937 15.5269C5.21912 15.6105 6.75836 15.1652 8.41076 15.1097L8.5307 15.1057C10.1831 15.0501 11.7485 15.3844 12.2318 15.2748C13.0981 15.0522 13.5617 14.3562 13.7323 13.6768C13.8932 12.3106 12.788 11.3805 11.8858 10.537Z" />
      </svg>
      `).appendTo('.roadmap_container').css({
        position:'absolute',
        transform: `rotate(${arr[count][0]}deg)`,
        left: arr[count][1]*100/1252+'%',
        // left: arr[count][1],
        top: arr[count][2],
        color: arr[count][3],
        
      })
      count++;
    }
  }
}

  menu();
  meetCalc();
  meetSlider();
  tutorialsSlider();
  ratingSlider();
  raitingHangeColor();
  wheelSlider();
  constructor();
  featuresChangeGradient();
  roadmapCompass();
  roadmapScroll();
  fag();
}); 
