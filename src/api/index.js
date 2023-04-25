import API_URLS from "../utils";
import { getFormBody, LOCALSTORAGE_TOKEN_KEY } from "../utils/localStorage";

export const login = async (email, password) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const config = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.body = getFormBody({ email, password });
  try {
    const response = await fetch(API_URLS.login(), config);
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false
    };
  }
};

export const register = async (name, email, password, confirmPassword) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const config = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  };
  config.body = getFormBody({
    name,
    email,
    password,
    confirm_password: confirmPassword
  });

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(API_URLS.signup(), config);
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error: ", error);
    return {
      message: error.message,
      success: false
    };
  }
};

export const editProfile = async (userId, name, password, confirmPassword) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);

  const config = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    }
  };

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  config.body = getFormBody({
    id: userId,
    name,
    password,
    confirm_password: confirmPassword
  });

  try {
    const response = await fetch(API_URLS.editUser(), config);
    const data = await response.json();

    if (data.success) {
      return {
        data: data.data,
        success: true
      };
    }

    throw new Error(data.message);
  } catch (error) {
    console.error("error");
    return {
      message: error.message,
      success: false
    };
  }
};
