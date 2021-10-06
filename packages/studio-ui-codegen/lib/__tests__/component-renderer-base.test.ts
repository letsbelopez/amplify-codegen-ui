import { TextProps } from '@aws-amplify/ui-react';
import { ComponentRendererBase } from '../component-renderer-base';

class MockComponentRenderer extends ComponentRendererBase<TextProps, string> {
  renderElement(): string {
    return this.component.name || '';
  }
}

describe('ComponentRendererBase', () => {
  test('renderElement', () => {
    const name = 'MyText';
    expect(
      new MockComponentRenderer({
        componentType: 'Text',
        name,
        properties: {},
      }).renderElement(),
    ).toEqual(name);
  });
});
