import { css } from 'lit-element';

export default css`
:host {
  width: 100%;
  height: 500px;
  margin-bottom: 100px;
  display: block;
  background-color: #012; }

.system {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1); }

.sun {
  width: 72px;
  height: 72px;
  border-radius: 36px;
  position: absolute;
  top: 250px;
  left: 50%;
  margin: -36px;
  background: url("sun.png") no-repeat;
  background-size: 72px; }

@-webkit-keyframes rot-ear {
  from {
    -webkit-transform: rotate(0deg) translatey(-81px) rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg) translatey(-81px) rotate(-360deg); } }

@-moz-keyframes rot-ear {
  from {
    -moz-transform: rotate(0deg) translatey(-81px) rotate(0deg); }
  to {
    -moz-transform: rotate(360deg) translatey(-81px) rotate(-360deg); } }

@-keyframes rot-ear {
  from {
    transform: rotate(0deg) translatey(-81px) rotate(0deg); }
  to {
    transform: rotate(360deg) translatey(-81px) rotate(-360deg); } }

.ear {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #4b94f9;
  position: absolute;
  top: 250px;
  left: 50%;
  margin: -3.5px;
  -webkit-animation: rot-ear 10.05s infinite linear;
  -moz-animation: rot-ear 10.05s infinite linear;
  animation: rot-ear 10.05s infinite linear;
  z-index: 2; }

.ear-path {
  width: 162px;
  height: 162px;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: 250px;
  left: 50%;
  margin: -81px;
  border: solid 1px #444; }

@-webkit-keyframes rot-mar {
  from {
    -webkit-transform: rotate(0deg) translatey(-105px) rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg) translatey(-105px) rotate(-360deg); } }

@-moz-keyframes rot-mar {
  from {
    -moz-transform: rotate(0deg) translatey(-105px) rotate(0deg); }
  to {
    -moz-transform: rotate(360deg) translatey(-105px) rotate(-360deg); } }

@-keyframes rot-mar {
  from {
    transform: rotate(0deg) translatey(-105px) rotate(0deg); }
  to {
    transform: rotate(360deg) translatey(-105px) rotate(-360deg); } }

.mar {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #dd411a;
  position: absolute;
  top: 250px;
  left: 50%;
  margin: -3px;
  -webkit-animation: rot-mar 4.05s infinite linear;
  -moz-animation: rot-mar 4.05s infinite linear;
  animation: rot-mar 4.05s infinite linear;
  z-index: 2; }

.mar-path {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  z-index: 1;
  position: absolute;
  top: 250px;
  left: 50%;
  margin: -105px;
  border: solid 1px #444; }

@-webkit-keyframes rot-lune {
  from {
    -webkit-transform: rotate(0deg) translatey(-7px) rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg) translatey(-7px) rotate(-360deg); } }

@-moz-keyframes rot-lune {
  from {
    -moz-transform: rotate(0deg) translatey(-7px) rotate(0deg); }
  to {
    -moz-transform: rotate(360deg) translatey(-7px) rotate(-360deg); } }

@-keyframes rot-lune {
  from {
    transform: rotate(0deg) translatey(-7px) rotate(0deg); }
  to {
    transform: rotate(360deg) translatey(-7px) rotate(-360deg); } }

.lune {
  width: 4px;
  height: 4px;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -1.5px;
  -webkit-animation: rot-lune 6.07s infinite linear;
  -moz-animation: rot-lune 6.07s infinite linear;
  animation: rot-lune 6.07s infinite linear; }

.mar {
  background-image: repeating-linear-gradient(to bottom, #fff, #fff 1px, transparent 1px, transparent 5px); }

@-webkit-keyframes rot-pho {
  from {
    -webkit-transform: rotate(0deg) translatey(-7px) rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg) translatey(-7px) rotate(-360deg); } }

@-moz-keyframes rot-pho {
  from {
    -moz-transform: rotate(0deg) translatey(-7px) rotate(0deg); }
  to {
    -moz-transform: rotate(360deg) translatey(-7px) rotate(-360deg); } }

@-keyframes rot-pho {
  from {
    transform: rotate(0deg) translatey(-7px) rotate(0deg); }
  to {
    transform: rotate(360deg) translatey(-7px) rotate(-360deg); } }

@-webkit-keyframes rot-dem {
  from {
    -webkit-transform: rotate(0deg) translatey(-9px) rotate(0deg); }
  to {
    -webkit-transform: rotate(360deg) translatey(-9px) rotate(-360deg); } }

@-moz-keyframes rot-dem {
  from {
    -moz-transform: rotate(0deg) translatey(-9px) rotate(0deg); }
  to {
    -moz-transform: rotate(360deg) translatey(-9px) rotate(-360deg); } }

@-keyframes rot-dem {
  from {
    transform: rotate(0deg) translatey(-9px) rotate(0deg); }
  to {
    transform: rotate(360deg) translatey(-9px) rotate(-360deg); } }

.pho, .dem {
  width: 2px;
  height: 2px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%; }

.pho {
  margin: -1px;
  -webkit-animation: rot-pho 1.5s infinite linear;
  -moz-animation: rot-pho 1.5s infinite linear;
  animation: rot-pho 1.5s infinite linear; }

.dem {
  margin: -3px;
  -webkit-animation: rot-dem 1s infinite linear;
  -moz-animation: rot-dem 1s infinite linear;
  animation: rot-dem 1s infinite linear; }
`;
