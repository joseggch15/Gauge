export interface MetabaseChartParams {
  host: string; // https://catapa.glair.ai
  token: string; // jwt token
  dashCardId: number;
  cardId: number;
}

export interface ChartProps {
  title: string;
  description?: string;
  chart_type: string;
  settings: {};
}

const getApiData = async (url: string) => {
  const response = await fetch(url, {
    method: "GET"
  });
  if (response.status !== 200) {
    throw new Error((await response.text()) || (await response.json()) || response.statusText);
  }

  return response.json();
};

export const getData = async ({ host, token, dashCardId, cardId }: MetabaseChartParams) => {
  const urlDashboard = `${host}/api/embed/dashboard/${token}`;
  const dashboardJson = await getApiData(urlDashboard);

  const urlCard = `${urlDashboard}/dashcard/${dashCardId}/card/${cardId}`;
  const jsonData = await getApiData(urlCard);

  const card = dashboardJson.ordered_cards.filter((x) => {
    return x.visualization_settings["card.title"].includes("Average Come Late (%)");
  })[0];
  const visualizationSettings = card.visualization_settings;

  const contractData = {
    title: visualizationSettings?.["card.title"],
    description: card.card.description,
    chart_properties: {
      type: "gauge",
      settings: visualizationSettings
    },
    data: jsonData
  };
  console.log(contractData);
  return contractData;
};
