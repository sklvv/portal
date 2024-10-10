import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";
const link = `${BACK}/api/portal/inventory/iptables`

const getToken = () => localStorage.getItem('token') || null;

const token = getToken();
async function fetchIPtables(){
    const data = (await axios.get(link, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })).data
    return data
}
export const useGetIPtables = () => {
    return useQuery('iptables', fetchIPtables,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        })
}
/**/
export const useGetIPtables_add = () => {
    const queryClient = useQueryClient();
    return useMutation((licItem) =>
            axios.post(link, licItem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('iptables');
            }
        }
    );
}
export const useGetIPtables_del = () => {
    const queryClient = useQueryClient();
    return useMutation((id) =>
            axios.delete(link, {data: {id: id}, headers: {
                    Authorization: `Bearer ${token}`
                }}),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('iptables');
            }
        }
    );
}
