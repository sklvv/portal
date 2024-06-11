import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

async function fetchTransport(){
    const data = (await axios.get("http://grd228.grdn.ru:5000/api/portal/transport")).data
    data.sort((a, b)=>{
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })
    return data
}
export const useGetTransport = () => {
    return useQuery('transport', fetchTransport,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        })
}

/**/
export const useGetTransport_add = () => {
    const queryClient = useQueryClient();
    return useMutation((transportItem) =>
            axios.post("http://grd228.grdn.ru:5000/api/portal/transport_add", transportItem),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('transport');
            }
        }
    );
}
export const useGetTransport_del = () => {
    const queryClient = useQueryClient();
    return useMutation((id) =>
            axios.post("http://grd228.grdn.ru:5000/api/portal/transport", id),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('transport');
            }
        }
    );
}