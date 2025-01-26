document.addEventListener( 'DOMContentLoaded', () => {
    const contactButton = document.querySelector( '.nav__link__button' )
    const contactForm = document.querySelector( '.contact__container' )

    contactButton.addEventListener( 'click', () => {
        contactForm.scrollIntoView( { behavior: 'smooth' } )
    })
})