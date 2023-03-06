import { PropsWithChildren } from "react";
import { Flex, Box } from "@chakra-ui/react";

type BoxWrapper = {
  mainBoxCss: {};
};
const BoxLayout = (props: PropsWithChildren<BoxWrapper>) => {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" fontSize="20px">
      <Box sx={props.mainBoxCss}>{props.children}</Box>
    </Flex>
  );
};

export default BoxLayout;
