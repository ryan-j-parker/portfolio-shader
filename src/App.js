/* eslint-disable react/no-unknown-property */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ShaderEl from './ShaderEl';
import Interface from './Interface';

export default function App() {

  return (
    <Routes>
      <Route path="/interface" element={<Interface />} />
      <Route path="/" element={<ShaderEl />} />
    </Routes>
  );
}
