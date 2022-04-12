/***** SETUP p2 *****/
document.getElementById('thicon').innerHTML = thicons[theme];

// help screen variable stuff
let help = document.getElementById("help");
let stm = document.getElementById("stm");
let form = document.getElementById("form");

// what is today?
let today = new Date();
let d = String(today.getDate()).padStart(2, '0');
let m = String(today.getMonth() + 1).padStart(2, '0');
today = convert(m, d);

// label kou
var kous = document.getElementsByClassName("kou");
for (let i = 0; i < kous.length; i++) {
    let kou = kous[i];

    // get szn num and label
    let num = i + 1;
    let sl = Math.floor(i / 3);
    let kl = i % 3;
    let label = english[Object.keys(english)[sl]][kl];
    let dates = conversions[Object.keys(conversions)[sl]][kl];

    // add num and label
    let k = document.createElement("div");
    k.classList.add("label");

    let n = document.createElement("span");
    let l = document.createElement("span");
    n.className = 'num';
    l.className = 'lab';
    n.innerHTML = (num < 10) ? "0" + num + "." : num + ".";
    l.innerHTML = label;
    n.style.marginRight = '1ch';
    // k.appendChild(n);
    k.appendChild(l);

    kou.appendChild(k);

    // show date conversions on hover
    let da = document.createElement("div");
    da.className = 'dates';
    da.innerHTML = dates;
    kou.appendChild(da);

    // mark today, change date
    if (num == today) {
        let dot = document.createElement("div");
        dot.className = "today";
        kou.appendChild(dot);

        // change title to reflect current season
        stm.innerHTML = m + "." + d + " | today, " + english[Object.keys(english)[sl]][kl];
    }

    // set id and grid-area as num
    kou.id = "k" + num;
    kou.style.gridArea = "d" + num;
    
}

// scroll to today
if (screen.width <= 1000) document.getElementById("k"+today).scrollIntoView({ behavior: 'smooth', block: 'start'});

// populate with events
let eKeys = Object.keys(events);
for (let i = 0; i < eKeys.length; i++) {
    let key = eKeys[i];

    if (events[key] == "") continue;

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

// populate eventless seasons with quotes
for (let i = 0; i < kous.length; i++) {
    let k = kous[i];

    if (!k.classList.contains("eventful")) {
        let quote = document.createElement("div");
        quote.className = "quote";
        quote.innerHTML = "no events this season... spend some time in nature and " + activities[i % activities.length] + ".";
        k.appendChild(quote);
    }
}



/***** FUNCTIONS *****/

// change theme
function changeTheme(div) {
    for (let i = 0; i < themes.length; i++) {
        if (theme != themes[i]) continue;
        
        theme = themes[(i+1) % themes.length];
        document.documentElement.className = theme;
        div.innerHTML = thicons[theme];
        localStorage.setItem("theme", theme);
        break;
    }
}

// convert date to kou
function convert(month, day) {
    let y1 = 2022;
    let y2 = 2023;
    let m = parseInt(month);
    let d = parseInt(day);

    if (m == 2 && d == 29) return 5; // special case: leap year

    let start = new Date (y1, 2, 4);
    let now;
    if (m < 2 || (m == 2 && d < 4)) now = new Date(y2, m, d);
    else                            now = new Date(y1, m, d);

    let between = now.getTime() - start.getTime();
    between /= (1000 * 3600 * 24);

    let diff = 0;
    for (let i = 0; i < szndays.length; i++) {
        diff += szndays[i];
        if (diff > between) {return i+1;}
    }
}

// make event div
function makeEvent(k, evid, info) {
    // create event div, tag key+j as id
    let ev = document.createElement("div");
    ev.classList.add("event");
    ev.id = evid;
    ev.onclick = function() {check(this)};
    ev.oncontextmenu = function() {deleteEvent(this); return false;}

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

// add event to list & calendar
function addEvent() {
    let type = document.getElementById("fbullettype").value;
    let event = document.getElementById("fevent").value.trim();
    let month = document.getElementById("fmonth").value;
    let day = document.getElementById("fday").value;

    if (event == "") {
        alert("event must not be blank!");
        return;
    }

    let k = convert(month, day);

    events = JSON.parse(localStorage.getItem("events"));
    let key = month + "_" + day;
    if (!events[key]) events[key] = "";
    let j = events[key].split("__").length;
    let evid = key+"?"+j;

    let info = [type, event, "f"];

    // add to calendar
    makeEvent(k, evid, info);

    // update localStorage
    let evida = evid.split("?");
    if (events[evida[0]] == "") events[evida[0]] = type + "&&" + event + "&&f";
    else                       events[evida[0]] += "__" + type + "&&" + event + "&&f";
    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById("fevent").value = "";
}

// delete event from list & calendar
function deleteEvent(div) {
    // alert("you are deleting me :(");

    // remove from list
    events = JSON.parse(localStorage.getItem("events"));
    let evida = div.id.split("?")
    let type = div.firstChild.classList;
    let event = div.firstChild.nextSibling;
    let checked = (event.style.textDecoration == "line-through") ? "t" : "f";
    let today = events[evida[0]].split("__");
    for (let i = 0; i < today.length; i++) {
        let evs = today[i].split("&&");
        if (!type.contains(evs[0]) ||  event.innerHTML != evs[1] || checked != evs[2]) continue;
        today.splice(i, 1);
        break;
    }

    // update localStorage
    let evstr = "";
    for (let i = 0; i < today.length; i++) {
        evstr += today[i] + "__";
    }
    if (today.length > 0) evstr = evstr.substring(0, evstr.length - 2);
    events[evida[0]] = evstr;
    if (evstr == "") delete events[evida[0]];
    localStorage.setItem("events", JSON.stringify(events));

    // remove from calendar
    div.remove();
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
    let evida = div.id.split("?");
    events = JSON.parse(localStorage.getItem("events"));
    let evs = events[evida[0]].split("__");
    let evstr = "";
    for (let i = 0; i < evs.length; i++) {
        let ev = evs[i].split("&&");
        if (bullet.classList.contains(ev[0]) &&  event.innerHTML == ev[1] && checked == (ev[2] == "t")) {
            evstr += type + "&&" + event.innerHTML + "&&" + (checked ? "f" : "t") + "__";
            continue;
        }
        evstr += evs[i] + "__";
    }
    evstr = evstr.substring(0, evstr.length - 2);
    events[evida[0]] = evstr;
    localStorage.setItem("events", JSON.stringify(events));
}

// turn on/off help screen
let k1 = document.getElementById("k1");
function getHelp() {
    if (screen.width <= 1000) return;
    let hidden = help.className == "hidden";
    help.className = hidden ? "" : "hidden";
    stm.className = hidden ? "hidden2" : "";
    hidden ? form.classList.add("helpyform") : form.classList.remove("helpyform");
    hidden ? k1.classList.add("helpykou") : k1.classList.remove("helpykou");
}