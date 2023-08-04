window.addEventListener('load',function(){
    // 애니메이션스크롤 이벤트
    AOS.init();
    // 헤더스크롤이벤트
    $(window).scroll(function(){
        // console.log('스크롤중');
        if($(this).scrollTop()>80){
            $('#header .container').addClass('active');
        }else{
            $('#header .container').removeClass('active');
        }
    })
    // 인트로 글자 타이핑이벤트
    let allTxt = "NICE TO MEET YOU!\nI'm Webpublisher";
    let idx=0;
    let typingData=''; 
    let typTxt = document.querySelector('.typing-txt');
    setInterval(function(){
        idx=0;                
        typingData='';
        function typingFunction(){
            setTimeout(function(){
                if(idx<allTxt.length){
                    typingData = typingData + allTxt[idx++];
                    typTxt.innerText = typingData;
                    typingFunction();
                }
            },100)
        };
        typingFunction();
    },allTxt.length*120)
    // 팝업창오픈
    // let _openPop = $('#design .g-container li a');
    // let _popBox = $('.pop-box');
    // $(_openPop).click(function(){
    //     $('.pop-box').addClass('active');
    //     // console.log(popImg);
    //     return false;
    // })
    // 팝업창닫기
    // $('.pop-box .fas').click(function(){
    //     $('.pop-box').removeClass('active');
    // })
})

