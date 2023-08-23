import { Paper, Typography } from "@mui/material";
import scss from "./Hero.module.scss";

const Hero = () => {
  return (
    <Paper className={scss.Hero} elevation={5}>
      <Typography>Welcome to ProsperMind Learning</Typography>
    </Paper>
  );
};

export default Hero;
