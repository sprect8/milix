import React from 'react';
import MuiThemeProvider from '../../node_modules/material-ui/styles/MuiThemeProvider';
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'


class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <LeftSidebar />
            {this.props.children}
            <RightSidebar />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;