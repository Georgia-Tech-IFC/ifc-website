function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

const setCooki = (name, value, exdays) => {
    const date = new Date();
}

/*
const d = new Date();
let diff = d.getTimezoneOffset();
console.log(diff)

const date = new Date();

// Get the local date string in the user's timezone
const localDate = date.toLocaleDateString();

// Get the local date string in a specific timezone
const newYorkDate = date.toLocaleDateString('en-US', { timeZone: 'America/New_York' });
const londonDate = date.toLocaleDateString('en-GB', { timeZone: 'Europe/London' });

console.log('Local Date:', localDate);
console.log('New York Date:', newYorkDate);
console.log('London Date:', londonDate);


document.cookie = "username=John Smith; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";
document.cookie = "user=John Smith; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/";

let x = document.cookie;
*/