import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const useRequest = (
  BASE_URL: string,
  CATEGORIES_URL: string,
  currentCategorie: string
) => {
  const newJoke = async () => {
    const createUrl =
      currentCategorie === "all"
        ? BASE_URL
        : `${BASE_URL}?category=${currentCategorie}`;
    const { data } = await axios<RandomResponse>(createUrl);
    return data;
  };
  const getCategories = async () => {
    const { data } = await axios<Categories>(CATEGORIES_URL);
    return data;
  };

  const {
    isError,
    isSuccess,
    isLoading,
    data,
    refetch: fetchNewJoke,
  } = useQuery(["jokeQuery"], newJoke, { refetchOnWindowFocus: false });

  const { isError: isErrorCategories, data: categoryData } = useQuery(
    ["categoriesQuery"],
    getCategories
  );

  return {
    isError,
    isSuccess,
    isLoading,
    data,
    isErrorCategories,
    categoryData,
    fetchNewJoke,
  };
};

export default useRequest;
