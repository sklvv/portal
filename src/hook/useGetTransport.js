import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";
const link = `${BACK}/api/portal/transport`

const getToken = () => localStorage.getItem('token') || null;
const sortTransportByName = (data) => {
    return data.sort((a, b) => a.name.localeCompare(b.name));
}
const token = getToken();
const fetchTransport = async () => {
    if (!token) return;
    try {
        const { data } = await axios.get(link, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return sortTransportByName(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
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
            axios.post(link, transportItem,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
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
            axios.delete(link, { data: { id: id }, headers: {
                    Authorization: `Bearer ${token}`
                } }),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('transport');
            }
        }
    );
}