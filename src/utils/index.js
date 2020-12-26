
export const createReducer = (initialState, handlerMap) => (state = initialState, action) => {
  const handler = (action && action.type) ? handlerMap[action.type] : undefined
  return handler ? handler(state, action) : state
}

export const keyMirror = (obj) => {
  let key
  let mirrored = {}
  if (obj && typeof obj === 'object') {
    for (key in obj) {
      if ({}.hasOwnProperty.call(obj, key)) {
        mirrored[key] = key
      }
    }
  }
  return mirrored
}

export const deepClone = (obj) => {
  let proto = Object.getPrototypeOf(obj)
  return Object.assign({}, Object.create(proto), obj)
}

/**
 * 数组格式转树状结构
 * @param   {array}     array
 * @param   {String}    id
 * @param   {String}    pid
 * @param   {String}    children
 * @return  {Array}
 */
export const arrayToTree = (array, id = 'id', pid = 'pid', children = 'children') => {
  let data = array.map(item => ({ ...item }))
  let result = []
  let hash = {}
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index]
  })

  data.forEach((item) => {
    let hashVP = hash[item[pid]]
    if (hashVP) {
      !hashVP[children] && (hashVP[children] = [])
      hashVP[children].push(item)
    } else {
      result.push(item)
    }
  })
  return result
}

export const queryArray = (array, key, keyAlias = 'key') => {
  if (!!array && array instanceof Array) {
    return array.find(item => item[keyAlias] === key)
  }
  return null
}

