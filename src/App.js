import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/create" element={<CreateItem />} />
      </Routes>
    </Router>
  );
}

export default App;
