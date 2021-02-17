// import logo from "./logo.svg";
import React from "react";
// import "./App.css";
import defaultDataset from "./dataset";
import "./assets/styles/style.css";

//関数コンポーネント
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//上記の関数コンポーネントをクラスコンポーネントに書き換え
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: [],
      chats: [],
      currentId: "init",
      database: defaultDataset,
      open: false,
    };
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">{this.state.currentId}</div>
      </section>
    );
  }
}
