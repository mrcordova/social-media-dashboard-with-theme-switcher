const toggleSwitch = document.querySelector("label[for=toggle]");
// console.log(toggleSwitch);

toggleSwitch.addEventListener(
  "click",
  (e) => {
    e.stopPropagation();
    console.log(e.currentTarget);
    document.documentElement.classList.toggle(
      "dark-mode",
      e.currentTarget.children[0].checked
    );
  },
  true
);
