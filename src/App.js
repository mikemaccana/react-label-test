import { useEffect, useState } from "react";
import "./styles.css";

const log = console.log.bind(console);

export default function App() {
  const round = Math.round;

  let [topOffset, setTopOffset] = useState(0);
  let [rightOffset, setRightOffset] = useState(0);
  let [bottomOffset, setBottomOffset] = useState(0);
  let [leftOffset, setLeftOffset] = useState(0);
  let [height, setHeight] = useState(0);
  let [width, setWidth] = useState(0);

  log(`HELLO WORLD`);

  useEffect(() => {
    const highlighted = document.querySelector(".highlighted");

    const documentOffsetRect = highlighted.getBoundingClientRect();

    log(`documentOffsetRect`, documentOffsetRect);

    const rects = highlighted.getClientRects();
    const lastRect = rects[rects.length - 1];
    log(`lastRect`, lastRect);

    setTopOffset(round(lastRect.bottom - 8));
    setLeftOffset(round(lastRect.left - 8));

    setHeight(round(lastRect.height));
    setWidth(round(lastRect.width));
  });

  return (
    <div className="App">
      <div
        className="text"
        style={{
          maxWidth: "300px",
          position: "relative"
        }}
      >
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
          <span
            className="highlighted"
            style={{
              backgroundColor: "pink"
            }}
          >
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in
          </span>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </span>

        <div
          className="label"
          style={{
            position: "absolute",
            display: "block",
            zIndex: 10,

            top: `${topOffset}px`,
            right: `${rightOffset}px`,
            bottom: `${bottomOffset}px`,
            left: `${leftOffset}px`,

            height: `${height}px`,
            width: `${width}px`,

            backgroundColor: "red"
          }}
        >
          label
        </div>
      </div>
    </div>
  );
}
