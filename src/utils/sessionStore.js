export const saveItem = ( key, value ) => {
  value = JSON.stringify(value)
  sessionStorage.setItem( key, value )
}

export const getItem = ( key ) => {
  return JSON.parse(sessionStorage.getItem( key )) || {}
}

export const clearItem = ( key ) => {
  sessionStorage.removeItem( key )
}

export const claerAll = () => {
  sessionStorage.clear()
}