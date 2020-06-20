const MessageCard = (user) => {
  return `
	  <div class="card" style="width: 300px; border: 1px solid rgba(0,0,0,.125); border-radius: .25rem; padding: 20px; margin: 16px;">
		  <h3 class="card-title" style="margin: 0;">${user.name}</h3>
		  <h5 class="card-subtitle mb-2 text-muted" style="font-size: 15px;">${user.email}</h5>
		  <p class="card-text" style="font-size: 16px;">${user.message}</p>
	  </div>
	  `;
};

$(document).ready(function () {
  // GET MESSAGES REQUEST
  $.ajax({
    type: "GET",
    url: "/api/users/all",
    success: function (result) {
      $.each(result, function (i, user) {
        $("#messages-result").append(MessageCard(user));
      });
    },
    error: function (e) {
      $("#messages-result").html("<strong>Error</strong>");
    },
  });
});
