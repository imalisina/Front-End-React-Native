import { useEffect } from 'react';
import { Layout } from '@ui-kitten/components';

// Axios
import axios from 'axios';

// Import Other Components
import Title from './Title';
import SelectLanguage from './SelectLanguage';

const WelcomePageContainer = () => {
    return (
        <Layout>
            <Title />
            <SelectLanguage />
        </Layout>
    );
}

export default WelcomePageContainer;