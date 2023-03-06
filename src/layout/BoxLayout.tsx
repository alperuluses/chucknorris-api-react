import { PropsWithChildren } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { ERROR_MESSAGE, Status } from "../utils/constants";

type BoxWrapper = {
  mainBoxCss: {};
  status: Status;
};

const BoxLayout = (props: PropsWithChildren<BoxWrapper>) => {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" fontSize="20px">
      <Box sx={props.mainBoxCss}>
        {props.status === "Loading" && "Loading..."}
        {props.status === "Error" && ERROR_MESSAGE}
        {props.children}
      </Box>
    </Flex>
  );
};

export default BoxLayout;
