const getUsersStorage = () => {
  return {
    agent: localStorage.getItem("agent") || null,
    desk: localStorage.getItem("desk") || null,
  };
};

export default getUsersStorage;
