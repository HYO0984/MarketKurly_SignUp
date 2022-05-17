//키보드가 내려가서 올라올때(keyup) 점검 :ketup / keydown
$('#inputId').on({
  //keydown:function(){
  keyup:function(event){
    event.preventDefault();
    //console.log(event);
    //console.log(event.keyCode);
    //console.log(event);
    //console.log(event.currentTarget);
    //console.log(event.originalEvent.key); //입력글자
    //console.log(event.originalEvent.keyCode); //입력글자의 키 코드 번호
    //if(event.originalEvent.keyCode === 13){
    //if( event.keyCode === 13){
    //  alert('엔터키');
    //}
    //if(event.keyCode === 37){
    //  alert('왼쪽방향');
    //}
    //if(event.keyCode === 38){
    //  alert('위쪽방향');
    //}
    //if(event.keyCode === 39){
    //  alert('오른쪽방향');
    //}
    //if(event.keyCode === 40){
    //  alert('아래쪽방향');
    //}
    //if(event.keyCode === 27){ //esc
    //  alert('취소되었습니다');
    //}  
    //if(event.keyCode === 18){
    //  alert('ALT');
    //}
  }
});