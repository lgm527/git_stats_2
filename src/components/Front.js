import React from 'react';
import '../assets/Front.css';

function Front(props) {
    console.log(props.user);
const { login, avatar_url } = props.user;
  return (
    <div className="Front">
        <img className='avatar' src={avatar_url} style={{width: '200px', height: '200px'}} alt='user avatar' />
        
        <p className="team">Octocats</p>

        <svg className="team-banner" width="37.157894mm" height="22.345482mm" viewBox="0 0 131.66183 79.176903" id="teambanner">
        <g transform="translate(20.245031,15.912448)" style={{"display":"inline"}}>
        <g id="g4219">
        <path id="path3352-3" d="m -20.0734,32.05221 8,17 6.00241,0.92417 -1.50241,13.07583 30.09262,-9.44365 41.06468,-9.69713 c 0,0 17.45114,-4.58631 26.85574,-7.11134 16.47986,-4.42466 20.25842,-13.83519 20.38342,-18.21019 1.0625,-2.71875 -0.11677,-30.783301 -0.11677,-30.783301 -0.003,-0.726468 0.0834,-2.6126 -1.41356,-3.46427 l -0.0715,3.2794 c -1.72517,7.64159 -8.32748,14.570481 -22.29466,21.680481 -8.10983,4.12832 -107,22.75 -107,22.75 z" style={{"fill":"#000000","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"0.30000001","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}}></path>
        <path id="path3352" d="m -19.51256,25.19052 8.25,16.75 -3.75,16 c 0,0 30.07129,-8.36569 41.84986,-10.51311 18.2677,-3.33049 50.61126,-9.23206 63.57692,-12.85301 10.37003,-3.51256 18.66941,-9.57106 18.71967,-18.22487 l 0.34283,-28.776968 c -0.75,3.9375 -9.14171,12.153808 -20.73928,14.617958 z" style={{"fill":"#c3c3c3","fillOpacity":"1","fillRule":"evenodd","stroke":"#000000","strokeWidth":"1","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}}></path>
        </g>
        </g>
        </svg>
    </div>
  );
}

export default Front;