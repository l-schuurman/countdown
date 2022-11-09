// Get the #app element
let app = document.querySelector('#app');
let explode = document.querySelector('#explode')
let wrapper = document.querySelector('.countdown-wrapper')
let logo = document.querySelector('.logo')
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let e = document.querySelector('#e');

// Track the count
let count = 270;
let timer = undefined;

function setDisplay(s) {
    a.innerHTML = s[0];
    b.innerHTML = s[1];
    d.innerHTML = s[2];
    e.innerHTML = s[3];
}

/**
 * Play the chime sound
 */
function playSound() {
    let ding = new Audio('AHRf27GPhQc_160.mp3');
    ding.play();
}

function restart() {
    console.log("before restart", timer)
    if(timer != undefined) {
        timer = clearInterval(timer);
    }
    count = 300;
    setDisplay("0500")
    explode.style.opacity = 1;
    logo.style.opacity = 0;
    console.log("after restart", timer)

}

function pause() {
    console.log("before pause", timer)
    if(timer != undefined) timer = clearInterval(timer);
    console.log("after pause", timer)
}

function play() {
    console.log("before play", timer)
    if(count == 300) {
        setDisplay("0459")
        count -= 1
    }
    if(timer == undefined) timer = setInterval(countDown, 1000);
    console.log("after play", timer)
    console.log("play")
}

function countDown() {
    console.log(count)
    // Reduce count by 1
    count--;

    // Update the UI
    if (count > 0) {
        if (count == 260) { // 4:20
            tens = "N"
            ones = "I"
            tenths = "C"
            hundredths = "E"
        } else if (count < 250 && count > 240) {
            tens = "0"
            ones = "3"
            tenths = "6"
            hundredths = count % 10
        } else if (count == 240) {
            tens = "F"
            ones = "O"
            tenths = "U"
            hundredths = "R"
        } else if (count == 213) {
            tens = "0"
            ones = "E"
            tenths = "E"
            hundredths = "E"
        } else if (count == 194) {
            tens = ""
            ones = ""
            tenths = "P"
            hundredths = "I"
        } else if (count < 190 && count > 180) {
            tens = "0"
            ones = "2"
            tenths = "6"
            hundredths = count % 10
        } else if (count == 180) {
            tens = "P"
            ones = "I"
            tenths = ""
            hundredths = ""
        } else if (count < 130 && count > 120) {
            tens = "0"
            ones = "1"
            tenths = "6"
            hundredths = count % 10
        } else if (count == 120) {
            tens = "T"
            ones = "W"
            tenths = "O"
            hundredths = ""
        } else if (count == 104) {
            tens = "1"
            ones = "2"
            tenths = "^"
            hundredths = "2"
        } else if (count == 81) {
            tens = "1"
            ones = "1"
            tenths = "^"
            hundredths = "2"
        } else if (count < 70 && count > 60) {
            tens = "0"
            ones = "0"
            tenths = "6"
            hundredths = count % 10
        } else if (count == 49) {
            tens = ""
            ones = "7"
            tenths = "^"
            hundredths = "2"
        } else if (count == 36) {
            tens = ""
            ones = "6"
            tenths = "^"
            hundredths = "2"
        } else if (count == 25) {
            tens = ""
            ones = "5"
            tenths = "^"
            hundredths = "2"
        } else if (count == 16) {
            tens = ""
            ones = "4"
            tenths = "^"
            hundredths = "2"
        } else if (count == 1) {
            playSound();
            tens = "0"
            ones = "0"
            tenths = "0"
            hundredths = "1"
        }
        else {
            tens = Math.floor(count / 600)
            ones = Math.floor((count % 600) / 60)
            tenths = Math.floor((count % 60) / 10)
            hundredths = Math.floor(count % 10)
        }

        a.innerHTML = tens;
        b.innerHTML = ones;
        d.innerHTML = tenths;
        e.innerHTML = hundredths;
    }

    else {
        explode.click();

        a.innerHTML = 0;
        b.innerHTML = 0;
        d.innerHTML = 0;
        e.innerHTML = 0;

        explode.style.opacity = 0;
        logo.style.opacity = 1;

        clearInterval(timer);
    }
}