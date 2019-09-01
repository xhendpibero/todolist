import { takeLatest, takeEvery, put, delay } from 'redux-saga/effects';

function* addTodo() {
  yield put({type: 'LOADING_LIST', value:true});
  yield delay(500);
  yield put({type: 'ADD_LIST', value:false});
  yield put({type: 'LOADING_LIST', value:false});
}

function* editTodo(action) {
  yield put({type: 'EDIT_LIST', value:action.value});
  yield put({type: 'LOADING_LIST', value:true});
  yield delay(100);
  yield put({type: 'LOADING_LIST', value:false});
}

function* deleteTodo(action) {
  yield put({type: 'LOADING_LIST', value:true});
  yield delay(500);
  yield put({type: 'DELETE_LIST', value:action.value});
  yield put({type: 'LOADING_LIST', value:false});
}

function* todoDone(action) {
  yield put({type: 'LOADING_LIST', value:true});
  yield delay(500);
  yield put({type: 'LIST_DONE', value:action.value});
  yield put({type: 'LOADING_LIST', value:false});
}

function* changeFilter(action) {
  yield put({type: 'LOADING_LIST', value:true});
  yield delay(500);
  yield put({type: 'CHANGE_FILTER', value:action.value});
  yield put({type: 'LOADING_LIST', value:false});
}

export function* sagaAddTodo(){
  yield takeLatest("ADD_LIST_ASYNC", addTodo);
  yield takeEvery("EDIT_LIST_ASYNC", editTodo);
  yield takeEvery("DELETE_LIST_ASYNC", deleteTodo);
  yield takeEvery("LIST_DONE_ASYNC", todoDone);
  yield takeEvery("CHANGE_FILTER_ASYNC", changeFilter);
}
