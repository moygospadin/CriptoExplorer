export const fetchCryptoFromApi = async (params) => {
  try {
    const responce = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${orderByCalc(
        params,
      )}&per_page=50&page=${params.page}`,
    );
    if (!responce.ok) {
      throw await responce.json();
    }

    const resData = await responce.json();
    console.log('resData', resData);
    return resData;
  } catch (error) {
    console.log('err', error);
  }
};
const orderByCalc = (params) => {
  let res = 'market_cap_desc';
  params.orderFields.forEach((el) => {
    if (el.active) {
      res = el[el.value];
    }
  });
  return res;
};
