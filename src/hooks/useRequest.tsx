import { useEffect, useState } from "react";
import axios from "axios";
import { ERROR_MESSAGE } from "../utils/constants";

const useRequest = (
  BASE_URL: string,
  CATEGORIES_URL: string,
  currentCategorie: string
) => {
  const [response, setResponse] = useState<RandomResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<Categories | null>(null);

  useEffect(() => {
    getJoke(BASE_URL);
    getCategories(CATEGORIES_URL); //Get categories for select box

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJoke = async (BASE_URL: string) => {
    setIsLoading(true);
    const createUrl =
      currentCategorie === "all"
        ? BASE_URL
        : `${BASE_URL}?category=${currentCategorie}`;

    // Axios usage with async-await
    try {
      const { data } = await axios<RandomResponse>(createUrl);
      setResponse(data);
      setIsLoading(false);
    } catch (error) {
      setError(ERROR_MESSAGE);
      setIsLoading(false);
    }
  };

  const getCategories = (CATEGORIES_URL: string) => {
    setIsLoading(true);

    // Axios usage with Promise
    axios
      .get<Categories>(CATEGORIES_URL)
      .then(function (response) {
        setError(null);
        setCategories(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return { response, error, isLoading, categories, getJoke };
};

export default useRequest;
