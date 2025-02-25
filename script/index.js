 //web스와이퍼

 const webSlid = new Swiper('.web_swiper',{
    spaceBetween:80,
    autoplay:{delay:0,},
    loop:true,
    speed:5000,
    navigation:{
        prevEl:'.web_swiper .swiper-scrollbtn .prev',
        nextEl:'.web_swiper .swiper-scrollbtn .next',
    },
 })
 
 
 //배너디자인
const bnrSlide = new Swiper('.bnr',{
    autoplay:{delay:0,},
    loop:true,
    speed:4000,
    slidesPerView:3,
})

//sns디자인
const snsSlide = new Swiper('.sns',{
    autoplay:{delay:0,},
    loop:true,
    speed:6000,
    slidesPerView:4,
})

//팝업 출력과 숨기기
const popup_bg = document.querySelector('.popup_bg')
const bnr = document.querySelectorAll('.bnr img')
const sns = document.querySelectorAll('.sns img')

popup_bg.style.display = 'none' //팝업숨기기
for(let i of bnr){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '900px';
        popup_bg.children[0].style.marginTop = '300px';

        //console.log(i.src)
        //console.log(popup_bg.children[0].children[0])
    })
}
for(let i of sns){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '80px';

        //console.log(i.src)
        //console.log(popup_bg.children[0].children[0])
    })
}

//팝업 닫히기 
popup_bg.addEventListener('click',()=>{
    popup_bg.style.display = 'none'
})
