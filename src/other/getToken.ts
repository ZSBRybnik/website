const getToken = (): string => {
  let token: string = window.sessionStorage.token;
  if (token === "" || token === undefined) {
    token = window.localStorage.token;
  }
  return token;
};

export default getToken;
