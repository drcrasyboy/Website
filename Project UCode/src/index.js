import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

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

