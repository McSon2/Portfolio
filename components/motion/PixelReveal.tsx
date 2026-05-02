"use client";

import { useEffect, useState } from "react";

type Tile = { key: string; x: number; y: number; delay: number };

const TILE_PX = 64;
const FADE_MS = 240;
const MAX_DELAY_MS = 700;
const HOLD_MS = 100;

export const PIXEL_REVEAL_TOTAL_MS = HOLD_MS + MAX_DELAY_MS + FADE_MS;

export function PixelReveal() {
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setHidden(true);
      return;
    }

    const cols = Math.ceil(window.innerWidth / TILE_PX);
    const rows = Math.ceil(window.innerHeight / TILE_PX);
    const list: Tile[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        list.push({
          key: `${x}-${y}`,
          x,
          y,
          delay: HOLD_MS + Math.floor(Math.random() * MAX_DELAY_MS),
        });
      }
    }
    setTiles(list);

    const timer = window.setTimeout(
      () => setHidden(true),
      PIXEL_REVEAL_TOTAL_MS + 80,
    );
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
      style={{ background: tiles.length === 0 ? "#000" : "transparent" }}
    >
      {tiles.map((tile) => (
        <span
          key={tile.key}
          style={{
            position: "absolute",
            left: tile.x * TILE_PX,
            top: tile.y * TILE_PX,
            width: TILE_PX,
            height: TILE_PX,
            background: "#000",
            animation: `pixel-out ${FADE_MS}ms cubic-bezier(0.7, 0, 0.84, 0) ${tile.delay}ms both`,
          }}
        />
      ))}
    </div>
  );
}
