import "./App.css";
import { Routes, Route } from "react-router-dom";
import FlexBoxComponent from "./flex-box/flex-box-component";
import HelloWorldCom from "./hello-world/hello-world-com";
import LeadersTomorrowComponent from "./leaders-tomorrow/leaders-tomorrow-component";
import ExcellenceComponent from "./excellence/excellence-component";
import PositionComponent from "./position/position-component";
import TrustedComponent from "./trusted/trusted-component";
import GetInTouchComponent from "./get-in-touch/get-in-touch-component";
import ImpactComponent from "./impact/impact-component";
import OurPromiseComponent from "./our-promise/our-promise-component";
import FlexWrapComponent from "./flex-wrap-example/flex-wrap-component";
// import SymbolOfExcellenceComponent from "./symbol-of-excellence/symbol-of-execllence-component";
import FourOFourComponent from "./404-component/404-component";
import UseStateComponent from "./usestate-1st/use-state-component";
import UsestateformComponent from "./use-state-form/use-state-form-component";
import RegisterFormComponent from "./register-form/register-form-component";

// function App() {
//   //  const arr1 = [
//   //   { name: "sai", mobile: "1234" },
//   //   { name: "ragu", mobile: "5678" },
//   // ];
//   const IndexPage = () => {
//     return (
//       <div
//         style={{
//           padding: "80px 20px",
//           textAlign: "center",
//           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//           color: "white",
//           minHeight: "400px",
//         }}
//       >
//         <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🏠 Home Page</h1>
//         <p style={{ fontSize: "1.5rem", opacity: 0.9 }}>
//           This is the index route for /leetcode
//         </p>
//       </div>
//     );
//   };
//   return (
//     <div>
//       <Routes>
//         {/* <Route path="/eshwar" element={<HelloWorldComponent />} />
//         <Route path="/our-promise" element={<OurPromisesComponent />} />
//         <Route path="/" element={<TrustedbyComponent />} /> */}

//         {/* <Route path="/leetcode/*" element={<HelloWorldComponent />}>
//           <Route index element={<IndexPage />} />
//           <Route path="trusted-by" element={<TrustedbyComponent />} />
//           <Route path="our-promise" element={<OurPromisesComponent />} />
//         </Route> */}
//         {/* <Route path="/leetcode/:id" element={<SymbolOfExcellenceComponent />} /> */}
//         {/* <Route path="*" element={<FourOFourComponent />} /> */}
//         <Route path="/use-state-practice" element={<UseStateComponent />} />
//         <Route path="/use-state-form" element={<UsestateformComponent />} />
//         <Route path="*" element={<FourOFourComponent />} />
//       </Routes>
//     </div>
//   // return (
//   //   <div>
//   //     {/* <HelloWorldComponent /> */}
//   //     {/* <FlexBoxComponent /> */}
//   //     {/* <LeadersTomorrowComponent /> */}
//   //     {/* <ExcellenceComponent /> */}
//   //     {/* <PositionComponent/> */}
//   //     {/* <TrustedComponent/> */}
//   //     {/* <GetInTouchComponent/> */}
//   //     {/* <ImpactComponent/> */}
//   //     <OurPromiseComponent/>
//   //     {/* <FlexWrapComponent/> */}
//   //   </div>
//   );
// }
function App() {
  // Sample Index Page (You can remove if not used)
  const IndexPage = () => {
    return (
      <div
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          minHeight: "400px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>🏠 Home Page</h1>
        <p style={{ fontSize: "1.5rem", opacity: 0.9 }}>
          This is the index route
        </p>
      </div>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterFormComponent />} />
        <Route path="/register" element={<RegisterFormComponent />} />

        {/* <Route path="/eshwar" element={<HelloWorldComponent />} /> */}
        {/* <Route path="/our-promise" element={<OurPromisesComponent />} /> */}
        {/* <Route path="/leetcode/:id" element={<SymbolOfExcellenceComponent />} /> */}
        {/* <Route path="/use-state-practice" element={<UseStateComponent />} /> */}
        {/* <Route path="/use-state-form" element={<UsestateformComponent />} /> */}
        {/* <Route path="/addition-operation" element={<AdditionOperationComponent />} /> */}

        {/* 404 PAGE */}
        <Route path="*" element={<FourOFourComponent />} />
      </Routes>
    </div>
  );
}

export default App;
