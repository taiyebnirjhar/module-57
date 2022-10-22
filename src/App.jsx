import React from "react";
import LoginPage from "./components/LoginPage";

import { getAuth } from "firebase/auth";
import { app } from "./firebase/firebase.init";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {
  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
