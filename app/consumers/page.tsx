import ConsumersHero from '@/components/consumers/ConsumersHero';
import ConsumersMainSection from '@/components/consumers/ConsumersMainSection';

export const metadata = {
    title: 'Consumers',
    description: 'See what we do for consumers'
};

const ConsumersPage = () => {
    return (
        <div className="pt-20">
            <ConsumersHero />
            <ConsumersMainSection />
        </div>
    );
};

export default ConsumersPage;
