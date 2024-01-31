import React, { useState } from "react";
import TabButton from "../componets/TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import Tabs from "../Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = (selectedButton) => {
    // Convert selectedButton to lowercase
    setSelectedTopic(selectedButton.toLowerCase());
  };
  return (
    <>
      <Section title="Examples" id="examples">
        <Tabs
          buttonsContainer={Section}
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("Components")}
                title="Components"
              />
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("JSX")}
                title="JSX"
              />
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("Props")}
                title="Props"
              />
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("State")}
                title="State"
              />
            </>
          }
        >
          {!selectedTopic ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </Tabs>
      </Section>
    </>
  );
};

export default Examples;
