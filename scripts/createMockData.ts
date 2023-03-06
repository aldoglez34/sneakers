import {
  connect as mongooseConnect,
  connection as mongooseConnection,
} from "mongoose";
import sneakersMocks from "../resources/sneakersMocks";
import { SneakerModel } from "../models";

const createSneakersMocks = async () => {
  const collectionName = "sneakers";

  try {
    console.log(`\nCreating mocks for ${collectionName}`);

    await mongooseConnect("mongodb://localhost/sneakersDB");

    const collections = await mongooseConnection.db.listCollections().toArray();

    const dropCollection = collections.some(
      ({ name }) => name === collectionName
    );

    if (dropCollection) {
      await mongooseConnection.db.dropCollection(collectionName);
    }

    const addSneakersAsync = sneakersMocks.map(
      (sneaker) => new SneakerModel(sneaker)
    );

    for await (const addSneaker of addSneakersAsync) {
      addSneaker.save();
    }

    console.log(`Finished creating mocks for ${collectionName}\n`);
  } catch (err) {
    console.warn(err);
  }
};

createSneakersMocks();

module.exports = { createSneakersMocks };
