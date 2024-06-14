// import {baseUrl} from '../config.js'; //TODO: move to a config file / process.env
// import { baseUrl } from "../../config";
const baseUrl = 'http://localhost:3000'

export const getBusinesses = () => getAtEndpoint('businesses');
export const getCategories = () => getAtEndpoint('categories')

const getAtEndpoint = async (endpoint) => {

  try {
    const res = await fetch(`${baseUrl}/${endpoint}`);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}: ${error}`);
  }
}



export const getBusinessesByID = async (ID) => {
  try {
    const res = await fetch(baseUrl + `/businesses/${ID}`)
    const result = res.json();
    return result;
  } catch (error) {
    console.error(`Failed to fetch category: ${error}`);
  };
};


