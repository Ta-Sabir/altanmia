import "./Languages.css";
import { english, image1, image2, image3, image4, sijil } from "../../assets";
import { useState } from "react";

const Languages = () => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const enlargeImage = (imgSrc) => {
    setEnlargedImage(imgSrc);
  };

  const closeModal = () => {
    setEnlargedImage(null);
  };
  return (
    // START LANGUAGES PAGE
    <section id="languages" className="p-[20px] md:p-[80px]">
      <div className="container">
        <div className="main-title text-center">
          <h2 className="text-[#5262ad] text-[23px] font-semibold">
            سجل الآن في برنامج تعلم اللغة الإنجليزية والصينية: دبلوم كامل ودورات
            شهرية متاحة للجميع
          </h2>
          <span className="text-[#636499] text-[18px] block mt-2">
            تعلم على يد نخبة من المدربين المعتمدين، واحصل على شهادة معترف بها
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center gap-2 pt-[40px]">
          <img onClick={() => enlargeImage(image1)} src={image1} alt="image1" className="w-[300px] h-[370px] rounded-[3px]" />
          <img onClick={() => enlargeImage(image2)} src={image2} alt="image2" className="w-[300px] h-[370px] rounded-[3px]" />
          <img
          onClick={() => enlargeImage(image3)}
            src={image3}
            alt="image3"
            className="w-[300px] h-[370px] rounded-[3px]"
          />
          <img
          onClick={() => enlargeImage(image4)}
            src={image4}
            alt="image4"
            className="w-[300px] h-[370px] rounded-[3px]"
          />
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            المدة المتاحة:
          </h2>
          <ul className="mr-4">
            <li className="text-black">سنة دبلوم</li>
            <li className="text-black">شهر دورة</li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            طريقة التقديم:
          </h2>
          <ul className="mr-4">
            <li className="text-black">يقدم عن بعد (أونلاين)</li>
            <li className="text-black">لا يُذكر في الشهادة أنها عن بعد</li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            لسداد الرسوم:
          </h2>
          <ul className="mr-4">
            <li className="font-bold">للدفع كاش:</li>
          </ul>
          <span className="block mt-2">
            - يمكن الدفع دفعة واحدة عبر حساب المؤسسة
          </span>
          <ul className="mr-4">
            <li className="font-bold">للدفع بالأقساط:</li>
          </ul>
          <span className="block mt-2">
            - المفاجأة: متاح دفع أقساط ميسرة عبر تابى، يتم التقسيط على 4 دفعات:
          </span>
          <ul className="mr-4">
            <li className="font-bold">
              الدفعة الأولى:{" "}
              <span className="font-normal">1000 ريال عند التسجيل</span>
            </li>
            <li className="font-bold">
              الدفعة الثانية:{" "}
              <span className="font-normal">1000 ريال في الشهر الأول </span>
            </li>
            <li className="font-bold">
              الدفعة الثالثة:{" "}
              <span className="font-normal">1000 ريال في الشهر الثاني</span>
            </li>
            <li className="font-bold">
              الدفعة الرابعة :{" "}
              <span className="font-normal"> 1000 ريال في الشهر الثالث </span>
            </li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            التوقيت:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              مسائي مرن، وكل مستوى يبدأ في وقت مختلف: (٤ أو ٥ أو ٦ أو ٧ مساءً){" "}
            </li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            المدربين:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              لم يتم تحديدهم حتى الآن، وهم من العرب والأفارقة.
            </li>
          </ul>
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            المميزات الإضافية:
          </h2>
          <ul className="mr-4">
            <li className="text-black font-bold">
              شهادات معتمدة:{" "}
              <span className="font-normal">
                ستحصل على شهادة معترف بها دون ذكر أنها تمت عن بعد.
              </span>
            </li>
            <li className="text-black font-bold">
              دعم فني :{" "}
              <span className="font-normal">
                {" "}
                يتوفر دعم فني على مدار الساعة للإجابة على أي استفسارات أو مشاكل
                قد تواجهها خلال الدورة.{" "}
              </span>
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
            صورة الشهادة المقدمة:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              يوجد صورة للشهادة التي سيحصل عليها المتدرب في النهاية :
            </li>
          </ul>
          <img
            onClick={() => enlargeImage(english)}
            src={english}
            alt="english"
            className="w-[600px] mt-5"
          />
        </div>
        <div className="content mt-8">
          <h2 className="text-[#5262ad] text-[19px] font-bold relative">
            السجل التدريبي:
          </h2>
          <ul className="mr-4">
            <li className="text-black">
              {" "}
              مرفقة صورة تحتوي على السجل التدريبي، تُظهر نقاط المتدرب وتقدمه في
              الدورة:
            </li>
          </ul>
          <img
            onClick={() => enlargeImage(sijil)}
            src={sijil}
            alt="sijil"
            className="w-[600px] mt-5"
          />
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
    // END LANGUAGES PAGE
  );
};

export default Languages;
