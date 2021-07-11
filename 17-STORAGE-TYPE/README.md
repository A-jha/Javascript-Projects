# Cokies Vs Local Storage Vs Session

|                   | Cokiies            | Local Storage | Session Storage |
| ----------------- | ------------------ | ------------- | --------------- |
| Capacity          | 4 kb               | 10 mb         | 5 mb            |
| Browser           | HTML4/HTML5        | HTML5         | HTML5           |
| Accesible from    | Any Window         | Never         | On tab close    |
| Expires           | Manually set       | Never         | On Tab Closed   |
| Storage Location  | Browser and Server | Browser Only  | Browser Only    |
| Sent With Request | Yes                | No            | No              |

## What are Cookies?

Cookies are data, stored in small text files, on your computer.

When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

Cookies were invented to solve the problem "how to remember information about the user":

When a user visits a web page, his/her name can be stored in a cookie.
Next time the user visits the page, the cookie "remembers" his/her name.

- Add A cookie

```js
document.cookie = "username=Avinash jha";
```

- Add Expiry date to cookie

```js
document.cookie = "username=Avi;expiry="+new Date(2021 7 12).toUTCString();
```

- Read Cookie

```js
let x = document.cookie;
```

- Delete Cookies

```js
document.cookie = "username=;expires = Thu, 01 Jan 1965 00:00:00 UTC;path=/;";
```

## What are local storage ?

The localStorage and sessionStorage properties allow to save key/value pairs in a web browser.

The localStorage object stores data with no expiration date. The data will not be deleted when the browser is closed, and will be available the next day, week, or year.

The localStorage property is read-only.

- Create - it takes key and value pair

```js
localStorage.setItem("Name", "Avi");
```

- Get the data by passing key

```js
localStorage.getItem("Name");
```

- Updata ( Overrides the previous value )

```js
localStorage.setItem("Name", "Avinash");
```

- Delete - it takes key as prams

```js
localStorage.removeItem("Name");
```

- Delete all data

```js
localStorage.clear();
```

## What are Session Storage ?

The sessionStorage object stores data for only one session (the data is deleted when the browser tab is closed).

- Create - it takes key and value pair

```js
sessionStorage.setItem("Name", "Avi");
```

- Get the data by passing key

```js
sessionStorage.getItem("Name");
```

- Updata ( Overrides the previous value )

```js
sessionStorage.setItem("Name", "Avinash");
```

- Delete - it takes key as prams

```js
sessionStorage.removeItem("Name");
```

- Delete all data

```js
sessionStorage.clear();
```
