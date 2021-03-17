import React, { useEffect, useState } from "react";
import "./styles.css";
import debounce from "lodash.debounce"

const log = console.log.bind(console);

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export default function App() {
  const round = Math.round;
  const HEIGHT = 22

  let [labelTopOffset, setLabelTopOffset] = useState(0);
  let [labelLeftOffset, setLabelLeftOffset] = useState(0);
  let [lastRectWidth, setLastRectWidth] = useState(0);

  log(`Running labelling test`);

  // See https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 100)
    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })



  useEffect(() => {
    const article = document.querySelector("article");
    const articleRect = article.getBoundingClientRect();
    log('articleRect', articleRect)


    const highlighted = document.querySelector(".highlighted");
    const rects = highlighted.getClientRects();

    // lastRect is RELATIVE TO VIEWPORT
    // See https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
    const lastRectInSpanRelativeToViewport = rects[rects.length - 1];
    log(`lastRect`, lastRectInSpanRelativeToViewport);

    setLabelTopOffset(round(lastRectInSpanRelativeToViewport.bottom - articleRect.top - window.scrollY));
    setLabelLeftOffset(round(lastRectInSpanRelativeToViewport.left - articleRect.left - window.scrollX));
    
    setLastRectWidth(round(lastRectInSpanRelativeToViewport.width));
  });

  return (
    <div className="App">
      <article
        style={{
          width: '100%',
          padding: '36px',
          position: "relative",
          transition: 'all 200ms'
        }}
      >
        <h1>Resize the window and ensure the label stays in place</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum. in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla

          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          
          <span
            className="highlighted"
            style={{
              backgroundColor: "pink"
            }}
          >
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in
          </span>
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </span>

        <div
          className="label"
          style={{
            position: "absolute",
            display: "block",
            zIndex: 10,

            top: `${labelTopOffset}px`,
            left: `${labelLeftOffset + lastRectWidth}px`,

            transform: 'translateX(-100%)',

            height: `${HEIGHT}px`,
            labelWidth: `50px`,

            color: 'white',
            textTransform: 'uppercase',
            fontWeight: 400,
            backgroundColor: "rebeccapurple"
          }}
        >
          label
        </div>
      </article>
    </div>
  );
}
