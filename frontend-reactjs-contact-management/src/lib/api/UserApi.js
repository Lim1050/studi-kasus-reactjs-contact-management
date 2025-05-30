// register
export const userRegister = async ({ username, password, name }) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username, password, name }),
  });
};

// login
export const userLogin = async ({ username, password }) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
};

// profile
export const userDetail = async (token) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  });
};

// update name
export const userUpdateProfile = async (token, { name }) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ name }),
  });
};

// update password
export const userUpdatePassword = async (token, { password }) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/current`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ password }),
  });
};

// logout
export const userLogout = async (token) => {
  return await fetch(`${import.meta.env.VITE_API_PATH}/users/logout`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: token,
    },
  });
};
