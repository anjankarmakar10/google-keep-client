import React from "react";
import SignInButton from "./Provider.style";

const GoogleProvider = () => {
  return (
    <SignInButton
      title={"Continue with Google"}
      img={
        "https://www.evernote.com/redesign/OpenID/img/GGL_logo_googleg_18.png"
      }
    />
  );
};

export default GoogleProvider;
