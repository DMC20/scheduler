// current date variable to display on once page opens
$("#currentDay").text(moment().format("MMM Do YYYY"))
// current time variable 
var currentTime = moment().hour();
// console.log(currentTime);

// run page once DOM is ready for JS code to execute
$(function() {
    // console.log('function working');;

    // on 'click' event listener 
    $('.saveBtn').on("click", function() {
        var value = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        // saves key value into the storage
        localStorage.setItem(value, time);
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


    function timeBlock () {
    
        $('.time-block').each(function () {
        var timeSection = parseInt($(this).attr("id").split("hour")[1]);  
        console.log(timeSection);
        
        if (timeSection < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }  else if (timeSection === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }  else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
            }
        })
    }
    timeBlock();
});


// create a function on current time of day
// if/else statements in regards to current time of day, blocks will be highlighted depending on time of day
// run funcction 

