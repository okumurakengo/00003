import * as moment from "moment";
import axios from "axios";

export function fetchRequestGetList(selectWeekNum: number) {
    return axios.get(`/api/${selectWeekNum}`, {})
        .then(response => response.data)
        .catch(error => console.log(error));
}

export function fetchRequestAddList({ date, time, title }: {
    date: moment.Moment,
    time: moment.Moment,
    title: string
}) {
    return axios.post("/api/add", {
        dateTime : moment(date).format("YYYY-MM-DD").concat(moment(time).format(" HH:mm:00")),
        title,
    })
    .then(response => response)
    .catch(error => console.log(error));
}

export function fetchRequestDeleteList({ id }: { id: number }) {
    return axios.post("/api/delete", { id })
        .then(response => response)
        .catch(error => console.log(error));
}
