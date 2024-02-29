import React from 'react'
import './Header.css'
export const Header = () => {
  return (
    <div>
    <nav class="navbar navbar-findcond navbar-fixed-top">
        <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
         </div>
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="nav navbar-nav navbar-right">
            
          <li class="active"><a href="#">Home<span class="sr-only">(current)</span></a></li>
          <li class="active"><a href="#">VPN<span class="sr-only">(current)</span></a></li>
          <li class="active"><a href="#">CEO<span class="sr-only">(current)</span></a></li>
          <li class="active"><a href="#">Instagram<span class="sr-only">(current)</span></a></li>
          <li class="active"><a href="#">Other<span class="sr-only">(current)</span></a></li>
            
          </ul>
         
        </div>
      </div>
    </nav></div>
  )
}
