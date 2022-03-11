import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, StyleSheet, Alert} from 'react-native';
import GlobalInclude from '../../globalInclude/GlobalInclude';
import NetInfo from '@react-native-community/netinfo';

const splash = ({navigation}) => {
  const [netConnection, setNetConnection] = useState(0);

  useEffect(() => {
    //global.global_loader_reff.show_loader(1);

    setTimeout(() => {
      NetInfo.fetch().then(state => {
        console.log('Connection type', state.type);
        console.log('Is connected?', state.isConnected);

        if (state.isConnected) {
          callInitApp();
        } else {
          Alert.alert(
            'Internet Connection Failed.',
            'Please Turn on your Data',
            [
              {
                text: 'OK',
                onPress: () => setNetConnection(netConnection + 1),
              },
            ],
            {cancelable: false},
          );
        }
      });
    }, 3000);
  }, [netConnection]);

  const callInitApp = () => {
    GlobalInclude.AsyncStorage.getItem(GlobalInclude.Constant.sessId).then(
      value => {
        console.log('Tokan =>', value);
        // if (value === null) {
        //   navigation.replace('Login');
        // } else {
        navigation.replace('DrawerNavigator');
        // }
      },
    );

    global.global_loader_reff.show_loader(0);
  };

  return (
    <View style={styles.mainView}>
      <GlobalInclude.Image
        source={GlobalInclude.Assets.Logo2}
        imageStyle={{height: 350, width: 350}}
        viewStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}
      />
      {/* <GlobalInclude.Statusbar
        backgroundColor={GlobalInclude.Color.ColorBlack}
      /> */}
      {/* <View style={styles.innerView}>
        <GlobalInclude.Text
          text={'Splash screen'}
          textStyle={{fontSize: 17, textAlign: 'center', marginTop: 200}}
        />
      </View> */}
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

export default splash;
