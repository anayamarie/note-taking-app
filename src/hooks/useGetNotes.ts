import { useState, useEffect } from "react";
import RequestGetAllNotes from "../services/RequestGetAllNotes";

const useFetchNotes = () => {
    const [notes, setNotes] = useState<[]>([]);
    const [notesLength, setNotesLength] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isServerError, setIsServerError] = useState<boolean>(false);

    const fetchNotes = async () => {
        try {
            const res = await RequestGetAllNotes();
            if (res) {
                const length = res.length;
                setNotesLength(length);
                setNotes(res);
            }
        } catch (err) {
            console.error("Empty Notes", err);
            setIsServerError(true);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return {
        notesLength,
        notes,
        isLoading,
        isServerError,
        fetchNotes,
    };
};

export default useFetchNotes;
