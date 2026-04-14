export async function loginAction(data) {
  const { email, password } = data;
  try {

    const res = await signIn("credentials", { 
      email: email,
      password: password,
      redirectTo: "/products",
    });
    
    if (res && res.error) {
      throw new Error("Unauthorized");
    }
    return res;
  } catch (err) {
    if (isRedirectError(err)) {
      throw err;
    }
    console.log("Login Action Error:", err);
    throw err; 
  }
}