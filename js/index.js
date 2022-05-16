const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("header.hd_nav nav");

function toggleNavRes(){
    if(menu_res.style.right == '0%')
        menu_res.style.right = '-100%';
    else
        menu_res.style.right = '0%';
}

burguer.addEventListener("click", toggleNavRes);

/*
const links = document.querySelectorAll("header.hd_nav nav a");

let url = location.href;
function replaceUrl(){
    history.replaceState(null, null, url);
    history.pushState(null, document.title, url);
}

links.forEach((e)=>{
    e.addEventListener("click",()=>{
        replaceUrl();
    });
});
*/