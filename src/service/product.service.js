import { auth } from "@/auth";
const NEXT_PUBLIC_BASE_URL = (process.env.NEXT_PUBLIC_BASE_URL || "https://homework-api.noevchanmakara.site/api/v1/").trim();
async function getAuthHeader() {
    const session = await auth();
    const token = session?.accessToken;

    if (!token) {
        return {};
    }
    return { "Authorization": `Bearer ${token}` };
}

export async function fetchCategories() {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}categories`, {
        method: "GET",
        headers: await getAuthHeader(),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return response.json();
}

export async function fetchProducts() {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}products`, {
        method: "GET",
        headers: await getAuthHeader(),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return response.json();
}

export async function fetchProductById(id) {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}products/${id}`, {
        method: "GET",
        headers: await getAuthHeader(),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return response.json();
}

export async function createProduct(productData) {
    const headers = await getAuthHeader();
    headers["Content-Type"] = "application/json";

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}products`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        let errMessage = `Error: ${response.status}`;
        try {
            const errData = await response.json();
            if (errData.message) errMessage = errData.message;
        } catch (e) { }
        throw new Error(errMessage);
    }
    return response.json();
}

export async function updateProduct(id, productData) {
    const headers = await getAuthHeader();
    headers["Content-Type"] = "application/json";

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}products/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(productData),
    });

    if (!response.ok) {
        let errMessage = `Error: ${response.status}`;
        try {
            const errData = await response.json();
            if (errData.message) errMessage = errData.message;
        } catch (e) { }
        throw new Error(errMessage);
    }
    return response.json();
}

export async function deleteProduct(id) {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}products/${id}`, {
        method: "DELETE",
        headers: await getAuthHeader(),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    if (response.status === 204) return null;
    try {
        return await response.json();
    } catch {
        return null;
    }
}

export async function createOrder(orderPayload) {
    const headers = await getAuthHeader();
    headers["Content-Type"] = "application/json";

    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}orders`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(orderPayload),
    });

    if (!response.ok) {
        let errMessage = `Order creation failed: ${response.status}`;
        try {
            const errData = await response.json();
            if (errData.message) errMessage = errData.message;
        } catch (e) { }
        throw new Error(errMessage);
    }
    return response.json();
}

export async function fetchOrders() {
    const response = await fetch(`${NEXT_PUBLIC_BASE_URL}orders`, {
        method: "GET",
        headers: await getAuthHeader(),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    return response.json();
}