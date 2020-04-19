import React from "react";
import { useHistory } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Button from "@material-ui/core/Button";

export default function DashboardButton(props) {
  const { sessionUser } = props;
  let history = useHistory();

  const handleClickDashboard = () => {
    history.push(`/user/${sessionUser.id}/stats`);
  };

  return (
    <div>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={handleClickDashboard}
        startIcon={<DashboardIcon />}
      >
        My Dashboard
      </Button>
    </div>
  );
}
