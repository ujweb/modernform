var isInViewport = function(elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
// read the link on how above code works
var findMe = document.querySelectorAll('.detect-section');
var findOp = document.querySelectorAll('.opening');
window.addEventListener('scroll', function(event) {
    // add event on scroll
    findMe.forEach(element => {
        //for each .detect-section
        if (isInViewport(element)) {
            //if in Viewport
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
    // add event on scroll
    findOp.forEach(element => {
        //for each .detect-section
        if (isInViewport(element)) {
            $('#gotop').fadeOut();
        } else {
            $('#gotop').fadeIn();
        }
    });
}, false);

new WOW().init();

$('#gotop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, "1500");
    return false;
});
