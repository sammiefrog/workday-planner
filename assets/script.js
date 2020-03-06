$(document).ready(function() {

var nowMoment = moment().format('MMMM Do YYYY, h:mm:ss a');

var eDisplayMoment = $('#currentDay');

eDisplayMoment.text(nowMoment);



console.log(nowMoment);
});