# [Class: ```Tags```]

**Import:**

```js
import Tags from "./irc.js/tags.js";
```

## [Variable: static ```reserved```]

**Description:** Contains all reserved keywords to prevent overwritting of vital methods and properties when creating the instance

## [Method: instance ```constructor( input )```]

**Description:** Creates an instance for IRC tags

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

***Return:*** Parsed IRC tags

```js
const tags = new Tags( "@hello=world" );

console.log( tags ); // Output: Tags { "hello" : "world" }
```

## [Method: instance ```format()```]

**Description:** Formats the IRC tags

***Return:*** Formatted IRC tags

```js
console.log( tags.format() ); // Output: "@hello=world"
```

## [Method: instance ```parse( input )```]

**Description:** Parses the IRC tags

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

```js
tags.parse( "@foo=bar" );

console.log( tags ); // Output: Tags { "foo" : "bar" }
```

## [Method: instance ```toString()```]

**Description:** Alternative to ```format()```

***Return:*** Formatted IRC tags

```js
console.log( tags.toString() ); // Output: "@foo=bar"
```