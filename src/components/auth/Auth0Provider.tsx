import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { secrets } from 'config/config.service';

const Auth0ProviderWithHistory = ({ children }: any) => {
  const domain = secrets.REACT_APP_AUTH0_DOMAIN || 'not_provided';
  const clientId = secrets.REACT_APP_AUTH0_CLIENT_ID || 'not_provided';
  const audience = secrets.REACT_APP_AUTH0_AUDIENCE || 'not_provided';

  const history = useHistory();

  const onRedirectCallback = (appState: any) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      audience={audience}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
