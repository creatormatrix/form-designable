import loader from '@monaco-editor/loader'

const Registry = {
  cdn: '//cdn.jsdelivr.net/npm',
}

export const setNpmCDNRegistry = (registry: string, cdn?: boolean) => {
  Registry.cdn = registry

  const isCDN = cdn === undefined ? true : cdn

  loader.config({
    paths: {
      vs: isCDN ? `${registry}/monaco-editor@0.43.0/min/vs` : `${registry}/vs`,
    },
  })
}

export const getNpmCDNRegistry = () => String(Registry.cdn).replace(/\/$/, '')
