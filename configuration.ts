export interface Config {
  streamerId: string | number;
  streamerName: string;
  api: string;
  primaryColor: string;
  secondaryColor: string;
  fontString: string;
  font: string;
  youtubeMetatag?: string;
  geoApi: string;
}

export const defaultConfig: Config = {
  streamerId: 15,
  streamerName: "Patena24",
  api: "https://compare.topadsservices.com",
  primaryColor: "#ff6bc6",
  secondaryColor: "#ff6bc6",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export let configuration: Config = {
  streamerId: 15,
  streamerName: "Patena24",
  api: "https://compare.topadsservices.com",
  primaryColor: "#ff6bc6",
  secondaryColor: "#ff6bc6",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export const setConfigurationFile = (newConfig: Config = configuration) => {
  configuration = newConfig;
};
