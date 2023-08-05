const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="pic">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="err"
          />
          <h2>Keep</h2>
        </div>
        <div className="search">
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          <input placeholder="search" />
        </div>
      </div>
    </>
  );
};

export default Header;
