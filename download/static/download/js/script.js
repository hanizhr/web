(function() {
    $(document).ready(function() {
        const iconSearch = $("#icon-search");
        const inputBox = $("#input-search");



        iconSearch.on("click", function() {
            inputBox.show();
            inputBox.animate({
                width: "260px"
            }, 400)
        })
        $("#more1").click(function() {
            $("#don1").toggleClass("active");
        })
        $("#more2").click(function() {
            $("#don2").toggleClass("active");
        })



        function menuscroll() {
            let navmenu = $(".nav-menu");
            if ($(window).scrollTop() > 50) {
                navmenu.addClass("is-scrolling");
            } else {
                navmenu.removeClass("is-scrolling");
            }
        }

        menuscroll();
        $(window).on("scroll", menuscroll);

        let sideNav = $("#navbarColapse");
        sideNav.on("show.bs.collapse", function() {
            $(this).parents(".nav-menu").addClass("menu-is-open");
        });

        sideNav.on("hide.bs.collapse", function() {
            $(this).parents(".nav-menu").removeClass("menu-is-open");
        });
    });
})();