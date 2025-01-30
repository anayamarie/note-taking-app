import axios from "axios";
const API_URL: string = process.env.REACT_APP_API_URL as string;

export default async ({ payload = {} }: { payload: {} }) => {
    const cancelToken = axios.CancelToken;
    const sourceToken = cancelToken.source();
    const URL = `${API_URL}/notes`;
    try {
        const res = await axios
            .post(
                URL,
                { payload },
                {
                    cancelToken: sourceToken.token,
                },
            )
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log(
                        `Request Cancelled from API Request: ${URL}`,
                        error.message,
                    );
                    sourceToken.cancel(
                        "Operation Cancelled due to request is cancelled",
                    );
                    throw error;
                } else {
                    console.log(`"Error in API Request: ${URL}`, error.message);
                    sourceToken.cancel("Operation Cancelled due to error");
                    throw error;
                }
            });

        if (res?.status !== 201) {
            console.error("Unexpected result.");
            sourceToken.cancel("Operation Cancelled due to Unexpected Result");
            return;
        }

        return res?.data;
    } catch (err) {
        sourceToken.cancel("Operation Cancelled due to error");
        console.error(err);
    }
};
