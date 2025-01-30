import CommonHeader from "./components/CommonHeader";
import CommonCard from "./components/CommonCard";

const App = () => {
    return (
        <div className="min-h-full">
            <CommonHeader title={"Your Notes"} />
            <main aria-label="Note Lists">
                <div className="body-container">
                    <div className="flex flex-wrap mt-10 justify-center">
                        <CommonCard
                            title="Feature 1"
                            content="Blue bottle crucifix vinyl post-ironic
                                        four dollar toast vegan taxidermy.
                                        Gastropub indxgo juice poutine."
                        />
                        <CommonCard
                            title="Feature 1"
                            content="Blue bottle crucifix vinyl post-ironic
                                        four dollar toast vegan taxidermy.
                                        Gastropub indxgo juice poutine."
                        />
                        <CommonCard
                            title="Feature 1"
                            content="Blue bottle crucifix vinyl post-ironic
                                        four dollar toast vegan taxidermy.
                                        Gastropub indxgo juice poutine."
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
