// BOM - Browser Object Model
// # Screen Obj
console.log(window.screen); // returns the visitor's screen info

// # Location Obj
location.href = "https://google.com";
// OR
window.location.assign(url);
window.location = url;
window.location.href = url;

// # History Obj
history.back(); //- same as clicking back in the browser
history.forward(); //- same as clicking forward in the browser

// # Navigator Obj
navigator.appVersion;
navigator.platform;
navigator.webdriver;
navigator.product; //  returns the product name of the browser engine
navigator.cookieEnabled;
