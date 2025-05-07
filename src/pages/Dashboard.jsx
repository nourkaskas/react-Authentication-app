import React from "react";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp9392113.jpg')",
      }}
    >
      <div className="w-full pt-10 px-4">
        <h1 className="text-3xl font-bold text-right mb-5 md:mb-4 lg:mb-6">
          :Yassmein AI مرحبا بك للانضام لمبادرة
        </h1>
        <div className="bg-black/60 rounded-xl p-10 max-w-4xl ml-auto text-white px-5">
          <div className="text-lg leading-relaxed text-right pt-15" dir="rtl">
            في إطار سعينا لتمكين وتأهيل الكوادر الشابة السورية في المرحلة
            العمرية المنتجة، والتي تظهر مؤشرات تميز واضحة في المجالات التقنية
            المتقدمة، نركز جهودنا على بناء قدرات نوعية في مجال تحليل البيانات
            الضخمة وتطبيقات التعلم الآلي، وذلك من خلال برامج تدريبية متخصصة
            وبيئات عمل محفزة تواكب أحدث التطورات في هذه الصناعات المعرفية التي
            تشكل ركيزة الاقتصاد الرقمي العالمي.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
