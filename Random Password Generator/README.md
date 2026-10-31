# 🔐 Random Password Generator

Builds a random password from the character sets you enable.

## Run
Open [`index.html`](index.html) in a browser, then open the console (`F12` → **Console**) to see the password.

## Customize
Edit the settings near the bottom of [`index.js`](index.js):

```js
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
```

## How it works
`generatePassword(length, lowercase, uppercase, numbers, symbols)`
1. Joins the enabled character sets into one pool.
2. Returns a message if the length is below 1 or no set is selected.
3. Picks `length` random characters from the pool.

## Files
| File | Role |
|---|---|
| [`index.html`](index.html) | Loads the script |
| [`index.js`](index.js) | `generatePassword()` + settings |
| [`style.css`](style.css) | Styling |

## Concepts
Functions with parameters · ternary operator · string building · input validation · `console.log`

[← All projects](../README.md)
