import axios, { AxiosResponse } from "axios";
import config from 'config';

const API_KEY = config.get("googleAPIKey");

export type Location = {
    lat: Number
    lon: Number
}

type PlaceOption = {
    keyword?: string
    location?: Location
}

export const defaultLocation: Location = { lat: 13.890758, lon: 100.5045383 };

export const getPlace = async (option: PlaceOption) => {  
  const googleAPIUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
  const keyword = option.keyword || "";
  const location: Location = option.location || defaultLocation;
  const radius = 1500;
  const type = "restaurant";
  const finalURL = `${googleAPIUrl}keyword=${keyword}&location=${location.lat}%2C${location.lon}&type=${type}&radius=${radius}&key=${API_KEY}`

  try {
    const res: AxiosResponse = await axios.get(finalURL);
    return res.data;
  } catch (err: any) {
    console.error(err?.message);
  }
};
