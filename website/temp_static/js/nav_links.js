document.addEventListener( 'DOMContentLoaded', () => {
    const contactForm = document.querySelector( '.contact__container' )
    const rulesAndReporting = document.querySelector( '#rules-and-reporting' )
    const faqs = document.querySelector( '#faqs' )

    if ( window.location.hash === '#contact' ) {
        contactForm.scrollIntoView( { behavior: 'smooth' } )
    } else if ( window.location.hash === '#rules-and-reporting' ) {
        rulesAndReporting.scrollIntoView( { behavior: 'smooth' } )
    } else if ( window.location.hash === '#faqs' ) {
        faqs.scrollIntoView( { behavior: 'smooth' } )
    }
})