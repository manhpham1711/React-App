// In index.js of a new project
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Register from './FormSignUp';
import Calculator from './Calculator';
import List from './FlatList';

const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <View style={styles.textTitle}>
        <Text> Chào Mừng Đến Với Ứng Dụng Của Chúng Tôi</Text>
      </View>
      <TouchableOpacity
        style={[styles.styleButton, { backgroundColor: '#000000' }]}
        color="black"
        title="Register"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'register',
              options: {
                topBar: {
                  title: {
                    text: 'Register',
                  },
                },
              },
            },
          })
        }
      >
        <Text style={styles.styleText}> Register </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.styleButton, { backgroundColor: '#00A542' }]}
        title="Calculator"
        color="black"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'calculator',
              options: {
                topBar: {
                  title: {
                    text: 'Calculator',
                  },
                },
              },
            },
          })
        }
      >
        <Text style={styles.styleText}> Calculator </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.styleButton, { backgroundColor: '#F27724' }]}
        title="List Item"
        color="black"
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'list',
              options: {
                topBar: {
                  title: {
                    text: 'List',
                  },
                },
              },
            },
          })
        }
      >
        <Text style={styles.styleText}> List Item </Text>
      </TouchableOpacity>
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'black',
    },
    background: {
      color: 'green',
    },
  },
};
// // Settings screen declaration - this is the screen we'll be pushing into the stack
// const SettingsScreen = () => {
//   return (
//     <View style={styles.root}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// };

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('register', () => Register);
Navigation.registerComponent('calculator', () => Calculator);
Navigation.registerComponent('list', () => List);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
    flexDirection: 'column',
  },
  styleButton: {
    marginBottom: 25,
    height: 50,
    width: 200,
    borderWidth: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  styleText: {
    fontSize: 20,
    color: '#D3FFD3',
  },
  textTitle: {
    marginBottom: 100,
    textAlign: 'center',
  },
});
