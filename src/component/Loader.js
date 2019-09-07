import React from 'react';
import { connect } from "react-redux";

const loads = (state) => (
    <div className="d-flex justify-content-center loading">
        {
            state.loading ? (<img src="load.gif" alt="load" />) : ""
        }
    </div>
)

const dataLoader = state => ({
    loading: state.loading
})

export default connect(dataLoader)(loads);
