import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navigation">
      <Button
        className="dropdown"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Here comes the logo
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Events</MenuItem>
        <MenuItem onClick={handleClose}>Contacts</MenuItem>
      </Menu>
      <div className="searchbar">
        <input type="text" placeholder="Search.."></input>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {})(Navigation);
