import { useEffect } from "react";
import { ScrollView, View } from "react-native";

// UI's
import { Text } from "@ui-kitten/components";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchCountryLists } from "../../redux/CountriesList/actions";

// Bottom Sheet
import BottomSheet from "react-native-simple-bottom-sheet";

const CountryLists = () => {
  useEffect(() => {
    dispatch(fetchCountryLists());
    console.log(countryData);
  }, [toggleStatus]);

  // Redux Operations
  const { countryData } = useSelector((state) => state.countryDataReducer);
  const { toggleStatus } = useSelector((state) => state.toggleStatusReducer);
  const dispatch = useDispatch();

  return (
    <View>
      {!toggleStatus ? (
        <></>
      ) : (
        <BottomSheet sliderMinHeight={0} sliderMaxHeight={600}>
          {(onScrollEndDrag) => (
            <ScrollView onScrollEndDrag={onScrollEndDrag}>
              {countryData.length !== 0 ? (
                <View>
                  {countryData.map((country, index) => (
                    <Text key={index + Math.random()}>{country.name}</Text>
                  ))}
                </View>
              ) : null}
            </ScrollView>
          )}
        </BottomSheet>
      )}
    </View>
  );
};

export default CountryLists;
