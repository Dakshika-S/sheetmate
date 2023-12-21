import FileUpload from "./FileUpload";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; ///@@seting up router to change the url accordingly
function App() {
  return (
    <Router>
      {/*thsi is the root element for rotueing*/}
      <div className="App">
        <h1>sheetmate</h1>
        <Routes>
          <Route path="/" element={<FileUpload />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
