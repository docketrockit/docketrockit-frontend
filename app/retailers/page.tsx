import RetailersAbout from '@/components/retailers/RetailersAbout';
import RetailerBenefits from '@/components/retailers/RetailersBenefits';
import RetailersCallOut from '@/components/retailers/RetailersCallOut';
import RetailersCTA from '@/components/retailers/RetailersCTA';
import RetailersHero from '@/components/retailers/RetailersHero';

export const metadata = {
    title: 'Retailers',
    description: 'More about what we do for retailers'
};

const RetailersPage = () => {
    return (
        <div className="font-space demo32">
            <div className="box-layout">
                <div className="content-wrapper !bg-[rgba(254,254,254,1)] grow shrink-0">
                    <RetailersHero />
                    <RetailersAbout />
                    <RetailerBenefits />
                    <RetailersCallOut />
                    <RetailersCTA />
                </div>
            </div>
        </div>
    );
};

export default RetailersPage;
