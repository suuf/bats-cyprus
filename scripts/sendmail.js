function prepareEmail() {
  var link = document.getElementById("send_email");
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message =
    "Hello my name is " +
    name +
    " -- " +
    document.getElementById("message").value;
  var email = "bats-cyprus@protonmail.com";
  var href = "mailto:" + email + "?subject=" + subject + "&body=" + message;
  link.setAttribute("href", href);
}
