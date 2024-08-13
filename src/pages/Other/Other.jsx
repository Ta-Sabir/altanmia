import "../Languages/Languages";
import { dif1, dif3, dif6, dif7 } from "../../assets";
import { useState } from "react";

const Other = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const enlargeImage = (imgSrc) => {
    setEnlargedImage(imgSrc);
  };

  const closeModal = () => {
    setEnlargedImage(null);
  };
  return (
    // START OTHER PAGE
    <section id="psychology" className="p-[20px] md:p-[80px]">
      <div className="container">
        <div className="main-title text-center">
          <h2 className="text-[#5262ad] text-[23px] font-semibold">
          اكتسب مهارات جديدة وتعمّق في معرفتك عبر دورات تدريبية متخصصة في مختلف المجالات
          </h2>
          <span className="text-[#636499] text-[18px] block mt-2">
            تعلم على يد نخبة من المدربين المعتمدين، واحصل على شهادة معترف بها
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center gap-2 pt-[40px]">
          <img
            onClick={() => enlargeImage(dif6)}
            src={dif6}
            alt="dif6"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
          <img
            onClick={() => enlargeImage(dif1)}
            src={dif1}
            alt="dif1"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
          <img
            onClick={() => enlargeImage(dif7)}
            src={dif7}
            alt="dif7"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
          <img
            onClick={() => enlargeImage(dif3)}
            src={dif3}
            alt="dif3"
            className="w-[280px] h-[370px] rounded-[3px]"
          />
        </div>
        <div className="main-title text-center mt-[60px]">
          <h2 className="text-[#5262ad] text-[22px] font-semibold">
            برنامج الدورات التدريبية المتكامل في مختلف المجالات
          </h2>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            مقدمة:
          </h2>
          <span className="block mt-4 text-black">
            يتضمن البرنامج مجموعة متنوعة من الدورات التدريبية المتخصصة التي تغطي
            العديد من المجالات الهامة. صُممت هذه الدورات لتلبي احتياجات المهنيين
            والمهتمين بتطوير مهاراتهم في مجالات متعددة، مع تقديم شهادات معتمدة
            لا يُذكر فيها أنها تمت عن بعد.
          </span>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            المدة:
          </h2>
          <ul className="mr-4">
            <li className="text-black"> حسب الدورة المختارة</li>
          </ul>
        </div>

        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            الدورات المتاحة:
          </h2>
          <ul className="mr-4">
            <li className="text-black">دورة المحاسبة المالية لغير المحاسبين</li>
            <li className="text-black">
              {" "}
              دورة مهارات متقدمة في في الاكسل EXCEL
            </li>
            <li className="text-black"> دورة مهارات تأسيس و تطوير الأوقاف</li>
            <li className="text-black"> دورة الباريستا</li>
            <li className="text-black">دورة فن الأنفوجرافيك </li>
            <li className="text-black"> دورة ادارة المشاريع الاحترافية PMP </li>
            <li className="text-black"> دورة ابداع الشموع </li>
            <li className="text-black">
              {" "}
              دورة استخدام الحاسب الآلي في الأعمال المكتبية{" "}
            </li>
            <li className="text-black">دورة الادارة المكتبية</li>
            <li className="text-black">دورة صناعة الاكسسوارات</li>
            <li className="text-black">دورة الادارة المكتبية المتقدمة</li>
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
            <li className="text-black"> تتراوح حسب الدورة المختارة.</li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            التسجيل:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              محاضرات مسائية مرنة تناسب جميع الأوقات.
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
    // END OTHER PAGE
  );
};

export default Other;
