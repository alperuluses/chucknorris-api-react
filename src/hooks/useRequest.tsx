import { useEffect, useState } from "react";
import axios from "axios";
import { Status } from "../utils/constants";

const useRequest = (
  BASE_URL: string,
  CATEGORIES_URL: string,
  currentCategorie: string
) => {
  const [response, setResponse] = useState<RandomResponse | null>(null);
  const [status, setStatus] = useState<Status | null>(null);
  const [categories, setCategories] = useState<Categories | null>(null);

  useEffect(() => {
    getJoke(BASE_URL);
    getCategories(CATEGORIES_URL); //Get categories for select box

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJoke = async (BASE_URL: string) => {
    setStatus("Loading");
    const createUrl =
      currentCategorie === "all"
        ? BASE_URL
        : `${BASE_URL}?category=${currentCategorie}`;

    // Axios usage with async-await
    try {
      const { data } = await axios<RandomResponse>(createUrl);
      setResponse(data);
      setStatus("Complated");
    } catch (error) {
      setStatus("Error");
    }
  };

  const getCategories = (CATEGORIES_URL: string) => {
    setStatus("Loading");

    // Axios usage with Promise
    axios
      .get<Categories>(CATEGORIES_URL)
      .then(function (response) {
        setCategories(response.data);
        setStatus("Complated");
      })
      .catch(function (error) {
        setStatus("Error");
      });
  };

  return { response, status, categories, getJoke };
};

export default useRequest;
