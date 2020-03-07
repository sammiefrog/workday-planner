$(document).ready(function() {

var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');

var eDisplayMoment = $('#currentDay');

eDisplayMoment.text(nowMoment);

var savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

var workDayHours = ['8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm'];

function createTimeBlocks() {
    let blocks = "";
    for (let i = 0; i < workDayHours.length; i++) {
        var hourBlocks = "" +
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">' + workDayHours[i] + '</span>' +
            '</div>' +
            '<input type="text" class="form-control" id="userInput"' + workDayHours[i] + '">' +
            '<div class="input-group-append">' +
            '<button class="btn btn-primary" id="saveButton" data-time="' + workDayHours[i] + '"><i class="fa fa-save"></i></button>' +
            '</div>' +
            '</div>';
        blocks += hourBlocks;
    }
    $('#time-blocks').append(blocks);
    
    $("#saveButton").on("click", function() {

        var userTask = $("#userInput").val();
        alert(userTask);

        savedTasks.push(userTask);

        // localStorage.setItem("tasks", JSONstringify(savedTasks));

    });
}
// function saveTasks() {

    // $("#saveButton").on("click", function() {

    //     var userTask = $("#userInput").val();
    //     alert(userTask);

    //     savedTasks.push(userTask);

    //     // localStorage.setItem("tasks", JSONstringify(savedTasks));

    // });
// }
console.log(savedTasks);

// saveTasks();
createTimeBlocks();
});

//pseudocode
//create an input line for each hour of the work day
//prepend the hour to each input
//append a save button to each input
//on click of the save button save it to localStorage
//also - keep it displayed there when it is saved