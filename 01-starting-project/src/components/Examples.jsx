import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [selectedVal, setSelectedVal] = useState();

    //the setSelectedVal when called will recall the current function and the page gets rendered again to see the updated content.

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

// in the below ButtonsContainer we use String notation "" for all inbuilt tags and {} for custom components.
// eg: ButtonsContainer="menu", ButtonsContainer={Section} - note that for custom tags we dont put any <> around it.
    return (
        <Section title="Examples" id="examples">
            <Tabs ButtonsContainer="menu" buttons={<>
                <TabButton isTouched={selectedVal === 'components'} onClick={() => handleTouch('components')}>Components</TabButton>
                <TabButton isTouched={selectedVal === 'jsx'} onClick={() => handleTouch('jsx')}>JSX</TabButton>
                <TabButton isTouched={selectedVal === 'props'} onClick={() => handleTouch('props')}>Props</TabButton>
                <TabButton isTouched={selectedVal === 'state'} onClick={() => handleTouch('state')}>State</TabButton>
            </>}>
                {tabContent}
            </Tabs>            
        </Section>
    );
}