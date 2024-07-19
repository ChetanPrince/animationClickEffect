console.log("Chetan Won The Jackpot");



// on button click add class="animationjs"
// add .animate-rainbow clsas to color changing div
// add animate-bounce class to h1 span element with id 

const btn = document.getElementById("btn");
btn.addEventListener("click", ()=>{
    const moneyAnim = document.getElementById("emphasis");
    const divColor = document.getElementById("color-changing");
    const btnEffect = document.getElementById("btn");
    moneyAnim.classList.add("animationjs");
    divColor.classList.add("animate-rainbow");
    btn.classList.add("animationjs");
setTimeout(()=>{
        moneyAnim.classList.remove("animationjs");
        divColor.classList.remove("animate-rainbow");
        btn.classList.remove("animationjs");

    }, 10000);
})