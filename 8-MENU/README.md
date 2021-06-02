# DOMContentLoaded event

The DOMContentLoaded event fires when the DOM content is loaded, without waiting for images and stylesheets to finish loading. Only handle DOMContentLoaded event if you place the JavaScript code in the head , which references elements in the body section.

```javascript
window.addEventListener("DOMContentLoaded", () => {
  let displayMenu = menu.map((item) => {
    //console.log(item);
    return `<article class="menu-item">
    <img src=${item.img} alt = ${item.title} class="photo" />
    <header>
    <h4>${item.title}</h4>
    <h4 class="price">&#8377;${item.price}</h4>
    </header>
    <p class = "item-text">
    ${item.desc}
    </p>
    </div>
    </article>
    `;
  });
  displayMenu = displayMenu.join("");

  console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
});
```

- this is how we can return an html template directly to window.
