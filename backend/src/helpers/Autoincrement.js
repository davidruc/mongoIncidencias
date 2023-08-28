import { connect } from "../../db/connection.js";

export default async function siguienteId(colecction){
    let db = await connect();
    let counter = db.collection("counters");
    const secuencesValues = await counter.findOneAndUpdate(
        { count: `${colecction}Id` },
        { $inc: { sequence_value: 1 } },
        { returnDocument: "after" }
    );
    return secuencesValues.value.sequence_value;
};
