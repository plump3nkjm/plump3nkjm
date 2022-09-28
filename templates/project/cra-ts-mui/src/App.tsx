import React from 'react';
import {Switch, HashRouter as Router} from 'react-router-dom'
import {CommonLayout} from "@/layouts/CommonLayout";
import {Auth, RouteWrapper} from "@/providers/RouteProvider"
import {SiteProvider} from "@/providers/SiteProvider";

import {Index} from "@/pages/Index";

const App = () => {
  return (
      <SiteProvider>
        <Router>
          <Switch>
            <RouteWrapper exact path="/" component={Index} layout={CommonLayout}/>
            <Auth>
              {/* auth required pages ..*/}
            </Auth>
          </Switch>
        </Router>
      </SiteProvider>
  );
}


export default App;
