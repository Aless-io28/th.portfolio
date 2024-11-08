const HeadCont = () => {
  return (
    <header className="relative">
      <div className="w-full h-44 xs:h-40 md:h-44"></div>
      <div className="absolute top-0 flex justify-between w-full overflow-hidden rounded-t-lg h-52 md:h-60 -z-10 md:top-4 bg-back-sec">
        <img
          src="/banner.jpg"
          alt=""
          className="object-cover object-bottom w-full h-full"
        />
      </div>
    </header>
  );
};

export default HeadCont;
