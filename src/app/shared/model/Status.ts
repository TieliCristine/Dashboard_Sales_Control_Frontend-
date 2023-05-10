export enum Status{
  PENDING = 'PENDING',
  PROGRESSING = 'PROGRESSING',
  AUTHORIZED = 'AUTHORIZED',
  CONCLUDED = 'CONCLUDED',
  DELIVERED = 'DELIVERED',
}
export const statusMap = {
  [Status.PENDING]: 'Pendente',
  [Status.PROGRESSING]: 'Processando',
  [Status.AUTHORIZED]: 'Autorizado',
  [Status.CONCLUDED]: 'Concluido',
  [Status.DELIVERED]: 'Entregue',
};
