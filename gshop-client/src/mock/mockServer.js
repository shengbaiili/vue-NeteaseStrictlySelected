import Mock from 'mockjs'
import msite from './msite.json'


Mock.mock('/cateList', {code: 0, msite: msite.cateList})

console.log('执行了mockServer')
