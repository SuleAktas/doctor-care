import "./App.css";
import Achievement from "./components/achievement/achievement";
import Solution from "./components/solution/solution";

function App() {
  return (
    <div>
      <div className="achievement">
        <Achievement number=" +3.500" text="Pacientes atendidos" />
        <Achievement number="+15" text="Especialistas disponíveis" />
        <Achievement number="+10" text="Anos no mercado" />
      </div>

      <div className="solution">
        <Solution
          title="Problemas digestivos"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim."
        />
        <Solution />
        {/* <div className="solution-box"></div>
        <div className="solution-box"></div>
        <div className="solution-box"></div>
        <div className="solution-box"></div>
        <div className="solution-box"></div> */}
      </div>
    </div>
  );
}

export default App;
