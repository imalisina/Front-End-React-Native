import { Modal } from "react-native";

// UI
import { Layout } from "@ui-kitten/components";

// Redux
import { useSelector } from "react-redux";

// Other components
import CountryListItems from "./CountryListItems";

const CountryLists = () => {
  // Redux operations
  const { toggleStatus } = useSelector((state) => state.toggleStatusReducer);

  /*
  * Check the toggle status
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
