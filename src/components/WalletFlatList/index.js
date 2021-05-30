import React, { useContext, useCallback, useRef } from "react";
import { FlatList, Text } from "react-native";

import { WalletContext } from "../../contexts/walletContext";

import {
  Wallet,
  WalletGradient,
  WalletTitle,
  WalletBalance,
  WalletCurrency,
  RowSpacedBetween,
} from "./styles";

function WalletFlatList() {
  const {
    wallets,
    selectedWallet,
    selectedWalletIndex,
    changeWalletIndexTo,
  } = useContext(WalletContext);

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      changeWalletIndexTo(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig: {
        waitForInteraction: true,
        itemVisiblePercentThreshold: 75,
      },
      onViewableItemsChanged,
    },
  ]);

  if (!wallets) {
    return <Text style={{ textAlign: "center" }}>No wallet</Text>;
  }

  if (wallets.length === 1) {
    return (
      <Wallet single>
        <WalletGradient
          colors={["#8900f2", "#2d00f7"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.75, y: 1 }}
        >
          <WalletTitle>{selectedWallet.name}</WalletTitle>

          <RowSpacedBetween>
            <WalletBalance>
              <WalletCurrency>{selectedWallet.currency} </WalletCurrency>
              {selectedWallet.formattedBalanceWithoutCurrency}
            </WalletBalance>
          </RowSpacedBetween>
        </WalletGradient>
      </Wallet>
    );
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      keyExtractor={item => item.name}
      data={wallets}
      renderItem={({ item, index }) => (
        <Wallet active={selectedWalletIndex === index}>
          <WalletGradient
            colors={["#8900f2", "#2d00f7"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0.75, y: 1 }}
          >
            <WalletTitle>{item.name}</WalletTitle>

            <RowSpacedBetween>
              <WalletBalance>
                <WalletCurrency>{item.currency} </WalletCurrency>
                {item.formattedBalanceWithoutCurrency}
              </WalletBalance>
            </RowSpacedBetween>
          </WalletGradient>
        </Wallet>
      )}
    />
  );
}

export default WalletFlatList;
