import dateFormat, { masks, i18n } from 'dateformat';

export const formatDate = () => {
  const now = new Date();
  masks.template = 'dd mmm, yyyy | HH:MM';
  i18n.monthNames = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня',
  ];
  return dateFormat(now, 'template');
};
