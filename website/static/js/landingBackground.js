const createImage = ( container, src ) => {
    const image = new Image()

    image.src = src
    image.classList.add( 'landing__background' )

    container.appendChild( image )

    return image
}

const crossfadeImages = ( container, front ) => {
    front.style.opacity = 1;
  
    let fadeInterval = setInterval(() => {
        front.style.opacity -= 0.01;

        if (front.style.opacity <= 0) {
            clearInterval(fadeInterval)
        }
    }, 15);

    fadeInterval()
}

document.addEventListener( 'DOMContentLoaded', () => {
    const container = document.querySelector( '.landing__background__container' )

    const back = createImage( container, '/static/img/chapters/delta_chi.jpg' )
    const front = createImage( container, '/static/img/chapters/sigma_phi_epsilon.jpg' )

    crossfadeImages( container, front )
})