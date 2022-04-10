import { WebView } from 'react-native-webview';
import React from "react";

const styles = StyleSheet.create({
  dripWeb: {
    flex: 1,
    marginTop: '10%',
    marginBottom: '10%'
  }
});

const DripWeb = () => {
  <WebView
    source= {{uri: 'https://drip.community/faucet'}}
    style= {styles.dripWebView}
  />
}

export default DripWeb;