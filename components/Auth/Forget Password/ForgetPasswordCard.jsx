import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';

// UI
import tw from 'twrnc';
import { Layout } from '@ui-kitten/components';

// Other components
import ForgetPasswordContents from './ForgetPasswordContents';

// Get device dimension
const { height, fontScale } = Dimensions.get("window");

// Set flexible margin numbers for bottom menu
const bottomMargin = height >= 660 ? height * 0.45 : height * 0.37;

const ForgetPasswordCard = ({ navigation }) => {
    return (
        <Layout style={[styles.cardContainer, tw.style('mx-auto')]}>
            <Text style={[tw.style('mx-auto'), styles.cardHeader]}>Password Recovery</Text>
            <Text style={[tw.style('mx-auto text-zinc-400'), styles.cardSubHeader]}>
                Select one method of the methods
            </Text>
            <ForgetPasswordContents />
            {/* Menus in the bottom */}
            <Layout style={styles.bottomMenuContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.bottomMenuItem}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.bottomMenuItem}>Create account</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NeedHelp")}>
                    <Text style={styles.bottomMenuItem}>Need help ?</Text>
                </TouchableOpacity>
            </Layout>
        </Layout>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: height,
        marginTop: '6%',
    },
    cardHeader: {
        fontSize: height * 0.04 / fontScale,
        marginBottom: "2%",
        marginTop: "4%",
    },
    cardSubHeader: {
        fontSize: 14 / fontScale,
        marginBottom: "2%",
    },
    bottomMenuContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: bottomMargin
    },
    bottomMenuItem : {
       color: '#9ca3af'
    },
});

export default ForgetPasswordCard;