import React from "react";
import {Box,TabList,TabPanel,TabPanels,Tabs,Tab,SimpleGrid,Container} from "@chakra-ui/react"
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ItemDetails from "../../components/ItemDetails";
import ItemRequests from "../../components/ItemRequests/ItemRequests";
import ItemReports from "../../components/ItemReports/ItemReports"
import ItemsMap from "../../components/ItemsMap/ItemsMap";
import { useTranslation } from "react-i18next";



const SingleItemPage = () => {
  const { t } = useTranslation();
    return ( 
      <Container maxW="1080px" minH="600px" m="auto">
        <Box >
        <SimpleGrid  columns={2} spacingX="5px">
           <Box m="10px" p="10px">
               <ImageCarousel />
           </Box>
           {/* <Box><ItemDetails /></Box> */}
            <Box px={10}>
             <Tabs >
               <TabList justifyContent="space-around">
                    <Tab>{t("itemPage.details")}</Tab>
                    <Tab>{t("itemPage.requests")}</Tab>
               </TabList>
             <TabPanels>
                <TabPanel>
                    <ItemDetails /> 
                </TabPanel>
                <TabPanel>
                   {/* <ItemRequests /> */}
                    <ItemReports />
                </TabPanel>
             </TabPanels>
            </Tabs>
           </Box> 
        </SimpleGrid> 
        {/* <Box> */}
        {/* <ItemsMap /> */}
        {/* </Box>  */}
      </Box>
</Container>
     );
}
 
export default SingleItemPage;