import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";

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


    return (
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
    );
}