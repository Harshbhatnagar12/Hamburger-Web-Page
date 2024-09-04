const hamburgerIcon = document.querySelector('.hamburger-menu-conatiner')
const headerContent = document.querySelector('.header-conetnt')
const closeIcon = document.querySelector('.close-icon')


hamburgerIcon.addEventListener('click',()=>{
       headerContent.classList.add('menu-open')
})

closeIcon.addEventListener('click',()=>{
    headerContent.classList.remove('menu-open')
})