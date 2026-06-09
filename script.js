const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.querySelector("#quote-form");
const note = document.querySelector("#form-note");
const currentYear = document.querySelector("#current-year");

function updateHeader() {
  header.dataset.scrolled = window.scrollY > 20 ? "true" : "false";
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

function setMenuState(isOpen) {
  navLinks?.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("nav-open", isOpen);
  navToggle?.setAttribute("aria-expanded", String(isOpen));
}

navToggle?.addEventListener("click", () => {
  setMenuState(!navLinks.classList.contains("is-open"));
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenuState(false);
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    const firstInvalid = form.querySelector(":invalid");
    note.textContent = "Please complete the required fields before sending.";
    firstInvalid?.focus();
    form.reportValidity();
    return;
  }

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

  try {
    const mailto = new URL("mailto:contact@michaelsmithsites.com");
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", lines.join("\n"));
    window.location.href = mailto.toString();
    note.textContent = "Your email app should open with the quote request filled in.";
  } catch {
    note.textContent = "Something went wrong preparing the email. Please email contact@michaelsmithsites.com directly.";
  }
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
