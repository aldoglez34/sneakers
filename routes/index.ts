import { Router } from "express";
import { getSneaker, getSneakers } from "./store/Store";

const BASE_URL = {
  API: "api",
};

const router: Router = Router();

router.get(`/${BASE_URL.API}/sneakers`, getSneakers);
router.get(`/${BASE_URL.API}/sneaker/:sneakerId`, getSneaker);

export default router;
