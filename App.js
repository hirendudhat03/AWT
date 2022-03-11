import React from 'react';
import {StyleSheet, View} from 'react-native';
import GlobalInclude from './source/globalInclude/GlobalInclude';
import {Root} from 'native-base';
import RootNavigators from './source/route/Route';

console.disableYellowBox = true;
const App = () => {
  const Navigation = RootNavigators;

  return (
    <Root>
      <Navigation />
      <GlobalInclude.Loader ref={(ref) => (global.global_loader_reff = ref)} />
      <GlobalInclude.Alert ref={(ref) => (global.toast_reff = ref)} />
    </Root>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;
