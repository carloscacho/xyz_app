import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => (
  <Appbar.Header>
    {props.back && <Appbar.BackAction onPress={() => props.back()} />}
    <Appbar.Content title={"XYZ - " + props.title} />
  </Appbar.Header>
);

export default Header;