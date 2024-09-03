import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(relativeTime);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Seoul");

export default dayjs;
