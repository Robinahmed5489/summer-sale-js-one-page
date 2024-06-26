document.getElementById("product-1").addEventListener("click", function () {
  const productNameTake = getElementByIdString("K-Accessories1-name");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("K-Accessories1-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});

document.getElementById("product-2").addEventListener("click", function () {
  const productNameTake = getElementByIdString("K-Accessories2-name");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("K-Accessories2-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});

document.getElementById("product-3").addEventListener("click", function () {
  const productNameTake = getElementByIdString("Home-Cooker");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("Home-Cooker-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});

document.getElementById("product-4").addEventListener("click", function () {
  const productNameTake = getElementByIdString("Sports-Back-Cap");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("Sports-Back-Cap-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});

document.getElementById("product-5").addEventListener("click", function () {
  const productNameTake = getElementByIdString("Full-Jersey-Set");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("Full-Jersey-Set-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});

document.getElementById("product-6").addEventListener("click", function () {
  const productNameTake = getElementByIdString("Sports-cates");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("Sports-cates-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});
document.getElementById("product-7").addEventListener("click", function () {
  const productNameTake = getElementByIdString("Single-Relax-Chair");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("Single-Relax-Chair-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});
document.getElementById("product-8").addEventListener("click", function () {
  const productNameTake = getElementByIdString("Children-play");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("Children-play-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});

document.getElementById("product-9").addEventListener("click", function () {
  const productNameTake = getElementByIdString("Flexible-Sofa");
  setEntriesById(productNameTake);
  const productValue = getElementByIdNumber("Flexible-Sofa-price");
  const previousTotalValue = getElementByIdNumber("total-price");
  const newTotalPrice = previousTotalValue + productValue;

  setDataById("total-price", newTotalPrice);
  setDataById("Final-price", newTotalPrice);
  enablePurchaseButton(newTotalPrice);
});

document
  .getElementById("promo-apply-button")
  .addEventListener("click", function () {
    const inputFieldValue = getInputById("Promo-code-input");
    const getDiscountPrice = getElementByIdNumber("discount-price");
    const getTotalProductPrice = getElementByIdNumber("total-price");
    if (inputFieldValue == "SELL200") {
      const discount = getTotalProductPrice * (20 / 100);
      const discountOneDecimal = discount.toFixed(2);
      setDataById("discount-price", discountOneDecimal);
      const PriceAfterDiscount = getTotalProductPrice - discount;
      const PriceAfterDiscountTwoDecimal = PriceAfterDiscount.toFixed(2);
      setDataById("Final-price", PriceAfterDiscountTwoDecimal);
    } else {
      alert("You have to apply Proper valid promo code");
    }
  });
