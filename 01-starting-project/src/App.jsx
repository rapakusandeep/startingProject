import reactImg1 from "./assets/react-core-concepts.png";
import reactImg2 from "./assets/components.png";
import reactImg3 from "./assets/jsx-ui.png";


//to output dynamic content in the components and to do that we use '{}' and the randomized value in between the {}, eg in Header component.
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
const logosPath = [reactImg1, reactImg2, reactImg3];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}



//creating a component(function) to simplify App component.
function Header() {
  const dynamicvalue = reactDescriptions[genRandomInt(2)];
  const picPath = logosPath[genRandomInt(2)];
  return (
    <header>
      <img src={picPath} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {dynamicvalue} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}



function App() {
  return (
    <div>
      <Header></Header>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
