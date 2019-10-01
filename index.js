'use strict';

import React from 'react';

import {
  StyleSheet,
  requireNativeComponent,
} from 'react-native';

const NavigatorTransparentBar = React.createClass({
  render: function(){
    return(
      <Overlay isVisible={true} style={styles.container} pointerEvents="none" aboveStatusBar={false}
      >
        {React.Children.map(this.props.children, React.addons.cloneWithProps)}
      </Overlay>
    );
  }
});

const Overlay = requireNativeComponent('Overlay', NavigatorTransparentBar);

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    height: 50,
    borderWidth:0,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 1,
  },
});

export default NavigatorTransparentBar;
