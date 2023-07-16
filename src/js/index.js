const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const nav = document.getElementById('myNav')
const hero = document.getElementById('myHero')
const heroOffset = hero.offsetHeight
window.onscroll = function(){
    var scrollPosition = window.pageOffset || document.documentElement.scrollTop;
    if(scrollPosition >= heroOffset){
        nav.classList.add("bg-violet-500")
        nav.classList.add("rounded")
        nav.classList.add("pt-4")
        nav.classList.remove("transparant")
    }else if(!mobileMenu.classList.contains('hidden')){
        nav.classList.add("transparant")
        nav.classList.remove("bg-violet-500")
    }
    else{
        nav.classList.remove("bg-violet-500")
        nav.classList.remove("mt-2")
        nav.classList.add("transparant")

    }
}
  menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('md:hidden');
    menuBtn.classList.toggle('text-slate-950')
    if(nav.classList.contains('bg-violet-500')){
        nav.classList.toggle('bg-violet-500')
    }
  });   

  const openBtn = document.getElementById('openBtn');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('closeBtn');

  openBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  const carouselInner = document.getElementById('carouselInner');
  let currentIndex = 0;
  const totalItems = carouselInner.childElementCount;
  const itemWidth = carouselInner.offsetWidth;

