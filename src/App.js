import React from 'react';
import './App.css';
import TambahList from './component/TambahList';
import Load from './load.gif';

class App extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        todo: [{
                val: "Apa Tugasmu Hari Ini? (click here)",
                selected: false,
              }],
        list: 1,
        filter: 1
      }
    }

  addList(e){
    let list = this.state.list
    let todo = this.state.todo
    this.setState({
      todo: todo.concat([{
              val: "Apa Tugasmu Hari Ini? (click here)",
              selected: false,
            }]),
      list: list + 1
    })
  }

  listSelesai(e){
    let newTodo = this.state.todo
    if (!newTodo[e - 1].selected) {
      newTodo[e - 1].selected = true
      this.setState({
        todo: newTodo
      })
    }
  }

  editList(e){
    let newTodo = this.state.todo
    var result = prompt("Apa Tugasmu Hari Ini?", newTodo[e - 1].val);
    if (result) {
      newTodo[e-1].val =  result
    }
    this.setState({
      todo: newTodo
    })
  }

  hapusList(e){
    alert('Tugas ' + e + ' Berhasil di Hapus!')
    var array = this.state.todo;
    array.splice(e-1, 1);
    this.setState({todo: array});
  }
  handleSelected(e){
    var data = ""
    if (e) {
      data = "del"
    }
    return data
  }

  handleTodo(e, val, index){
    var data = (
      <div onClick={() => this.editList(index + 1)}>
        {val}
      </div>
    )
    if (e) {
        data = val
    }
    return data
  }

  handleButton(e, index){
    var data = (
      <div>
      <button type="button" class="btn btn-edit" name="button"
      onClick={() => this.editList(index + 1)}
      >Edit</button>
      <button type="button" class="btn btn-hapus" name="button"
      onClick={() => this.hapusList(index + 1)}>Hapus</button>
      </div>
    )
    if (e) {
      data = (
        <div>
        <button type="button" class="btn btn-hapus" name="button"
        onClick={() => this.hapusList(index + 1)}>Hapus</button>
        </div>
      )
    }
    return data
  }

  handleRow(row, index){
    let data = (
      <tr className="row"
      key={index}
      >
      <td>{index + 1}.
      <input
      checked={row.selected}
      type="checkbox"
      onClick={() => this.listSelesai(index + 1)}
      />
      </td>
      <td className={this.handleSelected(row.selected)}>
      {this.handleTodo(row.selected, row.val, index)}
      </td>
      <td>
      {this.handleButton(row.selected, index)}
      </td>
      </tr>
    )
    return data
  }

  renderList(){
    let todoList = this.state.todo
    let data = todoList.map(
      (row, index) => {
        if (this.state.filter === 1) {
          return this.handleRow(row, index)
        }else if (this.state.filter === 2 && row.selected) {
          return this.handleRow(row, index)
        }else if (this.state.filter === 3 && !row.selected) {
          return this.handleRow(row, index)
        }
      }
      )
      if (data == "") {
        data = (
        <tr>
          <td colspan="3">
           Tidak Ada
          </td>
        </tr>
      )
      }
    return data
  }

  changeFilter(e){
    this.setState({
      filter: e
    })
  }

  render(){
  return (
    <div>
    <div className="main">
      <div>

        <div className="container teal">
          <div className="d-flex justify-content-between">
            <div className="">
              <h1>Aplikasi Todolistku</h1>
            </div>
            <div>
            <TambahList list={(e) => this.addList(e)}/>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center loading">
          <img src={Load} alt="load"/>
        </div>

        <div className="container">
          <div className="rounded-lg shadow card">
            <div className="d-flex justify-content-center">
              <h2 className="marginan">Hari Jumat, </h2>
              <p className="marginan2">30 Agustus 2019</p>
            </div>
            <div className="d-flex justify-content-between">
              <div>
                <div className="marginan">
                   Filter: <a onClick={() => (this.changeFilter(1))}>Semua</a> / <a onClick={() => (this.changeFilter(2))}>Selesai</a> / <a onClick={() => (this.changeFilter(3))}>Belum Selesai</a>
                </div>
              </div>
            </div>

            <table>
              <tr>
                <th>No</th>
                <th>Todo</th>
                <th>Action</th>
              </tr>
              {this.renderList()}
            </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
