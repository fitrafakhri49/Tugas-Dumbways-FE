type ToDoListProps = {
    text: string;
    EventOnClick: () => void;
    isDone: boolean;
  };
  
  export function TodoList({ text, EventOnClick, isDone }: ToDoListProps) {
    return <>
      <p
        onClick={EventOnClick}style={{cursor: "pointer",}}>{text}{isDone ? "✓ " : ""}
      </p>
      </>
  }
