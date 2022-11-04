# [Class: ```Message```]

**Import:**

```js
import Message from "./irc.js/message.js";
```

## [Method: instance ```constructor( input )```]

**Description:** Creates the instance for IRC message

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

***Return:*** Parsed IRC message

```js
const msg = new Message( "@hello=world :hello!world@example.com PRIVMSG #example :Hello World!" );

console.log( msg ); // Output:
/*
Message {
  "command" : "PRIVMSG",
  "params" : Params {
    "leading" : [ "#example" ],
    "trailing" : "Hello World!"
  },
  "prefix" : Prefix {
    "host" : "example.com",
    "nick" : "hello",
    "user" : "world"
  },
  "tags" : Tags {
    "hello" : "world"
  }
}
*/
```

## [Method: instance ```format()```]

**Description:** Formats the IRC message

***Return:*** Formatted IRC message

```js
console.log( msg.format() ); // Output: "@hello=world :hello!world@example.com PRIVMSG #example :Hello World!"
```

## [Method: instance ```parse( input )```]

**Description:** Parses the IRC message

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

```js
msg.parse( "@foo=bar :foo!bar@example.com PRIVMSG #example :Foo Bar!" );

console.log( msg ); // Output:
/*
Message {
  "command" : "PRIVMSG",
  "params" : Params {
    "leading" : [ "#example" ],
    "trailing" : "Foo Bar!"
  },
  "prefix" : Prefix {
    "host" : "example.com",
    "nick" : "foo",
    "user" : "bar"
  },
  "tags" : Tags {
    "foo" : "bar"
  }
}
*/
```

## [Method: instance ```toString()```]

**Description:** Alternative to ```format()```

***Return:*** Formatted IRC message

```js
console.log( msg.toString() ); // Output: "@foo=bar :foo!bar@example.com PRIVMSG #example :Foo Bar!"
```