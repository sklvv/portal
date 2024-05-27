

export const prepareSelect = (data, param, filtBy = false) =>{
    let changedData = data
    let x = []

    const doEach = (newData)=>{
        newData.forEach(i => {
            if (!x.includes(i[param])){
                x.push(i[param])
            }
        } )
    }

    if (param === 'Холдинг'){
        changedData = data.filter((i)=> i.Холдинг !== '' )
    }
    /*if (param === 'ПРОЧИЕ' || param === ''){
        console.log(param)
        console.log(changedData)
    }*/
    /*if (param === 'Контрагент'){
        changedData = data.filter((i)=> i.Холдинг !== '' )
    }*/

    changedData.forEach(i => {
        if (!x.includes(i[param])){
            x.push(i[param])
        }
    } )
    x.sort()
    return x
}
