const avatar=document.querySelector('.avatar');
const shareBottom=document.querySelector('.share-bottom');
const shareIcon=document.querySelector('.share-bg');
const triunghi=document.querySelector('.triunghi');

if(window.innerWidth<1440){
    avatar.addEventListener('click', (e) => {
        e.preventDefault();
        avatar.classList.add('active');
        shareBottom.classList.add('active');
    })
    shareBottom.addEventListener('click', (e) => {
        e.preventDefault();
        shareBottom.classList.remove('active');
        avatar.classList.remove('active');

    })

} else{

    avatar.addEventListener('click', (e) => {
        e.preventDefault();
        shareBottom.classList.toggle('active');
        triunghi.classList.toggle('active');
        // shareIcon.style.backgroundColor.toggle=red;
        console.log(shareIcon)
    })

}