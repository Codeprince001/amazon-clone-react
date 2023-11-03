import { useState } from 'react';
import { useEffect } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import "./ip.css";

let cachedData = null;

const fetchIPAdress = () => {
  const [country, setCountry] = useState();
  const [flag, setFlag] = useState();
  const [countryCode, setCountyCode] = useState();

  useEffect(() => {
    let isMountted = true;
    const fetchApi = async () => {
      const url = 'https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '865ca02b23mshb0fdf1369d78fe0p13125cjsnf6fc938bc736',
          'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (isMountted) {
          cachedData = result;
          setCountry(result.country);
          setFlag(result.flag);
          setCountyCode(result.countryISO2);
          console.log(result.countryISO2);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();

    return () => {
      isMountted = false;
    };
  }, []);

  return { flag, country, countryCode };
};

export const IPAdress = () => {
  const { country } = fetchIPAdress();

  return (
    <div className='location'>
      <HiOutlineLocationMarker className='location-icon' />
      <div className='deliver-to-country'>
        <span className='deliver-to'>Deliver to</span>
        <span className='country'>
          {country}</span>
      </div>

    </div>
  );
};

export const FlagIcon = () => {

  const { flag, countryCode } = fetchIPAdress();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>

      <img src={flag}
        width="30px"
        alt='flag'
        style={{ marginLeft: "15px", marginRight: "2px" }} />
      <span style={{ fontWeight: "700" }}>{countryCode}</span>
    </div>
  );
};
