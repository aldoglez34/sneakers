import { useQuery } from "react-query";
import { getSneaker } from "../services/Store";

export const useSneaker = (sneakerId: string) => {
  const { data, isLoading } = useQuery("sneaker", () => getSneaker(sneakerId));

  return { sneaker: data, isLoading };
};
