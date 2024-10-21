document.addEventListener( 'DOMContentLoaded', () => {
    // DOM
    const aboutUsLink = document.querySelector( '.nav__link__about-us' )
    const chaptersLink = document.querySelector( '.nav__link__chapters' )
    const aboutUsDropdown = document.querySelector( '.nav__dropdown__about-us' )
    const chaptersDropdown = document.querySelector( '.nav__dropdown__chapters' )

    // state
    let aboutUsDropdownOpen = false
    let chaptersDropdownOpen = false

    const closeAboutUsDropdown = () => {
        aboutUsDropdown.classList.remove( 'nav__dropdown__fade-in' )
        aboutUsDropdown.classList.add( 'nav__dropdown__fade-out' )

        setTimeout(() => {
            // dropdown position
            aboutUsDropdown.style.left = '-500px'
            aboutUsDropdown.style.top = '0px'
            aboutUsDropdown.style.zIndex = '-1'
        }, 250)

        aboutUsDropdownOpen = false
    }
    
    const openAboutUsDropdown = () => {
        // position
        const boundingRect = aboutUsLink.getBoundingClientRect()
        const bottom = boundingRect.bottom
        const left = boundingRect.left

        // dropdown position
        aboutUsDropdown.style.left = `${left}px`
        aboutUsDropdown.style.top = `${bottom + 10}px`
        aboutUsDropdown.style.zIndex = '998'

        aboutUsDropdown.classList.remove( 'nav__dropdown__fade-out' )
        aboutUsDropdown.classList.add( 'nav__dropdown__fade-in' )

        aboutUsDropdownOpen = true
    }

    const closeChaptersDropdown = () => {
        chaptersDropdown.classList.remove( 'nav__dropdown__fade-in' )
        chaptersDropdown.classList.add( 'nav__dropdown__fade-out' )

        setTimeout(() => {
            // dropdown position
            chaptersDropdown.style.left = '-500px'
            chaptersDropdown.style.top = '0px'
            chaptersDropdown.style.zIndex = '-1'
        }, 250)

        chaptersDropdownOpen = false
    }

    const openChaptersDropdown = () => {
        // position
        const boundingRect = chaptersLink.getBoundingClientRect()
        const bottom = boundingRect.bottom
        const left = boundingRect.left

        // dropdown position
        chaptersDropdown.style.left = `${left}px`
        chaptersDropdown.style.top = `${bottom + 10}px`
        chaptersDropdown.style.zIndex = '998'

        chaptersDropdown.classList.remove( 'nav__dropdown__fade-out' )
        chaptersDropdown.classList.add( 'nav__dropdown__fade-in' )

        chaptersDropdownOpen = true
    }

    aboutUsLink.addEventListener( 'click', () => {
        if ( aboutUsDropdownOpen ) {
            closeAboutUsDropdown()
        } else {
            if ( chaptersDropdownOpen ) {
                closeChaptersDropdown()
            }

            openAboutUsDropdown()
        }
    })

    chaptersLink.addEventListener( 'click', () => {
        if ( chaptersDropdownOpen ) {
            closeChaptersDropdown()
        } else {
            if ( aboutUsDropdownOpen ) {
                closeAboutUsDropdown()
            }

            openChaptersDropdown()
        }
    })

    document.addEventListener('click', (event) => {
        const aboutUsClicked = event.target.id == 'about-us'
        const chaptersClicked = event.target.id == 'chapters'

        if ( !aboutUsClicked && !chaptersClicked ) {
            if ( chaptersDropdownOpen ) {
                closeChaptersDropdown()
            }

            if ( aboutUsDropdownOpen ) {
                closeAboutUsDropdown()
            }
        }
    })
})