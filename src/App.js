import React from 'react';
import Filteran from './component/FilterList.js';
import Header from './component/Header.js';
import ALoad from './component/Loader.js';
import RenderList from './component/RenderList.js';
import './App.css';

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
