import React from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";

import { ModulesType } from "api/types";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 20px 0;
  .album {
    margin: 20px;
    img {
      max-width: 100%;
      margin:5px;
    }
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const Albums: React.FC = () => {
  const albums = useSelector((state: ModulesType) => state.albums);
  return (
    <Wrapper>
      {albums?.map(({ title, photos }, index) => (
        <div key={index + "album"} className="album">
          <Title>{title}</Title>
          <Wrapper>
            {!!photos?.length &&
              photos.map(({ thumbnailUrl }, index) => (
                <img key={index + "photos"} alt={title} src={thumbnailUrl} />
              ))}
          </Wrapper>
        </div>
      ))}
    </Wrapper>
  );
};
