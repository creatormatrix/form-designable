import {
  createDesigner,
  createResource,
  GlobalRegistry,
  IResourceLike,
  KeyCode,
  Shortcut,
} from '@creatormatrix/core'
import {
  DataSourceSetter,
  ReactionsSetter,
  ValidatorSetter,
} from '@creatormatrix/formily-setters'
import {
  ComponentTreeWidget,
  CompositePanel,
  Designer,
  DesignerLayoutContext,
  DesignerToolsWidget,
  HistoryWidget,
  OutlineTreeWidget,
  ResourceWidget,
  SettingsPanel,
  StudioPanel,
  ToolbarPanel,
  ViewPanel,
  ViewportPanel,
  ViewToolsWidget,
  Workspace,
  WorkspacePanel,
} from '@creatormatrix/react'
import {
  setNpmCDNRegistry,
  SettingsForm,
} from '@creatormatrix/react-settings-form'
import { contextExpressions } from '@creatormatrix/shared'
import { createForm } from '@formily/core'
import { Button, ConfigProvider } from 'antd'
import axios from 'axios'
import React, { useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom'
import {
  ArrayCards,
  ArrayList,
  ArrayTable,
  Card,
  Cascader,
  Checkbox,
  DatePicker,
  Field,
  Form,
  FormCollapse,
  FormGrid,
  FormLayout,
  FormTab,
  Input,
  NumberPicker,
  ObjectContainer,
  Password,
  Radio,
  Rate,
  Select,
  Slider,
  Space,
  Switch,
  Text,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from '../src'
import './main.less'
import { saveSchema } from './service'
import {
  ActionsWidget,
  LogoWidget,
  MarkupSchemaWidget,
  PreviewWidget,
  SchemaEditorWidget,
} from './widgets'
import { FieldResourceWidget } from './widgets/FieldResourceWidget'
import { ServiceSetter } from './widgets/ServiceSetter'

// setNpmCDNRegistry('//unpkg.com')
setNpmCDNRegistry('http://127.0.0.1:3000', false)

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '输入控件',
      Layouts: '布局组件',
      Arrays: '自增组件',
      Displays: '展示组件',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Layouts: 'Layouts',
      Arrays: 'Arrays',
      Displays: 'Displays',
    },
  },
  'ko-KR': {
    sources: {
      Inputs: '입력',
      Layouts: '레이아웃',
      Arrays: '배열',
      Displays: '디스플레이',
    },
  },
})

const App = () => {
  const engine = useMemo(
    () =>
      createDesigner({
        shortcuts: [
          new Shortcut({
            codes: [
              [KeyCode.Meta, KeyCode.S],
              [KeyCode.Control, KeyCode.S],
            ],
            handler(ctx) {
              saveSchema(ctx.engine)
            },
          }),
        ],
        rootComponentName: 'Form',
      }),
    []
  )
  const form = useMemo(() => createForm(), [])

  useEffect(() => {
    const cssVars = {
      '--gm-color-text': '#333333',
      '--gm-color-secondary': '#666',
      '--gm-color-primary': '#0000ff',
      '--gm-color-success': '#00ff00',
    }
    // 构建包含所有 CSS 变量的样式字符串
    const cssVarsString: string[] = []
    for (const [key, value] of Object.entries(cssVars)) {
      cssVarsString.push(`${key}: ${value}; `)
    }
    // 创建一个新的 <style> 元素
    const styleElement = document.createElement('style')
    styleElement.textContent = `:root {${cssVarsString.join('')}}`

    // 将 <style> 元素添加到文档的 <head> 中
    document.head.appendChild(styleElement)
  }, [])
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          zIndex: 1000,
        }}
      >
        <DesignerLayoutContext.Provider
          value={{
            theme: 'light',
            prefixCls: 'dn-',
            position: 'fixed',
          }}
        >
          <ServiceSetter />
          <ReactionsSetter
            onChange={(v) => console.log(v)}
            independence={true}
            outSource={[
              { label: '商品类型 (productType)', value: 'productType' },
              { label: '商品价格 (price)', value: 'price' },
            ]}
          >
            <Button>联动规则</Button>
          </ReactionsSetter>
          <DataSourceSetter
            onChange={(v) => {
              console.log('DataSourceSetter', v)
            }}
            value={[
              { label: '商品类型 (productType)', value: 'productType' },
              { label: '商品价格 (price)', value: 'price' },
            ]}
          >
            <Button>静态枚举</Button>
          </DataSourceSetter>
          <ValidatorSetter
            title="校验规则设置"
            independence={true}
            value={'email'}
            onChange={(v) => console.log(v)}
          >
            <Button>校验规则</Button>
          </ValidatorSetter>
          {/* <FormContext.Provider value={form}>
              <FieldContext.Provider
                value={form.createField({ name: 'abc', title: '校验' })}
              >
                <ValidatorSetter
                  onChange={(v) => console.log(v)}
                ></ValidatorSetter>
              </FieldContext.Provider>
            </FormContext.Provider> */}
        </DesignerLayoutContext.Provider>
      </div>
      <Designer engine={engine}>
        <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
          <CompositePanel>
            <CompositePanel.Item title="panels.Component" icon="Component">
              <FieldResourceWidget
                title="Fields"
                sources={
                  Array(6)
                    .fill(null)
                    .map((i, idx) => {
                      const Field: any = {}
                      Field.Resource = createResource({
                        icon: 'InputSource',
                        title: `Text ${idx}`,
                        elements: [
                          {
                            componentName: 'Field',
                            props: {
                              name: `text${idx}`,
                              title: `Text ${idx}`,
                              'x-component': 'Input',
                              'x-decorator': 'FormItem',
                            },
                          },
                        ],
                      })

                      return Field
                    }) as IResourceLike[]
                }
              />
              <ResourceWidget
                title="sources.Inputs"
                sources={[
                  Input,
                  Password,
                  NumberPicker,
                  Rate,
                  Slider,
                  Select,
                  TreeSelect,
                  Cascader,
                  Transfer,
                  Checkbox,
                  Radio,
                  DatePicker,
                  TimePicker,
                  Upload,
                  Switch,
                  ObjectContainer,
                ]}
              />
              <ResourceWidget
                title="sources.Layouts"
                sources={[
                  Card,
                  FormGrid,
                  FormTab,
                  FormLayout,
                  FormCollapse,
                  Space,
                ]}
              />
              <ResourceWidget
                title="sources.Arrays"
                sources={[ArrayCards, ArrayTable, ArrayList]}
              />
              <ResourceWidget title="sources.Displays" sources={[Text]} />
            </CompositePanel.Item>
            <CompositePanel.Item title="panels.OutlinedTree" icon="Outline">
              <OutlineTreeWidget />
            </CompositePanel.Item>
            <CompositePanel.Item title="panels.History" icon="History">
              <HistoryWidget />
            </CompositePanel.Item>
          </CompositePanel>
          <Workspace id="form">
            <WorkspacePanel>
              <ToolbarPanel>
                <DesignerToolsWidget />
                <ViewToolsWidget
                  use={['DESIGNABLE', 'JSONTREE', 'MARKUP', 'PREVIEW']}
                />
              </ToolbarPanel>
              <ViewportPanel style={{ height: '100%' }}>
                <ViewPanel type="DESIGNABLE">
                  {() => (
                    <ComponentTreeWidget
                      components={{
                        Form,
                        Field,
                        Input,
                        Select,
                        TreeSelect,
                        Cascader,
                        Radio,
                        Checkbox,
                        Slider,
                        Rate,
                        NumberPicker,
                        Transfer,
                        Password,
                        DatePicker,
                        TimePicker,
                        Upload,
                        Switch,
                        Text,
                        Card,
                        ArrayCards,
                        ArrayTable,
                        ArrayList,
                        Space,
                        FormTab,
                        FormCollapse,
                        FormGrid,
                        FormLayout,
                        ObjectContainer,
                      }}
                    />
                  )}
                </ViewPanel>
                <ViewPanel type="JSONTREE" scrollable={false}>
                  {(tree, onChange) => (
                    <SchemaEditorWidget tree={tree} onChange={onChange} />
                  )}
                </ViewPanel>
                <ViewPanel type="MARKUP" scrollable={false}>
                  {(tree) => <MarkupSchemaWidget tree={tree} />}
                </ViewPanel>
                <ViewPanel type="PREVIEW">
                  {(tree) => <PreviewWidget tree={tree} />}
                </ViewPanel>
              </ViewportPanel>
            </WorkspacePanel>
          </Workspace>
          <SettingsPanel title="panels.PropertySettings">
            <SettingsForm
              uploadAction="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              getUploadSignAction={async (file: File) => {
                const { data: responseData }: any = await axios.post(
                  'http://192.168.126.21:8071/appfactory/generatePresignedUrl',
                  {
                    fileName: file.name,
                    fileLength: file.size,
                    fileType: file.type,
                  },
                  {
                    withCredentials: true,
                    headers: {
                      'X-Platform': 'GM',
                      'X-Access-Token':
                        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MjM2NDk0NTAsInVzIjoiODYyZDI5YjUyZTlmNjI0NWVjMjk3YWUyMWI2NGMyZWY4NWRhIn0.aManf_2YvBPzu2YbmBu3DEn4uP0u2fqgLiRJdFq9uDU',
                    },
                  }
                )
                return responseData
              }}
              theme={{
                backgroundColor: {
                  default: '--gm-background-color',
                },
                font: {
                  size: '--gm-font-size',
                  size1: '--gm-font-size-1',
                  size2: '--gm-font-size-2',
                  size3: '--gm-font-size-3',
                  size4: '--gm-font-size-4',
                  size5: '--gm-font-size-5',
                  size6: '--gm-font-size-6',
                  size7: '--gm-font-size-7',
                  size8: '--gm-font-size-8',
                  size9: '--gm-font-size-9',
                  size10: '--gm-font-size-10',
                },
                color: {
                  text: '--gm-color-text',
                  textSecondary: '--gm-color-secondary',
                  primary: '--gm-color-primary',
                  success: '--gm-color-success',
                },
                boxShadow: {
                  default: '--gm-box-shadow',
                  secondary: '--gm-box-shadow-secondary',
                },
                margin: {
                  default: '--gm-margin',
                  xs: '--gm-margin-xs',
                  sm: '--gm-margin-sm',
                  md: '--gm-margin-md',
                  lg: '--gm-margin-md',
                  xl: '--gm-margin-xl',
                },
                padding: {
                  default: '--gm-padding',
                  xs: '--gm-padding-xs',
                  sm: '--gm-padding-sm',
                  md: '--gm-padding-md',
                  lg: '--gm-padding-md',
                  xl: '--gm-padding-xl',
                },
                borderRadius: {
                  xs: '--gm-border-radius-xs',
                  sm: '--gm-border-radius-sm',
                  md: '--gm-border-radius-md',
                },
                borderColor: {
                  default: '--gm-border-color',
                  secondary: '--gm-border-color-secondary',
                },
              }}
              scope={{ abc: 'hello world' }}
              expressions={() => {
                return contextExpressions()
              }}
              buildSchema={(schema) => {
                // if (schema?.properties?.['field-group']?.properties?.name) {
                //   const settingSchema = { ...schema }
                //   settingSchema?.properties?.['field-group']?.properties?.name[
                //     'x-pattern'
                //   ] = 'readPretty'
                //   return settingSchema
                // }
                return schema
              }}
            />
          </SettingsPanel>
        </StudioPanel>
      </Designer>
    </div>
  )
}

ReactDOM.render(
  <ConfigProvider componentSize={'small'} prefixCls="gd">
    <App />
  </ConfigProvider>,
  document.getElementById('root')
)
