import React from 'react';
import { connect } from "react-redux";

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

export default connect()(header);
