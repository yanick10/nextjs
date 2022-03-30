import axios from 'axios'
import { Field, Formik } from 'formik'
import React from 'react'
import { object, string } from 'yup'

const phoneRegEx = /((?:\+|00)[17](?: |\-)?|(?:\+|00)[1-9]\d{0,2}(?: |\-)?|(?:\+|00)1\-\d{3}(?: |\-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |\-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |\-)[0-9]{3}(?: |\-)[0-9]{4})|([0-9]{7}))/g

const initialValues = {
    title: '',
    phone: '',
    description: ''
}
const validationSchema = object().shape({
    title: string().required("Ce champ est obligatoire").min(5, "Le min est de 5 caractères").max(20, "Le max des caractères est de 20"),
    phone: string().required("le numéro de phone est obligatoire").matches(phoneRegEx, "Numéro de téléphone invalide"),
    description: string().required("Champ obligatoire").min(20, "le min est de 20 caractères").max(100, "le max est de 100 caractères")
})

const CreateAdForm = () => {

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (input) => {
                try {
                    console.log(input)
                    const data = input
                    await axios
                        .post(`${process.env.NEXT_PUBLIC_API_URL}/annonces`, data, {
                            headers: {

                                "Content-Type": "application/json",
                            },
                        })
                        .then((res) => {

                            console.log(res.data);
                        });
                } catch (e) { console.log(e) }
            }}>

            {({
                handleChange,
                setFieldValue,
                values,
                isValid,
                dirty,
                handleSubmit,
                errors,
                touched,
                handleBlur,
                isSubmitting,
            }) => (
                <div className='p-10 mx-auto mt-4 mb-4 border rounded shadow-md md:w-1/2 bg-gray-50'>
                    <form onSubmit={handleSubmit} className=''>


                        <div className="h-24 pt-3 pb-3 my-auto text-left ">
                            <h1 className="text-5xl font-bold text-lime-700">Annonce</h1>
                        </div>


                        <div className="pb-2">
                            <label className='text-xl font-medium '>Title<span className='text-red-600'>*</span></label>
                        </div>
                        <div className="pb-4">
                            <Field
                                className='w-full h-10 bg-white border border-gray-300 rounded focus:outline-lime-700 '

                                as="input"
                                type="text"
                                name="title"
                                values={values.title || undefined}
                                onChange={handleChange}
                                placeholder="Entrer le titre" />

                            {touched.title && errors.title && (
                                <div className="text-red-500">{errors.title}</div>
                            )}
                        </div>


                        <div className="pb-2">
                            <label className='text-xl font-medium '>Phone<span className='text-red-600'>*</span></label>
                        </div>
                        <div className="pb-4">
                            <Field
                                className='w-full h-10 bg-white border border-gray-300 rounded focus:outline-lime-700'

                                as="input"
                                type="text"
                                name="phone"
                                values={values.phone || undefined}
                                onChange={handleChange}
                                placeholder="Entrer le num de tel" />

                            {touched.phone && errors.phone && (
                                <div className="text-red-500">{errors.phone}</div>
                            )}
                        </div>


                        <div className="pb-2">
                            <label className='text-xl font-medium '>Description<span className='text-red-600'>*</span></label>
                        </div>
                        <div className='pb-4' >
                            <Field
                                className='w-full bg-white border border-gray-300 rounded pb-7 focus:outline-lime-700 '

                                as="textarea"
                                type="text"
                                name="description"
                                values={values.description || undefined}
                                onChange={handleChange}
                                placeholder="Entrer la description" />

                            {touched.description && errors.description && (
                                <div className="text-red-500">{errors.description}</div>
                            )}

                        </div>


                        <div className="pb-2">
                            <label className='text-xl font-medium '>Image</label>
                        </div>
                        <div className="w-full pt-2 mb-4 text-center bg-white border-2 border-gray-300 border-dashed rounded pb-7">
                            <label htmlFor="file-upload">
                                <span className='font-medium cursor-pointer text-lime-700'>Ajouter une image  </span>
                                <span>  </span>
                                <input id="file-upload" name="file-upload" type="file" className="file:bg-lime-600 file:text-white file:rounded file:border-none " />
                                <p className='pt-1 text-xs'>PNG,JPG,GIF</p>
                            </label>
                        </div>


                        <div className="pt-2 pb-2 text-right bg-gray-200 rounded">
                            <button className='w-24 p-3 mr-1 text-gray-500 border border-gray-300 rounded hover:bg-lime-700 hover:text-white' type="submit">Valider</button>
                        </div>

                    </form>
                </div>
            )}

        </Formik>


    )
}

export default CreateAdForm
