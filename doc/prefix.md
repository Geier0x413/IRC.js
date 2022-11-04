# [Class: ```Prefix```]

**Import:**

```js
import Prefix from "./irc.js/prefix.js";
```

## [Method: instance ```constructor( input )```]

**Description:** Creates an instance for IRC prefixes

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

***Return:*** Parsed IRC prefix

```js
const prefix = new Prefix( ":hello!world@example.com" );

console.log( prefix ); // Output: Prefix { "host" : "example.com" , "nick" : "hello" , "user" : "world" }
```

## [Method: instance ```format()```]

**Description:** Formats the IRC prefix

***Return:*** Formatted IRC prefix

```js
console.log( prefix.format() ); // Output: ":hello!world@example.com"
```

## [Method: instance ```parse( input )```]

**Description:** Parses the IRC prefix

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

```js
prefix.parse( ":foo!bar@example.com" );

console.log( prefix ); // Output: Prefix { "host" : "example.com" , "nick" : "foo" , "user" : "bar" }
```

## [Method: instance ```toString()```]

**Description:** Alternative to ```format()```

***Return:*** Formatted IRC prefix

```js
console.log( prefix.toString() ); // Output: ":foo!bar@example.com"
```