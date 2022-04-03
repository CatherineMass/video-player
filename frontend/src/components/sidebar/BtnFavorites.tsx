import React from 'react';
import { AppProps } from '../../AppProps';

interface Props {
  onClickFav: AppProps['noParamVoid'];
}

const BtnFavorites: React.FC<Props> = ({ onClickFav }) => {
  return (
    <button className="btn-favorites" type="button" onClick={onClickFav}>
      My Favorites
    </button>
  );
};

export default BtnFavorites;
