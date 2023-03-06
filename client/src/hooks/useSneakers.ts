import { useQuery } from "react-query";
import { getSneakers } from "../services/Store";

export const useSneakers = () => {
  const { data, isLoading } = useQuery("sneakers", getSneakers);

  return { sneakers: data, isLoading };
};
