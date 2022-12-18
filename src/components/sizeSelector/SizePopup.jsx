import React from "react";
import sizetable from "../../img/sizeGuide.png";

const SizePopup = () => {
  return (
    <div id="sizePopup" className="sizePopup">
      <a href="#fix" className="sizePopup__area">
        ""
      </a>
      <div className="sizePopup__body">
        <div className="sizePopup__content">
          <a href="#fix" className="sizePopup__close">
            X
          </a>
          <h1 className="sizePopup__title">Women`s clothing size guide</h1>
          <img className="sizePopup__img" src={sizetable} alt="sizetable" />
          <h4>Рекомендации по определению размера и выбору товара</h4>
          <p className="sizePopup__text">
            <strong></strong>
          </p>
          <p className="sizePopup__text">
            Измерить собственные параметры довольно просто. Для этого
            понадобится обычная сантиметровая лента и большое зеркало.
          </p>
          <ul className="sizePopup__list">
            <li>
              обхват груди:
              <p className="sizePopup__text">
                лента должна пройти по наиболее выступающим точкам груди, под
                подмышечными впадинами и по спине;
              </p>
            </li>
            <li>
              обхват талии:
              <p className="sizePopup__text">
                измеряется окружность в наиболее узком месте;
              </p>
            </li>
            <li>
              обхват бедер:
              <p className="sizePopup__text">
                ленту располагают строго параллельно полу, но при этом она
                должна пройти по наиболее выступающим точкам ягодиц.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SizePopup;
