import axios from 'axios'
import PageContainer from 'components/layout/pagecontainer/PageContainer'
import { Spinner } from 'components/loading/Spinner'
import { Formik, Form, ErrorMessage } from 'formik'
import Router from 'next/router'
import { useState } from 'react'

import { mediaState } from '../../store/store'

import * as Yup from 'yup'

const UploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  return !isSubmitting ? (
    <PageContainer>
      <Formik
        initialValues={{
          media: '',
          mediaPreview: '',
        }}
        validationSchema={Yup.object().shape({
          media: Yup.string().required(),
          mediaPreview: Yup.string().required(),
        })}
        onSubmit={async ({ media }, { setSubmitting, setFieldValue }) => {
          try {
            setIsSubmitting(true)
            const formData = new FormData()

            formData.append('file', media)

            const { data } = await axios.post('/api/upload/upload', formData)

            setFieldValue('mediaPreview', data.url)
            mediaState.mediaUrl = data.url
          } catch (err) {
            console.log(err)
          } finally {
            setIsSubmitting(false)

            await Router.push('/create')
          }
        }}
      >
        {({
          values: { mediaPreview },
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
              {mediaPreview ? '' : ''}
              <div className="mt-8">
                <label htmlFor="media">
                  <input
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setFieldValue(
                          'mediaPreview',
                          URL.createObjectURL(e.target.files[0])
                        )
                        setFieldValue('media', e.target.files[0])
                      }
                    }}
                    type="file"
                    accept="video/* image/*"
                    id="media"
                    name="media"
                  />
                </label>
              </div>
              <ErrorMessage name="media" />
            </div>
            <div className="flex mx-auto min-w-fit my-12 items-center justify-center">
              <button disabled={isSubmitting} type="submit">
                <h1 className="text-2xl">Upload</h1>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </PageContainer>
  ) : (
    <PageContainer>
      <Spinner displayed={true} />
    </PageContainer>
  )
}

export default UploadForm
