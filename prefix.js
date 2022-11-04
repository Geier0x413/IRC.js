import * as utility from "./utility.js";

export default class Prefix {
  format() {
    let { host , nick , user } = this;

    host = utility.stringify( host );
    nick = utility.stringify( nick );
    user = utility.stringify( user );

    let prefix = "";

    if ( nick && user && host ) prefix += `${ nick }!`;
    if ( user && host ) prefix += `${ user }@`;
    if ( host ) prefix += `${ host }`;
    
    return prefix.length ? `:${ prefix }` : prefix;
  }

  parse( input ) {
    input = utility.stringify( input );
    if ( !input ) return;

    let prefix = new RegExp( /^\:?(?:(?<nick>.+?)\!)?(?:(?<user>.+?)\@)?(?<host>.+)$/i ).exec( input );
    prefix = prefix?.groups;

    if ( prefix?.host ) this.host = prefix.host;
    if ( prefix?.nick ) this.nick = prefix.nick;
    if ( prefix?.user ) this.user = prefix.user;
  }

  toString() {
    return this.format();
  }

  constructor( input ) {
    this.host = "";
    this.nick = "";
    this.user = "";
    
    this.parse( input );
  }
}