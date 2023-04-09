import React from "react";

const Links = (props) => {
  return (
    <div className="links">
      <a href={props.link}>{props.title}</a>
    </div>
  );
};

const MenuIcon = () => {
  return (
    <div className="menu-icon">
      <span className="material-symbols-outlined">apps</span>
    </div>
  );
};

const Avatar = () => {
  return (
    <div>
      <img
        src="https://lh3.googleusercontent.com/ogw/AAEL6sjr4yyFwZcQxpooKTEa5H-CPLkOHy2zn6dXFNUJ=s32-c-mo"
        alt="Avatar"
      />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Links link={"#"} title={"Gmail"} />
      <Links link={"#"} title={"Images"} />
      <MenuIcon />
      <Avatar />
    </div>
  );
};

export default Header;
