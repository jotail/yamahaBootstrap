
  $(document).ready(function() {
    $('.xodlf').slick({
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay:true,//false
      autoplaySpeed:3000,
      fade: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });
  });



  $(document).ready(function() {
    $('.whxodlf').slick({
      dots: false,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      adaptiveHeight: true,
      autoplay:true,
      autoplaySpeed:3000,
      fade: true,
      prevArrow: $('.prev2'),
      nextArrow: $('.next2'),
    });
  });

// 네비바 크기변화

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      if (!$('.navbar').hasClass('navbar-expand-lg')) {
        $('.navbar').addClass('navbar-expand-lg');
      }
    } else {
      if ($('.navbar').hasClass('navbar-expand-lg')) {
        $('.navbar').removeClass('navbar-expand-lg');
      }
    }
  });


//유튜브 배경
  $('document').ready(function() {
    var options = {
      videoId: '3RYJ_XvTNXY',
      start: 0

    };
    $('#wrapper').tubular(options);
  });



  console.clear();

  function MainSlider__init() {
    // 캐러셀 그리기
    $('.slideitem').slick({
      dots: true,
      customPaging: function(slider, i) {
        console.log($(slider.$slides[i]).html());
        return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
      },
    });
  }
  MainSlider__init();

//약관열기닫기

  $(function(){
    var statu = true;
    var htmlText ='';
  $('#showterm').on('click',function(e){
  e.preventDefault();
  $('#terms').toggle(150);
  if(statu){
    htmlText ='약관닫기';
    statu = false;
  }
  else{
    htmlText = '약관열기';
    statu = true;
  }
  $(this).html(htmlText);
  });

     $("#emailSelect").change(function(){
        if( $(this).val() == '기타'){
           $('#etcEmail').addClass('disB').focus();
        }else{
           $('#etcEmail').removeClass('disB');
        }
     });

     $('body').on('click','#popClose', function(){
        $('body').removeClass('opa');
     });
  });

  function chk(){  ///모든 함수선언은 반드시 ready이벤트 밖에다가 ...

         return true;
  }
