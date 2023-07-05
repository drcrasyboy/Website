import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC0paQLoPCLrKoUKsg1d4qgpvqQdUNEAj8",
//   authDomain: "project-ucode-website.firebaseapp.com",
//   projectId: "project-ucode-website",
//   storageBucket: "project-ucode-website.appspot.com",
//   messagingSenderId: "691058164",
//   appId: "1:691058164:web:9c329967a1a13fa128b5a1",
//   measurementId: "G-R6ZKE5CWX3"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React, { StrictMode } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import TermsOfUse from "./Components/TermsOfUse";
// import PrivacyPolicy from "./Components/PrivacyPolicy";

// root.render(
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/" element={<App />}>
//     //       <Route index element={<App />} />
//     //       <Route path="terms-of-use" element={<TermsOfUse />} />
//     //       <Route path="privacy-policy" element={<PrivacyPolicy />} />
//     //       {/* <Route path="*" element={<NoPage />} /> */}
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>
    
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<App />);

