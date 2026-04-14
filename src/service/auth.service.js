export async function loginService(data) {
  const user = {
    email: data.email,
    password: data.password,
  };

  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/auths/login`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), 
    credentials: "include", 
  });

  const result = await res.json();

  if (!res.ok) {
    if (result.errors) {
      const firstError = Object.values(result.errors)[0];
      throw new Error(firstError);
    }
    throw new Error(result.detail || "Login failed");
  }

  console.log("Logged user in service:", result);
  return result;
}


// export async function loginService({ email, password }) {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auths/login`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     }
//   );

//   return await res.json();
// }