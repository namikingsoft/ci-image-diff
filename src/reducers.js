// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as diffBuild } from 'domains/DiffBuild';
import { reducer as loading } from 'domains/Loading';
import { reducer as progress } from 'domains/Progress';
import { reducer as lightbox } from 'domains/Lightbox';

export default combineReducers({
  routing,
  diffBuild,
  loading,
  progress,
  lightbox,
});
