var share = document.getElementById("share")
var whatsapp = document.getElementById("whatsapp")
var facebook = document.getElementById("facebook")
var twitter = document.getElementById("twitter")

var background = document.getElementById("background")

var primeColors = [
    "#ff7070",  
	"#a5efac",
	"#6cbcf7",  
	"#a5557d", 
	"#be94f6" 
]

var betaColors = [
	"#ee5656",  
	"#85da8d", 
	"#51a2de", 
	"#913e68", 
	"#a372e5" 
]



var  showingLinks = false

const textToShare = "https://play.google.com/store/apps/details?id=org.lock.infinite&pcampaignid=web_share";

function anime() {
    if(!showingLinks){
        share.style.animationName = 'spinTo';
        share.style.animationDuration = '0.6s';
        share.style.animationFillMode = 'forwards';
    
        whatsapp.style.display = 'block'
        whatsapp.style.animationName = 'whatsappdrop'
        whatsapp.style.animationDuration = '0.6s';
        whatsapp.style.animationFillMode = 'forwards';

        facebook.style.display = 'block'
        facebook.style.animationName = 'facebookdrop'
        facebook.style.animationDuration = '0.6s';
        facebook.style.animationFillMode = 'forwards';
        
        twitter.style.display = 'block'
        twitter.style.animationName = 'twitterdrop'
        twitter.style.animationDuration = '0.6s';
        twitter.style.animationFillMode = 'forwards';
    } else{
        share.style.animationName = 'spinBack';
        share.style.animationDuration = '0.6s';
        share.style.animationFillMode = 'forwards';

        whatsapp.style.display = 'none'
        facebook.style.display = 'none'
        twitter.style.display = 'none'
    }
    showingLinks = !showingLinks
    

}
function shareToWhatsApp() {
    const encodedText = encodeURIComponent(textToShare);
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodedText}`;

    window.open(whatsappURL);
}
function shareToFacebook() {
    const urlToOpen = "https://www.facebook.com/yourpage";

    window.location.href = `fb://page`;

    // If the Facebook app is not installed or the protocol fails, open the Facebook page in a browser
    setTimeout(() => {
        window.location.href = urlToOpen;
    }, 500);
}
function shareToTwitter() {
    const text = "Check out this fun game!";

    const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(textToShare)}&text=${encodeURIComponent(text)}`;

    // Open Twitter share dialog in a new window
    window.open(twitterURL, "_blank", "width=600,height=400");
}
function googlelink() {
    window.location.href = "https://play.google.com/store/apps/details?id=org.lock.infinite&pcampaignid=web_share"
}

function changeBackgroundColor() {
    rng = getRandomNumber(1, 4);
    console.log(rng)
    background.style.background = `linear-gradient(${primeColors[rng]}, ${betaColors[rng]})`;
}
changeBackgroundColor()

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
