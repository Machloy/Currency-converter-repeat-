{
  const amountElement = document.querySelector(".js-ammount");
  const currencyElement = document.querySelector(".js-currency");
  const resultTxt = document.querySelector(".js-result");
  const formElement = document.querySelector(".js-form");

  const calculateResult = (amount, exchangeRate) => {
    return amount / exchangeRate;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const exchangeRate = currencyElement.value;
    const amount = amountElement.value;
    const result = calculateResult(amount, exchangeRate);

    resultTxt.innerText = `${result.toFixed(2)}`;
  };

  const init = () => {
    formElement.addEventListener("submit", onFormSubmit);
  };

  init();
}
