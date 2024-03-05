//℃ = (°F − 32) × 5/9
//℃ = (°F − 32) ÷ 1.8

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const labels = document.querySelectorAll("label");

    sel1.addEventListener("change", () => {
        handleChange(sel1, sel2, labels[0], labels[1], txt1, txt2);
 
    });
    sel2.addEventListener("change", () => {
        handleChange(sel2, sel1, labels[1], labels[0], txt1, txt2);

    });

    txt1.addEventListener("input", () => {
        if(sel1.value === "°C") {
            txt2.value = (txt1.value * 1.8) + 32;
        }
        else {
           txt2.value = (txt1.value - 32) / 1.8;
        }
    })
})


const handleChange = (s1, s2, l1, l2, t1, t2) => {
    if(s1.value === "°C") {
        s2.value = "°F";
        l1.innerHTML = "°C";
        l2.innerHTML = "°F";
    }
    else {
        s2.value = "°C"
        l1.innerHTML = "°F";
        l2.innerHTML = "°C";
    }
    t1.value=t2.value='';
    t1.focus();
}