import { useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { use } from "react";

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list flex-col">
      <P>All Foods List</P>
      <div className="list-table">
        <div className="list-table-format"></div>
      </div>
    </div>
  );
};

export default List;
