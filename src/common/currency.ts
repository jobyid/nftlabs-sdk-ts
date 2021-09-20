import { AddressZero } from "@ethersproject/constants";
import { BigNumber } from "@ethersproject/bignumber";
import { formatUnits } from "@ethersproject/units";
import { ERC20__factory } from "../types";
import { ProviderOrSigner } from "../core";

export interface Currency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface CurrencyValue extends Currency {
  value: string;
  displayValue: string;
}

export async function getCurrencyMetadata(
  providerOrSigner: ProviderOrSigner,
  asset: string,
): Promise<Currency> {
  try {
    if (asset.toLowerCase() != AddressZero) {
      const erc20 = ERC20__factory.connect(asset, providerOrSigner);
      const [name, symbol, decimals] = await Promise.all([
        erc20.name(),
        erc20.symbol(),
        erc20.decimals(),
      ]);
      return {
        name: name,
        symbol: symbol,
        decimals: decimals,
      };
    }
  } catch (e) {}
  return {
    name: "",
    symbol: "",
    decimals: 0,
  };
}

export async function getCurrencyWithPrice(
  providerOrSigner: ProviderOrSigner,
  asset: string,
  price: BigNumber,
): Promise<CurrencyValue> {
  const metadata = await getCurrencyMetadata(providerOrSigner, asset);
  return {
    ...metadata,
    value: price.toString(),
    displayValue: formatUnits(price, metadata.decimals),
  };
}
