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
import React from 'react';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import ViewTest from './ui-components/ViewTest';
import ViewWithButton from './ui-components/ViewWithButton';
import CustomButton from './ui-components/CustomButton';
import BasicComponentBadge from './ui-components/BasicComponentBadge';
import BasicComponentView from './ui-components/BasicComponentView';
import BasicComponentButton from './ui-components/BasicComponentButton';
import BasicComponentCard from './ui-components/BasicComponentCard';
import BasicComponentCollection from './ui-components/BasicComponentCollection';
import BasicComponentText from './ui-components/BasicComponentText';
import ComponentWithConcatenation from './ui-components/ComponentWithConcatenation';
import ComponentWithConditional from './ui-components/ComponentWithConditional';
import BasicComponentDivider from './ui-components/BasicComponentDivider';
import BasicComponentFlex from './ui-components/BasicComponentFlex';
import BasicComponentImage from './ui-components/BasicComponentImage';
import BasicComponentCustomRating from './ui-components/BasicComponentCustomRating';
import ComponentWithVariant from './ui-components/ComponentWithVariant';
import theme from './ui-components/MyTheme';
/* eslint-enable import/extensions */

export default function ComponentTests() {
  return (
    /* components prop is required. https://github.com/aws-amplify/amplify-ui/issues/575 */
    <AmplifyProvider theme={theme} components={{}}>
      <h1>Generated Component Tests</h1>
      <div id={'basic-components'}>
        <h2>Basic Components</h2>
        <BasicComponentBadge />
        <BasicComponentView />
        <BasicComponentButton />
        <BasicComponentCard />
        <BasicComponentCollection items={[0, 1]} />
        <BasicComponentDivider />
        <BasicComponentFlex />
        <BasicComponentText />
        <BasicComponentImage />
        <BasicComponentCustomRating />
      </div>
      <ViewTest />
      <ViewWithButton />
      <CustomButton />
      {/* <TextWithDataBinding /> // TODO: add back in with data binding tests */}
      <div id="concat-and-conditional">
        <h2>Concatenation and Conditional Tests</h2>
        <ComponentWithConcatenation />
        <ComponentWithConcatenation
          buttonUser={{
            firstname: 'Norm',
            lastname: 'Gunderson',
            isLoggedIn: true,
            loggedInColor: 'blue',
            loggedOutColor: 'red',
            age: -1,
          }}
        />
        <ComponentWithConditional
          id="conditional1"
          buttonUser={{
            firstname: 'Disabled',
            lastname: 'Conditional Button',
            isLoggedIn: false,
            loggedInColor: 'blue',
            loggedOutColor: 'red',
            age: -1,
          }}
        />
        <ComponentWithConditional
          id="conditional2"
          buttonUser={{
            firstname: 'May Vote',
            lastname: 'Conditional Button',
            age: 19,
            isLoggedIn: true,
            loggedInColor: 'blue',
            loggedOutColor: 'red',
          }}
        />
        <ComponentWithConditional
          id="conditional3"
          buttonUser={{
            firstname: 'May Not Vote',
            lastname: 'Conditional Button',
            age: 16,
            isLoggedIn: true,
            loggedInColor: 'blue',
            loggedOutColor: 'red',
          }}
        />
      </div>
      <div id="variants">
        <h2>Variants</h2>
        <ComponentWithVariant id="variant1" variant="primary" />
        <ComponentWithVariant id="variant2" variant="secondary" />
        <ComponentWithVariant id="variant3" variant="primary" size="large" />
      </div>
    </AmplifyProvider>
  );
}
