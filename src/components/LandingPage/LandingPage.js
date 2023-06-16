import Header from "./Header/header";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const LandingPage = (props) => {
  const [taskCount, setTaskCount] = useState(0);

  const zeroTaskButtonHandler = (event) => {
    setTaskCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <Header />
        <Button
          sx={{
            fontSize: "32px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "0 auto",
            color: "aliceblue",
            backgroundColor: "#4d4dff",
            "&:hover": {
              backgroundColor: "blue",
            },
          }}
          endIcon={<AddIcon fontSize="64px" />}
          onClick={zeroTaskButtonHandler}
        >
          Add A New Task
        </Button>
    </div>
  );
};

export default LandingPage;
