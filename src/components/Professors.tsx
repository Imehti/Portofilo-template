import React from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import { professorsInfos } from "./professorsInformations";

interface DataType {
  key: string;
  name: string;
  title: string;
  status: string;
  role: string;
  email?: string;
  image?: string;
  group?: string;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center -ml-8">
        <img
          src={record.image}
          alt={record.name}
          className="rounded-full w-14 md:w-20"
        />
        <div className="flex flex-col ml-2">
          <span className="font-semibold text-xs md:text-sm">{text}</span>
          <span className="text-gray-600 text-xs md:text-sm">
            {record.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => (
      <div className="flex flex-col ml-12 md:ml-0">
        <span className="text-xs md:text-sm">{text}</span>
        <span className="text-blue-700">{record.group}</span>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      let color = status === "Active" ? "green" : "volcano";
      return <Tag color={color}>{status.toUpperCase()}</Tag>;
    },
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "",
    dataIndex: "",
    key: "",
    render: () => (
      <button className="text-blue-700 px-4 py-1 border border-blue-700 rounded-xl hover:bg-blue-400 hover:text-white">
        Detail
      </button>
    ),
  },
];

// Map professorsInfos to DataType format
const data: DataType[] = professorsInfos.map((professor) => ({
  key: professor.id.toString(),
  image: professor.image,
  group: professor.group,
  name: professor.name,
  title: professor.title,
  status: professor.status,
  role: professor.role,
  email: professor.email,
}));

const Professors = () => {
  return (
    <>
      <Table<DataType> columns={columns} dataSource={data} />
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          All Professors
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Professors;
