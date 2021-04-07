export type GlobalData = { [key: string]: any }

export type ContextAction = {
  type: 'update' | 'delete';
  payload: GlobalData;
}

