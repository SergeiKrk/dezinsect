import { useState } from "react";
import { humanize } from "@lib/utils/textConverter";
import { marked } from "marked";
const JobPosts = ({ posts, categories, our_services: { title, subtitle } }) => {
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
                      tab === category ? "filter-btn-active" : undefined
                    } btn btn-sm cursor-pointer`}
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
            <div
              className="mb-2 md:col-6 lg:col-4 xl:col-3 lg:mb-8"
              key={`post-${i}`}
            >
              <a
                href={`/uslugi/${post.slug}`}
                rel="prefetch-intent"
                className="flex rounded-xl bg-white p-3 shadow-lg hover:bg-[#EDF7F3] hover:shadow-xl hover:grayscale-0 lg:p-4 lg:grayscale"
              >
                <div className="h-25 w-25 lg:w-30 lg:h-30 flex items-center justify-center text-red-500 lg:mr-4">
                  <svg
                    className="z-10"
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24"
                  >
                    <g transform="rotate(90 12 12)">
                      <path
                        fill="#ec6227"
                        d="M20.94 11A8.994 8.994 0 0 0 13 3.06V2c0-.55-.45-1-1-1s-1 .45-1 1v1.06A8.994 8.994 0 0 0 3.06 11H2c-.55 0-1 .45-1 1s.45 1 1 1h1.06A8.994 8.994 0 0 0 11 20.94V22c0 .55.45 1 1 1s1-.45 1-1v-1.06A8.994 8.994 0 0 0 20.94 13H22c.55 0 1-.45 1-1s-.45-1-1-1h-1.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"
                      ></path>
                    </g>
                  </svg>
                  <img
                    alt={post.data.altService}
                    className="w-100 h-100 absolute object-cover"
                    width={60}
                    height={60}
                    src={post.data.serviceIcon}
                  />
                </div>
                <div className="text-md inline-flex items-center font-semibold text-primary">
                  {post.data.page_name}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobPosts;
