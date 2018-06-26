
// Polyfill to make input type="number" work for all non HTML5 browsers and Safari.
// Needs jQuery to be loaded.
(function() {
    if ($) {
        $(function () {
            $('input[type="number"]').keypress(function (e) {
                if (isNaN(e.key)) {
                    e.preventDefault();
                } 
            });
        });
    }
})()
