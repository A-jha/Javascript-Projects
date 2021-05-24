<center><h2>Color Fliper</h2></center>

## Flip the color in a contant and random way :)

## App.js

- We have an array of colors and based on that color we are choosing one of the random color from the array and assigning that color to background color.

## Hex.js

- We have to form a color code
- Color codes are made up of hex numbers
- 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F are the hex digits.
- we have an array of hex digit and we have to form an string starting with # and random 6 numbers.
- Such As #2321AC

## Random Function

- Math.floor return floor value
- Math.random() - Return value between 0 and 1.
- Math.random() \* clors.length - will always retrun some value between 0 and colors.length.

```javascript
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
```
