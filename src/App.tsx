import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { AuthRoute, PrivateRoute } from "./routes";
import { persistor, store } from "./state/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename="/">
          <Routes>

        /* This section of code is setting up routes for authentication-related pages  */
            <Route element={<AuthRoute />} >
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Route>

        /* This section of code is setting up routes for the private layout of the application. */
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/expense-management" element={<Expenses />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
