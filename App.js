/*
import { StatusBar } from 'expo-status-bar';
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';

export default function App() {
  console.log("log!! hello, debugger!!!")
  console.debug("debug!! hello, debugger!!!")
  console.warn("warn!! hello, debugger!!!")

  const HelloWorld = props => {
    return <Text>Hello world!</Text>;
  };

  const PressableText = props => {
    return (
        <Pressable
            onPress={() => Alert.alert('You pressed the text!')}
        >
          <Text>You can press me</Text>
        </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <HelloWorld/>
      <PressableText/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
import Main from "./src/components/Main";
import {NativeRouter} from 'react-router-native';
import {StatusBar} from "react-native";

const App = () => {
    return (
        <>
            <NativeRouter>
                <Main/>
            </NativeRouter>
            <StatusBar style="auto"/>
        </>
    );
};

export default App;