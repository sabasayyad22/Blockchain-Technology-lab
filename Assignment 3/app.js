const connectBtn = document.getElementById("connectBtn");
const registerBtn = document.getElementById("registerBtn");
const fetchBtn = document.getElementById("fetchBtn");
const accountEl = document.getElementById("account");
const recordEl = document.getElementById("record");

const contractAddress = "<YOUR_CONTRACT_ADDRESS>";
const contractABI = [
  "function register(string name, string rollNumber)",
  "function getMyRecord() view returns (string name, string rollNumber)",
];

let provider;
let signer;
let contract;

connectBtn.addEventListener("click", async () => {
  if (!window.ethereum) {
    alert("MetaMask is required.");
    return;
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
  const address = await signer.getAddress();
  accountEl.textContent = `Connected: ${address}`;

  contract = new ethers.Contract(contractAddress, contractABI, signer);
});

registerBtn.addEventListener("click", async () => {
  if (!contract) {
    alert("Connect MetaMask first.");
    return;
  }
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const tx = await contract.register(name, roll);
  await tx.wait();
  alert("Registration complete!");
});

fetchBtn.addEventListener("click", async () => {
  if (!contract) {
    alert("Connect MetaMask first.");
    return;
  }
  const result = await contract.getMyRecord();
  recordEl.textContent = `Name: ${result.name}\nRoll: ${result.rollNumber}`;
});
