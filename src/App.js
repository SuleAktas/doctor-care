import "./App.css";
import About from "./components/about/about";
import Achievement from "./components/achievement/achievement";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Info from "./components/info/info";
import Solution from "./components/solution/solution";

function App() {
  return (
    <>
      <Header />
      <Info />
      <div className="achievement">
        <Achievement number=" +3.500" text="Pacientes atendidos" />
        <Achievement number="+15" text="Especialistas disponíveis" />
        <Achievement number="+10" text="Anos no mercado" />
      </div>

      <div className="solution">
        <div className="solution-main-mini-title"> SERVIÇOS</div>
        <div className="solution-main-title">
          Como podemos ajudá-lo a se sentir melhor?
        </div>

        <Solution
          title="Problemas digestivos"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim."
        />

        <Solution
          title="Saúde Hormonal"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />

        <Solution
          title="Bem-estar mental"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />

        <Solution
          title="Cuidados Pediátricos"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />

        <Solution
          title="Autoimune e Inflamação"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />

        <Solution
          title="Saúde do Coração"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim."
        />
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
