# Parse Properties Action

This action parses a Java properties file and outputs its entries.

## Inputs

## `file`
**Required** The path to the properties file.

## Outputs

All the properties defined in the specified properties file.

## Example usage

```yaml
uses: amadornes/parse-properties-action@v1.0
with:
  file: 'gradle.properties'
```
