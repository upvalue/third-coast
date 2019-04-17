import React from 'react';

// common.ts

/**
 * Converts an array to space-separated strings, if it is an array.
 * Used for example for padding 'p1' => 'p1', ['px1', 'py2'] => 'px1 py2'
 */
export const arrayToString = (x: ReadonlyArray<string> | string | undefined) =>
  Array.isArray(x) ? x.join(' ') : x;

/**
 * Extract functional CSS style class names from props
 * @param componentClassName Component class name, always present
 * @param props To extract class names from
 */
export const buildClassNames = (componentClassName: string, props: any) => {
  const classNames = [
    `${componentClassName}`,
    props.bg && `bg-${props.bg}`,
    props.color && `color-${props.color}`,
    props.intent,
    props.minimal && 'minimal',
    props.flex && 'flex',
    arrayToString(
      Array.isArray(props.flex) ? props.flex.filter((f: any) => f !== 'flex') : props.flex
    ),
    arrayToString(props.margin),
    arrayToString(props.padding),
    props.className,
  ];

  return classNames.filter(Boolean).join(' ');
}

/**
 * Create a simple atomic element
 * @param defaultComponent  The component or tag to use if none is specified in props
 * @param componentClassName Classname that will always be added e.g. "button", "view" etc
 * @param props Props
 * @param forwardRef reference to element
 */
export const createAtom = <RefType>(defaultComponent: string, componentClassName: string, props: any, forwardRef: React.Ref<RefType>) => {
  const elementProps: any = {
    ...props,
    className: buildClassNames(componentClassName, props),
    flex: undefined,
    minimal: undefined,
    margin: undefined,
    padding: undefined,
    intent: undefined,
    ref: forwardRef,
  }

  return React.createElement(props.component || defaultComponent, elementProps, props.children);
}
