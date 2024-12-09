
function navigateTo(screenId) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email && password) {
    navigateTo('scan-screen');
  } else {
    alert('Please enter valid credentials.');
  }
}

function signup() {
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const confirmPassword = document.getElementById('signup-confirm-password').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return;
  }

  alert('Sign up successful! Please log in.');
  navigateTo('login-screen');
}

function analyzeWallet() {
  const walletAddress = document.getElementById('wallet-address').value;

  if (!walletAddress) {
    alert('Please enter a wallet address.');
    return;
  }

  const riskScore = Math.random() * 100; // Simulate analysis
  const result = riskScore > 70 ? 'High Risk' : riskScore > 30 ? 'Medium Risk' : 'Low Risk';

  document.getElementById('analysis-results').innerText = `
    Wallet: ${walletAddress}
    Risk Score: ${riskScore.toFixed(2)}
    Status: ${result}
  `;
  navigateTo('analysis-screen');
}

function sendEmail() {
  const recipientEmail = document.getElementById('recipient-email').value;

  if (!recipientEmail) {
    alert('Please enter a recipient email.');
    return;
  }

  alert(`Analysis sent to ${recipientEmail}.`);
  navigateTo('scan-screen'); // Back to Scan Wallet screen
}
