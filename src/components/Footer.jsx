const Footer = () => {
    return (
        <footer className="w-full bg-gray-50 py-6 dark:bg-gray-900">
            <div className="flex items-center justify-center gap-1">
                <p className="text-sm text-gray-700 flex items-center dark:text-gray-300">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1 inline-block h-4 w-4"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M15 9.354a4 4 0 1 0 0 5.292" />
                    </svg>
                    2025 |&nbsp;
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/ngthanhvu"
                        className="underline underline-offset-4 transition-all hover:text-gray-900 active:text-gray-600"
                    >
                        Developer
                    </a>
                    &nbsp;with ❤️️ by NGTHANHVU
                </p>
            </div>
        </footer>
    );
};

export default Footer;
