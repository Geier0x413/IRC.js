# [Class: ```Params```]

**Import:**

```js
import Params from "./irc.js/params.js";
```

## [Method: instance ```constructor( input )```]

**Description:** Creates an instance for IRC parameters

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

***Return:*** Parsed IRC parameters

```js
const params = new Params( "#example1 :Hello World!" );

console.log( params ); // Output: Params { "leading" : [ "#example1" ] , "trailing" : "Hello World!" }
```

## [Method: instance ```format()```]

**Description:** Formats the IRC parameters

***Return:*** Formatted IRC parameters

```js
console.log( params.format() ); // Output: "#example1 :Hello World!"
```

## [Method: instance ```parse( input )```]

**Description:** Parses the IRC parameters

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

```js
params.parse( "#example2 :Foo Bar!" );

console.log( params ); // Output: Params { "leading" : [ "#example2" ] , "trailing" : "Foo Bar!" }
```

## [Method: instance ```toString()```]

**Description:** Alternative to ```format()```

***Return:*** Formatted IRC parameters

```js
console.log( params.toString() ); // Output: "#example2 :Foo Bar!"
```