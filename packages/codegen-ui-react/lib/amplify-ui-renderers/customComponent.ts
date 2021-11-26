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
import { FrontendManagerComponentChild } from '@aws-amplify/codegen-ui';
import { JsxChild, JsxElement, factory } from 'typescript';
import { ReactComponentWithChildrenRenderer } from '../react-component-with-children-renderer';

export default class CustomComponentRenderer<TPropIn> extends ReactComponentWithChildrenRenderer<TPropIn> {
  renderElement(renderChildren: (children: FrontendManagerComponentChild[]) => JsxChild[]): JsxElement {
    const children = this.component.children ? this.component.children : [];
    const element = factory.createJsxElement(
      this.renderOpeningElement(),
      renderChildren(children),
      factory.createJsxClosingElement(factory.createIdentifier(this.component.componentType)),
    );

    this.importCollection.addImport(`./${this.component.componentType}`, 'default');

    return element;
  }
}
