import PriceGroup from "./PriceGroup";
import priceGroups from "../../data/priceGroups";

import "./PriceGroups.css";

function PriceGroups() {
  return (
    <section className="price-groups">
      <div className="price-groups-container">
        {priceGroups.map((group, index) => (
          <PriceGroup
            key={group.title}
            group={group}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default PriceGroups;