import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConceptProps from "./components/CoreConceptProps.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";


function App() {
  const [selectedVal, setSelectedVal] = useState();

  //the setSelectedVal when called will recall the App() and the page gets rendered again to see the updated content.

  function handleTouch(selectedComponent) {
    setSelectedVal(selectedComponent);
  }

  let tabContent = <p>please select or click on a button</p>;

  if (selectedVal) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedVal].title}</h3>
        <p>{EXAMPLES[selectedVal].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedVal].code}
          </code>
        </pre>
      </div>);
  }

  return (
    <div>
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <h2>Core Concepts Props</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (<CoreConceptProps key={item.title} {...item} />))}
            {/* the above single line replaces the below commented code */}
            {/* <CoreConceptProps
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConceptProps {...CORE_CONCEPTS[1]} />
            <CoreConceptProps
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image} />
            <CoreConceptProps
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isTouched={selectedVal === 'components'} onTouch={() => handleTouch('components')}>Components</TabButton>
            <TabButton isTouched={selectedVal === 'jsx'} onTouch={() => handleTouch('jsx')}>JSX</TabButton>
            <TabButton isTouched={selectedVal === 'props'} onTouch={() => handleTouch('props')}>Props</TabButton>
            <TabButton isTouched={selectedVal === 'state'} onTouch={() => handleTouch('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
