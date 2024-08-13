import "./Navbar.css";

const Navbar = () => {
  return (
    // START NAVBAR COMPONENT
    <>
      <nav className="navbar bg-white md:px-[65px] w-[100%]">
        <div className="container flex items-center justify-between">
          <div className="logo cursor-pointer">
            <a href="/">
              <svg
                fill="#d5247b"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="38px"
                height="64px"
                viewBox="0 0 65.403 65.402"
                xml:space="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M32.702,0C14.646,0,0,14.646,0,32.701c0,18.062,14.646,32.701,32.702,32.701c18.057,0,32.701-14.64,32.701-32.701 C65.403,14.646,50.758,0,32.702,0z M15.328,48.29c-0.985,0-1.785-0.794-1.785-1.779c0-0.652,0.367-1.195,0.896-1.505V28.707h1.779 v16.299c0.524,0.31,0.891,0.851,0.891,1.508C17.108,47.496,16.309,48.29,15.328,48.29z M47.971,41.876 c0,2.107-6.839,5.342-15.27,5.342c-8.43,0-15.27-3.234-15.27-5.342V31.351l15.27,5.452l15.27-5.452V41.876z M32.702,34.914 l-15.613-5.576l14.184-2.184c0.341,0.428,0.836,0.715,1.422,0.715c1.025,0,1.856-0.829,1.856-1.86c0-1.03-0.826-1.857-1.856-1.857 c-0.809,0-1.476,0.528-1.731,1.246l-17.396,2.677l-5.791-2.068l24.921-8.901l24.92,8.901L32.702,34.914z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </div>
          <div
            className="links items-center justify-between gap-[35px] hidden md:flex
          "
          >
            <a
              href="/"
              className="link relative text-[17px] font-semibold transition"
            >
              {" "}
              الرئيسية
            </a>
            <a
              href="/languages"
              className="link relative text-[17px] font-semibold transition"
            >
              {" "}
              دوراتنا
            </a>
            <a
              href="/other"
              className="link relative text-[17px] font-semibold transition"
            >
              {" "}
              معلومات
            </a>
            <a
              href="https://www.instagram.com/altanmia55/"
              target="_blank"
              className="link relative text-[17px] font-semibold transition"
            >
              {" "}
              تواصل معنا
            </a>
          </div>
          <a
              href="/"
              className="link relative text-[17px] font-semibold transition md:hidden"
            >
              {" "}
              الرئيسية
            </a>
        </div>
      </nav>
    </>
    // END NAVBAR COMPONENT
  );
};

export default Navbar;
