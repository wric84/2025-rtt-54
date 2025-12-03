import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CountryCard() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [border, setBorder] = useState([]);

  // FIRST useEffect — fetch main country
  useEffect(() => {
    const fetchCountry = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}`
      );
      const data = await response.json();
      setCountry(data[0]);
      console.log("Main country:", data[0]);
    };

    fetchCountry();
  }, [code]);

  // SECOND useEffect — fetch borders AFTER country loads
  useEffect(() => {
    if (!country || !country.borders) return;

    const fetchBorders = async () => {
      const borderPromises = country.borders.map((borderCode) =>
        fetch(`https://restcountries.com/v3.1/alpha/${borderCode}`)
          .then((res) => res.json())
          .then((data) => data[0]) // first element is the country object
      );

      const results = await Promise.all(borderPromises);
      setBorder(results);

      console.log("Border countries:", results);
    };

    fetchBorders();
  }, [country]);

  if (!country) return <h2>Loading...</h2>;

  return (
    <>
      <Link to="/">Back</Link>

      <h2>{country.name.common}</h2>
      <img src={country.flags.png} alt={country.name.common} />

      <h3>Population: {country.population}</h3>
      <h3>Region: {country.region}</h3>
      <h3>Capital: {country.capital}</h3>

      <h3>Border Countries:</h3>

      {border.length === 0 && <p>No borders</p>}

      {border.map((b) => (
        <Link key={b.cca3} to={`/country/${b.cca3}`}>
          <h4>{b.name.common}</h4>
        </Link>
      ))}
    </>
  );
}

export default CountryCard;