# 🌡️ Temperature Converter

Convert between Celsius and Fahrenheit.

| Direction | Formula |
|---|---|
| °C → °F | `C × 9/5 + 32` |
| °F → °C | `(F − 32) × 5/9` |

## Run
Open [`index.html`](index.html) in a browser → enter a value → choose a direction → **Submit**.

## How it works
- `convert()` checks which radio button is selected.
- Applies the matching formula and shows the result with 1 decimal (`toFixed(1)`).
- No direction selected → shows **Select a unit**.

## Files
| File | Role |
|---|---|
| [`index.html`](index.html) | Form with number input and unit radios |
| [`index.js`](index.js) | `convert()` logic |
| [`style.css`](style.css) | Styling |

## Concepts
Forms · radio buttons · `Number()` · `toFixed()` · functions

[← All projects](../README.md)
