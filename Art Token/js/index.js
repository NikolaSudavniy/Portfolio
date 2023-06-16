const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;

const connectBtn = document.querySelector("#connect-btn");
const copyBtn = document.querySelector("#copy-btn");
const walletModal = document.querySelector("#wallet-modal");

function init() {
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: { infuraId: "50a6c21b92b8499e833818e7229f1390" },
    },
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
  });

  console.log("Web3Modal instance is", web3Modal);
}

async function onConnect() {
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch (e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  await fetchAccountData();
}

async function fetchAccountData() {
  // Get a Web3 instance for the wallet
  const web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  //   const chainId = await web3.eth.getChainId();
  // Load chain information over an HTTP API
  //   const chainData = evmChains.getChain(chainId);
  //   console.log("chainData", chainData);
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  selectedAccount = accounts[0];
  console.log("selectedAccount", selectedAccount);

  // Go through all accounts and get their ETH balance
  const rowResolvers = accounts.map(async (address) => {
    const balance = await web3.eth.getBalance(address);
    // ethBalance is a BigNumber instance
    // https://github.com/indutny/bn.js/
    const ethBalance = web3.utils.fromWei(balance, "ether");
    const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4);

    console.log("humanFriendlyBalance", humanFriendlyBalance);
  });

  // Because rendering account does its own RPC commucation
  // with Ethereum node, we do not want to display any results
  // until data for all accounts is loaded
  await Promise.all(rowResolvers);
  openWalletModal();
}

function closeWalletModal() {
  walletModal.classList.remove("show");
}

function openWalletModal() {
  walletModal.classList.add("show");
}

function copyWallet() {
  navigator.clipboard.writeText("0xF9573dEDd94a09b9bbAAB15FC7119e2ED9BD678D");
  closeWalletModal();
  window.alert("Copied");
}

window.addEventListener("load", () => {
  init();
  connectBtn.addEventListener("click", onConnect);
  copyBtn.addEventListener("click", copyWallet);
});
