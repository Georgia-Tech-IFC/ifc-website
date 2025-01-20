document.addEventListener( 'DOMContentLoaded', () => {
    let mobileMenuOpen = false

    // DOM
    const mobileMenu = document.querySelector( '.nav__mobile__menu' )
    const mobileMenuOpenButton = document.querySelector( '.nav__menu__button' )
    const mobileMenuCloseButton = document.querySelector( '.nav__mobile__menu__close__button' )

    // functionality
    const toggleMobileMenu = () => {
        if ( mobileMenuOpen ) {
            mobileMenu.classList.remove( 'nav__mobile__menu__open' )
            mobileMenu.classList.add( 'nav__mobile__menu__close' )

            mobileMenuOpen = false
        } else {
            mobileMenu.classList.remove( 'nav__mobile__menu__close' )
            mobileMenu.classList.add( 'nav__mobile__menu__open' )

            mobileMenuOpen = true
        }
    }

    mobileMenuOpenButton.addEventListener( 'click', toggleMobileMenu )
    mobileMenuCloseButton.addEventListener( 'click', toggleMobileMenu )
})