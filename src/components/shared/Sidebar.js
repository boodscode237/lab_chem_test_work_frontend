import {Link} from "react-router-dom";

export default function Aside() {
    const navItems = [
        {
            link: '/',
            label: "Dashboard",
            icon: (
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_5_209)">
                        <path d="M14.7025 16.0039H11.681V9.99414H6.70056V16.0039H3.67908V7.00586H2.68298V17H15.6986V7.00586H14.7025V16.0039ZM7.69666 16.0039V10.9902H10.6849V16.0039H7.69666ZM17.4916 6.47461L16.8939 7.27148L9.1908 1.62695L1.48767 7.27148L0.890015 6.47461L9.1908 0.365234L17.4916 6.47461Z" fill="#2196F3"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_5_209">
                            <rect width="17.2" height="17" fill="white" transform="matrix(1 0 0 -1 0.890015 17)"/>
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            link: '/',
            label: "Charts",
            icon: (
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 14.0039V15H0V14.0039H17ZM1.99219 7.99414H3.98438V13.0078H5.01367V6.99805H0.996094V13.0078H1.99219V7.99414ZM7.00586 5.00586H8.99805V13.0078H9.99414V4.00977H6.00977V13.0078H7.00586V5.00586ZM11.9863 0.988281H14.0117V13.0078H15.0078V-0.0078125H10.9902V13.0078H11.9863V0.988281Z" fill="#3F51B5"/>
                </svg>
            ),
        },
        {
            link: 'forms',
            label: "Forms",
            icon: (
                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3105 2.85547L12.8828 1.46094C12.3184 0.896484 11.3555 0.896484 10.791 1.46094L1.72656 10.5254L0 15.8047L5.24609 14.0449L14.3105 4.98047C14.875 4.38281 14.875 3.45312 14.3105 2.85547ZM1.85938 13.2812L2.52344 11.3223L4.44922 13.248L2.49023 13.9121L1.85938 13.2812ZM3.12109 10.5254L8.63281 5.01367L10.7246 7.13867L5.24609 12.6172L3.12109 10.5254ZM9.33008 4.31641L10.0605 3.58594L12.1523 5.71094L11.4219 6.44141L9.33008 4.31641ZM13.5801 4.2832L12.8828 4.98047L10.7578 2.88867L11.4883 2.1582C11.6875 1.95898 11.9863 1.95898 12.1855 2.1582L13.5801 3.55273C13.7793 3.75195 13.7793 4.08398 13.5801 4.2832Z" fill="#03A9F4"/>
                </svg>
            ),
        },
        {
            link: '/',
            label: "Tables",
            icon: (
                <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0078 1.98438H6.00977V0.988281H15.0078V1.98438ZM6.00977 3.01367V4.00977H17V3.01367H6.00977ZM0 -0.0078125H5.01367V5.00586H0V-0.0078125ZM0.996094 4.00977H3.98438V0.988281H0.996094V4.00977ZM15.0078 7.99414H6.00977V8.99023H15.0078V7.99414ZM6.00977 11.0156H17V9.98633H6.00977V11.0156ZM0 6.99805H5.01367V12.0117H0V6.99805ZM0.996094 11.0156H3.98438V7.99414H0.996094V11.0156Z" fill="#FF9800"/>
                </svg>
            ),
        },
        {
            link: 'login',
            label: "Apps",
            icon: (
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.01367 0V3.98438H17V0H5.01367ZM16.0039 2.98828H6.00977V0.996094H16.0039V2.98828ZM5.01367 9.99414H17V6.00977H5.01367V9.99414ZM6.00977 7.00586H16.0039V8.99805H6.00977V7.00586ZM5.01367 16.0039H17V11.9863H5.01367V16.0039ZM6.00977 13.0156H16.0039V15.0078H6.00977V13.0156ZM0 3.98438H3.98438V0H0V3.98438ZM0.996094 0.996094H2.98828V2.98828H0.996094V0.996094ZM0 9.99414H3.98438V6.00977H0V9.99414ZM0.996094 7.00586H2.98828V8.99805H0.996094V7.00586ZM0 16.0039H3.98438V11.9863H0V16.0039ZM0.996094 13.0156H2.98828V15.0078H0.996094V13.0156Z" fill="#009688"/>
                </svg>
            ),
        },
    ];

    return(
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {navItems.map((item, index) => (
                            <li key={index}>
                                {item.link ? (
                                    <Link to={item.link} >
                                        <a className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group">
                                            {item.icon}
                                            <span className="ml-3">{item.label}</span>
                                        </a>
                                    </Link>
                                ) : (
                                    <a
                                        href="#"
                                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover-bg-gray-700 group"
                                    >
                                        {item.icon}
                                        <span className="ml-3">{item.label}</span>
                                    </a>
                                )}
                            </li>
                        ))}
                </ul>
            </div>
        </aside>
    )
}