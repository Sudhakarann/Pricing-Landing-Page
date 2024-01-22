const monthly = document.querySelector(".monthly")
const yearly = document.querySelector(".yearly")
const monthPrices = document.querySelectorAll(".month-price")
const yearPrices = document.querySelectorAll(".year-price")

monthly.addEventListener("click",()=>{
    yearly.style.background =  "#fff"
    yearly.style.color = "#000"
    monthly.style.background = "rgb(93, 0, 255)"
    monthly.style.color = "#fff"

    monthPrices.forEach(price => {
        price.style.display = "flex";
    });

    
    yearPrices.forEach(price => {
        price.style.display = 'none';
    });
})

yearly.addEventListener("click",()=>{
    yearly.style.background = "rgb(93, 0, 255)"
    yearly.style.color = "#fff"
    monthly.style.background = "#fff"
    monthly.style.color = "#000"

    yearPrices.forEach(price => {
        price.style.display = 'flex';
    });

   
    monthPrices.forEach(price => {
        price.style.display = "none";
    });
})