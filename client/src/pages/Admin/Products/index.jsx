import { useMemo } from 'react'
import styles from './styles.module.css';

import { fetchProductList, deleteProduct } from '../../../api';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { Table, Popconfirm } from 'antd';

function Products() {

    const queryClient = useQueryClient();

    const { isLoading, isError, data, error } = useQuery("admin:products", fetchProductList);

    const deleteMutation = useMutation(deleteProduct, {
        onSuccess: () => queryClient.invalidateQueries("admin:products")
    })


    const columns = useMemo(() => {
        return [
            {
                title: 'Title',
                dataIndex: 'title',
                key: 'title',
            },
            {
                title: 'Price',
                dataIndex: 'price',
                key: 'price',
            },
            {
                title: 'Created At',
                dataIndex: 'createdAt',
                key: 'createdAt',
            },
            {
                title: 'Action',
                dataIndex: 'action',
                render: (text, record) => (
                    <>
                        <Link to={`/admin/products/${record._id}`}>Edit</Link>

                        <Popconfirm
                            title="Are you sure?"
                            onConfirm={() => {
                                deleteMutation.mutate(record._id, {
                                    onSuccess: () => {
                                        console.log("success");
                                    }
                                })
                            }}
                            onCancel={() => {
                                console.log("It is cancelled");
                            }}
                            okText="Yes"
                            cancelText="No"
                            placement='left'
                        >
                            <a href='/#' style={{ marginLeft: 10 }}>Delete</a>
                        </Popconfirm>
                    </>
                )
            },
        ];
    }, [deleteMutation])



    if (isLoading) {
        return <div>Loading...</div>
    }

    if (isError) {
        return <div>Error {error.message}</div>
    }

    return (
        <div>
            <h1 className={styles.title}>Products</h1>
            <Divider color="blue" width="100px" />
            <Divider color="blue" width="100px" />


            <Table dataSource={data} columns={columns} rowKey="_id" />
        </div>
    )
}

export default Products
