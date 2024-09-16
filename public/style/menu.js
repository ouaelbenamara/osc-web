function menu() {
    let menu = document.getElementById('menu');
    let btn = document.getElementById('hamburger');
    
    let closeMenuOnClickOutside = (e) => {
        if (e.target.id !== "menu" && e.target.id !== "hamburger") {
            menu.style.left = '-100%';
            document.removeEventListener("click", closeMenuOnClickOutside);
        }
    };

    btn.onclick = (ev) => {
        if (menu.style.left !== '0px') {
            // Open Menu
            menu.style.left = '0px';
            ev.stopPropagation();
            
            // Add event listener to close menu when clicking outside
            document.addEventListener("click", closeMenuOnClickOutside);
        } else {
            // Close Menu
            menu.style.left = '-100%';
            document.removeEventListener("click", closeMenuOnClickOutside);
        }
    };
}

window.innerWidth < 767 ? menu() : null;

window.onresize = () => {menu()};