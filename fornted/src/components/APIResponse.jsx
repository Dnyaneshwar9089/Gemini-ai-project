import React from "react";

const APIResponse = ({ text }) => {
  //Removes all instances of double asterisks (**) from the input text. This is likely used to clean up Markdown-style bold syntax, as ** often denotes bold text in Markdown.
  text = text.replace(/\*\*/g, "");

  const paragraphs = text.split("\n\n");
  // Split into paragraphs using double newline

  // Function to render each paragraph
  const renderParagraph = (paragraph) => {
    if (paragraph.startsWith("*")) {
      // Render bullet points if the paragraph starts with a bullet
      const bulletPoints = paragraph
        .split("\n")
        .map((line) => line.replace("* ", "").trim());

      return (
        <>
          <ul>
            {bulletPoints.map((point, index) => (
              <>
                <li key={index}>{point}</li>
                <hr />
              </>
            ))}
          </ul>
        </>
      );
    }
    // Render plain paragraphs
    return <p>{paragraph}</p>;
  };

  return (
    <div>
      <hr />
      {paragraphs.map((paragraph, index) => (
        <div key={index}>{renderParagraph(paragraph)}</div>
      ))}
    </div>
  );
};

export default APIResponse;
