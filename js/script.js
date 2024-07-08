const toggleSwitch = document.querySelector("label[for=toggle]");

window.addEventListener("load", () => {
  document.documentElement.classList.toggle(
    "dark-mode",
    toggleSwitch.children[0].checked
  );
});

toggleSwitch.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();

    document.documentElement.classList.toggle(
      "dark-mode",
      e.currentTarget.children[0].checked
    );
  },
  true
);
