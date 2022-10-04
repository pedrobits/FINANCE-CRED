    const nav = document.getElementById('navbar');   
    const inicio = document.getElementById('TEXT') 

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 500) {
            nav.classList.add('active_navbar');
        } else {
            nav.classList.remove('active_navbar')
        }
    })

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 500) {
            inicio.classList.add('NullText');
        } else {
            inicio.classList.remove('NullText')
        }
    })