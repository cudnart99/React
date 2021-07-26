import React from "react";
// import Greeting from "./components/checkProp";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// const routes = [
//   {
//     path: "/",
//     exact: true,
//     sidebar: () => <div>home!</div>,
//     main: () => <h2>Home</h2>
//   },
//   {
//     path: "/bubblegum",
//     sidebar: () => <div>bubblegum!</div>,
//     main: () => <h2>Bubblegum</h2>
//   },
//   {
//     path: "/shoelaces",
//     sidebar: () => <div>shoelaces!</div>,
//     main: () => <h2>Shoelaces</h2>
//   }
// ];

export default function Apps() {
  // return (
  // <Router>
  //   <div style={{ display: "flex" }}>
  //     <div
  //       style={{
  //         padding: "10px",
  //         width: "40%",
  //         background: "#f0f0f0"
  //       }}
  //     >
  //       <ul style={{ listStyleType: "none", padding: 0 }}>
  //         <li>
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li>
  //           <Link to="/bubblegum">Bubblegum</Link>
  //         </li>
  //         <li>
  //           <Link to="/shoelaces">Shoelaces</Link>
  //         </li>
  //       </ul>

  //       <Switch>
  //         {routes.map((route, index) => (
  //           // You can render a <Route> in as many places
  //           // as you want in your app. It will render along
  //           // with any other <Route>s that also match the URL.
  //           // So, a sidebar or breadcrumbs or anything else
  //           // that requires you to render multiple things
  //           // in multiple places at the same URL is nothing
  //           // more than multiple <Route>s.
  //           <Route
  //             key={index}
  //             path={route.path}
  //             exact={route.exact}
  //             children={<route.sidebar />}
  //           />
  //         ))}
  //       </Switch>
  //     </div>

  //     <div style={{ flex: 1, padding: "10px" }}>
  //       <Switch>
  //         {routes.map((route, index) => (
  //           // Render more <Route>s with the same paths as
  //           // above, but different components this time.
  //           <Route
  //             key={index}
  //             path={route.path}
  //             exact={route.exact}
  //             children={<route.main />}
  //           />
  //         ))}
  //       </Switch>
  //     </div>
  //   </div>
  // </Router>
  // );

  // return (
  //   <div className="App">
  //     <Greeting name="Duc" />
  //   </div>
  // );

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/"exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
