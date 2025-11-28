import { BrowserRouter, Routes, Route} from 'react-router'
import MainLayout from './layout/MainLayout';

import Home from './components/Home/Home';
import Recipes from './components/Recipes/Recipes';
import Details from './components/Details/Details';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';

function App() {
  
  return (
      <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:id" element={<Details />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
