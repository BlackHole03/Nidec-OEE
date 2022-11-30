import axios from 'axios'
import { useState } from 'react'
import 'abortcontroller-polyfill'

const useRequest = () => {
    const [controller] = useState(new AbortController())

    const [request] = useState(() => axios.create({
        baseURL: `${window.location.origin}/api`,
        timeout: 10000,
        headers: {},
        signal: controller.signal
    }))

    const cancel = () => controller.abort()
    
    return { request, cancel }
}

export default useRequest