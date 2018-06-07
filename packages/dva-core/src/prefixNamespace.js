import warning from 'warning';
import { isArray } from './utils';
import { NAMESPACE_SEP } from './constants';

/**
 *
 * @param {object} obj reducers/effects
 * @param {string} namespace model's namespace
 * @param {string} type typeof the `obj`: reducer|effect
 */
function prefix(obj, namespace, type) {
  return Object.keys(obj).reduce((memo, key) => {
    warning(
      key.indexOf(`${namespace}${NAMESPACE_SEP}`) !== 0,
      `[prefixNamespace]: ${type} ${key} should not be prefixed with namespace ${namespace}`
    );
    const newKey = `${namespace}${NAMESPACE_SEP}${key}`;
    memo[newKey] = obj[key];
    return memo;
  }, {});
}

/**
 *
 * @param {Model} model the model to be prefixed
 * @returns {Model} prefixedmodel
 */
export default function prefixNamespace(model) {
  const { namespace, reducers, effects } = model;

  if (reducers) {
    if (isArray(reducers)) {
      model.reducers[0] = prefix(reducers[0], namespace, 'reducer');
    } else {
      model.reducers = prefix(reducers, namespace, 'reducer');
    }
  }
  if (effects) {
    model.effects = prefix(effects, namespace, 'effect');
  }
  return model;
}
