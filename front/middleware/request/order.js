export function buyProducts({ e,data, setLoading }) {
    e.preventDefault();
    setLoading(true)
    api.post('/orders/buy', { data }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        setLoading(false)
    })
}
