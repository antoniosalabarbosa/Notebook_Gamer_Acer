const burguer = document.getElementById("burguer");
const menu_res = document.querySelector("header.hd_nav nav");

function toggleNavRes(){
    if(menu_res.style.right == '0%'){
        menu_res.style.right = '-100%';
        burguer.classList.remove("active");
    }
    else{
        menu_res.style.right = '0%';
        burguer.classList.add("active");
    }
}

burguer.addEventListener("click", toggleNavRes);