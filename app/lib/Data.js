import {User,Requestt,Service} from "./models";
import { connectToDB } from "./utils";


export const fetchUsers = async (q) => {
  console.log(q);
  const regex = new RegExp(q, "i");
  try {
      connectToDB();
      const users = await User.find({ $or: [{ username: { $regex: regex } }, { user_familly_name: { $regex: regex } }] });
      return users;
  } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
  }
};
// *****************************************************************************************
export const fetchUser = async (id) => {
    console.log(id);
    try {
      connectToDB();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
  };



  // ********************************************************************************

  export const fetchDemande = async (User_ID) => {
    try {
        connectToDB();
        const demandes = await Requestt.find({ user_id: User_ID });
        return demandes;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch demandes!");
    }
}


// ******************************************************************************************
export const fetchServices = async(q) => {
  console.log(q)
    const regex =new RegExp(q,"i");
    try {
        connectToDB();
        const services = await Service.find({service_name: {$regex:regex} });
        return services;
    } 
    catch (err) {
        console.log(err); 
        throw new Error("Failed to fetch users!");
    }
    
}
// *************************************************************************************************
export const fetchMyEmployee = async (my_functionn,q) => {
  const regex = new RegExp(q, "i");
  try {
      connectToDB();
      const MyEmployee  = await User.find({ user_responsabe: my_functionn  , $or: [{ username: { $regex: regex } }, { user_familly_name: { $regex: regex } }] });
      return MyEmployee ;
  } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch MyEmployee !");
  }
}


//**********************************************************************************************
export const countEmployees = async (my_job) => {
  try {
    await connectToDB(); 
    const numMyEmployees = await User.countDocuments({ user_responsabe: my_job });
    return numMyEmployees;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to count employees!");
  }
};
//**********************************************************************************************

export const countEmployeeswork = async (my_job) => {
  try {
    await connectToDB(); 
    const numMyEmployees = await User.countDocuments({ user_responsabe: my_job, is_work:true});
console.log(numMyEmployees)
    return numMyEmployees;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to count employees!");
  }
};
//**********************************************************************************************

export const countEmployeesNotwork = async (my_job) => {
  try {
    await connectToDB(); 
    const numMyEmployees = await User.countDocuments({ user_responsabe: my_job, is_work: false});
console.log(numMyEmployees)
    return numMyEmployees;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to count employees!");
  }
};


//*********************************************************************************************** *

export const Demandes = async (my_job) => {
  try {
    connectToDB();
    const demandes = await Requestt.find({status:"قيد المراجعة"})
      .populate({
        path: 'user_id',
        select: 'username img user_familly_name user_responsabe'
      })
      .exec();
      
     
    // Filtering demandes where user_id username is "a"
    const resultat = demandes.filter(demande => demande.user_id.user_responsabe ===  my_job);
    
    console.log("job=",my_job);

   
    return resultat;
 
  
      
  } catch (err) {
      console.log(err);
      throw new Error("Failed to get demandes!");
  }

}
//*****************************************************************************************
export const fetchMyEmployeeInVacance = async (my_job,q) => {
  const regex = new RegExp(q, "i");
  try {
    await connectToDB(); 
    const MyEmployee = await User.find({ 
      user_responsabe: my_job, is_work: false ,$or: [{ username: { $regex: regex } }, { user_familly_name: { $regex: regex } }]});
    console.log(MyEmployee);
    return MyEmployee;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch MyEmployee !");
  }
}

//**********************************************************************************************
export const countEmployeesSP = async () => {
  try {
    await connectToDB(); 
    const numMyEmployees = await User.countDocuments({ user_responsabe: my_job });
    return numMyEmployees;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to count employees!");
  }
};
//*************************************************************************************************** */

export const fetchEmployeD = async (q) => {
  const regex = new RegExp(q, "i");
  try {
    await connectToDB();
    const users = await User.find({ functionn: { $ne: 'عميد' } ,$or: [{ username: { $regex: regex } }, { user_familly_name: { $regex: regex } }] });
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};