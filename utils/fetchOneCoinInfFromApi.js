export const fetchOneCoinInfFromApi = async (id) => {
  try {
    const responce = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`,
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
