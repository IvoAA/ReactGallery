import React from "react";
import {useStore} from "../store";
import styled from "styled-components";
import PhotoAlbum from "react-photo-album";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import photographers from "../data/photographers.json";
import photos from "../data/photos.json";

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 15px;

  img {
    width: 100%;
    padding: 0;
  }

  a {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 1.2rem;
    padding: 0.5rem;
    display: none; /* Hide the text by default */
  }

  svg {
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;

    top: 0.5rem;
    right: 0.5rem;

    color: #c50707;

    display: ${(props) => (props.liked ? 'block' : 'none')};
  }

  &:hover a {
    display: block;
  }

  &:hover svg {
    display: block;
  }
`;

const Liked = ({liked, toggle}) => {
    return liked ? <AiFillHeart onClick={toggle}/> : <AiOutlineHeart onClick={toggle}/>
}

const RenderHoverPhoto = ({ imageProps: { alt, style, ...restImageProps } }) => {
    const {likedImages, toggleLiked} = useStore()

    const src = restImageProps["src"]
    const link = photographers[src]["photographer_url"]
    const name = photographers[src]["photographer"]
    const liked = likedImages[src]

    return (
        <ImageContainer liked={liked}>
          <img alt={alt} {...restImageProps}/>
          <a href={link} target="_blank" rel="noreferrer">{name}</a>
          <Liked liked={liked} toggle={() => toggleLiked(src)}/>
        </ImageContainer>
    );
}  


const Gallery = (props) => {
    const likedImages = useStore((state) => state.likedImages)

    let toRender = props.liked ? photos.filter((img) => likedImages[img["src"]]) : photos

    return <PhotoAlbum layout="columns" photos={toRender} renderPhoto={RenderHoverPhoto}/>
}

export default Gallery