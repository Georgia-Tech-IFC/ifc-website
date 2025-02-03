const createImage = ( src ) => {
    const image = new Image()
    image.classList.add( 'landing__background' )
    image.src = src

    return image
}

const crossfadeImage = ( front, back ) => {
    front.style.opacity = 1
  
    let fadeInterval = setInterval(() => {
        front.style.opacity -= 0.01;

        if (front.style.opacity <= 0) {
            clearInterval(fadeInterval)
        }
    }, 15);
}

const initImageBackground = () => {
    const container = document.querySelector( '.landing__background__container' )

    let images = []
    if ( window.innerWidth < 465 ) {
        images = [
            '/static/img/chapters/mobile/alpha_epsilon_pi.png',
            '/static/img/chapters/mobile/alpha_sigma_phi.png',
            '/static/img/chapters/mobile/chi_psi.png',
            '/static/img/chapters/mobile/delta_chi.png',
            '/static/img/chapters/mobile/phi_kappa_theta.png',
            '/static/img/chapters/mobile/phi_sigma_kappa.png',
            '/static/img/chapters/mobile/sigma_phi_epsilon.png'
        ]
    } else {
        images = [
            '/static/img/chapters/alpha_epsilon_pi.jpg',
            '/static/img/chapters/alpha_sigma_phi.jpg',
            '/static/img/chapters/chi_psi.jpg',
            '/static/img/chapters/delta_chi.jpg',
            '/static/img/chapters/lambda_chi_alpha.jpg',
            '/static/img/chapters/phi_kappa_theta.jpg',
            '/static/img/chapters/phi_sigma_kappa.jpg',
            '/static/img/chapters/sigma_phi_epsilon.jpg'
        ]
    }

    let back = createImage( images[1] )
    container.appendChild( back )

    let front = createImage( images[0] )
    container.appendChild( front )

    let i = 2

    setInterval(() => {
        crossfadeImage( front )

        setTimeout(() => {
            container.removeChild( front )

            front = back

            if ( i == images.length ) {
                back = createImage( images[0] )
                container.prepend( back )

                i = 0
            } else {
                back = createImage( images[i] )
                container.prepend( back )

                i += 1
            }
        }, 2000)
    }, 8000)
}

const typewriterEffect = () => {
    const line1 = document.querySelector( '.welcome__line-1' )
    const line2 = document.querySelector( '.welcome__line-2' )
    const buttonContainer = document.querySelector( '.welcome__button__container' )
    const welcomeContainer = document.querySelector( '.welcome__container' )

    let time = 25

    let i = 0

    let line1Int = setInterval(() => {
        if ( i == line1.children.length ) {
            let j = 0

            let line2Int = setInterval(() => {
                if ( j == line2.children.length ) {
                    setTimeout(() => {
                        buttonContainer.classList.add( 'welcome__button__fade-in' )
                        welcomeContainer.classList.add( 'welcome__container__fade-in' )
                    }, 25)

                    clearInterval( line2Int )
                }

                if ( j < line2.children.length ) {
                    line2.children[j].classList.remove( 'welcome__char__trans' )
                    line2.children[j].classList.add( 'welcome__char__show' )
                }

                j++
            }, time)

            clearInterval( line1Int )
        }

        if ( i < line1.children.length ) {
            line1.children[i].classList.remove( 'welcome__char__trans' )
            line1.children[i].classList.add( 'welcome__char__show' )
        }
        

        i++
    }, time)
}

const parallaxScroll = () => {
    const backgroundContainer = document.querySelector( '.landing__background__container' )
    const backgroundFilter = document.querySelector( '.landing__background__filter' )
    const welcomeSection = document.querySelector( '.welcome__section' )

    window.addEventListener( 'scroll', () => {
        const speed = 0.5
        const top = window.scrollY
        const translate = top * speed
    
        backgroundContainer.style.transform = `translateY(${translate}px)`
        backgroundFilter.style.transform = `translateY(${translate}px)`
        welcomeSection.style.transform = `translateY(${translate}px)`
    })
}

document.addEventListener( 'DOMContentLoaded', () => {
    initImageBackground()
    typewriterEffect()
    parallaxScroll()
})