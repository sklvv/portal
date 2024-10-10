import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";
const link = `${BACK}/api/portal/inventory/hardware`

const getToken = () => localStorage.getItem('token') || null;


async function fetchHardware(){
    const token = getToken();
    if (!token) return;
    const data = (await axios.get(link, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })).data
    return data
}

async function fetchHardwareRentHistory(what){
    const token = getToken();
    if (!token) return;
    const data = (await (axios.get(`${link}/rent/${what}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }))).data
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
    const token = getToken();
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
                queryClient.invalidateQueries('hardware');
            }
        }
    );
}
export const useGetHardware_rent = () => {
    const token = getToken();
    const queryClient = useQueryClient();
    return useMutation((licItem) =>
            axios.post(`${link}/rent`, licItem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
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
    const token = getToken();
    const queryClient = useQueryClient();
    return useMutation((id) =>
            axios.delete(link, {data: {id: id}, headers: {
                    Authorization: `Bearer ${token}`
                }}),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('hardware');
            }
        }
    );
}
