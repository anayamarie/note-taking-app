interface CommonCardProps {
    title: string;
    content: string;
    showModal: () => void;
}

const CommonCard = ({
    title = "Sample Note",
    content = "The quick...",
    showModal,
}: CommonCardProps) => {
    return (
        <div className="p-4 w-96" onClick={showModal}>
            <div className="flex h-full bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-gray-700 dark:text-gray-400 ">
                        {content}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CommonCard;
