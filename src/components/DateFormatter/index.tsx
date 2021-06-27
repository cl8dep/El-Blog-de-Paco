import { parseISO, format } from "date-fns";
import { es } from 'date-fns/locale'

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);

  return <time>{format(date, "PPP", {locale: es})}</time>;
};

export default DateFormatter;
