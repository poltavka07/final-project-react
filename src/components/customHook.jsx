import { useDispatch, useSelector } from "react-redux";
import {
  favoritesAdd,
  favoritesRemove,
} from "../store/actions/favoritesActions";

function useIncludeInFavorites(id, value) {
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites);

  const inFavorites = () => {
    const result = favorites.filter((item) => item.id === id);

    if (result.length > 0) {
      return true;
    } else {
      return false;
    }
  };
  const toggleFavorites = () => {
    if (inFavorites()) {
      dispatch(favoritesRemove(value));
    } else {
      dispatch(favoritesAdd(value));
    }
  };

  return {
    inFavorites,
    toggleFavorites,
  };
}

export { useIncludeInFavorites };
