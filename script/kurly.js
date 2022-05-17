(function($){

var chkboxBtn =$('.chkbox-btn');


///////////////////////////////////////////////////////////////////////////////
//이이디 입력상자//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

//1.
//마우스가 입력상자에 클락 다운되면 가이드 텍스트 보이기 (show)
$('#inputId').on({
  mousedown:function(){
    $('.guide-id').show();
  }
});


//2.
//키보드가 내려가서 올라올때(keyup) 점검 :ketup / keydown
$('#inputId').on({
  //keydown:function(){
  keyup:function(event){
    //change:function(event){ - 리엑트
    event.preventDefault();
    var regExp = /^(((?=.*[A-Za-z])+(?=.*[0-9])*)+([^가-힣ㄱ-ㅎㅏ-ㅣ!@#$%^&*\(\)-_\=\+\\\{\}\[\]\?\/\.\,\>\<\~\`\:\;\'\"]))[^\s][A-Za-z0-9]{6,}$/g; 
    var idValue = $(this).val().toString();
    //입력값이 없으면 : 글자가 검정 기본값으로 설정
    if(idValue===''){
      $('.guide-id p').eq(0).removeClass('error')
      $('.guide-id p').eq(0).removeClass('success')
    }
    else{ //입력값이 있으면 정규표현식 비교 진위여부
    if(regExp.test(idValue)===true){
      $('.guide-id p').eq(0).addClass('success');
      $('.guide-id p').eq(0).removeClass('error')
    }
    else if(regExp.test(idValue)===false){
      $('.guide-id p').eq(0).addClass('error')
      $('.guide-id p').eq(0).removeClass('success') //클래스가 삭제되어야 에러가 표시된다
    }
  }
  }

});

//아이디 버튼 클릭 이벤트
$('.id-double-btn').on({
  click:function(){

    var regExp = /^(((?=.*[A-Za-z])+(?=.*[0-9])*)+([^가-힣ㄱ-ㅎㅏ-ㅣ!@#$%^&*\(\)-_\=\+\\\{\}\[\]\?\/\.\,\>\<\~\`\:\;\'\"]))[^\s][A-Za-z0-9]{6,}$/g;
    var idValue = $('#inputId').val().toString();
      //입력값이 없으면 : 글자가 검정 기본값으로 설정
      if(idValue===''){
        $('.guide-id p').eq(0).removeClass('error')
        $('.guide-id p').eq(0).removeClass('success')
        modal('아이디를 입력해주세요.');
      }
      else{ //입력값이 있으면 정규표현식 비교 진위여부
      if(regExp.test(idValue)===true){
        $('.guide-id p').eq(0).addClass('success');
        $('.guide-id p').eq(0).removeClass('error')
      }
      else if(regExp.test(idValue)===false){
        $('.guide-id p').eq(0).addClass('error')
        $('.guide-id p').eq(0).removeClass('success') //클래스가 삭제되어야 에러가 표시된다
        modal('아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다.');
      }
     }
    }

});

///////////////////////////////////////////////////////////////////////////////









///////////////////////////////////////////////////////////////////////////////
//비밀번호 입력상자 이벤트/////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// 1.10자 이상
// 2.영문 필수(1자이상)이고 (and &&) +
//   (숫자* 또는(or ||) 특수문자* ) +두가지중에 한가지이상 조합이 되어야한다.
//   공백은 제외 그리고 2개이상 조합 
// 3.동일한 숫자 3개이상 연속 사용불가

// 가이드텍스트보이기 마우스 다운하면
 $('#inputPw').on({
   mousedown:function(){
     $('.guide-pw').show();
   }
 });
 $('#inputPw').on({
   keyup:function(e){
     e.preventDefault();
     var regExp1 = /.{10,}/;
     var regExp2 = /^((?=.*[A-Za-z])+((?=.*[0-9])+|(?=.*[!@#$%&*-_])+)+)[^\s][A-Za-z0-9!@#$%&*-_]{10,}$/;
     var regExp3 = /(.)\1\1/; //긍정문: 숫자연속시용 3개이상 \1\1
     var pwValue = $(this).val().toString();
   
   //1. 10자이상
   if(pwValue===''){
     $('.guide-pw p').eq(0).removeClass('error')
     $('.guide-pw p').eq(0).removeClass('success')
   }
   else{
     if(regExp1.test(pwValue)){
       $('.guide-pw p').eq(0).addClass('success')
       $('.guide-pw p').eq(0).removeClass('error')
     }
     else{
       $('.guide-pw p').eq(0).addClass('error')
       $('.guide-pw p').eq(0).removeClass('success')
     }
     
   }
    //2.영문 필수+(숫자또는특수문자)+ => 2가지 이상 조합
    if(pwValue===''){
     $('.guide-pw p').eq(1).removeClass('error')
     $('.guide-pw p').eq(1).removeClass('success')
   }
   else{
     if(regExp2.test(pwValue)){
       $('.guide-pw p').eq(1).addClass('success')
       $('.guide-pw p').eq(1).removeClass('error')
     }
     else{
       $('.guide-pw p').eq(1).addClass('error')
       $('.guide-pw p').eq(1).removeClass('success')
     }
     
   }
    //3. 숫자3개이상 연속 사용금지(동일한 숫자 3개 연속 사용 불가)
    if(pwValue===''){
     $('.guide-pw p').eq(2).removeClass('error')
     $('.guide-pw p').eq(2).removeClass('success')
   }
   else{
     if(regExp3.test(pwValue)){ //참이 아니면 
       $('.guide-pw p').eq(2).addClass('error')
       $('.guide-pw p').eq(2).removeClass('success')
     }
     else{
       $('.guide-pw p').eq(2).addClass('success')
       $('.guide-pw p').eq(2).removeClass('error')
     }
     
    }
   }
 });

////////////////////////////////////////////////////////////////////////////////////


//이름입력상자

$('#inputName').on({
  keyup:function(){
    //영문 , 한글, 공백만 입력 나머지 모두 삭제
    $(this).val( $(this).val().toString().replace(/[^A-Za-z가-힣ㄱ-하-ㅣ\s]*/g,''));
  }
})


























///////////////////////////////////////////////////////////////////////////////
//이메일 입력상자//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
    //입력이 완료되면 
    //우측 정보확인 버튼을 클릭하여
    //입력정보데이터를 정규표현식으로 진위여부를 판단하고
    //입력데이터 오류가 있으면 알림창을 모달창으로 띄운다
    //그리고 오류가 없으면
     //저장된 데이터 전체와 입력데이터를 비교하여 중복 확인한다

     $('.email-double-btn').on({ //중복확인버튼
       click:function(e){
         e.preventDefault();
         var inputEmailValue = $('#inputEmail').val(); //이메일 입력상자
         var inputEmail = $('#inputEmail') //이메일 입력상자
         var regExpEmail = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
         var message = '';
         // 버튼 클릭시 초기화
         inputEmail.removeClass('error');


          if( inputEmailValue ===''){ //입력값이 없으면 알림창 띄우기
            //알림창 만들기
            message='이메일 주소를 입력해주세요.' //알림창 내용 1
            modal(message); // 전달인자 (아규먼트)
            }

           else{  //아니면 정규표현식 검증 // 입력값이 있는경우
            if(regExpEmail .test(inputEmailValue) === false){
               inputEmail.addClass('error')
               inputEmail.focus();
               message='잘못된 이메일 형식입니다.' //알림창 내용 2
               modal(message);
              }
              else{
                inputEmail.removeClass('error')

              }
           }

           
         }
     }); 

///////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////
//휴대폰 입력상자//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////


    // 휴대폰 입력제한 
    // 숫자만 입력
    $('#inputPhone').on({
      keyup:function(e){
        var phoneValue = $(this).val();
        var regExp1 = /[^0-9]/g;
        //입력값문자열.replace(정규표현식,'바꿀문자');
        //phoneValue.replace(/[^0-9]/,'');
        //$(this).val();
        
        // 숫자가 아니면 모두 자동 삭제
        $('#inputPhone').val( phoneValue.replace(regExp1,'') ); 
            
              if(phoneValue===''){
            //if(phoneValue.length===0){
              $(this).removeClass('error');
              $('.phone-btn').removeClass('on');
            }
            else{

              if(phoneValue.length>=10){
                $('.phone-btn').addClass('on');
              }
              else{
              $('.phone-btn').removeClass('on');
              }
              
            }
          
      }
    });
    //휴대폰 인증번호 받기 클릭 이벤트
      $('.phone-btn').on({
        click:function(e){
          e.preventDefault();

          var phoneValue = $('#inputPhone').val();
          var regExp2 = /^01[0|6|7|8|9]+\d{3,4}\d{4}$/; // 10~12자리
         

          //휴대폰번호에 입력값이 없을경우
          //클릭을 무시한다
          if( $('#inputPhone').val() < 10){
             return; //리턴 값이 없다
          }
          if(regExp2.test(phoneValue)===false){
          $('#inputPhone').addClass('error');
          //알림창 띄우기
          modal('잘못된 휴대폰 번호 입니다. 확인 후 다시 시도 해 주세요.');
          }
          else{
          $('#inputPhone').removeClass('error');
         }
        
        }
       });


/////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
//주소 입력상자//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



    //주소검색 버튼 클릭 이벤트
    $('.address-btn').on({
      click:function(e){
        e.preventDefault();
        $('.address input').show();
      
        //주소검색 카카오(다음) 구현
        new daum.Postcode({
        oncomplete:function(data){
          //console.log(data.zonecode); //우편번호
          //console.log(data.address); //도로명주소
          //console.log(data.rodeAddress); //도로명주소
          //console.log(data.rodeAddressEnglish); //도로명주소 영문
          //console.log(data.jibunAddress); //지번주소
          $('#inputAddress1').val(`${data.zonecode} ${data.address}`);
          $('#inputAddress2').focus(); // 커서 깜빡깜빡 입력대기
          }
        }).open();
      }
    });

  

///////////////////////////////////////////////////////////////////////////////
//생년월일입력상자//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  //숫자 빼고 지우기
  function inputBoxRegExpCheck(value){
    var regExp = /[^0-9]/g; //숫자만
    return value.trim().replace(regExp,'');
  }


  //입력상자 함수
  function birthdayCheak(value){

 //현재 년월일 데이터
 var nowYear = new Date().getFullYear(); //년 4자리
 var nowMonth = new Date().getMonth()+1; //월 0~11
 var nowDate = new Date().getDate(); //일
 var nowDay = new Date().getDay(); //요일(0~6) 일요일(0) ~토요일(6)
 var nowHours = new Date().getHours(); //시
 var nowMinutes = new Date().getMinutes(); //분
 var nowSeconds = new Date().getSeconds(); //ch
 //생년월일 데이터
 var year =$('#year').val().trim().toString();
 var month =$('#month').val().trim().toString();
 var date =$('#date').val().trim().toString();
 var birLastDate = new Date(year,month,0); // 생년월일의 말일 - 0은 마지막 날  
 
 //현재 년 월 
 var today = new Date (nowYear,nowMonth,nowDate);


    //2022년 달력에 말일 모두 표시
    //console.log('01월',new Date(2022,1,0));
    //console.log('02월',new Date(2022,2,0));
    //console.log('03월',new Date(2022,3,0));
    //console.log('04월',new Date(2022,4,0));
    //console.log('05월',new Date(2022,5,0));
    //console.log('06월',new Date(2022,6,0));
    //console.log('07월',new Date(2022,7,0));
    //console.log('08월',new Date(2022,8,0));
    //console.log('09월',new Date(2022,9,0));
    //console.log('10월',new Date(2022,10,0));
    //console.log('11월',new Date(2022,11,0));
    //console.log('12월',new Date(2022,12,0));

    if($('#year').val()==='' && $('#month').val()==='' && $('#date').val()===''){
       return;
        }
      else{
      //year 1900~2000
      if(!/^(?:19[0-9][0-9]|2[0-9][0-9][0-9])$/g.test(year)){
        $('.guide-birthday-confirm p').show().text('태어난 년도 4자리를 정확하게 입력해주세요.');
        return ;
        }
        else{
          //year 정상
           $('.guide-birthday-confirm p').hide()
          //month
          if(!/^(?:0?[1-9]|1[0-2])$/g.test(month)){
          $('.guide-birthday-confirm p').show().text('태어난 월을 정확하게 입력해주세요.');
          return;
           }
          else{
            //month 정상
          $('.guide-birthday-confirm p').hide()
            //date
            //console.log(date);
            //console.log(birLastDate);
            //console.log(birLastDate.getDate()); //마지막 날(일)
            //console.log(birLastDate.getFullYear()); //년 
            //console.log(birLastDate.getMonth()+1); // 월 0-11 그래서 더하기 1


            if(!/^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g.test(date) || date >birLastDate.getDate() ){
               $('.guide-birthday-confirm p').show().text('태어난 일을 정확하게 입력해주세요.');
               return;
              }
            else{
              //date 정상
              //추가항목 : 태어난 월의 말일을 찾아서 본인 생일의 날짜랑 비교
              //생일이 크면 잘못 입력된 날짜이다
              $('.guide-birthday-confirm p').hide();
              //일까지 모두 정상이면





                  //미래 /// 14세미만 ///120세 이상 
                  //현재 년도의 년,월,일
                  const nowYear120 =new Date (nowYear-120, nowMonth, nowDate); //120세 미만 변수
                  const nowYear14 =new Date (nowYear-14, nowMonth, nowDate); //14세 미만 변수
                  const birthDay =new Date (year, month, date); //생년월일

                 //생년월일 모두 입력완료 된 후 처리할 내용 3가지
                 //오늘 보다 큰 날짜는 미래
                if( birthDay > today  ){
                $('.guide-birthday-confirm p').show().text('생년월일이 미래로 입력되었어요.');
                return;
                 }
                else{
                  $('.guide-birthday-confirm p').hide();
                }
                }

                  //- 1tkf alaks
                  //14세 미만 체크 확인
                  // birthDay > nowYear14 14세미만
                  //console.log(nowYear14); //2022 - 14 = 2008
                  //console.log(birthDay); //2009
                  if( birthDay > nowYear14 ){
                    if(!/^(?:0?[1-9]|1[0-9]|2[0-9]|3[0-1])$/g.test(date) || date >birLastDate.getDate() ){
                      $('.guide-birthday-confirm p').show().text('만 14세 미만은 가입이 불가능 합니다.');
                      return;
                  }
                  // 100세 이상
                  else{
                    $('.guide-birthday-confirm p').hide();
                  }
                  if(birthDay<nowYear120){ //120세 초과 나이 120세 엄은 분들
                    $('.guide-birthday-confirm p').show().text('생년월일을 다시 확인해주세요.');
                    retur
                   }else{
                    $('.guide-birthday-confirm p').hide();

                    }
                  
              //100세 초과

             }//date
            }//month
          }//year
        }//하나이상 빈칸이 있으면 else
      }//모두 빈칸이면 if

    $('#year').on({
      keyup:function(){
      $(this).val( inputBoxRegExpCheck ($(this).val()))
      },
      focusout:function(){
      birthdayCheak();
      }
    });

    //월
    $('#month').on({
      keyup:function(){
      $(this).val( inputBoxRegExpCheck ($(this).val()))
      },
      focusout:function(){
      birthdayCheak();
      },
      focusin:function(){
      birthdayCheak();
      }
    });

    //일
    $('#date').on({
      keyup:function(){
      $(this).val( inputBoxRegExpCheck ($(this).val()))
      },
      focusout:function(){
      birthdayCheak();
      },
      focusin:function(){
      birthdayCheak();
      }
    });


  //추가 입력 사항













    //약관동의
    //체크 5와 6의 변화에 따라 체크4의 체크 상태를 변경
    $('#chk5').on({ // || = OR 부정문4
      change:function(){
        if($('#chk5').is(':checked')===false || $('#chk6').is(':checked')===false ){
          $('#chk4').prop('checked',false)
        }
        else{ //모두 true
          $('#chk4').prop('checked' ,true)
        }
      }
    });
    $('#chk6').on({ // || = OR 부정문
      change:function(){
        if($('#chk5').is(':checked')===false || $('#chk6').is(':checked')===false ){
          $('#chk4').prop('checked', false)
        }
        else{ //모두 true
          $('#chk4').prop('checked' ,true)
        }
      }
    });


    //부붙체크한 모든 내용은 위에 코딩하고
    //여기에서는 전체 체크상태를 확인 그리고 카운트 체크하여
    //변경사항을 반영한다.
    //체크박스이벤트
    //.chkbox-btn 7개 반복처리 - each() 매서드 사용
    chkboxBtn.each(function(idx){
      //console.log(idx);
      $(this).on({
        change:function(){
         // console.log(idx); //선택한 체크박스 인덱스 번호
         //console.log($(this).is(':checked') );//체크 상태 확인
         //console.log($(chkboxBtn).val() ); //선택 항목의 값
        
          var cnt=0; //카운트 체크박스 체크된것만 전체갯수 증가하는 변수
          for(var i=0; i<chkboxBtn.length; i++){
            if(chkboxBtn.eq(i).is(':checked')===true){
              cnt++;
            }
          }
        //선택된 체크박스 갯수 확인
        // console.log(cnt);
        if(cnt===7){
          $('#chkAll').prop('checked', true); //전체선택을 체크한다.
         }
         else{
          $('#chkAll').prop('checked', false); //전체선택을 해지한다.
         }
        }
      });
    });
    //모두 체크하는 chkAll 이벤트 
    $('#chkAll').on({
      change:function(){
        //console.log($(this).is(':checked')); //체크상태확인
        //console.log($(this).val()); // 이(모두체크하는선택자) 체크박스(버튼)
        //chkAll 체크가 trus(모두체크되면) 이면
        if($(this).is(':checked')){
          //7개 모두를 체크해주세요 / chkAll 빼고 7개
          $('.chkbox-btn').prop('checked',true); //7개 모두를 체크 해 주세요
        }
        else{ 
          $('.chkbox-btn').prop('checked',false); //7개 모두를 체크 해제 하세요
        }
      
      
      
      }
    });
    //체크 4를 누르면 체크5,6이 체크상태 변경
    $('#chk4').on({
      change:function(){
        if( $(this).is(':checked')){
          $('#chk5').prop('checked' ,true)
          $('#chk6').prop('checked' ,true)
        }
        else{
          $('#chk5').prop('checked' ,false)
          $('#chk6').prop('checked' ,false)
        }
      }
    });

         //모달창 이벤트 함수
         function modal(m){
          $('.modal-message').text(m);
          $('#modal').addClass('show');
   
        }
   
        $('.modal-close').on({
          click:function(){
            $('#modal').removeClass('show');
          }
        });
   













    })(jQuery);