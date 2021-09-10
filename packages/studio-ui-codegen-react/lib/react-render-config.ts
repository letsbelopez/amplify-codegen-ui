import { FrameworkRenderConfig } from '@amzn/studio-ui-codegen';
import { ScriptKind, ScriptTarget, ModuleKind } from 'typescript';

export { ScriptKind, ScriptTarget, ModuleKind } from 'typescript';

export type ReactRenderConfig = FrameworkRenderConfig & {
  script?: ScriptKind;
  target?: ScriptTarget;
  module?: ModuleKind;
};

export function scriptKindToFileExtension(scriptKind: ScriptKind): string {
  switch (scriptKind) {
    case ScriptKind.TS:
      return 'ts';
    case ScriptKind.TSX:
      return 'tsx';
    case ScriptKind.JS:
      return 'js';
    case ScriptKind.JSX:
      return 'jsx';
    default:
      return 'tsx';
  }
}