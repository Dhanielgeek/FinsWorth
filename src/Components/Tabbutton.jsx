
import PropTypes from 'prop-types';


export default function TabButtons({ settingsData, activeTab, setActiveTab }) {
    TabButtons.propTypes = {  
        settingsData: PropTypes.array.isRequired,
        activeTab: PropTypes.any,
        setActiveTab: PropTypes.func.isRequired,
      }
    return (
      <div className="px-4 py-4 text-lg border-b-2 text-gray-700 flex justify-start items-center gap-16 cursor-pointer">
        {settingsData.map((item, index) => (
          <h3
            className={`${index === activeTab && "active text-base font-bold"}  border-gray-700 font-medium`}
            key={item.animal}
            onClick={() => setActiveTab(index)}>
            {item.animal}
          </h3>
        ))}
      </div>
    );
  }