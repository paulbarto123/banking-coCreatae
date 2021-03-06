import { Layout, Menu, Pagination, Divider} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  FolderAddOutlined,
  MailOutlined,
  FolderOpenOutlined,
  FileAddOutlined,
  DatabaseOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import "./sidebarmember.css";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;


const SidebarMemberComponent = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = React.useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="layout_sider"
      >
        <div className="logo">
          <img
            src="https://www.indoneo.com/wp-content/uploads/2017/03/BRI_logo_WB.png"
            alt="logo"
          />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={props.defaultSelectedKeys}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/member/beranda-project"> Beranda </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FolderAddOutlined />}>
          <Link to="/member/buat-project"> Buat Project Baru </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FolderOpenOutlined />}>
            <Link to="/member/project-saya"> Project Saya</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<MailOutlined />}>
            <Link to="/member/undangan-kolaborasi">Undangan Kolaborasi</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FileAddOutlined />}>
            <Link to="/member/post-artikel">Post Artikel</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<DatabaseOutlined />}>
            <Link to="/member/artikel-saya">Artikel Saya</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<LogoutOutlined />}>
            <Link to="/">Keluar</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: handleToggle, 
            }
          )}
          Selamat Datang!
        </Header>
        <Content className="site-layout-background layout_content">
          {props.children}
        </Content>
        <Divider />
        <Pagination defaultCurrent={1} total={50} />
        <Divider />
      </Layout>
    </Layout>
  );
};

export default SidebarMemberComponent;
