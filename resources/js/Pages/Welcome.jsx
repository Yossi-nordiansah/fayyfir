import { Head, Link } from '@inertiajs/react';
import Hero from '@/Components/home/Hero';
import Catalogue from '@/Components/home/Catalogue';
import StatsCounter from '@/Components/home/StatsCounter';
import CompanyValues from '@/Components/home/CompanyValues';
import CallToAction from '@/Components/home/CallToAction';
import Layout from '@/Components/home/Layout';
import MainLayout from '@/Layouts/MainLayout';

const Welcome = ({ auth, laravelVersion, phpVersion }) => {
    return (
        <>
            <Head title="Welcome" />
            <Hero />
            <Layout>
                <Catalogue />
                <StatsCounter />
                <CompanyValues />
                <CallToAction />
            </Layout>
        </>
    );
}

Welcome.layout = page => <MainLayout children={page} />;

export default Welcome;
