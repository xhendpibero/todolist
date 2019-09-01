import React from 'react';
import {delay} from "redux-saga";
import Load from './load.gif';
import './App.css';

import { connect } from "react-redux";

const renderList = ({todo,editList,deleteList,listDone}) => (
  <tbody>
    {todo.map((row, index) =>
      {
          return (
            <tr className="row"
            key={index}
            >
              <td>{index + 1}.
              <input type="checkbox"
              checked={row.selected}
              onChange={() => listDone(index)}
              />
              </td>
              <td className={!row.selected ? "" : "del"}>
              {!row.selected ? (
                <div onClick={() => editList(index)}>
                  {row.val}
                </div>
              ): row.val}
              </td>
              <td>
              {!row.selected ? (
                <button type="button" className="btn btn-edit"
                onClick={() => editList(index)}
                >Edit</button>
              ): ""}
              <button type="button" className="btn btn-hapus"
              onClick={() =>  deleteList(index)}>Hapus</button>
              </td>
            </tr>
          )
        }
      )
    }
    </tbody>
)

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 1:
            return todos
        case 2:
            return todos.filter(e => e.selected)
        case 3:
            return todos.filter(e => !e.selected)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todo: getVisibleTodos(state.todo,state.filter)
})

const map = dispatch => ({
  editList: index => dispatch({ type: "EDIT_LIST_ASYNC", value: index }),
  deleteList: index => dispatch({ type: "DELETE_LIST_ASYNC", value: index }),
  listDone: index => dispatch({ type: "LIST_DONE_ASYNC", value: index }),
})

const RenderList = connect(
  mapStateToProps,
  map
)(renderList);

const header = ({dispatch}) => (
  <div className="container teal">
    <div className="d-flex justify-content-between">
      <div className="">
        <h1>Aplikasi Todolistku</h1>
      </div>
      <div>
          <button type="submit" className="btn btn-edit edit" onClick={() => dispatch({ type: "ADD_LIST_ASYNC", value: false })}>Submit</button>
      </div>
    </div>
  </div>
)

const Header = connect()(header);

const loads = (state) => (
<div className="d-flex justify-content-center loading">
  {
    state.loading ? (<img src={Load} alt="load"/>): ""
  }
</div>
)
const dataLoader = state => ({
    loading: state.loading
})

const ALoad = connect(dataLoader)(loads);

const filters = ({dispatch}) => (
  <div className="d-flex justify-content-between">
      <div className="marginan">
        Filter:
        <b onClick={() => dispatch({ type: "CHANGE_FILTER_ASYNC", value: 1 })}>Semua</b> /
        <b onClick={() => dispatch({ type: "CHANGE_FILTER_ASYNC", value: 2 })}>Selesai</b> /
        <b onClick={() => dispatch({ type: "CHANGE_FILTER_ASYNC", value: 3 })}>Belum Selesai</b>
      </div>
  </div>
)

const Filteran = connect()(filters);


const App = () => (
  <div className="main">

    <Header />

      <div className="container">
        <div className="rounded-lg shadow card">

          <div className="d-flex justify-content-center">
            <h2 className="marginan">Hari Jumat, </h2>
            <p className="marginan2">30 Agustus 2019</p>
          </div>

          <Filteran />

          <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Todo</th>
              <th>Action</th>
            </tr>
            </thead>
            <RenderList />
          </table>
          <ALoad />

        </div>
      </div>

  </div>
)

export default App
