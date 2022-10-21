import { useEffect } from "react";
import { ScrollView, View, Text } from "react-native";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCountryLists } from "../../redux/CountriesList/actions";
import { setToggle } from '../../redux/WelcomePageToggle/actions';

// Bottom Sheet
import BottomSheet from "react-native-simple-bottom-sheet";

// Other Components
import CountryListItems from "./CountryListItems";

const CountryLists = () => {
  useEffect(() => {
    dispatch(fetchCountryLists());
  }, []);

  // Redux Operations
  const { toggleStatus } = useSelector((state) => state.toggleStatusReducer);
  const dispatch = useDispatch();
  // Function to call the setToggle action for every onClose event on the bottom sheet
  const setToggleOnClose = () => {
    dispatch(setToggle())
  }

  return (
    <View>
      {toggleStatus ? (
        <BottomSheet onClose={() => setToggleOnClose()} sliderMinHeight={0} sliderMaxHeight={600}>
        {(onScrollEndDrag) => (
          <ScrollView showsVerticalScrollIndicator={false} onScrollEndDrag={onScrollEndDrag}>
              <View>
                <CountryListItems />
              </View>
          </ScrollView>
        )}
      </BottomSheet>
      ) : null
      }
    </View>
  );
};

export default CountryLists;
