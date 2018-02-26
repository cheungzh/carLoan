import '../../common/css/form.scss';

import React from 'react';
import PropTypes from 'prop-types';
export function Row (props) {
  let {gutter} = props;
  if(isNaN(gutter)) {
    return new Error('gutter is required number but get ' + (typeof gutter));
  }
  return (
    <div className="row" style={{paddingLeft: gutter/2 + 'px',paddingRight: gutter/2 + 'px'}}>
      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child,{
            gutter: gutter
          })
        } )
      }
    </div>
  )
}

export function Col (props) {
  let { col, gutter } = props;
  console.log(props);
  return (
    <div className={col} style={{paddingLeft: gutter/2 + 'px',paddingRight: gutter/2 + 'px'}}>
      {
        React.Children.map(props.children, child => child)
      }
    </div>
  )
}

export function Input(props) {
  let { label, name, labelWidth, type, placeholder, dataValue } = props;
  return (
    <div className="cm-input">
      { (function () {
        if(label) {
          return <label className="cm-input-label" style={{width: labelWidth + 'px'}}>{label}</label>
        }
      })() }
      <div className="cm-input-inner" style={{marginLeft: labelWidth + 'px'}}>
        <input type={ type ? type : 'text'} name={name} placeholder= {placeholder} value={dataValue} onChange={props.dataChange}/>
      </div>
    </div>
  )
}

export function Button (props) {
  let { type } = props;
  return (
    <div className="cm-button">
      <button type="button" className={type} onClick={props.click}>{props.children}</button>
    </div>
  )
}

// export class Row extends React.Component {
//   render () {
//     let {gutter} = this.props;
//     return (
//       <div className="row" style={{paddingLeft: gutter/2 + 'px',paddingRight: gutter/2 + 'px'}}>
//         {
//           React.Children.map(this.props.children, child => {
//             return React.cloneElement(child,{
//               gutter: gutter
//             })
//           } )
//         }
//       </div>
//     )
//   }
// }
// Row.propTypes = {
//   gutter: PropTypes.number
// };
//
// export class Col extends React.Component {
//   render () {
//     let { col, gutter } = this.props;
//     return (
//       <div className={col} style={{paddingLeft: gutter/2 + 'px',paddingRight: gutter/2 + 'px'}}>
//         {
//           React.Children.map(this.props.children, child => child)
//         }
//       </div>
//     )
//   }
// }

// export class Input extends React.Component {
//   render () {
//     let { label, name, labelWidth, placeholder, dataValue } = this.props;
//     return (
//       <div className="cm-input">
//         { (function () {
//           if(label) {
//             return <label className="cm-input-label" style={{width: labelWidth + 'px'}}>{label}</label>
//           }
//         })() }
//         <div className="cm-input-inner" style={{marginLeft: labelWidth + 'px'}}>
//           <input type="text" name={name} placeholder= {placeholder} value={dataValue} onChange={this.props.dataChange}/>
//         </div>
//       </div>
//     )
//   }
// }




export function getCookie(name){
  if(name){
    var cookie = document.cookie;
    if(cookie.length > 0){
      var start = cookie.indexOf(name + "=");
      if(start != -1){
        var end = cookie.indexOf(";",start);
        start = start + name.length + 1;
        if(end != -1){
          cookie = cookie.substr(start,end);
          return cookie;
        }
        cookie = cookie.substr(start);
        return cookie;
      }
    }
  }else{
    console.log('a param is need');
  }
}
