const LoadApp = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="wrapper">
        <h1 className="w-full text-center text-back-pri">Cargando...</h1>
        <div className="cloud">
          <div className="cloud_left"></div>
          <div className="cloud_right"></div>
        </div>
        <div className="rain">
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
        </div>
        <div className="surface">
          <div className="hit"></div>
          <div className="hit"></div>
          <div className="hit"></div>
          <div className="hit"></div>
          <div className="hit"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadApp;
