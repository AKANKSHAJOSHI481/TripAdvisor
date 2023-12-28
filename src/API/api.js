import axios from "axios";


export const placesData = async () => {
  try {
    const { data } = await axios.get(
      "https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings?page=2&limit=10",
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
