import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    phone:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['student','employee'],
        default:'student',    
},
mark:{
    type:Number,
    default:0
}

},{
    timestamps: true,
  }
);


const User=mongoose.model('User',userSchema);

export default User;