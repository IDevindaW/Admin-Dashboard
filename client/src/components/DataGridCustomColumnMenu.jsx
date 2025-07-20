/*
import {
  GridColumnMenuContainer
} from "@mui/x-data-grid";
//import { GridFilterMenuItem, HideGridColMenuItem } from '@mui/x-data-grid-pro';
import {
  GridColumnMenuContainer,
  GridColumnMenuSortItem,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
  GridColumnMenuColumnsItem
} from '@mui/x-data-grid-pro';

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem onClick={hideMenu} column={currentColumn} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;  */

import {
  GridColumnMenuContainer,
  GridColumnMenuSortItem,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
  GridColumnMenuColumnsItem
} from '@mui/x-data-grid-pro'; // or '@mui/x-data-grid' if using free version

const CustomColumnMenu = (props) => {
  return (
    <GridColumnMenuContainer {...props}>
      <GridColumnMenuSortItem {...props} />
      <GridColumnMenuFilterItem {...props} />
      <GridColumnMenuHideItem {...props} />
      <GridColumnMenuColumnsItem {...props} />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
