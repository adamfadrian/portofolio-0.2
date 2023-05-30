import React from 'react'

interface Props {
    label: string,
    loading?: boolean,
    size?: string
}

const Button = ({ label, loading, size }: Props) => {
    return (
        <button disabled={loading} className={`btn btn-sm w-${size} bg-transparent border border-white hover:bg-transparent hover:border-blue gap-1`}>
            {label}
        </button>
    )
}

export default Button