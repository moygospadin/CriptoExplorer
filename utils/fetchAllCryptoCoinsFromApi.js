export const fetchAllCryptoCoinsFromApi = async () => {
  try {
    const responce = await fetch(`https://api.coingecko.com/api/v3/coins/list`);
    if (!responce.ok) {
      throw await responce.json();
    }

    const resData = await responce.json();

    return resData;
  } catch (error) {
    console.log('err', error);
  }
};
