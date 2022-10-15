{
  const ammountElement = document.querySelector(".js-ammount");
  const currencyElement = document.querySelector(".js-currency");
  const resultTxt = document.querySelector(".js-result");
  const formElement = document.querySelector(".js-form");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currency = currencyElement.value;
    const ammount = ammountElement.value;
    const result = ammount / currency;

    resultTxt.innerText = `${result.toFixed(2)}`;
  };

  formElement.addEventListener("submit", onFormSubmit);
}
