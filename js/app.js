var swiper = new Swiper(".mySwiper", {

    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".next--btn",
    },
});


let count = 0;
let thisCount = 0;
const loader = document.querySelector('.loader-progress');

const takeIt = {

    startInitFunctionOrder(data) {
        count = data.count;

    },
    initFunctionInvoking(data) {
        loader.style.left = "0%";
        loader.style.width = ((data.idx / count) * 100) + "%";

    },
    startDataFileEntries(data) {
        count = data.count;

    },
    performMapLoadFunction(data) {
        ++thisCount;
        loader.style.left = "0%";
        loader.style.width = ((thisCount / count) * 100) + "%";
    }
};


window.addEventListener('message', function(e) {
    (takeIt[e.data.eventName] || function() {})(e.data);
});