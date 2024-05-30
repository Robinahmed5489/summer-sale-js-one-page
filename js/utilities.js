function getInputById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}
function getElementByIdString(elementId) {
  const targetElementTag = document.getElementById(elementId);
  const targetElementString = targetElementTag.innerText;
  return targetElementString;
}
function getElementByIdNumber(elementId) {
  const targetElementTag = document.getElementById(elementId);
  const targetElementStringtoNumber = parseFloat(targetElementTag.innerText);
  return targetElementStringtoNumber;
}
function setDataById(DataId, newValue) {
  const targetDataElementTag = document.getElementById(DataId);
  targetDataElementTag.innerText = newValue;
}

function setEntriesById(productName) {
  const targetDataElementTag = document.getElementById("New-Item-notification");
  targetDataElementTag.innerText = "New Item Added";
  const setEntryParentTag = document.getElementById("Add-item-name");
  const p = document.createElement("p");
  p.classList.add("my-1");
  const count = setEntryParentTag.childElementCount;
  p.innerHTML = `${count}. ${productName}`;
  setEntryParentTag.appendChild(p);
}
