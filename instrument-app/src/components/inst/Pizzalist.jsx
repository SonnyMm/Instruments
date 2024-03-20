import Pizzacard from "./Pizzacard";
import { useEffect, useState } from "react";

function Pizzalist() {
    const [pizza, setPizza] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        async function fetchPizza() {
            try {
                setIsLoading(true);
                const res = await fetch(
                    "https://65f93f81df1514524610df80.mockapi.io/instrum"
                );
                const data = await res.json();
                setPizza(data);
            } catch (e) {
                console.error(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPizza();
    }, []);
    return (
        <section class="music-page">
            <div class="container">
                <h1 class="title">Гитары</h1>
                <div class="row">
                    {(pizza.map((pizza) => <Pizzacard pizza={pizza} />))}
                </div>
            </div>
        </section>
    )
}

export default Pizzalist;