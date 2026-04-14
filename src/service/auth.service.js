export async function loginService(data) {
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://homework-api.noevchanmakara.site/api/v1/").trim();
    const url = `${baseUrl}auths/login`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Login failed");
    }

    const result = await response.json();
    console.log("Logged user in service:", result);
    return result;
}

export async function registerService(data) {
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || "https://homework-api.noevchanmakara.site/api/v1/").trim();
    const url = `${baseUrl}auths/register`;

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Registration failed");
    }

    return response.json();
}