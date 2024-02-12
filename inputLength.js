const scrap = document.getElementById("scrap");
const showScrapLength = document.getElementById("showScrapLength");


scrap.onchange = function (tch) {
    if (tch.target.value == "") {
        alert("write anything in the first box");
    } else {
        updateDisplay(tch.target.value);
    }
}
function updateDisplay(str) {
    const displayLength = str.length
    console.log({ displayLength, val: str })
    showScrapLength.value = displayLength
}