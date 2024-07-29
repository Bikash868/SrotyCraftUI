import Draggable from "react-draggable";

import PropTypes from 'prop-types';
import { useState } from "react";
import { useXarrow } from "react-xarrows";
// import Xarrow, { Xwrapper } from "react-xarrows";
// import { DraggableData, DraggableEvent } from "react-draggable";


const boxStyle = {
  border: "grey solid 2px",
  borderRadius: "10px",
  padding: "20px",
  height: "20px",
  filter: "drop-shadow(12px -4px 14px #4444dd)",
};

export const StickyNote = ({ text, itemId, onJoin }) => {
  const updateXarrow = useXarrow();
//   const [currentRotate, setCurrentRotate] = useState(0);
  const [customStyle, setCustomStyle] = useState({});

//   const isDraggingRef = useRef(false);

//   const onDrag = () => {
//     isDraggingRef.current = true;
//   };

//   const onStop = () => {
//     if (!isDraggingRef.current) {
//       // setCurrentRotate(currentRotate + 90);
//     }
//     isDraggingRef.current = false;
//   };

  const ondbclick = () => {
    onJoin(itemId);
    setCustomStyle({ background: "yellow" });
  };

  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
      <div
        id={text}
        style={{ ...boxStyle, ...customStyle }}
        onDoubleClick={ondbclick}
        className="css-selector"
      >
        <span>{text}</span>
      </div>
    </Draggable>
  );
};


StickyNote.propTypes = {
    text: PropTypes.string,
    itemId:PropTypes.number,
    onJoin: PropTypes.func

}