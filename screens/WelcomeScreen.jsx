import { useEffect } from 'react';

// UI's
import tw from 'twrnc'
import { Layout } from '@ui-kitten/components';

// Redux
import { useDispatch } from 'react-redux';
import { storeNavigationProp } from '../redux/Navigator/actions';

// Import Other Components
import Title from '../components/Start/Title';
import SelectCountry from '../components/Start/SelectCountryInput';
import CountryLists from '../components/Start/CountryLists';

const WelcomeScreen = ({navigation}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(storeNavigationProp(navigation));
    });

    return (
        <>
        <Layout style={tw.style('h-full')}>
            <Title />
            <SelectCountry />
        </Layout>
        <CountryLists />
        </>
    );
}

export default WelcomeScreen;