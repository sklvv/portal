import {useMutation, useQuery, useQueryClient} from "react-query";
import axios from "axios";

/*
async function fetchData(){
    /!*return (await axios.get("https://mail.grdn.ru:777/upp_hs_ap/hs/v3/GetBlocSales") ).data.response.data*!/
    return (await axios.get("http://grd228:5000/api/dasahboarddata")).data
}

export const useGetQuery = () => {
    return useQuery('data', fetchData,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
}

*/

/*Realization block*/
async function fetchRealizationData(){
    return (await axios.get("https://backend.s3grdn.ru/api/iboardData")).data
}

export const useGetRealizationData = () => {
    return useQuery('data', fetchRealizationData,
        {
            keepPreviousData: true,
            refetchOnWindowFocus: false,
        })
}


async function fetchPhoneBook(){
    return (await axios.get("http://grd228.grdn.ru:5000/api/portal/phoneBook")).data
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
            axios.post("http://grd228.grdn.ru:5000/api/portal/phoneBook_add", phoneBookItem),
        {
            onSuccess: () => {
                // Инвалидация и обновление
                queryClient.invalidateQueries('phoneBook');
            }
        }
    );
}
