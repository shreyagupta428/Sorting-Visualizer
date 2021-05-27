import './App.css';
import SortingVisualizer from './SortingVisualization/algorithms/SortingVisualizer.js'
import ReactNavbar from "react-responsive-animate-navbar";

function App() {
  return (
    <div className="App">
      {/* <h1 class="maskText mt-1" 
      style="margin: 0px auto; 
             text-align: center; 
             background-image: url(&quot;/algorithms-visualiser/static/media/maskShapesNew.7950aa5a.svg&quot;); 
             background-size: cover; 
             background-position: 50% center; 
             background-repeat: no-repeat; 
             width: auto; 
             background-clip: text; 
             color: transparent;">
        {Algorithms<br>Visualiser}
      </h1> */}
      
      <SortingVisualizer />
    </div>
  );
}

export default App;
