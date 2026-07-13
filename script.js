const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }
  });
}

document.querySelectorAll("[data-contact]").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-contact");
    const target = button.querySelector(".contact-value");

    if (!value || !target) return;

    target.textContent = value;
    button.classList.add("is-revealed");
    button.setAttribute("aria-label", value);
  });
});
