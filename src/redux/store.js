import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import middleware from './middleware';
import contactsPersistConfig from './contactsItems/contacts-persist-config';
import { contactsReducer } from './contactsItems/contacts-reducer';
import { filterReducer } from './filter/filter-reducer';

const store = configureStore({
  reducer: {
    contacts: persistReducer(
      contactsPersistConfig,
      combineReducers({
        items: contactsReducer,
        filter: filterReducer,
      }),
    ),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { store, persistor };
