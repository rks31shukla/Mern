import React from "react";
import Keys from "./Keys";
export default function Input() {
  return (
    <>
      <div class="second-row">
        <Keys value="1" />
        <Keys value="2" />
        <Keys value="3" />
      </div>
      <div class="third-row">
        <Keys value="4" />
        <Keys value="5" />
        <Keys value="6" />
      </div>
      <div class="fourth-row">
        <Keys value="7" />
        <Keys value="8" />
        <Keys value="9" />
      </div>
      <div class="fifth-row">
        <div class="left">
        <Keys value ='0' />
          <Keys value ='.' />
          <Keys value ='+' />
          <Keys value ='-' />
          <Keys value ='/' />
          <Keys value ='*' />
          <Keys value ='=' />
          <Keys value ='Del' />
          
        </div>
      </div>
    </>
  );
}
