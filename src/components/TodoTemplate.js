import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  //children => props로 써도 상관없다.
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
