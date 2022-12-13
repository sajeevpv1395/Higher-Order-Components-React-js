import HoverCounter from './HoverCounter';
import ClickCounter from './ClickCounter';
import HocCounter from './HOC/HocCounter'

import './App.css';

function App() {
  const UpdatedClickCounter = HocCounter(ClickCounter)
const UpdatedHoverCounter = HocCounter(HoverCounter)
  return (
    <div className="App">
<h1>welcome</h1>
<UpdatedClickCounter />
  <UpdatedHoverCounter />
    </div>
  );
}

export default App;
