import { JSX } from "preact";
import {CagePositionFinder} from "../classes/CagePositionFinder.ts";
import {NoteFinder} from "../classes/NoteFinder.ts";

interface FingeringChartProps extends JSX.HTMLAttributes<HTMLDivElement> {
  position: string;
  mode: string;
  keyName: string;
  labelMode: "none" | "intervals" | "notes"
}

const cageFinder = new CagePositionFinder();
const noteFinder = new NoteFinder();

const topOffset = 24; // Extra vertical space for fret numbers
const strings = 6;
const frets = 5;
const width = 300;
const height = 140;
const verticalPadding = 16; // Add padding above and below
const paddedHeight = height + verticalPadding * 2;

const stringSpacing = height / (strings - 1);
const fretSpacing = width / frets;

// Define exaggerated string thicknesses (low E to high E)
const stringWidths = [10, 7, 5, 3, 2, 1];

// Ebony-like background, bronze strings, silver frets
const ebony = "#161617";
const bronze = "#a57034";
const silver = "#c0c0c0";

export function FingeringChart(props: FingeringChartProps) {

  const cagedNotes = cageFinder.getScale(props.mode, props.position);
  const scaleNotes = noteFinder.getKeyIntervals(props.keyName, props.mode)
  const startFret = cageFinder.getStartFret(props.keyName, cagedNotes)

  return (
        <svg
            viewBox={`0 0 ${width} ${paddedHeight + topOffset}`}
            preserveAspectRatio="xMidYMid meet"
            className="w-full h-auto"
        >

          {/* Draw fretboard */}
          <rect
              key='fretboard'
              x={0}
              y={topOffset}
              height={paddedHeight}
              width={width}
              fill={ebony}
          ></rect>


          {/* CAGED position label */}
          <text
              x={0}
              y={14}
              textAnchor="middle"
              fontSize="20"
              fontWeight="bold"
              fill="white"
              style={{ fontFamily: 'serif', letterSpacing: 1 }}
          >
            {props.position.charAt(0).toUpperCase()}
          </text>

          {/* Draw fret numbers */}
          {Array.from({ length: frets }).map((_, i) => {
            const x = (i + 1) * fretSpacing;
            const y = 18; // small padding above the fretboard
            return (
                <text
                    key={"fret-number-" + i}
                    x={x - fretSpacing / 2}
                    y={y}
                    textAnchor="middle"
                    fill="gray"
                    style={{ fontSize: 10 }}
                >
                  {startFret + i}
                </text>
            );
          })}

          {/* Draw frets */}
          {Array.from({ length: frets + 1 }).map((_, i) => (
              <line
                  key={"fret-" + i}
                  x1={i * fretSpacing}
                  y1={topOffset}
                  x2={i * fretSpacing}
                  y2={paddedHeight + topOffset}
                  stroke={silver}
                  strokeWidth={i === 0 ? 4 : 2}
              />
          ))}

          {/* Draw strings (flipped: low E at bottom) */}
          {Array.from({ length: strings }).map((_, i) => {
            const flippedIndex = strings - 1 - i;
            const y = i * stringSpacing + verticalPadding + topOffset;
            return (
                <line
                    key={"string-" + i}
                    x1={0}
                    y1={y}
                    x2={width}
                    y2={y}
                    stroke={bronze}
                    style={{ strokeWidth: stringWidths[flippedIndex] }}
                    strokeLinecap="round"
                />
            );
          })}

          {/* Draw note markers */}
          {cagedNotes.map((note, i) => {
            const y = (strings - 1 - note.string) * stringSpacing + verticalPadding + topOffset;
            const x = (note.fret) * fretSpacing + fretSpacing / 2;
            const isRoot = note.interval === "1";
            const fillColor = isRoot ? "red" : "yellow";

            return (
                <g key={"note-" + i}>
                  <circle
                      cx={x}
                      cy={y}
                      r={12}
                      fill={fillColor}
                      stroke="black"
                      strokeWidth={1.5}
                  />
                  {props.labelMode === "intervals" && (
                      <text
                          x={x - 3.5 * note.interval.length}
                          y={y + 6}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontSize="10"
                          fontWeight="bold"
                          fill="black"
                      >
                        {note.interval}
                      </text>
                  )}
                  {props.labelMode === "notes" && (
                      <text
                          x={x - 8}
                          y={y + 6}
                          fontSize="10"
                          fontWeight="bold"
                          fill="black"
                          textAnchor="middle"
                          dominantBaseline="middle"
                      >
                        {scaleNotes[note.interval]}
                      </text>
                  )}
                </g>
            );
          })}
        </svg>
  );
}
