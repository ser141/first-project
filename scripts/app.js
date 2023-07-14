VANTA.RINGS({
    el: "#intro",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })

  let introButton = document.querySelector(".intro__button");
  let introOverlay = document.querySelector(".intro__overlay");
  let popup = document.querySelector(".popup");
  let form = document.querySelector(".form");

  let login = "gandon"
  let popupTitle = document.querySelector(".popup__login");
  let profileLogin = document.querySelector(".form__item_login");
  let passwordForm = document.querySelector(".password");

  function openPopup() {
    introButton.classList.add("intro__button_disable");
    introOverlay.classList.add("intro__overlay_disable");
    popup.classList.add("popup_active");
    form.classList.add("form_active");
  }



  introButton.addEventListener('click', openPopup);

  function handleFormSubmit (evt) {
    evt.preventDefault();

    if (profileLogin.value === login) {
        popupTitle.textContent = "Password";
        form.classList.remove("form_active");
        passwordForm.classList.add("password_active");
    }

    else {
        alert("IDI NAXUY");
        profileLogin.value = "";
    }
  }

form.addEventListener("submit", handleFormSubmit);
