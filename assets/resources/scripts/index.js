//unindo elementos
$(document).ready(function () {
    $("#header").load("/app/components/header.html");
    $("#main").load("/app/pages/home.html");
    $("#footer").load("/app/components/footer.html");
});

$(document).on('click', 'a', function(e) {
    $('#main-content').fadeOut(3000, function() {
        $.ajax({
            url: url,
            success: function(data) {
                $('#main-content').html(data);
                $('#main-content').fadeIn(3000);
            }
        });
    });
});

$(window).on('load', function() {
    $('#preloader').fadeOut('slow', function() {
        $(this).remove();
    });
});