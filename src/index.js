let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountE1 = document.getElementById("heartCount");
const coinCountE1 = document.getElementById("coinCount");
const copyCountE1 = document.getElementById("copyCount");

//Heart Button

document.querySelectorAll(".heartBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountE1.textContent = heartCount;
  });
});

//Copy Button

document.querySelectorAll(".copyBtn").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const number = btn.parentElement.previousElementSibling.textContent;
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCountE1.textContent = copyCount;
    alert("Number copied: " + number);
  });
});

//Call Button

document.querySelectorAll(".callBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const serviceName = btn.getAttribute("data-name");
    const serviceNumber = btn.getAttribute("data-number");

    if (coinCount < 20) {
      alert("Not enough coins! You need 20 coins per call.");
      return;
    }
    alert(`Calling ${serviceName} at ${serviceNumber}....`);
    coinCount -= 20;
    coinCountE1.textContent = coinCount;

    //Get current time

    const callTime = new Date().toLocaleTimeString();

    //Add To history with time

    const li = document.createElement("li");
    li.textContent = `${serviceName} - ${serviceNumber} (at ${callTime})`;
    historyList.appendChild(li);
  });
});

//Clear Call History
document.getElementById("classHistory").addEventListener("click", () => {
  historyList.innerHTML = "";
});
