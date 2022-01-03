import { useEffect, useState } from 'react'
import Router from 'next/router'
import { Field, Form, Formik } from 'formik'
import { proxy } from 'valtio'
import { actions } from '../../store/store'

interface MyFormValues {
  title: string
  content: string
}

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [showContent, setShowContent] = useState(true)

  const initialValues: MyFormValues = { title: title, content: content }
  const proxyTitleandContent = proxy({ title: title, content: content })
  const proxyShowContent = proxy({ showContent: showContent })

  useEffect(
    () => actions.setPostState(proxyTitleandContent),
    [proxyTitleandContent]
  )
  useEffect(
    () => actions.setContentState(proxyShowContent.showContent),
    [proxyShowContent.showContent, showContent]
  )

  return (
    <div className="text-slate-700 font-haas rounded-lg outline-4 outline-black flex-1">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          try {
            const body = { title, content }
            await fetch(`https://localhost:3000/api/post`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
            })
            await Router.push('/success')
          } catch (error) {
            console.error(error)
          }

          actions.setSubmitting(false)
        }}
      >
        <Form className="flex flex-col rounded-lg overflow-clip">
          <Field
            id="title"
            name="title"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" my-4 p-2 shadow-sm rounded-lg"
          />
          <br />
          {showContent ? (
            <Field
              id="content"
              name="content"
              placeholder="content"
              value={content}
              as="textarea"
              className="form-textarea resize-none p-2 mb-2"
              type="text"
              onChange={(e) => setContent(e.target.value)}
            />
          ) : (
            ''
          )}
        </Form>
      </Formik>
      <form>
        <input
          type="checkbox"
          id="showHideContent"
          name="showcontent"
          onInputCapture={() => setShowContent(!showContent)}
        />
        <label htmlFor="showcontent">Hide Content Sticker from Post</label>
      </form>
    </div>
  )
}

export default PostForm
