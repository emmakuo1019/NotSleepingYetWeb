$(document).ready(function () {
    console.log('home.js 載入成功');

    //主頁
    $("#about_us_btn").on("click", function () {
        $("#about_us").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    $("#working_btn").on("click", function () {
        $("#working").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    $("#member_btn").on("click", function () {
        $("#members").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    $("#news_btn").on("click", function () {
        $("#news").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    //遊戲介紹
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
    $("#news-working-btn").on("click", function () {
        $("#news-working").get(0).scrollIntoView(
            {behavior: "smooth"}
        )
    });
    //角色切換
    $('.menu_item').on('click', function () {
        const roleIndex = $(this).data('role') - 1; // 0-based
        const slider = $('.role_slider');
        const containerWidth = slider.width();

        $('.left-door, .right-door').addClass('closed');

        $('.left-door').one('transitionend', function () {
            // 滾動到指定角色位置
            slider.animate({
                scrollLeft: roleIndex * containerWidth
            }, 800);

            // 門打開
            setTimeout(() => {
                $('.left-door, .right-door').removeClass('closed');
            }, 800);
        });

        const clickedCon = $(this).next('.character_info');
        if (clickedCon.is(':visible')) {
            // 已顯示，收回
            clickedCon.slideUp();
        } else {
            // 收起其他
            $('.character_info').slideUp();

            // 顯示當前
            clickedCon.slideDown();
        }
    });

    //進入視窗效果
    /*const elements = document.querySelectorAll(".title");

    function observeHandler(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible"); // 離開視窗就移除 class，讓它可以再次觸發
            }
        });
    }

    const observer = new IntersectionObserver(observeHandler);

    elements.forEach(element => {
        observer.observe(element);
    });*/
})