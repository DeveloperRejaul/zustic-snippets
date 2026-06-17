export const formatBDPhone = (phone: string) => {
  return phone.replace(/^\+8800/, "+880");
};

export  const formatPrice = (amount:number) => {
  if (amount == null || amount < 0) return '';
  const intAmount = Math.floor(amount);

  const str = intAmount.toString();
  return str.length >= 5 ? `${str.slice(0, 4)}+` : str;
};
