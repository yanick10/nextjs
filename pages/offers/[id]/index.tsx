import { useRouter } from 'next/router'
import React from 'react'

const Slug = () => {
    const router = useRouter()
    // const { } = useRouter()
    const test = router.query.id
    return (

        <div>

            {`Mon slug est ${test}`}


        </div>
    )
}

export default Slug