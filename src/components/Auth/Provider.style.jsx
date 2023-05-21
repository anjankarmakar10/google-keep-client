const SignInButton = ({ title, img, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="rounded-md border mx-auto flex  justify-center max-w-xs gap-[6px] items-center border-[#d0d0d0] text-[15px] bg-white h-10 text-[#6a6a6a] cursor-pointer hover:bg-[#f8f8f8] mb-[6px]"
    >
      <div className="w-[18px] ">
        <img src={img} alt={title} />
      </div>
      {title}
    </article>
  );
};

export default SignInButton;
