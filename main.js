const { createClient } = supabase;

//* This is a bad idea security wise
const supabaseClient = createClient(
  "https://shqcvvynndeirdtkqvsa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNocWN2dnlubmRlaXJkdGtxdnNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcwMjI2MjUsImV4cCI6MjAzMjU5ODYyNX0.VvScA6DDc969XnEVErbHc-JOAu0EQzcKxYT-e0FpdGY"
);

const ehk_checkbox = document.getElementById("ehk");

/*
 * This is a bad idea.
 * Is this particularly safe or fancy? No. Basically anyone could disrupt this table.
 * But the key is always going to be available as long as the request is sent from the client,
 * and I don't want to run a backend just for this request.
 * You could also just wipe localStorage and spam the button that way.
 * This table is getting deleted in 2 weeks anyway.
 */
async function increment() {
  try {
    if (localStorage.getItem("visited") == null) {
      localStorage.setItem("visited", "1");
      const { data, error } = await supabaseClient.rpc("increment");
    }
  } catch (err) {
    //Not enough space for/in localStorage
  }
}

let select = document.getElementById("hk_select"),
  send = document.getElementById("send"),
  address = document.getElementById("hk_address"),
  subject = document.getElementById("targy"),
  cc = document.getElementById("cc1"),
  body = encodeURIComponent(
    document.getElementById("mail_default_content").value
  ),
  copybutton = document.getElementById("copybody"),
  bodytext = decodeURIComponent(body);

send.addEventListener("click", async (e) => {
  if (document.getElementById("counterpermission").checked) {
    await increment();
  }

  let email = select.value;
  send.href =
    "mailto:" +
    email +
    "?subject=BME Rektorválasztás és Modellváltás" +
    "&cc=" +
    cc.textContent +
    "&body=" +
    body;
});

select.addEventListener("sl-change", (event) => {
  document.getElementById("cim1").textContent = select.value;
  document.getElementById("cim2").textContent = select.value;
});

ehk_checkbox.addEventListener("sl-change", () => {
  if (ehk_checkbox.checked) {
    document.getElementById("cc1").textContent = "info@bmeehk.hu";
    document.getElementById("cc2").textContent = "info@bmeehk.hu";
  } else {
    document.getElementById("cc1").textContent = "";
    document.getElementById("cc2").textContent = "";
  }
});
