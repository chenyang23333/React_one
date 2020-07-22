import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Breadcrumb } from "antd";
import { Layout } from "antd";
import { Menu } from "antd";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Table, Divider, Tag } from "antd";
import { Radio } from "antd";
import { Random } from "mockjs";
import { Dropdown, Button, message } from "antd";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;
function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

function onOk(value) {
  console.log("onOk: ", value);
}

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

var Mock = require("mockjs");
var numoflist = 50;
var i,
  name = new Array(),
  address = new Array(),
  age = new Array(),
  dataobject = new Array(),
  tag = new Array();
for (i = 0; i < numoflist; i++) {
  name[i] = Random.cfirst() + Random.clast();
  address[i] =
    Random.region() + Random.province() + Random.city() + Random.county();
  age[i] = Mock.mock({ "numberAge|6-90": 90 }).numberAge;
  tag[i] = new Array();
  for (var j = 0; j < 2; j++) {
    //二维长度为5

    tag[i][j] = Mock.mock({
      "array|1": [
        "nice",
        "bad",
        "developer",
        "funny",
        "engineer",
        "scientist",
        "artist",
      ],
    }).array;
  }
  dataobject[i] = {
    key: i + 1,
    name: name[i],
    age: age[i],
    address: address[i],
    tags: tag[i],
  };
}

var mockdata = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素

  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
    },
  ],
  "string|3": "ONeoneone",
  "string2|1-10": "★",
  "number|+1": 202,
  "numberAge|6-90": 90,
  "array|1": [
    "nice",
    "bad",
    "developer",
    "funny",
    "engineer",
    "scientist",
    "artist",
  ],
});
console.log(age[0]);

const { Header, Footer, Content } = Layout;
const { Search } = Input; // what does that mean\
const { SubMenu } = Menu;

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];
const data2 = new Array();
for (i = 0; i < numoflist; i++) {
  data2.push(dataobject[i]);
}

const data = [
  {
    key: "1",
    name: name[0],
    age: age[0],
    address: address[0],
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: name[1],
    age: age[1],
    address: address[1],
    tags: tag[1],
  },
  {
    key: "3",
    name: name[2],
    age: age[2],
    address: address[2],
    tags: ["cool", "teacher"],
  },
];

class Clock extends React.Component {
  componentWillMount() {
    console.log("componentwillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <div>
        <h1>now it is{this.props.date1}</h1>
      </div>
    );
  }
}
//const element = <App2 />;

class Appradio extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 10 }} id="rasir">
        <div>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          <Radio.Group defaultValue="a" size="large">
            <Radio.Button value="a">one</Radio.Button>
            <Radio.Button value="b">two</Radio.Button>
            <Radio.Button value="c">three</Radio.Button>
            <Radio.Button value="d">four</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  }
}

const element2 = <App />;
ReactDOM.render(
  // element,
  <div>
    <Layout className="layout">
      <Header id="navheader">
        <div className="logo" />
        <Menu
          id="menuheader"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "40px" }}
        >
          <Menu.Item key="1" style={{ marginLeft: "150px" }}>
            nav 1
          </Menu.Item>
        </Menu>
      </Header>
      <div className="querydata">
        流程标题：
        <Input
          placeholder="Basic usage"
          id="shortinput"
          style={{ marginRight: "50px" }}
        />
        发起人：
        <Input
          placeholder="Basic usage"
          id="shortinput"
          style={{ marginRight: "50px" }}
        />
        <Dropdown overlay={menu}>
          <Button>Button</Button>
        </Dropdown>
        <span style={{ marginLeft: "50px" }}>申请时间：</span>
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          onChange={onChange}
          onOk={onOk}
        />
      </div>
    </Layout>
    <div>
      <Appradio />
    </div>

    <Content style={{ padding: "0 50px" }}>
      <div style={{ background: "#fff", padding: 24, minHeight: 800 }}>
        <Table columns={columns} dataSource={data2} />
      </div>
    </Content>

    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </div>,

  document.getElementById("root")
);

serviceWorker.unregister();
