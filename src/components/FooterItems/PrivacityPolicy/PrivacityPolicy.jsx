import React from "react";
import "./PrivacityPolicy.css"

const PrivacityPolicy = () => {
  return (
    <div>
      <h2 className="title-footer">Política de privacidad</h2>
      <p className="p-footer">
        En nuestro sitio web respetamos y cuidamos la privacidad de nuestros
        usuarios.{" "}
      </p>
      <p className="p-footer">
        Recopilamos cierta información personal como el nombre y la dirección de
        correo electrónico solo si los usuarios deciden proporcionarla
        voluntariamente a través de formularios de contacto o registro.
      </p>
      <p className="p-footer">
        No compartimos ni vendemos su información personal a terceros sin su
        consentimiento previo y explícito, excepto en los casos en que lo exija
        la ley.
      </p>
      <p className="p-footer">
        Si tiene preguntas o inquietudes sobre nuestra política de privacidad,
        no dude en contactarnos.
      </p>
    </div>
  );
};

export default PrivacityPolicy;
