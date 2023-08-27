import { useState } from "react";
import { humanize } from "@lib/utils/textConverter";
import { marked } from "marked";
import { AiOutlineArrowRight } from "react-icons/ai/index.js";
const JobPosts = ({ posts, categories, career: { title, subtitle } }) => {
  const [tab, setTab] = useState("");
  const filterPost = !tab
    ? posts
    : posts.filter((post) => post.data.categories.includes(tab));

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="mx-auto text-center lg:col-8">
            <h2>{title}</h2>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: marked.parseInline(subtitle) }}
            />
            <ul className="filter-list mt-8 flex flex-wrap items-center justify-center">
              <li>
                <span
                  className={`filter-btn ${
                    !tab ? "filter-btn-active" : undefined
                  } btn btn-sm cursor-pointer`}
                  onClick={() => setTab("")}
                >
                  Все услуги
                </span>
              </li>
              {categories.map((category, i) => (
                <li key={`category-${i}`} onClick={() => setTab(category)}>
                  <span
                    className={`filter-btn ${
                      tab === category ? "filter-btn-active bg-white" : undefined
                    } btn btn-sm bg-[#EDF7F3] cursor-pointer`}
                  >
                    {humanize(category)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row mt-12">
          {filterPost.map((post, i) => (
            <div className="mb-8 md:col-6" key={`post-${i}`}>
              <div className="rounded-xl bg-white p-5 shadow-lg lg:p-10">
                <h3 className="h4">{post.data.title}</h3>
                <p className="mt-6">{post.data.excerpt}</p>
                <ul className="mt-6 flex flex-wrap items-center text-dark">
                  
                  <li className="my-1 mr-8">
                    <a
                      className="inline-flex items-center font-semibold text-primary"
                      rel="prefetch-intent"
                      href={`/uslugi/${post.slug}`}
                    >
                      {post.data.page_name}
                      <AiOutlineArrowRight className="ml-1.5 text-xl font-bold" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobPosts;
