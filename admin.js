document.getElementById("forum-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting in the usual way

  var title = document.getElementById("title-input").value;
  var description = document.getElementById("description-input").value;
  var content = document.getElementById("content-input").value;

  var emailSubject = encodeURIComponent(title);
  var emailBody = encodeURIComponent("Beskrivning: " + description + "\n\nInnehåll: " + content);
  var mailtoUrl = "mailto:coding@visionjava.se?subject=" + emailSubject + "&body=" + emailBody;

  window.location.href = mailtoUrl;
});
