/*
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

    document.addEventListener('click', ( event ) => {
        //const clicked = event.target.id == 'about-us'
        const clicked = event.target.getAttribute( 'data-menu' ) == 'about-us'

        if ( !clicked) {
            if ( aboutUsDropdownOpen ) {
                closeAboutUsDropdown()
            }
        }
    })

    document.addEventListener('click', ( event ) => {
        const clicked = event.target.id == 'chapters'

        if ( !clicked) {
            if ( chaptersDropdownOpen ) {
                closeChaptersDropdown()
            }
        }
    })
})*/

class DropdownMenu {
    constructor( linkSelector, menuSelector, menuName ) {
        this.linkSelector = linkSelector
        this.menuSelector = menuSelector
        this.menuName = menuName

        this.linkElement = document.querySelector( linkSelector )
        this.menuElement = document.querySelector( menuSelector )

        this.opened = false

        this.linkElement.addEventListener( 'click', () => {
            if ( this.opened ) {
                this.close()
            } else {
                this.open()
            }
        })

        document.addEventListener( 'click', ( event ) => {
            const menu = event.target.getAttribute( 'data-menu' ) 

            if ( !( menu == this.menuName ) ) {
                if ( this.opened ) {
                    this.close()
                }
            }
        })
    }

    close = () => {
        this.menuElement.classList.remove( 'nav__dropdown__fade-in' )
        this.menuElement.classList.add( 'nav__dropdown__fade-out' )

        setTimeout(() => {
            // dropdown position
            this.menuElement.style.left = '-500px'
            this.menuElement.style.top = '0px'
            this.menuElement.style.zIndex = '-1'
        }, 250)

        this.opened = false
    }

    open = () => {
        // position
        const boundingRect = this.linkElement.getBoundingClientRect()
        const bottom = boundingRect.bottom
        const left = boundingRect.left

        // dropdown position
        this.menuElement.style.left = `${left}px`
        this.menuElement.style.top = `${bottom + 10}px`
        this.menuElement.style.zIndex = '998'

        this.menuElement.classList.remove( 'nav__dropdown__fade-out' )
        this.menuElement.classList.add( 'nav__dropdown__fade-in' )

        this.opened = true
    }
}

document.addEventListener( 'DOMContentLoaded', () => {
    // DOM
    //const aboutUsLink = document.querySelector( '.nav__link__about-us' )
    //const chaptersLink = document.querySelector( '.nav__link__chapters' )
    //const aboutUsDropdown = document.querySelector( '.nav__dropdown__about-us' )
    // /const chaptersDropdown = document.querySelector( '.nav__dropdown__chapters' )

    const aboutUsDropdown = new DropdownMenu(
        '.nav__link__about-us', '.nav__dropdown__about-us', 'about-us')
    const chaptersDropdown = new DropdownMenu(
        '.nav__link__chapters', '.nav__dropdown__chapters', 'chapters')
    const rushDropdown = new DropdownMenu(
        '.nav__link__rush', '.nav__dropdown__rush', 'rush')
    const resourcesDropdown = new DropdownMenu(
        '.nav__link__resources', '.nav__dropdown__resources', 'resources')
})