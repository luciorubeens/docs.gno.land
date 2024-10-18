import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import { useColorMode } from '@docusaurus/theme-common';

export default function CodeBlockWrapper(props) {
  const {colorMode} = useColorMode()

  if (props.className === 'language-go') {
    const files = { 'main.gno': props.children }
    return (<gno-embed-playground files={JSON.stringify(files)} theme={colorMode} />)
  }

  return (
    <>
      <CodeBlock {...props} />
    </>
  );
}
