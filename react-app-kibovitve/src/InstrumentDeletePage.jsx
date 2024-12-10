import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function InstrumentDeletePage() {
  const navigate = useNavigate();
  const param = useParams();
  const id = param.hangszerId;

  const [instrument, setInstrument] = useState({});

  useEffect(() => {
    fetch(`https://kodbazis.hu/api/instruments/${id}`, { credentials: "include" })
      .then((res) => res.json())
      .then(setInstrument)
      .catch(console.log);
  }, []);

  const deleteInstrument = () => {
    fetch(`https://kodbazis.hu/api/instruments/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => navigate("/"))
      .catch(console.log);
  };

  return (
    <div className="p-5 text-center">
      <h2>Törlés</h2>
      <p>
        Biztosan törölni szeretné a(z) <strong>{instrument.name}</strong> hangszer
        adatait?
      </p>
      <button className="btn btn-danger" onClick={deleteInstrument}>
        Törlés
      </button>
    </div>
  );
}
