# 🎲 Dice Roller

Choose how many dice to roll and see the numbers and the dice faces.

## Run
Open [`index.html`](index.html) in a browser → set **# of dice** → **Roll dice**.

## How it works
1. `rollDice()` reads the number of dice.
2. A `for` loop rolls each die: `Math.floor(Math.random() * 6) + 1`.
3. Values are shown as text (`dice: 3, 5, 1`) and as images from [`dice_images/`](dice_images).

## Files
| File | Role |
|---|---|
| [`index.html`](index.html) | Number input, roll button, result areas |
| [`index.js`](index.js) | `rollDice()` logic |
| [`style.css`](style.css) | Styling |
| [`dice_images/`](dice_images) | `1.png` – `6.png` dice faces |

## Concepts
Functions · `for` loop · arrays · `join()` · `innerHTML`

[← All projects](../README.md)
