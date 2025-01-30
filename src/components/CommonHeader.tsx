interface CommonHeaderProps {
    title: string;
}

const CommonHeader = ({ title = "" }: CommonHeaderProps) => {
    return (
        <header className="bg-white shadow">
            <div className="header-container">
                <h1 className="header-styled md:mb-5">{title}</h1>
            </div>
        </header>
    );
};

export default CommonHeader;
