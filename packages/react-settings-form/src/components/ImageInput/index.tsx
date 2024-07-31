import { IconWidget, usePrefix } from '@creatormatrix/react'
import { Input, Upload } from 'antd'
import { InputProps } from 'antd/lib/input'
import cls from 'classnames'
import React, { useContext } from 'react'
import { SettingsFormContext } from '../../shared/context'
import './styles.less'

export interface ImageInputProps extends Omit<InputProps, 'onChange'> {
  value?: string
  onChange?: (value: string) => void
}

export const ImageInput: React.FC<ImageInputProps> = ({
  className,
  style,
  ...props
}) => {
  const prefix = usePrefix('image-input')
  const context = useContext(SettingsFormContext)
  const customRequest = context.getUploadSignAction
    ? async ({ file, onError, onProgress, onSuccess, withCredentials }) => {
        // const formData = new FormData()
        // if (data) {
        //   Object.keys(data).forEach((key) => {
        //     formData.append(key, data[key])
        //   })
        // }
        // formData.append(filename, file)
        const responseData = await context.getUploadSignAction(file)

        const { uploadUrl, fileUrl } = responseData.data
        fetch(uploadUrl, {
          method: 'PUT',
          body: file,
          headers: { 'Content-Type': file.type },
        })
          // axios
          //   .put(uploadUrl, file, {
          //     withCredentials,
          //     headers: { 'Content-Type': file.type },
          //     onUploadProgress: ({ total, loaded }) => {
          //       onProgress(
          //         {
          //           percent: Math.round((loaded / total) * 100).toFixed(2),
          //         },
          //         file
          //       )
          //     },
          //   })
          .then((response) => {
            if (response.status === 200) {
              onSuccess(
                {
                  status: 'success',
                  url: fileUrl,
                  name: file.name,
                },
                file
              )
            } else {
              console.log('upload error.', response)
            }
          })
          .catch(onError)

        return {
          abort() {
            console.log('upload progress is aborted.')
          },
        }
      }
    : undefined
  return (
    <div className={cls(prefix, className)} style={style}>
      <Input
        {...props}
        onChange={(e) => {
          props.onChange?.(e?.target?.['value'])
        }}
        prefix={
          <Upload
            action={context.uploadAction}
            customRequest={customRequest as any}
            itemRender={() => null}
            maxCount={1}
            onChange={(params: any) => {
              const response = params.file?.response
              const url =
                response?.url ||
                response?.downloadURL ||
                response?.imageURL ||
                response?.thumbUrl
              if (!url) return
              props.onChange?.(url)
            }}
          >
            <IconWidget infer="CloudUpload" style={{ cursor: 'pointer' }} />
          </Upload>
        }
      />
    </div>
  )
}

export const BackgroundImageInput: React.FC<ImageInputProps> = (props) => {
  const addBgValue = (value: any) => {
    if (/url\([^)]+\)/.test(value)) {
      return value
    }
    return `url(${value})`
  }
  const removeBgValue = (value: any) => {
    const matched = String(value).match(/url\(\s*([^)]+)\s*\)/)
    if (matched?.[1]) {
      return matched?.[1]
    }
    return value
  }
  return (
    <ImageInput
      value={removeBgValue(props.value)}
      onChange={(url) => {
        props.onChange?.(addBgValue(url))
      }}
    />
  )
}
