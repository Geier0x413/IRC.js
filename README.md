# Documentation

**Import:**

```js
import Message from "./irc.js/message.js";
```

**Usage:**

```js
// Example message
const message = "@foo=bar :example!example@example.com PRIVMSG #example :Hello World!";

// Declare a new message
const msg = new Message( message );
```

***Important:***
- *Verbose documentation provided in **/doc***
- *Please make sure a single IRC message is passed as an argument and must end with either **\n** or **\r\n** or nothing. Multiple packets separated by a **\n** or **\r\n** will cause everything after the initial **\n** or **\r\n** to be dropped.*