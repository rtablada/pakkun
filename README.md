# Pakkun

Pakkun is a small package for helping pipe function arguments and make more readable code.
This is heavily inspired by the [`|>` operator in Elixir](http://elixir-lang.org/getting-started/enumerables-and-streams.html#the-pipe-operator).
This can be helpful for passing down results from one function into another and understanding the order of opperations.

Imagine the following code:

```elixir
Db.query(UserModel.findBy(request.email, 'email'), 'pg')
```

In Elixir this could be rewritten as:

```elixir
request.body.email
|> UserModel.findBy 'email'
|> Db.query 'pg'
```

"But!!! Javascript doesn't have a pipe operator you're saying!"

Well that's what Pakkun is for.
While it doesn't give the full experience of pipes, it comes pretty close to it.
Let's see how it works:

```js
import pakkun from 'pakkun';

pakkun(request.body.email,
  [UserModel.findBy, 'email'],
  [Db.query, 'pg']);
```

## Installation and Use

To install Pakkun, use either `npm` or `yarn`:

```bash
yarn add pakkun
```

> As of version 1.0.0 Pakkun is distributed as an ES6 module with no pre-processing.
> This means you will need to use Webpack, Rollup, Browserify (with es6 module importing), or another module system/loader.
> Future versions will be distributed as UMD modules that will be usable from node or with almost any build tool.

## Licence - MIT

Copyright 2017 Ryan Tablada

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.