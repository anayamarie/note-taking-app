import { useState, useEffect } from "react";
import GetAllNotes from "../services/GetAllNotes";

const useFetchNotes = () => {
    const [notes, setNotes] = useState<[]>([]);
    const [notesLength, setNotesLength] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isServerError, setIsServerError] = useState<boolean>(false);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await GetAllNotes();
                if (res) {
                    const length = res.length;
                    setNotesLength(length);
                    setNotes(res);
                }
            } catch (err) {
                console.error("Empty Players", err);
                setIsServerError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchNotes();
    }, []);

    return {
        notesLength,
        notes,
        isLoading,
        isServerError,
    };
};

export default useFetchNotes;
