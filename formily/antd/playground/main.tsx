import './main.less'

import {
  GlobalRegistry,
  IResourceLike,
  KeyCode,
  Shortcut,
  createDesigner,
  createResource,
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
  ViewToolsWidget,
  ViewportPanel,
  Workspace,
  WorkspacePanel,
} from '@creatormatrix/react'
import {
  SettingsForm,
  setNpmCDNRegistry,
} from '@creatormatrix/react-settings-form'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import {
  ArrayCards,
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
import { saveSchema } from './service'
import {
  ActionsWidget,
  LogoWidget,
  MarkupSchemaWidget,
  PreviewWidget,
  SchemaEditorWidget,
} from './widgets'

import { createForm } from '@formily/core'
import { ConfigProvider, Button } from 'antd'
import { ServiceSetter } from './widgets/ServiceSetter'
import { FieldResourceWidget } from './widgets/FieldResourceWidget'
// setNpmCDNRegistry('//unpkg.com')
setNpmCDNRegistry('/public', false)

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
                sources={[ArrayCards, ArrayTable]}
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
              scope={{ abc: 'hello world' }}
              buildSchema={(schema) => {
                if (schema?.properties?.['field-group']?.properties?.name) {
                  const settingSchema = { ...schema }
                  settingSchema?.properties?.['field-group']?.properties?.name[
                    'x-pattern'
                  ] = 'readPretty'
                  return settingSchema
                }
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
