import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import CreateTicket from "./CreateTicket";
import Queue from "./Queue";
import Desktop from "./Desktop";
import Loging from "./Login";
import { useContext } from "react";
import { UiContext } from "../context/UiContext";
const { Sider, Content } = Layout;

const RouterPage = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { hidemenu } = useContext(UiContext);

  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth={0} breakpoint="md" hidden={hidemenu}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: <Link to="/login">Login</Link>,
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: <Link to="/queue">Queue</Link>,
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: <Link to="/create-ticket">Create new ticket</Link>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/login" element={<Loging />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/create-ticket" element={<CreateTicket />} />
              <Route path="/desktop" element={<Desktop />} />

              <Route path="*" element={<Navigate to="/desktop" replace />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default RouterPage;
