import { Layout } from '@ui-kitten/components';

// UI's
import tw from 'twrnc'

// Import Other Components
import Title from '../components/Start/Title';
import SelectCountry from '../components/Start/SelectCountryInput';
import CountryLists from '../components/Start/CountryLists';

const WelcomeScreen = () => {
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