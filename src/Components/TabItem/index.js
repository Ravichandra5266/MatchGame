import "./style.css";

const TabItem = (props) => {
  const { eachTab, isActiveTab, onChangeTabId } = props;
  const { tabId, displayText } = eachTab;
  const activeTabStyle = isActiveTab ? "btn btn-primary" : "btn btn-secondary";
  const onTabChange = () => {
    onChangeTabId(tabId);
  };
  return (
    <li className="me-2">
      <button
        className={`tab-btn ${activeTabStyle}`}
        type="button"
        onClick={onTabChange}
      >
        {displayText}
      </button>
    </li>
  );
};
export default TabItem;
