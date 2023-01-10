import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import List from "./pages/List/List";
import Single from "./pages/Single/Single";
import New from "./pages/New/New";
import { productInputs, userInputs } from "./formData";
import './Styles/Dark.scss'
import { DarkModeContext } from "./context/DarkMode";
import { useContext, useState } from "react";


function App() {

  const {dark, setDark} = useContext(DarkModeContext)
  return (
    <>
    <div className={dark ? "App dark": "App"}>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="users">
            <Route index element={<List title='USERS'/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInputs} title='Add New User'/>}/>
          </Route>
          <Route path="products">
            <Route index element={<List title='PRODUCTS'/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs={productInputs} title='Add New Product'/>}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
