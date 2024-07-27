import styled from "@emotion/styled";
import Select from "react-dropdown-select";

const StyledSelect = styled(Select)`
  .react-dropdown-select-dropdown {
    border-radius: 14px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    background: #fff;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    padding: 14px 8px 14px 18px;
  }

  .react-dropdown-select-input {
    margin-left: 0;
  }

  .react-dropdown-select-input::placeholder {
    font-size: 18px;
    color: #121417;
    font-weight: 500;
  }

  .react-dropdown-select-item {
    color: rgba(18, 20, 23, 0.2);
    padding: 0;
    margin-bottom: 8px;
  }

  .react-dropdown-select-item:last-child {
    margin-bottom: 0px;
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected {
    background: transparent;
    color: #121417;
    transition: color 250ms ease-in-out;
  }

  .react-dropdown-select-item:hover {
    background: transparent;
    color: #121417;
  }
`;

export default StyledSelect;
