import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import { LOGIN, HOME, REGIST } from "../../shared/Routes";

function Main() {
  return <h2>ОСНОВА</h2>;
}

function AuthentificationIn() {
  return <h2>Вход</h2>;
}

function AuthentificationReg() {
  return <h2>Регистрация</h2>;
}

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={LOGIN} element={<AuthentificationIn />} />
        <Route path={REGIST} element={<AuthentificationReg />} />
      </Route>
    </Routes>
  );
}

export default App;
