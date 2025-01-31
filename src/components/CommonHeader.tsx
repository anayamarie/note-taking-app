interface CommonHeaderProps {
    title: string;
    showModalForm: () => void;
}

const CommonHeader = ({ title = "", showModalForm }: CommonHeaderProps) => {
    return (
        <header className="bg-white shadow">
            <div className="header-container">
                <div className="inline-flex items-center justify-between w-full">
                    <h1 className="header-styled md:mb-5">{title}</h1>
                    <button
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={showModalForm}
                    >
                        Create Note
                    </button>
                </div>
            </div>
        </header>
    );
};

export default CommonHeader;
