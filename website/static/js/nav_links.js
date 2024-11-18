document.addEventListener( 'DOMContentLoaded', () => {
    const contactForm = document.querySelector( '.contact__container' )

    if ( window.location.hash === '#contact' ) {
        contactForm.scrollIntoView( { behavior: 'smooth' } )
    }
})