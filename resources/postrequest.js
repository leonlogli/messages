$(document).ready(function () {
  // SUBMIT FORM
  $("#userForm").submit(function (event) {
    // Prevent the form from submitting via the browser.
    event.preventDefault();
    ajaxPost();
  });

  function ajaxPost() {
    // PREPARE FORM DATA
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val(),
    };

    // DO POST
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: window.location + "api/users/save",
      data: JSON.stringify(formData),
      dataType: "json",
      success: function (user) {
        $("#postResultDiv").html(
          "<p>Successfully sent !</p>"
        );
      },
      error: function (e) {
        alert("Error !");
      },
    });

    // Reset FormData after Posting
    resetData();
  }

  function resetData() {
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
  }
});
