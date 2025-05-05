import { Routes, Route } from 'react-router-dom';
import Home from './sider/home';
import EventPage from './sider/eventpage';
import CategoryPage from './sider/categorypage';
import Dashboard from './sider/dashboard';

function App() {
  return (
    <>
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
