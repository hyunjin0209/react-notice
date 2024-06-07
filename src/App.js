import Header from "./component/header";
import "./css/header_footer.css";
import Footer from "./component/footer";
import Contentx1 from "./component/contents1";
import Contentx2 from "./component/contents2";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/componet" element={<Contentx1 />} />
          <Route exact path="/a" element={<Contentx2 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
