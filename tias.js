$(document).ready(function () {
    console.log('home.js 載入成功');

    $("#about-btn").on("click", function () {
        $("#about").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    $("#character-btn").on("click", function () {
        $("#character").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    $("#world-btn").on("click", function () {
        $("#world").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    $("#news-btn").on("click", function () {
        $("#news").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
})