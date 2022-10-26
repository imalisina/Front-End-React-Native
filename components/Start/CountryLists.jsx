import { Modal } from "react-native";

// UI's
import tw from 'twrnc';
import { Layout, Text } from "@ui-kitten/components";

// Redux
import { useSelector } from "react-redux";

// Other Components
import CountryListItems from "./CountryListItems";

const CountryLists = () => {
  // Redux Operations
  const { toggleStatus } = useSelector((state) => state.toggleStatusReducer);

  /**
   * Check the toggle status
   * If it was true the modal will be open
   * but, if the status was false it will be closed
   * NOTE: it is faster than inline if statement 
   * **The inline if statement has a little bit delay!**
   */
  if (toggleStatus) {
    return (
      <Layout>
        <Modal animationType="slide" visible={toggleStatus}>
          <Text category="h2" style={tw.style('mt-9 mb-4 ml-2')}>Select Your Country</Text>
          <CountryListItems />
        </Modal>
      </Layout>
    )} else (<></>)
};

export default CountryLists;
