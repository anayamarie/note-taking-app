interface CommonModalProps {
    title: string;
    content: string;
}

const CommonModal = ({
    title = "Sample Note",
    content = "The quick...",
}: CommonModalProps) => {
    return (
        <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden="true"
            className="hidden overflow-y-auto overflow-x-hidden fixed z-50 justify-center inset-auto items-center h-[calc(100%-1rem)] max-h-full"
            style={{ left: "50%", transform: "translate(-50%, 0)" }}
        >
            <div className="relative p-4 w-full max-w-sm">
                <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border rounded-t dark:border-gray-600 border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Sample Note
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The quick brown fox jumps over the lazy dog.
                        </p>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            type="button"
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outlin  e-none focus:ring-blue-300 dark:bg-blue-600 dark:hov  er:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Edit Note
                        </button>
                        <button
                            type="button"
                            className="px-3 py-2 ms-3 text-xs font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hov  er:bg-red-700 dark:focus:ring-red-800"
                        >
                            Delete Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonModal;
