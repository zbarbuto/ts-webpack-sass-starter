/**
 * This should get tree shaken
 */
export function foo() {
  return 'foo';
}

/**
 * This should get uglified down to just the string
 * but not tree shaken
 */
export function bar() {
  return 'bar';
}
