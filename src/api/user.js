import api from '.'

const PREFIX = '/user'

/**
 * @typedef {object} User
 * @property {string} username
 * @property {string} password
 * @property {string} email
 * @property {string} nickname
 * @property {string} github
 */

/**
 * 登陆接口
 * @param {string} username
 * @param {string} password
 */
export const login = (username, password) => api.post(`${PREFIX}/login`, { username, password })

/**
 * 登出接口
 */
export const logout = () => api.post(`${PREFIX}/logout`)

/**
 * 注册接口
 * @param {User} user
 */
export const register = user => api.post(`${PREFIX}`, user)

/**
 * 更新用户的接口
 * @param {number} uid
 * @param {User} user
 */
export const update = (uid, user) => api.put(`${PREFIX}/${uid}`)

/**
 * 获取用户的所有 tags
 * @param {number} uid
 */
export const retrieveTags = uid => api.get(`${PREFIX}/${uid}/tags`)

/**
 * 获取用户的所有 articles
 * @param {number} uid
 */
export const retrieveArticles = uid => api.get(`${PREFIX}/${uid}/articles`)
