import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from 'lib/hooks';
import { Router as ReachRouter, Redirect } from '@reach/router';
import { Csgo, Landing, NotFound, Privacy, TermsOfUse } from '../app/pages';
import { Dashboard, Profile, Tracker, Compare, Tournaments, TacticalTimeout } from './pages/csgo';
import { Appearance, Connections, Language, Notifications, Settings } from './pages/settings';

import { favicon, faviconDark } from 'lib/images';

export const Router: React.FC<{}> = () => {
  const darkMode = useTheme().dark;

  return (
    <React.Fragment>
      <Helmet>
        {!darkMode ? <link href={favicon} rel="icon" type="image/png" /> : <link href={faviconDark} rel="icon" type="image/png" />}
      </Helmet>
      <ReachRouter>
        <Redirect from="/csgo" to="/csgo/dashboard" />
        <Landing path="/" />
        <Privacy path="/privacy-policy" />
        <TermsOfUse path="/terms-of-use" />
        <Csgo path="/csgo">
          <Dashboard path="/dashboard" />
          <Tracker path="/tracker" />
          <Compare path="/compare" />
          <TacticalTimeout path="/tactical-timeout" />
          <Tournaments path="/tournaments" />

          { /* general pages */}
          <Profile path="/profile" />
          <Settings path="/settings">
            <Connections path="/connections" />
            <Notifications path="/notifications" />
            <Appearance path="/appearance" />
            <Language path="/language" />
          </Settings>
        </Csgo>
        <NotFound default />
      </ReachRouter>
    </React.Fragment>
  );
};
