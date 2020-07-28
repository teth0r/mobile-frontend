import React from 'react'
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader/root'
import { renderRoutes } from 'react-router-config'
import i18n from 'lib/i18n';
import InternalPage from 'lib/internal-page'
import { Toasts } from 'lib/toasts';
import { GlobalStyle } from 'lib/global-style'
import { defaultTheme } from 'lib/themes'
import { AuthProvider } from 'lib/auth-context';
import { commonRoutes } from 'features/common'
import RouterEnhancer from 'lib/router-enhancer'
import { BrowserRouter, Route } from 'react-router-dom';

import { Tickets } from 'features/tickets';
import { Shop } from 'features/shop';
import { Statistic } from 'features/statistic';
import { Profile } from 'features/profile';
import { Settings } from 'features/settings';

function App() {
  return (
    <BrowserRouter>

    <I18nextProvider i18n={i18n}>
      <AuthProvider routes={commonRoutes}>
        {({ isHeaderVisible }) => (
          <ThemeProvider theme={defaultTheme}>
            <InternalPage isHeaderVisible={isHeaderVisible}>
              <Toasts />
              <GlobalStyle />
              <Route exact path='/' component={Tickets} />
              <Route exact path='/tickets' component={Tickets} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/statistic' component={Statistic} />
              <Route exact path='/profile' component={Profile} />
              <Route exact path='/settings' component={Settings} />
              <RouterEnhancer routes={commonRoutes}>
                {renderRoutes(commonRoutes)}
              </RouterEnhancer>
            </InternalPage>
          </ThemeProvider>
        )}
      </AuthProvider>
    </I18nextProvider>
    </BrowserRouter>

  );
}

export default hot(App);
