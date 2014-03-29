$(document).ready(function() {
    $("a").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(400, redirectPage);
    });

    function redirectPage() {
        window.location = linkLocation;
    }
});
