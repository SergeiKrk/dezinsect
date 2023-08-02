import { humanize } from "@lib/utils/textConverter";
import * as Icon from "react-feather";

const ServiceItem = ({ services }) => {
  return (
      {services.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <a
            href={item.link}
            key={i}
            className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg hover:bg-[#EDF7F3] hover:shadow-xl"
          >
            <div className="integration-card-head flex items-center space-x-4">
              <div className="icon my-2">
                <FeatherIcon />
              </div>
              <h3 className="text-xl">{item.title}</h3>
            </div>
          </a>
        );
      })}
  );
};

export default ServiceItem;
