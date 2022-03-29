// populate kou with labels
// tag each with id as num
var kous = document.getElementsByClassName("kou");
for (let i = 0; i < kous.length; i++) {
    let kou = kous[i];

    let num = i + 1;
    let sl = Math.floor(i / 3);
    let kl = (num) % 3;
    let label = kanji[Object.keys(kanji)[sl]][kl];

    let k = document.createElement("div");
    k.classList.add("label");
    k.innerHTML = num + ". " + label;

    kou.appendChild(k);

    kou.id = "k" + num;
    kou.style.gridArea = "d" + num;

    // style based on event
    if (kou.firstChild != k) {
        kous[i].classList.add("eventful");
    }
}

// check off events
function check(div) {
    let bullet = div.firstChild.nextSibling;
    let event = div.firstChild.nextSibling.nextSibling;
    let checked = event.style.textDecoration == "line-through";
    event.style.textDecoration = checked ? "none" : "line-through";
    if      (bullet.classList.contains("circle"))   bullet.innerHTML = checked ? "○" : "●";
    else if (bullet.classList.contains("triangle")) bullet.innerHTML = checked ? "△" : "▲";
    else if (bullet.classList.contains("square"))   bullet.innerHTML = checked ? "□" : "■";
}