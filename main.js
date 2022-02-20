let reset = document.querySelector("button");
let input = document.querySelectorAll("input");

[...document.querySelectorAll("ul li")].forEach(function(ele) {
    ele.onclick = function() {
        [...document.querySelectorAll("ul li")].forEach(function(e) {
            if(e != ele) {
                e.classList.remove("clicked");
            }
        });
        ele.classList.toggle("clicked");
    }
})

let p = document.querySelectorAll(".result p");

reset.onclick = function() {
    if(input[0].value != "" && input[2].value != "") {
        if(input[2].value == 0) {
            input[2].previousElementSibling.className = "active";
        } else {
            input[2].previousElementSibling.classList.remove("active");
            let total = input[0].value;
            let giveTip = false;
            let tip = 0;
            // Start tip amount / person
            [...document.querySelectorAll("ul li")].forEach(function(ele,j) {
                if(ele.className === "clicked") {
                    giveTip = true;
                    let tipValue ="";
                    if(j == [...document.querySelectorAll("ul li")].length - 1) {
                        tipValue=ele.children[0].value;
                        tipValue == "" ? tip = 0 : tip = (total * parseInt(`${tipValue}`)) / 100;
                    } else {
                        for(let i=0; i<ele.textContent.length; i++) {
                            ele.textContent[i] == "%"? tip = (total * parseInt(`${tipValue}`)) / 100 : tipValue+=ele.textContent[i];
                        }
                    }
                    p[0].textContent = "$" + (tip / input[2].value).toFixed(2);
                }
            });
            if(!giveTip) {
                p[0].textContent = `$0.00`;
            }
            // End tip amount / person
            // Start Total / person
            p[1].textContent = `$${((+total + +tip) / input[2].value).toFixed(2)}`;
            // End Total / person
            
        }
    }
};