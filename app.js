const lights = document.querySelectorAll('.light');
const car1 = document.querySelector('.car1');
const car2 = document.querySelector('.car2');
let activeLight = 0;

function startTrafficLight() {
    if (activeLight === 0) {
        // Qizil chiroq yoqiladi, mashinalar to‘xtaydi
        lights[activeLight].classList.add('active');
        car1.classList.remove('move-right');
        car2.classList.remove('move-right');
        setTimeout(() => {
            blinkLight(3, 500, () => {
                lights[activeLight].classList.remove('active');
                activeLight = 1;
                startTrafficLight();
            });
        }, 3000);
    } else if (activeLight === 1) {
        // Sariq chiroq yoqiladi, mashinalar tayyorlanadi
        lights[activeLight].classList.add('active');
        setTimeout(() => {
            blinkLight(2, 300, () => {
                lights[activeLight].classList.remove('active');
                activeLight = 2;
                startTrafficLight();
            });
        }, 1500);
    } else if (activeLight === 2) {
        // Yashil chiroq yoqiladi, mashinalar harakatlanadi
        lights[activeLight].classList.add('active');
        car1.classList.add('move-right');
        car2.classList.add('move-right');
        setTimeout(() => {
            blinkLight(3, 500, () => {
                lights[activeLight].classList.remove('active');
                car1.classList.remove('move-right');
                car2.classList.remove('move-right');
                activeLight = 0;
                startTrafficLight();
            });
        }, 3000);
    }
}

// Yonib-o‘chish funksiyasi
function blinkLight(times, interval, callback) {
    let blinkCount = 0;
    const blinkInterval = setInterval(() => {
        lights[activeLight].classList.toggle('active');
        blinkCount++;
        if (blinkCount >= times * 2) {
            clearInterval(blinkInterval);
            callback();
        }
    }, interval);
}

// Dastlabki chiroqni yoqishni boshlaymiz
startTrafficLight();
