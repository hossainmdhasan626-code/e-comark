"use state";

import { useState } from "react";

const ToggleBtnStateChange = ({ children , stateValue={toggle}}) => {
  const [toggle, setToggle] = useState(false);
  return <button type="button" onClick={() => setToggle(!toggle)}>{children}</button>;
};

export default ToggleBtnStateChange;
