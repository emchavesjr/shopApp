import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import productsReducer from './store/reducers/products'

const rootReducer = combineReducers ({
	products: productsReducer
})

const store = createStore(rootReducer)


export default function App() {
  return (
	  <Provider store={store} >
		  <View style={styles.container}>
			  <Text>...</Text>
		  </View>
	  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
