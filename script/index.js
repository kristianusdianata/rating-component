const form = document.querySelector("form");
const radios = document.querySelectorAll("input[name=rating][type=radio]");

const onSubmit = (e) => {
  e.preventDefault();
  const rating = document.querySelector(
    "input[name=rating][type=radio]:checked"
  );

  if (rating) {
    const submitUrl = `success.html?rating=${rating.value}`;
    window.location.href = submitUrl;
  }
};

function state() {
  let activeRadio = null;

  return function wrapper(radio) {
    // Remove active class on prev active radio
    if (activeRadio) {
      const prevLabelRef = document.querySelector(
        `label[for=${activeRadio.id}]`
      );

      prevLabelRef.classList.remove(`rating__radio--active`);
    }

    // add active class to current radio
    activeRadio = radio;
    const labelRef = document.querySelector(`label[for=${activeRadio.id}]`);
    labelRef.classList.add(`rating__radio--active`);
  };
}

const radioState = state();

const onRadioChange = (e) => {
  e.preventDefault();
  radioState(e.target);
};

form.addEventListener("submit", onSubmit);

for (const [index, radio] of Array.from(radios).entries()) {
  radio.addEventListener("change", onRadioChange);
}
