import axios from "axios";

const api = axios.create({
  baseURL: "https://wholemrtbackend.onrender.com/api",
  // localhost: "http://localhost:5000/api",
});

// 🔥 Add this here
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      // console.log("TOKEN FOUND:", token);

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        console.log("HEADER SET:", config.headers.Authorization);
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔥 Response interceptor yahi niche rahega
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      console.error("Network error:", error.message);
      return Promise.reject(new Error("Network error"));
    }

    if (error.response.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        if (window.location.pathname !== "/auth/login") {
          window.location.href = "/auth/login";
        }
      }
    }

    const errorMessage =
      error.response?.data?.message || error.message || "An error occurred";

    return Promise.reject(new Error(errorMessage));
  }
);

export default api;
