// Corrige bug de deixar dropdowns do header sumirem quando o cursor sai.
// Source: https://stackoverflow.com/a/48935028
$('body').on('mouseleave', '.dropdown', function (e) {
    var dropdown = $(e.target).closest('.dropdown');
    var menu = $('.dropdown-menu', dropdown);
    dropdown.addClass('show');
    menu.addClass('show');
    setTimeout(function () {
        dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
        menu[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 300);
});

$('body').on('mouseenter', '.dropdown', function (e) {
    $('.dropdown-menu').each(function() {
        $(this).removeClass('show')
    });
});