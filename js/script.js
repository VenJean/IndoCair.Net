const usdInput = document.getElementById('usdAmount');
const idrInput = document.getElementById('idrAmount');
const adminFeeInput = document.getElementById('adminFee');
const dynamicTextElement = document.getElementById('dynamicText');
const toggleButtons = [
    document.getElementById('toggleButton1'),
    document.getElementById('toggleButton2'),
    document.getElementById('toggleButton3'),
    document.getElementById('toggleButton4')
];

const collapseTexts = [
    document.getElementById('collapseText1'),
    document.getElementById('collapseText2'),
    document.getElementById('collapseText3'),
    document.getElementById('collapseText4')
];

usdInput.addEventListener('input', convert);

function convert() {
    const usdAmount = parseFloat(usdInput.value);
    let idrAmount = usdAmount * 16260;
    let adminFee = 0;

    if (usdAmount < 25) {
        adminFee = 20000;
    } else if (usdAmount < 50) {
        adminFee = 10000;
    }

    idrInput.value = formatIDR(idrAmount);
    adminFeeInput.value = formatIDR2(adminFee);
}

function formatIDR(amount) {
    return "Rp. " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
}
function formatIDR2(amount) {
    return "+Admin Rp. " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
}

// Collapse Button
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        collapseTexts[index].classList.toggle('hidden');
        button.classList.toggle('bg-white');
        button.classList.toggle('text-black');
    });
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("navbar-hidden");
        document.getElementById("navbar").classList.add("navbar-visible");
    } else {
        document.getElementById("navbar").classList.remove("navbar-visible");
        document.getElementById("navbar").classList.add("navbar-hidden");
    }
    prevScrollpos = currentScrollPos;
}

function showAlert(event) {
    event.preventDefault(); // Prevent the default action of the link
    alert("Sedang dalam tahap pengembangan");
}


//FAVICON

// Create a new canvas element
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Set the canvas dimensions to the desired favicon size (usually 16x16 or 32x32 pixels)
canvas.width = 32;
canvas.height = 32;

// Load the image and draw it onto the canvas
const image = new Image();
image.src = 'myFavicon.png';
image.onload = () => {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// Convert the canvas to a Data URL
const dataUrl = canvas.toDataURL('image/png');