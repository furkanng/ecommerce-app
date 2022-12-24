import React from "react";

import { postProduct } from "../../../api";
import { useMutation, useQueryClient } from "react-query";

import { message } from "antd";
import validationSchema from "./validations";
import styles from "./styles.module.css";
import { Formik } from "formik";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

function NewProduct() {
  const queryClient = useQueryClient();
  const newProductMutation = useMutation(postProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading...", key: "product_update" });

    values.image = JSON.stringify(values.image);

    newProductMutation.mutate(values, {
      onSuccess: () => {
        console.log("success");
      },
    });
  };

  return (
    <div>
      <h1 className={styles.title}>New Product</h1>
      <Divider color="blue" width="100px" />
      <Divider color="blue" width="100px" />

      <Formik
        initialValues={{
          title: "",
          description: "",
          price: "",
          image: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box my="5" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl mt={4}>
                    <FormLabel>Title</FormLabel>
                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      isInvalid={touched.title && errors.title}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      isInvalid={touched.description && errors.description}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      isInvalid={touched.price && errors.price}
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>image</FormLabel>
                    <Input
                      name="image"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.image}
                      disabled={isSubmitting}
                      isInvalid={touched.image && errors.image}
                    />
                  </FormControl>

                  <Button
                    mt={4}
                    width="full"
                    type="submit"
                    isLoading={isSubmitting}
                    colorScheme="facebook"
                  >
                    Save
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
}

export default NewProduct;
