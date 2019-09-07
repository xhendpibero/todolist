import React from 'react';
import { connect } from "react-redux";

const filters = ({ dispatch }) => (
    <div className="d-flex justify-content-between">
        <div className="marginan">
            Filter:
        <b onClick={() => dispatch({ type: "CHANGE_FILTER_ASYNC", value: 1 })}>Semua</b> /
        <b onClick={() => dispatch({ type: "CHANGE_FILTER_ASYNC", value: 2 })}>Selesai</b> /
        <b onClick={() => dispatch({ type: "CHANGE_FILTER_ASYNC", value: 3 })}>Belum Selesai</b>
        </div>
    </div>
)

export default connect()(filters);
