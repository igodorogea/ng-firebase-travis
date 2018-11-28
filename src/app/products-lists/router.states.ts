export const routerStates = {
  list: '',
  create: 'new',
  edit: id => `edit/${id}`,
  detail: id => `detail/${id}`
};
