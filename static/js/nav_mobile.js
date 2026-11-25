document.addEventListener( 'DOMContentLoaded', () => {
    let mobileMenuOpen = false

    // DOM
    const mobileMenu = document.querySelector( '.nav__mobile__menu' )
    const mobileMenuOpenButton = document.querySelector( '.nav__menu__button' )
    const mobileMenuCloseButton = document.querySelector( '.nav__mobile__menu__close__button' )
    const rushLinks = [...document.querySelectorAll( '.rush__link' )]

    // functionality
    const openMobileMenu = () => {
        if ( !mobileMenuOpen ) {
            mobileMenu.classList.remove( 'nav__mobile__menu__close' )
            mobileMenu.classList.add( 'nav__mobile__menu__open' )

            mobileMenuOpen = true
        }
    }

    const closeMobileMenu = () => {
        if ( mobileMenuOpen ) {
            mobileMenu.classList.remove( 'nav__mobile__menu__open' )
            mobileMenu.classList.add( 'nav__mobile__menu__close' )

            mobileMenuOpen = false
        } 
    }

    const toggleMobileMenu = () => {
        if ( mobileMenuOpen ) {
            closeMobileMenu()
        } else {
            openMobileMenu()
        }
    }

    const onRushPage = () => {
        let href = window.location.split( '#' )[0]
        let hrefComponents = href.split( '/' )

        if ( hrefComponents[hrefComponents.length - 1] == 'rush' ) {
            return true
        }

        return false
    }

    const handleRushPage = () => {
        if ( onRushPage ) {
            closeMobileMenu()
        }
    }

    mobileMenuOpenButton.addEventListener( 'click', toggleMobileMenu )
    mobileMenuCloseButton.addEventListener( 'click', toggleMobileMenu )
    rushLinks.forEach(( elem ) => {
        elem.addEventListener( 'click', handleRushPage )
    })
})