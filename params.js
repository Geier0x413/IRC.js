import * as utility from "./utility.js";

export default class Params {
  format() {
    const leading = ( Array.isArray( this?.leading ) ? this.leading : [] ).join( " " );
    const trailing = utility.stringify( this?.trailing );

    return `${ leading }${ trailing ? `${ leading ? " " : "" }:${ trailing }` : "" }`;
  }

  parse( input ) {
    input = utility.stringify( input );
    if ( !input ) return;

    const crlf = "\r\n";
    if ( input.includes( crlf ) ) input = input.replace( crlf , "" );

    let leading = "";
    let trailing = "";

    let colon = ":";
    
    if ( !input.startsWith( colon ) ) {
      colon = " :";

      const delimiter = input.indexOf( colon );
      
      leading = (input.includes( colon ) ? input.substring( 0 , delimiter ) : input).trim();
      trailing = (input.includes( colon ) ? input.substring( delimiter + colon.length , input.length ) : "").trim();
    } else {
      trailing = input.substring( colon.length , input.length );
    }

    if ( leading ) this.leading = leading.split( " " );
    if ( trailing ) this.trailing = trailing;
  }

  toString() {
    return this.format();
  }

  constructor( input ) {
    this.leading = [];
    this.trailing = "";
    
    this.parse( input );
  }
}