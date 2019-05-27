import React from "react";

const Komtek = props => {
  const { name, image, msg, tel, email } = props.data;
  // const { name } = props.data;
  return (
    <>
      <div className="contact-box">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="wraper-box">
          <div className="name">{name}</div>
          <div className="msg">{msg}</div>
          <div className="tel">Tlf. {tel}</div>
          <div className="email">{email}@norkart.no</div>
          <form>
            <textarea
              placeholder={`Skriv en kort beskjed til ${name} her, så tar han/hun kontakt`}
            />
            <input type="email" name="" id="" placeholder="Din e-post" />
            <label>
              <input type="checkbox" className="check" />
              <p>
                Jeg samtykker til at Norkart kan kontakte meg med relevant
                informasjon. <br />
                <span>Les vår personvernerklæring</span>
              </p>
            </label>
            <button>Send beskjed</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Komtek;
