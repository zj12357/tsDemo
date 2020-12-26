import {combineReducers} from 'redux';

import {appReducer} from './app';
import {topicReducer} from './topic';
import {userReducer} from './user';
import {messageReducer} from './message';
import {authReducer} from './auth';
import {dbReducer} from './db';
import {collectionReducer} from './collection';
import {replyReducer} from './reply';

export default combineReducers({
  app: appReducer,
  topic: topicReducer,
  user: userReducer,
  message: messageReducer,
  auth: authReducer,
  db: dbReducer,
  collection: collectionReducer,
  reply: replyReducer
});