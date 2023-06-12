import SignInButton from "./Provider.style";
import { useAuth } from "../../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GithubProvider = () => {
  const { signInWithGitHub } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const from = state?.path || "/";

  const handleSignIn = async () => {
    try {
      await signInWithGitHub();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <SignInButton
      onClick={handleSignIn}
      title={"Continue with Github"}
      img={
        "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"
      }
    />
  );
};

export default GithubProvider;
