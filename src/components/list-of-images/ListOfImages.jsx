import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Grid} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import Photo from "../photo/Photo";
import Loader from "../loader/Loader";

const SIZE = 50;

const ListOfImages = () => {
    const [data, setData] = useState([]);
    const [lastIndex, setLastIndex] = useState(0);
    const list = useSelector(state => state.photos.list);
    let partOfData = [];

    const getData = () => {
        partOfData = list.slice(lastIndex, lastIndex + SIZE);
        setData([...data, ...partOfData]);
        setLastIndex(lastIndex + SIZE);
    };

    useEffect(() => getData(), []);

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={getData}
            hasMore={true}
            loader={<Loader/>}
        >
            <Grid container justifyContent="flex-start" spacing={2}>
                {data && data.map(item => {
                    return (
                        <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                            <Photo img={item}/>
                        </Grid>
                    )
                })}
            </Grid>
        </InfiniteScroll>
    );
};

export default ListOfImages;
