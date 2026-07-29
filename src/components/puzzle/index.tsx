import { useEffect, useMemo, useState } from "react";
import "./puzzle.css";



function shuffle(array: number[]) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

interface PuzzleGridType {
  rows: number
  cols: number
  imgSrc: string
  onComplete?: () => void
  size: number
}

export default function PuzzleGrid({
  rows = 5, cols = 5, imgSrc, onComplete, size: boardSize
}: PuzzleGridType) {
  const [imageSize, setImageSize] = useState({
    width: 0,
    height: 0,
  });

  const correct = useMemo(() =>
    Array.from({ length: rows * cols }, (_, i) => i)
    , []);

  const [pieces, setPieces] = useState(() => shuffle(correct));
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const isCompleted = useMemo(() => {
    if (pieces.every((piece, index) => piece === index)) {
      onComplete?.();
      return true
    }
    return false
  }, [pieces]);

  function handleDrop(dropIndex: number) {
    if (dragIndex === null || dragIndex === dropIndex) return;
    if (pieces[dragIndex] === dragIndex) return; // цей вже зафіксований
    if (pieces[dropIndex] === dropIndex) return; // сюди теж не можна

    const updated = [...pieces];

    [updated[dragIndex], updated[dropIndex]] = [
      updated[dropIndex],
      updated[dragIndex],
    ];

    setPieces(updated);
    setDragIndex(null);
  }

  const pieceSize = boardSize / rows;

  useEffect(() => {
    const img = new Image();

    img.src = imgSrc;

    img.onload = () => {
      setImageSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    };
  }, [imgSrc]);

  const scale =
    Math.max(
      boardSize / imageSize.width,
      boardSize / imageSize.height
    ) || 1;

  const bgWidth = imageSize.width * scale;
  const bgHeight = imageSize.height * scale;

  const offsetX = (boardSize - bgWidth) / 2;
  const offsetY = (boardSize - bgHeight) / 2;

  return (
    <div className={`puzzle-card ${isCompleted ? "completed" : ""}`}>
      <div
        className="board"
        style={{
          maxWidth: `${boardSize}px`,
          maxHeight: `${boardSize}px`,
          width: '100%',
          height: '100%',
          gridTemplateColumns: `repeat(${rows}, ${pieceSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${pieceSize}px)`,
        }}
      >
        {pieces.map((piece, index) => {
          const row = Math.floor(piece / cols);
          const col = piece % cols;
          const isLocked = pieces[index] === index;

          return (
            <div
              key={index}
              className={`piece ${isLocked ? "locked" : ""} ${isCompleted ? "completed" : ""}`}
              draggable={!isLocked}
              onDragStart={() => setDragIndex(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              style={{
                width: `${pieceSize}px`,
                height: `${pieceSize}px`,
                backgroundImage: `url(${imgSrc})`,
                // backgroundPosition: `-${col * pieceSize}px -${row * pieceSize}px`,
                // backgroundSize: `${cols * pieceSize}px ${rows * pieceSize}px`,
                backgroundSize: `${bgWidth}px ${bgHeight}px`,
                backgroundPosition: `${offsetX - col * pieceSize
                  }px ${offsetY - row * pieceSize
                  }px`,
                backgroundRepeat: "no-repeat",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}