$(document).ready(function () {
  $("form").submit(function() {
    console.log("Got here.");
    $(".stuff-to-hide-after-clicking-button").toggle();
    var nameString = $("#name").val();
    $(".name").text(nameString);
    var dateString = $("#date").val();
    $(".date").text(dateString);
    var descriptionString = $("#description").val();
    $(".description").text(descriptionString);
    var startTimeString = $("#start-time").val();
    $(".start-time").text(startTimeString);
    var endTimeString = $("#end-time").val();
    $(".end-time").text(endTimeString);
    $(".confirmation").toggle();
    event.preventDefault();
  });
});
