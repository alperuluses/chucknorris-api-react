import { useEffect, useState } from "react";
import axios from "axios";
const useRequest = (
  BASE_URL: string,
  CATEGORIES_URL: string,
  currentCategorie: string
) => {
  const [response, setResponse] = useState<randomResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [categories, setCategories] = useState<categories | null>(null);

  useEffect(() => {
    requestOne(BASE_URL);
    getCategories(CATEGORIES_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [BASE_URL, CATEGORIES_URL]);

  const requestOne = (BASE_URL: string) => {
    setIsLoading(true);
    const createUrl =
      currentCategorie === "all"
        ? BASE_URL
        : `${BASE_URL}?category=${currentCategorie}`;
    axios
      .get<randomResponse>(createUrl)
      .then(function (response) {
        // handle success

        setResponse(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        setError(error.message);
        setIsLoading(false);
      });
  };

  const getCategories = (CATEGORIES_URL: string) => {
    setIsLoading(true);
    axios
      .get<categories>(CATEGORIES_URL)
      .then(function (response) {
        // handle success
        
        setCategories(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        setError(error.message);
        setIsLoading(false);
      });
  };

  return { response, error, isLoading, categories, requestOne };
};

export default useRequest;
