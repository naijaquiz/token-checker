const input = document.getElementById("address");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

function showMessage(text, type) {
  result.innerHTML = "";
  const p = document.createElement("p");
  p.textContent = text;
  p.className = type;
  result.appendChild(p);
}

function isValidAddress(address) {
  // Ethereum-style addresses: 0x followed by 40 hex characters
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

button.addEventListener("click", () => {
  const address = input.value.trim();

  if (!isValidAddress(address)) {
    showMessage("That doesn't look like a valid address. It should start with 0x and be 42 characters long.", "error");
    return;
  }

  showMessage("Address looks valid. Safety checks will be added in the next step.", "ok");
});