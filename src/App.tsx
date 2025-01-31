import { useState } from "react";

import CommonHeader from "./components/CommonHeader";
import CommonCard from "./components/CommonCard";
import CommonModal from "./components/CommonModal";
import CommonModalForm from "./components/CommonModalForm";

import useFetchNotes from "./hooks/useGetNotes";

import RequestCreateNote from "./services/RequestCreateNote";
import RequestUpdateNote from "./services/RequestUpdateNote";
import RequestDeleteNote from "./services/RequestDeleteNote";
import { title } from "process";

const App = () => {
    const { notes, fetchNotes } = useFetchNotes();
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState<string>("");
    const [currentTitle, setCurrentTitle] = useState<string>("");
    const [currentContent, setCurrentContent] = useState<string>("");

    const showModal = (id?: string, title?: string, content?: string) => {
        setCurrentId(id || "");
        setCurrentTitle(title || "");
        setCurrentContent(content || "");
        setIsModalVisible((show) => !show);
    };

    const showModalForm = () => {
        setIsFormVisible((show) => !show);
    };

    const handleChangeTitle = (e: any, setValueTitle?: any) => {
        if (e?.target) {
            setValueTitle(e.target?.value);
        }
    };

    const handleChangeContent = (e: any, setValueContent?: any) => {
        if (e?.target) {
            setValueContent(e.target?.value);
        }
    };

    const createNote = async (title: string, content: string) => {
        try {
            const payload = { title, content };
            await RequestCreateNote({ payload });
            setIsFormVisible((show) => !show);
            fetchNotes();
        } catch (error) {
            console.log(error);
        }
    };

    const updateNote = async (id: string, title: string, content: string) => {
        try {
            const payload = { title, content };
            await RequestUpdateNote({ id, payload });
            setIsModalVisible((show) => !show);
            fetchNotes();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteNote = async (id: string) => {
        try {
            await RequestDeleteNote({ id });
            setIsModalVisible((show) => !show);
            fetchNotes();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-full">
            <CommonHeader
                title={"Your Notes"}
                showModalForm={() => showModalForm()}
            />
            <main aria-label="Note Lists">
                <div className="body-container">
                    {isFormVisible && (
                        <CommonModalForm
                            isFormVisible={isFormVisible}
                            showModalForm={() => showModalForm()}
                            createNote={createNote}
                            handleChangeTitle={handleChangeTitle}
                            handleChangeContent={handleChangeContent}
                        />
                    )}
                    {isModalVisible && (
                        <CommonModal
                            id={currentId}
                            title={currentTitle}
                            content={currentContent}
                            showModal={() => showModal()}
                            isVisible={isModalVisible}
                            updateNote={updateNote}
                            deleteNote={deleteNote}
                            handleChangeTitle={handleChangeTitle}
                            handleChangeContent={handleChangeContent}
                        />
                    )}
                    <div className="flex flex-wrap mt-10 justify-center">
                        {(notes || []).map(({ _id, title, content }) => (
                            <div>
                                <CommonCard
                                    title={title}
                                    content={content}
                                    showModal={() =>
                                        showModal(_id, title, content)
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
