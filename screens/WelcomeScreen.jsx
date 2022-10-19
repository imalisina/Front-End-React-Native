import { Layout } from '@ui-kitten/components';

// Import Other Components
import Title from '../components/Start/Title';
import SelectCountry from '../components/Start/SelectCountry';

const WelcomePageContainer = () => {
    return (
        <Layout>
            <Title />
            <SelectCountry />
        </Layout>
    );
}

export default WelcomePageContainer;