let sections = document.querySelectorAll('sections');
let navLink = document.querySelectorAll('header secondary-bg nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header secondary-bg nav li a[href*=' +id+ ']').classList.add('active');
            })
        }
    })
}