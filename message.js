import Command from "./command.js";
import Params from "./params.js";
import Prefix from "./prefix.js";
import Tags from "./tags.js";
import * as utility from "./utility.js";

export default class Message {
  format() {
    let { command , params , prefix , tags } = this;

    command = this.command.format( command );
    params = this.params.format();
    prefix = this.prefix.format();
    tags = this.tags.format();

    return `${ tags ? `${ tags } ` : "" }${ prefix ? `${ prefix } ` : "" }${ command ? `${ command } ` : "" }${ params ? `${ params }\r\n` : "" }`;
  }

  parse( input ) {
    input = utility.stringify( input );
    if ( !input ) return;

    let msg = new RegExp( /^(?:(?<tags>\@\S+)\s+)?(?:(?<prefix>\:\S+)\s+)?(?<command>\S+)(?:\s+(?<params>.+))?(?:(?:\r+)?\n+)?$/igm ).exec( input );
    msg = msg?.groups;
    
    this.command = new Command( msg?.command );
    this.params = new Params( msg?.params );
    this.prefix = new Prefix( msg?.prefix );
    this.tags = new Tags( msg?.tags );
  }

  toString() {
    return this.format();
  }

  constructor( msg ) {
    if ( !msg ) {
      this.command = new Command();
      this.params = new Params();
      this.prefix = new Prefix();
      this.tags = new Tags();
    } else {
      this.parse( msg );
    }
  }
}