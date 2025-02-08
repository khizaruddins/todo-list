interface TodoI {
  id: string;
  name: string;
  title: string;
  startDate: Date;
  endDate: Date;
  desc: string;
  status: 'TODO' | 'INPROGRESS' | 'PENDING' | 'COMPLETED';
  comments: TodoCommentsI[];
}

interface TodoCommentsI {
  todoId: string;
  commentId: string;
  title: string;
  desc: string;
}
