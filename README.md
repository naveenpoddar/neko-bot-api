# Neko Bot API

> ## Image Generation

### Normal Example:

```js
const api = require("neko-bot-api");

let imageUrl = await api.clyde("Hello World!");
```

### Example using ES Syntax:

```js
import api from "neko-bot-api";

let imageUrl = await api.clyde("Hello World!");
```

### Example without async await:

```js
api.clyde("Hello World!").then((imageURL) => {
  // do something with the url
});
```

> ## Image

```js
const api = require("neko-bot-api");

let imageURL = api.image("food");
```

#### For Getting Image bytes instead of image urls:

```js
let imageUrl = await api.clyde("Hello World!", 1);
```

## Thanks for using Neko Bot API

Official Website - https://nekobot.xyz/
