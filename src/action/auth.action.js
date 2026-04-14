"use server";

import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function loginAction(data) {
  const { email, password } = data;
  console.log("this is data in server aciton :", data);
  try {
    res = await signIn("credentials", {
      email: email,
      password: password,
      redirectTo: "/products",
    });
    if (res && res.error) {
      throw new Error("Unauthorize");
    }
    return res;
  } catch (err) {
    console.log("this is error :", err);
    if (isRedirectError(err)) {
      throw err;
    }
  }
}
export async function logOutAction() {
  await signOut();
}