import axios from "axios";
import { Sneaker } from "../types/types";

export const getSneakers = () =>
  axios.get<Sneaker[]>("/api/sneakers").then((res) => res.data);

export const getSneaker = (sneakerId: string) =>
  axios.get<Sneaker>(`/api/sneaker/${sneakerId}`).then((res) => res.data);
