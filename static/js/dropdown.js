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

        window.addEventListener( 'scroll', () => {
            if ( this.opened ) {
                this.close()
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
    const aboutUsDropdown = new DropdownMenu(
        '.nav__link__about-us', '.nav__dropdown__about-us', 'about-us')
    const chaptersDropdown = new DropdownMenu(
        '.nav__link__chapters', '.nav__dropdown__chapters', 'chapters')
    const rushDropdown = new DropdownMenu(
        '.nav__link__rush', '.nav__dropdown__rush', 'rush')
    const resourcesDropdown = new DropdownMenu(
        '.nav__link__resources', '.nav__dropdown__resources', 'resources')
    const philanthropyDropdown = new DropdownMenu(
        '.nav__link__philanthropy', '.nav__dropdown__philanthropy', 'philanthropy')
})