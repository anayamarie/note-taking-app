import { useState } from "react";

interface CommonModalFormProps {
    isFormVisible: boolean;
    showModalForm: () => void;
    createNote: (title: string, content: string) => void;
    handleChangeTitle: (e: Event, setValueTitle?: any) => void;
    handleChangeContent: (e: Event, setValueContent?: any) => void;
}

const CommonModalForm = ({
    isFormVisible = false,
    showModalForm,
    createNote,
    handleChangeTitle,
    handleChangeContent,
}: CommonModalFormProps) => {
    const [valueTitle, setValueTitle] = useState<string>("");
    const [valueContent, setValueContent] = useState<string>("");

    return (
        <div
            id="default-modal"
            tabIndex={-1}
            className={`${
                isFormVisible ? "" : "hidden"
            } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(70%-1rem)] max-h-full flex`}
        >
            <div className="relative p-4 w-full max-w-lg">
                <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border rounded-t dark:border-gray-600 border-gray-200">
                        <input
                            type="text"
                            id="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Note Title"
                            required
                            onChange={(e: any) =>
                                handleChangeTitle(e, setValueTitle)
                            }
                        />
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                            onClick={showModalForm}
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
                        <textarea
                            id="message"
                            rows={4}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Write your thoughts here..."
                            onChange={(e: any) =>
                                handleChangeContent(e, setValueContent)
                            }
                        ></textarea>
                    </div>
                    <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                            type="button"
                            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outlin  e-none focus:ring-blue-300 dark:bg-blue-600 dark:hov  er:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => createNote(valueTitle, valueContent)}
                        >
                            Add Note
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommonModalForm;
