import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Languages, Other, Psychology } from "./pages/index";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter location={"/"} navigator={undefined}>
      <div className="top-navbar flex items-center justify-center gap-[8px] bg-[#d5247b] p-[10px]">
        <p className="text-[var(--white-color)] flex items-center text-[16px] text-center">
          <div className="ml-[5px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9702 2.08398C15.0522 2.42648 17.4872 4.85982 17.8328 7.94398"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9702 5.03711C13.445 5.32378 14.5976 6.47794 14.8849 7.95378"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.20415 10.3943C12.526 13.7176 13.2796 9.87292 15.3946 11.988C17.4337 14.0279 18.6065 14.4367 16.0222 17.0213C15.6986 17.2815 13.6425 20.4125 6.41687 13.1837C-0.809669 5.95398 2.3173 3.89435 2.57744 3.57061C5.16716 0.978856 5.56943 2.15847 7.60848 4.19842C9.72263 6.3144 5.8823 7.071 9.20415 10.3943Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>{" "}
          رقم الواتس آب للتواصل : 0568450261
        </p>
        {/* <div className="w-[2px] h-[20px] bg-white"></div>
          <p className="text-[var(--white-color)] text-[16px] text-center">
              حسابنا على الأنستغرام :
          </p> */}
      </div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </main>
      <div className="footer bg-[#f4f8fd] p-[8px]">
        <div className="flex items-center justify-between">
          <p className="text-[#5262bf] text-[16px] mx-auto block">
            جميع الحقوق محفوظة © 2024
          </p>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
