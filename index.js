let a;
let date;
let time;
let todayDateTime;
let americaDateTime;
let afghanistanDateTime;
let saudiarabiaDateTime;
let australiaDateTime;

setInterval(() => {
    todayDateTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    todayDateTime = new Date(todayDateTime);
    // time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    // date = a.toLocaleDateString();
    document.getElementById("time").innerHTML = todayDateTime;

}, 1000);

setInterval(() => {
    americaDateTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    americaDateTime = new Date(americaDateTime);
    date = americaDateTime.toLocaleDateString();
    time = americaDateTime.getHours() + ':' + americaDateTime.getMinutes() + ':' + americaDateTime.getSeconds();
    document.getElementById("time1").innerHTML = americaDateTime;

}, 1000);

setInterval(() => {
    afghanistanDateTime = new Date().toLocaleString("en-US", { timeZone: "Afghanistan" });
    afghanistanDateTime = new Date(afghanistanDateTime);
    date = afghanistanDateTime.toLocaleDateString();
    time = afghanistanDateTime.getHours() + ':' + afghanistanDateTime.getMinutes() + ':' + afghanistanDateTime.getSeconds();
    document.getElementById("time2").innerHTML = afghanistanDateTime;

}, 1000);

setInterval(() => {
    saudiarabiaDateTime = new Date().toLocaleString("en-US", { timeZone: "saudiarabia" });
    saudiarabiaDateTime = new Date(saudiarabiaDateTime);
    date = saudiarabiaDateTime.toLocaleDateString();
    time = saudiarabiaDateTime.getHours() + ':' + saudiarabiaDateTime.getMinutes() + ':' + saudiarabiaDateTime.getSeconds();
    document.getElementById("time3").innerHTML = saudiarabiaDateTime;

}, 1000);

setInterval(() => {
    australiaDateTime = new Date().toLocaleString("en-US", { timeZone: "australia" });
    australiaDateTime = new Date(australiaDateTime);
    date = australiaDateTime.toLocaleDateString();
    time = australiaDateTime.getHours() + ':' + australiaDateTime.getMinutes() + ':' + australiaDateTime.getSeconds();
    document.getElementById("time4").innerHTML = australiaDateTime;

}, 1000);
