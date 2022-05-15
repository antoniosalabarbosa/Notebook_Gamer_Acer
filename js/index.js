const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("header.hd_nav nav");

function toggleNavRes(){
    if(menu_res.style.right == '0%')
        menu_res.style.right = '-100%';
    else
        menu_res.style.right = '0%';
}

burguer.addEventListener("click", toggleNavRes);

const links = document.querySelectorAll("header.hd_nav nav a");
const section = document.querySelectorAll("section");

function jumpTo(id){
    let url = location.href;
    location.replace("#"+id);
    history.replaceState(null, null, url);
    
    window.scrollBy({
        top: -110,
        behavior: 'smooth',
    });
}

links.forEach( (e) => {
    e.addEventListener("click", ()=> {
        jumpTo(e.textContent)
    });
});