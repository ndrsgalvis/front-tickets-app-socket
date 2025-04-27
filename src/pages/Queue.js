import { Row, Col, Typography, Button, Divider, List, Card, Tag } from "antd";
import { useSocket } from "../hooks/useSocket";
import { SocketContext, SocketProvider } from "../context/SocketContext";
import useHideMenu from "../hooks/useHideMenu";
import { useContext, useEffect, useState } from "react";
import { getLastOnes } from "../helpers/getLastOnes";
const { Title, Text } = Typography;

const Queue = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("ticket-assigned", (assigned) => {
      setTickets(assigned);
    });

    return () => {
      socket.off("ticket-assigned");
    };
  }, [socket]);

  useEffect(() => {
    // getLastOnes().then((tickets) => setTickets(tickets));
    getLastOnes().then(setTickets);
  }, []);

  return (
    <>
      <Title level={1}>Attending client</Title>
      <Divider />
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.length > 0 ? tickets.slice(0, 3) : []}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: "300px", marginTop: "16px" }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">Desktop: {item.desk}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={tickets.length > 0 ? tickets.slice(3) : []}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary"> Attening on desk: </Text>
                      <Tag color="magenta">{item.desk}</Tag>
                      <Text type="secondary"> Agent: </Text>
                      <Tag color="volcano">{item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          ></List>
        </Col>
      </Row>
    </>
  );
};

export default Queue;
