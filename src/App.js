import "./App.css";

function App() {
  return (
    <div>
      <div className="achievement">
        <div className="achievement-box">
          <div className="achievement-number">+3.500</div>
          <div className="achievement-text">Pacientes atendidos</div>
        </div>
        <div className="achievement-box">
          <div className="achievement-number">+15</div>
          <div className="achievement-text">Especialistas disponíveis</div>
        </div>
        <div className="achievement-box">
          <div className="achievement-number">+10</div>
          <div className="achievement-text">Anos no mercado</div>
        </div>
      </div>

      <div className="solution">
        <div className="solution-box">
          <div className="solution-check">
            <div className="solution-check-mark"></div>
          </div>
          <div className="solution-title">Problemas digestivos</div>
          <div className="solution-text">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </div>
        </div>
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
