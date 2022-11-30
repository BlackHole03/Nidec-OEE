import useRequest from './useRequest'

const useMachine = () => {
    const { request, cancel } = useRequest()

    const get = (page = 1, size = 100) => request.get('master-machine', {
        params: { page, size}
    })

    const show = id => request.get(`master-machine/${id}`)

    return {
        get,
        show,
        cancel
    }
}

export default useMachine