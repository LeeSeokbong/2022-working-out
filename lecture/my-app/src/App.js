import './App.css';

import Extraction from './Part1_2_04/Extraction';
import Composition from './Part1_2_04/Composition';
import ClassComponent from './Part1_2_05/ClassComponent';
import FunctionalComponent from './Part1_2_05/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <FunctionalComponent/>
      <ClassComponent/>
      <Extraction/>
      <Composition/>
    </div>
  );
}

export default App;
