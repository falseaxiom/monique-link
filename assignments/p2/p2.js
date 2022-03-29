// get event variables, create if they don't exist
if (!localStorage.getItem("events")) localStorage.setItem('events', '{"02_04":"c&&event&&f__t&&event&&f__s&&event&&f"}');
let events = JSON.parse(localStorage.getItem("events"));

// label kou
var kous = document.getElementsByClassName("kou");
for (let i = 0; i < kous.length; i++) {
    let kou = kous[i];

    // get szn num and label
    let num = i + 1;
    let sl = Math.floor(i / 3);
    let kl = (num) % 3;
    let label = kanji[Object.keys(kanji)[sl]][kl];

    // add num and label
    let k = document.createElement("div");
    k.classList.add("label");
    k.innerHTML = num + ". " + label;
    kou.appendChild(k);

    // set id and grid-area as num
    kou.id = "k" + num;
    kou.style.gridArea = "d" + num;
}

// populate with events
let eKeys = Object.keys(events);
for (let i = 0; i < eKeys.length; i++) {
    let key = eKeys[i];
    let date = key.split("_");
    let month = date[0];
    let day = date[1];

    let kou = convert(month, day);

    let val = events[key];
    let evs = val.split("__");
    console.log(evs)
    for (let j = 0; j < evs.length; j++) {
        let info = evs[j].split("&&");
        makeEvent(kou, info);
    }
}

// make event div
function makeEvent(k, info) {
    // create event div
    let ev = document.createElement("div");
    ev.classList.add("event");
    ev.onclick = function() {check(this)};

    let done = info[2] == "t"

    // append bullet to event
    let b = document.createElement("span");
    b.classList.add("bullet");
    b.classList.add(info[0]);
    if      (info[0] == "c") b.innerHTML = done ? "●" : "○";
    else if (info[0] == "t") b.innerHTML = done ? "▲" : "△";
    else                     b.innerHTML = done ? "■" : "□";
    ev.appendChild(b);

    // append description to event
    let d = document.createElement("span");
    d.classList = "desc";
    d.innerHTML = info[1];
    d.style.textDecoration = done ? "line-through" : "none";
    ev.appendChild(d);

    // append event to kou
    let kou = document.getElementById("k"+k);
    kou.appendChild(ev);

    // color kou if needed
    if (!kou.classList.contains("eventful")) {
        kou.classList.add("eventful");
    }
}

// convert date to kou
function convert(month, day) {
    return 1;
}

// check off events
function check(div) {
    let bullet = div.firstChild;
    let event = div.firstChild.nextSibling;
    let checked = event.style.textDecoration == "line-through";
    event.style.textDecoration = checked ? "none" : "line-through";
    if      (bullet.classList.contains("c"))   bullet.innerHTML = checked ? "○" : "●";
    else if (bullet.classList.contains("t")) bullet.innerHTML = checked ? "△" : "▲";
    else if (bullet.classList.contains("s"))   bullet.innerHTML = checked ? "□" : "■";
}