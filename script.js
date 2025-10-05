// Function to copy text to clipboard
function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const copyButton = document.getElementById("copy-password");
      const copyIcon = copyButton.querySelector(".material-symbols-outlined");

      // Change icon appearance to indicate success
      copyIcon.style.color = "#198754";
      setTimeout(() => {
        copyIcon.style.color = ""; // Reset to default color
      }, 1500);
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

document.getElementById("generate").addEventListener("click", function () {
  const length = parseInt(document.getElementById("length").value);
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  // Define character sets
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+";

  // Build charset based on selected options
  let charset = "";
  if (includeLowercase) charset += lowercase;
  if (includeUppercase) charset += uppercase;
  if (includeNumbers) charset += numbers;
  if (includeSymbols) charset += symbols;

  // Validate that at least one option is selected
  if (charset === "") {
    document.getElementById("result").textContent =
      "Please select at least one character type";
    return;
  }

  dikhanahaikya.style.display = "block";

  // Generate password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById("result").textContent = password;
});

let dikhanahaikya = document.getElementById("show-hide");

// Add click event listener to copy button
document.getElementById("copy-password").addEventListener("click", function () {
  const password = document.getElementById("result").textContent;
  if (password && password !== "Please select at least one character type") {
    copyToClipboard(password);
    alert("Password copied to clipboard!");
  }
});
