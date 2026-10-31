# ⭕ Circle

Enter a radius, get the circumference.

`C = 2 × π × r` (π = `3.1416`, result in cm)

## Run
Open [`index.html`](index.html) in a browser → type a radius → **Submit**.

## How it works
1. The button's `onclick` reads the input value.
2. `Number()` converts it from text to a number.
3. The result is written into `#circum` with a template literal.

## Files
| File | Role |
|---|---|
| [`index.html`](index.html) | Input, button, result heading |
| [`index.js`](index.js) | Calculation + DOM update |
| [`style.css`](style.css) | Styling |

## Concepts
`getElementById` · `onclick` · `Number()` · template literals

[← All projects](../README.md)
