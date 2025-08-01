import axios from "axios";
import { OPENWEATHER_URL } from "./constants";

export const instance = axios.create({
  baseURL: OPENWEATHER_URL,
});
