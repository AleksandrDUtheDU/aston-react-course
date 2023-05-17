import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import AuthForm from "../AuthForm/AuthForm";
import Main from "../Main/Main";
import { LOGIN, HOME, REGIST } from "../../shared/Routes";

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Layout />}>
        <Route index element={<Main />} />
        <Route path={LOGIN} element={<AuthForm />} />
        <Route path={REGIST} element={<AuthForm />} />
      </Route>
    </Routes>
  );
}

export default App;
