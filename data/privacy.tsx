import Link from 'next/link';

import { LegalItem } from '@/types/legal';

export const privacyPolicies: LegalItem[] = [
    {
        slug: 'introduction',
        name: 'Introduction',
        content: () => (
            <>
                <p>
                    In this Privacy Policy, &apos;us&apos; &apos;we&apos; or
                    &apos;our&apos; means DocketRockit (ABN: 60 794 655 147). We
                    are committed to respecting your privacy. Our Privacy Policy
                    sets out how we collect, use, store and disclose your
                    personal information.
                </p>
                <p>
                    By providing personal information to us, you consent to our
                    collection, use and disclosure of your personal information
                    in accordance with this Privacy Policy and any other
                    arrangements that apply between us. We may change our
                    Privacy Policy from time to time by publishing changes to it
                    on our website. We encourage you to check our website
                    periodically to ensure that you are aware of our current
                    Privacy Policy.
                </p>
                <p>
                    Personal information includes information or an opinion
                    about an individual that is reasonably identifiable. For
                    example, this may include your name, age, gender, postcode
                    and contact details.
                </p>
                <p>
                    We may collect the following types of personal information:
                </p>
                <ul className="list-disc pl-20">
                    <li>name;</li>
                    <li>mailing or street address;</li>
                    <li>email address;</li>
                    <li>telephone number and other contact details;</li>
                    <li>age or date of birth;</li>
                    <li>credit card information;</li>
                    <li>
                        your device ID, device type, geo-location information,
                        computer and connection information, statistics on page
                        views, traffic to and from the sites, ad data, IP
                        address and standard web log information;
                    </li>
                    <li>
                        details of the products and services we have provided to
                        you or that you have enquired about, including any
                        additional information necessary to deliver those
                    </li>
                    <li>
                        products and services and respond to your enquiries;
                    </li>
                    <li>
                        any additional information relating to you that you
                        provide to us directly through our website or app or
                        indirectly through your use of our website or app or
                        online presence or through other websites or accounts
                        from which you permit us to collect information;
                    </li>
                    <li>
                        information you provide to us through customer surveys;
                        or
                    </li>
                    <li>
                        any other personal information that may be required in
                        order to facilitate your dealings with us.
                    </li>
                </ul>
            </>
        )
    },
    {
        slug: 'how-collect',
        name: 'How do we collect personal information?',
        content: () => (
            <>
                <p>
                    We may collect these types of personal information either
                    directly from you, or from third parties. We may collect
                    this information when you:
                </p>
                <ul className="list-disc pl-20">
                    <li>register on our website or app;</li>
                    <li>
                        communicate with us through correspondence, chats,
                        email, or when you share information with us from other
                        social applications, services or websites;
                    </li>
                    <li>
                        interact with our sites, services, content and
                        advertising; or
                    </li>
                    <li>
                        invest in our business or enquire as to a potential
                        purchase in our business.
                    </li>
                </ul>
                <p>
                    In addition, when you apply for a job or position with us we
                    may collect certain information from you (including your
                    name, contact details, working history and relevant records
                    checks) from any recruitment consultant, your previous
                    employers and others who may be able to provide information
                    to us to assist in our decision on whether or not to make
                    you an offer of employment or engage you under a contract.
                    This Privacy Policy does not apply to acts and practices in
                    relation to employee records of our current and former
                    employees, which are exempt from the Privacy Act.
                </p>
            </>
        )
    },
    {
        slug: 'why-collect',
        name: 'Why do we collect, use and disclose personal information?',
        content: () => (
            <>
                <p>
                    We may collect, hold, use and disclose your personal
                    information for the following purposes:
                </p>
                <ul className="list-disc pl-20">
                    <li>to enable you to access and use our website;</li>
                    <li>
                        to operate, protect, improve and optimise our website,
                        business and our users’ experience, such as to perform
                        analytics, conduct research and for advertising and
                        marketing;
                    </li>
                    <li>
                        to send you service, support and administrative
                        messages, reminders, technical notices, updates,
                        security alerts, and information requested by you;
                    </li>
                    <li>
                        to send you marketing and promotional messages and other
                        information that may be of interest to you, including
                        information sent by, or on behalf of, our business
                        partners that we think you may find interesting;
                    </li>
                    <li>
                        to administer rewards, surveys, contests, or other
                        promotional activities or events sponsored or managed by
                        us or our business partners;
                    </li>
                    <li>
                        to comply with our legal obligations, resolve any
                        disputes that we may have with any of our users, and
                        enforce our agreements with third parties; and
                    </li>
                    <li>to consider your employment application. </li>
                </ul>
                <p>
                    We may also disclose your personal information to a trusted
                    third party who also holds other information about you. This
                    third party may combine that information in order to enable
                    it and us to develop anonymised consumer insights so that we
                    can better understand your preferences and interests,
                    personalise your experience and enhance the products and
                    services that you receive.
                </p>
            </>
        )
    },
    {
        slug: 'direct-marketing',
        name: 'Do we use your personal information for direct marketing?',
        content: () => (
            <p>
                We and/or our carefully selected business partners may send you
                direct marketing communications and information about our
                product. This may take the form of emails, SMS, mail or other
                forms of communication, in accordance with the Spam Act and the
                Privacy Act. You may opt-out of receiving marketing materials
                from us by contacting us using the details set out below or by
                using the opt-out facilities provided (eg an unsubscribe link).
            </p>
        )
    },
    {
        slug: 'whom-disclose',
        name: 'To whom do we disclose your personal information?',
        content: () => (
            <>
                <p>
                    We may disclose personal information for the purposes
                    described in this privacy policy to:
                </p>
                <ul className="list-disc pl-20">
                    <li>our employees and related bodies corporate;</li>
                    <li>
                        third party suppliers and service providers (including
                        providers for the operation of our websites and/or our
                        business or in connection with providing our products
                        and services to you);
                    </li>
                    <li>professional advisers, dealers and agents;</li>
                    <li>
                        payment systems operators (eg merchants receiving card
                        payments);
                    </li>
                    <li>
                        our existing or potential agents, business partners or
                        partners;
                    </li>
                    <li>
                        our sponsors or promoters of any competition that we
                        conduct via our services;
                    </li>
                    <li>
                        anyone to whom our assets or businesses (or any part of
                        them) are transferred;
                    </li>
                    <li>
                        specific third parties authorised by you to receive
                        information held by us; and/or
                    </li>
                    <li>
                        other persons, including government agencies, regulatory
                        bodies and law enforcement agencies, or as required,
                        authorised or permitted by law.
                    </li>
                </ul>
            </>
        )
    },
    {
        slug: 'using-website',
        name: 'Using our website and cookies',
        content: () => (
            <>
                <p>
                    We may collect personal information about you when you use
                    and access our website.
                </p>
                <p>
                    While we do not use browsing information to identify you
                    personally, we may record certain information about your use
                    of our website, such as which pages you visit, the time and
                    date of your visit and the internet protocol address
                    assigned to your computer.
                </p>
                <p>
                    We may also use &apos;cookies&apos; or other similar
                    tracking technologies on our website that help us track your
                    website usage and remember your preferences. Cookies are
                    small files that store information on your computer, TV,
                    mobile phone or other device. They enable the entity that
                    put the cookie on your device to recognise you across
                    different websites, services, devices and/or browsing
                    sessions. You can disable cookies through your internet
                    browser but our websites may not work as intended for you if
                    you do so.
                </p>
                <p>
                    We may also use cookies to enable us to collect data that
                    may include personal information. For example, where a
                    cookie is linked to your account, it will be considered
                    personal information under the Privacy Act. We will handle
                    any personal information collected by cookies in the same
                    way that we handle all other personal information as
                    described in this Privacy Policy.
                </p>
            </>
        )
    },
    {
        slug: 'security',
        name: 'Security',
        content: () => (
            <>
                <p>
                    We may hold your personal information in either electronic
                    or hard copy form. We take reasonable steps to protect your
                    personal information from misuse, interference and loss, as
                    well as unauthorised access, modification or disclosure and
                    we use a number of physical, administrative, personnel and
                    technical measures to protect your personal information.
                </p>
                <p>
                    However, we cannot guarantee the security of your personal
                    information.
                </p>
            </>
        )
    },
    {
        slug: 'links',
        name: 'Links',
        content: () => (
            <p>
                Our website may contain links to websites operated by third
                parties. Those links are provided for convenience and may not
                remain current or be maintained. Unless expressly stated
                otherwise, we are not responsible for the privacy practices of,
                or any content on, those linked websites, and have no control
                over or rights in those linked websites. The privacy policies
                that apply to those other websites may differ substantially from
                our Privacy Policy, so we encourage individuals to read them
                before using those websites.
            </p>
        )
    },
    {
        slug: 'accessing',
        name: 'Accessing or correcting your personal information',
        content: () => (
            <>
                <p>
                    You can access the personal information we hold about you by
                    contacting us using the{' '}
                    <Link href="/contact" className="hover:text-primary">
                        contact us
                    </Link>
                    function. Sometimes, we may not be able to provide you with
                    access to all of your personal information and, where this
                    is the case, we will tell you why. We may also need to
                    verify your identity when you request your personal
                    information.
                </p>
                <p>
                    If you think that any personal information we hold about you
                    is inaccurate, please contact us and we will take reasonable
                    steps to ensure that it is corrected.
                </p>
            </>
        )
    },
    {
        slug: 'complaint',
        name: 'Making a complaint',
        content: () => (
            <p>
                If you think we have breached the Privacy Act, or you wish to
                make a complaint about the way we have handled your personal
                information, you can{' '}
                <Link href="/contact" className="hover:text-primary">
                    contact us
                </Link>
                . Please include your name, email address and/or telephone
                number and clearly describe your complaint. We will acknowledge
                your complaint and respond to you regarding your complaint
                within a reasonable period of time. If you think that we have
                failed to resolve the complaint satisfactorily, we will provide
                you with information about the further steps you can take.
            </p>
        )
    },
    {
        slug: 'contact',
        name: 'Contact Us',
        content: () => (
            <>
                <p>
                    For further information about our Privacy Policy or
                    practices, or to access or correct your personal
                    information, or make a complaint, please{' '}
                    <Link href="/contact" className="hover:text-primary">
                        contact us
                    </Link>
                    .
                </p>
                <p>Effective: 6th March, 2025</p>
            </>
        )
    }
];
