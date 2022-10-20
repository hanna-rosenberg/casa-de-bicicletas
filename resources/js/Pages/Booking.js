import { Link } from "@inertiajs/inertia-react";
import Calender from "../components/Calender/Calender.js";
import { useForm } from "@inertiajs/inertia-react";

export default function Booking({ rooms }) {
    const { data, setData, post } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        guests: 0,
        room_id: 0,
    });
    console.log(data);

    function submit(e) {
        e.preventDefault();
        post("/upload");
    }
    return (
        <div>
            <h1>Hello</h1>
            <p>Här kan gäster se lediga rum och dagar samt lägga bokningar</p>
            {rooms.map(function (room) {
                return (
                    <div value={data.room_id} key={room.id}>
                        <p>{room.name}</p>
                        <img width={100} src={room.image} alt="img" />
                        <p>{room.price + " kr"}</p>
                        <Link href={`/booking/${room.id}`}>
                            se tillgänglighet och bok
                        </Link>
                    </div>
                );
            })}
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={data.first_name}
                    onChange={(e) => setData("first_name", e.target.value)}
                    placeholder="Förnamn"
                />

                <input
                    type="text"
                    value={data.last_name}
                    onChange={(e) => setData("last_name", e.target.value)}
                    placeholder="Efternamn"
                />
                <input
                    type="text"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    placeholder="E-post"
                />
                <input
                    type="text"
                    value={data.mobile}
                    onChange={(e) => setData("mobile", e.target.value)}
                    placeholder="Mobilnummer"
                />
                <select
                    type="number"
                    value={data.guests}
                    onChange={(e) =>
                        setData("guests", parseInt(e.target.value))
                    }
                >
                    <option value="">Antal gäster</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <button type="submit">Välj rum</button>
            </form>
            <Calender />

            <Link href="/">Gå tillbaka</Link>
        </div>
    );
}
