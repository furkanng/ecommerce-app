import React from 'react'
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../../api';
import { useQuery } from 'react-query';

function ProductDetail() {

    const { product_id } = useParams();
    const { isLoading, isError, data, error } = useQuery(["admin:product", product_id], () => fetchProduct());

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error {error.message}</div>
    }

    s
    return (
        <div>
            ProductDetail
        </div>
    )
}

export default ProductDetail
