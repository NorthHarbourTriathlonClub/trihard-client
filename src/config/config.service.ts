import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '.env' });

// I can't be bothered importing and configuring envs for every file that needs it,
// So I made this secret obj variable so that any file can simply use this obj to access envs with a lot less code
export const secrets = {
  REACT_APP_AUTH0_DOMAIN: process.env.REACT_APP_AUTH0_DOMAIN,
  REACT_APP_AUTH0_CLIENT_ID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  REACT_APP_AUTH0_AUDIENCE: process.env.REACT_APP_AUTH0_AUDIENCE,
  REACT_APP_API_URL: process.env.REACT_APP_API_URL,
  REACT_APP_URL: process.env.REACT_APP_URL,
};
