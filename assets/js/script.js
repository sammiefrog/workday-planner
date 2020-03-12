$(document).ready(function() {

//dont touch this it works
var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentHour = moment().hour();
var eDisplayMoment = $('#currentDay');
eDisplayMoment.text(nowMoment);

//where the time blocks go in html
var timeBlocks = $('#time-blocks');

//currently in use
var timeSlot;

var savedTasks = localStorage.getItem(timeSlot);
// var savedTask9 = localStorage.getItem(9);
// var savedTask10 = localStorage.getItem(10);
// var savedTask11 = localStorage.getItem(11);
// var savedTask12 = localStorage.getItem(12);
// var savedTask13 = localStorage.getItem(13);
// var savedTask14 = localStorage.getItem(14);
// var savedTask15 = localStorage.getItem(15);
// var savedTask16 = localStorage.getItem(16);

// if(savedTasks) {
//     savedTasks = JSON.parse(savedTasks);
// }
// else {
//     savedTasks = {}; 
// };
console.log(savedTasks);

var workDayHours = [8, 9, 10, 11, 12, 13, 14, 15, 16];


function createTimeBlocks() {
    var blocks = "";
//the first wayyyy
    for (var i = 0; i < workDayHours.length; i++) {
        var hourBlocks = "" +
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">' + workDayHours[i]+ ":00" +
             '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="' + workDayHours[i] + '"/>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-success saveButton" data-time="' + workDayHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';

        blocks += hourBlocks;
        // if (savedTasks !== null) {
        //     $("#" + workDayHours[i]).text(savedTasks);
        //   }
    }
    timeBlocks.append(blocks);



//this click saved the user input and the data-time
    $('.saveButton').on("click", function() {

        var timeSlot = $(this).attr('data-time');
        var userTask = $(`#${timeSlot}`).val();

        localStorage.setItem(timeSlot, userTask);
        console.log(timeSlot)
        // var savedTasks = localStorage.getItem(timeSlot);

        // console.log(savedTasks);
        // appendNewValue();
        // var savedTasks = JSON.parse(localStorage.getItem(timeSlot));
        // localStorage.setItem("saves", JSON.stringify(savedTasks));
        
    });

    // function appendNewValue(timeSlot, userTask){
    //     savedTasks[timeSlot] = userTask;
    //     localStorage.setItem("timeSlot", JSON.stringify(savedTasks));

    // }


//colorizing the input fields!!!!!
for (i = 0; i < workDayHours.length; i++) {

    if (currentHour === workDayHours[i]) {
        $("#" + workDayHours[i]).addClass('present');
    }
    if (currentHour > workDayHours[i]) {
        $("#" + workDayHours[i]).addClass('past');
    }
    if (currentHour < workDayHours[i]) {
        $("#" + workDayHours[i]).addClass('future');
    }
    
}

}
console.log(currentHour);


createTimeBlocks();

//don't delete this dummy
});
