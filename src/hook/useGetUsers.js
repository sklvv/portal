import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";
const link = `${BACK}/api/user`

const getToken = () => localStorage.getItem('token') || null;
const sortUsersByName = (users) => {
    return users.sort((a, b) => a.name.localeCompare(b.name));
}

const token = getToken();
const fetchUsers = async () => {
    if (!token) return;

    try {
        const { data } = await axios.get(link, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return sortUsersByName(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}
export const useGetUsers = () => {
    return useQuery(['users'], fetchUsers, {
        keepPreviousData: true,
        refetchOnWindowFocus: true,
    });
}

/**/
export const useGetUsers_update = () => {
    const queryClient = useQueryClient();
    return useMutation((userItem) =>
            axios.post(link, userItem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('users');
            }
        }
    );
}

export const useGetUsers_updatePass = () => {
    const queryClient = useQueryClient();
    return useMutation((userItem) =>
            axios.post(`${link}/AdmReset`, userItem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('pass');
            }
        }
    );
}
export const useGetUsers_SendConfirm = () => {
    const queryClient = useQueryClient();
    return useMutation((userItem) =>
            axios.post(`${link}/Confirm`, userItem, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('confirm');
            }
        }
    );
}
