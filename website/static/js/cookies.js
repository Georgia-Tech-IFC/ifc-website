const setCookie = (name, value, exp) => {
    var expires = ''

    if ( exp ) {
        var date = new Date()
        date.setTime(date.getTime() + exp)
        expires = '; expires=' + date + ';'
    }

    document.cookie = name + '=' + (value || '') + expires
}

const getCookie = ( name ) => {
    let cookies = document.cookie.split( ';' )
    let cvalue = ''

    cookies.forEach( ( cookie ) => {
        let cname = cookie.split( '=', 2 )[0].trim()

        if ( name == cname ) {
            cvalue = cookie.split( '=', 2 )[1].trim()
        }
    })

    return cvalue;
}

document.addEventListener( 'DOMContentLoaded', () => {
    // DOM
    const cookiesBanner = document.querySelector( '.cookies__banner' )
    const acceptButton = document.querySelector( '.cookies__accept' )
    const rejectButton = document.querySelector( '.cookies__reject' )

    const fadeOutBanner = () => {
        cookiesBanner.classList.add( 'cookies__banner__fade-out' )
    }

    if ( getCookie( 'gtifc-no-cookie' ) != 'true' && getCookie( 'gtifc-no-cookie' ) != 'false' ) {
        cookiesBanner.classList.remove( 'cookies__banner__no-display' )

        const day = 1000 * 60 * 60 * 24

        acceptButton.addEventListener( 'click', () => {
            setCookie( 'gtifc-no-cookie', 'false', day )
            fadeOutBanner()
        })
    
        rejectButton.addEventListener( 'click', () => {
            setCookie( 'gtifc-no-cookie', 'true', day )
            fadeOutBanner()
        })
    }
})