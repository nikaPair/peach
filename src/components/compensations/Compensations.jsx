import React from "react";
import Item from "./ui/Item";
import "./compensations.scss";
const Compensations = () => {
  const compensationsItems = [
    { url: "src/assets/icons/kit.svg", description: "ДМС" },
    {
      url: "src/assets/icons/birthday.svg",
      description: "Выходной в день рождения",
    },
    { url: "src/assets/icons/phone.svg", description: "ДМС" },
    {
      url: "src/assets/icons/sport.svg",
      description: "Корпоративные скидки на спорт",
    },
    { url: "src/assets/icons/handshake.svg", description: "LTI" },
  ];
  const motivationItems = [
    { url: "src/assets/icons/print.svg", description: "Оргтехники" },
    { url: "src/assets/icons/phone.svg", description: "ДМС" },
    { url: "src/assets/icons/house.svg", description: "Ипотеки" },
  ];
  return (
    <div className="compensations">
      <div className="compensations__container">
        <h2 className="compensations__title">Компенсационный пакет</h2>
        <div className="compensations__pack">
          {compensationsItems.map((item, index) => {
            return <Item key={index} url={item.url} description={item.description} />;
          })}
        </div>
        <div className="compensations__motivation">
          <h3 className="compensations__heading">Программа дополнительной мотивации <span>доплата 12% от суммы</span></h3>
          <div className="compensations__icons">
            {motivationItems.map((item, index) => {
              return <Item key = {index + 9} url={item.url} description={item.description} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compensations;
