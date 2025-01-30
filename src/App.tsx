import { useState } from "react";

import CommonHeader from "./components/CommonHeader";
import CommonCard from "./components/CommonCard";
import CommonModal from "./components/CommonModal";
import CommonModalForm from "./components/CommonModalForm";

import useFetchNotes from "./hooks/useGetNotes";

const App = () => {
    const { notesLength, notes, isLoading, isServerError } = useFetchNotes();

    return (
        <div className="min-h-full">
            <CommonHeader title={"Your Notes"} />
            <main aria-label="Note Lists">
                <div className="body-container">
                    <CommonModalForm />
                    <CommonModal
                        title="Feature 1"
                        content="Blue bottle crucifix vinyl post-ironic
                                        four dollar toast vegan taxidermy.
                                        Gastropub indxgo juice poutine."
                    />
                    <div className="flex flex-wrap mt-10 justify-center">
                        {notes.map(({ title, content }) => (
                            <CommonCard title={title} content={content} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
