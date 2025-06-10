import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState(null);

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching currency data: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setCurrencyInfo(data[currency]);
      })
      .catch((error) => {
        console.error("Failed to fetch currency info:", error);
        setCurrencyInfo(null);
      });
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;