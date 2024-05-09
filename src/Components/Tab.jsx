import PropTypes from 'prop-types';


export default function TabContent({ settingsData, activeTab }) {
  TabContent.propTypes = {  
    settingsData: PropTypes.array.isRequired,
    activeTab: PropTypes.any,
  }
  return (
    <div className="py-6">
      <div className="tab__content">
        <div> {settingsData[activeTab].path}</div>
      </div>
    </div>
  );
}
