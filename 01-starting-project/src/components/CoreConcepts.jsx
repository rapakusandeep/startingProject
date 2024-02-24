import CoreConceptProps from "./CoreConceptProps.jsx";
import { CORE_CONCEPTS } from "../data.js";


export default function CoreConcepts() {
    return (
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
    );
}