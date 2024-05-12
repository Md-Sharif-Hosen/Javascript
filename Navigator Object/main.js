let appCodeName=navigator.appCodeName;
let appName=navigator.appName;
let appVersion=navigator.appVersion;
let cookieEnabled=navigator.cookieEnabled;
let language=navigator.language;
let userAgent=navigator.userAgent;
let platform=navigator.platform;
document.write(appCodeName+"</br>");
document.write(appName+"</br>");
document.write(appVersion+"</br>");
document.write(cookieEnabled+"</br>");
document.write(language+"</br>");
document.write(userAgent+"</br>");
document.write(platform+"</br>");


//! Geoloacation

navigator.geolocation.getCurrentPosition(function(position){
    let altitude=position.coords.altitude;
    let latitude=position.coords.latitude;
    let longitude=position.coords.longitude;
    let speed=position.coords.speed;

    document.write("altitude :"+altitude+"</br>")
    document.write("latitude :"+latitude+"</br>")
    document.write("longitude :"+longitude+"</br>")
    document.write("speed :"+speed+"</br>")

})