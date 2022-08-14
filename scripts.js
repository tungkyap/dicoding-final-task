// Get element value

let menuContainer = document.getElementById('navbarList');

let list = menuContainer.getElementsByClassName('navbar-item');

let logo = document.getElementsByClassName('navbar-logo');


// Loop
for (let i = 0; i < list.length; i++) {
    let currentActive = document.getElementsByClassName('active');
    list[i].addEventListener('click', function() {
        if (currentActive.length > 0) {
            currentActive[0].className = currentActive[0].className.replace('active', '');
        }
        this.className = this.className + ' active'; 
    });
    logo[0].addEventListener('click', function() {
        
        if (currentActive.length > 0) {
            currentActive[0].className = currentActive[0].className.replace('active', '');
        }
        list[0].className = list[0].className + ' active';
    });
}