const { MongoClient } = require("mongodb");
//const MongoClient=require("mongodb");
const url = "mongodb://localhost:27017";
const database = "Menu";
const client = new MongoClient(url);

async function getData(query) {
  let result = await client.connect();
  let db = result.db(database);
  let collection = db.collection("Hotel");
  let response = await collection
    .aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: query, $options: "i" } },
            { location: { $regex: query, $options: "i" } },
            {image:{$regex: query, $options: "i"}},
            { price: { $regex: query, $options: "i" } },
            { "menu.name": { $regex: query, $options: "i" } },
            { "menu.description": { $regex: query, $options: "i" } },
            { "menu.price": { $regex: query, $options: "i" } },
            { "topping.tname": { $regex: query, $options: "i" } },
            { "topping.tprice": { $regex: query, $options: "i" } },
          ],
        },
      },
      {
        $lookup: {
          from: "Foodmenu",
          localField: "MenuId",
          foreignField: "_id",
          as: "menu",
        },
      },
      {
        $unwind: "$menu",
      },
      {
        $lookup: {
          from: "Topping",
          localField: "menu.ToppingId",
          foreignField: "_id",
          as: "topping",
        },
      },
      {
        $unwind: "$topping",
      },
    ])

    .toArray();
  return response;
}

module.exports = getData;


