let select = document.getElementById("tanker"),
  send = document.getElementById("send"),
  address = document.getElementById("tanker_address"),
  cc = document.getElementById("CC"),
  body = encodeURIComponent(
    document.getElementById("mail_default_content").value
  ),
  //body = "Tisztelt%20Tanker%C3%BCleti%20Vezet%C5%91%21%0A%0ASzeptember%20eleje%20%C3%B3ta%2C%20%C3%96n%20%C3%A9s%2Fvagy%20az%20%C3%96n%20koll%C3%A9g%C3%A1ja%20fenyeget%C5%91%20levelet%20k%C3%BCld%C3%B6tt%20t%C3%B6bb%20polg%C3%A1ri%20engedetlens%C3%A9gben%20r%C3%A9sztvev%C5%91%20pedag%C3%B3gusnak%20is.%20Mint%20felel%C5%91s%20%C3%A1llampolg%C3%A1r%20elutas%C3%ADtom%20a%20pedag%C3%B3gusok%20e%20m%C3%A9ltatlan%20kezel%C3%A9s%C3%A9t%2C%20kiv%C3%A1ltk%C3%A9pp%20Maruzsa%20Zolt%C3%A1n%20%C3%A1llamtitk%C3%A1r%20%C3%9Ar%20cinikus%20%C3%A9s%20%C3%A1lszent%20megnyilv%C3%A1nul%C3%A1s%C3%A1t%20a%20tan%C3%A1rok%20polg%C3%A1ri%20engedetlens%C3%A9g%C3%A9vel%20kapcsolatban%2C%20melyben%20absztrakt%20mor%C3%A1lis%20szab%C3%A1lyokra%20hivatkozva%20f%C3%A9leml%C3%ADti%20meg%2C%20az%20am%C3%BAgy%20is%20m%C3%A9ltatlan%20b%C3%A1n%C3%A1sm%C3%B3dban%20r%C3%A9szes%C3%BCl%C5%91%20tan%C3%A1rokat.%0A%0AAz%20oktat%C3%A1st%20egy%20felel%C5%91s%20politika%20alapj%C3%A1nak%20tartom%2C%20ezzel%20szemben%2C%20a%20korm%C3%A1ny%20%C3%A9s%20az%20%C3%A1llami%20szervek%20hozz%C3%A1%C3%A1ll%C3%A1sa%20a%20k%C3%A9rd%C3%A9shez%20k%C3%B6zel%20sem%20el%C3%A9gs%C3%A9ges.%20K%C3%A9rem%2C%20miel%C5%91tt%20legk%C3%B6zelebb%20ilyen%20%C3%A9s%20ehhez%20hasonl%C3%B3%20megf%C3%A9leml%C3%ADt%C5%91%20eszk%C3%B6z%C3%B6kh%C3%B6z%20ny%C3%BAlna%20vegye%20figyelembe%20a%20k%C3%B6vetkez%C5%91%20t%C3%A9nyez%C5%91ket%3A%0A%0A%E2%80%A2%20Egy%20kezd%C5%91%20pedag%C3%B3gus%20b%C3%A9re%20gyakran%20alig%20%C3%A9ri%20el%20a%20garant%C3%A1lt%20b%C3%A9rminimumot%20melynek%20%C3%A9rt%C3%A9ke%20nett%C3%B3%20173.000%20Ft%2C%20m%C3%ADg%20konkr%C3%A9t%20b%C3%A9remel%C3%A9si%20terv%20jelenleg%20nem%20sz%C3%BCletett%20meg%2C%20egy%20rohamosan%20dr%C3%A1gul%C3%B3%2C%20infl%C3%A1ci%C3%B3s%20gazdas%C3%A1gi%20helyzetben%3B%0A%E2%80%A2%20A%20legt%C3%B6bb%20f%C5%91munkaid%C5%91ben%20dolgoz%C3%B3%20pedag%C3%B3gus%20a%20t%C3%B6rv%C3%A9nyben%20el%C5%91%C3%ADrt%20maxim%C3%A1lis%2026%20%C3%B3r%C3%A1t%20tart%20egy%20h%C3%A9ten%2C%20de%20a%20val%C3%B3s%C3%A1gban%20megtartott%20%C3%B3r%C3%A1k%20sz%C3%A1ma%20a%20fokozott%20tan%C3%A1r%20hi%C3%A1ny%20miatt%20enn%C3%A9l%20magasabb.%20Figyelembe%20v%C3%A9ve%20tov%C3%A1bb%C3%A1%20az%20%C3%B3r%C3%A1kra%20val%C3%B3%20felk%C3%A9sz%C3%BCl%C3%A9st%20%C3%A9s%20egy%C3%A9b%20adminisztr%C3%A1ci%C3%B3s%20feladatokat%2C%20egy%20tan%C3%A1r%20munkahete%20ak%C3%A1r%20az%2050%20%C3%B3r%C3%A1t%20is%20el%C3%A9rheti%3B%0A%E2%80%A2%20A%202022.%20%C3%A9vi%20V.%20t%C3%B6rv%C3%A9ny%2014.%20%C2%A7-a%20s%C3%BAlyosan%20korl%C3%A1tozza%20a%20pedag%C3%B3gusok%20sztr%C3%A1jkjog%C3%A1t%20%C3%ADgy%20a%20fentebb%20eml%C3%ADtett%20probl%C3%A9m%C3%A1k%20elleni%20jogszer%C5%B1%20fell%C3%A9p%C3%A9st%20a%20gyakorlatban%20szinte%20ellehetetlen%C3%ADti.%20Eml%C3%A9keztetn%C3%A9m%2C%20hogy%20az%20Alapt%C3%B6rv%C3%A9ny%20deklar%C3%A1lja%2C%20hogy%20a%20sztr%C3%A1jk%20alapjognak%20sz%C3%A1m%C3%ADt%20%C3%A9s%20mint%20olyat%20korl%C3%A1tozni%20csak%20t%C3%B6rv%C3%A9nyesen%20legitim%20c%C3%A9llal%20%C3%A9s%20ar%C3%A1nyosan%20lehet.%0A%0AK%C3%A9rem%2C%20a%20fentebb%20eml%C3%ADtett%20okok%20miatt%20tart%C3%B3zkodjon%20az%20el%C3%A9gedetlen%20tan%C3%A1rokkal%20folytatott%20cinikus%20%C3%A9s%20szakszer%C5%B1tlen%20kommunik%C3%A1ci%C3%B3t%C3%B3l%2C%20helyette%20kezdem%C3%A9nyezzen%20diskurzust%20az%20%C3%96nh%C3%B6z%20tartoz%C3%B3%20tanker%C3%BClet%20iskol%C3%A1inak%20tan%C3%A1raival%2C%20di%C3%A1k%C3%B6nkorm%C3%A1nyzataival%20%C3%A9s%20a%20legnagyobb%20tan%C3%A1r%20szakszervezetekkel.%0A%0A%0ATisztelettel%2C%0AEgy%20oktat%C3%A1s%C3%A9rt%20agg%C3%B3d%C3%B3%20%C3%A1llampolg%C3%A1r",
  copybutton = document.getElementById("copybody"),
  bodytext = decodeURIComponent(body);

send.addEventListener("click", (e) => {
  let email = select.value;
  send.href =
    "mailto:" +
    email +
    "?subject=Szolidarit%C3%A1si%20nyilatkozat" +
    "&cc=ugyfelszolgalat@kk.gov.hu" +
    "&bcc=diakokatanarokert@gmail.com" +
    "&body=" +
    body;
});

select.addEventListener("change", (event) => {
  address.textContent = select.value;
  if (select.value !== "ugyfelszolgalat@kk.gov.hu") {
    cc.style.display = "flex";
  } else {
    cc.style.display = "none";
  }
});

copybutton.addEventListener("click", (e) => {
  copyEmailBody();
});

function updateClipboard(newClip) {
  navigator.clipboard.writeText(newClip).then(
    () => {
      console.log("Copy successful");
      document.getElementById("copy_success").style.visibility = "visible";
      document.getElementById("copy_success").style.opacity = "1";
      setTimeout(() => {
        document.getElementById("copy_success").style.visibility = "hidden";
        document.getElementById("copy_success").style.opacity = "0";
      }, 1500);
    },
    () => {
      console.log("Copy failed");
      document.getElementById("copy_success").style.visibility = "visible";
      document.getElementById("copy_fail").style.opacity = "1";
      setTimeout(() => {
        document.getElementById("copy_success").style.visibility = "hidden";
        document.getElementById("copy_fail").style.opacity = "0";
      }, 1500);
    }
  );
}

function copyEmailBody() {
  updateClipboard(bodytext);
  navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
    if (result.state === "granted" || result.state === "prompt") {
      updateClipboard(bodytext);
    }
  });
}
