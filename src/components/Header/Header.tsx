import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const makeStyles = () => ({
  container: {
    display: "flex",
    height: "60px",
    alignItems: "center",
    fontSize: "24px",
  },
  box: {
    flexGrow: "1",
    display: "flex",
    flexDirection: "row" as const,
  },
});

const Header = () => {
  const classes = makeStyles();
  return (
    <div style={classes.container}>
      <div style={classes.box}>
        <a>
          <Tooltip title="SOON">
            <span style={{ paddingRight: "16px" }}>About</span>
          </Tooltip>
        </a>
        <a>
          <Tooltip title="SOON">
            <span style={{ paddingRight: "16px" }}>Work</span>
          </Tooltip>
        </a>
        <a href="mailto:andre@asalmada.dev">
          <span>Contact</span>
        </a>
      </div>
      <div style={{ ...classes.box, justifyContent: "flex-end" }}>
        <a
          href="https://www.linkedin.com/in/andrealmada/"
          target="_blank"
          style={{ paddingRight: "8px" }}
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/asalmada" target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Header;
