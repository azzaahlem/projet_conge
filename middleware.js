import NextAuth from "next-auth";
import { authConfigg } from "./app/authconfigg";

export default NextAuth(authConfigg).auth;

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next).*)'],

}