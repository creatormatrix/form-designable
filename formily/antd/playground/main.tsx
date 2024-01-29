import 'antd/dist/antd.less'
import React, { useMemo } from 'react'
import ReactDOM from 'react-dom'
import {
  Designer,
  DesignerToolsWidget,
  ViewToolsWidget,
  Workspace,
  OutlineTreeWidget,
  ResourceWidget,
  HistoryWidget,
  StudioPanel,
  CompositePanel,
  WorkspacePanel,
  ToolbarPanel,
  ViewportPanel,
  ViewPanel,
  SettingsPanel,
  ComponentTreeWidget,
} from '@creatormatrix/react'
import {
  SettingsForm,
  setNpmCDNRegistry,
} from '@creatormatrix/react-settings-form'
import {
  createDesigner,
  GlobalRegistry,
  Shortcut,
  KeyCode,
} from '@creatormatrix/core'
import {
  LogoWidget,
  ActionsWidget,
  PreviewWidget,
  SchemaEditorWidget,
  MarkupSchemaWidget,
} from './widgets'
import { saveSchema } from './service'
import {
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
  ObjectContainer,
  ArrayTable,
  Space,
  FormTab,
  FormCollapse,
  FormLayout,
  FormGrid,
} from '../src'
import {
  DataSourceSetter,
  ReactionsSetter,
  ValidatorSetter,
} from '@creatormatrix/formily-setters'
import { DesignerLayoutContext } from '@creatormatrix/react'

import { ConfigProvider } from 'antd'
import { createForm } from '@formily/core'
// setNpmCDNRegistry('//unpkg.com')
setNpmCDNRegistry('//cdn.jsdelivr.net/npm')

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
        <ConfigProvider componentSize={'small'}>
          <DesignerLayoutContext.Provider
            value={{
              theme: 'light',
              prefixCls: 'dn-',
              position: 'fixed',
            }}
          >
            <ReactionsSetter
              onChange={(v) => console.log(v)}
              independence={true}
              outSource={[
                { label: '商品类型 (productType)', value: 'productType' },
                { label: '商品价格 (price)', value: 'price' },
              ]}
            />
            <DataSourceSetter
              onChange={(v) => {
                console.log('DataSourceSetter', v)
              }}
            />
            <ValidatorSetter
              independence={true}
              onChange={(v) => console.log(v)}
            ></ValidatorSetter>
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
        </ConfigProvider>
      </div>
      <Designer engine={engine}>
        <StudioPanel logo={<LogoWidget />} actions={<ActionsWidget />}>
          <CompositePanel>
            <CompositePanel.Item title="panels.Component" icon="Component">
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
            />
          </SettingsPanel>
        </StudioPanel>
      </Designer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
