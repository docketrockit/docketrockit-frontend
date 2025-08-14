import type { Metadata } from 'next';

import Hero from '@/components/team/Hero';
import TeamBlock from '@/components/team/TeamBlock';

export const metadata: Metadata = {
    title: 'Team',
    description: 'Learn about our team'
};

const page = () => {
    return (
        <div>
            <Hero />
            <TeamBlock />
        </div>
    );
};
export default page;
