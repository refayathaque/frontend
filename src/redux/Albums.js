import { albumActions } from "../store/album-slice";
import { useDispatch, useSelector } from "react-redux";

function Albums() {
  const dispatch = useDispatch();

  const getAlbumsHandler = () => {
    dispatch(albumActions.getAlbums());
  };

  const albums = useSelector((state) => state.album.albums);

  return (
    <div>
      <p>Albums</p>
      <button onClick={getAlbumsHandler}>Get a list of albums</button>
      <ul>
        {albums.map((album) => (
          <li key={album}>{album}</li>
        ))}
      </ul>
    </div>
  );
}

export default Albums;
