(function() {

    $(document).ready(function() {

        function menuscroll() {
            let navmenu = $('.nav-menu');
            if ($(window).scrollTop() > 50) {
                navmenu.addClass('is-scrolling');
            } else {
                navmenu.removeClass('is-scrolling');
            }
        }

        menuscroll();
        $(window).on('scroll', menuscroll);

        let sideNav = $('#navbarColapse');
        sideNav.on('show.bs.collapse', function() {
            $(this).parents('.nav-menu').addClass('menu-is-open');
        })

        sideNav.on('hide.bs.collapse', function() {
            $(this).parents('.nav-menu').removeClass('menu-is-open');
        })
    });













})()