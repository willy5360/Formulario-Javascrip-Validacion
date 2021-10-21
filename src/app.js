/* eslint-disable */
import "bootstrap";
// import { doc } from "prettier";
import "./style.css";

window.onload = () => {};

const CARD = document.querySelector("#CARD");
const CVC = document.querySelector("#CVC");
const AMOUNT = document.querySelector("#AMOUNT");
const NAME = document.querySelector("#NAME");
const LASTNAME = document.querySelector("#LASTNAME");
const CITY = document.querySelector("#CITY");
const STATE = document.querySelector("#STATE");
const CITIES = document.querySelectorAll("option");
const POSTAL = document.querySelector("#POSTAL");
const COMMENTS = document.querySelector("#COMMENTS");
const SUBMIT_BUTTON = document.querySelector("form");
const SUCCESSALERT = document.querySelector(".alert-success");
const DANGERALERT = document.querySelector(".alert-danger");

SUBMIT_BUTTON.addEventListener("submit", event => {
  event.preventDefault();
  if (
    CARD.classList.contains("is-valid") &&
    CVC.classList.contains("is-valid") &&
    AMOUNT.classList.contains("is-valid") &&
    NAME.classList.contains("is-valid") &&
    LASTNAME.classList.contains("is-valid") &&
    CITY.classList.contains("is-valid") &&
    STATE.classList.contains("is-valid") &&
    POSTAL.classList.contains("is-valid") &&
    COMMENTS.classList.contains("is-valid")
  ) {
    SUCCESSALERT.classList.remove("d-none");
    SUCCESSALERT.classList.add("d-block");
    DANGERALERT.classList.remove("d-block");
    DANGERALERT.classList.add("d-none");
  } else {
    DANGERALERT.classList.remove("d-none");
    DANGERALERT.classList.add("d-block");
    SUCCESSALERT.classList.remove("d-block");
    SUCCESSALERT.classList.add("d-none");
  }
});

// Checking if CARD has a min and max Length
CARD.addEventListener("focusout", () => {
  if (
    (CARD.value.length == 16 || CARD.value.length == 19) &&
    isNumb(CARD.value)
  ) {
    isValid(CARD);
  } else {
    isInvalid(CARD);
  }
});

// Checking if CVC is a number and not a letter
CVC.addEventListener("focusout", () => {
  if ((CVC.value.length == 3 || CVC.value.length == 4) && isNumb(CVC.value)) {
    isValid(CVC);
  } else {
    isInvalid(CVC);
  }
});

// Checking if AMOUNT is number and over "0"
AMOUNT.addEventListener("focusout", () => {
  if (isNumb(AMOUNT.value)) {
    isValid(AMOUNT);
  } else {
    isInvalid(AMOUNT);
  }
});

// Checking if name has only letter and not numbers, and a min length of "1"
NAME.addEventListener("focusout", () => {
  if (isText(NAME.value) && NAME.value.length >= 1) {
    isValid(NAME);
  } else {
    isInvalid(NAME);
  }
});

// Checking if lasTname has only letter and not numbers, and a min length of "1"
LASTNAME.addEventListener("focusout", () => {
  if (isText(LASTNAME.value) && LASTNAME.value.length >= 1) {
    isValid(LASTNAME);
  } else {
    isInvalid(LASTNAME);
  }
});

// Checking if City has only letter and not numbers, and a min length of "1"
CITY.addEventListener("focusout", () => {
  if (isText(CITY.value) && CITY.value.length >= 1) {
    isValid(CITY);
  } else {
    isInvalid(CITY);
  }
});

// Checking if the input's State is equal to the displayed options
let CityValues = [];
for (const cities in CITIES) {
  CityValues.push(CITIES[cities].value);
  console.log(CityValues);
}

STATE.addEventListener("focusout", () => {
  CityValues.some(city => city == STATE.value)
    ? isValid(STATE)
    : isInvalid(STATE);
});

COMMENTS.addEventListener("focusout", () => {
  if (COMMENTS.value.length >= 0 && COMMENTS.value.length <= 250) {
    isValid(COMMENTS);
  } else {
    isInvalid(COMMENTS);
  }
});

POSTAL.addEventListener("focusout", () => {
  if (POSTAL.value.length == 5 && isNumb(POSTAL.value)) {
    isValid(POSTAL);
  } else {
    isInvalid(POSTAL);
  }
});

const isValid = input => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
};

const isInvalid = input => {
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
};

const isNumb = number => {
  return number % 1 == 0 && number >= 0;
};
const isText = text => {
  return /^[a-zñA-ZÑ ]+$/.test(text);
};
