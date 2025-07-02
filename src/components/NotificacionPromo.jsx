import React, { useState, useEffect } from "react";
import "../styles/NotificacionPromo.scss";
import { IoClose } from "react-icons/io5";

const NotificacionPromo = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      {visible && (
        <div className="notificacion-promo-flotante">
          <button className="cerrar-btn" onClick={() => setVisible(false)} aria-label="Cerrar notificación">
            <IoClose size={25} />
          </button>
          <p>🎉 ¡Hasta fin de julio! Paga con cualquier tarjeta de crédito. 💳</p>
        </div>
      )}
    </>
  );
};

export default NotificacionPromo;
