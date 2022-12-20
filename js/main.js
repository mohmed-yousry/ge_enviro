window.onload = () => {
  // handle add  active for link of page active
  const allNavItem = Array.from(document.querySelectorAll("nav .links ul a"));
  allNavItem.forEach((e, i) => {
    e.classList.remove("active-nav");
    if (window.location.href.includes(e.href)) {
      e.classList.add("active-nav");
    } else {
      // console.log(allNavItem[1].classList.add("active-nav"));
      if (i == 0) {
        // console.log(true);
        allNavItem[1].classList.add("active-nav");
      }
    }
  });
};
// handle show and hide password Inputs
const allPaswordInput = Array.from(
  document.querySelectorAll(".fa-regular.fa-eye-slash")
);
allPaswordInput.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("fa-eye");
    e.classList.toggle("fa-eye-slash");
    if (e.previousSibling.getAttribute("type") == "password") {
      e.previousSibling.setAttribute("type", "text");
    } else {
      e.previousSibling.setAttribute("type", "password");
    }
  });
});

// handle nav mobile
const togleBtn = document.querySelector("nav .togle i");
const menueLinks = document.querySelector("nav ul");
const closeBtnCanves = document.querySelector("nav ul .close-menue i");

// handle open Canves
togleBtn.addEventListener("click", () => {
  menueLinks.firstElementChild.classList.toggle("hidden");
  if (document.querySelector("html").dir == "rtl") {
    menueLinks.style.right = "0px";
  } else {
    menueLinks.style.left = "0px";
  }
});
// handle close Canves

function handleCloseCanves() {
  menueLinks.firstElementChild.classList.toggle("hidden");
  if (document.querySelector("html").dir == "rtl") {
    menueLinks.style.right = "-200%";
  } else {
    menueLinks.style.left = "-200%";
  }
}

menueLinks.firstElementChild.addEventListener("click", handleCloseCanves);
closeBtnCanves.addEventListener("click", handleCloseCanves);

// home

// Registration.

const allBtnFilter = Array.from(
  document.querySelectorAll(".filter-nav .nav-taps button.button-teb")
);
const allContentDiv = Array.from(
  document.querySelectorAll(".filter-nav .nav-taps .content div")
);
const RegistrationForm = document.querySelector("#Registration-form");
allBtnFilter.forEach((e) => {
  e.addEventListener("click", () => {
    // reomve class active-nav-taps for all
    allBtnFilter.forEach((x) => x.classList.remove("active-nav-taps"));
    // add active-nav-taps for curent
    e.classList.add("active-nav-taps");

    allContentDiv.forEach((z) => {
      // remove active-teb-content for curent
      z.classList.remove("active-teb-content");
      // chaeck
      if (e.getAttribute("tep") == z.getAttribute("terget")) {
        z.classList.add("active-teb-content");
      }
    });
  });
});

if (RegistrationForm != null) {
  RegistrationForm.addEventListener("submit", (ev) => {
    const allInputs = Array.from(RegistrationForm.querySelectorAll("input"));
    const textArea = RegistrationForm.querySelector("textarea");
    if (
      allInputs[0].value != "" &&
      allInputs[1].value != "" &&
      allInputs[2].value != "" &&
      allInputs[3].value != "" &&
      allInputs[2].classList.contains("not-valid") == false &&
      allInputs[3].classList.contains("not-valid") == false &&
      allInputs[4].value != "" &&
      allInputs[5].value != "" &&
      allInputs[6].value != "" &&
      allInputs[7].value != "" &&
      allInputs[8].checked != false &&
      textArea.value != ""
    ) {
      if (allInputs[6].value == allInputs[7].value) {
        window.location.href("email-coform.html");
      } else {
        allInputs[6].classList.add("not-valid");
        allInputs[7].classList.add("not-valid");
        ev.preventDefault();
      }
    } else {
      ev.preventDefault();
    }
  });
}

//   handle email valid
const emailInput = document.querySelector(`input.email-check`);
const passwordInput = Array.from(
  document.querySelectorAll(`input.password-check`)
);
const PhoneNumberInput = document.querySelector(`input.mobile-check`);
const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const allEmailInput = Array.from(
  document.querySelectorAll(".email-check-onlay")
);

function checkEmail(e) {
  e.addEventListener("input", (va) => {
    if (va.target.value.match(regEmail)) {
      e.classList.remove("not-valid");
    } else {
      e.classList.add("not-valid");
    }
  });
}

if ((allEmailInput.length = !0)) {
  allEmailInput.forEach((e) => checkEmail(e));
}

if (emailInput != null) {
  emailInput.addEventListener("input", (va) => {
    if (va.target.value.match(regEmail)) {
      emailInput.classList.remove("not-valid");
    } else {
      emailInput.classList.add("not-valid");
    }
  });
}

if (passwordInput.length != 0) {
  passwordInput.forEach((e) => {
    e.addEventListener("input", () => {
      if (e.value.length < 4) {
        e.classList.add("not-valid");
      } else {
        e.classList.remove("not-valid");
      }
    });
  });
}



// handle check mobile number
const allInputMobileNumber = Array.from(
  document.querySelectorAll("input.checkValidMobile")
);
function checkPhoneNumber(ele) {
  ele.addEventListener("input", (va) => {
    // console.log(va.value);
    if (va.target.value.length < 9 || va.target.value.length > 9) {
      if (Number(va.target.value)) {
        ele.classList.add("not-valid");
      }
    } else {
      ele.classList.remove("not-valid");
    }
  });
}

if (PhoneNumberInput != null) {
  checkPhoneNumber(PhoneNumberInput);
}
if (allInputMobileNumber.length != 0) {
  allInputMobileNumber.forEach((e) => checkPhoneNumber(e));
}

// phone-conform and email-coform
const submiteCode = document.querySelector("#conform-code-valid");
const formCode = document.querySelector(".code-form");
const allInputCode = Array.from(document.querySelectorAll(".code-form input"));
// formCode stop Default
if (formCode != null) {
  formCode.addEventListener("submit", (ev) => {
    // console.log(ev.target);
    const popup = document.querySelector(".popup-conform-email");
    if (popup != null) {
      ev.preventDefault();
    }
  });
}

// handle submiteCode and show  popup
if (submiteCode != null) {
  submiteCode.addEventListener("click", () => {
    const doneConform = document.querySelector(".popup-conform-email");
    if (doneConform != null) {
      doneConform.classList.toggle("active-popup");
    }
  });
}

// handle disabled from code
if (formCode != null) {
  formCode.addEventListener("input", (ev) => {
    if (
      allInputCode[0].value != "" &&
      allInputCode[1].value != "" &&
      allInputCode[2].value != "" &&
      allInputCode[3].value != "" &&
      allInputCode[4].value != "" &&
      allInputCode[5].value != ""
    ) {
      submiteCode.removeAttribute("disabled");
      submiteCode.classList.replace("bg-mainColor/10", "bg-mainColor");
      submiteCode.classList.replace("cursor-not-allowed", "cursor-auto");
    } else {
      submiteCode.setAttribute("disabled", "");
      submiteCode.classList.replace("bg-mainColor", "bg-mainColor/10");
      submiteCode.classList.replace("cursor-auto", "cursor-not-allowed");
    }
  });
}

allInputCode.forEach((e, i) => {
  e.addEventListener("input", () => {
    if (i < 5) {
      e.nextElementSibling.focus();
    }
  });
});

function showModel(classs) {
  const modil = document.querySelector(`.${classs}`);
  // console.log(modil);
  if (modil != null) {
    modil.classList.remove("z-[-50]");
    modil.classList.remove("opacity-0");
    modil.classList.add("z-50");
    modil.classList.add("opacity-1");
    modil.classList.add("flex");
  }
}

const AllCloseModelBtn = Array.from(document.querySelectorAll(".close-popup"));
if (AllCloseModelBtn.length != 0) {
  AllCloseModelBtn.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.parentElement.classList.add("z-[-50]");
      e.parentElement.parentElement.parentElement.classList.add("opacity-0");
      e.parentElement.parentElement.parentElement.classList.remove("z-50");
      e.parentElement.parentElement.parentElement.classList.remove("opacity-1");
      e.parentElement.parentElement.parentElement.classList.remove("flex");
    });
  });
}
// about pages
let sectionNums = document.querySelector(".seccsess");
let nums = document.querySelectorAll(".seccsess .number");
let started = false; // Function Started ? No

if (nums.length != 0) {
  window.onscroll = function () {
    if (window.scrollY >= sectionNums.offsetTop - 600) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };
}

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// chart pages

if (document.querySelector(".swiper-chart") != null) {
  const swiperChart = new Swiper(".swiper-chart", {
    slidesPerView: "auto",
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    breakpoints: {
      990: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
}

// conform password
const conformPasswordForm = document.querySelector(".conform-password");
if (conformPasswordForm != null) {
  conformPasswordForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const allInputForm = conformPasswordForm.querySelectorAll("input");
    const doneConform = document.querySelector(".popup-conform-email");
    if (allInputForm[0].value.length > 4 && allInputForm[0].value.length > 4) {
      if (allInputForm[0].value == allInputForm[1].value) {
        doneConform.classList.toggle("active-popup");
      } else {
        allInputForm[0].classList.add("not-valid");
        allInputForm[1].classList.add("not-valid");
      }
    } else {
      allInputForm[0].classList.add("not-valid");
      allInputForm[1].classList.add("not-valid");
    }
  });
}

// forger password
const forgetForm = document.querySelector("form.forger-password");
if (forgetForm != null) {
  forgetForm.addEventListener("submit", (e) => {
    const inputs = document.querySelector("input");
    if (inputs.classList.contains("not-valid")) {
      e.preventDefault();
    }
  });
}

// edit email or phone number
const formEditEmailorPhoneNumber = document.querySelector(
  ".form-edit-email-phone"
);
if (formEditEmailorPhoneNumber != null) {
  // console.log(formEditEmailorPhoneNumber);
  formEditEmailorPhoneNumber.addEventListener("submit", (ev) => {
    const input = formEditEmailorPhoneNumber.querySelector("input");
    if (input.classList.contains("not-valid")) {
      ev.preventDefault();
    }
  });
}

const allInputFiles = Array.from(document.querySelectorAll(".exploer"));
// console.log(allInputFiles);
if (allInputFiles.length >= 1) {
  allInputFiles.forEach((e) => handleInputFile(e));
}
function handleInputFile(parint) {
  parint.addEventListener("click", () => {
    const input = parint.querySelector(`input[type = "file"]`);
    input.click();
  });
}

// profile page
const btnShowFilterInMobile = document.querySelector(".show-side-profile");
const filterMobile = document.querySelector(".aside-profile");
// console.log(filterMobile);
const overlayProfile = document.querySelector(".overlay-profile");
if (btnShowFilterInMobile != null) {
  btnShowFilterInMobile.addEventListener("click", () => {
    // console.log(filterMobile);
    if (document.querySelector("html").dir == "rtl") {
      overlayProfile.classList.remove("hidden");
      filterMobile.style.left = "0px";
    } else {
      overlayProfile.classList.remove("hidden");
      filterMobile.style.right = "0px";
    }
  });
}

if (overlayProfile != null) {
  overlayProfile.addEventListener("click", () => {
    if (document.querySelector("html").dir == "rtl") {
      overlayProfile.classList.add("hidden");
      filterMobile.style.left = "-200%";
    } else {
      overlayProfile.classList.add("hidden");
      filterMobile.style.right = "-200%";
    }
  });
}

// sign in page
const formSignIn = document.querySelector(".form-sign-in");
if (formSignIn != null) {
  formSignIn.addEventListener("submit", (event) => {
    const idInput = formSignIn.querySelector("#number-id");
    const passwordInput = formSignIn.querySelector("#number-password");
    if (
      passwordInput.classList.contains("not-valid") == false &&
      passwordInput.value != "" &&
      idInput.value != ""
    ) {
    } else {
      event.preventDefault();
    }
  });
}

// Shipping page 
const ShippingValueInput = document.querySelector(".Shipping-value-input") ; 
const taxSpan = document.querySelector(".tax-span") ; 
const taxCount = document.querySelector(".tax-count") ; 
const totelPriceng = document.querySelector(".totle-price") ; 
// console.log(taxSpan.innerHTML);
// console.log(taxCount.innerHTML);
if(ShippingValueInput != null) {
  ShippingValueInput.addEventListener("input" , (ev) => {
    taxSpan.innerHTML =  (ev.target.value * taxCount.innerHTML)/100 ;
    totelPriceng.innerHTML = +(ev.target.value * taxCount.innerHTML)/100  + +ev.target.value ;
  })
}
