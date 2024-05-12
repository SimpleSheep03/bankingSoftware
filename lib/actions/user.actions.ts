'use server'

import { ID } from "node-appwrite"
import { createAdminClient, createSessionClient } from "./appWrite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"

export const signIn = async (userData : signInProps) => {
    try{
        const { account } = await createAdminClient();
        const response = await account.createEmailPasswordSession(
            userData.email,
            userData.password
        )
        return parseStringify(response)

    }
    catch(error){
        console.log(error)
    }
}

export const signUp = async (userData : SignUpParams) => {
    try{
        
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(ID.unique(), userData.email, userData.password, `${userData.firstName} ${userData.lastName}`);

        const session = await account.createEmailPasswordSession(userData.email, userData.password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount)

    }
    catch(error){
        console.log(error)
    }
    
}

// ... your initilization functions

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
        console.log(error)
      return null;
    }
  }
  
  export const logoutAccount = async () => {
    'use server'   
    try {
      const { account } = await createSessionClient();
      console.log(account)
  
      cookies().delete('appwrite-session');
  
      await account.deleteSession('current');
    } catch (error) {
        console.log(error)
        return null;
    }
  }