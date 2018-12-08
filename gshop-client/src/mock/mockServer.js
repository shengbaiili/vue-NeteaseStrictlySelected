import Mock from 'mockjs'
import msite from './msite.json'


Mock.mock('/cateList', {code: 0, data: msite.cateList})
Mock.mock('/kingKongList', {code: 0, data: msite.kingKongModule.kingKongList})
Mock.mock('/policyDescList', {code: 0, data: msite.policyDescList})
console.log('执行了mockServer')
