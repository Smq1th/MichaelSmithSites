const header = document.querySelector(".site-header");
const form = document.querySelector("#quote-form");
const note = document.querySelector("#form-note");

function updateHeader() {
  header.dataset.scrolled = window.scrollY > 20 ? "true" : "false";
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `Website quote request from ${data.get("business") || data.get("name")}`;
  const lines = [
    `Name: ${data.get("name")}`,
    `Business name: ${data.get("business")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone")}`,
    `Current website: ${data.get("website") || "Not provided"}`,
    "",
    "Message:",
    data.get("message"),
  ];

  const mailto = new URL("mailto:contact@michaelsmithsites.com");
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", lines.join("\n"));
  window.location.href = mailto.toString();
  note.textContent = "Your email app should open with the quote request filled in.";
});

const profilePhoto = document.querySelector("[data-photo-src]");

if (profilePhoto) {
  const photoSrc = profilePhoto.dataset.photoSrc;

  fetch(photoSrc, { method: "HEAD" })
    .then((response) => {
      if (!response.ok) return;

      const image = new Image();
      image.src = photoSrc;
      image.alt = "Michael Smith";
      profilePhoto.replaceChildren(image);
      profilePhoto.setAttribute("aria-label", "Michael Smith profile photo");
    })
    .catch(() => {});
}
