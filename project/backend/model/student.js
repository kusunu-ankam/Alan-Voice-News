//collection name called as schema
import mongoose from "mongoose";
const Schema =mongoose.Schema;
const studentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
});
export default mongoose.model("students", studentSchema);
//export default mongoose.model(collectionname,schemavariablename);