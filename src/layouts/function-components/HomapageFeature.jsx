import { humanize } from "@lib/utils/textConverter";
import * as Icon from "react-feather";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <a href={item.link}
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg hover:shadow-xl hover:bg-[#EDF7F3]"
          >
            <div class="integration-card-head flex items-center space-x-4">
              <div className="icon my-2">
                <FeatherIcon />
              </div>
              <h3 className="text-xl">{item.title}</h3>
            </div>

            <p>{item.content}</p>
          </a>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
