import "../Languages/Languages";
import {
  nafs5,
  nafs6,
  nafs7,
  nafs8,
  pakage1,
  pakage2,
  pakage3,
  pakage4,
} from "../../assets";
import { useState } from "react";

const Psychology = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const enlargeImage = (imgSrc) => {
    setEnlargedImage(imgSrc);
  };

  const closeModal = () => {
    setEnlargedImage(null);
  };
  return (
    <section id="psychology" className="p-[20px] md:p-[80px]">
      <div className="container">
        <div className="main-title text-center">
          <h2 className="text-[#5262ad] text-[23px] font-semibold">
            اكتشف أسرار العقل: برامج ودورات شاملة في علم النفس لتعزيز معرفتك
            وتطوير مهاراتك المهنية والشخصية
          </h2>
          <span className="text-[#636499] text-[18px] block mt-2">
            تعلم على يد نخبة من المدربين المعتمدين، واحصل على شهادة معترف بها
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center gap-2 pt-[40px]">
          <img
            onClick={() => enlargeImage(nafs8)}
            src={nafs8}
            alt="nafs8"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
          <img
            onClick={() => enlargeImage(nafs7)}
            src={nafs7}
            alt="nafs7"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
          <img
            onClick={() => enlargeImage(nafs6)}
            src={nafs6}
            alt="nafs6"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
          <img
            onClick={() => enlargeImage(nafs5)}
            src={nafs5}
            alt="nafs5"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
        </div>
        <div className="main-title text-center mt-[60px]">
          <h2 className="text-[#5262ad] text-[22px] font-semibold">
            برنامج الدبلومات الشامل في علم النفس والعلاج النفسي
          </h2>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            مقدمة:
          </h2>
          <span className="block mt-4 text-black">
            يشمل البرنامج دورات متخصصة في العلاج النفسي والتحليل النفسي،
            والمعالجة المعرفية السلوكية. هذه الدورات تُمكنك من اكتساب المهارات
            اللازمة لتكون معالجاً نفسياً محترفاً، مع تقديم شهادات معتمدة من دون
            ذكر أنها تمت عن بعد.
          </span>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            المدة:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              تتراوح بين شهرين إلى 3 شهور حسب الكورس
            </li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            الدورات المتاحة:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              كورس تأسيسي في العلاج التحليلي الفرويدي
            </li>
            <li className="text-black">
              {" "}
              كورس العلاج المعرفي السلوكي (CBT) للمتخصصين
            </li>
            <li className="text-black">منحة علم النفس</li>
            <li className="text-black">كورس تعديل السلوك للأطفال</li>
            <li className="text-black">كورس الاضطرابات الشخصية</li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            مميزات البرنامج الشامل:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              <span className="font-bold"> شهادات معتمدة: </span>
              ستحصل على شهادة معترف بها لكل دورة دون ذكر أنها تمت عن بعد.
            </li>
            <li className="text-black">
              <span className="font-bold">دعم فني:</span>يتوفر دعم فني على مدار
              الساعة للإجابة على أي استفسارات.
            </li>
            <li className="text-black">
              <span className="font-bold">مرونة الدفع:</span>
              <br />
              -الدفع كاش عبر حساب المؤسسة.
              <br />- الدفع بأقساط ميسرة عبر تابى (4 دفعات متساوية).
            </li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            رسوم الدورات:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              تتراوح بين 499 ريال و1000 ريال لكل دورة.
            </li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            التسجيل:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              محاضرات مسائية مرنة بين الساعة 4 مساءً و7 مساءً.
            </li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            ملاحظة:
          </h2>
          <ul className="mr-4">
            <li className="text-black">الدورة متاحة للرجال والنساء.</li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            صور البكج:
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <img
              onClick={() => enlargeImage(pakage1)}
              src={pakage1}
              alt="pakage1"
              className="w-[300px] mt-5"
            />
            <img
              onClick={() => enlargeImage(pakage2)}
              src={pakage2}
              alt="pakage2"
              className="w-[300px] mt-5"
            />
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <img
              onClick={() => enlargeImage(pakage3)}
              src={pakage3}
              alt="english"
              className="w-[300px] mt-5"
            />
            <img
              onClick={() => enlargeImage(pakage4)}
              src={pakage4}
              alt="english"
              className="w-[300px] mt-5"
            />
          </div>
        </div>
        {enlargedImage && (
          <div className="modal" onClick={closeModal}>
            <img
              id="enlarged-image"
              src={enlargedImage}
              alt="Enlarged"
              className="max-w-screen-h-3/4 mx-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Psychology;
