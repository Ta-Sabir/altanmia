import { image1, nafs4, dif6 } from "../../assets";

const Courses = () => {
  return (
    // START COURSES COMPONENT
    <div id="courses" className="course pb-[80px]">
      <div className="container">
        <div className="main-title text-center">
          <h2 className="text-[#5262ad] text-[38px] font-bold">
            دورات مختارة لكم
          </h2>
          <span className="text-[#636499] text-[18px] block mt-2">
            من أقوى الدورات المقدمة التي تقوي السيرة الذاتية بشدة و تدعم الوظائف
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-[60px]">
          <div className="card bg-white mx-auto max-w-fit h-full py-[15px] px-[20px] rounded-[3px]">
            <div>
              <div>
                <a href="/languages">
                  <div>
                    <img
                      className="w-[290px] rounded-[3px]"
                      src={image1}
                      alt="image1"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="bg-[#d7f7f3] text-[#33746a] text-[14px] py-[5px] px-[15px] rounded-[3px] mt-3">
                <span>اللغات الأجنبية و موارد بشرية </span>
              </div>
              <h4 className="text-[#5262ad] text-[18px] font-semibold">
                <a href="">
                  دبلوم اللغة الانجليزية والصينية يقدم عن <br />
                  بعد ( اونلاين)
                </a>
              </h4>
              <span className="bg-[#5262ad] w-full h-[2px]"></span>
              <div className="flex items-center justify-between w-full">
                <a
                  href="https://www.instagram.com/altanmia55/"
                  target="_blank"
                  className="hover:underline"
                >
                  <span className="text-[#5262ad]">تواصل معنا </span>
                </a>
                <a href="/languages" className="hover:underline">
                  <span className="text-[#5262ad]">تفاصيل أكثر</span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-white mx-auto max-w-fit h-full py-[15px] px-[20px] rounded-[3px]">
            <div>
              <div>
                <a href="/psychology">
                  <div>
                    <img
                      className="w-[290px] h-[370px] rounded-[3px]"
                      src={nafs4}
                      alt="nafs4"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="bg-[#d7f7f3] text-[#33746a] text-[14px] py-[5px] px-[15px] rounded-[3px] mt-3">
                <span> علم النفس </span>
              </div>
              <h4 className="text-[#5262ad] text-[18px] font-semibold">
                دورات تدريبية في علم النفس: تعزيز <br />
                المعرفة وتنمية المهارات
              </h4>
              <span className="bg-[#5262ad] w-full h-[2px]"></span>
              <div className="flex items-center justify-between w-full">
                <a
                  href="https://www.instagram.com/altanmia55/"
                  target="_blank"
                  className="hover:underline"
                >
                  <span className="text-[#5262ad]">تواصل معنا </span>
                </a>
                <a href="/psychology" className="hover:underline">
                  <span className="text-[#5262ad]">تفاصيل أكثر</span>
                </a>
              </div>
            </div>
          </div>
          <div className="card bg-white mx-auto max-w-fit h-full py-[15px] px-[20px] rounded-[3px]">
            <div>
              <div>
                <a href="/other">
                  <div>
                    <img
                      className="w-[290px] h-[370px] rounded-[3px]"
                      src={dif6}
                      alt="dif6"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="bg-[#d7f7f3] text-[#33746a] text-[14px] py-[5px] px-[15px] rounded-[3px] mt-3">
                <span>دورات تدريبية في مجالات مختلفة</span>
              </div>
              <h4 className="text-[#5262ad] text-[18px] font-semibold">
                دورات تدريبية متنوعة: اكتشف مهارات
                <br /> جديدة في مختلف المجالات
              </h4>
              <span className="bg-[#5262ad] w-full h-[2px]"></span>
              <div className="flex items-center justify-between w-full">
                <a
                  href="https://www.instagram.com/altanmia55/"
                  target="_blank"
                  className="hover:underline"
                >
                  <span className="text-[#5262ad]">تواصل معنا </span>
                </a>
                <a href="/other" className="hover:underline">
                  <span className="text-[#5262ad]">تفاصيل أكثر</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // END COURSES COMPONENT
  );
};

export default Courses;
