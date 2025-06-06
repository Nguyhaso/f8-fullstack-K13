import axios from "axios";

const api = axios.create({
  baseURL: "https://8fty49z8qb.execute-api.ap-southeast-1.amazonaws.com",
})

export const login = async (email: string, password: string) => {
  const res = await api.post("/login", {email, password});
  return res.data;
}

export const getNewToken = async (refresh: string) => {
  const res = await api.post("/login/get_new_token/", {refresh});
  return res.data;
}

export const getPosts = async (token: string) => {
  const res = await api.get("/post", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return res.data;
}
export const checkToken = async (navigate: (path: string) => void) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!accessToken || !refreshToken) {
    navigate('/');
    return null;
  }  try {
    const res = await getPosts(accessToken);
    return res;
  } catch (err: any) {
    if ( err.response?.data?.detail === 'token expired') {

        const newTokenData = await getNewToken(refreshToken);
        localStorage.setItem('accessToken', newTokenData.access);
        const res = await getPosts(newTokenData.access);
        return res;

    } else {
      console.error("Unknown error", err);
      navigate('/');
      return null;
    }
  }
};

export const logOut = (navigate: (path: string) => void) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  navigate('/');
};
