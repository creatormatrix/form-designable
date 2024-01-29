import { each } from '@designable/shared'
import { Path } from '@formily/path'
import { observable } from '@formily/reactive'
import { mergeLocales, lowerSnake, getBrowserLanguage } from './internals'
import { isBehaviorHost } from './externals'
import { isBehaviorList } from './externals'
let getISOCode = function (language) {
  let isoCode = DESIGNER_LANGUAGE_STORE.value
  let lang = lowerSnake(language)
  if (DESIGNER_LOCALES_STORE.value[lang]) {
    return lang
  }
  each(DESIGNER_LOCALES_STORE.value, function (_, key) {
    if (key.indexOf(lang) > -1 || String(lang).indexOf(key) > -1) {
      isoCode = key
      return false
    }
  })
  return isoCode
}
let reSortBehaviors = function (target, sources) {
  let findTargetBehavior = function (behavior) {
    return target.includes(behavior)
  }
  let findSourceBehavior = function (name) {
    for (let key in sources) {
      let Behavior = sources[key].Behavior
      for (let i = 0; i < Behavior.length; i++) {
        if (Behavior[i].name === name) return Behavior[i]
      }
    }
  }
  each(sources, function (item) {
    if (!item) return
    if (!isBehaviorHost(item)) return
    let Behavior = item.Behavior
    each(Behavior, function (behavior) {
      if (findTargetBehavior(behavior)) return
      let name = behavior.name
      each(behavior.extends, function (dep) {
        let behavior = findSourceBehavior(dep)
        if (!behavior)
          throw new Error(
            'No '.concat(dep, ' behavior that ').concat(name, ' depends on')
          )
        if (!findTargetBehavior(behavior)) {
          target.unshift(behavior)
        }
      })
      target.push(behavior)
    })
  })
}
let DESIGNER_BEHAVIORS_STORE = observable.ref([])
let DESIGNER_ICONS_STORE = observable.ref({})
var DESIGNER_LOCALES_STORE = observable.ref({})
var DESIGNER_LANGUAGE_STORE = observable.ref(getBrowserLanguage())
let DESIGNER_GlobalRegistry = {
  setDesignerLanguage: function (lang) {
    DESIGNER_LANGUAGE_STORE.value = lang
  },
  setDesignerBehaviors: function (behaviors) {
    DESIGNER_BEHAVIORS_STORE.value = behaviors.reduce(function (buf, behavior) {
      if (isBehaviorHost(behavior)) {
        return buf.concat(behavior.Behavior)
      } else if (isBehaviorList(behavior)) {
        return buf.concat(behavior)
      }
      return buf
    }, [])
  },
  getDesignerBehaviors: function (node) {
    return DESIGNER_BEHAVIORS_STORE.value.filter(function (pattern) {
      return pattern.selector(node)
    })
  },
  getDesignerIcon: function (name) {
    return DESIGNER_ICONS_STORE[name]
  },
  getDesignerLanguage: function () {
    return getISOCode(DESIGNER_LANGUAGE_STORE.value)
  },
  getDesignerMessage: function (token, locales) {
    let lang = getISOCode(DESIGNER_LANGUAGE_STORE.value)
    let locale = locales ? locales[lang] : DESIGNER_LOCALES_STORE.value[lang]
    if (!locale) {
      for (let key in DESIGNER_LOCALES_STORE.value) {
        let message = Path.getIn(
          DESIGNER_LOCALES_STORE.value[key],
          lowerSnake(token)
        )
        if (message) return message
      }
      return
    }
    return Path.getIn(locale, lowerSnake(token))
  },
  registerDesignerIcons: function (map) {
    Object.assign(DESIGNER_ICONS_STORE, map)
  },
  registerDesignerLocales: function () {
    let packages = []
    for (let _i = 0; _i < arguments.length; _i++) {
      packages[_i] = arguments[_i]
    }
    packages.forEach(function (locales) {
      mergeLocales(DESIGNER_LOCALES_STORE.value, locales)
    })
  },
  registerDesignerBehaviors: function () {
    let packages = []
    for (let _i = 0; _i < arguments.length; _i++) {
      packages[_i] = arguments[_i]
    }
    let results = []
    packages.forEach(function (sources) {
      reSortBehaviors(results, sources)
    })
    if (results.length) {
      DESIGNER_BEHAVIORS_STORE.value = results
    }
  },
}
export var GlobalRegistry = DESIGNER_GlobalRegistry
