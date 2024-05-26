import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfigg } from "./authconfigg";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";

const login = async (credentials) => {
  try {
    connectToDB();

    const user = await User.findOne({ email: credentials.email });
    console.error("user exist");
    if (!user) throw new Error("email not exist!");

    if (credentials.password !== user.password) {
      throw new Error("Incorrect password!");
    }else{
        console.error("password correct"); 
         return user;
    }
  
  } catch (err) {
    console.error(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfigg,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.error("Error during login:", error);
          return null;
        }
      },
    }),
  ],
  callbacks:{
    async jwt({token,user}){
      if(user){
      token.id=user.id;
      token.username =user.username;
      token.user_familly_name =user.user_familly_name;
      token.img =user.img;
      token.email=user.email;
      token.address=user.address;
      token.phone=user.phone;
      token.job=user.job;
      token.functionn=user.functionn;
      token.is_work=user.is_work;
      token.credit=user.credit;
    }
    return token;
  },
  async session({session,token}){
    if(token){
   session.user.id=token.id;
    session.user.username =token.username;
    session.user.user_familly_name =token.user_familly_name;
    session.user.img =token.img;
    session.user.email=token.email;
    session.user.address=token.address;
    session.user.phone=token.phone;
    session.user.job=token.job;
    session.user.functionn=token.functionn;

    session.user. is_work=token.is_work;
    session.user.credit=token.credit;

  }
  return session;
},
  }
});

