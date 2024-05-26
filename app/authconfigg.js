
export const authConfigg ={
  providers:[],
  pages:{
    signIn:"/login",
  },
  callbacks:{
    async jwt({token,user}){
      if(user){
      token.id=user.id;
      token.functionn=user.functionn;
    }
    return token;
  },
  async session({session,token}){
    if(token){
   session.user.id=token.id;
    session.user.functionn=token.functionn;

  }
  return session;
},



    async authorized({ auth, request: { nextUrl, req } }) {
      

  
      
      const isLoggedIn = !!auth?.user;
       
       
      const isOnDashboardM = nextUrl.pathname.startsWith("/M/dashbord");
      const isOnDashboardR = nextUrl.pathname.startsWith("/responsableD/dashbord");
      const isOnDashboardA = nextUrl.pathname.startsWith("/A/dashbord");
      const isOnDashboarde = nextUrl.pathname.startsWith("/e/dashbord");




      if (isOnDashboardM ||isOnDashboardR ||isOnDashboardA||isOnDashboarde) {
        if (isLoggedIn) return true;
        return false;
      }else if (isLoggedIn){
        console.log("is login")
        switch(auth.user.functionn) {
         
          case "مصلحة المستخدمين":
            
            return Response.redirect(new URL("/M/dashbord",nextUrl));
          
            case "مسؤول مباشر":
            return Response.redirect(new URL("/responsableD/dashbord",nextUrl));

            case "موظف":
            return Response.redirect(new URL("/e/dashbord",nextUrl));
           
           case "عميد":
           return Response.redirect(new URL("/A/dashbord",nextUrl));
           
           case "رئيس قسم":
           return Response.redirect(new URL("/A/dashbord",nextUrl));
        
        } 
        return true;
      }
    }
        }
        };







