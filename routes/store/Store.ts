import { requestType, responseType } from "../../types/types";
import { SneakerModel } from "../../models";

export const getSneakers = async (_req: requestType, res: responseType) => {
  try {
    const sneakers = await SneakerModel.find({}).exec();
    res.json(sneakers);
  } catch (err) {
    console.warn(err);
  }
};

export const getSneaker = async (req: requestType, res: responseType) => {
  const sneakerId = req.params.sneakerId;
  try {
    const sneakerData = await SneakerModel.findOne({ _id: sneakerId }).exec();
    res.json(sneakerData);
  } catch (err) {
    console.warn(err);
  }
};
