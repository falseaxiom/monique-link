/***** SETUP *****/

// get event variables, create if they don't exist
if (!localStorage.getItem("events")) localStorage.setItem('events', '{"02_04":"c&&circle&&f__t&&triangle&&f__s&&square&&f"}');
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

    // get kou number
    let k = convert(month, day);

    let val = events[key];
    let evs = val.split("__");
    for (let j = 0; j < evs.length; j++) {
        let info = evs[j].split("&&");
        let evid = key + "?" + j;
        makeEvent(k, evid, info);
    }
}

/***** FUNCTIONS *****/

// convert date to kou
function convert(month, day) {
    return 1;
}

// make event div
function makeEvent(k, evid, info) {
    // create event div, tag key+j as id
    let ev = document.createElement("div");
    ev.classList.add("event");
    ev.id = evid;
    ev.onclick = function() {check(this)};

    let done = info[2] == "t"

    // append bullet to event
    let type = info[0];
    let b = document.createElement("span");
    b.classList.add("bullet");
    b.classList.add(type);
    if      (type == "c") b.innerHTML = done ? "●" : "○";
    else if (type == "t") b.innerHTML = done ? "▲" : "△";
    else                  b.innerHTML = done ? "■" : "□";
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

// add event to list
function addEvent() {
    
}

// check off events
function check(div) {
    let bullet = div.firstChild;
    let event = div.firstChild.nextSibling;
    let checked = event.style.textDecoration == "line-through";
    event.style.textDecoration = checked ? "none" : "line-through";

    let type;
    if      (bullet.classList.contains("c")) { bullet.innerHTML = checked ? "○" : "●"; type = "c"; }
    else if (bullet.classList.contains("t")) { bullet.innerHTML = checked ? "△" : "▲"; type = "t"; }
    else if (bullet.classList.contains("s")) { bullet.innerHTML = checked ? "□" : "■"; type = "s"; }

    // make sure to update localStorage!
    let evid = div.id.split("?");
    events = JSON.parse(localStorage.getItem("events"));
    let ev = events[evid[0]].split("__");
    ev[evid[1]] = type + "&&" + event.innerHTML + "&&" + (checked ? "f" : "t");
    let evstr = "";
    for (let i = 0; i < ev.length - 1; i++) {
        evstr += ev[i] + "__";
    }
    evstr += ev[ev.length-1];
    events[evid[0]] = evstr;
    localStorage.setItem("events", JSON.stringify(events));
}