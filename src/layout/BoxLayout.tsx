import { PropsWithChildren } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { ERROR_MESSAGE } from "../constants";

type BoxWrapper = {
  mainBoxCss: {};
  status: IStatus;
};

const BoxLayout = (props: PropsWithChildren<BoxWrapper>) => {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh" fontSize="20px">
      <Box sx={props.mainBoxCss}>
        {props.status.isLoading ?? "Loading..."}
        {props.status.isError ?? ERROR_MESSAGE}
        {props.children}
      </Box>
    </Flex>
  );
};

export default BoxLayout;
