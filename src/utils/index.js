const API_ROOT = 'http://codeial.codingninjas.com:8000/api/v2/';

// doc url - https://www.notion.so/aakashcn/Codeial-API-docs-3a4d0b5a42c54f0a94d951a42aabc13f
const API_URLS = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  editUser: () => `${API_ROOT}/users/edit`,
};

export default API_URLS;