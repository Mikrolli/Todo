import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckIcon from '@mui/icons-material/Check';


import "./style.css";

const Actions = ({
  handleChangeTab,
  tab
}) => {
  return (
    <div className="actions-wrapper">
      <Tabs 
        value={tab} 
        onChange={(e, tabValue) => handleChangeTab(tabValue)}
      >
        <Tab label={<FormatListBulletedIcon />} />
        <Tab label={<AccessTimeFilledIcon />} />
        <Tab label={<CheckIcon />} />
      </Tabs>
    </div>
  );
};

export default Actions;
