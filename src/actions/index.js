export const POST = "post";
export const DELETE = "delete";
export const display = (title, content) => {
  return {
    type: POST,
    payload: {
      title,
      content,
    },
  };
};
export const 삭제하기 = (id) => {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
};
