document.addEventListener( 'DOMContentLoaded', () => {
    const nav = document.querySelector( '.nav' )
    const navLinks = document.querySelectorAll( '.nav__link' )
    const navMenuButton = document.querySelector( '.nav__menu__button' )
    const contactButton = document.querySelector( '.nav__link__button' )
    const contactForm = document.querySelector( '.contact__container' )

    let navWhite = false

    window.addEventListener( 'scroll', () => {
        const y = window.scrollY

        if ( y > .5 * window.innerHeight && !navWhite ) {
            navWhite = true
            nav.classList.remove( 'nav__fade-out' )
            nav.classList.add( 'nav__fade-in' )
            navMenuButton.classList.remove( 'nav__button__fade-out' )
            navMenuButton.classList.add( 'nav__button__fade-in' )

            Array.from( navLinks ).forEach( ( el ) => {
                el.classList.remove( 'nav__link__fade-out' )
                el.classList.add( 'nav__link__fade-in' )
            })
        }

        if ( y < .5 * window.innerHeight && navWhite ) {
            navWhite = false
            nav.classList.remove( 'nav__fade-in' )
            nav.classList.add( 'nav__fade-out' )
            navMenuButton.classList.remove( 'nav__button__fade-in' )
            navMenuButton.classList.add( 'nav__button__fade-out' )

            Array.from( navLinks ).forEach( ( el ) => {
                el.classList.remove( 'nav__link__fade-in' )
                el.classList.add( 'nav__link__fade-out' )
            })
        }
    })

    contactButton.addEventListener( 'click', () => {
        contactForm.scrollIntoView( { behavior: 'smooth' } )
    })
})