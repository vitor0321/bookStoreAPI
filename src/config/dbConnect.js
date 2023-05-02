import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vitor0321:walcker178977@cluster0.3fkkxyg.mongodb.net/livraria-node");

let db = mongoose.connection;

export default db;