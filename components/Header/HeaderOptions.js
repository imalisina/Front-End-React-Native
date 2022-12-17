// Other Components
import HeaderContainer from "./HeaderContainer";

// Header option configs 
const HeaderOptions = {
    headerShown: true, 
    headerShadowVisible: false,
    headerBackVisible: false,
    headerBackButtonMenuEnabled: false,
    animation: 'simple_push',
    headerTitle: () => <HeaderContainer />
};

export default HeaderOptions;