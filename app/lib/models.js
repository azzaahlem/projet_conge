import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    user_familly_name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
      },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    is_work: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    functionn
    : {
        type: String,
      },

      job: {
        type: String, 
      },


      
      credit: {
        type: Number,  // 
      },


      user_responsabe: {
        type: String,  // يكون فيه الايدي تاع الريسبونسابل
      },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);



const requesttSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref :'User',
    },

      requestt_type: {
        type: String,
        required: true,
        unique: true,
      },
      date_start: {
        type: Date,
        required: true,
      },
      date_end: {
          type: Date,
          required: true,
        },
        
        number_days:{
          type:Number,

        },
        status: {
          type: String,
          required: true,
        },
        justification: {
          type: String,
          required: false,
          min: 3,
          max: 10,
        },
      
        
  
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);

export const Requestt = mongoose.models.Requestt || mongoose.model("Requestt", requesttSchema);


const serviceSchema = new mongoose.Schema(
  {
   

      service_name: {
        type: String,
        required: true,
        unique: true,
      },
    
        
  
  },
  { timestamps: true }
);

export const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);


