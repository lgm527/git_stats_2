import React from 'react';
import '../assets/Front.css';

function Front(props) {
    const { login, avatar_url } = props.user;
      return (
        <div className="Front">
            <p className='dev'>DEVELOPER</p>

            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' className='octocat'><path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/></svg>

            <p className='username'>@{login}</p>
            <img className='avatar' src={avatar_url} style={{width: '200px', height: '200px'}} alt='user avatar' />
            
            <p className="team">Octocats</p>

            <svg className="team-banner" width="57.45mm" height="25.2mm" viewBox="0 0 131.66183 79.176903" id="teambanner">
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