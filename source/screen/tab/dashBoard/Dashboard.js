import React, {useEffect, useState} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import GlobalInclude from '../../../globalInclude/GlobalInclude';
import Helper from '../../../helper/Helper';
import {WebView} from 'react-native-webview';

const dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    global.global_loader_reff.show_loader(1)
    setTimeout(() => {}, 3000);
  }, []);

  const click = () => {
    Helper.ToastShow('Dashboard', 'fail');
  };

  const renderLoadingView = () => {
    
    global.global_loader_reff.show_loader(0);
  };

  return (
    <View style={styles.mainView}>
      <GlobalInclude.Statusbar backgroundColor={'gray'} />

      <WebView
        source={{uri: 'http://www.awt.fr/contact.html'}}
       onLoad={() => renderLoadingView()}
      />

      
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  innerView: {
    flex: 1,
    backgroundColor: GlobalInclude.Color.Colorwhite,
  },
});

export default dashboard;
