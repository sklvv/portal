import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";
const link = `${BACK}/api/portal/inventory/hardware`

async function fetchHardware(){
    const data = (await axios.get(link)).data
    return data
}

async function fetchHardwareRentHistory(what){
    const data = (await (axios.get(`${link}/rent/${what}`))).data
    return data
}

export const useGetHardware = () => {
    return useQuery('hardware', fetchHardware,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        })
}
/**/
export const useGetHardware_add = () => {
    const queryClient = useQueryClient();
    return useMutation((licItem) =>
            axios.post(link, licItem),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('hardware');
            }
        }
    );
}
export const useGetHardware_rent = () => {
    const queryClient = useQueryClient();
    return useMutation((licItem) =>
            axios.post(`${link}/rent`, licItem),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('hardware');
            }
        }
    );
}
export const useGetHardwareRentHistory = (what) => {
    return useQuery('hardwareRent', ()=> {return fetchHardwareRentHistory(what)},
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        })
}
export const useGetHardware_del = () => {
    const queryClient = useQueryClient();
    return useMutation((id) =>
            axios.delete(link, {data: {id: id}}),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('hardware');
            }
        }
    );
}
