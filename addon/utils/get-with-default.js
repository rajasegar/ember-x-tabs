import { get } from "@ember/object";

function getWithDefault (object, key, defaultValue) {
  let value = get(object, key);
  if (value === undefined) {
    return defaultValue;
  }
  return value;
}

export { getWithDefault }
