/*
  Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License").
  You may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
 */
import { generateWithAmplifyFormRenderer } from './__utils__';

describe('amplify form renderer tests', () => {
  describe('datastore form tests', () => {
    it('should generate a create form', () => {
      const { componentText, declaration } = generateWithAmplifyFormRenderer(
        'forms/post-datastore-create',
        'datastore/post',
      );
      expect(componentText).toContain('DataStore.save');
      expect(componentText).toMatchSnapshot();
      expect(declaration).toMatchSnapshot();
    });

    it('should generate a update form', () => {
      const { componentText, declaration } = generateWithAmplifyFormRenderer(
        'forms/post-datastore-update',
        'datastore/post',
      );
      expect(componentText).toContain('DataStore.save');
      expect(componentText).toMatchSnapshot();
      expect(declaration).toMatchSnapshot();
    });
  });

  describe('custom form tests', () => {
    it('should render a custom backed form', () => {
      const { componentText, declaration } = generateWithAmplifyFormRenderer('forms/post-custom-create', undefined);
      expect(componentText.replace(/\s/g, '')).toContain('onSubmit:customDataFormOnSubmit');
      expect(componentText).toMatchSnapshot();
      expect(declaration).toMatchSnapshot();
    });
  });
});