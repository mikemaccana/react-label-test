import { useEffect, useState } from "react";
import "./styles.css";

const log = console.log.bind(console);

export default function App() {
  const round = Math.round;
  const HEIGHT = 22

  let [topOffset, setTopOffset] = useState(0);
  let [rightOffset, setRightOffset] = useState(0);
  let [bottomOffset, setBottomOffset] = useState(0);
  let [leftOffset, setLeftOffset] = useState(0);
  let [width, setWidth] = useState(0);

  log(`HELLO WORLD`);

  useEffect(() => {
    const article = document.querySelector("article");
    const articleRect = article.getBoundingClientRect();
    log('articleRect', articleRect)


    const highlighted = document.querySelector(".highlighted");
    const rects = highlighted.getClientRects();
    const lastRect = rects[rects.length - 1];
    log(`lastRect`, lastRect);

    setTopOffset(round(lastRect.bottom - articleRect.top));
    setLeftOffset(round(lastRect.left - articleRect.left));

    
    setWidth(round(lastRect.width));
  });

  return (
    <div className="App">
      <article
        style={{
          maxWidth: "300px",
          position: "relative"
        }}
      >
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
            opacity: 0.5,

            top: `${topOffset}px`,
            left: `${leftOffset}px`,

            height: `${HEIGHT}px`,
            width: `${width}px`,

            backgroundColor: "rebeccapurple"
          }}
        >
          label
        </div>
      </article>
    </div>
  );
}
