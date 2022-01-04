import React, { useEffect } from "react";
import { setSidebarItems } from "../../../../redux/reducers/shReducers";
import { clientSidebarItems } from "../../../../components/Sidebar/sidebarItems";
import { useDispatch } from "react-redux";
export default function Tasks({ fromPopup}) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fromPopup)
      dispatch(setSidebarItems({ active: "task", items: clientSidebarItems }));
  });
  return <div>task</div>;
}
