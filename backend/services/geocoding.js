import axios from "axios";

export const getLatLngFromLocation = async (location) => {
  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: location,
        format: "json",
        limit: 1,
      },
      headers: {
        "User-Agent": "ruraljobs-app",
      },
    }
  );

  
  

  if (!response.data || response.data.length === 0) {
    throw new Error("Invalid location");
  }

  return {
    lat: parseFloat(response.data[0].lat),
    lon: parseFloat(response.data[0].lon),
  };
};
