import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
  name: "Escrow Contract",
  preferredNetwork: "ghostnet",
});

export const connectWallet = async () => {
  await wallet.requestPermissions({ network: { type: "ghostnet" } });
};

export const getAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    return activeAccount.address;
  } else {
    return "";
  }
};
