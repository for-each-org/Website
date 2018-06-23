(function() {
    var sayings = ['Cause.', 'Action.', 'Idea.', 'Movement.', 'Initiative.'];

    var i = 1;  
    var header = document.getElementById("animated-sub");

    var tid = setInterval(rotate, 5000);
    function rotate() {
        header.classList.remove("masthead-name-header-sub-" + (i - 1) % sayings.length);
        void header.offsetWidth; // makes the animation reset
        header.classList.add("masthead-name-header-sub-" + i % sayings.length);
        header.innerHTML = sayings[i % sayings.length];
        i++;
    }
})();