import React from "react";
import { Spacer, Flex } from "@chakra-ui/react";

import { Header, Main, Cards, Footer } from "@components";
import useTranslation from "next-translate/useTranslation";

const Home: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Main />
      {t('welcome')}
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Home;
