import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount() {
    const {count} = this.state;
    this.setState({count: count + 1});
  }
  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Tutorial App</Text>
        </View>
        <View style={styles.outputContainer}>
          <Text style={styles.output}>{count}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Press Me"
            buttonStyle={styles.button}
            onPress={this.incrementCount.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {backgroundColor: 'grey', flex: 1},
  titleContainer: {paddingLeft: 30, paddingTop: 50},
  title: {fontSize: 20},
  outputContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  output: {fontSize: 30},
  buttonContainer: {alignItems: 'center', paddingBottom: 40},
  button: {width: 200, height: 57, backgroundColor: 'black', borderRadius: 8},
});
