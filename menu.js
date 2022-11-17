document.addEventListener("DOMContentLoaded",function(){

    
    function showMenu(){
        const menu = document.querySelector("section.menu");
        menu.style.height = "100%";
    }
    
    function closeMenu(){
        const menu = document.querySelector("section.menu");
        menu.style.height = "0";
    }
    
    function addclickToMenuItems(){
        const menuItems = document.querySelectorAll("section.menu nav ul li");
        for (let menuItem of menuItems){
            menuItem.addEventListener("click", closeMenu);
        }
    }
    
    document.getElementById("menu-button").addEventListener("click", showMenu);
    document.getElementById("close-menu").addEventListener("click", closeMenu);
    addclickToMenuItems();

    window.addEventListener("scroll", function(){
        console.log(this.window.scrollY);
        let intro = this.document.querySelector(".intro");
        if(this.window.scrollY >= (intro.offsetheight + intro.offsettop)){
            this.document.querySelector(".header").style.position = "sticky";
        } else {
            this.document.querySelector(".header").style.position = "revert";
        }
    })
    
})
