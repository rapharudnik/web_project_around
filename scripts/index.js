// Selecionar os elementos principais
const editButton = document.querySelector(".profile__info-edit-button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".popup__close-icon");

// Função para abrir o popup
function openPopup() {
  popup.classList.add("popup_opened");
}

// Função para fechar o popup
function closePopup() {
  popup.classList.remove("popup_opened");
}

// Quando clicar no botão editar, abre o popup
editButton.addEventListener("click", openPopup);

// Quando clicar no botão fechar, fecha o popup
closeButton.addEventListener("click", closePopup);

const profilename = document.querySelector(".profile__name");
const profilefunction = document.querySelector(".profile__info-function");

const currentname = profilename.textContent;
const currentfunction = profilefunction.textContent;

const nameInput = document.querySelector("#form__input-name");
const functionInput = document.querySelector("#form__input-function");

nameInput.value = currentname;
functionInput.value = currentfunction;

let formElement = document.querySelector(".popup");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#form__input-name");
  let functionInput = document.querySelector("#form__input-function");

  let newName = nameInput.value;
  let newFunction = functionInput.value;

  let profileName = document.querySelector(".profile__name");
  let profileFunction = document.querySelector(".profile__info-function");

  profileName.textContent = newName;
  profileFunction.textContent = newFunction;

  closePopup();
}

formElement.addEventListener("submit", handleProfileFormSubmit);
