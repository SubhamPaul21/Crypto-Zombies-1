
// Check if MetaMask is installed
async function checkMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        return true;
    } else {
        console.log('MetaMask is not installed!');
        return false;
    }
}

// Request account access
async function requestAccount() {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Account access granted!');
        return true;
    } catch (error) {
        console.error('Error requesting account access:', error);
        return false;
    }
}

// Connect to MetaMask
async function connect() {
    if (await checkMetaMask()) {
        if (await requestAccount()) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();

            console.log('Connected to MetaMask!');
            console.log('User Address:', address);
        } else {
            console.log('Account access denied!');
        }
    } else {
        console.log('MetaMask not found!');
    }
}