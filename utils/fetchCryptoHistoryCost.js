export const fetchCryptoHistoryCost = async (id) => {
  try {
    const responce = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=usd&from=0&to=${Number(
        new Date(),
      )}`,
    );
    if (!responce.ok) {
      throw await responce.json();
    }

    const resData = await responce.json();

    return resData;
  } catch (error) {
    console.log('err', error);
  }
};
