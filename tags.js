import * as utility from "./utility.js";

export default class Tags {
  static reserved = [ "format" , "parse" , "toString" ];

  format() {
    const tags = [];

    for ( const key in this ) {
      if ( Tags.reserved.includes( key ) ) continue;

      const value = utility.stringify( this[ key ] );

      tags.push( `${ key }=${ value }` );
    }

    return tags.length ? `@${ tags.join( ";" ) }` : "" ;
  }

  parse( input ) {
    input = utility.stringify( input );
    if ( !input ) return;

    const at = "@";
    input = input.startsWith( at ) ? input.replace( at , "" ) : input;

    input.split( ";" ).forEach( tag => {
      tag = new RegExp( /(?<key>.+)\=(?<value>.+)/i ).exec( tag );
      tag = tag?.groups;

      if ( !Tags.reserved.includes( tag?.key ) ) this[ tag.key ] = tag.value;
    } );
  }

  toString() {
    return this.format();
  }

  constructor( input ) {
    this.parse( input );
  }
}