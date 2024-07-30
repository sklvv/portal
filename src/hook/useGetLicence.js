import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";
import {BACK} from "../utils/links";
const link = `${BACK}/api/portal/inventory/licence`

async function fetchLicence(){
    const data = (await axios.get(link)).data
   /* data.sort((a, b)=>{
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })*/
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
            axios.post(link, licItem),
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
            axios.delete(link, {data: {id: id}}),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('licence');
            }
        }
    );
}
