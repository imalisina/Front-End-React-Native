import { Modal } from "react-native";

// UI's
import { Layout } from "@ui-kitten/components";

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
          <CountryListItems />
        </Modal>
      </Layout>
    )} else (<></>)
};

export default CountryLists;
