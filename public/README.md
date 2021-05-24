# Google Fonts

- Step1 : Add a stylesheet link to request the desired web font(s):

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Font+Name"
/>
```

- Style an element with the requested web font, either in a stylesheet:

```css
.css-selector {
  font-family: "Font Name", serif;
}
```

## Import google fonts in css

```css
@import url(link of font);
```

# Variable in style.css

CSS variables can have a global or local scope.

To create a variable with global scope, declare it inside the `:root` selector. The `:root` selector matches the document's root element.

To create a variable with local scope, declare it inside the selector that is going to use it.

- Global variable

```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}
```

- To use it use `var()`

```css
.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}
```
