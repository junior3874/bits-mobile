import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useContext,
} from "react";

import { AuthContext } from "./authContext";

import api from "../services/api";

import currencyCodes from "../utils/currencyCodes.json";
import { formatBalance } from "../utils/formatBalance";

export const WalletContext = createContext({});

export const WalletProvider = ({ children }) => {
  const { signed } = useContext(AuthContext);
  const [wallets, setWallets] = useState([]);
  const [selectedWalletIndex, setSelectedWalletIndex] = useState(0);

  const selectedWallet = useMemo(() => {
    if (wallets?.length > 0) {
      const wallet = wallets[selectedWalletIndex];
      return {
        ...wallet,
        currencySymbol: currencyCodes[wallet.currency].symbol,
      };
    }

    return { balance: 0 };
  }, [wallets, selectedWalletIndex]);

  useEffect(() => {
    if (!signed) {
      return;
    }

    fetchWallets();
  }, [signed]);

  async function fetchWallets() {
    const response = await api
      .get("/wallet")
      .then(res => ({ error: false, data: res.data }))
      .catch(err => ({ error: true, err }));

    if (response.error) {
      setWallets(null);
      return;
    }

    let mappedWallets = response.data.map(w => ({
      ...w,
      formattedBalanceWithoutCurrency: formatBalance(w.balance, ""),
    }));

    mappedWallets = mappedWallets.sort((first, second) => first.id - second.id);

    setWallets(mappedWallets);
  }

  function changeWalletIndexTo(index) {
    setSelectedWalletIndex(index);
  }

  return (
    <WalletContext.Provider
      value={{
        changeWalletIndexTo,
        selectedWallet,
        selectedWalletIndex,
        wallets,
        fetchWallets,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
