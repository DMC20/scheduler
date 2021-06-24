// run page once DOM is ready for JS code to execute
// $(function() {
//     console.log( "ready!" );
$(document).ready(function() {
    // display date
    $("#currentDay").text(moment().format("MMM Do YY"))

    // on 'click' event listener 
    $('.saveBtn').on("click", function() {
        var event = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        // saves key value into the storage
        localStorage.setItem(event, time);
    })

    // returns the key value of what is in the storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
});

// create a function on current time of day
// if/else statements in regards to current time of day, blocks will be highlighted depending on time of day
// run funcction 

    var currentTime = moment().format('h:mm');
    console.log(currentTime);

    var timeBlock = []

