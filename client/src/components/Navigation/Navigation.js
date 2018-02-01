import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DrawerLeft from '../Drawer/Drawer';

// export default class AppBarTop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       open: false
//     };
//   }

//   //Toggle function (open/close Drawer)
//   toggleDrawer() {
//     this.setState({
//       open: !this.state.open
//     });
//   }

//   render() {
//     return (
//       <div>
//         <AppBar
//           title="Title"
//           onClick={this.toggleDrawer.bind(this)}
//           iconElementRight={
//             this.state.loggedIn ? (
//               <FlatButton label="Logout" onClick={this.props.toggle} />
//             ) : (
//               <h3>hello</h3>
//             )
//           }
//         />
//         <DrawerLeft
//           open={this.state.open}
//           onToggleDrawer={this.toggleDrawer.bind(this)}
//         />
//       </div>
//     );
//   }
// }

const AppBarTop = props => {
  return (
    <div>
      <AppBar
        title="Title"
        onTitleClick={props.toggleDrawer}
        onLeftIconButtonClick={props.toggleDrawer}
        onRightIconButtonClick={props.toggle}
        iconElementRight={props.loggedIn ? <FlatButton label="Logout" /> : <FlatButton label="Login" />}
      />
      <DrawerLeft open={props.open} toggleDrawer={props.toggleDrawer} goHome={props.goHome} />
    </div>
  );
};

export default AppBarTop;
