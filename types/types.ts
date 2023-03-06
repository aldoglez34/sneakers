import { Request, Response } from "express-serve-static-core";
import { ParsedQs } from "qs";

export type requestType = Request<any, any, any, ParsedQs, Record<string, any>>;
export type responseType = Response<any, Record<string, any>, number>;

export type SneakerType = {
  brand: string;
  image: string;
  model?: string;
  name: string;
  price: number;
  gender: "Hombre" | "Mujer";
  size:
    | 25
    | 25.5
    | 26
    | 26.5
    | 27
    | 27.5
    | 28
    | 28.5
    | 29
    | 29.5
    | 30
    | 30.5
    | 31
    | 32
    | 33
    | 34
    | 35
    | 36;
};
