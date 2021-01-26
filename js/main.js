'use strict';


// 상단 바 고정 및 배경색 채우기 동작

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log('navbarHeight: ${navbarHeight}');

    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark'); 
    }
});

// 메뉴 클릭 시 스크롤 탭핑(원하는 위치로 이동)
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
});


// 반응형_ 햄버거버튼 클릭 시 메뉴 나오는 동작
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', ()=> {
    navbarMenu.classList.toggle('open');
});


// Contact me 버튼 클릭 시 스크롤 탭핑
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});

// 스크롤 시 서서히 Fade-out 되는 효과(Height과 숫자식 대입 중요)
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Top버튼 일정 height 도달 시 나타나도록 동작
const topBtn = document.querySelector('.top');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }
});

// Top버튼 클릭 시 스크롤업
topBtn.addEventListener('click', () => {
    scrollIntoView('#home');
});

const navLogo = document.querySelector('.navbar__logo');

navLogo.addEventListener('click', () => {
    scrollIntoView('#home');
});


// Project 애니메이션 동작
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
   const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
   if(filter == null) {
       return;
   }




// Project 내 이전 선택된 아이템에서 Select를 지우기
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
target.classList.add('selected');

// 프로젝트 버튼 필터링 및 애니메이션 효과
   projectContainer.classList.add('anim-out');

   setTimeout(() => {
   projects.forEach((project) => {
       if(filter === '*' || filter === project.dataset.type) {
           project.classList.remove('invisible');
       } else {
            project.classList.add('invisible');
       }
   });
    projectContainer.classList.remove('anim-out');
   }, 300);
   
});
 






function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}
