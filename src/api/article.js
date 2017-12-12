import api from '.'

const PREFIX = '/article'

/**
 * @typedef {object} Article
 * @property {string} title
 * @property {string} description
 * @property {string} content
 * @property {string[]} tags
 */

/**
 * 创建一篇文章
 * @param {Article} article
 */
export const createOne = article => api.post(`${PREFIX}`, article)

/**
 * 获取一篇文章详情
 * @param {number} aid
 */
export const getOneDetail = aid => api.get(`${PREFIX}/${aid}`)

/**
 * 删除掉一篇文章
 * @param {number} aid
 */
export const deleteOne = aid => api.delete(`${PREFIX}/${aid}`)

/**
 * 修改一篇文章
 * @param {number} aid
 * @param {Article} data
 */
export const updateOne = (aid, data) => api.put(`${PREFIX}/${aid}`)

/**
 * 可以利用服务端进行查找，获取所有过滤之后的 articles
 * @param {string} searchKey
 */
export const retrieveAll = (searchKey) => api.get(`${PREFIX}${searchKey ? '?key=' + searchKey : ''}`)
