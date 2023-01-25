const btn_taggle = document.querySelector(".nav-toggle")
const navItems =document.querySelector(".nav-items");

btn_taggle.addEventListener("click", ()=>{
    navItems.classList.toggle("nav-menu_visible");
    if(navItems.classList.contains("nav-menu_visible")){
        navItems.setAttribute("aria-label", "Cerrar menu");
    }else{
        navItems.setAttribute("aria-label", "Abrir menu");
    }
})