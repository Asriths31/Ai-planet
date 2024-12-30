import React, { useCallback } from 'react';
import {PipelineToolbar} from "./comp/toolbar"
import { PipelineUI } from './comp/pipelineUi';
import './App.css'
 
import 'reactflow/dist/style.css';
 
export default function App() {
 
 
 
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}