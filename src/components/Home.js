import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import client from "../client.js";
import qs from "qs";
import { Image } from "react-datocms";
import "../scss/blogs.scss";
import { MojContext } from "./Context.js";

import clock from "../assets/clock.svg";
import btnlist from "../assets/btn-list.svg"
const RECIPES_PER_PAGE = 10;

const Home = (props) => {
  const [recipes, setRecipes] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [skipping, setSkip] = useState(0);
  const [ilosc, setIlosc] = useContext(MojContext);

  useEffect(() => {
    setIsFetching(true);
    const skip =
      parseInt(
        qs.parse(props.location.search, { ignoreQueryPrefix: true }).skip,
        10
      ) || 0;
    setSkip(skip);
    const variables = {
      skip,
      first: RECIPES_PER_PAGE,
    };
    console.log(skip);
    const fetchData = async () => {
      try {
        const result = await client.request(query, variables);
        setRecipes(result);
        setIsFetching(false);
      } catch (error) {
        console.error(JSON.stringify(error, undefined, 2));
        setIsFetching(false);
      }
    };

    fetchData();
  }, [props.location.search]);

  return (
    <section className="blog-section">
      {/* <h1>{ilosc}</h1>
      <button onClick={() => setIlosc(ilosc +1)}>Dodaj do ilosci</button>
      <button onClick={() => setIlosc(ilosc -1)}>Odejmij od cyfry powyzej</button> */}
      <article className="Home-article">
        {recipes &&
          recipes.recipes.map((recipe) => (
            <div className="Home-li" key={`recipe-${recipe.id}`}>
              <Link to={`/wpisy/${recipe.slug}`} className="Home-link">
                <Image
                  className="Home-img"
                  data={recipe.coverImage.responsiveImage}
                />
                <div className="blog-details">
                  <h3 className="Home-li-title">{recipe.title}</h3>
                  <p>
                    {recipe.abstract.split(" ").slice(0, 20).join(" ")}
                    ...
                  </p>

                  <div className="author-profile">
                    <img
                      src={`${recipe.author.avatar.responsiveImage.src}`}
                      width="36px"
                      height="36px"
                      alt=""
                      className="author-avatar"
                    />{" "}
                    {recipe.author.name}{" "}
                    
                    <div>
                    <img src={clock} alt="" />
                      <span>{" "}
                      {recipe._firstPublishedAt.slice(0, 10)} |{" "}
                      {recipe._firstPublishedAt.slice(11, 19)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </article>
      {isFetching && <p className="Home-li-title">...wczytuje się 😎</p>}
      {recipes && recipes.meta.count > RECIPES_PER_PAGE && (
        <div className="button-wrapper">
        <Link
          className="Home-button"
          disabled={isFetching}
          to={`?skip=${skipping + RECIPES_PER_PAGE}`}
        >
         <img src={btnlist} alt="" /> Pokaż więcej wpisów
        </Link>
        </div>
      )}
    </section>
  );
};

const query = `
  query recipes($first: IntType!, $skip: IntType!) {
    meta: _allRecipesMeta {
      count
    }
    recipes: allRecipes(orderBy: _createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      slug
      abstract
      _firstPublishedAt
      coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 650, h: 300 }) {
          aspectRatio
          width
          sizes
          srcSet
          src
          webpSrcSet
          alt
          title
          base64
        }
      }
      author {
        _updatedAt
        avatar {
          author
          filename
          responsiveImage {
            src
          }
        }
        name
      }
    }
  }
`;

export default Home;
