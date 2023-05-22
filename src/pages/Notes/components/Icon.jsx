const Icon = ({ icon, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="w-8 h-8 rounded-full mx-2 grid place-content-center border border-transparent hover:bg-[rgba(95,99,104,0.157)] hover:opacity-[0.87] text-[#212121] mb-[-2px] cursor-pointer"
    >
      {icon}
    </article>
  );
};

export default Icon;
