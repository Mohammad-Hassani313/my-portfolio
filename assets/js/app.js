let toggleState = 0;
function toggleMode(img){
    document.querySelector('.nav-list-res').style.right = "-50%";
    if(!toggleState){
        document.body.classList.toggle('dark-theme');
        img.innerHTML = "Light Mode";
        document.querySelector('#theme-responsive').innerHTML = "Light Mode";
        document.querySelector('#theme-img').src = "./assets/images/dark/sun.png";
        document.querySelector('#logo').src = "./assets/images/dark/mohammad-dark.png";
        document.querySelector('#photo-bg').src = "./assets/images/dark/background.png";
        document.querySelector('#linkedin').src = "./assets/images/dark/linkedin.png";
        document.querySelector('#github').src = "./assets/images/dark/github.png";
        document.querySelector('#email').src = "./assets/images/dark/email.png";
        document.querySelector('#development').src = "./assets/images/dark/development.png";
        document.querySelector('#education').src = "./assets/images/dark/education.png";
        document.querySelector('#resp-nav-icon').src = "./assets/images/dark/menu.png";
        document.querySelector('#close-nav').src = "./assets/images/dark/times.png";
        let navigation_icon = document.querySelectorAll('.icon-navigation');
        for(let i=0 ; i<navigation_icon.length ; i++){
            if(i == 3)
                navigation_icon[i].src = "./assets/images/dark/up-arrow-dark.png";
            else
                navigation_icon[i].src = "./assets/images/dark/down-arrow-dark.png";
        }
        toggleState = 1;
    
        document.querySelector('.closing-nav').style.display = "none";
        
    }else{
        document.body.classList.toggle('dark-theme');
        img.innerHTML = "Dark Mode";
        document.querySelector('#theme-responsive').innerHTML = "Dark Mode";
        document.querySelector('#theme-img').src = "./assets/images/moon.png";
        document.querySelector('#logo').src = "./assets/images/mohammad.png";
        document.querySelector('#photo-bg').src = "./assets/images/background.png";
        document.querySelector('#linkedin').src = "./assets/images/linkedin.png";
        document.querySelector('#github').src = "./assets/images/github.png";
        document.querySelector('#email').src = "./assets/images/email.png";
        document.querySelector('#development').src = "./assets/images/development.png";
        document.querySelector('#education').src = "./assets/images/education.png";
        document.querySelector('#resp-nav-icon').src = "./assets/images/menu.png";
        document.querySelector('#close-nav').src = "./assets/images/times.png";
        let navigation_icon = document.querySelectorAll('.icon-navigation');
        for(let i=0 ; i<navigation_icon.length ; i++){
            if(i == 3)
                navigation_icon[i].src = "./assets/images/up-arrow.png";
            else
            navigation_icon[i].src = "./assets/images/down-arrow.png";
    }
    toggleState = 0;
    
    document.querySelector('.closing-nav').style.display = "none";
    }
}
function openNav(){
    document.querySelector('.nav-list-res').style.right = "0";
    document.querySelector('.closing-nav').style.display = "block";
}
function closeNav(){
    document.querySelector('.nav-list-res').style.right = "-100%";
    document.querySelector('.closing-nav').style.display = "none";
}