"use server"
import fs from 'fs';
import path from 'path';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "./utils";
import { Service, Requestt, User } from "./models";
import { signIn, signOut } from "../authh";
import { Console, error } from "console";
import moment from 'moment';

// ********************************************************************************************
export const authenticate = async (prevState,formData) => {
    const {email,password} = Object.fromEntries(formData);

    try {
      await signIn("credentials",{ email,password });
      console.log("Sign in successful!");
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "تاكد من البريد الاكتروني او كلمة المرور";
      }
      throw err;
    }
    
  };
  
  // ********************************************************************************************
  export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);
    
    console.log(id);
  
    try {
      await connectToDB(); 
  
      await User.findByIdAndDelete(id);
  
     
      await Requestt.deleteMany({ user_id: id });
  
      console.log("User and their requests deleted successfully");
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete user!");
    }

  revalidatePath("/M/dashbord/employe");
  redirect("/M/dashbord/employe");
};


  // ********************************************************************************************




  export const updateUser = async (formData) => {
    const { id, username, user_familly_name,email,password,address,functionn,user_responsable,credit } = Object.fromEntries(formData);
    
    try {
      connectToDB();
    
      const updateFields = {
        username,
        user_familly_name,
        email,
        password,
        address,
        functionn,
        user_responsable,
        credit,
      };
    
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
    
      await User.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "   لم يتم التعديل  ";
      }
      throw err;
    }
    
    revalidatePath("/M/dashbord/employe");
    redirect("/M/dashbord/employe");
    };
  // ********************************************************************************************
  export const addUser=async(formData)=>{
    "use server"
  const {username, user_familly_name,email,password,address,functionn,job,user_responsabe,credit,img,phone}=Object.fromEntries(formData);
  console.log(img)
  let imgString ; 
  if (img && typeof img === "string") {
    imgString = fs.readFileSync(path.resolve(__dirname, img), 'base64');
  } 
  else if (Buffer.isBuffer(img)) {
    imgString = img.toString('base64');
    
  }
  
  console.log(imgString)
  try{
  connectToDB();
  const newUser=new User({
    username,
     user_familly_name,
     email,
     password,
     address,
     functionn,
     job,
     user_responsabe,
     credit,
     img: imgString,
     phone
  });
  await newUser.save();
  }
  catch(err){
  console.log(err);
  throw new error('failed');
  }
  
  revalidatePath("/M/dashbord/employe");
  redirect("/M/dashbord/employe");
  };


  // ********************************************************************************************
 

export const updateUserpassword = async (formData) => {
  
  const { id, password } = Object.fromEntries(formData); 


  console.log(id,password);
    try {
    connectToDB();
    await User.findByIdAndUpdate(id, { password });
    await signOut();
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "   لم يتم التعديل  ";
    }
    throw err;
  }
  await signOut;
}
//**********************************************************************************************************
export const adddemande = async (formData) => {
  const { user_id, requestt_type, date_start, number_days, justification, status, functionn } = Object.fromEntries(formData);
      let successs = false;

  try {
    // Ensure the database connection is established before any operation
    await connectToDB();

    console.log("User ID:", user_id);

    // Find user by ID
    const user = await User.findById(user_id); // Correct usage to find by ID
    console.log("User found:", user);

    // Handle case where user is not found
    if (!user) {
      console.error('User not found');
      throw new Error('User not found');
    }

    const verificationCride = user.credit - number_days;

    if (verificationCride >= 0) {
      function calculateNextDate(inputDate, numberOfDaysToAdd) {
        const parsedDate = moment(inputDate).startOf('day');
        const nextDate = parsedDate.add(numberOfDaysToAdd, 'days');
        return nextDate.toDate(); // Return JavaScript Date object
      }

      const date_end = calculateNextDate(date_start, number_days);

      const newdemand = new Requestt({
        user_id,
        requestt_type,
        date_start,
        number_days,
        justification,
        status,
        date_end,
      });

      await newdemand.save();
      successs=true;
      console.log("New request saved:", newdemand);
    } else {
      console.log('Not enough credit');
     
    }
    
  } catch (err) {
    console.log("failed to add demande ")
    
  }
  
    if(successs===false){ 
       if(functionn==="مصلحة المستخدمين") {
    revalidatePath("/M/dashbord/creditNotEnough");
    redirect("/M/dashbord/creditNotEnough");

      }else if(functionn==="مسؤول مباشر"){
         revalidatePath("/responsableD/dashbord/creditNotEnough");
        redirect("/responsableD/dashbord/creditNotEnough");
        }
  
       else if(functionn==="موظف"){
  revalidatePath("/e/dashbord/creditNotEnough");
        redirect("/e/dashbord/creditNotEnough");
     
       }
      }else{
        if(functionn==="مصلحة المستخدمين") {
          revalidatePath("/M/dashbord/mesDemand");
          redirect("/M/dashbord/mesDemand");
      
            }else if(functionn==="مسؤول مباشر"){
               revalidatePath("/responsableD/dashbord/mesDemand");
              redirect("/responsableD/dashbord/mesDemand");
              }
        
             else if(functionn==="موظف"){
        revalidatePath("/e/dashbord/mesDemand");
              redirect("/e/dashbord/mesDemand");
           
             }
      }
 
};


 // ********************************************************************************************
 export const deleteDemande = async ( formData) => {
  const {id,functionn} = Object.fromEntries(formData);
    
  try {
      connectToDB();
     await Requestt.findByIdAndDelete(id);

  } catch (err) {
   console.log(err);
    throw  new Error("failed to delete demand!");
  }

  if(functionn==="مصلحة المستخدمين") {
    revalidatePath("/M/dashbord/mesDemand");
    redirect("/M/dashbord/mesDemand");
  
      }else if(functionn==="مسؤول مباشر"){
         revalidatePath("/responsableD/dashbord/mesDemand");
         redirect("/responsableD/dashbord/mesDemand");
        
}
  
       else if(functionn==="موظف"){
  revalidatePath("/e/dashbord/mesDemand");
  redirect("/e/dashbord/mesDemand");
     
       
   }
};
// **********************************************************************************
export const updateService = async (formData) => {
  const {id, service_name } =
    Object.fromEntries(formData);
  
 try{
  connectToDB();
    await Service.findByIdAndUpdate(id,{service_name});
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "   لم يتم التعديل  ";
    }
    throw err;
  }
  
  revalidatePath("/M/dashbord/service");
  redirect("/M/dashbord/service");
  };

  // ***************************************************************************************
  export const StatusAcceptDemande = async (formData) => {
    const { id, status, functionn,} = Object.fromEntries(formData);
     
    try {
      await connectToDB(); // Assurez-vous que la connexion à la base de données est établie
  
      // Mettre à jour le statut de la demande
      const updatedRequest = await Requestt.findByIdAndUpdate(id, { status });

      if (!updatedRequest) {
        throw new Error("Request not found");
      }
  
      const demand = await Requestt.findById(id);
      const user_id=demand.user_id;
      const user=await User.findById(user_id);
      console.log(user);
       
       const newCredit = user.credit - demand.number_days;
       await User.findByIdAndUpdate(user_id, { credit: newCredit });
  
  
  
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "   لم يتم التعديل  ";
      }
      throw err;
    }
    if(functionn==="عميد") {
      revalidatePath("/A/dashbord");
    
        }else if(functionn==="مسؤول مباشر"){
           revalidatePath("/responsableD/dashbord");
          
  }
    
         else if(functionn==="رئيس قسم"){
            revalidatePath("/A/dashbord");
    
         
     }
    

  }

  // **********************************************************************************************
    export const StatusRefuseDemande = async (formData) => {
    const {id,status,functionn} = Object.fromEntries(formData); 
      try {
      connectToDB();
      await Requestt.findByIdAndUpdate(id, { status });

  
    } catch (err) {
      if (err.message.includes("CredentialsSignin")) {
        return "   لم يتم التعديل  ";
      }
      throw err;
    }

    if(functionn==="عميد") {
      revalidatePath("/A/dashbord");
    
        }else if(functionn==="مسؤول مباشر"){
           revalidatePath("/responsableD/dashbord");
          
  }
    
         else if(functionn==="رئيس قسم"){
            revalidatePath("/A/dashbord");
    
         
     }
  }

  
    // **********************************************************************************************
    export const EmployeeStatusOfWork = async () => {
      const currentDate = new Date();
    
      try {
        const db = await connectToDB();
    
     
        const periods = await db.collection('Requestt').find({}).toArray();
    
       
        const isWithinPeriod = periods.some(period => {
          const startDate = new Date(period.start_date);
          const endDate = new Date(period.end_date);
          return currentDate >= startDate && currentDate <= endDate;
        });
    
        if (isWithinPeriod) {
          return "The current date is within a registered period.";
        } else {
          return "The current date is not within any registered period.";
        }
      } catch (err) {
        console.error('Error:', err);
    
        
        if (err.message.includes("CredentialsSignin")) {
          return "لم يتم التعديل";
        } else {
          return "An error occurred while processing the request.";
        }
      }
    };
    