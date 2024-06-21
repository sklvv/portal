import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
const link = "http://grd228.grdn.ru:5000/api/portal/phoneBook"

async function fetchPhoneBook(){
    const data = (await axios.get(link)).data
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
export const useGetPhoneBook = () => {
    return useQuery('phoneBook', fetchPhoneBook,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: true,
        })
}
/**/
export const useGetPhoneBook_add = () => {
    const queryClient = useQueryClient();
    return useMutation((phoneBookItem) =>
            axios.post(link, phoneBookItem),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('phoneBook');
            }
        }
    );
}
export const useGetPhoneBook_del = () => {
    const queryClient = useQueryClient();
    return useMutation((id) =>
        axios.delete(link, { data: { id: id } }),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('phoneBook');
            }
        }
    );
}