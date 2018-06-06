/**
 * 利用发布/订阅模式管理一些全局事件
 * 全局使用一个EventEmitter实例
 * @author roonly
 * @since 2018.6.5
 */

import { EventEmitter } from 'fbemitter'

const emitter = new EventEmitter();

emitter.on = emitter.addListener.bind(emitter);

export default emitter;
