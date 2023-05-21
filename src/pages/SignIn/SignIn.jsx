import logo from "../../assets/logo.png";
import GithubProvider from "../../components/Auth/GithubProvider";
import GoogleProvider from "../../components/Auth/GoogleProvider";

const SignIn = () => {
  return (
    <section className="bg-[#F7FCF9] min-h-screen flex justify-center items-center">
      <article className="max-w-lg bg-white mx-auto shadow-md rounded-md w-full py-8">
        <div className="flex flex-col justify-center items-center mb-11">
          <img src={logo} className="w-12 mb-3" alt="" />
          <h1 className="mb-4 font-bold text-3xl logo-title">Google Keep</h1>
          <p>Remember everything important.</p>
        </div>
        <div>
          <GoogleProvider />
          <GithubProvider />
        </div>
      </article>
    </section>
  );
};

export default SignIn;
