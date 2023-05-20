import 'react-dropzone-uploader/dist/styles.css'
import Dropzone, { IDropzoneProps, ILayoutProps } from 'react-dropzone-uploader'
import { Source } from "../components/Source"

// add type defs to custom LayoutComponent prop to easily inspect props passed to injected components
const Layout = ({ input, previews, submitButton, dropzoneProps, files, extra: { maxFiles } }: ILayoutProps) => {
    return (
      <div>
        {previews}
  
        <div {...dropzoneProps}>{files.length < maxFiles && input}</div>
  
        {files.length > 0 && submitButton}
      </div>
    )
  }

const Upload = () => {
  
  // called every time a file's `status` changes
  const handleChangeStatus: IDropzoneProps['onChangeStatus'] = ({ meta }, status) => {
    console.log(status, meta)
  }

  // add type defs to function props to get TS support inside function bodies,
  // and not just where functions are passed as props into Dropzone
  // specify upload params and url for your files
  const getUploadParams: IDropzoneProps['getUploadParams'] = () => ({ url: 'http://35.186.185.172:80/' })

   // receives array of files that are done uploading when submit button is clicked
  const handleSubmit: IDropzoneProps['onSubmit'] = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <>
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            LayoutComponent={Layout}
            onSubmit={handleSubmit}
            inputContent="Upload your data files here"
            accept="image/*,audio/*,video/*"
        />
        <br/>
        <br/>
        <div>We can fetch data automatically from the following sites with your permission.</div>
        <br/>
        <br/>
        <Source image="./strava.png"/>
        <Source image="./gopro.jpeg"/>
        <Source image="./sugarwod.jpeg"/>
        <Source image="./wodify.jpeg"/>
    </>
    )
}

export default Upload