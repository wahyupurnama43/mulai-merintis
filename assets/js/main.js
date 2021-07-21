$('li.dropdown > a').on('click', function (event) {
    const dropdown = document.querySelector("ul li.dropdown");
    event.preventDefault();
    $(this).toggleClass('selected');
    $(this).parent().find('ul').first().toggle(300);
    $(this).parent().siblings().find('ul').hide(200);

    //Hide menu when clicked outside
    $(this).parent().find('ul').parent().mouseleave(function () {
        var thisUI = $(this);
        $('html').click(function () {
            thisUI.children(".dropdown-menu").hide();
            $('html').unbind('click');
            $("ul li.dropdown").removeClass("mt-dropdown");
        });
    });
    // $("ul li.dropdown").addClass("mt-dropdown");
    dropdown.classList.toggle('mt-dropdown')

});


const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul#nav");
menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slidess");
});

$(document).scroll(function () {
    var y = $(window).scrollTop();
    if (y > 0) {
        $("nav.menu").addClass("shActive");
    } else {
        $("nav.menu").removeClass("shActive");
    }

});
