const normalizeDataByMeal = (apidata, category) => {
  const { meals } = apidata;
  const response = { [category]: meals };
  return response;
};

export default normalizeDataByMeal;
