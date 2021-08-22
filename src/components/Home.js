import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import client from "../client.js";
import qs from "qs";
import { Image } from "react-datocms"
import "../scss/blogs.scss"
import { MojContext } from "./Context.js";
const RECIPES_PER_PAGE = 10;

const Home = props => {
  const [recipes, setRecipes] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [skipping, setSkip] = useState(0);
  const [ilosc, setIlosc] = useContext(MojContext)

  useEffect(
    () => {
      setIsFetching(true);
      const skip =
        parseInt(
          qs.parse(props.location.search, { ignoreQueryPrefix: true }).skip,
          10
        ) || 0;
      setSkip(skip);
      const variables = {
        skip,
        first: RECIPES_PER_PAGE
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
    },
    [props.location.search]
  );

  return (
    <section className="blog-section">
      {/* <h1>{ilosc}</h1>
      <button onClick={() => setIlosc(ilosc +1)}>Dodaj do ilosci</button>
      <button onClick={() => setIlosc(ilosc -1)}>Odejmij od cyfry powyzej</button> */}
      <article className="Home-article">
        {recipes &&
          recipes.recipes.map(recipe => (
            <div className="Home-li" key={`recipe-${recipe.id}`}>
              <Link to={`/recipes/${recipe.slug}`} className="Home-link">
                <Image
                  className="Home-img"
                  data={recipe.coverImage.responsiveImage}
                />
                <div className="blog-details">
                  <h3 className="Home-li-title">{recipe.title}</h3>
                  <p>
                    {recipe.abstract
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}
                    ...
                  </p>
                </div>
              </Link>
            </div>
          ))}
      </article>
      {isFetching && <p className="Home-li-title">...Loading</p>}
      {recipes && recipes.meta.count > RECIPES_PER_PAGE && (
        <Link
          className="Home-button"
          disabled={isFetching}
          to={`?skip=${skipping + RECIPES_PER_PAGE}`}
        >
         Pokaż więcej wpisów...
        </Link>
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
    }
  }
`;

export default Home;
