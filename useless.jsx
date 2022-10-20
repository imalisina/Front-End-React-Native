// // BOTTOM SHEET VIEW
// import { useRef } from 'react';
// import { Text, ScrollView } from 'react-native';

// // UI's
// import { Layout } from '@ui-kitten/components'

// // Bottom Sheet
// import BottomSheet from 'react-native-simple-bottom-sheet';

// function CountriesBottomSheet() {
//   const panelRef = useRef(null);

//   return (
//     <Layout style={{flex: 1}}>
//       <BottomSheet sliderMinHeight={50} isOpen>
//         {(onScrollEndDrag) => (
//           <ScrollView showsVerticalScrollIndicator={false} onScrollEndDrag={onScrollEndDrag}>
//             <Text>Country lists</Text>
//           </ScrollView>
//         )}
//       </BottomSheet>
//     </Layout>
//   );
// }

// export default CountriesBottomSheet;

// // FORM INPUT VIEW
// // UI's
// import tw from 'twrnc';
// import { MaterialIcons } from '@expo/vector-icons'; 
// import { Layout, Input } from '@ui-kitten/components';

// // Main Select Language Component
// const SelectCountry = () => {  
//   return (
//       <>
//         <Layout onTouchStart={() => console.log('should replace redux')} style={tw.style('mt-36')}>
//           <Input
//               style={tw.style('w-88 mx-auto border border-gray-300')}
//               textStyle={tw.style('text-lg py-2')}
//               placeholder='Select your country'
//               placeholderTextColor='#9ca3af'
//               selectionColor='gray'
//               disabled
//               size='large'
//               accessoryRight={<MaterialIcons name="keyboard-arrow-down" size={24} color='#9ca3af' />}/>
//         </Layout>
//       </>
//     )
// };

// export default SelectCountry;
