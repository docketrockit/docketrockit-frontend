import Link from 'next/link';
import Image from 'next/image';

import Nav from './Nav';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg center-nav transparent position-absolute navbar-light caret-none">
                <div className="container xl:!flex-row lg:!flex-row !flex-nowrap items-center">
                    <div className="navbar-brand w-full">
                        <Link href={`/`}>
                            <Image
                                alt="image"
                                src="/assets/img/DocketRockitLogoHorizontal.png"
                                width={134}
                                height={26}
                            />
                        </Link>
                    </div>
                    <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
                        <div className="offcanvas-header xl:!hidden lg:!hidden flex items-center justify-between flex-row p-6">
                            <h3 className="!text-white xl:!text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                                DocketRockit
                            </h3>
                            <button
                                type="button"
                                className="btn-close btn-close-white !mr-[-0.75rem] m-0 p-0 leading-none !text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:text-white before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:!flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)]"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex flex-col !h-full">
                            <Nav color="#7cb798" />
                        </div>
                    </div>
                    <div className="navbar-other w-full !flex !ml-auto">
                        <ul className="navbar-nav !flex-row !items-center !ml-auto">
                            <li className="nav-item xl:!hidden lg:!hidden">
                                <button className="hamburger offcanvas-nav-btn">
                                    <span />
                                </button>
                            </li>
                        </ul>
                        {/* /.navbar-nav */}
                    </div>
                    {/* /.navbar-other */}
                </div>
                {/* /.container */}
            </nav>
            {/* /.navbar */}

            {/* /.offcanvas */}
        </header>
    );
};

export default Header;
