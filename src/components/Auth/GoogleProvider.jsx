import SignInButton from "./Provider.style";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleProvider = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const from = state?.path || "/";

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignInButton
      onClick={handleSignIn}
      title={"Continue with Google"}
      img={
        "https://www.evernote.com/redesign/OpenID/img/GGL_logo_googleg_18.png"
      }
    />
  );
};

export default GoogleProvider;
