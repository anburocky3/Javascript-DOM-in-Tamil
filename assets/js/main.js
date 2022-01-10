// Window Object
// window.innerHeight, window.innerWidth
// window.open(); // - open a new window
// window.close() // - close the current window
// window.moveTo(500, 100); // - move the current window
// window.resizeTo() // - resize the current window

// window.alert("Hello"); // Alerts
// window.prompt(); // Prompts for value
// window.print(); // Prints current window
// console.log(); // Helps to print data to console.

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
