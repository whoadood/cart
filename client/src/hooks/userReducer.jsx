export const userReducer = (user, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      localStorage.setItem("user", action.user);
      return { ...action.user };
    }
    case "USER_LOGOUT": {
      localStorage.removeItem("user");
      return {};
    }
    default: {
      return user;
    }
  }
};
