import React, { useEffect, useState } from 'react';
import '../../App.css';

function Landingpage() {
    
  function m( t, y ) {

    for ( var e, n = document.getElementById( t, y ), i = n.innerHTML.replace( "&amp;", "&" ).split( "" ), a = "", o = 0, s = i.length; s > o; o++ ) {
        e = i[ o ].replace( "&", "&amp" );
        a += e.trim() ? '<span class="letter-' + o + '">' + e + "</span>" : "&nbsp;";
    }

    n.innerHTML = a;

    setTimeout( function () {
        n.className = "transition-in";
    }, 500 * Math.random() + 500 );

}

window.onload = function() {
    m( "h1", ".h3" );
};
    
  return (
    <>
    
    <h3 className="h3" style={{position: "absolute", color: "#fefeff", top: "60%", left: "40%"}}>(WELCOME TO MY PORTFOLIO)</h3>
    <h1 id="h1">SUDESNA MAYTRI SAHU</h1>
    
    </>
  )
}

export default Landingpage