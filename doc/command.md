# [Class: ```Command```]

**Import:**

```js
import Command from "./irc.js/command.js";
```

## [Variable: static ```numerical_replies```]

**Description:** Contains all IRC numerical replies

## [Method: static ```translateIRCReply( input )```]

**Description:** Translates IRC replies

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [\<Number\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (Required)

***Return:*** Translated IRC reply code or name

```js
console.log( Command.translateIRCReply( 1 ) ); // Output: "RPL_WELCOME"
console.log( Command.translateIRCReply( "RPL_WELCOME" ) ); // Output: "001"
```

## [Method: instance ```constructor( input )```]

**Description:** Creates an instance for IRC commands

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

***Return:*** Parsed IRC command

```js
const command = new Command( "PRIVMSG" );

console.log( command ); // Output: Command { "code" : "" , "name" : "PRIVMSG" , "reply" : "" }
```

## [Method: instance ```format()```]

**Description:** Formats the IRC command

***Return:*** Formatted IRC command

```js
console.log( command.format() ); // Output: "PRIVMSG"
```

## [Method: instance ```parse( input )```]

**Description:** Parses the IRC command

- ```input``` [\<String\>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) (Optional)

```js
command.parse( "001" );

console.log( command ); // Output: Command { "code" : "001" , "name" : "" , "reply" : "RPL_WELCOME" }
```

## [Variable: instance ```#preferred```]

**Description:** Contains the preferred command syntax to be used when formatting

## [Method: instance ```toString()```]

**Description:** Alternative to ```format()```

***Return:*** Formatted IRC command

```js
console.log( command.toString() ); // Output: "RPL_WELCOME"
```