const USER = 'user';
const SPECIAL_AGENT = 'special_agent';
const ADMIN = 'admin';
const DEVELOPER = 'developer';


export const adminOnly = [SPECIAL_AGENT, ADMIN, DEVELOPER];
export const authorizedOnly = [SPECIAL_AGENT, USER, ADMIN, DEVELOPER];

export const USER_TYPES = {
  USER,
  ADMIN,
  SPECIAL_AGENT,
  DEVELOPER,
};

export const LOGOUT_REDIRECT = 'logout_redirect';
