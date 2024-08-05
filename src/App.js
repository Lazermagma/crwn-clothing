import Directory from "./components/directory/directory.component";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.components";
import Navigation from "./routes/Navigation/navigation.components";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
