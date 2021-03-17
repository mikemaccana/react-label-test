import React, { useEffect, useState } from "react";
import "./styles.css";
import debounce from "lodash.debounce"

const log = console.log.bind(console);

export default function App() {
  const round = Math.round;

  let [labelTopOffset, setLabelTopOffset] = useState(0);
  let [labelLeftOffset, setLabelLeftOffset] = useState(0);
  let [lastRectWidth, setLastRectWidth] = useState(0);

  log(`Running labelling test`);

  // As label calculations use the window properties, we'll need to re-render 
  // when the window resizes
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
    }, 50)
    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })

  // Return coordinates that can be used to absolutely position 
  // a label inside a 'relative' positioned parent
  function getLabelCoordinates(spanElement, window){

    // rects are relative to viewport
    // See https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
    const rects = spanElement.getClientRects();
    const lastRect = rects[rects.length - 1];

    const positionedAncestor = spanElement.offsetParent
    const positionedAncestorRect = positionedAncestor.getBoundingClientRect();

    const top =  round(lastRect.bottom - positionedAncestorRect.top - window.scrollY)
    const left = round(lastRect.left - positionedAncestorRect.left - window.scrollX)
    const lastRectWidth = round(lastRect.width)

    return {
      top,
      left,
      lastRectWidth 
    }
  }

  useEffect(() => {
    const highlighted = document.querySelector(".highlighted");
    const labelCoordinates = getLabelCoordinates(highlighted, window)

    setLabelTopOffset(labelCoordinates.top);
    setLabelLeftOffset(labelCoordinates.left);
    setLastRectWidth(labelCoordinates.lastRectWidth);
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

            // 
            top: `${labelTopOffset}px`,
            left: `${labelLeftOffset + lastRectWidth}px`,
            transform: 'translateX(-100%)',

            height: `22px`,
            width: `50px`,

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
