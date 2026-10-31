# 🎯 Number Guessing Game

Guess the secret number. The game tells you if you're too high or too low and counts your attempts.

## Run
Open [`index.html`](index.html) in a browser. The game starts on load using pop-up prompts, so there's no on-page UI.

## How it works
1. A random secret number is generated once.
2. A `while` loop asks for a guess with `window.prompt`.
3. Invalid input (not a number, or out of 1–100) shows an alert and doesn't count.
4. Valid guesses get **TOO LOW** / **TOO HIGH** feedback until you win.

## Files
| File | Role |
|---|---|
| [`index.html`](index.html) | Loads the script |
| [`index.js`](index.js) | Game loop and validation |
| [`style.css`](style.css) | Styling |

## Concepts
`while` loop · `prompt` / `alert` · `isNaN` · `if / else if` · `Math.random`

[← All projects](../README.md)
