import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class SubmitSurveyScreen extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://survey.keadatabase.nz/submit' }} />;
  }
}
