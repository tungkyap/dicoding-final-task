// Get element value

let menuContainer = document.getElementById('navbarList');

let list = menuContainer.getElementsByClassName('navbar-item');

let logo = document.getElementsByClassName('navbar-logo');

let panel = document.getElementById('panel');

// Show panel
function showPanel() {
    panel.classList.toggle('show');
}

// Close panel when clicked outside panel / on window clicked
window.onclick = function(event) {
    if (!event.target.matches('.info') && !event.target.matches('.fas')) {
        let panelClass = document.getElementsByClassName('panel');
        for (let i = 0; i < panelClass.length; i++) {
            let openPanel = panelClass[i];
            if (openPanel.classList.contains('show')) {
                openPanel.classList.remove('show');
            }
        }
    }
}


// with trigger
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

// Scrollspy and smooth scrolling

const makeNavLinksSmooth = ( ) => {
    const navLinks = document.querySelectorAll( '.navbar-link' );
    for ( let n in navLinks ) {
      if ( navLinks.hasOwnProperty( n ) ) {
        navLinks[ n ].addEventListener( 'click', e => {
          e.preventDefault( );
          document.querySelector( navLinks[ n ].hash )
            .scrollIntoView( {
              behavior: "smooth"
            } );
        } );
      }
    }
  }
  
  const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.section' );
  
    window.onscroll = ( ) => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
      for ( let s in sections )
      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
          const id = sections[ s ].id;
          document.querySelector( '.active' ).classList.remove( 'active' );
          document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
        }
    } 
  }
  
  makeNavLinksSmooth( );
  spyScrolling( );  

//   Auto scroll top

window.addEventListener('scroll', e => {
    let elementScroll = document.getElementById('autoScrollTop');
    if(window.scrollY > 200) {
      elementScroll.classList.add('visible');
    } else {
      elementScroll.classList.remove('visible');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  