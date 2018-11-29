export const menuRouterStates = {
  list: '',
  create: 'new',
  edit: id => `edit/${id}`,
  detail: id => `detail/${id}`
};
