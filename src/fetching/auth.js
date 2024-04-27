import BASE_URL from "@/lib/baseUrl";

export async function login(params) {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(params),
    });
    return response;
  } catch (error) {
    throw new Error({ message: error.response.message });
  }
}
