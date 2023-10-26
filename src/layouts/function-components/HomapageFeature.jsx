import { humanize } from "@lib/utils/textConverter";
import * as Icon from "react-feather";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="row flex justify-center">
      {feature_list.map((item, i) => (
        <div className="col-6 mb-8 lg:col-4 xl:col-3">
          <a
            href={`/uslugi/${item.url}`}
            key={i}
            rel="prefetch-intent"
            className="flex rounded-xl bg-[#EDF7F3] p-2 shadow-lg hover:bg-white hover:shadow-xl"
          >
            <div className="w-30 h-30 flex items-center justify-center text-red-500 md:ml-2 lg:mr-4">
              <svg
                className="z-10"
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 1024 1024"
              >
                <g transform="rotate(90 512 512)">
                  <path
                    fill="#ec6227"
                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884zm288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8z"
                  />
                </g>
              </svg>
              <img
                alt={item.alt}
                className="w-100 h-100 absolute object-cover"
                width={40}
                height={40}
                src={item.image}
              />
            </div>
            <div className="sm:text-md inline-flex items-center text-sm font-semibold text-primary">
              {item.title}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default HomapageFeature;
