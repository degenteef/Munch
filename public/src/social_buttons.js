// Links
const destTwitter = "";
const destBuy = `https://pump.fun/`;
const destTelegram = "";
const destDext = "";
const destBe = "";
const destDex = "";
var windowFeatures = "width=900,height=900,resizable=yes,scrollbars=yes,status=yes";


/**FIRST CLASS NAME SHOULD BE THE NAME OF WHERE TO GO 
 * This adds an event listner to every button, on click go to dest
*/

// Select all buttons and convert the NodeList to an array
const buttons = document.querySelectorAll("button");
const buttonArray = Array.from(buttons);

// Log the class name of each button
for (let i = 0; i < buttonArray.length; i++) {
    let gotodest = buttonArray[i].classList[0]
};

// Function to handle click event, Add social buttons here. 
function handleClick(event) {
    const firstClassName = event.target.classList[0];
    
    if (firstClassName === 'tw') {
        window.open(destTwitter, "_blank", windowFeatures);
    } else if (firstClassName === 'buy') {
        window.open(destBuy, "_blank", windowFeatures);
    } else if (firstClassName === 'tg') {
        window.open(destTelegram, "_blank", windowFeatures);
    } else if (firstClassName === 'dext') {
        window.open(destDext, "_blank", windowFeatures);
    } else if (firstClassName === 'be') {
        window.open(destBe, "_blank", windowFeatures);
    } else if (firstClassName === 'dex') {
        window.open(destDex, "_blank", windowFeatures);
    } 
    else {
        console.log('Unknown button class:', firstClassName);
    }
};

// Add event listener to each button
buttonArray.forEach(button => {
    button.addEventListener("click", handleClick);
});
