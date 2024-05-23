let select = document.getElementById("tanker"),
  send = document.getElementById("send"),
  address = document.getElementById("tanker_address"),
  cc = document.getElementById("CC"),
  body = encodeURIComponent(
    document.getElementById("mail_default_content").value
  ),
  copybutton = document.getElementById("copybody"),
  bodytext = decodeURIComponent(body);

send.addEventListener("click", (e) => {
  let email = select.value;
  send.href =
    "mailto:" +
    email +
    "?subject=Tárgy" +
    "&cc=cimzett@cimzett.com" +
    "&bcc=valamilyen@gmail.com" +
    "&body=" +
    body;
});

select.addEventListener("change", (event) => {
  address.textContent = select.value;
  if (select.value !== "cimzett@cimzett.com") {
    cc.style.display = "flex";
  } else {
    cc.style.display = "none";
  }
});
