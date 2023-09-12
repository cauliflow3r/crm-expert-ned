// type: accessToken | refreshToken
export const getToken = (type = "accessToken") => {
  const token = localStorage.getItem(type);
  return token || "";
};

export const setToken = (token, type = "accessToken") => {
  if (!token) {
    return;
  }
  localStorage.setItem(type, token);
};
