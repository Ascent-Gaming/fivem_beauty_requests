<h1>Bilge</h1>

## Introduction

Is a *painfully* simple wrapper around [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [`Bilge.post()`](#bilgepost)

## Installation

`git clone` this repository into the **root** of your `/resources/` directory.

## Usage

To use Bilge from your NUI-frontend, import it as a module using the following:

```JavaScript
import Bilge from "https://cfx-nui-bilge/src/bilge.js"
```

### `Bilge.post()`

Sends a request using the `POST` method to the client-side

| Param      | Type        | Description                                                         |
| -----------| ----------- | -----------                                                         |
| event      | `string`    | The `event` on the client-side to invoke.                           |
| body       | `object`    | An *optional* object containing what-will-be the request's body.    |