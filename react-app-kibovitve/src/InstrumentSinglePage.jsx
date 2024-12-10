import { useEffect,useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export function InstrumentSinglePage(props) {

  const param = useParams();

  const id = param.hangszerId;

  const [instrument, setInstrument] = useState({});

  const [isPending, setPending] = useState(false);



//   return "instrument single";
  useEffect(() => {

	setPending(true);

	fetch(`https://kodbazis.hu/api/instruments/${id}`, { credentials: "include" })

	  .then((res) => res.json())

	  .then(setInstrument)

	  .catch(console.log)

	  .finally(() => {

		 setPending(false);

	  });

 }, []);

 return (

	<div className="p-5  m-auto text-center content bg-lavender">

	  {isPending || !instrument.id ? (

		 <div className="spinner-border"></div>

	  ) : (

		 <div className="card p-3">

			<div className="card-body">

			  <h4>{instrument.brand}</h4>

			  <h5 className="card-title">{instrument.name}</h5>

			  <div className="lead">{instrument.price} ft</div>

			  <p>Készleten: {instrument.quantity} db</p>

			  <img

				 className="img-fluid rounded"

				 style={{ maxHeight: "500px" }}

				 src={instrument.imageURL ? instrument.imageURL : "https://via.placeholder.com/400x800"}

			  />

			<NavLink key={instrument.id} to={"/edit-hangszer/" + instrument.id}>
				<button type="button" className="btn btn-primary">Szerkesztés</button>				
			</NavLink>
			
				<div>
			<NavLink key={instrument.id} to={"/delete-hangszer/" + instrument.id}>
				<button type="button" className="btn btn-primary">Törlés</button>				
			</NavLink>
				</div>
			</div>

		 </div>

	  )}

	</div>

 );
}