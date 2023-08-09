import styles from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
`;
export const ToDoList = styled.div`
  background: #f7f7f7;
  padding: 30px 20px;
  border-radius: 5px;
`;

export const Input = styled.input`
  border: 2px solid #d1d3d466;
  border-radius: 5px;
  height: 40px;
  margin-right: 10px;
`;

export const Button = styled.button`
  background-color: #0097ff;
  border: none;
  height: 40px;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
`;
