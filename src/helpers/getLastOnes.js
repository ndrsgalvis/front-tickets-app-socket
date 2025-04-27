export const getLastOnes = async () => {
  const response = await fetch("http://localhost:8080/last-tickets");
  const data = await response.json();

  return data.lastOnes;
};
