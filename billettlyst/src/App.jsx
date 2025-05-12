import { Routes, Route } from 'react-router-dom';
import Home from './sider/home';
import EventPage from './sider/eventpage';
import CategoryPage from './sider/categorypage';
import Dashboard from './sider/dashboard';
import Nav from './komponenter/nav';



function App() {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
