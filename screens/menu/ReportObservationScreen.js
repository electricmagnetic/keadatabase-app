import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class ReportObservationScreen extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://keadatabase.nz/report' }} />;
  }
}
