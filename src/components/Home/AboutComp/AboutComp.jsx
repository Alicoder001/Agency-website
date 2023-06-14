import React from "react";
import { AboutCompStyled } from "./AboutComp.styled";

const AboutComp = () => {
  return (
    <AboutCompStyled>
      <div className="container aboutComp-container futura">
        <div className="info">
          <h1 className="info-title">Kompaniya haqida</h1>
          <p className="info-subt">
            Agentlik-bu mijozlarga o'z bizneslari uchun sifatli va innovatsion
            echimlarni taqdim etish maqsadida tashkil etilgan veb-agentlik.
            Bizning jamoamiz mijozlarga moslashtirilgan va sifatli mahsulotni
            taklif qilish uchun yaqin hamkorlikda ishlaydigan tajribali
            veb-dizayn, ishlab chiqish va marketing mutaxassislaridan iborat.
            <br />
            <br />
            Biz veb-dizayn, veb-sayt va mobil ilovalarni ishlab chiqish, SEO
            optimallashtirish, kontent yaratish va reklama kampaniyalarini o'z
            ichiga olgan keng ko'lamli xizmatlarni taklif etamiz. Biz eng yangi
            texnologiyalar va innovatsion usullardan foydalangan holda brendni
            rivojlantirish va sotishni ko'paytirish bilan shug'ullanamiz.
          </p>
        </div>
        <div className="category ">
          <div className="category-block">
            <div className="number">
              <h1 className="category-title">20+</h1>
              <p className="category-text">Проектов запустил</p>
            </div>
            <div className="year">
              <h1 className="category-title">4 года</h1>
              <p className="category-text">Опыта разработки</p>
            </div>
          </div>
          <div className="category-block">
            <div className="number">
              <h1 className="category-title">20+</h1>
              <p className="category-text">Проектов запустил</p>
            </div>
            <div className="year">
              <h1 style={{ fontWeight: 600 }} className="category-title">
                4 года
              </h1>
              <p className="category-text">Опыта разработки</p>
            </div>
          </div>
        </div>
      </div>
    </AboutCompStyled>
  );
};

export default AboutComp;
