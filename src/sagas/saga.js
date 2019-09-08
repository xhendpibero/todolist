import { takeLatest, takeEvery, put, delay } from 'redux-saga/effects';

const progress = (value) =>{
  return put({ type: 'LOADING_LIST', value });
}

function* addTodo() {
  yield progress(true);
  yield delay(500);
  yield put({type: 'ADD_LIST', value:false});
  yield progress(false);
}

function* editTodo(action) {
  yield put({type: 'EDIT_LIST', value:action.value});
  yield progress(true);
  yield delay(100);
  yield progress(false);
}

function* deleteTodo(action) {
  yield progress(true);
  yield delay(500);
  yield put({type: 'DELETE_LIST', value:action.value});
  yield progress(false);
}

function* todoDone(action) {
  yield progress(true);
  yield delay(500);
  yield put({type: 'LIST_DONE', value:action.value});
  yield progress(false);
}

function* changeFilter(action) {
  yield progress(true);
  yield delay(500);
  yield put({type: 'CHANGE_FILTER', value:action.value});
  yield progress(false);
}

export function* sagaAddTodo(){
  yield takeLatest("ADD_LIST_ASYNC", addTodo);
  yield takeEvery("EDIT_LIST_ASYNC", editTodo);
  yield takeEvery("DELETE_LIST_ASYNC", deleteTodo);
  yield takeEvery("LIST_DONE_ASYNC", todoDone);
  yield takeEvery("CHANGE_FILTER_ASYNC", changeFilter);
}
