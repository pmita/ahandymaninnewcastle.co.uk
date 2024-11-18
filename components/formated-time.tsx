// UTILS
import { formatDateFromMillis } from '@/utils/helpers';

export const FormatedTime = ({ time }: { time: number }) => {

  if (!time) return null;

  return (
    <time className="text-xs text-secondary">
      {formatDateFromMillis(time)}
    </time>
  )
};
