import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  // From field
  const [fromAmount, setFromAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const fromCurrencyInfo = useCurrencyInfo(fromCurrency) || {};
  const fromOptions = Object.keys(fromCurrencyInfo);

  // To field
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("inr");
  const toCurrencyInfo = useCurrencyInfo(toCurrency) || {};
  const toOptions = Object.keys(toCurrencyInfo);

  // Final value calculation
  const swap = () => {
    setFromCurrency(toCurrency);
    setFromAmount(toAmount);
    setToCurrency(fromCurrency);
    setToAmount(fromAmount);
  };

  const setToValue = (amount = fromAmount) => {
    setFromAmount(amount);
    setToAmount((amount * Number(fromCurrencyInfo[toCurrency])).toFixed(2));
  };

  const onUpdateFromCurrency = (currency = fromCurrency) => {
    setFromCurrency(currency);
    setToAmount((fromAmount * Number(fromCurrencyInfo[currency])).toFixed(2));
    // setToAmount((fromAmount * Number(toCurrencyInfo[currency])).toFixed(2));
  };

  const setFromValue = (amount = toAmount) => {
    setToAmount(amount);
    setFromAmount((amount * Number(toCurrencyInfo[fromCurrency])).toFixed(2));
  };

  const onUpdateToCurrency = (currency = toCurrency) => {
    setToCurrency(currency);
    setFromAmount((toAmount * Number(toCurrencyInfo[currency])).toFixed(2));
    // setFromAmount((toAmount * Number(fromCurrencyInfo[currency])).toFixed(2));
  };

  const convert = () => setToValue();

  return (
    <div className="main w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={fromAmount}
                currencyOptions={fromOptions}
                onAmountChange={(amount) => setToValue(amount)}
                onCurrencyChange={(currency) => onUpdateFromCurrency(currency)}
                selectedCurrency={fromCurrency}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={toAmount}
                currencyOptions={toOptions}
                onAmountChange={(amount) => setFromValue(amount)}
                onCurrencyChange={(currency) => onUpdateToCurrency(currency)}
                selectedCurrency={toCurrency}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
