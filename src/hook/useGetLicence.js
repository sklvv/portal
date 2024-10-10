import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";
const link = `${BACK}/api/portal/inventory/licence`

const getToken = () => localStorage.getItem('token') || null;

const token = getToken();
async function fetchLicence(){
    const data = (await axios.get(link, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })).data
    return data
}
export const useGetLicence = () => {
    return useQuery('licence', fetchLicence,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        })
}
/**/
export const useGetLicence_add = () => {
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
                queryClient.invalidateQueries('licence');
            }
        }
    );
}
export const useGetLicence_del = () => {
    const queryClient = useQueryClient();
    return useMutation((id) =>
            axios.delete(link, {data: {id: id}, headers: {
                    Authorization: `Bearer ${token}`
                }}),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('licence');
            }
        }
    );
}
