const setCookie = (name, value, exp) => {
    var expires = ""

    if ( exp ) {
        var date = new Date()
        date.setTime(date.getTime() + exp)
        expires = "; expires=" + date + ";"
    }

    document.cookie = name + "=" + (value || "") + expires
}

document.addEventListener( 'DOMContentLoaded', () => {

})