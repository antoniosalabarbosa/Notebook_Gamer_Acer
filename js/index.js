const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("header.hd_nav nav");

burguer.addEventListener("click", ()=>{
    if(menu_res.style.right == '-100%')
        menu_res.style.right = '0%';
    else
        menu_res.style.right = '-100%';
});