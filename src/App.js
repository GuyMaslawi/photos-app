import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import GlobalStyle from "./GlobalStyle";
import {Content} from "./AppStyle";
import {fetchAllPhotos} from "./store/photosSlice";
import {Header, Loader, ListOfImages} from "./components";

const App = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.photos.loading);

    useEffect(() => {
        dispatch(fetchAllPhotos());
    }, [dispatch]);

    return (
        <div>
            <GlobalStyle/>
            <Header title="Photos"/>
            <Content>
                {isLoading ? <Loader/> : <ListOfImages/>}
            </Content>
        </div>
    );
};

export default App;
