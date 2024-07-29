// import React from 'react'
import * as React from "react";
import { StickyNote } from "../../components/StickyNote";
import Xarrow, { Xwrapper } from "react-xarrows";
import TailSvg from "../../assets/redCross.svg?react";


const Board = () => {
  const arr = [...new Array(4)].map((_, index) => `Piece-${index}`);

  const [values] = React.useState(arr);
  const [mapped, setMapped] = React.useState([
    { from: 0, to: 3, arrowId: "03" },
    { from: 3, to: 2, arrowId: "23" },
    { from: 2, to: 1, arrowId: "21" },
  ]);
  const [focused, setFocused] = React.useState(undefined);
  const [from, setFrom] = React.useState(undefined);

  const handleArrowClick = (d) => {
    setFocused(d.arrowId);
  };

  const removeArrow = (removeId) => {
    const newMapped = mapped.filter((d) => d.arrowId !== removeId);
    setMapped(newMapped);
    setFocused(undefined);
  };

  const onJoin = (itemId) => {
    if (from === undefined) {
      setFrom(itemId);
    } else {
      const src = from,
        destn = itemId;
      console.log();
      setMapped([
        ...mapped,
        { from: src, to: destn, arrowId: `${src}${destn}` },
      ]);
      setFrom(undefined);
    }
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        height: "100vh",
        background:'#dadada'
      }}
    >
      <Xwrapper>
        {values.map((item, index) => (
          <StickyNote key={item} text={item} itemId={index} onJoin={onJoin} />
        ))}
        {mapped.map((d, index) => (
          <div
            onClick={() => handleArrowClick(d)}
            style={{ cursor: "pointer" }}
            key={index}
          >
            <Xarrow
              start={`Piece-${d.from}`}
              end={`Piece-${d.to}`}
              showTail={d.arrowId == focused}
              tailShape={{
                svgElem: <TailSvg onClick={() => removeArrow(d.arrowId)} />,
                offsetForward: 1,
              }}
            />
          </div>
        ))}
      </Xwrapper>
    </div>
  );
};

export default Board;
