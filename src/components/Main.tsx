import { Box, Flex, Button, Text, Image, Select } from "@chakra-ui/react";
import norris from "../public/img/norris.gif";
import useRequest from "../hooks/useRequest";
import { BASE_URL, CATEGORIES_URL } from "../utils/constants";
import { useState } from "react";
import BoxLayout from "../layout/BoxLayout";

const firstSelectedCategorie = "all";
const mainBoxCss = {
  backgroundColor: "rgb(156 56 40 / 95%)",
  padding: "40px",
  w: { base: "80%", md: "800px" },
  minHeight: "300px",
  h: { md: "300px" },
  position: "relative",
  borderRadius: "10px",
  boxShadow: "1px 1px 1px 10px #7b2a20",
  color: "white",
};

const Main = () => {
  const [currentCategorie, setCurrentCategorie] = useState<string>(
    firstSelectedCategorie
  );
  const { response, status, categories, getJoke } = useRequest(
    BASE_URL,
    CATEGORIES_URL,
    currentCategorie
  );

  return (
    <BoxLayout mainBoxCss={mainBoxCss} status={status}>
      <Image
        position="absolute"
        top="0"
        left="50%"
        transform=" translate(-50%, -112%)"
        w="60px"
        src={norris}
      ></Image>
      <Flex h="100%" flexDirection="column" justifyContent="space-between">
        <Box>
          <Text>{response && response.value}</Text>
        </Box>
        <Box
          display="flex"
          alignItems={{ base: "center", md: "flex-end" }}
          justifyContent="center"
          marginTop="20px"
          gap="10px"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Button
            onClick={() => getJoke(BASE_URL)}
            colorScheme="yellow"
            variant="solid"
            px="5"
          >
            Get a joke
          </Button>

          <Select
            variant="outline"
            w="auto"
            minW="200px"
            isDisabled={!categories ? true : false}
            value={currentCategorie}
            onChange={(e) => {
              setCurrentCategorie(e.target.value);
            }}
          >
            <option style={{ background: "#7b2a20" }} value="all">
              Random Categories
            </option>
            {categories &&
              categories.map((v: string, i: number) => (
                <option
                  key={`${v}_${i}`}
                  style={{ backgroundColor: "#cc5c3f" }}
                  value={v}
                >
                  {v}
                </option>
              ))}
          </Select>
        </Box>
      </Flex>
    </BoxLayout>
  );
};

export default Main;
