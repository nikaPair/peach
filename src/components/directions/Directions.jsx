import React from "react";
import Card from "./ui/Card";

const Directions = () => {
    const items = [{
        text: 'Решения Softline',
        url:'src/assets/images/Decision.png',
        describe:'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.'
    },{
        text: 'Кибербезопасность',
        url:'src/assets/images/cyber.png',
        describe:'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. '
    },{
        text: 'Импортозамещение',
        url:'src/assets/images/import.png',
        describe:'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.'
    },{
        text: 'Облачные решения',
        url:'src/assets/images/cloud.png',
        describe:'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.'
    },{
        text: 'Цифровая трансформация и разработка ПО',
        url:'src/assets/images/OP.png',
        describe:'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.'
    },{
        text: 'Техническая поддержка Softline',
        url:'src/assets/images/support.png',
        describe:'200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.'
    }]
  return (
    <div className="directions">
      <div className="directions__container">
        <h2 className="directions__title"></h2>
        <div className="directions__items">
            {items.map((image, index)  => {
                return <Card key={index} text={image.text}  url={image.url} describe={image.describe}/>
            })}
        </div>
      </div>
    </div>
  );
};

export default Directions;
