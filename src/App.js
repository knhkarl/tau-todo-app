import { useState } from 'react';
import Add from './Add';

function App() {
  const [items, setItems] = useState([]);

  const handleAdd = (newItem) => {
    setItems(oldItems => oldItems.concat([newItem]));
  };

  return (
    <>
    <Add></Add>
    </>
  );
}

export default App;
