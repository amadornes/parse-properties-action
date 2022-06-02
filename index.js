import { getInput, setOutput, setFailed } from '@actions/core';
import { parse } from 'properties-file';
import { readFile } from 'fs/promises';

try {
  const file = getInput('file');
  readFile(file, 'utf-8').then(contents => {
    const props = parse(contents);
    Object.entries(props).forEach(([key, val]) => {
      setOutput(key, val);
    });
  }).catch(err => {
    setFailed(err.message);
  });
} catch (error) {
  setFailed(error.message);
}
